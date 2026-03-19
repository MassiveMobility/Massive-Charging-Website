import { access, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const workspaceRoot = process.cwd();

const routeTargets = [
  {
    label: "Home",
    relativePath: "src/app/(marketing)/page.tsx"
  },
  {
    label: "About",
    relativePath: "src/app/(marketing)/about/page.tsx"
  },
  {
    label: "Articles",
    relativePath: "src/app/(marketing)/articles/page.tsx"
  },
  {
    label: "Contact",
    relativePath: "src/app/(marketing)/contact/page.tsx"
  }
];

const contrastTargets = [
  {
    backgroundToken: "--raw-color-slate-0",
    foregroundToken: "--raw-color-slate-900",
    label: "Primary body text on surface",
    minRatio: 7
  },
  {
    backgroundToken: "--raw-color-slate-0",
    foregroundToken: "--raw-color-slate-600",
    label: "Muted body text on surface",
    minRatio: 4.5
  },
  {
    backgroundToken: "--raw-color-slate-0",
    foregroundToken: "--raw-color-brand-700",
    label: "Primary links on surface",
    minRatio: 4.5
  },
  {
    backgroundToken: "--raw-color-brand-700",
    foregroundToken: "--raw-color-slate-0",
    label: "Inverse text on branded surfaces",
    minRatio: 4.5
  }
];

const requiredInteractiveSelectors = [
  "a:focus-visible",
  "button:focus-visible",
  "input:focus-visible",
  ".ui-button:disabled",
  ".ui-control--invalid",
  ".skip-link:focus-visible"
];

const failures = [];
const passes = [];

await checkRouteTargets();
await checkMainLandmarkTargets();
await checkInteractiveSelectors();
await checkContrastTargets();

if (failures.length > 0) {
  console.error("Accessibility smoke checks failed:");
  failures.forEach((failure) => {
    console.error(`- ${failure}`);
  });
  process.exit(1);
}

console.log("Accessibility smoke checks passed.");
passes.forEach((pass) => {
  console.log(`- ${pass}`);
});

async function checkRouteTargets() {
  for (const target of routeTargets) {
    const absolutePath = path.join(workspaceRoot, target.relativePath);

    try {
      await access(absolutePath);
      const content = await readFile(absolutePath, "utf8");

      const hasPageHeading = /level=\{1\}/.test(content);
      const hasSemanticSection = /<Section[^>]*aria-labelledby=/.test(content);

      if (!hasPageHeading) {
        failures.push(`${target.label} route is missing an explicit level={1} heading.`);
        continue;
      }

      if (!hasSemanticSection) {
        failures.push(`${target.label} route is missing Section aria-labelledby semantics.`);
        continue;
      }

      passes.push(`${target.label} route includes heading and semantic section baseline.`);
    } catch {
      failures.push(`${target.label} route file is missing: ${target.relativePath}`);
    }
  }
}

async function checkMainLandmarkTargets() {
  const layoutTargets = [
    "src/app/(marketing)/layout.tsx",
    "src/app/(platform)/layout.tsx"
  ];

  for (const relativePath of layoutTargets) {
    const absolutePath = path.join(workspaceRoot, relativePath);
    const content = await readFile(absolutePath, "utf8");

    if (!/<main[^>]*id="main-content"/.test(content)) {
      failures.push(`${relativePath} is missing a main landmark with id="main-content".`);
      continue;
    }

    passes.push(`${relativePath} exposes main landmark target for skip link.`);
  }
}

async function checkInteractiveSelectors() {
  const themeCssPath = path.join(workspaceRoot, "src/styles/theme.css");
  const themeCss = await readFile(themeCssPath, "utf8");

  for (const selector of requiredInteractiveSelectors) {
    if (!themeCss.includes(selector)) {
      failures.push(`theme.css is missing required interactive selector: ${selector}`);
      continue;
    }

    passes.push(`theme.css includes interactive selector: ${selector}`);
  }
}

async function checkContrastTargets() {
  const tokensCssPath = path.join(workspaceRoot, "src/styles/tokens.css");
  const tokensCss = await readFile(tokensCssPath, "utf8");
  const tokenMap = extractHexTokens(tokensCss);

  for (const target of contrastTargets) {
    const foreground = tokenMap.get(target.foregroundToken);
    const background = tokenMap.get(target.backgroundToken);

    if (!foreground || !background) {
      failures.push(
        `Missing color token(s) for ${target.label}: ${target.foregroundToken}, ${target.backgroundToken}`
      );
      continue;
    }

    const contrastRatio = getContrastRatio(foreground, background);

    if (contrastRatio < target.minRatio) {
      failures.push(
        `${target.label} contrast (${contrastRatio.toFixed(2)}) is below ${target.minRatio.toFixed(1)}`
      );
      continue;
    }

    passes.push(
      `${target.label} contrast (${contrastRatio.toFixed(2)}) meets ${target.minRatio.toFixed(1)}`
    );
  }
}

function extractHexTokens(tokensCssContent) {
  const tokenMap = new Map();
  const tokenPattern = /(--raw-color-[\w-]+)\s*:\s*(#[0-9a-fA-F]{6})\s*;/g;

  for (const match of tokensCssContent.matchAll(tokenPattern)) {
    const [, tokenName, tokenValue] = match;
    tokenMap.set(tokenName, tokenValue);
  }

  return tokenMap;
}

function getContrastRatio(foregroundHex, backgroundHex) {
  const foregroundLuminance = getRelativeLuminance(foregroundHex);
  const backgroundLuminance = getRelativeLuminance(backgroundHex);
  const lighter = Math.max(foregroundLuminance, backgroundLuminance);
  const darker = Math.min(foregroundLuminance, backgroundLuminance);

  return (lighter + 0.05) / (darker + 0.05);
}

function getRelativeLuminance(hexColor) {
  const red = Number.parseInt(hexColor.slice(1, 3), 16) / 255;
  const green = Number.parseInt(hexColor.slice(3, 5), 16) / 255;
  const blue = Number.parseInt(hexColor.slice(5, 7), 16) / 255;

  const [linearRed, linearGreen, linearBlue] = [red, green, blue].map((value) => {
    if (value <= 0.03928) {
      return value / 12.92;
    }

    return ((value + 0.055) / 1.055) ** 2.4;
  });

  return linearRed * 0.2126 + linearGreen * 0.7152 + linearBlue * 0.0722;
}
