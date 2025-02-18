import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Lyric {
  start: number;
  text: string;
}

// Daftar lirik dengan timestamp (dalam detik)
const lyricsData: Lyric[] = [
  { start: 0, text: "Test 12 12 12"},
  { start: 13, text: "Bittersweet, you're gonna be the death of me" },
  { start: 19, text: "I don't want you, but I need you" },
  { start: 22, text: "I love you and hate you at the very same time" },
  { start: 24, text: "Bittersweet" },

  { start: 25, text: "See, what I want so much should never hurt this bad" },
  { start: 28, text: "''Never did this before'', that's what the virgin says" },
  { start: 31, text: "We've been generally warned, that's what the surgeon says" },
  { start: 34, text: "God, talk to me now, this is an emergency" },

  { start: 37, text: "And she claims she only with me for the currency" },
  { start: 40, text: "You cut me deep, b***, cut me like surgery" },
  { start: 43, text: "And I was too proud to admit that it was hurting me" },
  { start: 46, text: "I'd never do that to you, at least purposely" },
  { start: 49, text: "We breaking up again, we making up again" },
  { start: 52, text: "But we don't love no more, I guess we f*** then" },
  { start: 55, text: "Have you ever felt you ever want to kill her?" },
  { start: 58, text: "And you mix them emotions with tequila" },
  { start: 61, text: "And you mix that with a little bad advice" },
  { start: 63, text: "On one of them bad nights, y'all have a bad fight" },
  { start: 66, text: "And you talk about her family, her aunts and s***" },
  { start: 69, text: "And she say, \"M*****er, your momma's a b***\"" },
  { start: 72, text: "You know, domestic drama and s***, all the attitude" },
  { start: 75, text: "I'd never hit a girl, but I'd shake the s*** out of you" },
  { start: 78, text: "But I'ma be the bigger man, big pimpin' like Jigga man" },
  { start: 82, text: "Oh, I guess I figure it's" },

  { start: 84, text: "Bittersweet, you're gonna be the death of me" },
  { start: 90, text: "I don't want you, but I need you" },
  { start: 93, text: "I love you, hate you at the very same time" },
  { start: 95, text: "Bittersweet" },

  { start: 96, text: "See, what I want so much should never hurt this bad" },
  { start: 99, text: "''Never did this before'', that's what the virgin says" },
  { start: 102, text: "We've been generally warned, that's what the surgeon says" },
  { start: 105, text: "God, talk to me now, this is an emergency" },

  { start: 108, text: "And my people said I shouldn't let it worry me" },
  { start: 111, text: "I need to focus on the girls we getting currently" },
  { start: 114, text: "But I been thinking and it got me back to sinking" },
  { start: 116, text: "And this relationship, it even got me back to drinking" },
  { start: 118, text: "Now this Hennessy, uh, it's gonna be the death of me (Be the death of me)" },
  { start: 125, text: "And I always thought that you having my child was our destiny" },
  { start: 128, text: "But I can't even vibe with you sexually" },
  { start: 132, text: "'Cause every time that I'd try, you would question me" },
  { start: 134, text: "Saying, \"You f***ing them girls, disrespecting me" },
  { start: 137, text: "You don't see how your lies is affecting me?" },
  { start: 140, text: "You don't see how our life was supposed to be?" },
  { start: 145, text: "And I never let my people get that close to me" },
  { start: 146, text: "And you ain't cracked up to what you were supposed to be" },
  { start: 149, text: "You always gone, you always be where those women will be" },
  { start: 152, text: "And this the first time she ever spilled her soul to me" },

  { start: 155, text: "Bittersweet (I f****d up and I know it, G)" },
  { start: 158, text: "You're gonna be the death of me (I guess it's bittersweet poetry)" },
  { start: 161, text: "I don't want you, but I need you" },
  { start: 164, text: "I love you and hate you at the very same time" },
  { start: 167, text: "Bittersweet (Bittersweet, oh)" },
  { start: 170, text: "You're gonna be the death of me (Oh, oh)" },
  { start: 173, text: "I don't want you, but I need you" },
  { start: 176, text: "I love you and hate you at the very same time (I love you and hate you at the very same time)" },

  { start: 179, text: "See, what I want so much should never hurt this bad (Oh, oh, oh)" },
  { start: 182, text: "''Never did this before'', that's what the virgin says (Oh, oh, oh)" },
  { start: 185, text: "We've been generally warned, that's what the surgeon says (Oh, oh, oh)" },
  { start: 188, text: "God, talk to me now, this is an emergency (Oh, oh, oh)" },
  { start: 191, text: "See, what I want so much should never hurt this bad (Oh, oh, oh)" },
  { start: 194, text: "''Never did this before'', that's what the virgin says (Oh, oh, oh)" },
  { start: 197, text: "We've been generally warned, that's what the surgeon says (Oh, oh, oh)" },
  { start: 200, text: "God, talk to me now, this is an emergency (Oh, oh, oh)" },

  { start: 203, text: "Bittersweet, you're gonna be the death of me" },
  { start: 209, text: "I don't want you, but I need you" },
  { start: 211, text: "I love you and hate you at the very same time" }
];

// Set keyword untuk bold dan semibold (abaikan kapitalisasi)
const boldKeywords = new Set([
  "bittersweet",
  "death",
  "love",
  "hate",
  "emergency",
  "destiny"
]);
const semiBoldKeywords = new Set([
  "surgery",
  "tequila",
  "drama",
  "relationship",
  "vibe",
  "currency",
  "hennessy",
  "question"
]);

// Fungsi format untuk membungkus kata dengan style yang sesuai
const formatLyric = (lyric: string) => {
  const words = lyric.split(" ");
  const formatted = words.map((word, idx) => {
    const trimmed = word.replace(/^[^a-zA-Z]+|[^a-zA-Z]+$/g, "").toLowerCase();
    if (boldKeywords.has(trimmed)) {
      return (
        <strong key={idx} className="font-bold text-black">
          {word}
        </strong>
      );
    } else if (semiBoldKeywords.has(trimmed)) {
      return (
        <span key={idx} className="font-semibold text-black">
          {word}
        </span>
      );
    }
    return (
      <span key={idx} className="font-medium text-black">
        {word}
      </span>
    );
  });
  return formatted.reduce((acc, cur, idx) => {
    if (idx === 0) return [cur];
    return [...acc, " ", cur];
  }, [] as (string | JSX.Element)[]);
};

export default function SpotiBar() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentLyricIndex, setCurrentLyricIndex] = useState<number>(-1);
  const [prevLyricIndex, setPrevLyricIndex] = useState<number>(-1);

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
        setTimeout(() => {
          setPrevLyricIndex(-1);
        }, 500);
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [currentLyricIndex]);

  return (
    <div className="max-w-full mx-4 sm:mx-8 md:mx-16 lg:mx-24 px-4 sm:px-6 lg:px-8 mb-16">
      <div className="relative bg-gradient-to-r from-[#CF7A65] to-[#A679BF] rounded-xl p-4 flex items-center text-black">
        {/* Cover & Info */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <Image
              src="/graduation.svg"
              alt="Album Cover"
              width={56}
              height={56}
              className="rounded-md"
            />
            <Image
              src="/play-button.svg"
              alt="Play Button"
              width={30}
              height={30}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              onClick={handlePlayPause}
            />
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-black">
              Kanye West
            </span>
            <p className="text-lg font-medium tracking-tight text-black">
              Bittersweet Poetry
            </p>
          </div>
        </div>
        <div className="ml-auto">
          <Image
            src="/spotibar.svg"
            alt="Spotify Icon"
            width={50}
            height={50}
            className="opacity-80"
          />
        </div>
        {/* Render lirik: Posisi absolut tumpang tindih */}
        <div className="absolute inset-0 pointer-events-none">
          {prevLyricIndex !== -1 && (
            <p
              key={`prev-${prevLyricIndex}`}
              className="absolute inset-0 flex justify-center items-center text-2xl fadeOut"
            >
              <span>{formatLyric(lyricsData[prevLyricIndex].text)}</span>
            </p>
          )}
          {currentLyricIndex !== -1 && (
            <p
              key={`curr-${currentLyricIndex}`}
              className="absolute inset-0 flex justify-center items-center text-2xl fadeIn"
            >
              <span>{formatLyric(lyricsData[currentLyricIndex].text)}</span>
            </p>
          )}
        </div>
      </div>
      {/* Audio tersembunyi */}
      <audio ref={audioRef} src="/bittersweet.mp3" />
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        .fadeIn {
          animation: fadeIn 0.5s ease;
        }
        .fadeOut {
          animation: fadeOut 0.5s ease;
        }
      `}</style>
    </div>
  );
}