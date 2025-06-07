import { redirect } from 'next/navigation';
import { kv } from '@/lib/kv';
import { headers } from 'next/headers';

interface UrlData {
  originalUrl: string;
  shortId: string;
  createdAt: string;
  clickCount: number;
  createdBy: string;
}

export default async function RedirectPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  
  try {
    // Get URL data
    const urlData = await kv.get(`short:${id}`) as UrlData;
    
    if (!urlData) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
            <p className="text-gray-600">The short URL you're looking for doesn't exist.</p>
            <a href="/" className="text-blue-500 hover:underline mt-4 inline-block">
              Go to Homepage
            </a>
          </div>
        </div>
      );
    }

    // Track click
    const headersList = headers();
    const userAgent = headersList.get('user-agent') || '';
    const referer = headersList.get('referer') || '';
    const ip = headersList.get('x-forwarded-for') || 'unknown';
    
    const clickData = {
      timestamp: new Date().toISOString(),
      userAgent,
      referer,
      ip: ip.split(',')[0].trim(),
    };

    // Update click count and add to history
    await Promise.all([
      kv.hincrby(`short:${id}`, 'clickCount', 1),
      kv.lpush(`clicks:${id}`, JSON.stringify(clickData)),
      kv.expire(`clicks:${id}`, 86400 * 30), // 30 days
    ]);

    // Redirect to original URL
    redirect(urlData.originalUrl);
  } catch (error) {
    console.error('Error redirecting:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Error</h1>
          <p className="text-gray-600">Something went wrong.</p>
          <a href="/" className="text-blue-500 hover:underline mt-4 inline-block">
            Go to Homepage
          </a>
        </div>
      </div>
    );
  }
} 