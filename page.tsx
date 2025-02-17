import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Lanyard from "@/components/Lanyard";
import TechStackCard from "@/components/TechStackCard";
import { Github, Instagram, Linkedin } from "lucide-react"

export default function Page() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 to-[#e0f7f6]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 flex justify-center font-inter">
        <div className="bg-black text-white rounded-xl px-3 py-1 flex gap-0">
          {["Hola", "Works", "Experience", "Connect"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:opacity-80 px-2 py-1 rounded-xl transition-all relative group text-lg font-medium flex items-center gap-4 whitespace-nowrap"
            >
              {
                item === "Hola" && (
                  <Image
                    src="/iconamoon_confused-face-fill.svg"
                    alt="confused face"
                    width={30}
                    height={30}
                    className="w-6 h-6"
                  />
                )
              }
              <span className="relative z-10 transition-colors duration-200">{item}</span>
              <div className="absolute inset-0 bg-pink-500 rounded-xl opacity-0 scale-50 transition-all duration-200 data-[active=true]:opacity-100 data-[active=true]:scale-100" />
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Content - Reduced max-width and padding */}
      <div className="max-w-full mx-4 px-4 sm:px-5 lg:px-6 pt-24 md:pt-32 lg:pt-40">
      <p className="mb-8 max-w-2xl leading-tight tracking-tighter text-[#575757]"
           style={{ fontSize: "clamp(1.25rem, 1.8vw, 2.5rem)" }}>
          Just a tech nerd who loves problem-solving, optimizing systems, and learning new things!
        </p>
        <div className="relative mb-16">
          <h1
        className="font-['Rubik_80s_Fade'] leading-none tracking-tight flex flex-wrap gap-x-5"
        style={{ fontSize: "clamp(3.5rem, 22vw, 16rem)" }}
          >
        <span>Arqila</span>{" "}
        <span>Surya</span>{" "}
        <span>Putra</span>
          </h1>
        </div>
      </div>

      {/* Projects - Reduced max-width and padding */}
      <section id="works" className="max-w-full mx-4 sm:mx-8 md:mx-16 lg:mx-24 px-4 sm:px-6 lg:px-8 mb-16 mt-32">
        <h2 className="font-semibold mb-2 text-center tracking-tighter"
        style={{ fontSize: "clamp(2rem, 3.5vw, 4rem)"}}
        >Things i made...</h2>
        <p 
          className="font-caveat text-gray-600 mb-8 text-center transform -rotate-3 translate-x-20 -mt-5 hover:rotate-0 transition-transform"
          style={{ 
            fontSize: "clamp(1.1rem, 2vw, 1.5rem)"
          }}
        >(and they actually work!)</p>

        <div className="space-y-8">
          {/* Project cards */}
          <div className="bg-[#F5F5F5] rounded-xl p-6 md:p-10 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                <Image
                src="/draftanakitb_black1.svg"
                alt="DraftAnakITB icon"
                width={24}
                height={24}
                style={{ width: "clamp(2.5rem, 3vw, 3rem)", height: "clamp(2.5rem, 3vw, 3rem)" }}
                />
                <span className="font-medium tracking-tighter" style={{ fontSize: "clamp(1.6rem, 2vw, 1.875rem)" }}>DraftAnakITB</span>
                </div>
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
            <p className="max-w-2xl font-medium text-gray-600 mb-6 tracking-tighter" 
               style={{ fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)" }}>
              Where ITB students share their unfiltered thoughts anonymously, freely, and for everyone to see on
              @DraftAnakITB.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Image
                src="/draftanakitb_pic1.png"
                alt="DraftAnakITB Interface 1"
                width={400}
                height={300}
                className="rounded-lg w-full"
              />
              <Image
                src="/draftanakitb_pic2.png"
                alt="DraftAnakITB Interface 2"
                width={400}
                height={300}
                className="rounded-lg w-full"
              />
            </div>
          </div>
          <div className="bg-[#F5F5F5] rounded-xl p-6 md:p-10 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                <Image
                src="/ludic-black.svg"
                alt="DraftAnakITB icon"
                width={24}
                height={24}
                style={{ width: "clamp(2.5rem, 3vw, 3rem)", height: "clamp(2.5rem, 3vw, 3rem)" }}
                />
                <span className="font-medium tracking-tighter" style={{ fontSize: "clamp(1.6rem, 2vw, 1.875rem)" }}>Ganesha Exhibition Programme 2025</span>
                </div>
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
            <p className="max-w-2xl font-medium text-gray-600 mb-6 tracking-tighter" 
               style={{ fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)" }}>
              A digital front door to LFM ITB’s annual exhibition, celebrating creativity and storytelling.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Image
                src="/ludic_pic1.png"
                alt="DraftAnakITB Interface 1"
                width={400}
                height={300}
                className="rounded-lg w-full"
              />
              <Image
                src="/ludic_pic2.png"
                alt="DraftAnakITB Interface 2"
                width={400}
                height={300}
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="max-w-full mx-4 sm:mx-8 md:mx-16 lg:mx-24 px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg flex flex-col">
            <h2 
              className="text-xl md:text-2xl font-medium mb-4 md:mb-6 tracking-tighter" 
              style={{ fontSize: "clamp(1.6rem, 2vw, 1.875rem)" }}
            >
              Experience
            </h2>
            <p 
              className="max-w-2xl font-medium text-gray-600 mb-6 tracking-tighter" 
              style={{ fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)" }}
            >
              Bringing ideas to life through technology, I've worked across different roles, from leading event tech
              operations to developing platforms that enhance user experiences. Whether it's building scalable
              systems, optimizing performance, or crafting seamless UI, I love turning challenges into functional
              solutions.
            </p>
            <div className="flex gap-2 justify-center">
              <Image
                src="/draftanakitb_logo.svg"
                alt="DraftAnakITB Logo"
                width={40}
                height={40}
                className="rounded-lg w-auto h-auto"
              />
              <Image
                src="/ludic_logo.png"
                alt="Ludic Logo" 
                width={83}
                height={40}
                className="rounded-lg w-auto h-auto transform scale-75"
              />
              <Image
                src="/gsis_logo.svg"
                alt="GSIS Logo"
                width={40}
                height={40}
                className="rounded-lg w-auto h-auto"
              />
            </div>
            <div className="mt-auto pt-6">
              <Link href="#" className="text-lg tracking-tighter text-gray-600 hover:underline">
                View full experience →
              </Link>
            </div>
          </div>
          <TechStackCard />
        </div>
      </section>
      
      <Lanyard />
      {/* Contact Card - Reduced max-width and padding */}
      {/* <section id="connect" className="max-w-full mx-4 px-4 sm:px-5 lg:px-6 mb-16">
        <div className="bg-white rounded-xl p-6 md:p-8 max-w-sm mx-auto text-center">
          <div className="w-20 h-20 bg-gray-200 rounded-xl mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Arqila S.P.</h3>
          <p className="text-base text-gray-600 mb-6">LET'S CONNECT →</p>
          <div className="w-32 h-32 bg-gray-200 mx-auto" />
        </div>
      </section> */}

      {/* Footer - Reduced max-width and padding */}
      <footer className="max-w-full mx-4 px-4 sm:px-5 lg:px-6 pb-8">
        <div className="bg-gradient-to-r from-pink-200 to-cyan-200 rounded-xl py-3 px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            href="mailto:arqilasp@gmail.com"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 01-2 2H4a2 2 0 01-2-2V10a2 2 0 01.8-1.6l8-6a2 2 0 012.4 0l8 6z" />
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
            </svg>
            <span className="text-sm">arqilasp@gmail.com</span>
          </Link>
          <div className="flex gap-4">
            <Link href="https://instagram.com/yourusername" className="text-gray-600 hover:text-gray-900">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="https://linkedin.com/in/yourusername" className="text-gray-600 hover:text-gray-900">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="https://github.com/yourusername" className="text-gray-600 hover:text-gray-900">
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

