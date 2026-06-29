"use client";

import React from "react";
import { motion } from "framer-motion";
import { PackageOpen, FlaskConical, ShieldAlert, RefreshCw } from "lucide-react";
import SectionWrapper from "@/components/section-wrapper";

const problems = [
  {
    icon: PackageOpen,
    title: "Too Many Products",
    description:
      "The average skincare routine uses 7-12 products daily. More products mean more cost, more time, and more confusion about what actually works.",
  },
  {
    icon: FlaskConical,
    title: "Ingredient Confusion",
    description:
      "With thousands of ingredients and complex INCI names, understanding what you're putting on your skin has become nearly impossible.",
  },
  {
    icon: ShieldAlert,
    title: "Low Trust",
    description:
      "Exaggerated claims, pseudo-science marketing, and lack of transparency have made consumers rightfully skeptical of skincare brands.",
  },
  {
    icon: RefreshCw,
    title: "Complicated Routines",
    description:
      "Multi-step routines with conflicting instructions create stress rather than self-care. Skincare should simplify your life, not complicate it.",
  },
];

export default function ProblemSection() {
  return (
    <SectionWrapper background="white" padding="lg">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-green text-sm tracking-[0.2em] uppercase mb-4 font-medium"
        >
          The Problem
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-6"
        >
          Skincare Has Become
          <br />
          <span className="text-stone">Overwhelming</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-stone text-lg max-w-2xl mx-auto leading-relaxed"
        >
          The modern skincare industry profits from complexity. We believe in something different.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {problems.map((problem, index) => (
          <motion.div
            key={problem.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group p-8 border border-light-gray hover:border-stone/30 transition-all duration-500"
          >
            <problem.icon className="h-8 w-8 text-green mb-6" />
            <h3 className="text-xl font-serif text-charcoal mb-3">{problem.title}</h3>
            <p className="text-stone text-sm leading-relaxed">{problem.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}