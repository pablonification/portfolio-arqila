"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5 px-6 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">This page couldn't load.</h1>
      <p className="text-gray-600">Please try again.</p>
      <button onClick={reset} className="rounded-full bg-black px-6 py-3 font-medium text-white">Try again</button>
    </div>
  );
}
