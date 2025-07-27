"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
}

interface HighlightStyle {
  transform: string;
  width: string;
}

const Navbar = () => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("hola");
  const [isIconSpinning, setIsIconSpinning] = useState(false);
  const [highlightStyle, setHighlightStyle] = useState<HighlightStyle>({
    transform: "translateX(0)",
    width: "0",
  });
  const navRef = useRef<HTMLDivElement | null>(null);
  const isAnimating = useRef(false);

  // Check if we're on a works page or experience page
  const isWorksPage = pathname?.startsWith("/works");
  const isExperiencePage = pathname?.startsWith("/experiences");

  // Modified updateHighlight to prevent rapid clicking issues
  const updateHighlight = (target: HTMLElement | null) => {
    if (!target || !navRef.current || isAnimating.current) return;

    isAnimating.current = true;
    const containerPadding = parseInt(
      window.getComputedStyle(navRef.current as HTMLElement).paddingLeft
    );
    const { offsetLeft, offsetWidth } = target;

    setHighlightStyle({
      transform: `translateX(${offsetLeft - containerPadding}px)`,
      width: `${offsetWidth}px`,
    });

    // Reset animation lock after transition
    setTimeout(() => {
      isAnimating.current = false;
    }, 500);
  };

  // Initialize highlight position
  useEffect(() => {
    const activeElement = navRef.current?.querySelector(
      `[data-tab="${activeTab}"]`
    ) as HTMLElement;
    if (activeElement) {
      updateHighlight(activeElement);
    }
  }, [activeTab]);

  // Modified scroll handling with better offset and special connect section handling
  useEffect(() => {
    // Don't handle scroll on works pages or experience pages
    if (isWorksPage || isExperiencePage) return;

    const handleScroll = () => {
      const sections = ["hola", "works", "experience", "connect"];
      const scrollPosition = window.scrollY;
      const defaultOffset = window.innerHeight * 0.15; // Dynamic offset based on viewport height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          // Apply larger offset for connect section
          const offset =
            section === "connect" ? window.innerHeight * 0.3 : defaultOffset;

          if (
            scrollPosition >= offsetTop - offset &&
            scrollPosition < offsetTop + offsetHeight - offset
          ) {
            if (activeTab !== section) {
              setActiveTab(section);
              const target = navRef.current?.querySelector(
                `[data-tab="${section}"]`
              ) as HTMLElement;
              updateHighlight(target);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab, isWorksPage]);

  const navItems: NavItem[] = [
    { name: "Hola" },
    { name: "Works" },
    { name: "Experience" },
    { name: "Connect" },
  ];

  const handleIconClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isAnimating.current) {
      setIsIconSpinning(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setActiveTab("hola");
      const holaElement = navRef.current?.querySelector(
        '[data-tab="hola"]'
      ) as HTMLElement;
      updateHighlight(holaElement);

      // Reset spinning after animation
      setTimeout(() => {
        setIsIconSpinning(false);
      }, 500);
    }
  };

  // Works page navbar style
  if (isWorksPage) {
    return (
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 p-3 font-inter">
        <div className="bg-black text-white rounded-[20px] px-1.5 flex items-center relative overflow-hidden min-w-[320px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[460px]">
          {/* Back to works button */}
          <Link
            href="/#works"
            className="relative px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1"
          >
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-xs sm:text-sm md:text-base font-medium">
              Back
            </span>
          </Link>

          {/* Empty space */}
          <div className="flex-1"></div>

          {/* Works button */}
          <div className="relative px-2 sm:px-3 md:px-4 py-1 sm:py-1.5">
            <div className="bg-[#ffb7c3]/75 rounded-[16px] sm:rounded-[20px] px-3 py-1 font-medium">
              <span className="text-[#FFD8DF] text-xs sm:text-sm md:text-base lg:text-lg">
                Works
              </span>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  // Experience page navbar style
  if (isExperiencePage) {
    return (
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 p-3 font-inter">
        <div className="bg-black text-white rounded-[20px] px-1.5 flex items-center relative overflow-hidden min-w-[320px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[460px]">
          {/* Back to experience button */}
          <Link
            href="/#experience"
            className="relative px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1"
          >
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-xs sm:text-sm md:text-base font-medium">
              Back
            </span>
          </Link>

          {/* Empty space */}
          <div className="flex-1"></div>

          {/* Experience button */}
          <div className="relative px-2 sm:px-3 md:px-4 py-1 sm:py-1.5">
            <div className="bg-[#ffb7c3]/75 rounded-[16px] sm:rounded-[20px] px-3 py-1 font-medium">
              <span className="text-[#FFD8DF] text-xs sm:text-sm md:text-base lg:text-lg">
                Experience
              </span>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  // Regular navbar style
  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 p-3 font-inter">
      <div
        ref={navRef}
        className="bg-black text-white rounded-[20px] px-1.5 py-1 flex items-center relative overflow-hidden"
      >
        <div
          className="absolute h-[85%] -translate-y-1/2 bg-[#ffb7c3] rounded-[16px] sm:rounded-[20px] transition-all duration-500 ease-out opacity-75"
          style={highlightStyle}
        />

        {/* Separate Icon Link */}
        <Link
          href="#hola"
          onClick={handleIconClick}
          className="relative px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 group"
        >
          <Image
            src="/iconamoon_confused-face-fill.svg"
            alt="Navigation icon"
            width={96}
            height={96}
            quality={100}
            className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 relative z-10 transition-transform duration-500
                      ${isIconSpinning ? "rotate-[360deg]" : ""}`}
          />
        </Link>

        {navItems.map((item) => (
          <Link
            key={item.name}
            href={`#${item.name.toLowerCase()}`}
            data-tab={item.name.toLowerCase()}
            onClick={(e) => {
              e.preventDefault();
              if (!isAnimating.current) {
                const sectionId = item.name.toLowerCase();
                const section = document.getElementById(sectionId);
                if (section) {
                  const offset =
                    sectionId === "connect"
                      ? window.innerHeight * 0
                      : window.innerHeight * 0.15;
                  window.scrollTo({
                    top: section.offsetTop - offset,
                    behavior: "smooth",
                  });
                }
                setActiveTab(item.name.toLowerCase());
                updateHighlight(e.currentTarget);
              }
            }}
            className={`relative px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 text-xs sm:text-sm md:text-base lg:text-lg font-medium 
                     whitespace-nowrap transition-colors duration-300
                     hover:text-white`}
          >
            <span
              className={`relative z-10 transition-colors duration-300 
                          ${
                            activeTab === item.name.toLowerCase()
                              ? "text-[#FFD8DF]"
                              : "text-white/90"
                          }`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
