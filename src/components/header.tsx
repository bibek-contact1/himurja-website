"use client";

import React, { useState, useEffect } from "react";
import Link from "@/components/static-link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAVIGATION } from "@/lib/data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span
              className={cn(
                "text-2xl md:text-3xl font-serif font-bold tracking-wider transition-colors duration-300",
                isScrolled ? "text-charcoal" : "text-white"
              )}
            >
              HIMURJA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {NAVIGATION.slice(0, 5).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold",
                  isScrolled ? "text-charcoal" : "text-white/90"
                )}
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
                "hidden md:inline-flex text-sm font-medium tracking-wide px-6 py-2 border transition-all duration-300",
                isScrolled
                  ? "border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-charcoal"
              )}
            >
              Shop Now
            </Link>
            <button
              className={cn(
                "transition-colors duration-300",
                isScrolled ? "text-charcoal" : "text-white"
              )}
              aria-label="Shopping cart"
            >
              <ShoppingBag className="h-5 w-5" />
            </button>
            <button
              className={cn(
                "lg:hidden transition-colors duration-300",
                isScrolled ? "text-charcoal" : "text-white"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white border-t border-light-gray overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-8 space-y-6">
              {NAVIGATION.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="text-charcoal text-lg font-medium tracking-wide hover:text-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-4 border-t border-light-gray"
              >
                <Link
                  href="/product"
                  className="inline-block bg-charcoal text-white px-8 py-3 text-sm font-medium tracking-wide hover:bg-dark-charcoal transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Shop HIMURJA No. 01
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
