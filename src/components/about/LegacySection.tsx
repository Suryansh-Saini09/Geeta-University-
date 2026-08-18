"use client";

import { motion } from "framer-motion";
import { legacyIntro, legacyMilestones } from "@/data/legacy";

export default function LegacySection() {
  const legacyItems = legacyMilestones.map((milestone, index) => {
    const title = milestone.institutions.map(inst => {
      let text = inst.name;
      if (inst.location) text += `, ${inst.location}`;
      if (inst.note) text += `\n(${inst.note})`;
      return text;
    }).join('\n\n');
    
    return {
      year: milestone.year,
      title: title,
      side: index % 2 === 0 ? "right" : "left"
    };
  });

  return (
    <section id="legacy" className="spbsb-legacy-section scroll-mt-20">
      <style>{`
        .spbsb-legacy-section {
          width: 100%;
          background:
            linear-gradient(180deg, #FFFFFF 0%, #F7FAFE 54%, #FFFFFF 100%);
          color: #0A1F44;
          padding: 76px 24px 86px;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          overflow: hidden;
          position: relative;
        }
        .spbsb-legacy-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(15, 45, 82, 0.045) 1px, transparent 1px),
            linear-gradient(180deg, rgba(15, 45, 82, 0.035) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(circle at 50% 30%, black, transparent 72%);
          pointer-events: none;
        }
        .spbsb-legacy-container {
          width: min(1120px, 100%);
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .spbsb-legacy-intro {
          max-width: 960px;
          margin-bottom: 42px;
        }
        .spbsb-legacy-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #D99A24;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .spbsb-legacy-eyebrow::before {
          content: '';
          width: 38px;
          height: 2px;
          background: #D99A24;
          display: block;
        }
        .spbsb-legacy-title {
          font-family: 'Zilla Slab', serif;
          font-size: clamp(36px, 4.2vw, 56px);
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0;
          color: #07325E;
          margin: 0 0 14px;
        }
        .spbsb-legacy-copy {
          max-width: 920px;
          color: #242832;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          font-size: clamp(15px, 1.5vw, 18px);
          line-height: 1.58;
          letter-spacing: 0;
          font-weight: 500;
          margin: 0;
        }
        .spbsb-legacy-timeline {
          position: relative;
          width: min(920px, 100%);
          margin: 0 auto;
          padding: 8px 0 4px;
        }
        .spbsb-legacy-rail {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 8px;
          border-radius: 999px;
          background: linear-gradient(180deg, #6C85BE, #263A92 58%, #062A58);
          transform: translateX(-50%);
          box-shadow: 0 18px 40px rgba(6, 42, 88, 0.26);
          overflow: hidden;
        }
        .spbsb-legacy-rail::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent, rgba(255,255,255,0.55), transparent);
          animation: spbsbRailShine 4.8s ease-in-out infinite;
        }
        .spbsb-legacy-item {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 68px minmax(0, 1fr);
          min-height: 72px;
          align-items: center;
        }
        .spbsb-legacy-item + .spbsb-legacy-item {
          margin-top: 8px;
        }
        .spbsb-legacy-node {
          grid-column: 2;
          justify-self: center;
          width: 26px;
          height: 14px;
          border-radius: 999px;
          background: #FFFFFF;
          border: 5px solid #5269B1;
          box-shadow: 0 8px 22px rgba(14, 35, 91, 0.20);
          z-index: 2;
        }
        .spbsb-legacy-content {
          position: relative;
          background: rgba(255, 255, 255, 0.76);
          border: 1px solid rgba(82, 105, 177, 0.12);
          border-radius: 8px;
          padding: 12px 16px;
          box-shadow: 0 14px 34px rgba(15, 45, 82, 0.08);
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .spbsb-legacy-content:hover {
          transform: translateY(-4px);
          border-color: rgba(217, 154, 36, 0.35);
          box-shadow: 0 24px 60px rgba(15, 45, 82, 0.14);
        }
        .spbsb-legacy-content::before {
          content: '';
          position: absolute;
          top: 25px;
          width: 68px;
          border-top: 1.5px dashed rgba(36, 40, 50, 0.46);
        }
        .spbsb-legacy-content::after {
          content: '';
          position: absolute;
          top: 20px;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
        }
        .spbsb-legacy-item.right .spbsb-legacy-content {
          grid-column: 3;
          margin-left: 24px;
        }
        .spbsb-legacy-item.right .spbsb-legacy-content::before {
          left: -92px;
        }
        .spbsb-legacy-item.right .spbsb-legacy-content::after {
          left: -20px;
          border-left: 15px solid #5269B1;
        }
        .spbsb-legacy-item.left .spbsb-legacy-content {
          grid-column: 1;
          margin-right: 24px;
          text-align: right;
        }
        .spbsb-legacy-item.left .spbsb-legacy-content::before {
          right: -92px;
        }
        .spbsb-legacy-item.left .spbsb-legacy-content::after {
          right: -20px;
          border-right: 15px solid #5269B1;
        }
        .spbsb-legacy-year {
          display: block;
          color: #243A9A;
          font-family: 'Zilla Slab', serif;
          font-size: clamp(22px, 2.3vw, 28px);
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.02em;
          margin-bottom: 5px;
        }
        .spbsb-legacy-text {
          color: #535760;
          font-family: 'Sapient', 'Source Sans 3', sans-serif;
          font-size: clamp(13px, 1.2vw, 15px);
          line-height: 1.45;
          letter-spacing: 0;
          font-weight: 500;
          margin: 0;
          white-space: pre-line;
        }
        @keyframes spbsbRailShine {
          0%, 100% {
            transform: translateY(-70%);
          }
          50% {
            transform: translateY(70%);
          }
        }
        @media (max-width: 900px) {
          .spbsb-legacy-section {
            padding: 62px 20px 72px;
          }
          .spbsb-legacy-intro {
            margin-bottom: 34px;
          }
          .spbsb-legacy-copy {
            letter-spacing: 0;
          }
          .spbsb-legacy-timeline {
            width: 100%;
          }
          .spbsb-legacy-rail {
            left: 18px;
            width: 7px;
          }
          .spbsb-legacy-item {
            grid-template-columns: 38px minmax(0, 1fr);
            min-height: auto;
          }
          .spbsb-legacy-item + .spbsb-legacy-item {
            margin-top: 14px;
          }
          .spbsb-legacy-node {
            grid-column: 1;
            width: 24px;
            height: 14px;
            border-width: 5px;
          }
          .spbsb-legacy-item.left .spbsb-legacy-content,
          .spbsb-legacy-item.right .spbsb-legacy-content {
            grid-column: 2;
            margin: 0 0 0 14px;
            text-align: left;
          }
          .spbsb-legacy-content::before,
          .spbsb-legacy-content::after {
            display: none;
          }
          .spbsb-legacy-content {
            padding: 14px 15px;
          }
          .spbsb-legacy-year {
            font-size: 22px;
          }
          .spbsb-legacy-text {
            font-size: 13.5px;
            letter-spacing: 0;
          }
        }
      `}</style>

      <div className="spbsb-legacy-container">
        <motion.div
          className="spbsb-legacy-intro"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="spbsb-legacy-eyebrow">{legacyIntro.eyebrow}</div>
          <h2 className="spbsb-legacy-title">{legacyIntro.title} <span style={{color: '#D99A24'}}>{legacyIntro.highlightedTitle}</span></h2>
          <p className="spbsb-legacy-copy">
            {legacyIntro.description}
          </p>
        </motion.div>

        <div className="spbsb-legacy-timeline">
          <motion.div
            className="spbsb-legacy-rail"
            initial={{ scaleY: 0, transformOrigin: "top" }}
            whileInView={{ scaleY: 1, transformOrigin: "top" }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />

          {legacyItems.map((item, index) => (
            <motion.article
              key={`${item.year}-${item.title}`}
              className={`spbsb-legacy-item ${item.side}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: Math.min(index * 0.06, 0.35), ease: "easeOut" }}
            >
              <motion.div
                className="spbsb-legacy-node"
                initial={{ scale: 0.7 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.35) + 0.08 }}
              />
              <div className="spbsb-legacy-content">
                <span className="spbsb-legacy-year">{item.year}</span>
                <p className="spbsb-legacy-text">{item.title}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}