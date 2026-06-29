"use client";

import React from "react";
import { motion } from "framer-motion";
import { Droplets, Moon, Sun } from "lucide-react";
import SectionWrapper from "@/components/section-wrapper";

const steps = [
  {
    icon: Droplets,
    number: "01",
    title: "Apply 2–3 Drops",
    description: "After cleansing, gently press 2–3 drops of HIMURJA No. 01 onto your face and neck.",
  },
  {
    icon: Moon,
    number: "02",
    title: "Sleep",
    description: "Let the botanical oils work while you rest. Your skin does its best repair work overnight.",
  },
  {
    icon: Sun,
    number: "03",
    title: "Wake Up Ready",
    description: "Wake up to refreshed, healthier-looking skin. Ready for whatever the day brings.",
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper background="charcoal" padding="lg">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold text-sm tracking-[0.2em] uppercase mb-4 font-medium"
        >
          How It Works
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6"
        >
          Three Simple Steps
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg max-w-2xl mx-auto"
        >
          No complicated routines. No confusion. Just three steps to healthier skin.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px bg-white/10" />

        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="text-center relative"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6 relative z-10">
              <step.icon className="h-7 w-7 text-gold" />
            </div>
            <span className="block text-gold text-sm font-mono mb-2">{step.number}</span>
            <h3 className="text-xl font-serif text-white mb-3">{step.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}