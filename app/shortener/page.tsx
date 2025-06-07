'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Copy, ExternalLink, BarChart3, Clock, MousePointer } from 'lucide-react';
import { toast } from 'sonner';
import PasswordProtection from '@/components/PasswordProtection';

interface ShortenResult {
  shortUrl: string;
  id: string;
}

interface UrlStats {
  originalUrl: string;
  shortId: string;
  createdAt: string;
  clickCount: number;
  clickHistory: Array<{
    timestamp: string;
    userAgent: string;
    referer: string;
    ip: string;
  }>;
}

export default function UrlShortenerPage() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ShortenResult | null>(null);
  const [stats, setStats] = useState<UrlStats | null>(null);
  const [showStats, setShowStats] = useState(false);

  const handleShorten = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to shorten URL');
      }

      const data = await response.json();
      setResult(data);
      setUrl('');
      toast.success('URL shortened successfully!');
    } catch (error) {
      console.error('Error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to shorten URL');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('Copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy');
    }
  };

  const loadStats = async (id: string) => {
    try {
      const response = await fetch(`/api/stats/${id}`);
      if (!response.ok) throw new Error('Failed to load stats');
      
      const data = await response.json();
      setStats(data);
      setShowStats(true);
    } catch (error) {
      toast.error('Failed to load stats');
    }
  };

  return (
    <PasswordProtection>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            URL Shortener
          </h1>
          <p className="text-gray-600">
            Shorten your URLs and track their performance with arqilasp.com
          </p>
        </div>

        {/* URL Shortener Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Shorten a URL</CardTitle>
            <CardDescription>
              Enter a long URL to get a short, trackable link
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleShorten} className="space-y-4">
              <div className="flex gap-2">
                <Input
                  type="url"
                  placeholder="https://example.com/very/long/url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? 'Shortening...' : 'Shorten'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Result */}
        {result && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Your Short URL
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <code className="flex-1 text-blue-600 font-mono">
                    {result.shortUrl}
                  </code>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopy(result.shortUrl)}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => window.open(result.shortUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Test Link
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => loadStats(result.id)}
                  >
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Stats
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Stats */}
        {showStats && stats && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                URL Statistics
              </CardTitle>
              <CardDescription>
                Performance metrics for your short URL
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Basic Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <MousePointer className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold">Total Clicks</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">
                      {stats.clickCount}
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-green-600" />
                      <span className="font-semibold">Created</span>
                    </div>
                    <div className="text-sm text-green-600">
                      {new Date(stats.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <ExternalLink className="w-5 h-5 text-purple-600" />
                      <span className="font-semibold">Short ID</span>
                    </div>
                    <div className="text-sm font-mono text-purple-600">
                      {stats.shortId}
                    </div>
                  </div>
                </div>

                {/* Original URL */}
                <div>
                  <h3 className="font-semibold mb-2">Original URL</h3>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <code className="text-sm break-all">{stats.originalUrl}</code>
                  </div>
                </div>

                {/* Recent Clicks */}
                {stats.clickHistory.length > 0 && (
                  <div>
                    <h3 className="font-semibold mb-2">Recent Clicks</h3>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {stats.clickHistory.slice(0, 10).map((click, index) => (
                        <div key={index} className="p-3 bg-gray-50 rounded-lg text-sm">
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-medium">
                              {new Date(click.timestamp).toLocaleString()}
                            </span>
                            <span className="text-gray-500 text-xs">
                              {click.ip}
                            </span>
                          </div>
                          {click.referer && (
                            <div className="text-gray-600 text-xs">
                              Referer: {click.referer}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
        </div>
      </div>
    </PasswordProtection>
  );
} 