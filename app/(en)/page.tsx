import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gelato-cream">
      <main className="flex-1 flex flex-col items-center justify-center pt-32 pb-16 px-6 overflow-hidden relative">
        {/* Decorative background elements */}
        <div className="absolute top-[-5%] right-[-5%] w-[35%] h-[35%] bg-gelato-blue/30 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[35%] h-[35%] bg-gelato-pink/40 rounded-full blur-[120px] -z-10 animate-pulse" />

        <div className="w-full max-w-5xl flex flex-col items-center text-center gap-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md rounded-full border border-white shadow-sm">
              <span className="text-xs font-black tracking-[0.2em] text-gelato-deep uppercase">
                Artisan Gelato
              </span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter text-gelato-deep drop-shadow-[0_4px_4px_rgba(39,145,203,0.1)] leading-[0.9]">
              Whiskers <br />
              <span className="text-white drop-shadow-[0_2px_10px_rgba(170,224,251,0.5)]">Gelato</span>
            </h1>
            <p className="max-w-xl mx-auto text-xl md:text-2xl text-gelato-deep/60 font-medium">
              Daily fresh-made happiness, served with a sprinkle of magic and a whisk of love.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8">
            <Link
              href="/flavours"
              className="group relative px-12 py-6 bg-gelato-deep text-white font-black rounded-full shadow-[0_10px_30px_rgba(39,145,203,0.3)] hover:shadow-[0_15px_40px_rgba(39,145,203,0.4)] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10">Explore Flavours</span>
              <div className="absolute inset-0 bg-gelato-blue translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </Link>
            <Link
              href="/visit"
              className="px-12 py-6 bg-white text-gelato-deep font-black rounded-full border-2 border-gelato-blue shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              Visit Shop
            </Link>
          </div>

          {/* Visual Highlight - Cute Placeholder */}
          <div className="relative mt-8 w-full max-w-3xl aspect-[16/9] rounded-[4rem] bg-white/40 border-[12px] border-white shadow-[0_32px_64px_rgba(39,145,203,0.1)] flex items-center justify-center overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-br from-gelato-yellow/40 via-gelato-pink/40 to-gelato-blue/40 opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
             <div className="relative z-10 flex flex-col items-center gap-6 scale-90 group-hover:scale-100 transition-transform duration-700">
               <div className="w-40 h-40 rounded-full bg-gelato-cream shadow-[inset_0_4px_10px_rgba(0,0,0,0.05)] border-4 border-white flex items-center justify-center text-6xl animate-bounce">
                 🐱
               </div>
               <div className="text-4xl font-black italic tracking-tighter text-gelato-deep drop-shadow-sm">
                 Whiskers
               </div>
             </div>
             {/* Dynamic sparkles or dots could go here */}
          </div>
        </div>
      </main>

      <footer className="py-16 flex flex-col items-center gap-6 border-t border-white/60 bg-white/20 backdrop-blur-md">
        <div className="flex gap-8 text-sm font-black tracking-widest text-gelato-deep/40 uppercase">
          <Link href="/flavours" className="hover:text-gelato-deep transition-colors">Menu</Link>
          <Link href="/visit" className="hover:text-gelato-deep transition-colors">Location</Link>
          <Link href="/social" className="hover:text-gelato-deep transition-colors">Social</Link>
        </div>
        <p className="text-xs font-bold text-gelato-deep/30 tracking-widest uppercase">
          © {new Date().getFullYear()} Whiskers Gelato. Pure Joy in every scoop.
        </p>
      </footer>
    </div>
  );
}

import Link from "next/link";
