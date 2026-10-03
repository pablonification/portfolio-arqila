import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-5 px-6 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found.</h1>
      <p className="text-gray-600">Let's head back to the portfolio.</p>
      <Link href="/" className="rounded-full bg-black px-6 py-3 font-medium text-white">Back home</Link>
    </div>
  );
}
