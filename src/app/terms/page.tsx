"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/section-wrapper";

export default function TermsPage() {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-green text-sm tracking-[0.2em] uppercase mb-4 font-medium">Legal</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6">
              Terms & Conditions
            </h1>
            <p className="text-stone">Last updated: March 2024</p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper background="white" padding="md">
        <div className="max-w-3xl mx-auto space-y-8 text-stone leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif text-charcoal mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the HIMURJA website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use our website or purchase our products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-charcoal mb-4">2. Products and Orders</h2>
            <p className="mb-4">
              All products are subject to availability. We reserve the right to discontinue any product at any time. Product descriptions and prices are subject to change without notice.
            </p>
            <h3 className="text-lg font-serif text-charcoal mb-2">Order Acceptance</h3>
            <p>
              We reserve the right to refuse or cancel any order for any reason, including product availability, pricing errors, or suspected fraudulent activity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-charcoal mb-4">3. Pricing and Payment</h2>
            <p>
              All prices are listed in NPR (Nepalese Rupee) and include applicable taxes unless stated otherwise. Payment is required at the time of order. We accept major payment methods as indicated at checkout.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-charcoal mb-4">4. Shipping and Delivery</h2>
            <p>
              We ship to addresses within Nepal and select international destinations. Delivery times are estimates and not guaranteed. We are not responsible for delays caused by customs or shipping carriers.
            </p>
            <p className="mt-4">
              Free delivery is available when you order 2 pcs within Nepal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-charcoal mb-4">5. Returns and Refunds</h2>
            <p>
              We offer a 30-day satisfaction guarantee on all products. If you are not satisfied with your purchase, please contact us within 30 days of delivery to initiate a return.
            </p>
            <p className="mt-4">
              Products must be unused and in their original packaging for a full refund. Return shipping costs are the responsibility of the customer unless the product is defective.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-charcoal mb-4">6. Product Claims</h2>
            <p>
              HIMURJA products are designed to support skin health and are not intended to diagnose, treat, cure, or prevent any disease. Results may vary from person to person. The information on our website is for educational purposes only and should not be considered medical advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-charcoal mb-4">7. Intellectual Property</h2>
            <p>
              All content on this website—including text, images, logos, and product designs—is the intellectual property of HIMURJA and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or use our content without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-charcoal mb-4">8. Limitation of Liability</h2>
            <p>
              HIMURJA shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our liability is limited to the purchase price of the product.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-charcoal mb-4">9. Changes to Terms</h2>
            <p>
              We reserve the right to update these terms at any time. Changes will be effective immediately upon posting. Your continued use of the website after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-charcoal mb-4">10. Contact</h2>
            <p>For questions about these terms, contact us at:</p>
            <p className="mt-2">Email: legal@himurja.com</p>
            <p>Address: Bharatpur, Chitwan, Nepal</p>
          </section>
        </div>
      </SectionWrapper>
    </>
  );
}
