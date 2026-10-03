"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "framer-motion";
import { animate, spring } from "@motionone/dom";

const navItems = [
  { id: "hola", name: "Hola" },
  { id: "works", name: "Works" },
  { id: "experience", name: "Experience" },
  { id: "connect", name: "Connect" },
] as const;

type Section = (typeof navItems)[number]["id"];

const islandSprings = {
  shape: { stiffness: 190, damping: 20, mass: 1.15 },
  content: { stiffness: 220, damping: 22, mass: 1 },
  spin: { stiffness: 150, damping: 15, mass: 0.9 },
};

// Collapsed icon circle and slim pill height: content padding (5) + link (36) + padding (5).
const COLLAPSED = 46;
const CONTENT_INSET = 5;

// Native animations keep running independently of the page's 3D render loop.
const useIslandAnimation = <T extends HTMLElement>(
  target: Record<string, number | string>,
  reducedMotion: boolean | null,
  motion: keyof typeof islandSprings = "shape",
  delay = 0,
  onComplete?: () => void,
) => {
  const ref = useRef<T | null>(null);
  const completionRef = useRef(onComplete);
  completionRef.current = onComplete;
  const keyframes = JSON.stringify(target);
  useLayoutEffect(() => {
    if (!ref.current) return;
    const animation = animate(ref.current, JSON.parse(keyframes), {
      easing: reducedMotion ? "linear" : spring(islandSprings[motion]),
      delay: reducedMotion ? 0 : delay,
      ...(reducedMotion ? { duration: 0 } : {}),
    });
    let cancelled = false;
    animation.finished.then(() => {
      if (!cancelled) completionRef.current?.();
    }).catch(() => {});
    return () => {
      cancelled = true;
      animation.stop();
    };
  }, [keyframes, reducedMotion, motion, delay]);
  return ref;
};

const IslandLabel = ({ children, reducedMotion }: { children: string; reducedMotion: boolean | null }) => {
  const ref = useIslandAnimation<HTMLSpanElement>({ opacity: 1, y: 0 }, reducedMotion);
  return <span ref={ref} className="inline-block" style={{ opacity: 0 }}>{children}</span>;
};

const Navbar = () => {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<Section>("hola");
  const [entrance, setEntrance] = useState<"hidden" | "icon" | "spin" | "expanded">("hidden");
  const [iconTurns, setIconTurns] = useState(0);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [highlight, setHighlight] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [iconWidth, setIconWidth] = useState(40);
  const [iconHeight, setIconHeight] = useState(36);
  const entranceStartedRef = useRef(false);
  const sectionsRef = useRef<HTMLDivElement | null>(null);
  const detailRef = useRef<HTMLDivElement | null>(null);
  const pendingScrollRef = useRef<{ section: Section; top: number } | null>(null);

  const isHome = pathname === "/";
  const mode = pathname?.startsWith("/works")
    ? "works"
    : pathname?.startsWith("/experiences")
      ? "experience"
      : "sections";
  const isDetail = mode !== "sections";
  const detailLabel = mode === "experience" ? "Experience" : "Works";
  const isRevealed = entrance === "expanded";
  const isVisible = entrance !== "hidden";
  const detailVisible = isRevealed && isDetail;
  const sectionsVisible = isRevealed && !isDetail;

  const shellRef = useIslandAnimation<HTMLDivElement>({
    width: `${isRevealed ? size.width : COLLAPSED}px`,
    height: `${isRevealed ? size.height : COLLAPSED}px`,
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : -14,
    scale: isVisible ? 1 : 0.6,
  }, reducedMotion);
  const highlightRef = useIslandAnimation<HTMLDivElement>({
    x: highlight.x,
    y: highlight.y,
    width: `${highlight.width}px`,
    height: `${highlight.height}px`,
    opacity: isRevealed ? 1 : 0,
  }, reducedMotion, "shape", isRevealed ? 0.12 : 0);
  const detailAnimationRef = useIslandAnimation<HTMLDivElement>({
    opacity: detailVisible ? 1 : 0,
    y: detailVisible ? 0 : -8,
    filter: detailVisible || reducedMotion ? "blur(0px)" : "blur(7px)",
  }, reducedMotion, "content", detailVisible ? 0.12 : 0);
  const sectionsAnimationRef = useIslandAnimation<HTMLDivElement>({
    opacity: sectionsVisible ? 1 : 0,
    y: sectionsVisible ? 0 : 8,
    filter: sectionsVisible || reducedMotion ? "blur(0px)" : "blur(7px)",
  }, reducedMotion, "content", sectionsVisible ? 0.12 : 0);
  const iconLinkRef = useIslandAnimation<HTMLAnchorElement>({
    x: isRevealed ? CONTENT_INSET : (COLLAPSED - iconWidth) / 2,
    y: isRevealed ? CONTENT_INSET : (COLLAPSED - iconHeight) / 2,
    opacity: isVisible && (!isRevealed || !isDetail) ? 1 : 0,
  }, reducedMotion);
  const iconRef = useIslandAnimation<HTMLSpanElement>({
    rotate: reducedMotion ? 0 : iconTurns * 360,
  }, reducedMotion, "spin", 0, () => {
    // Expand only when the staged opening spin has actually settled.
    if (entrance === "spin") setEntrance("expanded");
  });

  // Strictly sequential entrance: shell pops in with a static icon, the spin
  // starts only after the icon is on screen, and the pill expands last.
  // The shared root layout keeps this state alive during client-side navigation.
  useEffect(() => {
    if (reducedMotion) {
      setEntrance("expanded");
      return;
    }
    if (entranceStartedRef.current) return;
    entranceStartedRef.current = true;
    const reveal = window.setTimeout(() => setEntrance("icon"), 180);
    const spin = window.setTimeout(() => {
      setEntrance("spin");
      setIconTurns(1);
    }, 780);
    return () => {
      window.clearTimeout(reveal);
      window.clearTimeout(spin);
    };
  }, [reducedMotion]);

  useLayoutEffect(() => {
    // Keep both layers mounted so fast route changes never replace measured nodes.
    if (sectionsRef.current) sectionsRef.current.inert = !isRevealed || isDetail;
    if (detailRef.current) detailRef.current.inert = !isRevealed || !isDetail;
    if (iconLinkRef.current) iconLinkRef.current.inert = !isRevealed || isDetail;
    const content = isDetail ? detailRef.current : sectionsRef.current;
    if (!content) return;
    let disposed = false;

    const measure = () => {
      if (disposed) return;
      // Read layout sizes, not transformed bounds: the content can be mid-animation.
      setSize({ width: content.offsetWidth, height: content.offsetHeight });
      if (iconLinkRef.current) {
        setIconWidth(iconLinkRef.current.offsetWidth);
        setIconHeight(iconLinkRef.current.offsetHeight);
      }
      const target = content.querySelector<HTMLElement>("[data-active='true']");
      if (target) {
        setHighlight({
          x: target.offsetLeft,
          y: target.offsetTop,
          width: target.offsetWidth,
          height: target.offsetHeight,
        });
      }
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(content);
    window.addEventListener("resize", measure);
    return () => {
      disposed = true;
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [mode, isDetail, activeTab, isRevealed]);

  useEffect(() => {
    if (!isHome) return;
    let frame = 0;

    const syncSection = () => {
      const pending = pendingScrollRef.current;
      if (pending) {
        // Scroll events pass through earlier sections on the way to a clicked tab.
        if (Math.abs(window.scrollY - pending.top) <= 1) {
          pendingScrollRef.current = null;
          setActiveTab(pending.section);
        }
        return;
      }
      let current: Section = "hola";
      for (const { id } of navItems) {
        const section = document.getElementById(id);
        const offset = id === "connect" ? 80 : window.innerHeight * 0.15;
        if (section && section.getBoundingClientRect().top <= offset + 1) {
          current = id;
        }
      }
      setActiveTab(current);
    };

    const scheduleSync = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(syncSection);
    };

    const resumeScrollTracking = () => {
      pendingScrollRef.current = null;
      scheduleSync();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) {
        resumeScrollTracking();
      }
    };

    syncSection();
    window.addEventListener("scroll", scheduleSync, { passive: true });
    window.addEventListener("scrollend", resumeScrollTracking);
    window.addEventListener("wheel", resumeScrollTracking, { passive: true });
    window.addEventListener("touchstart", resumeScrollTracking, { passive: true });
    window.addEventListener("pointerdown", resumeScrollTracking, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", resumeScrollTracking);
    return () => {
      pendingScrollRef.current = null;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleSync);
      window.removeEventListener("scrollend", resumeScrollTracking);
      window.removeEventListener("wheel", resumeScrollTracking);
      window.removeEventListener("touchstart", resumeScrollTracking);
      window.removeEventListener("pointerdown", resumeScrollTracking);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", resumeScrollTracking);
    };
  }, [isHome]);

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, sectionId: Section) => {
    if (!isHome || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const section = document.getElementById(sectionId);
    if (!section) return;

    event.preventDefault();
    const offset = sectionId === "connect" ? 80 : window.innerHeight * 0.15;
    const targetTop = sectionId === "hola" ? 0 : section.getBoundingClientRect().top + window.scrollY - offset;
    const top = Math.max(0, Math.min(targetTop, document.documentElement.scrollHeight - window.innerHeight));
    pendingScrollRef.current = { section: sectionId, top };
    setActiveTab(sectionId);
    window.scrollTo({
      top,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  };


  return (
    <nav aria-label="Main navigation" className="island-nav font-inter" data-entrance={entrance}>
      <div
        ref={shellRef}
        className="island-shell"
        style={{ width: COLLAPSED, height: COLLAPSED, opacity: 0, pointerEvents: isRevealed ? "auto" : "none" }}
      >
        <div
          ref={highlightRef}
          aria-hidden="true"
          className="island-highlight"
        />

        <Link
          ref={iconLinkRef}
          href="/#hola"
          aria-label="Back to top"
          aria-hidden={!isRevealed || isDetail}
          className="island-link island-icon island-icon-control"
          style={{ opacity: 0, pointerEvents: isRevealed && !isDetail ? "auto" : "none" }}
          onClick={(event) => {
            scrollToSection(event, "hola");
            setIconTurns((turns) => turns + 1);
          }}
        >
          <span ref={iconRef}>
            <Image src="/iconamoon_confused-face-fill.svg" alt="" width={24} height={24} priority />
          </span>
        </Link>

        <div
          ref={(element) => { detailRef.current = element; detailAnimationRef.current = element; }}
          className="island-content island-content-detail"
          aria-hidden={!detailVisible}
          style={{ opacity: 0, pointerEvents: detailVisible ? "auto" : "none" }}
        >
          <Link
            href={`/#${mode === "experience" ? "experience" : "works"}`}
            className="island-link island-back"
            aria-label={`Back to ${detailLabel.toLowerCase()}`}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back</span>
          </Link>
          <span className="island-link island-current" data-active="true" aria-current="page">
            <IslandLabel key={detailLabel} reducedMotion={reducedMotion}>
              {detailLabel}
            </IslandLabel>
          </span>
        </div>
        <div
          ref={(element) => { sectionsRef.current = element; sectionsAnimationRef.current = element; }}
          className="island-content island-content-sections"
          aria-hidden={!sectionsVisible}
          style={{ opacity: 0, pointerEvents: sectionsVisible ? "auto" : "none" }}
        >
          <span className="island-link island-icon" aria-hidden="true">
            <span className="island-icon-slot" />
          </span>
          {navItems.map(({ id, name }) => (
            <Link
              key={id}
              href={`/#${id}`}
              data-active={activeTab === id}
              aria-current={isHome && activeTab === id ? "location" : undefined}
              onClick={(event) => scrollToSection(event, id)}
              className="island-link"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
