"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, FlaskConical, Check } from "lucide-react";
import { PRODUCT } from "@/lib/data";
import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/section-wrapper";

export default function IngredientCards() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <SectionWrapper background="white" padding="lg" id="ingredients">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-green text-sm tracking-[0.2em] uppercase mb-4 font-medium"
        >
          Pure Ingredients
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-6"
        >
          Four Ingredients.
          <br />
          <span className="text-stone">Nothing Else.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-stone text-lg max-w-2xl mx-auto"
        >
          Every ingredient is carefully selected for its specific function. No fillers. No additives. Just pure botanical efficacy.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PRODUCT.ingredients.map((ingredient, index) => (
          <motion.div
            key={ingredient.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "border transition-all duration-500 cursor-pointer",
              expandedIndex === index
                ? "border-green bg-white shadow-lg"
                : "border-light-gray hover:border-stone/30"
            )}
          >
            <button
              onClick={() => toggleExpand(index)}
              className="w-full text-left p-6"
              aria-expanded={expandedIndex === index}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-serif text-charcoal">{ingredient.name}</h3>
                <span className="text-sm font-mono text-green font-medium">{ingredient.percentage}</span>
              </div>
              <p className="text-stone text-sm italic mb-3">
                {ingredient.botanicalName}
              </p>
              <p className="text-stone text-sm">{ingredient.function}</p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center text-xs text-stone">
                  <MapPin className="h-3 w-3 mr-1" />
                  {ingredient.origin}
                </div>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-stone transition-transform duration-300",
                    expandedIndex === index && "rotate-180"
                  )}
                />
              </div>
            </button>

            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 border-t border-light-gray pt-4">
                    <div className="flex items-start mb-4">
                      <FlaskConical className="h-4 w-4 text-green mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-stone text-sm leading-relaxed">
                        {ingredient.scientificExplanation}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wider uppercase text-charcoal mb-2">
                        Benefits
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {ingredient.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center text-xs text-stone">
                            <Check className="h-3 w-3 text-green mr-1.5 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}