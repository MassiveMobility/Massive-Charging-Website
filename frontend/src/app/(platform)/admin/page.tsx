import { buildPageMetadata } from "@/lib/seo/metadata";

import { routePaths } from "@/lib/constants/routes";

import Link from "next/link";

export const metadata = buildPageMetadata({
  title: "Admin Platform Placeholder",
  description: "Platform shell for upcoming role-based admin and content workflows.",
  path: "/admin",
  noIndex: true
});

const adminArchitectureChecklist = [
  "Protected route boundary under the platform route group",
  "Clear separation between public marketing and operational workflows",
  "No-index metadata to keep placeholder platform routes out of public search results"
];

export default function AdminHomePage() {
  return (
    <>
      <section aria-labelledby="admin-title" className="hero">
        <p className="eyebrow">Admin</p>
        <h1 id="admin-title">Platform workspace placeholder</h1>
        <p className="lead">
          This route reserves the structure for authentication, RBAC, and content operations without
          leaking platform concerns into public marketing routes.
        </p>
      </section>

      <section aria-labelledby="admin-checklist-title" className="surface">
        <h2 id="admin-checklist-title">Architecture baseline in this route</h2>
        <ul className="checklist">
          {adminArchitectureChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="admin-links-title" className="surface">
        <h2 id="admin-links-title">Next placeholder route</h2>
        <p>
          <Link href={routePaths.adminArticles}>Go to article operations placeholder</Link>
        </p>
      </section>
    </>
  );
}
