import React, { useState, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const ChargingGuidePage = ({ vehicleGuideData, coreMessageBlockData }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Guard clause for when data is still loading in App.js
  if (!vehicleGuideData || !coreMessageBlockData) {
    return <div className="p-10 text-center text-slate-500">Initializing Database...</div>;
  }

  // 1. Find message by URL slug
  const message = vehicleGuideData.Core_message.find(
    (msg) => msg.title.toLowerCase().replace(/ /g, "-") === slug
  );

  if (!message) {
    return <div className="p-10 text-center">Guide not found.</div>;
  }

  // 2. Filter and sort the blocks
  const blocks = coreMessageBlockData.Core_message_blocks
    .filter((block) => block.cmsg_id === message.cmsg_id)
    .sort((a, b) => parseInt(a.block_order) - parseInt(b.block_order));

  // 3. Search functionality - find vehicles with guides
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    const vehiclesWithGuides =
      vehicleGuideData["4w_vehicle_details"]?.filter(
        (v) => v.Guide_ID && v.Guide_ID !== ""
      ) || [];

    return vehiclesWithGuides
      .map((detail) => {
        const master = vehicleGuideData.Vehicle_master?.find(
          (m) => m.Vehicle_ID === detail.Vehicle_ID
        );
        return master ? { ...detail, ...master } : null;
      })
      .filter((vehicle) => {
        if (!vehicle) return false;
        const searchText = `${vehicle.Manufacturer} ${vehicle.Vehicle_Name} ${vehicle.Vehicle_Variant}`.toLowerCase();
        return searchText.includes(query);
      })
      .slice(0, 8);
  }, [vehicleGuideData, searchQuery]);

  // 4. Handle vehicle selection from search
  const handleSelectVehicle = (vehicle) => {
    // Find the guide article for this vehicle
    const guideArticle = vehicleGuideData.Guide_article?.find(
      (g) => g.Guide_ID === vehicle.Guide_ID
    );
    if (guideArticle) {
      const msg = vehicleGuideData.Core_message?.find(
        (m) => m.cmsg_id === guideArticle.cmsg_id
      );
      if (msg) {
        const nextSlug = msg.title.toLowerCase().replace(/ /g, "-");
        navigate(`/charging-guide/${nextSlug}`);
        setSearchQuery("");
        setIsSearchFocused(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

  const tocItems = useMemo(() => {
    return blocks
      .filter((b) => ["heading_1", "heading_2", "heading_3"].includes(b.block_type))
      .map((b) => ({
        id: slugify(b.text),
        text: b.text,
        level: b.block_type,
      }));
  }, [blocks]);

  const renderBlock = (block) => {
    const id = slugify(block.text || "");
    switch (block.block_type) {
      case "heading_1":
        return (
          <h2
            key={block.block_id}
            id={id}
            className="mt-10 text-[28px] font-bold tracking-tight text-slate-900"
          >
            {block.text}
          </h2>
        );
      case "heading_2":
        return (
          <h3
            key={block.block_id}
            id={id}
            className="mt-8 text-[22px] font-semibold tracking-tight text-slate-900"
          >
            {block.text}
          </h3>
        );
      case "heading_3":
        return (
          <h4
            key={block.block_id}
            id={id}
            className="mt-6 text-[18px] font-semibold text-slate-800"
          >
            {block.text}
          </h4>
        );
      case "body":
        return (
          <p key={block.block_id} className="mt-12 text-[16px] leading-7 text-slate-700">
            {block.text}
          </p>
        );
      case "list":
        return (
          <ul key={block.block_id} className="mt-4 list-disc space-y-2 pl-5 text-[16px] text-slate-700">
            {block.text.split("\n").map((item, i) => (
              <li key={i}>{item.replace(/^- /, "")}</li>
            ))}
          </ul>
        );
      case "table":
        return <TableRenderer key={block.block_id} rawText={block.text} />;
      case "divider":
        return <hr key={block.block_id} className="my-10 border-slate-200" />;
      default:
        return null;
    }
  };

  const meta = {
    category: "EV Charging Guide",
    author: "Massive Charging Editorial",
    updated: "Feb 2026",
    reading: "7 min read",
    deck: "A practical guide to charging cost, infrastructure, and best practices for EV owners.",
  };

  return (
    <div className="min-h-screen bg-[#f7f7f8] text-slate-900">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-white/10 bg-[#121418] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_15%_10%,rgba(0,209,255,0.14),transparent_60%),radial-gradient(900px_520px_at_85%_20%,rgba(30,255,136,0.12),transparent_62%),radial-gradient(1100px_700px_at_50%_110%,rgba(37,99,235,0.18),transparent_62%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),rgba(255,255,255,0.00),rgba(255,255,255,0.04))]" />
          <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px] opacity-[0.10]" />
        </div>

        <div className="relative mx-auto max-w-[1200px] px-6 py-20">
          <div className="max-w-[760px]">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
              {meta.category}
            </span>
            <h1 className="mt-4 text-[40px] font-extrabold leading-tight tracking-tight text-white md:text-[48px]">
              {message.title}
            </h1>
            <p className="mt-3 text-[18px] text-white/70">{meta.deck}</p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm text-white/60">
              <span>{meta.author}</span>
              <span>Updated {meta.updated}</span>
              <span>{meta.reading}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* Article */}
          <article className="rounded-2xl border border-slate-200 bg-white p-24 shadow-sm">
            <Link
              to="/charging-guide/ev-cars"
              className="text-sm font-semibold text-slate-600 hover:text-slate-900"
            >
              Back to EV Cars
            </Link>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Key Takeaways
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[16px] text-slate-700">
                <li>Understand AC vs DC charging and where each makes sense.</li>
                <li>Plan for installation costs and required electrical upgrades.</li>
                <li>Use off-peak charging to reduce your monthly cost.</li>
              </ul>
            </div>

            <div className="mt-8">{blocks.map(renderBlock)}</div>

            <div className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Related Guides
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {[
                  "Charging Types Explained",
                  "Home Charger Installation",
                  "EV Cost Calculator",
                ].map((title) => (
                  <div
                    key={title}
                    className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700"
                  >
                    {title}
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Right Rail */}
          <aside className="space-y-6">
            <div className="sticky top-28 space-y-6">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Table of Content
                </div>
                <nav className="mt-4 space-y-2 text-sm text-slate-600">
                  {tocItems.length === 0 ? (
                    <div className="text-slate-500">Sections will appear here.</div>
                  ) : (
                    tocItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block hover:text-slate-900 ${
                          item.level === "heading_3" ? "pl-3 text-slate-500" : ""
                        }`}
                      >
                        {item.text}
                      </a>
                    ))
                  )}
                </nav>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Need Help?
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  Speak with an EV expert to plan your home charging setup.
                </p>
                <button className="mt-4 inline-flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">
                  Talk to an Expert
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>

    </div>
  );
};

const TableRenderer = ({ rawText }) => {
  const rows = rawText.trim().split("\n").filter((row) => !row.includes("---"));
  const data = rows.map((row) => row.split("|").filter((cell) => cell.trim() !== ""));

  return (
    <div className="my-8 overflow-x-auto rounded-lg border border-slate-200">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            {data[0]?.map((header, i) => (
              <th
                key={i}
                className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white">
          {data.slice(1).map((row, i) => (
            <tr key={i} className="transition-colors hover:bg-slate-50">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-4 text-sm text-slate-600">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChargingGuidePage;
