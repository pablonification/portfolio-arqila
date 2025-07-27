import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-full mx-2 px-2 sm:mx-4 sm:px-4 lg:px-6 pb-8">
      <div className="bg-[#FFB7C3] rounded-xl py-4 sm:py-3 px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-4">
        <Link
          href="mailto:arqilasp@gmail.com"
          className="flex items-center gap-2 text-black hover:text-gray-700 transition-colors duration-300"
        >
          <Image
            src="/email.svg"
            alt="Email Icon"
            width={200}
            height={200}
            quality={100}
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
              width={200}
              height={200}
              quality={100}
              className="rounded-lg w-9 h-10 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:-translate-y-1"
            />
          </Link>
          <Link
            href="https://open.spotify.com/user/31yzm7xwxf7ckfwnpo2frvlvinha?si=45af59bfe15c4594"
            className="group"
          >
            <Image
              src="/spotify.svg"
              alt="Spotify Icon"
              width={200}
              height={200}
              quality={100}
              className="rounded-lg w-10 h-10 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:-translate-y-1"
            />
          </Link>
          <Link href="https://instagram.com/arqilasp" className="group">
            <Image
              src="/instagram.svg"
              alt="Instagram Icon"
              width={200}
              height={200}
              quality={100}
              className="rounded-lg w-9 h-10 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:-translate-y-1"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/arqila-surya-putra-342160237/"
            className="group"
          >
            <Image
              src="/linkedin.svg"
              alt="Linkedin Icon"
              width={200}
              height={200}
              quality={100}
              className="rounded-lg w-9 h-10 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:-translate-y-1"
            />
          </Link>
          <Link href="https://github.com/pablonification" className="group">
            <Image
              src="/github.svg"
              alt="Github Icon"
              width={200}
              height={200}
              quality={100}
              className="rounded-lg w-10 h-10 transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
