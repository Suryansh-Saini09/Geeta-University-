import Image from "next/image";
import { recognitions } from "@/data/about";

export default function RecognitionSection() {
  return (
    <section
      id="recognitions"
      className="scroll-mt-24 bg-white px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#E8871A]">
            Recognition
          </p>

          <h2 className="text-3xl font-bold text-[#0B2A4A] md:text-4xl">
            Our Recognitions
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {recognitions.map((recognition) => (
            <div
              key={recognition.name}
              className="flex min-h-48 flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-20 w-20 items-center justify-center">
                <Image
                  src={recognition.image}
                  alt={recognition.alt}
                  width={80}
                  height={80}
                  className="h-20 w-20 object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold text-[#0B2A4A]">
                {recognition.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}