"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "@/components/static-link";
import { PRODUCT } from "@/lib/data";

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-dark-charcoal to-green/70" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gold/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-6 font-medium">
            Begin Your Journey
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
            Ready to Simplify
            <br />
            <span className="text-gold">Your Skincare?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            One product. Four botanical oils. Zero complexity.
            <br />
            Support your skin naturally while you sleep.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Link
              href="/product"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gold text-charcoal font-medium tracking-wide hover:bg-white transition-all duration-300 text-lg group"
            >
              Get HIMURJA No. 01
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/ingredients"
              className="inline-flex items-center px-10 py-4 border border-white/30 text-white font-medium tracking-wide hover:bg-white/10 transition-all duration-300 text-lg"
            >
              Learn More
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-white/50">
              <ShieldCheck className="h-4 w-4 text-gold" />
              <span>30-Day Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-white/50">
              <ShieldCheck className="h-4 w-4 text-gold" />
              <span>Free Delivery on Orders of 2 pcs</span>
            </div>
            <div className="flex items-center gap-2 text-white/50">
              <ShieldCheck className="h-4 w-4 text-gold" />
              <span>{PRODUCT.certifications[0]}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
