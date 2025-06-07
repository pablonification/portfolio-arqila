import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv';
import { nanoid } from 'nanoid';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();
    
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // Validate URL
    try {
      new URL(url);
    } catch {
      return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
    }

    // Check if URL already exists
    const existingId = await kv.get(`url:${url}`);
    if (existingId) {
      return NextResponse.json({ 
        shortUrl: `https://arqilasp.com/s/${existingId}`,
        id: existingId
      });
    }

    // Generate short ID
    const shortId = nanoid(6);
    
    // Store URL and metadata
    const urlData = {
      originalUrl: url,
      shortId,
      createdAt: new Date().toISOString(),
      clickCount: 0,
      createdBy: request.ip || 'unknown'
    };

    // Store in Redis
    await kv.set(`short:${shortId}`, urlData);
    await kv.set(`url:${url}`, shortId);
    
    return NextResponse.json({ 
      shortUrl: `https://arqilasp.com/s/${shortId}`,
      id: shortId
    });
  } catch (error) {
    console.error('Error creating short URL:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 