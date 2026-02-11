import React, { useMemo, useState } from "react";

/**
 * Master_Form
 * - Multi-step wizard (mobile-first)
 * - Language toggle EN <-> HI (labels only; values persist)
 * - Glass-white form card + light "infra-grid" background
 * - Conditional reveal: AC/DC capacities shown based on charger type
 *
 * Tailwind tokens used (from your config):
 * - bg-mcn-surface3 / bg-mcn-surface4, text-mcn-text-primary, border-mcn-stroke-soft, shadow-mcn-card, rounded-mcn-xl
 * - backdrop-blur-mcn
 */

export default function Master_Form() {
  const [lang, setLang] = useState("EN"); // "EN" | "HI"
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // TODO: replace with your Apps Script Web App URL (POST endpoint)
  const APPS_SCRIPT_ENDPOINT = "https://script.google.com/macros/s/AKfycbxPsM6ztCf46cI3AzBdRfEuCx3BPOjI3CAEO-BCO3jvw2fdE9RJEXfcdQr3-DCvPTu_/exec"; // e.g. "https://script.google.com/macros/s/XXXXX/exec"

  const t = useMemo(() => {
    const EN = {
      title: "Set Up Your EV Charging Points & Station",
      subtitle: "Fill in the details to get the best estimates and right offers for your requirements",
      toggleLeft: "EN",
      toggleRight: "हिंदी",
      steps: [
        { k: "profile", label: "User Profile" },
        { k: "vision", label: "Charging Vision" },
        { k: "chargers", label: "Charger Configuration" },
        { k: "site", label: "Location & Land" },
        { k: "power", label: "Electricity & Power" },
        { k: "ops", label: "Operations & Software" },
        { k: "finance", label: "Financial & Timeline" },
      ],
      common: {
        back: "Back",
        next: "Next",
        review: "Review",
        submit: "Submit Application",
        required: "Required",
        optional: "Optional",
        notSure: "Not Sure",
      },
      sections: {
        profile: {
          title: "User Profile",
          hint: "Tell us who you are — we will contact you based on this.",
          fields: {
            fullName: "Full Name",
            mobile: "Mobile Number",
            email: "Email Address",
            state: "State",
            city: "City",
            org: "Company / Organization Name (optional)",
            role: "Role / Designation (optional)",
            contactMode: "Preferred Mode of Contact",
          },
          contactModes: ["Phone Call", "WhatsApp", "Email"],
        },
        vision: {
          title: "Charging Point Vision",
          hint: "What are you planning to build, and for whom?",
          fields: {
            buildType: "What are you planning to build?",
            vehicleSegments: "Which vehicle segments will you serve?",
            pointsInitial: "How many charging points initially?",
            expandPlan: "Do you plan to expand in the future?",
          },
          buildTypes: [
            "Home / Private Charging",
            "Public Charging Station",
            "Fleet / Captive Charging",
            "Industrial / Depot Charging",
          ],
          vehicles: [
            "2-Wheeler",
            "3-Wheeler",
            "4-Wheeler",
            "Light Commercial Vehicles",
            "Buses",
            "Trucks",
          ],
          points: ["1", "2–4", "5–10", "10+"],
          expand: ["Yes", "Maybe", "No"],
        },
        chargers: {
          title: "Charger Configuration",
          hint: "Choose charger type — we’ll recommend the right mix if you’re unsure.",
          fields: {
            chargerType: "Which type of chargers do you want?",
            acCapacity: "Preferred AC Charger Capacity",
            dcCapacity: "Preferred DC Charger Capacity",
            usagePattern: "Expected usage pattern",
          },
          chargerTypes: ["AC Chargers", "DC Chargers", "Both", "Not Sure (Need Recommendation)"],
          acCaps: ["3.3 kW", "7.4 kW", "11 kW", "22 kW"],
          dcCaps: ["30 kW", "60 kW", "120 kW", "150+ kW"],
          patterns: ["Long parking duration (slow charging)", "Fast turnaround charging", "Mixed usage"],
        },
        site: {
          title: "Location & Land Details",
          hint: "Site context helps us estimate feasibility and design the layout.",
          fields: {
            siteArea: "City and Area of the Site",
            locationType: "Type of Location",
            ownership: "Land Ownership Status",
            areaSize: "Total Available Area for Charging (sq ft / sq m)",
            parking: "Number of Vehicles That Can Park Simultaneously",
            access: "Public Accessibility",
          },
          locationTypes: [
            "Residential Property",
            "Commercial Complex / Retail",
            "Office / IT Park",
            "Dedicated Parking Lot",
            "Petrol Pump",
            "Highway Roadside",
            "Warehouse / Industrial Area",
            "Fleet Depot",
            "Other",
          ],
          ownership: ["Owned", "Rented / Leased", "Under Discussion"],
          access: ["Open to Public", "Restricted Access", "24x7 Accessible", "Limited Hours"],
        },
        power: {
          title: "Electricity & Power Status",
          hint: "Power availability decides AC/DC options and number of points.",
          fields: {
            hasConnection: "Do you have an existing electricity connection?",
            connectionType: "Type of Electrical Connection",
            sanctionedLoad: "Current Sanctioned Load (kW)",
            reliability: "Power Supply Reliability",
            canUpgrade: "Can you upgrade the electrical load if required?",
            transformer: "Transformer Availability Nearby",
          },
          yesNoNS: ["Yes", "No", "Not Sure"],
          phases: ["Single Phase", "Three Phase", "Not Sure"],
          reliability: ["Stable", "Occasional Interruptions", "Frequent Cuts", "Not Sure"],
          upgrade: ["Yes", "No", "Maybe"],
        },
        ops: {
          title: "Operations & Software",
          hint: "Tell us how you want to run the station and what software you need.",
          fields: {
            opsManager: "Who will manage daily operations?",
            staffing: "Staffing Requirements",
            hours: "Operating Hours",
            maintenance: "Maintenance Responsibility",
            software: "Required Software Capabilities",
            listing: "Should the station be publicly discoverable on EV apps/maps?",
          },
          opsManagers: ["Self-Managed", "Dedicated Staff Hired by Me", "Fully Managed by Massive", "Partnership Model"],
          staffing: ["Need Security Guards", "Need On-Site Attendants", "Fully Automated (No On-Site Staff)"],
          hours: ["24x7", "Daytime Only", "Custom Hours"],
          maintenance: ["Self-Managed", "Managed by Massive", "Hybrid Model", "Not Sure"],
          software: [
            "Payment Collection",
            "User App / QR-Based Charging",
            "Load Management & Smart Balancing",
            "Remote Monitoring Dashboard",
            "Dynamic Pricing Control",
            "Fleet Management Tools",
            "Energy Analytics & Reports",
            "Not Sure (Need Recommendation)",
          ],
          yesNoMaybe: ["Yes", "No", "Maybe"],
        },
        finance: {
          title: "Financial Intent & Timeline",
          hint: "Budget and timeline help us share the right proposal.",
          fields: {
            objective: "Primary Objective",
            budget: "Estimated Budget Range",
            revenue: "Expected Revenue Target (Optional)",
            timeline: "Planned Timeline for Deployment",
            notes: "Any Constraints, Permissions, or Special Requirements",
          },
          objectives: [
            "Revenue Generation",
            "Personal / Captive Use",
            "Fleet Support",
            "Long-Term Infrastructure Asset",
            "Mixed Objective",
          ],
          budgets: [
            "Not Sure – Need Estimate",
            "₹0.5L – ₹2L",
            "₹2L – ₹5L",
            "₹5L – ₹15L",
            "₹15L+",
          ],
          timelines: ["Immediate", "1–3 Months", "3–6 Months", "Exploring Options"],
        },
      },
    };

    const HI = {
      title: "EV चार्जिंग पॉइंट्स और स्टेशन सेट करें",
      subtitle: "बेहतर अनुमान और सही ऑफ़र के लिए यह विवरण भरें (best estimates & offers)",
      toggleLeft: "EN",
      toggleRight: "हिंदी",
      steps: [
        { k: "profile", label: "उपयोगकर्ता" },
        { k: "vision", label: "दृष्टि" },
        { k: "chargers", label: "चार्जर" },
        { k: "site", label: "स्थान" },
        { k: "power", label: "बिजली" },
        { k: "ops", label: "संचालन" },
        { k: "finance", label: "वित्त" },
      ],
      common: {
        back: "पीछे",
        next: "आगे",
        review: "सारांश",
        submit: "आवेदन जमा करें",
        required: "आवश्यक",
        optional: "वैकल्पिक",
        notSure: "निश्चित नहीं",
      },
      sections: {
        profile: {
          title: "उपयोगकर्ता प्रोफ़ाइल (User Profile)",
          hint: "आपका विवरण — ताकि हम आपसे संपर्क कर सकें।",
          fields: {
            fullName: "पूरा नाम (Full Name)",
            mobile: "मोबाइल नंबर (Mobile Number)",
            email: "ईमेल पता (Email Address)",
            state: "राज्य (State)",
            city: "शहर (City)",
            org: "कंपनी / संगठन (Company/Organization) — (Optional)",
            role: "पद / भूमिका (Role/Designation) — (Optional)",
            contactMode: "संपर्क का तरीका (Preferred Contact Mode)",
          },
          contactModes: ["फोन कॉल (Phone Call)", "व्हाट्सऐप (WhatsApp)", "ईमेल (Email)"],
        },
        vision: {
          title: "चार्जिंग पॉइंट दृष्टि (Charging Point Vision)",
          hint: "आप क्या बनाना चाहते हैं और किसके लिए?",
          fields: {
            buildType: "आप क्या स्थापित करना चाहते हैं? (What are you planning to build?)",
            vehicleSegments: "कौन से वाहन? (Vehicle Segments)",
            pointsInitial: "शुरुआत में कितने पॉइंट? (Number of Charging Points)",
            expandPlan: "क्या आगे विस्तार? (Expansion Plan)",
          },
          buildTypes: [
            "घर / निजी चार्जिंग (Home / Private)",
            "सार्वजनिक स्टेशन (Public Station)",
            "फ्लीट / कैप्टिव (Fleet / Captive)",
            "औद्योगिक / डिपो (Industrial / Depot)",
          ],
          vehicles: [
            "2-पहिया (2-Wheeler)",
            "3-पहिया (3-Wheeler)",
            "4-पहिया (4-Wheeler)",
            "LCV (Light Commercial)",
            "बस (Bus)",
            "ट्रक (Truck)",
          ],
          points: ["1", "2–4", "5–10", "10+"],
          expand: ["हाँ (Yes)", "शायद (Maybe)", "नहीं (No)"],
        },
        chargers: {
          title: "चार्जर कॉन्फ़िगरेशन (Charger Configuration)",
          hint: "AC / DC चुनें — निश्चित नहीं हो तो हम सुझाव देंगे।",
          fields: {
            chargerType: "कौन सा चार्जर? (Type of Chargers)",
            acCapacity: "AC क्षमता (AC Capacity)",
            dcCapacity: "DC क्षमता (DC Capacity)",
            usagePattern: "उपयोग पैटर्न (Usage Pattern)",
          },
          chargerTypes: [
            "एसी चार्जर (AC)",
            "डीसी चार्जर (DC)",
            "दोनों (Both)",
            "निश्चित नहीं (Not Sure)",
          ],
          acCaps: ["3.3 kW", "7.4 kW", "11 kW", "22 kW"],
          dcCaps: ["30 kW", "60 kW", "120 kW", "150+ kW"],
          patterns: ["लंबी पार्किंग (Slow)", "फास्ट टर्नअराउंड (Fast)", "मिश्रित (Mixed)"],
        },
        site: {
          title: "स्थान और भूमि (Location & Land)",
          hint: "साइट की जानकारी से feasibility और layout तय होगा।",
          fields: {
            siteArea: "साइट का शहर / क्षेत्र (City / Area)",
            locationType: "स्थान का प्रकार (Location Type)",
            ownership: "भूमि स्थिति (Ownership)",
            areaSize: "उपलब्ध क्षेत्र (Area – sq ft / sq m)",
            parking: "पार्किंग क्षमता (Parking Capacity)",
            access: "पब्लिक एक्सेस (Public Access)",
          },
          locationTypes: [
            "आवासीय (Residential)",
            "व्यावसायिक / रिटेल (Commercial/Retail)",
            "ऑफिस / IT पार्क (Office/IT Park)",
            "पार्किंग लॉट (Parking Lot)",
            "पेट्रोल पंप (Petrol Pump)",
            "हाईवे (Highway Roadside)",
            "वेयरहाउस / इंडस्ट्रियल (Industrial)",
            "फ्लीट डिपो (Fleet Depot)",
            "अन्य (Other)",
          ],
          ownership: ["स्वामित्व (Owned)", "लीज/किराया (Rented/Leased)", "चर्चा में (Under Discussion)"],
          access: ["पब्लिक (Open)", "सीमित (Restricted)", "24x7", "सीमित समय (Limited Hours)"],
        },
        power: {
          title: "बिजली और ऊर्जा (Electricity & Power)",
          hint: "लोड और सप्लाई से AC/DC विकल्प और पॉइंट्स तय होंगे।",
          fields: {
            hasConnection: "क्या बिजली कनेक्शन है? (Electricity Connection)",
            connectionType: "कनेक्शन टाइप (Connection Type)",
            sanctionedLoad: "स्वीकृत लोड (kW) (Sanctioned Load)",
            reliability: "सप्लाई (Reliability)",
            canUpgrade: "क्या लोड बढ़ सकता है? (Upgrade Possible?)",
            transformer: "ट्रांसफॉर्मर (Transformer Availability)",
          },
          yesNoNS: ["हाँ (Yes)", "नहीं (No)", "निश्चित नहीं (Not Sure)"],
          phases: ["सिंगल फेज (Single Phase)", "थ्री फेज (Three Phase)", "निश्चित नहीं (Not Sure)"],
          reliability: ["स्थिर (Stable)", "कभी-कभी (Occasional)", "अक्सर (Frequent)", "निश्चित नहीं (Not Sure)"],
          upgrade: ["हाँ (Yes)", "नहीं (No)", "शायद (Maybe)"],
        },
        ops: {
          title: "संचालन और सॉफ्टवेयर (Operations & Software)",
          hint: "आप कैसे चलाना चाहते हैं और क्या-क्या सॉफ्टवेयर चाहिए?",
          fields: {
            opsManager: "दैनिक संचालन कौन? (Operations Owner)",
            staffing: "स्टाफिंग (Staffing)",
            hours: "समय (Operating Hours)",
            maintenance: "मेंटेनेंस (Maintenance)",
            software: "सॉफ्टवेयर फीचर्स (Software Features)",
            listing: "EV ऐप/मैप्स पर दिखाना है? (Public Listing)",
          },
          opsManagers: [
            "स्वयं (Self-Managed)",
            "मेरा स्टाफ (Hired Staff)",
            "Massive मैनेज्ड (Massive Managed)",
            "पार्टनरशिप (Partnership)",
          ],
          staffing: ["गार्ड (Security)", "अटेंडेंट (Attendant)", "ऑटोमेटेड (Automated)"],
          hours: ["24x7", "दिन में (Daytime)", "कस्टम (Custom)"],
          maintenance: ["स्वयं (Self)", "Massive", "हाइब्रिड (Hybrid)", "निश्चित नहीं (Not Sure)"],
          software: [
            "पेमेंट (Payment)",
            "यूज़र ऐप / QR (User App/QR)",
            "लोड मैनेजमेंट (Load Management)",
            "डैशबोर्ड (Dashboard)",
            "प्राइसिंग (Dynamic Pricing)",
            "फ्लीट टूल्स (Fleet Tools)",
            "रिपोर्ट्स (Analytics)",
            "निश्चित नहीं (Not Sure)",
          ],
          yesNoMaybe: ["हाँ (Yes)", "नहीं (No)", "शायद (Maybe)"],
        },
        finance: {
          title: "वित्त और समयसीमा (Financial & Timeline)",
          hint: "बजट और समय से सही प्रस्ताव बनता है।",
          fields: {
            objective: "मुख्य उद्देश्य (Primary Objective)",
            budget: "बजट (Budget Range)",
            revenue: "राजस्व अपेक्षा (Expected Revenue) — (Optional)",
            timeline: "टाइमलाइन (Timeline)",
            notes: "अतिरिक्त नोट्स (Notes / Constraints)",
          },
          objectives: [
            "राजस्व (Revenue)",
            "निजी उपयोग (Personal/Captive)",
            "फ्लीट सपोर्ट (Fleet)",
            "लॉन्ग-टर्म एसेट (Long-Term Asset)",
            "मिक्स्ड (Mixed)",
          ],
          budgets: [
            "निश्चित नहीं (Not Sure)",
            "₹0.5L – ₹2L",
            "₹2L – ₹5L",
            "₹5L – ₹15L",
            "₹15L+",
          ],
          timelines: ["तुरंत (Immediate)", "1–3 महीने", "3–6 महीने", "खोज (Exploring)"],
        },
      },
    };

    return lang === "HI" ? HI : EN;
  }, [lang]);

  const steps = t.steps;

  const [form, setForm] = useState({
    // profile
    fullName: "",
    mobile: "",
    email: "",
    state: "",
    city: "",
    org: "",
    role: "",
    contactMode: "",

    // vision
    buildType: "",
    vehicleSegments: [],
    pointsInitial: "",
    expandPlan: "",

    // chargers
    chargerType: "",
    acCapacity: "",
    dcCapacity: "",
    usagePattern: "",

    // site
    siteArea: "",
    locationType: "",
    ownership: "",
    areaSize: "",
    parking: "",
    access: "",

    // power
    hasConnection: "",
    connectionType: "",
    sanctionedLoad: "",
    reliability: "",
    canUpgrade: "",
    transformer: "",

    // ops
    opsManager: "",
    staffing: "",
    hours: "",
    maintenance: "",
    software: [],
    listing: "",

    // finance
    objective: "",
    budget: "",
    revenue: "",
    timeline: "",
    notes: "",
  });

  const isLast = step === steps.length - 1;

  const sectionKey = steps[step].k;
  const s = t.sections[sectionKey];

  const locked = !isStepUnlocked(step);

  function setField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleInArray(key, value) {
    setForm((prev) => {
      const arr = Array.isArray(prev[key]) ? prev[key] : [];
      return arr.includes(value)
        ? { ...prev, [key]: arr.filter((v) => v !== value) }
        : { ...prev, [key]: [...arr, value] };
    });
  }


  function canGoFor(key) {
    // same validations as canGoNext, but for any step key
    if (key === "profile") {
      return (
        form.fullName.trim() &&
        form.mobile.trim() &&
        form.email.trim() &&
        form.state.trim() &&
        form.city.trim() &&
        form.contactMode
      );
    }
    if (key === "vision") {
      return form.buildType && form.vehicleSegments.length > 0 && form.pointsInitial && form.expandPlan;
    }
    if (key === "chargers") {
      return form.chargerType && form.usagePattern;
    }
    if (key === "site") {
      return (
        form.siteArea.trim() &&
        form.locationType &&
        form.ownership &&
        form.areaSize.trim() &&
        form.parking.trim() &&
        form.access
      );
    }
    if (key === "power") {
      return (
        form.hasConnection &&
        form.connectionType &&
        form.sanctionedLoad.trim() &&
        form.reliability &&
        form.canUpgrade &&
        form.transformer
      );
    }
    if (key === "ops") {
      return form.opsManager && form.staffing && form.hours && form.maintenance && form.listing;
    }
    if (key === "finance") {
      return form.objective && form.budget && form.timeline;
    }
    return true;
  }

  function isStepUnlocked(i) {
    // Step 0 is always editable; later steps unlock only when all prior steps are complete
    if (i === 0) return true;
    for (let j = 0; j < i; j++) {
      if (!canGoFor(steps[j].k)) return false;
    }
    return true;
  }

  function canGoNext() {
    // Minimal guardrails (keep it lightweight for MVP)
    if (sectionKey === "profile") {
      return form.fullName.trim() && form.mobile.trim() && form.email.trim();
    }
    if (sectionKey === "vision") {
      return form.buildType && form.vehicleSegments.length > 0 && form.pointsInitial && form.expandPlan;
    }
    if (sectionKey === "chargers") {
      return form.chargerType && form.usagePattern;
    }
    if (sectionKey === "site") {
      return form.siteArea.trim() && form.locationType && form.ownership && form.areaSize.trim() && form.parking.trim() && form.access;
    }
    if (sectionKey === "power") {
      return form.hasConnection && form.connectionType && form.sanctionedLoad.trim() && form.reliability && form.canUpgrade && form.transformer;
    }
    if (sectionKey === "ops") {
      return form.opsManager && form.staffing && form.hours && form.maintenance && form.listing;
    }
    if (sectionKey === "finance") {
      return form.objective && form.budget && form.timeline;
    }
    return true;
  }

  async function onSubmit() {
    setSubmitting(true);
    try {
      // If Apps Script endpoint provided, POST JSON
      if (APPS_SCRIPT_ENDPOINT) {
        await fetch(APPS_SCRIPT_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "no-cors", // Apps Script often needs no-cors; adjust when you set CORS properly
          body: JSON.stringify({
            ...form,
            lang,
            submittedAt: new Date().toISOString(),
          }),
        });
      } else {
        // Fallback: just log
        // eslint-disable-next-line no-console
        console.log("Form payload:", { ...form, lang, submittedAt: new Date().toISOString() });
      }
      setSubmitted(true);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
      alert("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const showAC = (() => {
    const v = form.chargerType;
    return v.includes("AC") || v.includes("एसी") || v.includes("Both") || v.includes("दोनों");
  })();

  const showDC = (() => {
    const v = form.chargerType;
    return v.includes("DC") || v.includes("डीसी") || v.includes("Both") || v.includes("दोनों");
  })();

  const isNotSureCharger = (() => {
    const v = form.chargerType;
    return v.toLowerCase().includes("not sure") || v.includes("निश्चित नहीं");
  })();

  return (
    <div className="min-h-screen text-mcn-text-primary font-sans">
      {/* Whitish infra-grid background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundColor: "#F6F1E6", // mcn.bg (warm off-white)
          backgroundImage: `
            linear-gradient(rgba(11,11,12,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(11,11,12,0.06) 1px, transparent 1px),
            radial-gradient(circle at 20% 10%, rgba(11,11,12,0.06), transparent 42%),
            radial-gradient(circle at 80% 30%, rgba(11,11,12,0.05), transparent 45%)
          `,
          backgroundSize: "44px 44px, 44px 44px, 900px 900px, 1000px 1000px",
          backgroundPosition: "0 0, 0 0, 0 0, 0 0",
        }}
      />

      {/* soft paper veil */}
      <div className="fixed inset-0 -z-10 bg-white/35" />

<div className="container max-w-3xl py-10 md:py-14">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6 md:mb-8">
          <div>
            <h1 className="font-heading text-pf-up-2 md:text-pf-up-3 tracking-tight text-mcn-text-primary">
              {t.title}
            </h1>
            <p className="mt-2 text-mcn-text-secondary text-mt-base">{t.subtitle}</p>
          </div>

          <LangToggle lang={lang} setLang={setLang} left={t.toggleLeft} right={t.toggleRight} />
        </div>

        {/* Card */}
        <div className="rounded-mcn-xl shadow-mcn-card border border-black/10 bg-black/5 backdrop-blur-mcn">
          {/* Top stepper */}
          <div className="px-5 md:px-7 pt-5 md:pt-6 pb-4 border-b border-black/10">
            <Stepper steps={steps} step={step} onSelect={(i) => setStep(i)} />
            <div className="mt-4">
              <h2 className="font-heading text-mt-up-2 text-mcn-text-primary">{s.title}</h2>
              <p className="mt-1 text-mt-down-1 text-mcn-text-muted">{s.hint}</p>
            </div>
          </div>

          {/* Content */}
          <div className="px-5 md:px-7 py-6 md:py-7">
            {submitted ? (
              <SuccessCard lang={lang} />
            ) : (
              <>
                <div className="relative">
                  {locked && <div className="absolute inset-0 z-10 bg-transparent" />}

                  <div className={locked ? "pointer-events-none opacity-60" : ""}>
                    {sectionKey === "profile" && (
                  <div className="space-y-5">
                    <Field label={s.fields.fullName} required>
                      <Input value={form.fullName} onChange={(v) => setField("fullName", v)} placeholder="" />
                    </Field>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field label={s.fields.mobile} required>
                        <Input value={form.mobile} onChange={(v) => setField("mobile", v)} inputMode="tel" />
                      </Field>
                      <Field label={s.fields.email} required>
                        <Input value={form.email} onChange={(v) => setField("email", v)} inputMode="email" />
                      </Field>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field label={s.fields.state} required>
                        <Input value={form.state} onChange={(v) => setField("state", v)} placeholder="e.g., Maharashtra" />
                      </Field>
                      <Field label={s.fields.city} required>
                        <Input value={form.city} onChange={(v) => setField("city", v)} placeholder="e.g., Pune" />
                      </Field>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field label={s.fields.org}>
                        <Input value={form.org} onChange={(v) => setField("org", v)} />
                      </Field>
                      <Field label={s.fields.role}>
                        <Input value={form.role} onChange={(v) => setField("role", v)} />
                      </Field>
                    </div>
                    <Field label={s.fields.contactMode} required>
                      <RadioCards
                        value={form.contactMode}
                        onChange={(v) => setField("contactMode", v)}
                        options={s.contactModes}
                      />
                    </Field>
                  </div>
                )}

                {sectionKey === "vision" && (
                  <div className="space-y-5">
                    <Field label={s.fields.buildType} required>
                      <RadioCards value={form.buildType} onChange={(v) => setField("buildType", v)} options={s.buildTypes} />
                    </Field>

                    <Field label={s.fields.vehicleSegments} required>
                      <CheckChips
                        values={form.vehicleSegments}
                        onToggle={(v) => toggleInArray("vehicleSegments", v)}
                        options={s.vehicles}
                      />
                    </Field>

                    <Field label={s.fields.pointsInitial} required>
                      <RadioRow value={form.pointsInitial} onChange={(v) => setField("pointsInitial", v)} options={s.points} />
                    </Field>

                    <Field label={s.fields.expandPlan} required>
                      <RadioRow value={form.expandPlan} onChange={(v) => setField("expandPlan", v)} options={s.expand} />
                    </Field>
                  </div>
                )}

                {sectionKey === "chargers" && (
                  <div className="space-y-5">
                    <Field label={s.fields.chargerType} required>
                      <RadioCards value={form.chargerType} onChange={(v) => setField("chargerType", v)} options={s.chargerTypes} />
                    </Field>

                    {!isNotSureCharger && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {showAC && (
                          <Field label={s.fields.acCapacity}>
                            <Select value={form.acCapacity} onChange={(v) => setField("acCapacity", v)} options={["", ...s.acCaps]} />
                          </Field>
                        )}
                        {showDC && (
                          <Field label={s.fields.dcCapacity}>
                            <Select value={form.dcCapacity} onChange={(v) => setField("dcCapacity", v)} options={["", ...s.dcCaps]} />
                          </Field>
                        )}
                      </div>
                    )}

                    <Field label={s.fields.usagePattern} required>
                      <RadioCards value={form.usagePattern} onChange={(v) => setField("usagePattern", v)} options={s.patterns} />
                    </Field>
                  </div>
                )}

                {sectionKey === "site" && (
                  <div className="space-y-5">
                    <Field label={s.fields.siteArea} required>
                      <Input value={form.siteArea} onChange={(v) => setField("siteArea", v)} placeholder="" />
                    </Field>

                    <Field label={s.fields.locationType} required>
                      <Select value={form.locationType} onChange={(v) => setField("locationType", v)} options={["", ...s.locationTypes]} />
                    </Field>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field label={s.fields.ownership} required>
                        <Select value={form.ownership} onChange={(v) => setField("ownership", v)} options={["", ...s.ownership]} />
                      </Field>
                      <Field label={s.fields.areaSize} required>
                        <Input value={form.areaSize} onChange={(v) => setField("areaSize", v)} placeholder="e.g., 2000 sq ft" />
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field label={s.fields.parking} required>
                        <Input value={form.parking} onChange={(v) => setField("parking", v)} inputMode="numeric" placeholder="e.g., 4" />
                      </Field>
                      <Field label={s.fields.access} required>
                        <Select value={form.access} onChange={(v) => setField("access", v)} options={["", ...s.access]} />
                      </Field>
                    </div>
                  </div>
                )}

                {sectionKey === "power" && (
                  <div className="space-y-5">
                    <Field label={s.fields.hasConnection} required>
                      <RadioRow value={form.hasConnection} onChange={(v) => setField("hasConnection", v)} options={s.yesNoNS} />
                    </Field>

                    <Field label={s.fields.connectionType} required>
                      <Select value={form.connectionType} onChange={(v) => setField("connectionType", v)} options={["", ...s.phases]} />
                    </Field>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field label={s.fields.sanctionedLoad} required>
                        <Input value={form.sanctionedLoad} onChange={(v) => setField("sanctionedLoad", v)} placeholder="e.g., 25" />
                      </Field>
                      <Field label={s.fields.reliability} required>
                        <Select value={form.reliability} onChange={(v) => setField("reliability", v)} options={["", ...s.reliability]} />
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field label={s.fields.canUpgrade} required>
                        <Select value={form.canUpgrade} onChange={(v) => setField("canUpgrade", v)} options={["", ...s.upgrade]} />
                      </Field>
                      <Field label={s.fields.transformer} required>
                        <Select value={form.transformer} onChange={(v) => setField("transformer", v)} options={["", ...s.yesNoNS]} />
                      </Field>
                    </div>
                  </div>
                )}

                {sectionKey === "ops" && (
                  <div className="space-y-5">
                    <Field label={s.fields.opsManager} required>
                      <RadioCards value={form.opsManager} onChange={(v) => setField("opsManager", v)} options={s.opsManagers} />
                    </Field>

                    <Field label={s.fields.staffing} required>
                      <RadioCards value={form.staffing} onChange={(v) => setField("staffing", v)} options={s.staffing} />
                    </Field>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field label={s.fields.hours} required>
                        <Select value={form.hours} onChange={(v) => setField("hours", v)} options={["", ...s.hours]} />
                      </Field>
                      <Field label={s.fields.maintenance} required>
                        <Select value={form.maintenance} onChange={(v) => setField("maintenance", v)} options={["", ...s.maintenance]} />
                      </Field>
                    </div>

                    <Field label={s.fields.software}>
                      <CheckChips values={form.software} onToggle={(v) => toggleInArray("software", v)} options={s.software} />
                    </Field>

                    <Field label={s.fields.listing} required>
                      <RadioRow value={form.listing} onChange={(v) => setField("listing", v)} options={s.yesNoMaybe} />
                    </Field>
                  </div>
                )}

                {sectionKey === "finance" && (
                  <div className="space-y-5">
                    <Field label={s.fields.objective} required>
                      <RadioCards value={form.objective} onChange={(v) => setField("objective", v)} options={s.objectives} />
                    </Field>

                    <Field label={s.fields.budget} required>
                      <Select value={form.budget} onChange={(v) => setField("budget", v)} options={["", ...s.budgets]} />
                    </Field>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field label={s.fields.revenue}>
                        <Input value={form.revenue} onChange={(v) => setField("revenue", v)} placeholder="e.g., ₹50,000 / month" />
                      </Field>
                      <Field label={s.fields.timeline} required>
                        <Select value={form.timeline} onChange={(v) => setField("timeline", v)} options={["", ...s.timelines]} />
                      </Field>
                    </div>

                    <Field label={s.fields.notes}>
                      <TextArea value={form.notes} onChange={(v) => setField("notes", v)} placeholder="" />
                    </Field>

                    {/* Review summary */}
                    <div className="mt-2 rounded-mcn-lg border border-black/10 bg-mcn-surface4 p-4">
                      <div className="text-mt-down-1 text-mcn-text-muted">{t.common.review}</div>
                      <pre className="mt-2 text-[12px] leading-5 font-mono text-mcn-text-secondary whitespace-pre-wrap">
{JSON.stringify({ lang, ...form }, null, 2)}
                      </pre>
                      <div className="mt-3 text-mt-down-1 text-mcn-text-faint">
                        (This JSON preview is for internal testing. You can hide it in production.)
                      </div>
                    </div>
                  </div>
                )}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          {!submitted && (
            <div className="px-5 md:px-7 py-4 border-t border-black/10 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0 || submitting}
                className="px-4 py-2 rounded-mcn border border-black/15 text-mcn-text-primary hover:text-mcn-text-primary hover:border-black/25 transition duration-normal disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {t.common.back}
              </button>

              <div className="text-mcn-text-muted text-mt-down-1">
                {step + 1}/{steps.length}
              </div>

              {!isLast ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
                  disabled={!canGoNext() || submitting}
                  className="px-5 py-2 rounded-mcn bg-mcn-red text-white hover:bg-mcn-red-hover transition duration-normal disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {t.common.next}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onSubmit}
                  disabled={!canGoNext() || submitting}
                  className="px-5 py-2 rounded-mcn bg-mcn-red text-white hover:bg-mcn-red-hover transition duration-normal disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {submitting ? "Submitting..." : t.common.submit}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* -----------------------------
   UI building blocks
------------------------------ */

function LangToggle({ lang, setLang, left, right }) {
  return (
    <div className="inline-flex rounded-mcn border border-black/10 bg-white/60 p-1 backdrop-blur-mcn">
      <button
        type="button"
        onClick={() => setLang("EN")}
        className={
          "px-3 py-1.5 rounded-[10px] text-mt-down-1 transition duration-normal " +
          (lang === "EN" ? "bg-white text-mcn-text-primary shadow-mcn-soft" : "text-mcn-text-secondary hover:text-mcn-text-primary")
        }
      >
        {left}
      </button>
      <button
        type="button"
        onClick={() => setLang("HI")}
        className={
          "px-3 py-1.5 rounded-[10px] text-mt-down-1 transition duration-normal " +
          (lang === "HI" ? "bg-white text-mcn-text-primary shadow-mcn-soft" : "text-mcn-text-secondary hover:text-mcn-text-primary")
        }
      >
        {right}
      </button>
    </div>
  );
}

function Stepper({ steps, step, onSelect }) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1">
      {steps.map((s, i) => (
        <div key={s.k} className="flex items-center gap-2 shrink-0">
          <div
            className={
              "h-2.5 w-2.5 rounded-full " +
              (i < step ? "bg-black/40" : i === step ? "bg-mcn-red" : "bg-black/15")
            }
          />
          <button type="button" onClick={() => onSelect?.(i)} className={"text-mt-down-1 text-left transition duration-normal " + (i === step ? "text-mcn-text-primary" : "text-mcn-text-faint hover:text-mcn-text-secondary")}>{s.label}</button>
          {i !== steps.length - 1 && <div className="h-px w-6 bg-black/10" />}
        </div>
      ))}
    </div>
  );
}

function Field({ label, required, children }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <div className="text-mt-base font-medium text-mcn-text-primary">{label}</div>
        {required ? (
          <span className="text-[12px] text-mcn-text-faint">Required</span>
        ) : (
          <span className="text-[12px] text-mcn-text-faint">Optional</span>
        )}
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function Input({ value, onChange, placeholder, inputMode = "text" }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      inputMode={inputMode}
      className="w-full rounded-mcn border border-black/10 bg-white/70 backdrop-blur-mcn px-3.5 py-3 text-mcn-text-primary placeholder:text-mcn-text-faint focus:outline-none focus:ring-2 focus:ring-mcn-blue"
    />
  );
}

function TextArea({ value, onChange, placeholder }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={5}
      className="w-full rounded-mcn border border-black/10 bg-white/70 backdrop-blur-mcn px-3.5 py-3 text-mcn-text-primary placeholder:text-mcn-text-faint focus:outline-none focus:ring-2 focus:ring-mcn-blue"
    />
  );
}

function Select({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-mcn border border-black/10 bg-white/70 backdrop-blur-mcn px-3.5 py-3 text-mcn-text-primary focus:outline-none focus:ring-2 focus:ring-mcn-blue"
    >
      {options.map((o) => (
        <option key={o} value={o}>
          {o || "—"}
        </option>
      ))}
    </select>
  );
}

function RadioCards({ value, onChange, options }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {options.map((o) => {
        const active = value === o;
        return (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            className={
              "text-left rounded-mcn-lg border px-4 py-3 transition duration-normal " +
              (active
                ? "border-black/25 bg-white/80 shadow-mcn-soft"
                : "border-black/10 bg-white/55 hover:bg-white/70")
            }
          >
            <div className="text-mt-base font-medium text-mcn-text-primary">{o}</div>
          </button>
        );
      })}
    </div>
  );
}

function RadioRow({ value, onChange, options }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = value === o;
        return (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            className={
              "rounded-mcn border px-3.5 py-2 text-mt-down-1 transition duration-normal " +
              (active
                ? "border-black/25 bg-white/85 text-mcn-text-primary"
                : "border-black/10 bg-white/55 text-mcn-text-secondary hover:bg-white/70")
            }
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

function CheckChips({ values, onToggle, options }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = values.includes(o);
        return (
          <button
            key={o}
            type="button"
            onClick={() => onToggle(o)}
            className={
              "rounded-mcn border px-3.5 py-2 text-mt-down-1 transition duration-normal " +
              (active
                ? "border-black/25 bg-white/85 text-mcn-text-primary"
                : "border-black/10 bg-white/55 text-mcn-text-secondary hover:bg-white/70")
            }
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

function SuccessCard({ lang }) {
  const copy =
    lang === "HI"
      ? {
          title: "आवेदन प्राप्त हुआ।",
          body: "धन्यवाद। Massive टीम आपके विवरण की समीक्षा करके आपसे संपर्क करेगी।",
        }
      : {
          title: "Application received.",
          body: "Thank you. The Massive team will review your details and contact you.",
        };
  return (
    <div className="rounded-mcn-lg border border-black/10 bg-white/70 backdrop-blur-mcn p-5">
      <div className="text-mt-up-1 font-heading text-mcn-text-primary">{copy.title}</div>
      <div className="mt-2 text-mt-base text-mcn-text-secondary">{copy.body}</div>
    </div>
  );
}
