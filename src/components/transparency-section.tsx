"use client";

import React from "react";
import { motion } from "framer-motion";
import { QrCode, Shield, FileCheck, Search } from "lucide-react";
import SectionWrapper from "@/components/section-wrapper";
import { PRODUCT } from "@/lib/data";

const transparencyItems = [
  {
    icon: Search,
    title: "Ingredient Sourcing",
    description: "Every ingredient is traceable from source to bottle. We know exactly where our Jojoba, Hemp Seed, Rosehip, and Rhododendron oils come from.",
  },
  {
    icon: FileCheck,
    title: "Third-Party Testing",
    description: "Every batch is independently tested for purity, potency, and safety. Results are available by QR code.",
  },
  {
    icon: Shield,
    title: "Full Disclose",
    description: "100% of ingredients are listed with their exact percentages and botanical names. No proprietary blends, no hidden ingredients.",
  },
  {
    icon: QrCode,
    title: "QR Traceability",
    description: "Each bottle includes a QR code that links to batch-specific test results, sourcing details, and full ingredient transparency.",
  },
];

export default function TransparencySection() {
  return (
    <SectionWrapper background="warm" padding="lg">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-green text-sm tracking-[0.2em] uppercase mb-4 font-medium"
        >
          Radical Transparency
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-6"
        >
          We Have Nothing
          <br />
          <span className="text-stone">To Hide</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-stone text-lg max-w-2xl mx-auto"
        >
          Trust is earned through transparency. We disclose everything—from ingredient sources to test results.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {transparencyItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex gap-5"
          >
            <div className="flex-shrink-0">
              <item.icon className="h-6 w-6 text-green" />
            </div>
            <div>
              <h3 className="text-lg font-serif text-charcoal mb-2">{item.title}</h3>
              <p className="text-stone text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certification Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-xs font-semibold tracking-widest uppercase text-charcoal mb-6">
          Certifications & Quality Standards
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {PRODUCT.certifications.map((cert) => (
            <span
              key={cert}
              className="px-4 py-2 bg-white border border-light-gray text-xs font-medium text-stone"
            >
              {cert}
            </span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}