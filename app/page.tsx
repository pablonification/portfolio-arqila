"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Lanyard from "@/components/Lanyard";
import TechStackCard from "@/components/TechStackCard";
import SpotiBar from "@/components/SpotiBar";

export default function Page() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      {/* Main Content - Reduced max-width and padding */}
      <div
        id="hola"
        className="max-w-full mx-2 px-2 sm:mx-4 sm:px-4 lg:px-6 pt-16 sm:pt-24 md:pt-32 lg:pt-40"
      >
        <p
          className="mb-4 sm:mb-8 max-w-2xl leading-tight tracking-tighter text-[#575757]"
          style={{ fontSize: "clamp(1rem, 1.5vw, 2.5rem)" }}
        >
          Just a tech nerd who loves problem-solving, optimizing systems, and
          learning new things!
        </p>
        <div className="relative mb-8 sm:mb-16">
          <h1
            className="font-['Rubik_80s_Fade'] leading-none tracking-tight flex flex-wrap gap-x-5"
            style={{ fontSize: "clamp(6rem, 15vw, 16rem)" }}
          >
            <span>Arqila</span> <span>Surya</span> <span>Putra</span>
          </h1>
        </div>
      </div>

      {/* Projects - Reduced max-width and padding */}
      <section
        id="works"
        className="max-w-full mx-2 px-2 sm:mx-8 sm:px-6 md:mx-16 lg:mx-24 lg:px-8 mb-8 sm:mb-16 mt-16 sm:mt-32"
      >
        <h2
          className="font-semibold mb-2 text-center tracking-tighter"
          style={{ fontSize: "clamp(1.5rem, 3vw, 4rem)" }}
        >
          Things i made...
        </h2>
        <p
          className="font-caveat text-gray-600 mb-4 sm:mb-8 text-center transform -rotate-3 translate-x-10 sm:translate-x-20 -mt-3 sm:-mt-5 hover:rotate-0 transition-transform"
          style={{
            fontSize: "clamp(1rem, 1.5vw, 1.5rem)",
          }}
        >
          (and they actually work!)
        </p>

        <div className="flex flex-col gap-8 sm:gap-16">
          <Link href="/works/draftanakitb">
            <div
              className="bg-[#F5F5F5] rounded-xl p-4 sm:p-6 md:p-10 hover:shadow-lg relative group"
              style={{ clipPath: "inset(0)" }}
            >
              {/* Add gradient overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,_#FDF3EF_60%,_#CBF88A_90%)] opacity-0 rounded-xl transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
              {/* Wrap content in relative div to keep it above gradient */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Image
                      src="/draftanakitb_black1.svg"
                      alt="DraftAnakITB icon"
                      width={96}
                      height={96}
                      quality={100}
                      style={{
                        width: "clamp(2rem, 2.5vw, 3rem)",
                        height: "clamp(2rem, 2.5vw, 3rem)",
                      }}
                    />
                    <span
                      className="font-medium tracking-tighter"
                      style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.875rem)" }}
                    >
                      DraftAnakITB
                    </span>
                  </div>
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8"
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
                  className="max-w-2xl font-medium text-gray-600 mb-4 sm:mb-6 tracking-tighter"
                  style={{ fontSize: "clamp(1rem, 1.3vw, 1.5rem)" }}
                >
                  Where ITB students share their unfiltered thoughts
                  anonymously, freely, and for everyone to see on @DraftAnakITB.
                </p>
                {/* Single image on mobile, two images on larger screens */}
                <div className="flex flex-col md:flex-row gap-4 mt-2 -mb-16 sm:-mb-24 justify-center items-center">
                  <div
                    className="relative w-full md:w-1/2 
                              transform 
                              translate-x-0
                              rotate-0
                              transition-all 
                              duration-300 
                              group-hover:-translate-y-2 
                              group-hover:-rotate-3"
                  >
                    <Image
                      src="/draftanakitb_pic1.png"
                      alt="DraftAnakITB Interface 1"
                      width={1200}
                      height={900}
                      quality={100}
                      className="rounded-lg w-full object-cover scale-100"
                    />
                  </div>
                  <div
                    className="hidden md:block 
                              relative 
                              w-full 
                              md:w-1/2
                              transform
                              translate-y-4
                              rotate-0
                              transition-all
                              duration-300 
                              group-hover:translate-y-8 
                              group-hover:rotate-2"
                  >
                    <Image
                      src="/draftanakitb_pic2.png"
                      alt="DraftAnakITB Interface 2"
                      width={1200}
                      height={900}
                      quality={100}
                      className="rounded-lg w-full object-cover scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/works/gep2025">
            <div
              className="bg-[#F5F5F5] rounded-xl p-4 sm:p-6 md:p-10 hover:shadow-lg relative group"
              style={{ clipPath: "inset(0)" }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,_#FDF3EF_60%,_#CBF88A_90%)] opacity-0 rounded-xl transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Image
                      src="/ludic-black.svg"
                      alt="DraftAnakITB icon"
                      width={96}
                      height={96}
                      quality={100}
                      style={{
                        width: "clamp(2rem, 2.5vw, 3rem)",
                        height: "clamp(2rem, 2.5vw, 3rem)",
                      }}
                    />
                    <span
                      className="font-medium tracking-tighter"
                      style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.875rem)" }}
                    >
                      Ganesha Exhibition Programme 2025
                    </span>
                  </div>
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
                <p
                  className="max-w-2xl font-medium text-gray-600 mb-4 sm:mb-6 tracking-tighter"
                  style={{ fontSize: "clamp(1rem, 1.3vw, 1.5rem)" }}
                >
                  A digital front door to LFM ITB's annual exhibition,
                  celebrating creativity and storytelling.
                </p>
                {/* Second work card images */}
                <div className="flex flex-col md:flex-row gap-4 mt-2 -mb-16 sm:-mb-24 justify-center items-center">
                  <div
                    className="relative w-full md:w-1/2
                              transform
                              translate-x-0
                              rotate-0
                              transition-all
                              duration-300 
                              group-hover:translate-y-4 
                              group-hover:-rotate-3"
                  >
                    <Image
                      src="/ludic_pic1.png"
                      alt="Ludic Interface 1"
                      width={1200}
                      height={900}
                      quality={100}
                      className="rounded-lg w-full object-cover scale-90"
                    />
                  </div>
                  <div
                    className="hidden md:block 
                              relative 
                              w-full 
                              md:w-1/2
                              transform
                              -translate-x-8
                              translate-y-6
                              rotate-0
                              transition-all
                              duration-300 
                              group-hover:translate-y-8 
                              group-hover:rotate-2"
                  >
                    <Image
                      src="/ludic_pic4.png"
                      alt="Ludic Interface 2"
                      width={1600}
                      height={1200}
                      quality={100}
                      className="rounded-lg w-full object-cover scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section
        id="experience"
        className="max-w-full mx-2 px-2 sm:mx-8 sm:px-6 md:mx-16 lg:mx-24 lg:px-8 mb-16"
      >
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
              Bringing ideas to life through technology, I've worked across
              different roles, from leading event tech operations to developing
              platforms that enhance user experiences. Whether it's building
              scalable systems, optimizing performance, or crafting seamless UI,
              I love turning challenges into functional solutions.
            </p>
            <div className="flex gap-2 justify-center">
              <Image
                src="/draftanakitb_logo.svg"
                alt="DraftAnakITB Logo"
                width={160}
                height={160}
                quality={100}
                className="rounded-lg w-auto h-auto"
              />
              <Image
                src="/ludic_logo.png"
                alt="Ludic Logo"
                width={332}
                height={160}
                quality={100}
                className="rounded-lg w-auto h-auto transform scale-75"
              />
              <Image
                src="/gsis_logo.svg"
                alt="GSIS Logo"
                width={160}
                height={160}
                quality={100}
                className="rounded-lg w-auto h-auto"
              />
            </div>
            <div className="mt-auto pt-6">
              <Link
                href="/coming-soon"
                className="text-lg tracking-tighter text-gray-600 hover:underline"
              >
                View full experience →
              </Link>
            </div>
          </div>
          <TechStackCard />
        </div>
      </section>

      {/* Spotify */}
      <SpotiBar />

      <Lanyard />
    </>
  );
}
