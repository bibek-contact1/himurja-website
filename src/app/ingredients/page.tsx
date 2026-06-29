"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, MapPin, ChevronDown } from "lucide-react";
import { PRODUCT } from "@/lib/data";
import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/section-wrapper";

export default function IngredientsPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-green text-sm tracking-[0.2em] uppercase mb-4 font-medium">Ingredient Transparency</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6">
              What&apos;s Inside
              <br />
              <span className="text-stone">Is Exactly What You See</span>
            </h1>
            <p className="text-stone text-lg max-w-2xl mx-auto leading-relaxed">
              We believe you deserve to know every single ingredient in your skincare.
              No proprietary blends. No hidden components. Complete transparency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ingredient Breakdown */}
      <SectionWrapper background="white" padding="md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Percentage Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-serif text-charcoal mb-8">Formulation Breakdown</h2>
            <div className="space-y-6">
              {PRODUCT.ingredients.map((ingredient, index) => (
                <div key={ingredient.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-charcoal">{ingredient.name}</span>
                    <span className="text-sm font-mono text-green">{ingredient.percentage}</span>
                  </div>
                  <div className="w-full h-2 bg-warm-white rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: ingredient.percentage }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-green rounded-full"
                    />
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3 text-stone" />
                    <span className="text-xs text-stone">{ingredient.origin}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Full Disclosure */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-serif text-charcoal mb-8">Full INCI Disclosure</h2>
            <div className="p-6 bg-warm-white border border-light-gray mb-6">
              <p className="text-sm text-stone leading-relaxed">{PRODUCT.fullIngredientsList}</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold tracking-wider uppercase text-charcoal">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {PRODUCT.certifications.map((cert) => (
                  <span key={cert} className="px-3 py-1.5 bg-green/10 text-green text-xs font-medium">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Detailed Ingredient Cards */}
      <SectionWrapper background="warm" padding="md">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">Detailed Breakdown</h2>
          <p className="text-stone max-w-2xl mx-auto">Click each ingredient to learn more about its origin, science, and benefits.</p>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {PRODUCT.ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className={cn(
                  "w-full text-left p-6 border transition-all duration-300",
                  expandedIndex === index ? "bg-white border-green shadow-md" : "bg-white border-light-gray hover:border-stone/30"
                )}
                aria-expanded={expandedIndex === index}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-serif text-charcoal">{ingredient.name}</h3>
                      <span className="text-sm font-mono text-green bg-green/10 px-2 py-0.5">{ingredient.percentage}</span>
                    </div>
                    <p className="text-sm text-stone italic">{ingredient.botanicalName}</p>
                  </div>
                  <ChevronDown className={cn("h-5 w-5 text-stone transition-transform duration-300", expandedIndex === index && "rotate-180")} />
                </div>
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6 border-t border-light-gray">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <div className="flex items-center gap-1 text-sm text-stone mb-4">
                              <MapPin className="h-4 w-4" />
                              <span>Origin: {ingredient.origin}</span>
                            </div>
                            <p className="text-sm text-stone leading-relaxed">{ingredient.scientificExplanation}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold tracking-wider uppercase text-charcoal mb-3">Key Benefits</p>
                            <div className="grid grid-cols-2 gap-2">
                              {ingredient.benefits.map((benefit) => (
                                <div key={benefit} className="flex items-center text-sm text-stone">
                                  <Check className="h-4 w-4 text-green mr-2 flex-shrink-0" />
                                  {benefit}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
