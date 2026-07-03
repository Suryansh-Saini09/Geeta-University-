"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Globe, 
  Calculator, 
  BadgeDollarSign, 
  Landmark,
  CheckCircle2
} from "lucide-react";

const specializations = [
  {
    title: "International Accounting with ACCA",
    icon: Globe,
    points: [
      "Financial Accounting",
      "International Standards",
      "Taxation & Auditing",
    ],
  },
  {
    title: "Advanced Accounting",
    icon: Calculator,
    points: [
      "Corporate Accounting",
      "Financial Management",
      "Cost Accounting",
    ],
  },
  {
    title: "Auditing & Taxation",
    icon: BadgeDollarSign,
    points: [
      "Direct & Indirect Taxes",
      "Internal Auditing",
      "Regulatory Compliance",
    ],
  },
  {
    title: "Banking & Insurance",
    icon: Landmark,
    points: [
      "Banking Operations",
      "Risk Management",
      "Financial Markets",
    ],
  },
];

export default function CommerceProgramsSection() {
  return (
    <section className="relative w-full overflow-hidden font-sans pt-[120px] pb-0 z-10 flex flex-col items-center">
      
      {/* CSS ANIMATIONS & VARIABLES */}
      <style>{`
        @keyframes floatPremium {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      {/* PREMIUM GRADIENT BACKGROUND */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "linear-gradient(180deg, #071A38 0%, #0D2E5C 45%, #133D73 100%)"
        }}
      >
        {/* Depth Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(47,103,187,0.12),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,rgba(216,154,34,0.06),transparent_35%)]" />
        
        {/* Subtle Decorative Elements (Opacity < 8%) */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
          <path d="M-200 400 C 400 150, 900 650, 1600 300" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="6 6" />
          <path d="M-200 500 C 500 250, 1000 750, 1700 400" stroke="#FFFFFF" strokeWidth="0.5" />
        </svg>

        {/* Dotted pattern in corners */}
        <div className="absolute top-12 left-12 w-64 h-64 bg-[radial-gradient(#FFFFFF_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.03]" />
        <div className="absolute bottom-32 right-12 w-64 h-64 bg-[radial-gradient(#FFFFFF_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.03]" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* HEADING BLOCK */}
        <motion.div 
          className="flex flex-col items-center text-center w-full"
          style={{ marginBottom: "60px" }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <br />
          <h3 className="text-[#D89A2B] font-medium tracking-[0.5px]" style={{ fontSize: "30px", marginBottom: "8px" }}>
            Master of Commerce (M.Com)
          </h3>
          <h2 className="text-white font-[800]" style={{ fontSize: "72px", lineHeight: 1.1, marginBottom: "28px" }}>
            Bachelor of Commerce (B.Com)
          </h2>
          
          <p className="font-medium m-auto" style={{ fontSize: "22px", lineHeight: 1.8, color: "rgba(255,255,255,0.82)", maxWidth: "760px", marginBottom: "24px" }}>
            Build expertise in accounting, finance, taxation and global business practices with industry-focused learning.
          </p>

          {/* PREMIUM SECTION DIVIDER: -------- ◆ -------- */}
          <div className="flex items-center justify-center gap-4" style={{ width: "140px" }}>
            <div className="h-[1px] flex-1 bg-[#D89A2B]/60" />
            <div className="w-2 h-2 rotate-45 bg-[#D89A2B]" />
            <div className="h-[1px] flex-1 bg-[#D89A2B]/60" />
          </div>
        </motion.div>

        {/* 4-COLUMN CARDS ROW */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full"
          style={{ gap: "32px" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, staggerChildren: 0.15, ease: "easeOut" }}
        >
          {specializations.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <motion.div 
                key={spec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="group flex flex-col items-center text-center relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "24px",
                  padding: "32px",
                  height: "350px",
                  boxShadow: "0 20px 45px rgba(0,0,0,0.18)",
                  transition: "all 350ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.borderColor = "#D89A2B";
                  e.currentTarget.style.boxShadow = "0 25px 50px rgba(216,154,34,0.15), 0 20px 45px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.boxShadow = "0 20px 45px rgba(0,0,0,0.18)";
                }}
              >
                {/* 72x72 Icon Circle */}
                <div 
                  className="flex flex-col items-center justify-center rounded-full bg-[rgba(255,255,255,0.06)] mb-5"
                  style={{ width: "72px", height: "72px" }}
                >
                  <Icon className="text-[#D89A2B]" size={34} strokeWidth={1.5} />
                </div>
                
                {/* Gold Accent Line */}
                <div className="w-[48px] h-[2px] bg-[#D89A2B] mb-5 rounded-full" />
                
                {/* Title */}
                <h4 className="text-white font-bold leading-tight" style={{ fontSize: "19px", marginBottom: "20px" }}>
                  {spec.title}
                </h4>

                {/* Bullets */}
                <ul className="flex flex-col mt-auto w-full items-start" style={{ gap: "16px" }}>
                  {spec.points.slice(0, 3).map((point, i) => (
                    <li key={i} className="flex items-start text-left" style={{ gap: "12px" }}>
                      <CheckCircle2 size={20} className="text-[#306DC7] shrink-0 mt-[2px]" strokeWidth={2.5} />
                      <span className="text-white font-medium" style={{ fontSize: "18px", lineHeight: 1.8 }}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* BOTTOM STUDENT IMAGE */}
        <motion.div 
          className="relative w-full flex justify-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ animation: "floatPremium 8s ease-in-out infinite" }}
        >
          {/* Circular Glow Behind Image */}
          <div 
            className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-0"
            style={{ 
              width: "100%", 
              maxWidth: "750px", 
              aspectRatio: "1/1",
              background: "radial-gradient(circle, rgba(40,105,200,0.22), transparent 70%)",
              filter: "blur(30px)"
            }}
          />
          
          {/* Student Image */}
          <div 
            className="relative z-10 w-full flex justify-center"
            style={{ 
              maxWidth: "800px",
              marginBottom: "-40px" // Slight overlap at the bottom
            }}
          >
            <Image
              src="/bba student.png"
              alt="Commerce Students"
              width={800}
              height={800}
              priority
              className="w-full h-auto object-contain"
              style={{ filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.25))" }}
            />
          </div>
        </motion.div>

      </div>
      
      {/* BOTTOM TRANSITION SEPARATOR */}
      <div className="w-full h-[80px] bg-gradient-to-b from-transparent to-[#F8FAFC] z-20" style={{ marginTop: "40px" }} />
    </section>
  );
}
