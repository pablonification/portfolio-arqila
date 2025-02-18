import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Lyric {
  start: number;
  text: string;
}

// Daftar lirik dengan timestamp (dalam detik)
const lyricsData: Lyric[] = [
  { start: 1, text: "I present to you"},
  { start: 8, text: "My favorite song of all time"},
  { start: 13, text: "Bittersweet, you're gonna be the death of me" },
  { start: 19, text: "I don't want you, but I need you" },
  { start: 22, text: "I love you and hate you at the very same time" },
  { start: 24, text: "Bittersweet" },

  { start: 25, text: "See, what I want so much should never hurt this bad" },
  { start: 28, text: "\"Never did this before\", that's what the virgin says" },
  { start: 31, text: "We've been generally warned, that's what the surgeon says" },
  { start: 34, text: "God, talk to me now, this is an emergency" },

  { start: 37, text: "And she claims she only with me for the currency" },
  { start: 40, text: "You cut me deep, ***, cut me like surgery" },
  { start: 43, text: "And I was too proud to admit that it was hurting me" },
  { start: 46, text: "I'd never do that to you, at least purposely" },
  { start: 49, text: "We breaking up again, we making up again" },
  { start: 52, text: "But we don't love no more, I guess we *** then" },
  { start: 55, text: "Have you ever felt you ever want to kill her?" },
  { start: 58, text: "And you mix them emotions with tequila" },
  { start: 61, text: "And you mix that with a little bad advice" },
  { start: 63, text: "On one of them bad nights, y'all have a bad fight" },
  { start: 66, text: "And you talk about her family, her aunts and ***" },
  { start: 69, text: "And she say, \"*****, your momma's a ***\"" },
  { start: 72, text: "You know, domestic drama and ***, all the attitude" },
  { start: 75, text: "I'd never hit a girl, but I'd shake the *** out of you" },
  { start: 78, text: "But I'ma be the bigger man, big pimpin' like Jigga man" },
  { start: 82, text: "Oh, I guess I figure it's" },

  { start: 84, text: "Bittersweet, you're gonna be the death of me" },
  { start: 90, text: "I don't want you, but I need you" },
  { start: 93, text: "I love you, hate you at the very same time" },
  { start: 95, text: "Bittersweet" },

  { start: 96, text: "See, what I want so much should never hurt this bad" },
  { start: 99, text: "\"Never did this before\", that's what the virgin says" },
  { start: 102, text: "We've been generally warned, that's what the surgeon says" },
  { start: 105, text: "God, talk to me now, this is an emergency" },

  { start: 108, text: "And my people said I shouldn't let it worry me" },
  { start: 111, text: "I need to focus on the girls we getting currently" },
  { start: 114, text: "But I been thinking and it got me back to sinking" },
  { start: 116, text: "And this relationship, it even got me back to drinking" },
  { start: 118, text: "Now this Hennessy, uh, it's gonna be the death of me (Be the death of me)" },
  { start: 125, text: "And I always thought that you having my child was our destiny" },
  { start: 128, text: "But I can't even vibe with you *******" },
  { start: 132, text: "'Cause every time that I'd try, you would question me" },
  { start: 134, text: "Saying, \"You **** them girls, disrespecting me" },
  { start: 137, text: "You don't see how your lies is affecting me?" },
  { start: 140, text: "You don't see how our life was supposed to be?" },
  { start: 145, text: "And I never let my people get that close to me" },
  { start: 146, text: "And you ain't cracked up to what you were supposed to be" },
  { start: 149, text: "You always gone, you always be where those women will be" },
  { start: 152, text: "And this the first time she ever spilled her soul to me" },

  { start: 155, text: "Bittersweet (I **** up and I know it, G)" },
  { start: 158, text: "You're gonna be the death of me (I guess it's bittersweet poetry)" },
  { start: 161, text: "I don't want you, but I need you" },
  { start: 164, text: "I love you and hate you at the very same time" },
  { start: 167, text: "Bittersweet (Bittersweet, oh)" },
  { start: 170, text: "You're gonna be the death of me (Oh, oh)" },
  { start: 173, text: "I don't want you, but I need you" },
  { start: 176, text: "I love you and hate you at the very same time" },

  { start: 179, text: "See, what I want so much should never hurt this bad (Oh, oh, oh)" },
  { start: 182, text: "\"Never did this before\", that's what the virgin says (Oh, oh, oh)" },
  { start: 185, text: "We've been generally warned, that's what the surgeon says (Oh, oh, oh)" },
  { start: 188, text: "God, talk to me now, this is an emergency (Oh, oh, oh)" },
  { start: 191, text: "See, what I want so much should never hurt this bad (Oh, oh, oh)" },
  { start: 194, text: "\"Never did this before\", that's what the virgin says (Oh, oh, oh)" },
  { start: 197, text: "We've been generally warned, that's what the surgeon says (Oh, oh, oh)" },
  { start: 200, text: "God, talk to me now, this is an emergency (Oh, oh, oh)" },

  { start: 203, text: "Bittersweet, you're gonna be the death of me" },
  { start: 209, text: "I don't want you, but I need you" },
  { start: 211, text: "I love you and hate you at the very same time" }
];

const boldKeywords = new Set([
  "bittersweet",
  "death",
  "of",
  "me",
  "love",
  "hate",
  "emergency",
  "destiny",
  "you",
  "song",
  "of",
  "all",
  "time",
  "poetry"
]);

const semiBoldKeywords = new Set([
  "surgery",
  // "tequila",
  // "drama",
  // "relationship",
  // "vibe",
  // "currency",
  // "hennessy",
  // "question"
]);

const formatLyric = (lyric: string) => {
  const words = lyric.split(" ");
  const formatted = words.map((word, idx) => {
    const trimmed = word.replace(/^[^a-zA-Z]+|[^a-zA-Z]+$/g, "").toLowerCase();
    if (boldKeywords.has(trimmed)) {
      return (
        <strong key={idx} className="font-bold text-white transition-all duration-300 ease-in-out">
          {word}
        </strong>
      );
    } else if (semiBoldKeywords.has(trimmed)) {
      return (
        <span key={idx} className="font-semibold text-white transition-all duration-300 ease-in-out">
          {word}
        </span>
      );
    }
    return (
      <span key={idx} className="font-medium text-white transition-all duration-300 ease-in-out">
        {word}
      </span>
    );
  });
  return formatted.reduce((acc, cur, idx) => {
    if (idx === 0) return [cur];
    return [...acc, " ", cur];
  }, [] as (string | JSX.Element)[]);
};

const PlayPauseButton = ({ isPlaying, onClick }: { isPlaying: boolean; onClick: () => void }) => (
  <div 
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
               cursor-pointer transition-transform duration-200 hover:scale-110
               active:scale-95"
    onClick={onClick}
  >
    {isPlaying ? (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
        <rect x="6" y="4" width="4" height="16" rx="1" />
        <rect x="14" y="4" width="4" height="16" rx="1" />
      </svg>
    ) : (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
        <path d="M8 5v14l11-7z" />
      </svg>
    )}
  </div>
);

export default function SpotiBar() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentLyricIndex, setCurrentLyricIndex] = useState<number>(-1);
  const [prevLyricIndex, setPrevLyricIndex] = useState<number>(-1);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Single useEffect for the audio event listener
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handleTimeUpdate = () => {
      const currentTime = audio.currentTime;
      const newIndex = lyricsData.findIndex((lyric, i) => {
        const next = lyricsData[i + 1];
        return next 
          ? currentTime >= lyric.start && currentTime < next.start 
          : currentTime >= lyric.start;
      });
      if (newIndex !== currentLyricIndex) {
        setPrevLyricIndex(currentLyricIndex);
        setCurrentLyricIndex(newIndex);
        const timeoutId = setTimeout(() => {
          setPrevLyricIndex(-1);
        }, 300); // Updated delay minimal
        return () => clearTimeout(timeoutId);
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [currentLyricIndex]);

  const handleAnimationEnd = (index: number) => {
    if (index === currentLyricIndex) {
      setPrevLyricIndex(-1);
    }
  };

  return (
    <div
      className="max-w-full mx-4 sm:mx-8 md:mx-16 lg:mx-24 px-4 sm:px-6 lg:px-8 mb-8 sm:mb-16 relative z-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative bg-gradient-to-r from-[#B14A9E] to-[#C1986E] rounded-xl p-3 sm:p-4 flex items-center min-h-[60px] sm:min-h-[80px] text-white transition-transform duration-300 ease-out ${isHovered ? 'scale-[1.02] shadow-lg' : 'scale-100'}`}>
        {/* Cover & Info */}
        <div className="flex items-center gap-2 sm:gap-4 z-10">
          <div className="relative group cursor-pointer">
            <Image
              src="/graduation.svg"
              alt="Album Cover"
              width={224}
              height={224}
              quality={100}
              className={`w-10 h-10 sm:w-14 sm:h-14 rounded-md transition-transform duration-200 ${isPlaying ? 'animate-spin-slow' : ''}`}
            />
            <div className="absolute inset-0 bg-black/40 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <PlayPauseButton isPlaying={isPlaying} onClick={handlePlayPause} />
          </div>
          <div className="transform transition-transform duration-200 hover:translate-x-1">
            <span className="text-sm sm:text-lg font-bold tracking-tight text-white hover:underline cursor-pointer block">
              Kanye West
            </span>
            <p className="text-sm sm:text-lg font-medium tracking-tight text-white hover:underline cursor-pointer">
              Bittersweet Poetry
            </p>
          </div>
        </div>
        <div className="ml-auto transform transition-all duration-200 hover:scale-110 hover:rotate-12 z-10">
          <Image
            src="/spotibar_white.svg"
            alt="Spotify Icon"
            width={200}
            height={200}
            quality={100}
            className="w-8 h-8 sm:w-12 sm:h-12 opacity-80 hover:opacity-100 transition-opacity duration-200"
          />
        </div>
        {/* Lyrics overlay - Hidden below 900px, shown at 900px and above */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden min-[1600px]:block">
          {currentLyricIndex !== -1 && (
            <p
              key={`curr-${currentLyricIndex}`}
              className="absolute inset-0 flex justify-center items-center text-3xl tracking-tight px-12"
            >
              <span
                className="fadeIn text-center max-w-[70%]"
                onAnimationEnd={() => handleAnimationEnd(currentLyricIndex)}
              >
                {formatLyric(lyricsData[currentLyricIndex].text)}
              </span>
            </p>
          )}
          {prevLyricIndex !== -1 && (
            <p
              key={`prev-${prevLyricIndex}`}
              className="absolute inset-0 flex justify-center items-center text-3xl tracking-tight px-12"
            >
              <span
                className="fadeOut text-center max-w-[70%]"
                onAnimationEnd={() => handleAnimationEnd(prevLyricIndex)}
              >
                {formatLyric(lyricsData[prevLyricIndex].text)}
              </span>
            </p>
          )}
        </div>
      </div>
      <audio ref={audioRef} src="/bittersweet.mp3" />
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeOut {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
        .fadeIn {
          animation: fadeIn 0.5s ease-in-out forwards;
        }
        .fadeOut {
          animation: fadeOut 0.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}