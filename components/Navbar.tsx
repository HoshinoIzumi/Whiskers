"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isZh = pathname.startsWith("/zh");
  const prefix = isZh ? "/zh" : "";

  const navItems = isZh
    ? [
        { name: "首页", href: "/zh" },
        { name:"菜单",href:"/zh/menu"},
        { name: "口味", href: "/zh/flavours" },
        { name: "到店", href: "/zh/visit" },
        { name: "社交", href: "/zh/social" },
      ]
    : [
        { name: "Home", href: "/" },
        { name: "Menu", href: "/menu"},
        { name: "Flavours", href: "/flavours" },
        { name: "Visit", href: "/visit" },
        { name: "Social", href: "/social" },
      ];

  return (
    <div className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6">
      <nav className="flex items-center justify-between w-full max-w-5xl px-8 py-3 bg-white/40 backdrop-blur-xl rounded-full shadow-[0_8px_32px_rgba(39,145,203,0.1)] border border-white/60 ring-1 ring-gelato-deep/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gelato-pink/30 flex items-center justify-center text-xl shadow-inner">
            🐾
          </div>
          <div className="text-2xl font-black italic tracking-tighter text-gelato-deep drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
            Whiskers
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-1 bg-white/20 p-1 rounded-full border border-white/40">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-6 py-2 rounded-full transition-all duration-500 text-sm font-bold ${
                pathname === item.href 
                  ? "bg-gelato-yellow text-gelato-deep shadow-[0_2px_10px_rgba(254,244,157,0.5)] scale-105" 
                  : "hover:bg-gelato-blue/30 text-gelato-deep/70 hover:text-gelato-deep hover:scale-105"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={isZh ? pathname.replace("/zh", "") || "/" : `/zh${pathname === "/" ? "" : pathname}`}
            className="group flex items-center justify-center w-11 h-11 rounded-full bg-gelato-pink border-2 border-white shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10 text-xs font-black text-white group-hover:text-gelato-deep transition-colors duration-300">
              {isZh ? "EN" : "中"}
            </span>
            <div className="absolute inset-0 bg-gelato-yellow translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </div>
      </nav>
    </div>
  );
}
