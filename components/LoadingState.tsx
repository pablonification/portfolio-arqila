import { Skeleton } from "@/components/ui/skeleton";

export function LoadingCard({ label = "Loading content" }: { label?: string }) {
  return (
    <div role="status" aria-label={label} className="rounded-xl border border-gray-200/50 bg-white/80 p-6 md:p-8">
      <span className="sr-only">{label}</span>
      <div aria-hidden="true" className="space-y-5">
        <Skeleton className="h-7 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-28 w-full rounded-xl" />
      </div>
    </div>
  );
}

export function TechStackSkeleton() {
  return (
    <div role="status" aria-label="Loading tech stack" className="h-full rounded-xl border border-gray-200/50 bg-white/90 p-6 md:p-8">
      <p className="mb-6 font-medium text-gray-600 tracking-tighter" style={{ fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)" }}>And here's my tech stack...</p>
      <div aria-hidden="true" className="grid h-[clamp(300px,20.833vw,400px)] grid-cols-6 content-center gap-4">
        {Array.from({ length: 18 }, (_, i) => <Skeleton key={i} className="mx-auto h-10 w-10 rounded-xl" />)}
      </div>
      <span className="sr-only">Loading tech stack</span>
    </div>
  );
}

export function LanyardSkeleton() {
  return (
    <div role="status" aria-label="Loading interactive contact card" className="relative -top-16 -mt-8 flex h-screen w-full items-center justify-center sm:mt-0">
      <div aria-hidden="true" className="flex flex-col items-center">
        <Skeleton className="h-32 w-3 rounded-full" />
        <Skeleton className="h-64 w-44 rounded-2xl" />
      </div>
      <span className="sr-only">Loading interactive contact card</span>
    </div>
  );
}

export function RouteSkeleton({ work = false }: { work?: boolean }) {
  return (
    <div role="status" aria-label="Loading page" className="mx-auto mt-20 max-w-6xl space-y-8 p-4 sm:mt-24 sm:p-6 md:mt-28 md:p-8">
      <span className="sr-only">Loading page</span>
      <div aria-hidden="true">
        <Skeleton className={work ? "aspect-[21/9] w-full rounded-2xl" : "mb-16 h-40 w-4/5 rounded-2xl"} />
      </div>
      <div className={work ? "grid items-start gap-8 lg:grid-cols-3" : "grid gap-8 md:grid-cols-2"}>
        <div className={work ? "lg:col-span-2" : ""}><LoadingCard /></div>
        <LoadingCard />
      </div>
    </div>
  );
}
