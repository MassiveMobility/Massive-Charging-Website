import React from "react";
import { ArrowRight } from "lucide-react";

const EVGuideHomeHero: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-white via-slate-50 to-slate-100 py-24 px-8 overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto text-center">

        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider">
          Massive Charging Network
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
          Electric Vehicle{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Charging Guide
            </span>
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Everything you need to know about setting up home, office,
          commercial, and public EV charging infrastructure — simplified and practical.
        </p>

        {/* CTA Button */}
        <button
          className="
            inline-flex items-center gap-2
            px-8 py-4
            bg-red-600
            text-white
            text-lg font-semibold
            rounded-xl
            transition-all duration-300
            hover:bg-red-700
            hover:scale-105
            shadow-lg
            hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]
          "
        >
          Explore the Guide
          <ArrowRight size={20} />
        </button>

      </div>
    </section>
  );
};

export default EVGuideHomeHero;
