"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import {
  GRADUATION_THEME_EVENT,
  type GraduationThemeDetail,
} from "@/lib/graduation-theme";

const REVEAL_DURATION = 4000;
const COVER_FADE_DURATION = 650;

// The moving blob needs to cover the viewport even if its source reaches an edge.
const revealRadius = () => Math.hypot(window.innerWidth, window.innerHeight) + 160;

const visiblePlayerCenter = (player: HTMLElement | null) => {
  if (!player || !player.isConnected) return null;
  const rect = player.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0) return null;
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  // An offscreen player has no honest on-screen origin.
  return x >= 0 && x <= window.innerWidth && y >= 0 && y <= window.innerHeight
    ? { x, y }
    : null;
};

const scrollProgress = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  return maxScroll > 0 ? window.scrollY / maxScroll : 0;
};

const randomBlobShape = () => {
  const corner = () => `${Math.round(22 + Math.random() * 56)}%`;
  return `${Array.from({ length: 4 }, corner).join(" ")} / ${Array.from({ length: 4 }, corner).join(" ")}`;
};

const DynamicGradient = () => {
  const [pageView, setPageView] = useState({ progress: 0, y: 0, height: 0 });
  const [coverVisible, setCoverVisible] = useState(false);
  const [blobVisible, setBlobVisible] = useState(false);
  const [reveal, setReveal] = useState({
    playing: false,
    x: 0,
    y: 0,
    radius: 0,
    shape: "44% 56% 52% 48% / 53% 47% 59% 41%",
  });
  const playingRef = useRef(false);
  const playerRef = useRef<HTMLElement | null>(null);
  const modeRef = useRef<"idle" | "revealing" | "collapsing" | "covered">("idle");
  const blobVisibleRef = useRef(false);
  const coverFadeUntilRef = useRef(0);
  const revealElementRef = useRef<HTMLDivElement | null>(null);
  const positionFrame = useRef<number | null>(null);
  const scrollFrame = useRef<number | null>(null);
  const revealTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const blurTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const duration = () => (reducedMotion.matches ? 0 : REVEAL_DURATION);
    const fadeDuration = () => (reducedMotion.matches ? 0 : COVER_FADE_DURATION);

    const clearTimers = () => {
      if (revealTimer.current) clearTimeout(revealTimer.current);
      if (hideTimer.current) clearTimeout(hideTimer.current);
      if (blurTimer.current) clearTimeout(blurTimer.current);
    };

    const hideBlob = () => {
      blobVisibleRef.current = false;
      setBlobVisible(false);
      setReveal((previous) => ({ ...previous, playing: false }));
      if (!playingRef.current) {
        modeRef.current = "idle";
        playerRef.current = null;
        setPageView({ progress: scrollProgress(), y: window.scrollY, height: window.innerHeight });
      }
      hideTimer.current = null;
    };

    const startBlurWindow = (milliseconds: number) => {
      if (blurTimer.current) clearTimeout(blurTimer.current);
      if (milliseconds === 0) {
        document.documentElement.classList.remove("graduation-transitioning");
        return;
      }
      document.documentElement.classList.add("graduation-transitioning");
      blurTimer.current = setTimeout(() => {
        document.documentElement.classList.remove("graduation-transitioning");
        blurTimer.current = null;
      }, milliseconds);
    };

    const settleTheme = () => {
      if (!playingRef.current) return;
      modeRef.current = "covered";
      setCoverVisible(true);
      hideTimer.current = setTimeout(hideBlob, fadeDuration());
      revealTimer.current = null;
    };

    const updatePosition = () => {
      positionFrame.current = null;
      if (modeRef.current !== "revealing" && modeRef.current !== "collapsing") return;
      const center = visiblePlayerCenter(playerRef.current);
      if (!center) {
        if (modeRef.current === "collapsing") {
          if (hideTimer.current) clearTimeout(hideTimer.current);
          hideBlob();
          return;
        }
        if (revealTimer.current) clearTimeout(revealTimer.current);
        settleTheme();
        startBlurWindow(fadeDuration());
        return;
      }
      if (revealElementRef.current) {
        revealElementRef.current.style.translate = `${center.x}px ${center.y}px`;
      }
    };

    const handleScrollOrResize = () => {
      if (scrollFrame.current === null) {
        scrollFrame.current = requestAnimationFrame(() => {
          scrollFrame.current = null;
          setPageView((previous) => ({
            progress: playingRef.current ? previous.progress : scrollProgress(),
            y: window.scrollY,
            height: window.innerHeight,
          }));
        });
      }
      if ((modeRef.current === "revealing" || modeRef.current === "collapsing") &&
          positionFrame.current === null) {
        positionFrame.current = requestAnimationFrame(updatePosition);
      }
    };

    const handleResize = () => {
      if (modeRef.current !== "revealing" && modeRef.current !== "collapsing") return;
      const center = visiblePlayerCenter(playerRef.current);
      if (center) {
        setReveal((previous) => ({ ...previous, ...center, radius: revealRadius() }));
      }
    };

    const handleThemeChange = (event: Event) => {
      const { playing, player } = (event as CustomEvent<GraduationThemeDetail>).detail;
      if (playingRef.current === playing) return;
      clearTimers();
      const previousPlayer = playerRef.current;
      playingRef.current = playing;
      playerRef.current = playing ? player : previousPlayer;

      if (playing) {
        const center = visiblePlayerCenter(player);
        if (!center) {
          // Fade the full screen when playback starts out of view.
          modeRef.current = "covered";
          hideBlob();
          setCoverVisible(true);
          startBlurWindow(fadeDuration());
          return;
        }

        if (performance.now() < coverFadeUntilRef.current) {
          // A quick resume should keep the already completed theme in place.
          coverFadeUntilRef.current = 0;
          modeRef.current = "covered";
          hideBlob();
          setCoverVisible(true);
          startBlurWindow(fadeDuration());
          return;
        }

        coverFadeUntilRef.current = 0;
        modeRef.current = "revealing";
        blobVisibleRef.current = true;
        // Scroll tracking writes this property directly. Reset it explicitly;
        // React may skip an unchanged value from its previous render.
        if (revealElementRef.current) {
          revealElementRef.current.style.translate = `${center.x}px ${center.y}px`;
        }
        setBlobVisible(true);
        setCoverVisible(false);
        setReveal({
          playing: true,
          ...center,
          radius: revealRadius(),
          shape: randomBlobShape(),
        });
        startBlurWindow(duration());
        revealTimer.current = setTimeout(settleTheme, duration());
        return;
      }

      setPageView({ progress: scrollProgress(), y: window.scrollY, height: window.innerHeight });
      setCoverVisible(false);
      coverFadeUntilRef.current = modeRef.current === "covered"
        ? performance.now() + fadeDuration()
        : 0;
      const shouldCollapse = modeRef.current === "revealing" &&
        blobVisibleRef.current && visiblePlayerCenter(previousPlayer) !== null;
      if (shouldCollapse) {
        modeRef.current = "collapsing";
        setReveal((previous) => ({ ...previous, playing: false }));
        hideTimer.current = setTimeout(hideBlob, duration());
        startBlurWindow(duration());
      } else {
        modeRef.current = "idle";
        playerRef.current = null;
        hideBlob();
        startBlurWindow(fadeDuration());
      }
    };

    window.addEventListener("scroll", handleScrollOrResize, { passive: true });
    window.addEventListener("resize", handleScrollOrResize);
    window.addEventListener("resize", handleResize);
    window.addEventListener(GRADUATION_THEME_EVENT, handleThemeChange);
    handleScrollOrResize();

    return () => {
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener(GRADUATION_THEME_EVENT, handleThemeChange);
      if (positionFrame.current !== null) cancelAnimationFrame(positionFrame.current);
      if (scrollFrame.current !== null) cancelAnimationFrame(scrollFrame.current);
      clearTimers();
      document.documentElement.classList.remove("graduation-transitioning");
    };
  }, []);

  // Paint one document background. iOS does not reliably honor fixed root
  // backgrounds, so place the color stops in document coordinates instead.
  useEffect(() => {
    const root = document.documentElement;
    const progress = Math.max(0, Math.min(1, pageView.progress));
    const height = pageView.height || window.innerHeight;
    const startY = pageView.y - progress * height;
    const endY = startY + height;
    const gradient = `linear-gradient(to bottom, #FFB7C3 ${startY}px, #BCF4F5 ${endY}px)`;
    const start = [255, 183, 195];
    const end = [188, 244, 245];
    const edgeColor = start.map((channel, i) => Math.round(channel + (end[i] - channel) * progress));
    root.style.setProperty("--page-background", coverVisible ? "var(--graduation-background)" : gradient);
    root.style.setProperty("--page-edge-color", coverVisible ? "#d2baf0" : `rgb(${edgeColor.join(" ")})`);
    root.style.setProperty("--page-background-size", coverVisible ? `100% ${height}px` : "100% 100%");
    root.style.setProperty("--page-background-position", coverVisible ? `0px ${pageView.y}px` : "0px 0px");
    root.style.setProperty("--page-background-repeat", coverVisible ? "repeat-y" : "no-repeat");
    return () => {
      for (const property of ["--page-background", "--page-edge-color", "--page-background-size", "--page-background-position", "--page-background-repeat"]) {
        root.style.removeProperty(property);
      }
    };
  }, [pageView, coverVisible]);

  const revealStyle = {
    translate: `${reveal.x}px ${reveal.y}px`,
    borderRadius: reveal.shape,
    transform: `translate(-50%, -50%) scale(${reveal.playing ? reveal.radius / 110 : 0})`,
  } as CSSProperties;

  return (
    <>
      <div
        aria-hidden="true"
        ref={revealElementRef}
        className={`graduation-reveal fixed -z-10 pointer-events-none ${blobVisible ? "" : "is-hidden"}`}
        style={revealStyle}
      />
      <div
        aria-hidden="true"
        className="graduation-cover fixed inset-0 -z-10 pointer-events-none"
        style={{ opacity: coverVisible ? 1 : 0 }}
      />
    </>
  );
};

export default DynamicGradient;
