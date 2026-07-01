"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "@/components/static-link";
import Image from "next/image";
import { publicPath } from "@/lib/base-path";
import { PRODUCT } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative min-h-[88svh] flex items-center overflow-hidden pt-24 pb-14">
      <Image
        src={publicPath("/product img.jpeg")}
        alt="HIMURJA No. 01 overnight facial oil with the HIMURJA logo"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[46%_center] md:object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/75 via-charcoal/20 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-charcoal/35 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-[42rem] text-left">
          <p className="text-gold text-xs md:text-sm tracking-[0.28em] uppercase mb-5 font-semibold">
            Transparent Botanical Recovery Care
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.7rem] font-serif text-white leading-[1.04] mb-6">
            HIMURJA No. 01
            <br />
            <span className="text-gold">Overnight Botanical Oil</span>
          </h1>

          <p className="text-white/80 text-base md:text-xl max-w-[34rem] mb-10 leading-relaxed">
            Four cold-pressed botanical oils for a simpler nighttime ritual.
            Skin support without the noise.
          </p>
          <p className="mb-8 inline-block max-w-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold leading-relaxed tracking-wide text-white backdrop-blur-sm sm:text-sm">
            {formatPrice(PRODUCT.price)} | {PRODUCT.size} | {PRODUCT.formulaSummary}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <Link
              href="/product"
              className="inline-flex items-center justify-center px-7 py-4 bg-gold text-charcoal font-semibold tracking-wide hover:bg-white transition-all duration-300 text-base"
            >
              Shop HIMURJA No. 01
            </Link>
            <Link
              href="/ingredients"
              className="inline-flex items-center justify-center px-7 py-4 border border-white/35 text-white font-semibold tracking-wide hover:bg-white/10 transition-all duration-300 text-base"
            >
              View Ingredients
            </Link>
          </div>
        </div>

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
