import React from "react";
import { BookMarked, Laptop, FileText } from "lucide-react";
import { libraryMetricsData } from "@/data/libraryData";

export default function LibraryStatCards() {
  const getIcon = (id: string) => {
    switch (id) {
      case "physical-books":
        return <BookMarked className="h-6 w-6 text-[#E8871A]" />;
      case "ebooks":
        return <Laptop className="h-6 w-6 text-[#E8871A]" />;
      case "ejournals":
        return <FileText className="h-6 w-6 text-[#E8871A]" />;
      default:
        return <BookMarked className="h-6 w-6 text-[#E8871A]" />;
    }
  };

  return (
    <section className="w-full bg-[#F7F9FC] py-12 md:py-16 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {libraryMetricsData.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E8871A]/50 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="rounded-lg bg-white/90 px-3 py-1 text-xs font-bold text-[#0A1F44] backdrop-blur-sm shadow-sm">
                      {item.title}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A1F44] text-[#E8871A] shadow-md">
                      {getIcon(item.id)}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#E8871A]">
                      {item.count}
                    </span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Volumes / Assets
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
