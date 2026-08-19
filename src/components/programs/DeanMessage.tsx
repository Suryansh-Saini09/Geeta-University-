import Image from "next/image";
import { Quote } from "lucide-react";
import { motion, type Variants } from "framer-motion";

interface DeanMessageProps {
  name: string;
  designation: string;
  image: string;
  message: string;
}

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function DeanMessage({
  name,
  designation,
  image,
  message,
}: DeanMessageProps) {
  return (
    <section
      className="
        overflow-hidden
        bg-[#F7F9FC]
        py-20
        md:py-24
        lg:py-28
      "
    >
      <div className="gu-container">
        <div
          className="
            grid
            overflow-hidden
            rounded-[22px]
            border
            border-[#DCE2EB]
            bg-white
            shadow-[0_18px_50px_rgba(10,31,68,0.07)]
            lg:grid-cols-[minmax(300px,0.7fr)_minmax(0,1.3fr)]
          "
        >
          {/* ==================================================
              LEFT — DEAN IMAGE
          ================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={imageReveal}
            className="
              relative
              min-h-[380px]
              overflow-hidden
              bg-[#0A1F44]
              lg:min-h-[480px]
            "
          >
            <Image
              src={image}
              alt={name}
              fill
              sizes="
                (max-width: 1023px) 100vw,
                35vw
              "
              className="
                object-cover
                transition-transform
                duration-700
                ease-out
                hover:scale-[1.02]
              "
            />

            {/* Image overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#0A1F44]/65
                via-transparent
                to-transparent
              "
            />

            {/* Image label */}

            <div className="absolute bottom-0 left-0 p-6 md:p-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#E8871A]" />

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[2.5px]
                    text-[#E8871A]
                  "
                >
                  Academic Leadership
                </span>
              </div>
            </div>

            {/* Decorative corner */}

            <div
              className="
                absolute
                left-0
                top-0
                h-20
                w-20
                border-l-2
                border-t-2
                border-[#E8871A]/70
              "
            />
          </motion.div>

          {/* ==================================================
              RIGHT — MESSAGE
          ================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={fadeUp}
            className="
              relative
              flex
              flex-col
              justify-center
              p-7
              md:p-10
              lg:p-14
            "
          >
            {/* Quote icon */}

            <div
              className="
                absolute
                right-7
                top-7
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-[#E8871A]/10
                text-[#E8871A]
                md:right-10
                md:top-10
              "
            >
              <Quote size={20} strokeWidth={1.7} />
            </div>

            {/* Section label */}

            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#E8871A]" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[3px]
                  text-[#E8871A]
                "
              >
                Dean's Message
              </span>
            </div>

            {/* Name */}

            <h2
              className="
                mt-5
                max-w-xl
                pr-12
                font-serif
                text-[32px]
                font-black
                leading-[1.1]
                tracking-[-0.8px]
                text-[#0A1F44]
                sm:text-[38px]
                md:text-[42px]
              "
            >
              {name}
            </h2>

            {/* Designation */}

            <p
              className="
                mt-2
                text-[13px]
                font-semibold
                uppercase
                tracking-[1.2px]
                text-[#64748B]
              "
            >
              {designation}
            </p>

            {/* Accent */}

            <div className="my-7 flex items-center gap-2">
              <span className="h-[3px] w-12 bg-[#E8871A]" />
              <span className="h-[3px] w-3 bg-[#0A1F44]" />
            </div>

            {/* Message */}

            <p
              className="
                max-w-2xl
                font-serif
                text-[18px]
                leading-[1.8]
                text-[#334155]
                md:text-[20px]
              "
            >
              {message}
            </p>

            {/* Bottom identity */}

            <div
              className="
                mt-9
                flex
                items-center
                gap-3
                border-t
                border-[#DCE2EB]
                pt-6
              "
            >
              <span className="h-2 w-2 rounded-full bg-[#E8871A]" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[2px]
                  text-[#94A3B8]
                "
              >
                School of Commerce & Business Management
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}