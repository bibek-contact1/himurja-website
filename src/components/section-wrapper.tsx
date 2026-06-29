"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "warm" | "charcoal" | "green";
  id?: string;
  padding?: "sm" | "md" | "lg";
}

const bgMap = {
  white: "bg-white",
  warm: "bg-warm-white",
  charcoal: "bg-charcoal text-white",
  green: "bg-green text-white",
};

const paddingMap = {
  sm: "py-16 md:py-20",
  md: "py-20 md:py-28",
  lg: "py-28 md:py-36",
};

export default function SectionWrapper({
  children,
  className,
  background = "white",
  id,
  padding = "md",
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn(bgMap[background], paddingMap[padding], "relative", className)}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16"
      >
        {children}
      </motion.div>
    </section>
  );
}