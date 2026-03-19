import React from "react";
import EVGuideHomeHero from "./EVGuideHomeHero";
import MainDashboard from "./MainDashboard";

// ✅ If your file is in src/Querycode/..., this path usually works.
// If TS complains, adjust the relative path to where your App.tsx exports useAppData.
import { useAppData } from "../../App";

type Props = {
  /** Optional override; normally you won't pass this anymore */
  vehicleGuideData?: any;
};

const EvGuideHomeDashboard: React.FC<Props> = ({ vehicleGuideData: vehicleGuideDataProp }) => {
  const { vehicleGuideData, loading, error } = useAppData();

  // Prefer prop if provided, otherwise use App context (source-of-truth)
  const data = vehicleGuideDataProp ?? vehicleGuideData;

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="rounded-xl bg-white border border-slate-200 px-4 py-3 text-slate-700">
          Loading EV guide data…
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="max-w-xl rounded-xl bg-white border border-rose-200 px-4 py-3 text-slate-800">
          <div className="font-semibold text-rose-600">Failed to load JSON</div>
          <div className="mt-1 text-sm text-slate-600">{error}</div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="max-w-xl rounded-xl bg-white border border-slate-200 px-4 py-3 text-slate-800">
          <div className="font-semibold">No data available</div>
          <div className="mt-1 text-sm text-slate-600">
            App did not provide <code className="px-1 rounded bg-slate-50">vehicleGuideData</code>.
            Check that <code className="px-1 rounded bg-slate-50">/vehicle_guide.json</code> exists in{" "}
            <code className="px-1 rounded bg-slate-50">public</code>.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <EVGuideHomeHero />
      <MainDashboard vehicleGuideData={data} />
    </div>
  );
};

export default EvGuideHomeDashboard;