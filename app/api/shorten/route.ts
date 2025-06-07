import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv';
import { nanoid } from 'nanoid';

export async function POST(request: NextRequest) {
  try {
    const { url, customAlias } = await request.json();
    
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // Validate URL
    try {
      new URL(url);
    } catch {
      return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
    }

    let shortId: string;

    // Handle custom alias
    if (customAlias) {
      // Validate custom alias
      if (!/^[a-zA-Z0-9_-]+$/.test(customAlias)) {
        return NextResponse.json({ 
          error: 'Custom alias can only contain letters, numbers, hyphens, and underscores' 
        }, { status: 400 });
      }

      // Check if custom alias already exists
      const existingCustom = await kv.get(`short:${customAlias}`);
      if (existingCustom) {
        return NextResponse.json({ 
          error: 'Custom alias already exists, please choose another' 
        }, { status: 400 });
      }

      shortId = customAlias;
    } else {
      // Generate random short ID and ensure it's unique
      do {
        shortId = nanoid(6);
      } while (await kv.get(`short:${shortId}`));
    }
    
    // Store URL and metadata
    const urlData = {
      originalUrl: url,
      shortId,
      createdAt: new Date().toISOString(),
      clickCount: 0,
      createdBy: request.ip || 'unknown',
      isCustom: !!customAlias
    };

    // Store in Redis (don't store reverse mapping to allow multiple shorts for same URL)
    await kv.set(`short:${shortId}`, urlData);
    
    return NextResponse.json({ 
      shortUrl: `https://arqilasp.com/s/${shortId}`,
      id: shortId
    });
  } catch (error) {
    console.error('Error creating short URL:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 