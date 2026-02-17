import React from "react";
import { Mail, Phone, MapPin, Zap } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative mt-auto min-h-[75vh] overflow-hidden border-t border-white/10 bg-[#0a0d11] text-white">
      {/* Warm glow accents (no blue) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-56 right-1/3 h-[560px] w-[560px] rounded-full bg-[rgba(30,255,136,0.07)] blur-[190px]" />
        <div className="absolute -bottom-40 left-1/4 h-[420px] w-[420px] rounded-full bg-[rgba(255,215,110,0.09)] blur-[190px]" />
      </div>

      <div className="relative container mx-auto px-6 py-20 min-h-[75vh] flex flex-col">
        <div className="grid gap-10 md:grid-cols-12 items-start">
          {/* Brand */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-3">
              <Zap className="h-7 w-7 text-white/40" />
              <h2 className="text-mt-down-1 font-bold tracking-[0.2em] uppercase">
                Massive Charging Network
              </h2>
            </div>
            <p className="mt-3 text-pf-down-1 text-white/70 leading-relaxed max-w-xl">
              Configuring the next-gen infrastructure for seamless electric mobility.
            </p>

            <div className="mt-8 grid gap-4 max-w-lg">
              {[
                {
                  icon: <Mail size={16} />,
                  text: "connect@massivecharging.com",
                  href: "mailto:connect@massivecharging.com",
                },
                { icon: <Phone size={16} />, text: "+91 91200300400", href: "tel:+9191200300400" },
                { icon: <MapPin size={16} />, text: "HQ, Gurugram, India", href: null },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <span className="text-white/50 group-hover:text-white transition-colors">
                    {item.icon}
                  </span>
                  {item.href ? (
                    <a href={item.href} className="no-underline transition-colors hover:text-white">
                      <span className="text-pf-down-1 text-white/70">{item.text}</span>
                    </a>
                  ) : (
                    <span className="text-pf-down-1 text-white/70">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Columns */}
          <div className="md:col-span-6 grid gap-10 sm:grid-cols-2">
            <div className="rounded-mcn-xl border border-white/10 bg-black/40 p-6">
              <div className="text-pf-down-1 font-black uppercase tracking-[0.22em] text-white/55">
                Resources
              </div>
              <nav className="mt-5 flex flex-col gap-3">
                {["1C EV Charging App", "EV Charging Guide", "EV Charging Station Business"].map(
                  (link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-pf-down-1 text-white/70 hover:text-white no-underline transition-colors"
                    >
                      {link}
                    </a>
                  )
                )}
              </nav>
            </div>

            <div className="rounded-mcn-xl border border-white/10 bg-black/40 p-6">
              <div className="text-pf-down-1 font-black uppercase tracking-[0.22em] text-white/55">
                Company
              </div>
              <nav className="mt-5 flex flex-col gap-3">
                {["About Us", "Contact"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-pf-down-1 text-white/70 hover:text-white no-underline transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-pf-down-1 text-white/50 uppercase tracking-widest">
            © 2026 Massive Charging Network
          </span>
          <a href="/privacy" className="no-underline group">
            <span className="text-pf-down-1 text-white/50 group-hover:text-white transition-colors">
              Privacy Policy
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};
