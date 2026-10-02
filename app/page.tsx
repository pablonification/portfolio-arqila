"use client";
import { ganesaSpaceMockups } from "@/lib/ganesa-space-mockups";
import { otherWorks } from "@/lib/other-works";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Lanyard from "@/components/Lanyard";
import TechStackCard from "@/components/TechStackCard";
import SpotiBar from "@/components/SpotiBar";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Page() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // Scroll animation hooks for each section
  const holaAnimation = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const worksAnimation = useScrollAnimation<HTMLElement>({ threshold: 0.2 });
  const experienceAnimation = useScrollAnimation<HTMLElement>({
    threshold: 0.2,
  });
  const spotiAnimation = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const lanyardAnimation = useScrollAnimation<HTMLDivElement>({
    threshold: 0.3,
  });

  // Individual card animations

  return (
    <>
      {/* Main Content - Reduced max-width and padding */}
      <div
        ref={holaAnimation.elementRef}
        id="hola"
        className={`max-w-full mx-2 px-2 sm:mx-4 sm:px-4 lg:px-6 pt-16 sm:pt-24 md:pt-32 lg:pt-40 transition-all duration-1000 ease-out ${
          holaAnimation.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
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
          <Link href="/works/ganesa-space">
            <div
              className="bg-[#F5F5F5]/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15),0_15px_30px_-8px_rgba(0,0,0,0.12),inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2 border border-gray-200/50 relative overflow-hidden group"
              style={{ clipPath: "inset(0)" }}
            >
              {/* 3D Inner Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-100/40 rounded-xl pointer-events-none"></div>
              {/* Top Highlight */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-xl"></div>
              {/* Bottom Shadow */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent rounded-b-xl"></div>
              {/* Add gradient overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,_#FDF3EF_60%,_#CBF88A_90%)] opacity-0 rounded-xl transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
              {/* Wrap content in relative div to keep it above gradient */}
              <div className="relative z-20">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Image
                      src="/ganesa-space-logo-transparent.png"
                      alt="Ganesa Space icon"
                      width={96}
                      height={96}
                      quality={100}
                      className="brightness-0"
                      style={{
                        width: "clamp(2rem, 2.5vw, 3rem)",
                        height: "clamp(2rem, 2.5vw, 3rem)",
                      }}
                    />
                    <span
                      className="font-medium tracking-tighter"
                      style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.875rem)" }}
                    >
                      Ganesa Space
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
                  A community platform for ITB students, bringing together
                  anonymous posts, AnonChat matchmaking, token wallets
                  and rewards, and DelVote community moderation.
                </p>
                {/* Single image on mobile, two images on larger screens */}
                <div className="flex flex-col md:flex-row gap-6 mt-2 -mb-16 sm:-mb-24 justify-center items-start">
                  <div
                    className="relative w-full md:w-1/2 aspect-[4/3]
                              transform
                              translate-x-0
                              rotate-0
                              transition-all
                              duration-300
                              group-hover:-translate-y-2
                              group-hover:-rotate-3"
                  >
                    <Image
                      src="/ganesa-space-partnership.png"
                      alt="Ganesa Space partnership website on desktop"
                      width={1448}
                      height={1086}
                      quality={100}
                      style={{ clipPath: ganesaSpaceMockups.desktop }}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div
                    className="hidden md:block
                              relative
                              w-full
                              md:w-1/2
                              aspect-[4/3]
                              transform
                              translate-y-16
                              rotate-0
                              transition-all
                              duration-300
                              group-hover:translate-y-14
                              group-hover:rotate-2"
                  >
                    <Image
                      src="/ganesa-space-dashboard.png"
                      alt="Ganesa Space mobile dashboard with menfess, AnonChat, and token wallet"
                      width={1527}
                      height={1030}
                      quality={100}
                      style={{ clipPath: ganesaSpaceMockups.mobile }}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/works/gep2025">
            <div
              className="bg-[#F5F5F5]/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15),0_15px_30px_-8px_rgba(0,0,0,0.12),inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2 border border-gray-200/50 relative overflow-hidden group"
              style={{ clipPath: "inset(0)" }}
            >
              {/* 3D Inner Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-100/40 rounded-xl pointer-events-none"></div>
              {/* Top Highlight */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-xl"></div>
              {/* Bottom Shadow */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent rounded-b-xl"></div>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,_#FDF3EF_60%,_#CBF88A_90%)] opacity-0 rounded-xl transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
              <div className="relative z-20">
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
                      src="/ludic_pic1.webp"
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
                      src="/ludic_pic4.webp"
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

          {/* 8EH Radio ITB Card */}
          <Link href="/works/8ehradioitb">
            <div
              className="bg-[#F5F5F5]/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15),0_15px_30px_-8px_rgba(0,0,0,0.12),inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2 border border-gray-200/50 relative overflow-hidden group"
              style={{ clipPath: "inset(0)" }}
            >
              {/* 3D Inner Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-100/40 rounded-xl pointer-events-none"></div>
              {/* Top Highlight */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-xl"></div>
              {/* Bottom Shadow */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent rounded-b-xl"></div>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,_#FDF3EF_60%,_#CBF88A_90%)] opacity-0 rounded-xl transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
              <div className="relative z-20">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Image
                      src="/8eh.webp"
                      alt="8EH Radio ITB icon"
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
                      8EH Radio ITB
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
                {/* Description */}
                <p
                  className="max-w-2xl font-medium text-gray-600 mb-4 sm:mb-6 tracking-tighter"
                  style={{ fontSize: "clamp(1rem, 1.3vw, 1.5rem)" }}
                >
                  Modern radio streaming and content platform for ITB students
                </p>
                {/* Images */}
                <div className="flex flex-col md:flex-row gap-4 mt-2 -mb-16 sm:-mb-24 justify-center items-center">
                  <div className="relative w-full md:w-1/2 transform translate-x-0 rotate-0 transition-all duration-300 group-hover:-translate-y-2 group-hover:-rotate-3">
                    <Image
                      src="/8eh-card1.webp"
                      alt="8EH Interface 1"
                      width={3840}
                      height={2880}
                      quality={100}
                      className="rounded-lg w-full object-cover translate-x-0 md:-translate-x-2 translate-y-10"
                      priority
                      sizes="(min-width: 1024px) 900px, 100vw"
                    />
                  </div>
                  <div className="hidden md:block relative w-full md:w-1/2 transform translate-y-4 rotate-0 transition-all duration-300 group-hover:translate-y-8 group-hover:rotate-2">
                    <Image
                      src="/8eh-card2.webp"
                      alt="8EH Interface 2"
                      width={2400}
                      height={1800}
                      quality={100}
                      className="rounded-lg w-full object-cover scale-110 -translate-x-5 translate-y-7"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Meddocs West Java Chapter Card */}
          <Link href="/works/meddocs-wjc">
            <div
              className="bg-[#F5F5F5]/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15),0_15px_30px_-8px_rgba(0,0,0,0.12),inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2 border border-gray-200/50 relative overflow-hidden group"
              style={{ clipPath: "inset(0)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-100/40 rounded-xl pointer-events-none"></div>
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-xl"></div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent rounded-b-xl"></div>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,_#FDF3EF_60%,_#CBF88A_90%)] opacity-0 rounded-xl transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
              <div className="relative z-20">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Image
                      src="/meddocs.webp"
                      alt="Meddocs icon"
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
                      Meddocs West Java Chapter
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
                  All-in-one operational platform for motorcycle communities
                </p>
                <div className="flex flex-col md:flex-row gap-4 mt-2 -mb-16 sm:-mb-24 justify-center items-center">
                  <div className="relative w-full md:w-1/2 transform translate-x-0 rotate-0 transition-all duration-300 group-hover:-translate-y-2 group-hover:-rotate-3">
                    <Image
                      src="/wjc-card1.webp"
                      alt="Meddocs Interface 1"
                      width={3840}
                      height={2880}
                      quality={100}
                      className="rounded-lg w-full object-cover translate-x-0 md:translate-x-5 translate-y-10"
                      priority
                      sizes="(min-width: 1024px) 900px, 100vw"
                    />
                  </div>
                  <div className="hidden md:block relative w-full md:w-1/2 transform translate-y-4 rotate-0 transition-all duration-300 group-hover:translate-y-8 group-hover:rotate-2">
                    <Image
                      src="/wjc-card2.webp"
                      alt="Meddocs Interface 2"
                      width={3840}
                      height={2880}
                      quality={100}
                      className="rounded-lg w-full object-cover translate-x-0 md:-translate-x-10 scale-105"
                      priority
                      sizes="(min-width: 1024px) 900px, 100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Taskly Card */}
          <Link href="/works/taskly">
            <div
              className="bg-[#F5F5F5]/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15),0_15px_30px_-8px_rgba(0,0,0,0.12),inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2 border border-gray-200/50 relative overflow-hidden group"
              style={{ clipPath: "inset(0)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-100/40 rounded-xl pointer-events-none"></div>
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-xl"></div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent rounded-b-xl"></div>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,_#FDF3EF_60%,_#CBF88A_90%)] opacity-0 rounded-xl transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
              <div className="relative z-20">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Image
                      src="/taskly.webp"
                      alt="Taskly icon"
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
                      Taskly
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
                  A minimalist productivity app for managing recurring tasks,
                  tracking habits, and storing quick ideas
                </p>
                <div className="flex flex-col md:flex-row gap-4 mt-2 -mb-16 sm:-mb-24 justify-center items-center">
                  <div className="relative w-full md:w-1/2 transform translate-x-0 rotate-0 transition-all duration-300 group-hover:-translate-y-2 group-hover:-rotate-3">
                    <Image
                      src="/taskly-card1.webp"
                      alt="Taskly Interface 1"
                      width={3840}
                      height={2880}
                      quality={100}
                      className="rounded-lg w-full object-cover translate-x-0 md:translate-x-5 translate-y-10 scale-95"
                      priority
                      sizes="(min-width: 1024px) 900px, 100vw"
                    />
                  </div>
                  <div className="hidden md:block relative w-full md:w-1/2 transform translate-y-4 rotate-0 transition-all duration-300 group-hover:translate-y-8 group-hover:rotate-2">
                    <Image
                      src="/taskly-card2.webp"
                      alt="Taskly Interface 2"
                      width={3840}
                      height={2880}
                      quality={100}
                      className="rounded-lg w-full object-cover translate-y-16 scale-105 -translate-x-5"
                      priority
                      sizes="(min-width: 1024px) 900px, 100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Spakbor Hills Card */}
          <Link href="/works/spakbor-hills">
            <div
              className="bg-[#F5F5F5]/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15),0_15px_30px_-8px_rgba(0,0,0,0.12),inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2 border border-gray-200/50 relative overflow-hidden group"
              style={{ clipPath: "inset(0)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-100/40 rounded-xl pointer-events-none"></div>
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-xl"></div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent rounded-b-xl"></div>
              <div className="absolute inset-0 bg-[linear-gradient(45deg,_#FDF3EF_60%,_#CBF88A_90%)] opacity-0 rounded-xl transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
              <div className="relative z-20">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Image
                      src="/spakbor.webp"
                      alt="Spakbor Hills icon"
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
                      Spakbor Hills
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
                  A farming life simulation game inspired by Stardew Valley
                  built with Java
                </p>
                <div className="flex flex-col md:flex-row gap-4 mt-2 -mb-16 sm:-mb-24 justify-center items-center">
                  <div className="relative w-full md:w-1/2 transform translate-x-0 rotate-0 transition-all duration-300 group-hover:-translate-y-2 group-hover:-rotate-3">
                    <Image
                      src="/spakbor-card1.webp"
                      alt="Spakbor Hills Interface 1"
                      width={3840}
                      height={2880}
                      quality={100}
                      className="rounded-lg w-full object-cover translate-x-0 md:translate-x-5 translate-y-10"
                      priority
                      sizes="(min-width: 1024px) 900px, 100vw"
                    />
                  </div>
                  <div className="hidden md:block relative w-full md:w-1/2 transform translate-y-4 rotate-0 transition-all duration-300 group-hover:translate-y-8 group-hover:rotate-2">
                    <Image
                      src="/spakbor-card2.webp"
                      alt="Spakbor Hills Interface 2"
                      width={3840}
                      height={2880}
                      quality={100}
                      className="rounded-lg w-full object-cover translate-y-16 scale-105 -translate-x-5"
                      priority
                      sizes="(min-width: 1024px) 900px, 100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section
        id="other-works"
        aria-labelledby="other-works-heading"
        className="max-w-full mx-2 px-2 sm:mx-8 sm:px-6 md:mx-16 lg:mx-24 lg:px-8 mb-16"
      >
        <div className="rounded-xl border border-gray-200/50 bg-white/90 p-6 font-inter tracking-tight md:p-10">
          <h2 id="other-works-heading" className="mb-6 text-2xl font-semibold tracking-tighter sm:text-3xl">
            Other works
          </h2>
          <div className="divide-y divide-gray-200">
            {otherWorks.map((work) => (
              <article key={work.name} className="py-5 first:pt-0 last:pb-0">
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold">
                    <Link
                      href={work.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 underline decoration-gray-300 underline-offset-4 hover:decoration-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                    >
                      {work.name}
                      <svg
                        aria-hidden="true"
                        className="h-3.5 w-3.5 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500">{work.period}</p>
                </div>
                <ul className="list-disc pl-5 text-sm leading-relaxed text-gray-700 sm:text-base">
                  <li>{work.point}</li>
                </ul>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  {work.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${work.name} ${link.label}`}
                      className="font-medium underline decoration-gray-300 underline-offset-4 hover:decoration-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={experienceAnimation.elementRef}
        id="experience"
        className={`max-w-full mx-2 px-2 sm:mx-8 sm:px-6 md:mx-16 lg:mx-24 lg:px-8 mb-16 transition-all duration-1000 ease-out ${
          experienceAnimation.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15),0_15px_30px_-8px_rgba(0,0,0,0.12),inset_0_2px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2 border border-gray-200/50 relative overflow-hidden group flex flex-col">
            {/* 3D Inner Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-100/40 rounded-xl pointer-events-none"></div>
            {/* Top Highlight */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-xl"></div>
            {/* Bottom Shadow */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent rounded-b-xl"></div>
            <h2
              className="text-xl md:text-2xl font-medium mb-4 md:mb-6 tracking-tighter relative z-10"
              style={{ fontSize: "clamp(1.6rem, 2vw, 1.875rem)" }}
            >
              Experience
            </h2>
            <p
              className="max-w-2xl font-medium text-gray-600 mb-6 tracking-tighter relative z-10"
              style={{ fontSize: "clamp(1.25rem, 1.5vw, 1.5rem)" }}
            >
              Bringing ideas to life through technology, I've worked across
              different roles, from leading event tech operations to developing
              platforms that enhance user experiences. Whether it's building
              scalable systems, optimizing performance, or crafting seamless UI,
              I love turning challenges into functional solutions.
            </p>
            <div className="relative z-10 flex items-center justify-center gap-6">
              <div className="relative h-[clamp(43px,2.99vw,57px)] w-[clamp(43px,2.99vw,57px)] shrink-0 overflow-hidden">
                <Image
                  src="/ganesa-space-logo-transparent.png"
                  alt="Ganesa Space logo"
                  width={500}
                  height={500}
                  quality={100}
                  className="absolute left-1/2 top-[54%] h-[157%] w-[157%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
                />
              </div>
              <div className="h-[clamp(43px,2.99vw,57px)] w-[clamp(43px,2.99vw,57px)] shrink-0 overflow-hidden rounded-lg">
                <Image
                  src="/pakuwon-logo.png"
                  alt="Pakuwon Group logo"
                  width={201}
                  height={197}
                  quality={100}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="relative h-[clamp(43px,2.99vw,57px)] w-[clamp(43px,2.99vw,57px)] shrink-0 overflow-hidden rounded-lg">
                <Image
                  src="/containder-symbol-source.png"
                  alt="Containder Indonesia logo"
                  width={1772}
                  height={1772}
                  quality={100}
                  className="absolute -left-[66.6%] -top-[42.5%] h-[233.2%] w-[233.2%] max-w-none"
                />
              </div>
            </div>
            <div className="mt-auto pt-6 relative z-10">
              <Link
                href="/portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg font-inter tracking-tighter shadow-[0_6px_12px_-3px_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.2)] hover:shadow-[0_8px_16px_-4px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.3)] hover:-translate-y-1 relative overflow-hidden group cursor-pointer flex justify-center items-center text-center"
              >
                {/* Button inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 rounded-full pointer-events-none"></div>
                {/* Button top highlight */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-t-full"></div>
                <span className="relative z-10 flex items-center gap-2">
                  View Resume
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 3h6v6m0-6L10 14M9 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-4"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <TechStackCard />
        </div>
      </section>

      {/* Spotify */}
      <div
        ref={spotiAnimation.elementRef}
        className={`transition-all duration-1000 ease-out ${
          spotiAnimation.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <SpotiBar />
      </div>

      <div
        ref={lanyardAnimation.elementRef}
        id="connect"
        className={`transition-all duration-1000 ease-out ${
          lanyardAnimation.isVisible
            ? "opacity-100 sm:translate-y-0 translate-y-16"
            : "opacity-0 sm:translate-y-8 translate-y-24"
        }`}
      >
        <Lanyard />
      </div>
    </>
  );
}
