import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-auto border-t border-mcn-ink-stroke-soft bg-mcn-ink-bg/80 backdrop-blur-mcn py-16 text-mcn-ink-text-primary">
      <div className="container mx-auto">
        {/* Main Footer Wrapper */}
        <div className="flex flex-col md:flex-row justify-between gap-12 items-start">
          
          {/* LEFT ZONE: Brand & Contact */}
          <div className="flex flex-col gap-6 flex-1">
            <div>
              <h2 className="text-mt-down-1 font-bold tracking-widest uppercase mb-2">
                Massive Charging Network
              </h2>
              <p className="text-mt-down-1 text-mcn-ink-text-muted leading-relaxed max-w-xs">
                Configuring the next-gen infrastructure for seamless electric mobility.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { icon: <Mail size={14} />, text: "connect@massivecharging.com", href: "mailto:connect@massivecharging.com" },
                { icon: <Phone size={14} />, text: "+91 91200300400", href: "tel:+9191200300400" },
                { icon: <MapPin size={14} />, text: "HQ, Gurugram, India", href: null }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                   <span className="text-mcn-ink-text-faint group-hover:text-mcn-red transition-colors">{item.icon}</span>
                   {item.href ? (
                     <a href={item.href} className="no-underline transition-colors hover:text-mcn-ink-text-primary">
                       <span className="text-mt-down-1 text-mcn-ink-text-muted">{item.text}</span>
                     </a>
                   ) : (
                     <span className="text-mt-down-1 text-mcn-ink-text-muted">{item.text}</span>
                   )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ZONE: Clumped Right */}
          <div className="flex flex-wrap justify-end gap-8 md:gap-4 flex-[2]">
            
            {/* Column: Products */}
            <div className="flex flex-col gap-4 min-w-[140px]">
              <span className="text-pf-down-2 font-black uppercase tracking-[0.2em] text-mcn-ink-text-faint">
                Products
              </span>
              <nav className="flex flex-col gap-2">
                {['All Products', '3.3kw AC Socket', '7.4kw Home Charger', '14kw Office Charger'].map(link => (
                  <a key={link} href="#" className="text-mt-down-1 text-mcn-ink-text-muted hover:text-mcn-ink-text-primary no-underline transition-colors">
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Column: Resources */}
            <div className="flex flex-col gap-4 min-w-[140px]">
              <span className="text-pf-down-2 font-black uppercase tracking-[0.2em] text-mcn-ink-text-faint">
                Resources
              </span>
              <nav className="flex flex-col gap-2">
                {['Charging Guide', 'EV Battery Stats', 'EV Guide'].map(link => (
                  <a key={link} href="#" className="text-mt-down-1 text-mcn-ink-text-muted hover:text-mcn-ink-text-primary no-underline transition-colors">
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Column: Company */}
            <div className="flex flex-col gap-4 min-w-[140px]">
              <span className="text-pf-down-2 font-black uppercase tracking-[0.2em] text-mcn-ink-text-faint">
                Company
              </span>
              <nav className="flex flex-col gap-2">
                {['About Us', 'Contact', 'Support'].map(link => (
                  <a key={link} href="#" className="text-mt-down-1 text-mcn-ink-text-muted hover:text-mcn-ink-text-primary no-underline transition-colors">
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-6 border-t border-mcn-ink-stroke-softer flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-pf-down-2 text-mcn-ink-text-faint uppercase tracking-widest">
            © 2026 Massive Charging Network
          </span>
          <a href="/privacy" className="no-underline group">
            <span className="text-pf-down-2 text-mcn-ink-text-faint group-hover:text-mcn-ink-text-primary transition-colors">Privacy Policy</span>
          </a>
        </div>
      </div>
    </footer>
  );
};