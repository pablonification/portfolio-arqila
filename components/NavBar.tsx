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
  const highlightTimer = useRef<NodeJS.Timeout | null>(null);

  // Debounced updateHighlight using requestAnimationFrame
  const updateHighlight = (target: HTMLElement | null) => {
    if (!target || !navRef.current) return;
    if (highlightTimer.current) clearTimeout(highlightTimer.current);
    highlightTimer.current = setTimeout(() => {
      window.requestAnimationFrame(() => {
        const containerPadding = parseInt(window.getComputedStyle(navRef.current as HTMLElement).paddingLeft);
        const { offsetLeft, offsetWidth } = target;
        setHighlightStyle({
          transform: `translateX(${offsetLeft - containerPadding}px)`,
          width: `${offsetWidth}px`
        });
      });
    }, 20);
  };

  // Initialize highlight position without delay
  useEffect(() => {
    const activeElement = navRef.current?.querySelector(`[data-tab="${activeTab}"]`) as HTMLElement;
    if (activeElement) {
      updateHighlight(activeElement);
    }
  }, [activeTab]);

  // Handle scroll-based active tab updates
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hola', 'works', 'experience', 'connect'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(section);
            const target = navRef.current?.querySelector(`[data-tab="${section}"]`) as HTMLElement;
            updateHighlight(target);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: 'Hola', icon: '/iconamoon_confused-face-fill.svg' },
    { name: 'Works', icon: null },
    { name: 'Experience', icon: null },
    { name: 'Connect', icon: null }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-4 sm:pt-6 px-2 sm:px-4 flex justify-center font-inter">
      <div 
        ref={navRef}
        className="bg-black text-white rounded-[24px] px-2 py-1.5 flex items-center relative overflow-hidden"
      >
        {/* Animated highlight */}
        <div 
          className="absolute h-[85%] -translate-y-1/2 bg-[#ffb7c3] rounded-[20px] transition-all duration-500 ease-out opacity-75"
          style={highlightStyle}
        />
        
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={`#${item.name.toLowerCase()}`}
            data-tab={item.name.toLowerCase()}
            onClick={(e) => {
              e.preventDefault(); // Prevent default scroll behavior
              setActiveTab(item.name.toLowerCase());
              updateHighlight(e.currentTarget);
              // Smooth scroll to section
              const section = document.getElementById(item.name.toLowerCase());
              section?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`relative px-3 sm:px-4 py-1.5 text-sm sm:text-base lg:text-lg font-medium 
                     flex items-center gap-2 whitespace-nowrap transition-colors duration-300
                     hover:text-white group`}
          >
            {item.icon && (
              <Image
                src={item.icon}
                alt={`${item.name} icon`}
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6 relative z-10"
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