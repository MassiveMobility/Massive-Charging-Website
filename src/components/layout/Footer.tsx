import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Container from "../atoms/Container";
import Text from "../atoms/Text";
import Surface from "../atoms/Surface";

export const Footer = () => {
  return (
    <Surface 
      variant="base" 
      style={{ 
        borderTop: '1px solid var(--stroke-subtle)', 
        marginTop: 'auto',
        paddingBlock: 'var(--space-8)' 
      }}
    >
      <Container>
        {/* Main Footer Wrapper */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          gap: 'var(--space-8)',
          alignItems: 'start'
        }}>
          
          {/* LEFT ZONE: Brand & Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', flex: '1' }}>
            <div>
              <Text size="4" weight="400" style={{ display: 'block', marginBottom: 'var(--space-1)' }}>
                Massive Charging Network
              </Text>
              <Text size="2" color="muted" style={{ display: 'block', lineHeight: 'var(--lh-2)', maxWidth: '320px' }}>
                Configuring the next-gen infrastructure for seamless electric mobility.
              </Text>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              {[
                { icon: <Mail size={14} />, text: "connect@massivecharging.com", href: "mailto:connect@massivecharging.com" },
                { icon: <Phone size={14} />, text: "+91 91200300400", href: "tel:+9191200300400" },
                { icon: <MapPin size={14} />, text: "HQ, Gurugram, India", href: null }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                   <span style={{ color: 'var(--text-muted)' }}>{item.icon}</span>
                   {item.href ? (
                     <a href={item.href} style={{ textDecoration: 'none' }}>
                       <Text size="2" color="muted">{item.text}</Text>
                     </a>
                   ) : (
                     <Text size="2" color="muted">{item.text}</Text>
                   )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ZONE: Updated to Right Aligned with 1x smaller gap */}
          <div style={{ 
            display: 'flex', 
            flex: '2', 
            justifyContent: 'flex-end', // Clump to the right
            gap: 'var(--space-2)'       // Smaller 16px gap (1x step down from space-4)
          }}>
            
            {/* Column: Products */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', minWidth: '160px' }}>
              <Text size="2" weight="700" style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Products
              </Text>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {['All Products', '3.3kw AC Socket', '7.4kw Home Charger', '14kw Office Charger'].map(link => (
                  <a key={link} href="#" style={{ textDecoration: 'none' }}>
                    <Text size="2" color="muted">{link}</Text>
                  </a>
                ))}
              </nav>
            </div>

            {/* Column: Resources */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', minWidth: '160px' }}>
              <Text size="2" weight="700" style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Resources
              </Text>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {['Charging Guide', 'EV Battery Stats', 'EV Guide'].map(link => (
                  <a key={link} href="#" style={{ textDecoration: 'none' }}>
                    <Text size="2" color="muted">{link}</Text>
                  </a>
                ))}
              </nav>
            </div>

            {/* Column: Company */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', minWidth: '160px' }}>
              <Text size="2" weight="700" style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Company
              </Text>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {['About Us', 'Contact', 'Support'].map(link => (
                  <a key={link} href="#" style={{ textDecoration: 'none' }}>
                    <Text size="2" color="muted">{link}</Text>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          marginTop: 'var(--space-10)', 
          paddingTop: 'var(--space-4)', 
          borderTop: '1px solid var(--stroke-subtle)',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <Text size="1" color="muted">@TM 2026 Massive Charging Network</Text>
          <a href="/privacy" style={{ textDecoration: 'none' }}>
            <Text size="1" color="muted">Privacy Policy</Text>
          </a>
        </div>
      </Container>
    </Surface>
  );
};