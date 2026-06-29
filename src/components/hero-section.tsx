"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "@/components/static-link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[88svh] flex items-center overflow-hidden pt-24 pb-16">
      <Image
        src="/hero-botanical-recovery.jpg"
        alt="HIMURJA botanical recovery oil bottle against Himalayan botanicals"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/35" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-left"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-medium"
          >
            Premium Transparent Botanical Recovery Care
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6"
          >
            HIMURJA No. 01
            <br />
            <span className="text-gold">Botanical Recovery Oil</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white/75 text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
          >
            One product. Four botanical oils. Zero complexity.
            <br />
            Prepare tonight. Face tomorrow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
          >
            <Link
              href="/product"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-charcoal font-medium tracking-wide hover:bg-white transition-all duration-300 text-base md:text-lg"
            >
              Discover HIMURJA No. 01
            </Link>
            <Link
              href="/ingredients"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-medium tracking-wide hover:bg-white/10 transition-all duration-300 text-base md:text-lg"
            >
              See Ingredients
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-6 w-6 text-white/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
