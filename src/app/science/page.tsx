"use client";

import React from "react";
import { motion } from "framer-motion";
import { Moon, Brain, Activity, Shield, Clock, Sun } from "lucide-react";
import SectionWrapper from "@/components/section-wrapper";

export default function SciencePage() {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-green text-sm tracking-[0.2em] uppercase mb-4 font-medium">The Science</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6">
              The Science of
              <br />
              <span className="text-stone">Overnight Recovery</span>
            </h1>
            <p className="text-stone text-lg max-w-2xl mx-auto leading-relaxed">
              While you sleep, your skin works harder than it does during the day. Understanding this biology is key to supporting it effectively.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper background="white" padding="md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Moon className="h-10 w-10 text-charcoal mb-4" />
            <h2 className="text-3xl font-serif text-charcoal mb-6">The Circadian Rhythm of Skin</h2>
            <div className="space-y-4 text-stone leading-relaxed">
              <p>Your skin operates on a 24-hour cycle known as the circadian rhythm. During the day, it focuses on protection—defending against UV radiation, pollution, and environmental stressors.</p>
              <p>At night, the priority shifts dramatically. Blood flow to the skin increases, cell turnover accelerates, and repair processes are activated. This is when your skin is most receptive to nourishment and recovery.</p>
              <p>This is precisely why HIMURJA No. 01 is designed for overnight use—it works in harmony with your skin&apos;s natural repair cycle.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-charcoal/5 via-green/10 to-gold/5 p-8"
          >
            <div className="flex items-center justify-center h-64 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border-4 border-green/20 border-t-green animate-spin-slow" />
              </div>
              <div className="text-center relative z-10">
                <Sun className="h-8 w-8 text-gold mx-auto mb-2" />
                <p className="text-xs text-stone">Day — Protection Mode</p>
                <div className="border-t border-light-gray my-4 w-16 mx-auto" />
                <Moon className="h-8 w-8 text-charcoal mx-auto mb-2" />
                <p className="text-xs text-stone">Night — Recovery Mode</p>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="warm" padding="md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Activity, title: "Cell Turnover", desc: "Skin cell regeneration increases by up to 30% during sleep, replacing damaged cells with new ones." },
            { icon: Shield, title: "Barrier Repair", desc: "The skin barrier permeability increases at night, making it more receptive to beneficial ingredients." },
            { icon: Clock, title: "Optimal Absorption", desc: "With lower cortisol levels and increased blood flow, nighttime offers optimal conditions for nutrient absorption." },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 border border-light-gray"
            >
              <item.icon className="h-8 w-8 text-green mb-4" />
              <h3 className="text-lg font-serif text-charcoal mb-2">{item.title}</h3>
              <p className="text-sm text-stone">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="white" padding="md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-video bg-gradient-to-br from-green/20 via-charcoal/5 to-gold/10 flex items-center justify-center">
              <Brain className="h-16 w-16 text-green/30" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl font-serif text-charcoal mb-6">Why Botanical Oils?</h2>
            <div className="space-y-4 text-stone leading-relaxed">
              <p>Botanical oils are uniquely suited to support overnight skin recovery. Their molecular structure is remarkably similar to the skin&apos;s own sebum, allowing for deep penetration and optimal absorption.</p>
              <p>Cold-pressed oils retain their full complement of vitamins, essential fatty acids, and antioxidants—unlike heat-processed oils that lose much of their nutritional value.</p>
              <p>The ideal 3:1 ratio of omega-6 to omega-3 fatty acids found in our Hemp Seed oil mirrors what human skin needs for optimal barrier function and repair.</p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="warm" padding="md">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-serif text-charcoal mb-6">Our Approach</h2>
            <p className="text-stone leading-relaxed mb-6">
              We do not claim to cure diseases or make unrealistic promises. The science is clear: given the right support, your skin has an extraordinary capacity to repair and regenerate itself naturally. HIMURJA No. 01 is designed to provide that support—nothing more, nothing less.
            </p>
            <p className="text-sm text-stone italic">
              Evidence-based. Transparent. Effective.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}
