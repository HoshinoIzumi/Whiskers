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
        { name: "口味", href: "/zh/flavours" },
        { name: "到店", href: "/zh/visit" },
        { name: "社交", href: "/zh/social" },
      ]
    : [
        { name: "Home", href: "/" },
        { name: "Flavours", href: "/flavours" },
        { name: "Visit", href: "/visit" },
        { name: "Social", href: "/social" },
      ];

  return (
    <nav className="flex items-center justify-between p-6 border-b">
      <div className="text-xl font-bold">Whiskers</div>
      <div className="flex gap-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`hover:underline ${
              pathname === item.href ? "font-bold" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div>
        <Link
          href={isZh ? pathname.replace("/zh", "") || "/" : `/zh${pathname === "/" ? "" : pathname}`}
          className="px-4 py-2 border rounded hover:bg-muted"
        >
          {isZh ? "English" : "中文"}
        </Link>
      </div>
    </nav>
  );
}
