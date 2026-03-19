import cpoTypeIndividualRaw from "@/features/marketing/data/cpo-type-individual.json";
import cpoTypeMasterRaw from "@/features/marketing/data/cpo-type-master.json";

export type CpoHero = {
  title?: string;
  body?: string;
  trustPill?: string;
  actionText?: string;
};

export type CpoConsiderationCard = {
  title: string;
  text: string;
  icon?: string;
};

export type CpoConsideration = {
  title?: string;
  subtitle?: string;
  cards?: CpoConsiderationCard[];
  ctaCard?: string;
};

export type CpoCheckboxGroup = {
  label: string;
  options: string[];
};

export type CpoConnection = {
  title?: string;
  subtitle?: string;
  checkboxGroups?: CpoCheckboxGroup[];
};

export type CpoScenario = {
  id: string;
  slug: string;
  label: string;
  segment: string;
  hero?: CpoHero | null;
  consideration?: CpoConsideration | null;
  connection?: CpoConnection | null;
};

export type CpoSegmentChild = {
  id: string;
  label: string;
  slug: string;
  evType?: string | null;
  scale?: string | null;
  coreRequirement?: string | null;
};

export type CpoSegment = {
  id: string;
  label: string;
  definition?: string | null;
  children: CpoSegmentChild[];
};

type CpoTypeMaster = {
  segments: CpoSegment[];
};

type CpoScenarioMap = Record<string, CpoScenario>;

const cpoTypeMaster = cpoTypeMasterRaw as CpoTypeMaster;
const cpoScenarioMap = cpoTypeIndividualRaw as CpoScenarioMap;

/**
 * Segment list used by the CPO index and menu pages.
 */
export const cpoSegments: CpoSegment[] = cpoTypeMaster.segments ?? [];

/**
 * Flat list of all CPO scenarios from the master map.
 */
export const cpoScenarios: CpoScenario[] = Object.values(cpoScenarioMap);

/**
 * Resolve a CPO scenario from catch-all slug segments.
 * Supports both: /cpo/:segment/:id and full slug matching.
 */
export function getCpoScenarioFromSlug(slugParts: string[]): CpoScenario | null {
  if (!slugParts.length) {
    return null;
  }

  const normalizedPath = `/${slugParts.join("/")}`;
  const byFullSlug = cpoScenarios.find((entry) => entry.slug === normalizedPath);

  if (byFullSlug) {
    return byFullSlug;
  }

  const fallbackId = slugParts[slugParts.length - 1];
  if (!fallbackId) {
    return null;
  }

  return cpoScenarioMap[fallbackId] ?? null;
}

/**
 * Resolve a CPO scenario by id, used by fixed scenario routes.
 */
export function getCpoScenarioById(id: string): CpoScenario | null {
  return cpoScenarioMap[id] ?? null;
}

export const cpoSegmentOrder = [
  "residential",
  "commercial",
  "fleet",
  "institutional",
  "transit-and-corridor",
  "industrial-and-logistics",
  "mixed-use"
] as const;
