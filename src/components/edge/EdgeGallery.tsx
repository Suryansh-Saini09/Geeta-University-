"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import type { EdgeGallerySection, EdgeGalleryItem } from "@/data/edge/types";

interface EdgeGalleryProps {
  section: EdgeGallerySection;
}

export default function EdgeGallery({ section }: EdgeGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<EdgeGalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? section.items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === section.items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-20 lg:py-28 relative overflow-hidden border-t border-slate-200">
      <div className="gu-container">
        
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          {section.eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#E8871A]/10 px-4 py-1 border border-[#E8871A]/20">
              <Sparkles size={14} className="text-[#E8871A]" />
              <span className="text-xs font-bold uppercase tracking-[2px] text-[#E8871A]">
                {section.eyebrow}
              </span>
            </div>
          )}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0A1F44]">
            {section.title}
          </h2>
          {section.subtitle && (
            <p className="mt-3 text-base md:text-lg text-slate-600 font-medium">
              {section.subtitle}
            </p>
          )}
        </div>

        {/* Featured Gallery Viewer (Whole Image Visible, No Cropping/Cutoff) */}
        <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-950 group flex flex-col">
          
          {/* Main Visual Display Area */}
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] lg:h-[520px] bg-slate-950 overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full flex items-center justify-center p-3 sm:p-5"
              >
                {/* Blurred ambient backdrop so wide or tall images fill seamlessly */}
                <img
                  src={section.items[currentIndex].src}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-110 pointer-events-none"
                />

                {/* Foreground whole uncropped image */}
                <img
                  src={section.items[currentIndex].src}
                  alt={section.items[currentIndex].title || `Gallery image ${currentIndex + 1}`}
                  className="relative z-10 max-w-full max-h-full object-contain rounded-xl shadow-lg"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-md transition-all hover:bg-[#E8871A] hover:scale-110 shadow-lg z-20"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-md transition-all hover:bg-[#E8871A] hover:scale-110 shadow-lg z-20"
            >
              <ChevronRight size={22} />
            </button>

            {/* Expand Lightbox Button */}
            <button
              type="button"
              onClick={() => setSelectedImage(section.items[currentIndex])}
              aria-label="Open fullscreen"
              className="absolute top-4 right-4 h-9 w-9 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-md transition hover:bg-black/90 hover:scale-105 z-20"
            >
              <Maximize2 size={16} />
            </button>
          </div>

          {/* Dedicated Bottom Caption Bar (Does not overlap/obscure image content) */}
          {(section.items[currentIndex].title || section.items[currentIndex].caption) && (
            <div className="relative z-20 bg-slate-900 px-6 py-4 text-center text-white border-t border-white/10">
              {section.items[currentIndex].title && (
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                  {section.items[currentIndex].title}
                </h3>
              )}
              {section.items[currentIndex].caption && (
                <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  {section.items[currentIndex].caption}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Thumbnail Strip */}
        <div className="flex justify-center gap-3 mt-6 overflow-x-auto pb-2 px-4">
          {section.items.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`relative h-16 sm:h-20 w-24 sm:w-28 rounded-xl overflow-hidden border-2 transition-all shrink-0 bg-slate-900 ${
                currentIndex === idx
                  ? "border-[#E8871A] scale-105 shadow-md ring-2 ring-[#E8871A]/30"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={item.src}
                alt="thumbnail"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden bg-slate-950 border border-white/20 shadow-2xl flex flex-col"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 rounded-full p-2 text-white/80 hover:text-white bg-black/60 hover:bg-black/90 transition z-30"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="p-4 flex items-center justify-center flex-1 overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title || "Full image"}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg"
                />
              </div>

              {(selectedImage.title || selectedImage.caption) && (
                <div className="p-5 bg-slate-900 text-white border-t border-white/10 text-center">
                  {selectedImage.title && (
                    <h3 className="font-serif text-xl font-bold">
                      {selectedImage.title}
                    </h3>
                  )}
                  {selectedImage.caption && (
                    <p className="mt-1 text-sm text-slate-300">
                      {selectedImage.caption}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
