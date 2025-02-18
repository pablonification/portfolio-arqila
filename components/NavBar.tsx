import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavItem {
  name: string;
  icon: string | null;
}

interface HighlightStyle {
  transform: string;
  width: string;
}

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('hola');
  const [highlightStyle, setHighlightStyle] = useState<HighlightStyle>({
    transform: 'translateX(0)',
    width: '0'
  });
  const navRef = useRef<HTMLDivElement | null>(null);
  const isAnimating = useRef(false);

  // Modified updateHighlight to prevent rapid clicking issues
  const updateHighlight = (target: HTMLElement | null) => {
    if (!target || !navRef.current || isAnimating.current) return;
    
    isAnimating.current = true;
    const containerPadding = parseInt(window.getComputedStyle(navRef.current as HTMLElement).paddingLeft);
    const { offsetLeft, offsetWidth } = target;
    
    setHighlightStyle({
      transform: `translateX(${offsetLeft - containerPadding}px)`,
      width: `${offsetWidth}px`
    });

    // Reset animation lock after transition
    setTimeout(() => {
      isAnimating.current = false;
    }, 500);
  };

  // Initialize highlight position
  useEffect(() => {
    const activeElement = navRef.current?.querySelector(`[data-tab="${activeTab}"]`) as HTMLElement;
    if (activeElement) {
      updateHighlight(activeElement);
    }
  }, [activeTab]);

  // Modified scroll handling with better offset and special connect section handling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hola', 'works', 'experience', 'connect'];
      const scrollPosition = window.scrollY;
      const defaultOffset = window.innerHeight * 0.15; // Dynamic offset based on viewport height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          // Apply larger offset for connect section
          const offset = section === 'connect' ? window.innerHeight * 0.3 : defaultOffset;
          
          if (
            scrollPosition >= offsetTop - offset && 
            scrollPosition < offsetTop + offsetHeight - offset
          ) {
            if (activeTab !== section) {
              setActiveTab(section);
              const target = navRef.current?.querySelector(`[data-tab="${section}"]`) as HTMLElement;
              updateHighlight(target);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  const navItems: NavItem[] = [
    { name: 'Hola', icon: '/iconamoon_confused-face-fill.svg' },
    { name: 'Works', icon: null },
    { name: 'Experience', icon: null },
    { name: 'Connect', icon: null }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-3 flex justify-center font-inter">
      <div 
        ref={navRef}
        className="bg-black text-white rounded-[20px] px-1.5 py-1 flex items-center relative overflow-hidden"
      >
        <div 
          className="absolute h-[85%] -translate-y-1/2 bg-[#ffb7c3] rounded-[16px] sm:rounded-[20px] transition-all duration-500 ease-out opacity-75"
          style={highlightStyle}
        />
        
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
                  const offset = sectionId === 'connect' 
                    ? window.innerHeight * 0  // Larger offset for connect section
                    : window.innerHeight * 0.15; // Default offset for other sections
                  window.scrollTo({
                    top: section.offsetTop - offset,
                    behavior: 'smooth'
                  });
                }
                setActiveTab(item.name.toLowerCase());
                updateHighlight(e.currentTarget);
              }
            }}
            className={`relative px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 text-xs sm:text-sm md:text-base lg:text-lg font-medium 
                     flex items-center gap-1 sm:gap-2 whitespace-nowrap transition-colors duration-300
                     hover:text-white group`}
          >
            {item.icon && (
              <Image
                src={item.icon}
                alt={`${item.name} icon`}
                width={96}
                height={96}
                quality={100}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 relative z-10"
              />
            )}
            <span className={`relative z-10 transition-colors duration-300 
                          ${activeTab === item.name.toLowerCase() ? 'text-[#FFD8DF]' : 'text-white/90'}`}>
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;