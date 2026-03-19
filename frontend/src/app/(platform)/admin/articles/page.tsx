import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Admin Article Workflow Placeholder",
  description: "Scaffold route for role-based article drafting, review, and publishing operations.",
  path: "/admin/articles",
  noIndex: true
});

const plannedWorkflowStages = [
  "Draft creation with validation and autosave support",
  "Review, approval, and publish actions with role-based permissions",
  "Scheduled publishing and editorial status tracking for operations independence"
];

export default function AdminArticlesPage() {
  return (
    <>
      <section aria-labelledby="admin-articles-title" className="hero">
        <p className="eyebrow">Admin Articles</p>
        <h1 id="admin-articles-title">Editorial workflow route placeholder</h1>
        <p className="lead">
          This page establishes the route contract for an upcoming admin publishing experience.
        </p>
      </section>

      <section aria-labelledby="workflow-title" className="surface">
        <h2 id="workflow-title">Planned workflow stages</h2>
        <ul className="checklist">
          {plannedWorkflowStages.map((stage) => (
            <li key={stage}>{stage}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
