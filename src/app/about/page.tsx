"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Mountain, Droplets, Heart } from "lucide-react";
import SectionWrapper from "@/components/section-wrapper";
import { BRAND } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-green text-sm tracking-[0.2em] uppercase mb-4 font-medium">About HIMURJA</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6">
              The Energy of Nature
              <br />
              <span className="text-stone">The Purity of the Himalayas</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <SectionWrapper background="white" padding="md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-serif text-charcoal mb-6">The Name</h2>
            <div className="space-y-4 text-stone leading-relaxed">
              <p>
                <strong className="text-charcoal">HIM</strong> represents the Himalayas and purity.
                The Himalayas are not just mountains—they are a symbol of timelessness, natural purity, and
                the source of some of the world&apos;s most potent botanical ingredients.
              </p>
              <p>
                <strong className="text-charcoal">URJA</strong> represents energy, vitality, and renewal.
                It is the life force that flows through nature and through us.
              </p>
              <p>
                Together, <strong className="text-charcoal">HIMURJA</strong> represents the energy of nature
                and the restorative power of botanical care.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-square bg-gradient-to-br from-charcoal via-green/20 to-gold/10 flex items-center justify-center"
          >
            <div className="text-center">
              <span className="text-5xl font-serif text-charcoal/30">HIMURJA</span>
              <p className="text-stone/50 text-sm mt-2">Himalayas + Energy</p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="warm" padding="md">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Quote className="h-10 w-10 text-green mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-serif text-charcoal leading-relaxed mb-8">
              &ldquo;Support the skin. Allow it to recover. Let it do what it was designed to do.&rdquo;
            </blockquote>
            <p className="text-stone">{BRAND.philosophy}</p>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="white" padding="md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Mountain, title: "Himalayan Inspired", desc: "Drawing wisdom from nature's purest source." },
            { icon: Droplets, title: "Botanical Purity", desc: "Only the finest cold-pressed botanical oils." },
            { icon: Heart, title: "Genuine Care", desc: "Products made with integrity, not marketing hype." },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-warm-white flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-7 w-7 text-green" />
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-2">{item.title}</h3>
              <p className="text-stone">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
