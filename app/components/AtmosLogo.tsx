import React from "react";

export function AtmosLogo({ className = "h-9 w-auto", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Orbiting Atom Icon */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Outer glowing halo */}
        <div className="absolute inset-0 rounded-full bg-blue-500/15 blur-sm scale-110" />
        
        {/* Orbital rings */}
        <div className="absolute inset-0 rounded-full border border-blue-600/40 rotate-12 transition-transform duration-700 hover:rotate-45" />
        <div className="absolute inset-0 rounded-full border border-blue-500/50 -rotate-45 transition-transform duration-700 hover:-rotate-12" />
        <div className="absolute inset-0 rounded-full border border-amber-500/60 rotate-75 transition-transform duration-700 hover:rotate-90" />
        
        {/* Orbiting electrons */}
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-600 shadow-sm" />
        <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-amber-500 shadow-sm" />
        <span className="absolute left-1 top-2 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-sm" />

        {/* Nucleus */}
        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-blue-700 to-amber-500 shadow-sm" />
      </div>

      {/* Typography */}
      <div className="flex flex-col text-left">
        <span
          className={`text-xl font-bold tracking-tight leading-none ${
            dark ? "text-white" : "text-slate-900"
          }`}
        >
          Atmos
        </span>
        <span
          className={`text-[9.5px] font-semibold tracking-[0.16em] uppercase mt-1 ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          CAREER INSTITUTE
        </span>
      </div>
    </div>
  );
}
