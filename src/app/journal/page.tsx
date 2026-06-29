"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { JOURNAL_POSTS } from "@/lib/data";
import SectionWrapper from "@/components/section-wrapper";
import Link from "@/components/static-link";

export default function JournalPage() {
  const featured = JOURNAL_POSTS[0];
  const rest = JOURNAL_POSTS.slice(1);

  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-green text-sm tracking-[0.2em] uppercase mb-4 font-medium">Journal</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6">
              Insights & Stories
            </h1>
            <p className="text-stone text-lg max-w-2xl mx-auto">
              Thoughts on skincare, transparency, and the philosophy of doing more with less.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <SectionWrapper background="white" padding="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group cursor-pointer"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-gradient-to-br from-charcoal/10 via-green/20 to-gold/10" />
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-green bg-green/10 px-3 py-1">
                {featured.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-serif text-charcoal mt-4 mb-4 group-hover:text-green transition-colors">
                {featured.title}
              </h2>
              <p className="text-stone leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-stone mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {featured.readTime}
                </span>
              </div>
              <Link
                href={`/journal/${featured.slug}`}
                className="inline-flex items-center gap-1 text-sm font-medium text-charcoal border-b border-charcoal pb-0.5 hover:text-green hover:border-green transition-colors"
              >
                Read Article <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Other Posts */}
      <SectionWrapper background="warm" padding="md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white border border-light-gray overflow-hidden"
            >
              <div className="aspect-[16/10] bg-gradient-to-br from-charcoal/5 via-green/10 to-gold/5" />
              <div className="p-6">
                <span className="text-xs font-semibold tracking-wider uppercase text-green">{post.category}</span>
                <h3 className="text-lg font-serif text-charcoal mt-2 mb-3 group-hover:text-green transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-stone mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-stone mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <Link
                  href={`/journal/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-charcoal hover:text-green transition-colors"
                >
                  Read More <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
