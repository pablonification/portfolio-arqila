'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function RedirectPage() {
  const params = useParams();
  const [status, setStatus] = useState<'loading' | 'notfound' | 'error'>('loading');
  const id = params?.id as string;

  useEffect(() => {
    const handleRedirect = async () => {
      if (!id) {
        setStatus('notfound');
        return;
      }

      try {
        // Call our API to get URL and track click
        const response = await fetch(`/api/redirect/${id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userAgent: navigator.userAgent,
            referer: document.referrer,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data.url) {
            // Redirect to the original URL
            window.location.href = data.url;
            return;
          }
        }

        if (response.status === 404) {
          setStatus('notfound');
        } else {
          setStatus('error');
        }
      } catch (error) {
        console.error('Redirect error:', error);
        setStatus('error');
      }
    };

    handleRedirect();
  }, [id]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting...</p>
        </div>
      </div>
    );
  }

  if (status === 'notfound') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">404 - Not Found</h1>
          <p className="text-gray-600 mb-6">The short URL you're looking for doesn't exist.</p>
          <a 
            href="/" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to Homepage
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Error</h1>
        <p className="text-gray-600 mb-6">Something went wrong while redirecting.</p>
        <a 
          href="/" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
} 