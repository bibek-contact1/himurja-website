"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Shield, Heart, Star, Search, Recycle } from "lucide-react";
import { TRUST_FEATURES } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Leaf, Search, Shield, Heart, Star, Recycle
};

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {TRUST_FEATURES.map((feature, index) => {
        const Icon = iconMap[feature.icon] || Shield;
        return (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="text-center group"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-warm-white mb-3 group-hover:bg-green/10 transition-colors">
              <Icon className="h-5 w-5 text-green" />
            </div>
            <h4 className="text-xs font-semibold tracking-wide text-charcoal mb-1">{feature.title}</h4>
            <p className="text-[11px] text-stone leading-relaxed">{feature.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}