"use client";

import React from "react";
import Image from "next/image";
import Link from "@/components/static-link";
import { publicPath } from "@/lib/base-path";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionWrapper from "@/components/section-wrapper";

export default function FounderStory() {
  return (
    <SectionWrapper background="white" padding="lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-green text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            Our Story
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-8">
            Why HIMURJA
            <br />
            <span className="text-stone">Was Created</span>
          </h2>

          <div className="space-y-5 text-stone leading-relaxed">
            <p>
              HIMURJA was born from a simple observation: the skincare industry had lost its way.
            </p>
            <p>
              As someone who grew up in Nepal, surrounded by the natural beauty of the Himalayas, I witnessed
              firsthand how traditional wellness practices used simple, pure ingredients to support healthy skin.
              No complicated routines. No aggressive chemicals. Just nature, working as intended.
            </p>
            <p>
              But after years in the urban professional world, I found myself surrounded by a skincare culture
              that seemed designed to overwhelm. Endless products. Confusing ingredients. Exaggerated claims.
              It felt like the industry was selling anxiety, not solutions.
            </p>
            <p>
              HIMURJA is my response. A return to what matters: transparency, simplicity, and genuine care.
              One product. Four carefully selected botanical oils. Absolute transparency about what is inside
              and where it comes from.
            </p>
            <p>
              Because your skin does not need more products. It needs better ones.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green/20 flex items-center justify-center">
              <Quote className="h-5 w-5 text-green" />
            </div>
            <div>
              <p className="text-sm font-medium text-charcoal">Founder, HIMURJA</p>
              <p className="text-xs text-stone">Nepal</p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center text-sm font-medium text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors"
            >
              Read the full story
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="aspect-[4/5] bg-warm-white relative overflow-hidden">
            <Image
              src={publicPath("/himalayan-botanical-story.jpg")}
              alt="Himalayan mountains and botanicals representing HIMURJA inspiration"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
