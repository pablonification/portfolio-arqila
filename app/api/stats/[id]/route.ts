import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    // Get URL data
    const urlData = await kv.get(`short:${id}`);
    
    if (!urlData) {
      return NextResponse.json({ error: 'Short URL not found' }, { status: 404 });
    }

    // Get click history
    const clickHistory = await kv.lrange(`clicks:${id}`, 0, -1);
    
    return NextResponse.json({
      ...urlData,
      clickHistory: clickHistory.map(click => JSON.parse(click as string))
    });
  } catch (error) {
    console.error('Error getting stats:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 