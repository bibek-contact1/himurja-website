"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import SectionWrapper from "@/components/section-wrapper";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const testimonial = TESTIMONIALS[currentIndex];

  return (
    <SectionWrapper background="charcoal" padding="lg">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold text-sm tracking-[0.2em] uppercase mb-4 font-medium"
        >
          Real Reviews
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6"
        >
          What Our Customers Say
        </motion.h2>
      </div>

      <div className="max-w-3xl mx-auto relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < testimonial.rating ? "text-gold fill-gold" : "text-white/20"
                  }`}
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-8">
              &ldquo;{testimonial.text}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="mb-4">
              <p className="text-white font-medium">{testimonial.name}</p>
              <p className="text-white/50 text-sm">
                {testimonial.location} &middot; {testimonial.skinType} Skin
              </p>
            </div>

            {/* Verified Badge */}
            <div className="flex items-center justify-center gap-1 text-xs text-gold mb-8">
              <ShieldCheck className="h-4 w-4" />
              <span>Verified Purchase &middot; Used for {testimonial.useDuration}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="p-2 text-white/50 hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-gold w-6" : "bg-white/30"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-2 text-white/50 hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}