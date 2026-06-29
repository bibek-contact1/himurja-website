"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck, ChevronDown } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/section-wrapper";

export default function ReviewsPage() {
  const [sortBy, setSortBy] = useState<"newest" | "highest" | "lowest">("newest");
  const [skinTypeFilter, setSkinTypeFilter] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);

  const skinTypes = ["all", ...new Set(TESTIMONIALS.map((t) => t.skinType))];

  const sorted = [...TESTIMONIALS].sort((a, b) => {
    if (sortBy === "highest") return b.rating - a.rating;
    if (sortBy === "lowest") return a.rating - b.rating;
    return b.id - a.id;
  });

  const filtered = sorted.filter(
    (t) => skinTypeFilter === "all" || t.skinType === skinTypeFilter
  );

  const averageRating = (
    TESTIMONIALS.reduce((acc, t) => acc + t.rating, 0) / TESTIMONIALS.length
  ).toFixed(1);

  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-green text-sm tracking-[0.2em] uppercase mb-4 font-medium">Reviews</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6">
              What Our Customers Say
            </h1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < Math.round(Number(averageRating)) ? "text-gold fill-gold" : "text-light-gray"}`} />
                ))}
              </div>
              <span className="text-2xl font-serif text-charcoal">{averageRating}</span>
            </div>
            <p className="text-stone">Based on {TESTIMONIALS.length} verified reviews</p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper background="white" padding="md">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm text-stone hover:text-charcoal transition-colors"
          >
            Filter by Skin Type
            <ChevronDown className={cn("h-4 w-4 transition-transform", showFilters && "rotate-180")} />
          </button>
          <div className="flex items-center gap-3">
            <span className="text-xs text-stone">Sort by:</span>
            {(["newest", "highest", "lowest"] as const).map((option) => (
              <button
                key={option}
                onClick={() => setSortBy(option)}
                className={cn(
                  "text-xs px-3 py-1.5 border transition-colors",
                  sortBy === option
                    ? "border-charcoal bg-charcoal text-white"
                    : "border-light-gray text-stone hover:border-stone"
                )}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="overflow-hidden mb-8"
          >
            <div className="flex flex-wrap gap-2 pb-4 border-b border-light-gray">
              {skinTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSkinTypeFilter(type)}
                  className={cn(
                    "text-xs px-4 py-2 border transition-colors",
                    skinTypeFilter === type
                      ? "border-green bg-green/10 text-green"
                      : "border-light-gray text-stone hover:border-stone"
                  )}
                >
                  {type === "all" ? "All Skin Types" : type}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-6 bg-warm-white border border-light-gray"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "text-gold fill-gold" : "text-light-gray"}`}
                    />
                  ))}
                </div>
                <ShieldCheck className="h-4 w-4 text-green" />
              </div>
              <p className="text-sm text-stone mb-4 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="border-t border-light-gray pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-charcoal">{testimonial.name}</p>
                    <p className="text-xs text-stone">
                      {testimonial.location} &middot; {testimonial.skinType} Skin
                    </p>
                  </div>
                  <span className="text-xs text-green">Verified</span>
                </div>
                <p className="text-xs text-stone mt-2">Used for {testimonial.useDuration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}