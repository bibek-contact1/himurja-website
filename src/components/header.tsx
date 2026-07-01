"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "@/components/static-link";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAVIGATION } from "@/lib/data";
import { publicPath, stripBasePath } from "@/lib/base-path";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = stripBasePath(usePathname() || "/");
  const currentPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");

  const isActive = (href: string) => {
    if (href === "/") {
      return currentPath === "/";
    }

    return currentPath === href || currentPath.startsWith(`${href}/`);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b border-light-gray/80",
        "bg-white/[0.94] backdrop-blur-xl shadow-[0_8px_30px_rgba(26,26,26,0.08)]"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-shrink-0 items-center gap-3">
            <Image
              src={publicPath("/himurja-logo-mark.png")}
              alt=""
              width={44}
              height={44}
              sizes="44px"
              className="h-11 w-11 object-contain"
              priority
            />
            <span className="flex flex-col leading-none">
              <span className="text-xl md:text-2xl font-serif font-bold tracking-wider text-charcoal">
                HIMURJA
              </span>
              <span className="mt-1 hidden text-[0.63rem] font-semibold uppercase tracking-[0.22em] text-stone sm:block">
                Botanical Skincare
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-9">
            {NAVIGATION.slice(0, 5).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "border-b-2 py-1 text-sm font-semibold tracking-wide transition-colors duration-300",
                  isActive(item.href)
                    ? "border-gold text-charcoal"
                    : "border-transparent text-stone hover:text-charcoal"
                )}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-6">
            <Link
              href="/product"
              className={cn(
                "hidden border border-charcoal bg-charcoal px-6 py-2 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-white hover:text-charcoal md:inline-flex"
              )}
            >
              Shop Now
            </Link>
            <button
              className="text-charcoal transition-colors duration-300 hover:text-gold"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button
              className="text-charcoal transition-colors duration-300 hover:text-gold lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-light-gray bg-white shadow-[0_18px_32px_rgba(26,26,26,0.08)]">
          <nav className="grid gap-4 px-6 py-6">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-base font-semibold tracking-wide transition-colors hover:text-gold",
                  isActive(item.href) ? "text-gold" : "text-charcoal"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-light-gray pt-4">
              <Link
                href="/product"
                className="inline-block bg-charcoal px-8 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-dark-charcoal"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop HIMURJA No. 01
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
