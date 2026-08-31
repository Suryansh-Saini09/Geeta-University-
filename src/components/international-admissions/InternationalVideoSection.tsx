"use client";

import React, { useState } from "react";
import { Play, X, Video } from "lucide-react";
import { INTERNATIONAL_VIDEOS } from "@/data/internationalAdmissions";

export default function InternationalVideoSection() {
  const [activeModalVideo, setActiveModalVideo] = useState<string | null>(null);

  return (
    <section className="py-20 bg-white border-t border-[#E2E8F0]">
      <div className="gu-container">
        <div className="text-center mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E8871A]">
            Visual Campus Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A1F44] font-serif mt-2">
            Campus Life & Campus Tour
          </h2>
          <p className="text-[#64748B] text-base mt-2 max-w-xl mx-auto">
            Take a glance into student vibrant campus atmosphere, high-tech labs, and world-class sports & hostel facilities.
          </p>
        </div>

        {/* Video Frames Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {INTERNATIONAL_VIDEOS.showcaseVideos.map((video, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden bg-[#0A1F44] border border-[#E2E8F0] shadow-md transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 bg-white border-t border-[#E2E8F0]">
                <h3 className="font-extrabold text-[#0A1F44] text-lg flex items-center gap-2">
                  <Video size={18} className="text-[#E8871A]" />
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Virtual Campus Tour Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0A1F44] to-[#012E55] p-10 md:p-16 text-center text-white shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <button
              onClick={() => setActiveModalVideo(INTERNATIONAL_VIDEOS.virtualTourVideoId)}
              className="group h-20 w-20 rounded-full bg-[#E8871A] text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#F5A623] hover:shadow-orange-500/40"
              aria-label="Play Virtual Campus Tour"
            >
              <Play size={32} className="ml-1 fill-current group-hover:scale-110 transition-transform" />
            </button>

            <h3 className="mt-6 text-2xl md:text-4xl font-black font-serif">
              Virtual Campus Tour
            </h3>
            <p className="mt-2 text-white/80 text-sm md:text-base">
              Explore our 40+ acre lush green campus, modern research centers, and state-of-the-art infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {activeModalVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-4xl rounded-2xl bg-black overflow-hidden shadow-2xl">
            <button
              onClick={() => setActiveModalVideo(null)}
              className="absolute top-3 right-3 z-10 h-10 w-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeModalVideo}?autoplay=1`}
                title="Virtual Campus Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
