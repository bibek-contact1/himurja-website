
"use client";

import React from "react";
import Link from "@/components/static-link";
import { motion } from "framer-motion";
import { Globe, Camera, MessageCircle, ArrowUpRight } from "lucide-react";
import { BRAND, NAVIGATION } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warm-white border-t border-light-gray">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Main Footer */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/">
              <span className="text-2xl font-serif font-bold tracking-wider text-charcoal">
                HIMURJA
              </span>
            </Link>
            <p className="mt-4 text-stone text-sm leading-relaxed max-w-xs">
              {BRAND.tagline}
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone hover:text-charcoal transition-colors"
                aria-label="Instagram"
              >
                <Camera className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone hover:text-charcoal transition-colors"
                aria-label="Facebook"
              >
                <Globe className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone hover:text-charcoal transition-colors"
                aria-label="Twitter"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Navigation Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xs font-semibold tracking-widest uppercase text-charcoal mb-6">
              Pages
            </h4>
            <ul className="space-y-4">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-stone hover:text-charcoal text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xs font-semibold tracking-widest uppercase text-charcoal mb-6">
              Support
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/faq" className="text-stone hover:text-charcoal text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-stone hover:text-charcoal text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-stone hover:text-charcoal text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-stone hover:text-charcoal text-sm transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-stone hover:text-charcoal text-sm transition-colors">
                  Reviews
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xs font-semibold tracking-widest uppercase text-charcoal mb-6">
              Stay Connected
            </h4>
            <p className="text-stone text-sm mb-4">
              Join our community for exclusive updates, skincare insights, and early access.
            </p>
            <form className="flex border-b border-charcoal pb-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent text-sm text-charcoal placeholder-stone flex-1 outline-none"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="text-charcoal hover:text-gold transition-colors"
                aria-label="Subscribe"
              >
                <ArrowUpRight className="h-5 w-5" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-light-gray flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-stone text-xs">
            &copy; {currentYear} HIMURJA. All rights reserved.
          </p>
          <p className="text-stone text-xs">
            Crafted with care in Nepal. Inspired by the Himalayas.
          </p>
        </div>
      </div>
    </footer>
  );
}
