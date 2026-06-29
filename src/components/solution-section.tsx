"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Eye, Heart } from "lucide-react";
import SectionWrapper from "@/components/section-wrapper";

const solutions = [
  {
    icon: Leaf,
    title: "Simplicity",
    description:
      "One product replaces an entire routine. No complicated steps, no conflicting instructions, no decision fatigue. Just one thing that works.",
    color: "text-green",
  },
  {
    icon: Heart,
    title: "Recovery",
    description:
      "Your skin knows how to heal itself. We simply support the process with the right botanical ingredients, allowing your skin to do what it was designed to do.",
    color: "text-gold",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Every ingredient, every source, every test result. We believe you deserve to know exactly what you're putting on your skin and where it comes from.",
    color: "text-stone",
  },
];

export default function SolutionSection() {
  return (
    <SectionWrapper background="warm" padding="lg">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-green text-sm tracking-[0.2em] uppercase mb-4 font-medium"
        >
          Our Solution
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal mb-6"
        >
          A Different Approach
          <br />
          <span className="text-stone">To Skincare</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-6 shadow-sm">
              <solution.icon className={`h-7 w-7 ${solution.color}`} />
            </div>
            <h3 className="text-2xl font-serif text-charcoal mb-4">{solution.title}</h3>
            <p className="text-stone leading-relaxed">{solution.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}