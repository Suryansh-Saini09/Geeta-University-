import React from "react";
import { Plane, Train, Bus, Car, PhoneCall, HelpCircle } from "lucide-react";

export default function ReachTransportCards() {
  const options = [
    {
      icon: Plane,
      title: "By Air (Flight)",
      subtitle: "Indira Gandhi International Airport (DEL), New Delhi",
      distance: "Distance: ~85 km from Campus",
      description:
        "The nearest airport is IGI Airport, New Delhi. From the airport, visitors can take a direct pre-paid taxi or cab (Uber/Ola) via NH-44 highway to Geeta University campus (~2 hours drive). Alternatively, take the Airport Express Metro to New Delhi Railway Station or Kashmiri Gate ISBT for public bus/train transport to Panipat.",
      tips: [
        "Pre-paid airport taxis available 24/7 at T3 and T1 terminals",
        "Direct cab drive takes approximately 1.5 to 2 hours via NH-44 highway",
      ],
      color: "border-sky-500/20 bg-sky-50/50",
      iconColor: "text-sky-600 bg-sky-100",
    },
    {
      icon: Train,
      title: "By Train (Railway)",
      subtitle: "Panipat Junction (PNP) & New Delhi Railway Station (NDLS)",
      distance: "Distance: ~15 km from Panipat Junction",
      description:
        "Panipat Junction is well connected with major railway stations across India, including New Delhi, Amritsar, Chandigarh, Jammu, and Jaipur. Popular trains like Shatabdi Express, Vande Bharat, and Jan Shatabdi have regular stops at Panipat.",
      tips: [
        "From Panipat Junction, local auto-rickshaws, cabs, and city buses are available directly to Naultha, Gohana Road",
        "Travel time from Panipat Railway Station to GU Campus is ~25 minutes",
      ],
      color: "border-blue-500/20 bg-blue-50/50",
      iconColor: "text-blue-600 bg-blue-100",
    },
    {
      icon: Bus,
      title: "By Road / Bus",
      subtitle: "ISBT Kashmiri Gate (Delhi) & Panipat Bus Stand",
      distance: "Distance: ~18 km from Panipat Bus Stand",
      description:
        "Haryana Roadways, Punjab Roadways, and AC Volvo buses operate every 10–15 minutes between ISBT Kashmiri Gate (Delhi) and Panipat. From Panipat Bus Stand, local transport (auto-rickshaw or bus heading towards Gohana/Naultha) takes you directly to the Geeta University main entrance.",
      tips: [
        "Ask for buses heading towards Gohana / Naultha on NH-71A",
        "Frequency: Buses available round the clock",
      ],
      color: "border-[#E8871A]/20 bg-amber-50/50",
      iconColor: "text-[#E8871A] bg-amber-100",
    },
    {
      icon: Car,
      title: "By Car / Personal Vehicle",
      subtitle: "Highway Navigation (NH-44 & NH-71A)",
      distance: "GPS Landmark: Geeta University, Naultha, Panipat",
      description:
        "If driving from Delhi NCR, take the Delhi-Amritsar Highway (NH-44) up to Panipat city, then turn onto the Panipat-Gohana Highway (NH-71A). Drive ~15 km on NH-71A to reach Naultha, where Geeta University campus is prominently located on the main road.",
      tips: [
        "Ample free visitor parking available inside the campus premises",
        "Search 'Geeta University, Naultha' on Google Maps or Apple Maps for live GPS navigation",
      ],
      color: "border-indigo-500/20 bg-indigo-50/50",
      iconColor: "text-indigo-600 bg-indigo-100",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[#0A1F44]/5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0A1F44]">
            Detailed Travel Directions
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#0A1F44] sm:text-4xl">
            Choose Your Mode of Travel
          </h2>
          <p className="mt-3 text-base text-slate-600 font-sans">
            Step-by-step instructions for arriving at Geeta University from any location.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {options.map((opt) => {
            const Icon = opt.icon;
            return (
              <div
                key={opt.title}
                className={`rounded-3xl border p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between ${opt.color}`}
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-2xl ${opt.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#0A1F44]">
                        {opt.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {opt.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="inline-block rounded-md bg-[#0A1F44]/10 px-2.5 py-1 text-xs font-bold text-[#0A1F44] mb-3">
                    {opt.distance}
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed font-sans">
                    {opt.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    Pro Tips:
                  </span>
                  <ul className="space-y-1.5 list-disc list-inside text-xs text-slate-600 font-sans">
                    {opt.tips.map((tip, idx) => (
                      <li key={idx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Campus Transport Helpline Banner */}
        <div className="rounded-3xl bg-[#0A1F44] text-white p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border-l-8 border-[#E8871A]">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-[#E8871A] text-white shrink-0">
              <HelpCircle className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold">Need Campus Arrival Assistance?</h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans mt-0.5">
                Our university transport desk & admission team are happy to guide your visit.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+919278768000"
              className="inline-flex items-center gap-2 rounded-full bg-[#E8871A] px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-amber-600 transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call +91 92787 68000</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
