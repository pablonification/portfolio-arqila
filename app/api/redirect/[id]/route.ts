import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv';

interface UrlData {
  originalUrl: string;
  shortId: string;
  createdAt: string;
  clickCount: number;
  createdBy: string;
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    // Get URL data
    const urlData = await kv.get(`short:${id}`) as UrlData;
    
    if (!urlData) {
      return NextResponse.json({ error: 'Short URL not found' }, { status: 404 });
    }

    // Track click
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    const clickData = {
      timestamp: new Date().toISOString(),
      userAgent: body.userAgent || '',
      referer: body.referer || '',
      ip: ip.split(',')[0].trim(),
    };

    // Update click count and add to history (fire and forget)
    try {
      const updatedData = {
        ...urlData,
        clickCount: (urlData.clickCount || 0) + 1
      };
      
      // Don't await these operations to speed up redirect
      Promise.all([
        kv.set(`short:${id}`, updatedData),
        kv.lpush(`clicks:${id}`, JSON.stringify(clickData)),
        kv.expire(`clicks:${id}`, 86400 * 30), // 30 days
      ]).catch(err => console.error('Error tracking click:', err));
    } catch (trackError) {
      console.error('Error setting up click tracking:', trackError);
    }

    // Return the URL for client-side redirect
    return NextResponse.json({ url: urlData.originalUrl });
  } catch (error) {
    console.error('Error in redirect API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 