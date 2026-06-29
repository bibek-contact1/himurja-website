"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Eye, Heart, Quote } from "lucide-react";
import SectionWrapper from "@/components/section-wrapper";
import { BRAND } from "@/lib/data";

const pillars = [
  {
    icon: Heart,
    title: "Recovery",
    color: "text-gold",
    description: "Your skin has an incredible ability to heal and regenerate itself. Our role is not to force change, but to support the natural recovery process. We believe in working with your skin, not against it.",
    principles: [
      "Support natural skin barrier function",
      "Allow skin to regulate itself",
      "Use ingredients that complement biology",
      "Avoid aggressive actives that disrupt balance",
    ],
  },
  {
    icon: Eye,
    title: "Transparency",
    color: "text-stone",
    description: "Trust is earned through complete openness. We disclose every ingredient, its source, its percentage, and its purpose. No proprietary blends. No hidden components. No marketing secrets.",
    principles: [
      "Full ingredient disclosure with percentages",
      "Traceable sourcing from origin to bottle",
      "Third-party testing results available",
      "Honest communication about what we can and cannot do",
    ],
  },
  {
    icon: Leaf,
    title: "Simplicity",
    color: "text-green",
    description: "Complexity is not sophistication. True sophistication is achieving results with minimal means. One product. Four ingredients. Zero confusion. That is the HIMURJA way.",
    principles: [
      "One product replaces multi-step routines",
      "Fewer, better ingredients",
      "Clear, simple usage instructions",
      "Reduce decision fatigue in skincare",
    ],
  },
];

export default function PhilosophyPage() {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-green text-sm tracking-[0.2em] uppercase mb-4 font-medium">Our Philosophy</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6">
              {BRAND.pillars[0]}, {BRAND.pillars[1]}, {BRAND.pillars[2]}
            </h1>
            <p className="text-stone text-lg max-w-3xl mx-auto leading-relaxed">
              {BRAND.philosophy}
            </p>
          </motion.div>
        </div>
      </section>

      {pillars.map((pillar, index) => (
        <SectionWrapper key={pillar.title} background={index % 2 === 0 ? "white" : "warm"} padding="md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}
            >
              <pillar.icon className={`h-10 w-10 ${pillar.color} mb-4`} />
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-6">{pillar.title}</h2>
              <p className="text-stone leading-relaxed mb-8">{pillar.description}</p>
              <ul className="space-y-3">
                {pillar.principles.map((principle) => (
                  <li key={principle} className="flex items-start gap-3 text-sm text-stone">
                    <span className="w-1.5 h-1.5 rounded-full bg-green mt-2 flex-shrink-0" />
                    {principle}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}
            >
              <div className="aspect-square bg-gradient-to-br from-charcoal/5 via-green/10 to-gold/5 flex items-center justify-center">
                <pillar.icon className={`h-24 w-24 ${pillar.color} opacity-30`} />
              </div>
            </motion.div>
          </div>
        </SectionWrapper>
      ))}

      <SectionWrapper background="charcoal" padding="md">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Quote className="h-10 w-10 text-gold mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-serif text-white leading-relaxed mb-6">
              &ldquo;Modern skincare often overwhelms consumers with increasingly complicated routines, aggressive actives, and confusing ingredients. HIMURJA takes a different approach.&rdquo;
            </blockquote>
            <p className="text-white/60">— The HIMURJA Manifesto</p>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}