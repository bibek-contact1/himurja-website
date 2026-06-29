"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/data";
import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/section-wrapper";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper background="warm" padding="lg">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-green text-sm tracking-[0.2em] uppercase mb-4 font-medium"
        >
          Questions
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-6"
        >
          Frequently Asked Questions
        </motion.h2>
      </div>

      <div className="max-w-3xl mx-auto">
        {FAQS.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
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
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-stone leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}