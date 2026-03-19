# Step 01 Plan: Repo Split and Governance

## Goal
Create a clean and future-proof project foundation by separating `frontend/` and `backend/`, defining workspace tooling, setting branch and commit governance, and establishing a baseline documentation index.

## Why This Step Comes First
- Prevents architecture drift during migration.
- Keeps frontend and backend responsibilities clear from day 1.
- Creates a repeatable workflow for multiple Codex chats.
- Reduces merge conflicts and documentation gaps later.

## Scope
This step is only about structure and governance setup. It does not include page migration, UI implementation, or backend feature logic yet.

## Execution Tasks (In Order)
1. Create top-level folder split.
   - Add `frontend/` for Next.js app work.
   - Add `backend/` for API, auth, RBAC, and content workflow services.
   - Keep `Legacy-website/` as read-only migration source.

2. Create baseline workspace tooling at repository root.
   - Add a root workspace manager setup (for example npm workspaces or pnpm workspaces).
   - Add shared scripts for lint, typecheck, test, and build orchestration.
   - Add shared config baseline: `.editorconfig`, root `.gitignore`, and optional formatting config.

3. Define governance standards.
   - Branch naming:
     - `codex/frontend-*` for frontend tasks
     - `codex/backend-*` for backend tasks
     - `codex/docs-*` for documentation tasks
   - Commit message rule: Conventional Commits.
     - Example: `feat(frontend): scaffold nextjs app router shell`
     - Example: `docs(migration): add step-01 repo split guide`
   - Pull request rule: include Summary, Why, Implementation, Testing, Risks.

4. Add baseline docs index.
   - Add `docs/README.md` as the master documentation index.
   - Add `docs/concept-learning/README.md` for concept docs.
   - Add `docs/codebase-knowledge/README.md` for architecture and file-level knowledge docs.
   - Link these docs from the root `README.md` or migration docs.

5. Add migration guardrails.
   - Add a short `Migration/README.md` explaining migration phases and source-of-truth docs.
   - Record that new work must go to `frontend/` and `backend/`, not `Legacy-website/`.

## Suggested Output Structure After This Step
```text
Massive-Charging-Website/
  frontend/
  backend/
  Legacy-website/
  Migration/
    PRD.md
    plans/
      01-repo-split-governance.md
  docs/
    README.md
    concept-learning/
      README.md
    codebase-knowledge/
      README.md
```

## Definition of Done
- `frontend/` and `backend/` folders exist.
- Root workspace tooling is configured and documented.
- Branch and commit conventions are written and visible.
- Baseline docs index exists under `docs/`.
- Migration guardrail note exists to prevent accidental legacy edits.

## Handoff Prompt For Next Chat
Use this in a new Codex chat:

`Execute Step 01 from Migration/plans/01-repo-split-governance.md. Implement all setup files and folders exactly, and update docs indexes with clear explanations.`
