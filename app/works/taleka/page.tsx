import Image from "next/image";
import Link from "next/link";

// Helper component untuk role tags
const RoleTag = ({ children }: { children: React.ReactNode }) => {
  const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case "lead developer":
        return "#FFE4EC";
      case "ui/ux designer":
        return "#E2F4F4";
      case "project manager":
        return "#F2E5F6";
      default:
        return "#E5E7EB"; // fallback gray
    }
  };

  return (
    <div
      className="text-xs font-medium px-3 py-1 text-gray-800 rounded-full font-inter tracking-tighter"
      style={{ backgroundColor: getRoleColor(children as string) }}
    >
      {children}
    </div>
  );
};

export default function TalekaPage() {
  return (
    <>
      <div className="relative z-0 min-h-[100dvh] overflow-x-hidden p-4 sm:p-6 md:p-8 mt-20 sm:mt-24 md:mt-28">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <section className="mb-12 md:mb-16">
            <div className="relative w-full mx-auto">
              <div className="relative bg-gradient-to-b from-gray-300 to-gray-800 rounded-2xl shadow-2xl overflow-hidden aspect-[21/9]">
                <Image
                  src="/taleka-cover.png"
                  alt="Taleka AI companion, welcome screen, Elder Studio, and story dashboard"
                  width={3840}
                  height={1632}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-6 text-white font-inter tracking-tighter">
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tighter font-inter">
                    Taleka
                  </h1>
                  <p className="text-white/90 text-base md:text-lg mt-1 font-inter tracking-tighter">
                    Preserving Semai through elder voices, community stories,
                    and AI-guided language learning.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Konten Utama & Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Kolom Kiri - Konten Utama */}
            <main className="lg:col-span-2 space-y-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.1)] border border-gray-200/50 relative overflow-hidden">
                {/* 3D Inner Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-100/40 rounded-xl pointer-events-none"></div>
                {/* Top Highlight */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-xl"></div>
                {/* Bottom Shadow */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent rounded-b-xl"></div>
                <h2 className="text-2xl font-bold tracking-tighter mb-4 font-inter relative z-10">
                  Problem Overview
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4 font-inter tracking-tighter relative z-10">
                  <p>
                    Semai has limited digital learning resources and support in
                    mainstream language tools. Preserving it means giving
                    community elders a way to share their voices and helping
                    learners practice with language the community can verify.
                  </p>
                  <p>
                    Taleka connects both sides in a mobile platform. Elder Studio
                    records and transcribes spoken Semai, then lets elders review
                    it against a curated lexicon. Verified recordings become
                    illustrated stories, while learners practice vocabulary,
                    play learning games, and ask a grounded AI Coach for guidance.
                  </p>
                  <p>
                    The project won Champion at BorNEO HackWknd 2026 among
                    103 teams from 7 ASEAN countries.
                  </p>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.1)] border border-gray-200/50 relative overflow-hidden">
                {/* 3D Inner Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-100/40 rounded-xl pointer-events-none"></div>
                {/* Top Highlight */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-xl"></div>
                {/* Bottom Shadow */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent rounded-b-xl"></div>
                <h2 className="text-2xl font-bold tracking-tighter mb-4 font-inter relative z-10">
                  My Role
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <RoleTag>Full Stack Developer</RoleTag>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 font-inter tracking-tighter">
                  My work focused on connecting language preservation with
                  practical learning tools. Key areas included:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 font-inter tracking-tighter">
                  <li>
                    Building the mobile-first experience with Ionic, React,
                    and Capacitor
                  </li>
                  <li>
                    Connecting Elder Studio voice recordings to OmniASR
                    transcription and lexicon-based review
                  </li>
                  <li>
                    Grounding translation and AI coaching in verified Semai
                    vocabulary and sentence examples
                  </li>
                  <li>
                    Turning verified recordings into illustrated stories and
                    supporting vocabulary practice and learning games
                  </li>
                  <li>
                    Integrating Supabase for authentication, recording storage,
                    and learner progress
                  </li>
                </ul>
              </div>

            </main>

            {/* Kolom Kanan - Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.1)] border border-gray-200/50 relative overflow-hidden">
                {/* 3D Inner Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-100/40 rounded-xl pointer-events-none"></div>
                {/* Top Highlight */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-xl"></div>
                {/* Bottom Shadow */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent rounded-b-xl"></div>
                <h3 className="text-xl font-bold mb-4 font-inter tracking-tighter relative z-10">
                  Tech Stack
                </h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/tech/ionic.png" alt="" width={24} height={24} className="w-6 h-6 shrink-0 rounded-md object-contain" />
                    <span>Ionic</span>
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/tech/react.png" alt="" width={24} height={24} className="w-6 h-6 shrink-0 rounded-md object-contain" />
                    <span>React</span>
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/tech/capacitor.png" alt="" width={24} height={24} className="h-6 w-6 shrink-0" />
                    <span>Capacitor</span>
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/tech/typescript.png" alt="" width={24} height={24} className="w-6 h-6 shrink-0 rounded-md object-contain" />
                    <span>TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/tech/vite.svg" alt="" width={24} height={24} className="w-6 h-6 shrink-0 rounded-md object-contain" />
                    <span>Vite</span>
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/tech/tailwind.png" alt="" width={24} height={24} className="w-6 h-6 shrink-0 rounded-md object-contain" />
                    <span>Tailwind CSS</span>
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/tech/zustand.svg" alt="" width={24} height={24} className="h-6 w-6 shrink-0" />
                    <span>Zustand</span>
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/tech/supabase.svg" alt="" width={24} height={24} className="w-6 h-6 shrink-0 rounded-md object-contain" />
                    <span>Supabase</span>
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/tech/postgresql.png" alt="" width={24} height={24} className="w-6 h-6 shrink-0 rounded-md object-contain" />
                    <span>PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/tech/nodejs.svg" alt="" width={24} height={24} className="w-6 h-6 shrink-0 rounded-md object-contain" />
                    <span>Node.js</span>
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/tech/deno.svg" alt="" width={24} height={24} className="w-6 h-6 shrink-0 rounded-md object-contain" />
                    <span>Deno</span>
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/tech/meta.svg" alt="" width={24} height={24} className="w-6 h-6 shrink-0 object-contain" />
                    <span>OmniASR</span>
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/tech/huggingface.svg" alt="" width={24} height={24} className="w-6 h-6 shrink-0 rounded-md object-contain" />
                    <span>Hugging Face</span>
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/tech/claude.png" alt="" width={24} height={24} className="w-6 h-6 shrink-0 rounded-md object-contain" />
                    <span>Claude Agent SDK</span>
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/tech/gemini.png" alt="" width={24} height={24} className="w-6 h-6 shrink-0 object-contain" />
                    <span>Gemini</span>
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/tech/cerebras.png" alt="" width={24} height={24} className="w-6 h-6 shrink-0 rounded-md object-contain" />
                    <span>Cerebras</span>
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/tech/openrouter.png" alt="" width={24} height={24} className="w-6 h-6 shrink-0 object-contain" />
                    <span>OpenRouter</span>
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/tech/openai-standard.png" alt="" width={24} height={24} className="w-6 h-6 shrink-0 object-contain" />
                    <span>GPT Image 2</span>
                  </div>
                  <div className="flex items-center gap-2 font-inter tracking-tighter">
                    <Image src="/tech/vitest.svg" alt="" width={24} height={24} className="w-6 h-6 shrink-0 rounded-md object-contain" />
                    <span>Vitest</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.08),inset_0_2px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.1)] border border-gray-200/50 relative overflow-hidden">
                {/* 3D Inner Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-gray-100/40 rounded-xl pointer-events-none"></div>
                {/* Top Highlight */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-t-xl"></div>
                {/* Bottom Shadow */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent rounded-b-xl"></div>
                <h3 className="text-xl font-bold mb-4 font-inter tracking-tighter relative z-10">
                  Project Links
                </h3>
                <div className="flex flex-col gap-3">
                  <Link
                    href="https://github.com/pablonification/taleka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white text-center rounded-2xl py-3 font-medium hover:bg-gray-800 transition-all duration-300 font-inter tracking-tighter shadow-[0_4px_8px_-2px_rgba(0,0,0,0.3),inset_0_2px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.2)] hover:shadow-[0_6px_12px_-3px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.3)] hover:-translate-y-1 relative overflow-hidden group"
                  >
                    {/* Button inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 rounded-2xl pointer-events-none"></div>
                    {/* Button top highlight */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-t-2xl"></div>
                    <span className="relative z-10 flex items-center justify-center">
                      <Image
                        src="/github-white.svg"
                        alt="GitHub"
                        className="inline-block mr-1 -translate-y-[1px]"
                        width={22}
                        height={22}
                      />
                      GitHub Repository
                    </span>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
