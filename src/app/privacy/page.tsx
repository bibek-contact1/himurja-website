"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/section-wrapper";

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-green text-sm tracking-[0.2em] uppercase mb-4 font-medium">Legal</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6">
              Privacy Policy
            </h1>
            <p className="text-stone">Last updated: March 2024</p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper background="white" padding="md">
        <div className="max-w-3xl mx-auto prose prose-stone">
          <div className="space-y-8 text-stone leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif text-charcoal mb-4">1. Introduction</h2>
              <p>
                HIMURJA (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or purchase our products.
              </p>
              <p className="mt-4">
                By using our website, you consent to the data practices described in this policy. If you do not agree with any part of this policy, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-charcoal mb-4">2. Information We Collect</h2>
              <h3 className="text-lg font-serif text-charcoal mb-2">Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Make a purchase or attempt to make a purchase</li>
                <li>Sign up for our newsletter</li>
                <li>Contact us through our website</li>
                <li>Create a customer account</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className="mt-4">This information may include your name, email address, shipping address, billing address, phone number, and payment information.</p>

              <h3 className="text-lg font-serif text-charcoal mt-6 mb-2">Automatically Collected Information</h3>
              <p>When you visit our website, we automatically collect certain information including your IP address, browser type, operating system, referring URLs, and browsing behavior.</p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-charcoal mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Process and fulfill your orders</li>
                <li>Send you order confirmations and shipping updates</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and product offerings</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-charcoal mb-4">4. Information Sharing</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.</p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-charcoal mb-4">5. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security of your data.</p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-charcoal mb-4">6. Cookies</h2>
              <p>Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device. You can control cookie preferences through your browser settings. Essential cookies are required for the website to function properly.</p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-charcoal mb-4">7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Delete your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-4">To exercise any of these rights, please contact us at privacy@himurja.com.</p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-charcoal mb-4">8. Contact</h2>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <p className="mt-2">Email: privacy@himurja.com</p>
              <p>Address: Bharatpur, Chitwan, Nepal</p>
            </section>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}