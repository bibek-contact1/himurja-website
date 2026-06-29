"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star, ShieldCheck, Check, ChevronDown, Droplets, Moon, Sun,
  ShoppingBag, MapPin, FlaskConical, Truck, RotateCcw
} from "lucide-react";
import { PRODUCT, FAQS, TESTIMONIALS } from "@/lib/data";
import { formatPrice, cn } from "@/lib/utils";
import Link from "@/components/static-link";
import Image from "next/image";
import SectionWrapper from "@/components/section-wrapper";

export default function ProductPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      {/* Product Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] bg-warm-white relative overflow-hidden">
                <Image
                  src="/product-bottle-mockup.jpg"
                  alt="HIMURJA No. 01 botanical recovery oil bottle"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 shadow-lg">
                <p className="text-xs text-stone">Size</p>
                <p className="text-lg font-serif text-charcoal">{PRODUCT.size}</p>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-green text-sm tracking-[0.2em] uppercase mb-4 font-medium">
                Hero Product
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-4">
                {PRODUCT.name}
              </h1>
              <p className="text-lg text-stone mb-4">{PRODUCT.type}</p>

              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-serif text-charcoal">{formatPrice(PRODUCT.price)}</span>
                <span className="text-sm text-stone">+ Free delivery on 2 pcs</span>
              </div>

              <p className="text-stone leading-relaxed mb-8">
                {PRODUCT.description}
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-1.5 text-xs text-stone">
                  <ShieldCheck className="h-4 w-4 text-green" />
                  100% Natural
                </div>
                <div className="flex items-center gap-1.5 text-xs text-stone">
                  <ShieldCheck className="h-4 w-4 text-green" />
                  Cruelty-Free
                </div>
                <div className="flex items-center gap-1.5 text-xs text-stone">
                  <ShieldCheck className="h-4 w-4 text-green" />
                  Cold-Pressed
                </div>
                <div className="flex items-center gap-1.5 text-xs text-stone">
                  <ShieldCheck className="h-4 w-4 text-green" />
                  No Additives
                </div>
              </div>

              {/* Quantity + Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex items-center border border-light-gray">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 text-stone hover:text-charcoal transition-colors"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="px-4 py-3 text-charcoal font-medium min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    className="px-4 py-3 text-stone hover:text-charcoal transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <button className="flex-1 flex items-center justify-center gap-2 bg-charcoal text-white px-8 py-3 font-medium tracking-wide hover:bg-dark-charcoal transition-all duration-300">
                  <ShoppingBag className="h-5 w-5" />
                  Add to Cart — {formatPrice(PRODUCT.price * quantity)}
                </button>
              </div>

              <div className="flex items-center gap-6 text-xs text-stone">
                <div className="flex items-center gap-1.5">
                  <Truck className="h-4 w-4" />
                  Free delivery when you order 2 pcs
                </div>
                <div className="flex items-center gap-1.5">
                  <RotateCcw className="h-4 w-4" />
                  30-day satisfaction guarantee
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <SectionWrapper background="white" padding="md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-green text-sm tracking-[0.2em] uppercase mb-4 font-medium">How to Use</p>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-8">
              Simple Nightly Ritual
            </h2>
            <div className="space-y-6">
              {PRODUCT.howToUse.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-charcoal text-white text-xs flex items-center justify-center font-medium">
                    {index + 1}
                  </span>
                  <p className="text-stone pt-1">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-warm-white flex items-center justify-center mx-auto mb-3">
                  <Droplets className="h-7 w-7 text-green" />
                </div>
                <p className="text-xs text-stone">Apply</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-warm-white flex items-center justify-center mx-auto mb-3">
                  <Moon className="h-7 w-7 text-charcoal" />
                </div>
                <p className="text-xs text-stone">Sleep</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-warm-white flex items-center justify-center mx-auto mb-3">
                  <Sun className="h-7 w-7 text-gold" />
                </div>
                <p className="text-xs text-stone">Wake</p>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Benefits */}
      <SectionWrapper background="warm" padding="md">
        <div className="text-center mb-12">
          <p className="text-green text-sm tracking-[0.2em] uppercase mb-4 font-medium">Benefits</p>
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal">Why You&apos;ll Love It</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-3 p-5 bg-white border border-light-gray"
            >
              <Check className="h-5 w-5 text-green flex-shrink-0 mt-0.5" />
              <span className="text-stone">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Ingredients */}
      <SectionWrapper background="white" padding="md">
        <div className="text-center mb-12">
          <p className="text-green text-sm tracking-[0.2em] uppercase mb-4 font-medium">Ingredients</p>
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">What&apos;s Inside</h2>
          <p className="text-stone max-w-2xl mx-auto">{PRODUCT.fullIngredientsList}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCT.ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 border border-light-gray"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-charcoal">{ingredient.name}</h3>
                <span className="text-sm font-mono text-green">{ingredient.percentage}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-stone mb-3">
                <MapPin className="h-3 w-3" />
                {ingredient.origin}
                <span className="mx-1">·</span>
                <FlaskConical className="h-3 w-3" />
                {ingredient.botanicalName}
              </div>
              <p className="text-sm text-stone">{ingredient.function}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/ingredients"
            className="inline-flex items-center text-sm font-medium text-charcoal border-b border-charcoal pb-0.5 hover:text-green hover:border-green transition-colors"
          >
            View Full Ingredient Transparency
          </Link>
        </div>
      </SectionWrapper>

      {/* Reviews */}
      <SectionWrapper background="warm" padding="md">
        <div className="text-center mb-12">
          <p className="text-green text-sm tracking-[0.2em] uppercase mb-4 font-medium">Reviews</p>
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">What Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-white border border-light-gray"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? "text-gold fill-gold" : "text-light-gray"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-stone mb-4 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-charcoal">{testimonial.name}</p>
                  <p className="text-xs text-stone">{testimonial.location}</p>
                </div>
                <ShieldCheck className="h-4 w-4 text-green" />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/reviews"
            className="inline-flex items-center text-sm font-medium text-charcoal border-b border-charcoal pb-0.5 hover:text-green hover:border-green transition-colors"
          >
            Read All Reviews
          </Link>
        </div>
      </SectionWrapper>

      {/* Product FAQ */}
      <SectionWrapper background="white" padding="md">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-green text-sm tracking-[0.2em] uppercase mb-4 font-medium">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal">Questions About HIMURJA No. 01</h2>
          </div>
          {FAQS.slice(0, 6).map((faq, index) => (
            <div key={index} className="border-b border-light-gray">
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full py-5 flex items-center justify-between text-left"
                aria-expanded={expandedFaq === index}
              >
                <span className="text-charcoal font-medium pr-8">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-stone flex-shrink-0 transition-transform duration-300",
                    expandedFaq === index && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-stone leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center text-sm font-medium text-charcoal border-b border-charcoal pb-0.5 hover:text-green hover:border-green transition-colors"
            >
              View All FAQs
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Philosophy */}
      <SectionWrapper background="charcoal" padding="md">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gold text-sm tracking-[0.2em] uppercase mb-4 font-medium">Our Philosophy</p>
            <blockquote className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-6">
              &ldquo;{PRODUCT.philosophy}&rdquo;
            </blockquote>
            <Link
              href="/philosophy"
              className="inline-flex items-center text-sm font-medium text-gold border-b border-gold pb-0.5 hover:text-white hover:border-white transition-colors"
            >
              Read Our Philosophy
            </Link>
          </motion.div>
        </div>
      </SectionWrapper>
    </>
  );
}
