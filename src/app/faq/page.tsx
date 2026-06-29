"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { FAQS } from "@/lib/data";
import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/section-wrapper";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-green text-sm tracking-[0.2em] uppercase mb-4 font-medium">FAQ</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6">
              Frequently Asked Questions
            </h1>
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-stone" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-light-gray text-charcoal placeholder-stone outline-none focus:border-green transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <SectionWrapper background="white" padding="md">
        <div className="max-w-3xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <p className="text-center text-stone">No questions found matching your search.</p>
          ) : (
            filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "border-b border-light-gray last:border-b-0",
                  openIndex === index && "border-green"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-5 flex items-center justify-between text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-charcoal font-medium pr-8">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-stone flex-shrink-0 transition-transform duration-300",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-stone leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          )}
        </div>
      </SectionWrapper>
    </>
  );
}