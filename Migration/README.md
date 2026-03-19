# Migration Guide

This folder contains the migration strategy and phased execution plans for rebuilding Massive Charging into a production-grade Next.js platform.

## Source of Truth

- Product and migration direction: `Migration/PRD.md` (when present)
- Execution plans: `Migration/plans/*.md`
- Current foundational step: `Migration/plans/01-repo-split-governance.md`

## Phases

1. Repository split and governance baseline
2. Frontend App Router architecture and route migration
3. Backend platform services (API, auth, RBAC, content workflows)
4. Content operations hardening and admin workflows
5. Performance, SEO, accessibility, and quality hardening

## Guardrails

- New implementation work must go into `frontend/` and `backend/`.
- `Legacy-website/` is read-only migration source material.
- Do not place net-new features inside `Legacy-website/`.
