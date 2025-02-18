import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Lanyard from "@/components/Lanyard";
import TechStackCard from "@/components/TechStackCard";
import NavBar from "@/components/NavBar";
// import Noise from '@/components/Noise';

export default function Page() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-[#FFB7C3] to-[#BCF4F5] bg-fixed h-full w-full fixed inset-0 -z-10" />
    <div className="min-h-screen relative z-0">
      {/* <Navbar/> */}
      <NavBar/>

      {/* Main Content - Reduced max-width and padding */}
      <div id="hola" className="max-w-full mx-4 px-4 sm:px-5 lg:px-6 pt-24 md:pt-32 lg:pt-40">
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

        <div className="flex flex-col gap-8">
          {/* Project cards */}
          <Link href="/#hola">
            <div
              className="
              bg-[#F5F5F5] 
              rounded-xl 
              p-6 
              md:p-10 
              hover:shadow-lg 
              relative
              group
              "
              style={{ clipPath: "inset(0)" }}
            >
              {/* Add gradient overlay */}
                <div 
                  className="
                  absolute
                  rounded-xl  
                  inset-0 
                  bg-[linear-gradient(90deg,_#FDF3EF_55%,_#CBF88A_100%)]
                  opacity-0
                  transition-opacity
                  duration-500
                  ease-in-out
                  group-hover:opacity-100
                  "
                />
                {/* <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Noise
                    patternSize={250}
                    patternScaleX={1}
                    patternScaleY={1}
                    patternRefreshInterval={2}
                    patternAlpha={25}
                  />
                </div> */}
              {/* Wrap content in relative div to keep it above gradient */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <Image
                  src="/draftanakitb_black1.svg"
                  alt="DraftAnakITB icon"
                  width={24}
                  height={24}
                  style={{ 
                    width: "clamp(2.5rem, 3vw, 3rem)", 
                    height: "clamp(2.5rem, 3vw, 3rem)" 
                  }}
                  />
                  <span 
                  className="font-medium tracking-tighter"
                  style={{ fontSize: "clamp(1.6rem, 2vw, 1.875rem)" }}
                  >
                  DraftAnakITB
                  </span>
                </div>
                <svg 
                  className="w-8 h-8" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
                </div>

                {/* Deskripsi */}
                <p 
                className="max-w-2xl font-medium text-gray-600 mb-6 tracking-tighter" 
                style={{ fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)" }}
                >
                Where ITB students share their unfiltered thoughts anonymously, freely, and for everyone to see on
                @DraftAnakITB.
                </p>

                {/* Gambar dengan animasi hover */}
                <div className="flex flex-col md:flex-row gap-4 mt-2 -mb-24">
                <div 
                  className="
                  relative 
                  translate-x-24
                  translate-y-4
                  transition-transform 
                  duration-300 
                  group-hover:translate-x-20
                  group-hover:-translate-y-1
                  group-hover:-rotate-2
                  "
                >
                  <Image
                  src="/draftanakitb_pic1.png"
                  alt="DraftAnakITB Interface 1"
                  width={600}
                  height={450}
                  className="rounded-lg w-full object-cover scale-110"
                  />
                </div>
                <div 
                  className="
                  relative 
                  translate-y-5 
                  translate-x-28 
                  transition-transform 
                  duration-300 
                  group-hover:translate-y-2 
                  group-hover:translate-x-28
                  group-hover:rotate-1
                  "
                >
                  <Image
                  src="/draftanakitb_pic2.png"
                  alt="DraftAnakITB Interface 2" 
                  width={600}
                  height={450}
                  className="rounded-lg w-full object-cover scale-110"
                  />
                </div>
                </div>
              </div>
            </div>
          </Link>
          {/* Project 2 */}
          <Link href="/#hola">
            <div className="bg-[#F5F5F5] rounded-xl p-6 md:p-10 hover:shadow-lg relative group" style={{ clipPath: "inset(0)" }}>
              {/* Add gradient overlay */}
              <div 
                className="
                absolute
                rounded-xl  
                inset-0 
                bg-[linear-gradient(90deg,_#FDF3EF_55%,_#CBF88A_100%)]
                opacity-0
                transition-opacity
                duration-500
                ease-in-out
                group-hover:opacity-100
                "
              />
              {/* <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Noise
                  patternSize={250}
                  patternScaleX={1}
                  patternScaleY={1}
                  patternRefreshInterval={2}
                  patternAlpha={25}
                />
              </div> */}
              <div className="relative z-10">
                {/* Header content remains the same */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                  <Image
                  src="/ludic-black.svg"
                  alt="GEP icon"
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
                A digital front door to LFM ITB's annual exhibition, celebrating creativity and storytelling.
              </p>
              <div className="flex flex-col md:flex-row gap-4 mt-2 -mb-40"> {/* Negative margin to extend below card */}
                  <div 
                    className="
                    relative 
                    translate-x-12
                    -translate-y-9 
                    transition-transform 
                    duration-300 
                    group-hover:translate-x-16
                    group-hover:-translate-y-14
                    group-hover:-rotate-2
                    "
                  >
                    <Image
                      src="/ludic_pic1.png"
                      alt="GEP Interface 1"
                      width={600}
                      height={450}
                      className="rounded-lg w-full object-cover scale-90"
                    />
                  </div>
                  <div 
                    className="
                    relative 
                    translate-y-20 
                    scale-110
                    translate-x-20
                    transition-transform 
                    duration-300 
                    group-hover:translate-y-16
                    group-hover:translate-x-24
                    group-hover:rotate-1
                    "
                  >
                    <Image
                      src="/ludic_pic2.png"
                      alt="GEP Interface 2" 
                      width={600}
                      height={450}
                      className="rounded-lg w-full object-cover scale-125"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
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
          <div className="bg-[#FFB7C3] rounded-xl py-4 sm:py-3 px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">
            <Link
              href="mailto:arqilasp@gmail.com"
              className="flex items-center gap-2 text-black hover:text-gray-700 transition-colors duration-300"
            >
              <Image
                src="/email.svg"
                alt="Email Icon"
                width={100}
                height={100}
                  className="w-[clamp(1.5rem,2vw,1.75rem)] h-[clamp(1.5rem,2vw,1.75rem)]"
                />
              <span className="text-2xl tracking-tighter">arqilasp@gmail.com</span>
            </Link>

            {/* divider */}
            <div className="w-full -translate-y-2 h-[1px] bg-black/20 sm:hidden" />

            <div className="flex gap-3">
              <Link href="https://letterboxd.com/meninblacked/" className="group">
                <Image
                  src="/letterboxd.svg"
                  alt="Letterboxd Icon"
                  width={100}
                  height={100}
                  className="rounded-lg w-9 h-10 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:-translate-y-1"
                />
              </Link>
              <Link href="https://open.spotify.com/user/31yzm7xwxf7ckfwnpo2frvlvinha?si=45af59bfe15c4594" className="group">
                <Image
                  src="/spotify.svg"
                  alt="Spotify Icon"
                  width={100}
                  height={100}
                  className="rounded-lg w-10 h-10 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:-translate-y-1"
                />
              </Link>
              <Link href="https://instagram.com/arqilasp" className="group">
                <Image
                  src="/instagram.svg"
                  alt="Instagram Icon"
                  width={100}
                  height={100}
                  className="rounded-lg w-9 h-10 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:-translate-y-1"
                />
              </Link>
              <Link href="https://www.linkedin.com/in/arqila-surya-putra-342160237/" className="group">
                <Image
                  src="/linkedin.svg"
                  alt="Linkedin Icon"
                  width={100}
                  height={100}
                  className="rounded-lg w-9 h-10 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:-translate-y-1"
                />
              </Link>
              <Link href="https://github.com/pablonification" className="group">
                <Image
                  src="/github.svg"
                  alt="Github Icon"
                  width={100}
                  height={100}
                  className="rounded-lg w-10 h-10 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
      </footer>
    </div>
    </>
  )
}

