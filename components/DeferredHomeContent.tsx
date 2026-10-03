"use client";

import dynamic from "next/dynamic";
import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import { LanyardSkeleton, TechStackSkeleton } from "@/components/LoadingState";

const Lanyard = dynamic(() => import("@/components/Lanyard"), { ssr: false, loading: LanyardSkeleton });
const TechStack = dynamic(() => import("@/components/TechStackCard"), { ssr: false, loading: TechStackSkeleton });

function NearViewport({ children, fallback }: { children: ReactNode; fallback: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) { setReady(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setReady(true); observer.disconnect(); }
    }, { rootMargin: "600px 0px" });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className="h-full min-w-0">{ready ? children : fallback}</div>;
}

class ContactFallback extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    return this.state.failed ? (
      <div className="flex h-screen items-center justify-center">
        <a href="mailto:arqilasp@gmail.com" className="rounded-2xl bg-white/80 px-8 py-6 text-xl font-medium shadow-lg">Let's connect →</a>
      </div>
    ) : this.props.children;
  }
}

export function DeferredLanyard() {
  return <NearViewport fallback={<LanyardSkeleton />}><ContactFallback><Lanyard /></ContactFallback></NearViewport>;
}

export function DeferredTechStack() {
  return <NearViewport fallback={<TechStackSkeleton />}><TechStack /></NearViewport>;
}
