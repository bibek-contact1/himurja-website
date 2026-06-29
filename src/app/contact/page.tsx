"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Send, Camera, Globe, MessageCircle } from "lucide-react";
import SectionWrapper from "@/components/section-wrapper";

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-green text-sm tracking-[0.2em] uppercase mb-4 font-medium">Contact</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6">
              Get in Touch
            </h1>
            <p className="text-stone text-lg max-w-2xl mx-auto">
              We would love to hear from you. Whether you have a question about our products, ingredients, or philosophy—reach out.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper background="white" padding="md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-serif text-charcoal mb-8">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold tracking-wider uppercase text-charcoal mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full px-4 py-3 bg-warm-white border border-light-gray text-charcoal placeholder-stone outline-none focus:border-green transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold tracking-wider uppercase text-charcoal mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 bg-warm-white border border-light-gray text-charcoal placeholder-stone outline-none focus:border-green transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold tracking-wider uppercase text-charcoal mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full px-4 py-3 bg-warm-white border border-light-gray text-charcoal placeholder-stone outline-none focus:border-green transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-semibold tracking-wider uppercase text-charcoal mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-warm-white border border-light-gray text-charcoal placeholder-stone outline-none focus:border-green transition-colors resize-none"
                  placeholder="Tell us more..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-charcoal text-white px-8 py-3 font-medium tracking-wide hover:bg-dark-charcoal transition-all duration-300"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
            <p className="text-xs text-stone mt-4">
              We typically respond within 24 hours on business days.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-serif text-charcoal mb-8">Contact Information</h2>
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <Mail className="h-5 w-5 text-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-charcoal">Email</p>
                  <p className="text-sm text-stone">hello@himurja.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="h-5 w-5 text-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-charcoal">Location</p>
                  <p className="text-sm text-stone">Bharatpur, Chitwan, Nepal</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="h-5 w-5 text-green flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-charcoal">Response Time</p>
                  <p className="text-sm text-stone">Within 24 hours on business days</p>
                </div>
              </div>
            </div>

            <h3 className="text-sm font-semibold tracking-wider uppercase text-charcoal mb-4">Follow Us</h3>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-warm-white flex items-center justify-center text-stone hover:bg-charcoal hover:text-white transition-all" aria-label="Instagram">
                <Camera className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-warm-white flex items-center justify-center text-stone hover:bg-charcoal hover:text-white transition-all" aria-label="Facebook">
                <Globe className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-warm-white flex items-center justify-center text-stone hover:bg-charcoal hover:text-white transition-all" aria-label="Twitter">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}