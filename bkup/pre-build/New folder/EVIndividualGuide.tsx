import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Battery, Zap, Clock, ShieldCheck, Cpu, Navigation, Car as CarIcon } from "lucide-react";

/* Project Atoms */
import Container from "../atoms/Container";
import Surface from "../atoms/Surface";
import Text from "../atoms/Text";

/* Migrated Modules */
import { RecommendedChargersRail } from "../modules/RecommendedChargersRail";
import { BlogGuideModule } from "../modules/BlogGuideModule";

const STRAPI_URL = "https://strapi.adirishi.net";

async function fetchJson(url: string) {
  const res = await fetch(url);
  const text = await res.text();
  let json: any = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch { /* ignore */ }
  if (!res.ok) {
    const msg = json?.error?.message || json?.message || `Request failed: ${res.status}`;
    throw new Error(`${msg} | URL: ${url}`);
  }
  return json;
}

export const EVIndividualGuide = () => {
  const { documentId } = useParams();
  const [car, setCar] = useState<any | null>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [blog, setBlog] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuideData = async () => {
      setLoading(true);
      try {
        // 1) Fetch Car Specs
        const carJson = await fetchJson(
          `${STRAPI_URL}/api/ev-specs-4ws?filters[documentId][$eq]=${documentId}`
        );
        const carRow = carJson.data?.[0] || null;
        setCar(carRow);

        // 2) Fetch Products
        const productJson = await fetchJson(
          `${STRAPI_URL}/api/product-cores?populate=product_testimg&pagination[pageSize]=100`
        );
        if (productJson) setProducts(productJson.data || []);

        // 3) Fetch Blog with Verified Inverse Relation Key
        const specificBlogUrl = `${STRAPI_URL}/api/blogs?filters[electric_vehicle][documentId][$eq]=${documentId}&pagination[pageSize]=1`;
        const latestBlogUrl = `${STRAPI_URL}/api/blogs?pagination[pageSize]=1&sort=publishedAt:desc`;

        try {
          const blogJson = await fetchJson(specificBlogUrl);
          if (blogJson.data?.length > 0) {
            setBlog(blogJson.data[0]);
          } else {
            const latestJson = await fetchJson(latestBlogUrl);
            setBlog(latestJson.data?.[0] || null);
          }
        } catch (blogErr) {
          const latestJson = await fetchJson(latestBlogUrl);
          setBlog(latestJson.data?.[0] || null);
        }

      } catch (err: any) {
        console.error("Vault Sync Failed", err);
      } finally {
        setLoading(false);
      }
    };

    if (documentId) fetchGuideData();
  }, [documentId]);

  if (loading) return (
    <Container style={{ paddingBlock: 'var(--space-8)', textAlign: 'center' }}>
      <Text color="muted" style={{ fontFamily: 'var(--font-mono)' }} className="animate-pulse">Synchronizing Vault...</Text>
    </Container>
  );

  if (!car) return (
    <Container style={{ paddingBlock: 'var(--space-8)', textAlign: 'center' }}>
      <Text weight="900" size="5">EV Specification Not Found</Text>
    </Container>
  );

  return (
    <div style={{ backgroundColor: 'var(--surface-base)', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      {/* 1. Hero Section */}
      <section style={{ 
        backgroundColor: 'var(--p-slate-900)', 
        borderBottom: '1px solid var(--stroke-strong)', 
        paddingBlock: 'var(--space-8)',
        width: '100%'
      }}>
        <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-4)' }} className="flex-col md:flex-row">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <div style={{ display: 'flex', gap: 'var(--space-1)' }}>
              <Text size="1" weight="900" style={{ backgroundColor: 'var(--p-blue-data)', color: 'var(--p-white)', padding: '4px 8px', borderRadius: 'var(--radius-1)', textTransform: 'uppercase' }}>Master Guide</Text>
              <Text size="1" color="muted" style={{ textTransform: 'uppercase', alignSelf: 'center' }}>/ {car.Brand} / {car.Segment}</Text>
            </div>
            <Text size="7" weight="900" style={{ color: 'var(--p-white)', letterSpacing: '-0.04em' }}>{car.Model}</Text>
          </div>
          <div style={{ padding: 'var(--space-4)', borderRadius: 'var(--radius-full)', backgroundColor: 'var(--surface-inset)', border: '1px solid var(--stroke-strong)' }}>
            <CarIcon size={64} color="var(--p-blue-data)" style={{ opacity: 0.6 }} />
          </div>
        </Container>
      </section>

      {/* 2. Stats Bar */}
      <section style={{ paddingBlock: 'var(--space-6)', borderBottom: '1px solid var(--stroke-subtle)', backgroundColor: 'var(--surface-card)' }}>
        <Container>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'var(--space-2)' }}>
            {[
              { icon: Battery, label: "Battery", val: `${car.Battery_Capacity_kWh} kWh` },
              { icon: Navigation, label: "Range", val: `${car.Claimed_Range_km} KM` },
              { icon: Clock, label: "Fast Charge", val: `${car.DC_Fast_Charging_Max_kW} kW` },
              { icon: Cpu, label: "AC Power", val: `${car.AC_Charging_Power_kW} kW` }
            ].map((stat) => (
              <Surface key={stat.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 'var(--space-3)', borderRadius: 'var(--radius-2)', border: '1px solid var(--stroke-subtle)' }}>
                <stat.icon color="var(--p-blue-data)" size={20} style={{ marginBottom: '8px' }} />
                <Text size="1" weight="900" color="muted" style={{ textTransform: 'uppercase' }}>{stat.label}</Text>
                <Text size="3" weight="900" style={{ fontFamily: 'var(--font-mono)', color: 'var(--p-ink-900)' }}>{stat.val}</Text>
              </Surface>
            ))}
          </div>
        </Container>
      </section>

     {/* 3. Main Content Layout */}
      <Container style={{ paddingBlock: 'var(--space-8)' }}>
        <div 
          className="lg-grid-layout" 
          style={{ 
            display: 'grid', 
            gap: 'var(--space-6)', 
            width: '100%',
            alignItems: 'start' // [REMEDY] Critical: prevents sidebar from stretching
          }}
        >
          <style>{`
            .lg-grid-layout { grid-template-columns: 1fr; }
            @media (min-width: 1024px) {
              .lg-grid-layout { 
                /* [REMEDY] Explicit grid spans to mirror the working code */
                grid-template-columns: minmax(0, 8fr) minmax(0, 4fr) !important; 
              }
            }
          `}</style>

          {/* LEFT: Content Column */}
          <div style={{ minWidth: 0 }}>
            <Text size="6" weight="900" style={{ color: 'var(--p-ink-900)', borderBottom: '4px solid var(--p-blue-data)', display: 'inline-block', paddingBottom: '8px', marginBottom: 'var(--space-4)', textTransform: 'uppercase' }}>
              {car.Model} Charging Guide
            </Text>
            <BlogGuideModule blog={blog} />
          </div>

          {/* RIGHT: Sidebar Column - NOW TRULY STICKY */}
          <aside 
  style={{ 
    position: 'sticky', 
    top: '100px',
    alignSelf: 'start', // ADD THIS - Critical for sticky to work
    display: 'flex', 
    flexDirection: 'column', 
    gap: 'var(--space-2)', 
    minWidth: 0 
  }}
>
            <div style={{ marginBottom: 'var(--space-1)' }}>
               <Text size="1" color="muted" weight="700" style={{ textTransform: 'uppercase' }}>
                 Compatible Infrastructure
               </Text>
            </div>
            <RecommendedChargersRail
              products={products}
              carModel={car.Model}
              onConnect={(p: any) => console.log("Hardware Sync:", p.display_name)}
            />
          </aside>
        </div>
      </Container>
    </div>
  );
};