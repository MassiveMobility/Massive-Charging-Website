# PRD: Public Website Frontend Modernization, SEO/AI Optimization, and Content Platform Readiness

## 1. Document Overview

**Product Name:** Massive Charging Public Website Modernization
**Owner:** Awadesh
**Organization:** Massive Charging
**Document Type:** Product Requirements Document
**Status:** Draft for execution
**Target Platform Direction:** Next.js-based public website and content-ready platform

## 2. Executive Summary

Massive Charging needs to modernize its public-facing website so it meets a higher professional standard for maintainability, scalability, SEO, AI discoverability, accessibility, performance, and content operations. The current internal documentation reflects a React-based frontend architecture centered on reusable components, Redux-managed state, React Router routing, centralized API handling, and page-level table/dashboard workflows. The related improvement plan already identifies architecture, performance, and security needs such as deduplication, abortable requests, caching, lazy loading, secure cookies, and backend RBAC enforcement.   

This PRD proposes a full modernization program to move the public website toward a best-in-class Next.js architecture, improve discoverability in both search engines and AI systems, reduce long-term technical debt, create a scalable and domain-driven structure, and prepare the platform for editorial independence through an admin/content workflow layer. This direction also aligns with the existing internal requirement that article publishing should no longer depend on backend-only intervention and should support role-based access control. That direction is reinforced by the current role architecture, which already documents a dual-role permission model and six permission pillars, even though backend enforcement is still an active improvement requirement.   

## 3. Background and Context

The currently documented frontend is an enterprise-style React application with dashboard, table management, reusable UI components, Redux slices, React Router navigation, and centralized API interaction. The current structure includes folders such as `api`, `app`, `Components`, `features`, `Pages`, and `Routes`, with data-fetching flows routed through Redux slices and `api.js`.   

The frontend improvement plan already defines concrete needs around performance, architecture, and security: migration away from legacy tooling, reduction of duplicate API calls, request cancellation, caching, lazy loading, secure session handling with backend-managed cookies, and backend-enforced RBAC. The active-work tracker shows that some preparatory items are already complete, but a large part of the architecture and security roadmap remains open.   

The role system documentation shows that the CMS already has a detailed permission model, including full-access and view-only role variants, six core permission types, and business-specific role categories. That makes role-based publishing and admin access a realistic extension path for content operations, but the latest improvement plan clearly states backend permission enforcement is still required to make the model secure.   

## 4. Problem Statement

The public website is not yet positioned as a best-in-class, future-ready platform for long-term growth. Based on the current internal materials, the main problem areas are:

A fragmented or legacy frontend architecture that needs modernization beyond incremental patching.  

Performance and network inefficiencies caused by duplicate calls, lack of cancellation, inconsistent caching, and non-optimized loading behavior. 

Security gaps where frontend-level role behavior exists, but backend enforcement remains a required improvement item. 

Operational dependency for article publishing, where content workflows should move toward admin-controlled, role-based publishing instead of backend-dependent updates. This is consistent with the broader roadmap direction and the existing RBAC model.  

Missing architecture-level documentation, which is explicitly listed as not started in the active-work sheet. 

## 5. Product Vision

Build a modern, public-facing Massive Charging website on a clean Next.js architecture that is:

* highly discoverable in search engines and AI-driven answer systems,
* fast and accessible across devices,
* easy to scale and maintain,
* structurally clean for long-term developer productivity,
* ready for content publishing workflows with role-based operational control.

This vision is a proposed target-state based on the gaps and requirements already documented internally. It extends the existing improvement plan into a full productized website modernization program.  

## 6. Goals

### Primary Goals

1. Rebuild the public website on a modern Next.js architecture with clear domain-oriented structure.
2. Achieve strong technical SEO through semantic output, crawlable rendering, metadata strategy, and high-performance delivery.
3. Improve AI discoverability through clean markup, structured content hierarchy, and machine-readable page design.
4. Improve accessibility with semantic HTML, keyboard support, screen-reader clarity, and accessible interaction patterns.
5. Reduce long-term maintenance cost through better file structure, naming conventions, modularity, and reduced coupling.
6. Create a foundation for role-based article publishing through an admin/content workflow layer.
7. Align frontend security with backend-enforced session and authorization practices.  

### Secondary Goals

1. Improve developer onboarding through architecture and file-level documentation.
2. Centralize theme, tokens, constants, and reusable config.
3. Standardize data-fetching and rendering decisions by page type.
4. Keep client-side JavaScript lean and intentional.  

## 7. Non-Goals

This phase will not aim to:

* redesign every business workflow inside the CMS,
* replace the entire backend domain model,
* deliver all future CMS improvements in one release,
* implement every possible role and workflow at once.

This PRD focuses on the public website foundation, content-readiness, and modernization path. The existing tracker already separates independent frontend work from items requiring backend coordination, which supports a phased approach rather than a single all-at-once migration. 

## 8. Users and Stakeholders

### Primary External Users

* Visitors discovering Massive Charging through search, direct links, referrals, or AI-generated recommendations.
* Potential customers evaluating services, products, or trustworthiness.
* Readers consuming public articles, updates, or educational content.

### Internal Users

* Marketing/content team members who need to publish or update articles without backend dependency.
* Developers maintaining and expanding the site.
* Admin or operations users managing publishing and content states.

### Stakeholders

* Product/business leadership
* Frontend engineering
* Backend engineering
* Content/marketing operations
* SEO/content stakeholders
* Security/compliance stakeholders

The role system documentation supports the idea that internal workflows can be separated by permissions and view-only/full-access variants when the content/admin layer is introduced.  

## 9. Core Requirements

## 9.1 Information Architecture and File Structure

The new codebase should be organized by domain/feature instead of mixed technical buckets. Route concerns, reusable UI, content modules, SEO utilities, validations, server logic, and admin capabilities should have clear boundaries.

### Requirements

* Move to a Next.js App Router structure.
* Organize business logic by feature/domain.
* Keep route-level files in `app/`.
* Keep reusable primitives separate from feature-specific components.
* Remove dead code, legacy wrappers, and redundant assets.
* Standardize file naming and folder conventions.
* Prevent oversized route files by pushing logic into domain modules.

This requirement is directly driven by the current documented React-era folder layout and the roadmap’s structural concerns.  

## 9.2 Code Quality and Maintainability

The platform must be easy to reason about and safe to extend.

### Requirements

* Refactor duplicate logic into shared, well-scoped modules where it improves clarity.
* Enforce linting, formatting, and typing consistency.
* Reduce tight coupling between UI and data logic.
* Use explicit boundaries between UI, services, validation, server logic, and configuration.
* Keep components focused and composable.
* Maintain architecture documentation and file-level documentation as implementation evolves.

This maps to the existing code organization and the active documentation gap already tracked internally.  

## 9.3 SEO Requirements

SEO is a first-class product requirement, not a later enhancement.

### Requirements

* Server-render public content wherever possible.
* Provide unique route metadata for important pages.
* Use semantic HTML and consistent heading hierarchy.
* Ensure canonicalization strategy for important content pages.
* Support structured data where useful.
* Optimize performance in ways that improve crawlability and rankings.
* Keep important content in HTML output rather than hiding it behind heavy client rendering.

This extends the performance and structure direction already outlined in the roadmap into explicit public-website SEO requirements. 

## 9.4 AI Discoverability Requirements

The website should be understandable not only to search engines but also to AI-driven retrieval and answer systems.

### Requirements

* Use clear content hierarchy and semantic sectioning.
* Keep content machine-readable in HTML.
* Avoid unnecessary DOM complexity around meaningful content.
* Use strong metadata and descriptive titles.
* Keep public content accessible to crawlers without reliance on fragile client-only rendering.
* Structure article and landing pages for clean extraction and summarization.

This is a proposed product requirement built on the same structural and performance foundations documented internally for the frontend roadmap. 

## 9.5 Accessibility Requirements

Accessibility should be designed into the foundation.

### Requirements

* Use semantic landmarks and proper heading order.
* Ensure all interactive controls have accessible names.
* Support keyboard navigation and visible focus.
* Use accessible form labels, descriptions, and error handling.
* Avoid inaccessible custom interactions unless fully compliant.
* Ensure screen readers receive meaningful page structure and state.

This requirement complements the public-site modernization objective and should be treated as mandatory quality, not optional polish.

## 9.6 Performance Requirements

Performance is a structural requirement for user experience, SEO, and operational efficiency.

### Requirements

* Eliminate duplicate API calls.
* Support request cancellation on superseded flows.
* Standardize caching with invalidation rules.
* Use code splitting and lazy loading for non-critical modules.
* Reduce initial bundle weight.
* Improve page load behavior for public pages and future admin surfaces.

These requirements directly reflect the 8-step improvement plan. 

## 9.7 Security and Authorization Requirements

The public website and any future admin panel must align with secure session and authorization architecture.

### Requirements

* Move sensitive session handling to backend-managed secure cookies.
* Ensure backend-enforced RBAC for protected APIs and admin functionality.
* Keep frontend authorization as UX guidance, not the final security boundary.
* Support auditable permission-aware behavior in admin/content flows.

This is directly supported by the improvement plan and the current RBAC documents.  

## 9.8 Content and Article Publishing Requirements

The platform must support a future where authorized users can independently manage articles.

### Requirements

* Provide a clear path to an admin panel for article creation, editing, previewing, and publishing.
* Support role-based permissions for content operations.
* Separate editorial workflow from backend deployment dependency.
* Design article architecture to support SEO and structured content output.
* Keep content operations scalable for non-developer stakeholders.

This requirement is consistent with your stated roadmap direction and feasible because the CMS already documents a mature permission model.  

## 10. Functional Scope

## Phase A: Foundation Modernization

* Define target architecture
* Create new folder conventions
* Establish design tokens/config conventions
* Set up documentation baseline
* Prepare route and feature boundaries

## Phase B: Public Website Core

* Migrate public pages into Next.js structure
* Implement route layouts and metadata strategy
* Build reusable content-friendly page patterns
* Improve responsiveness and semantic page output

## Phase C: Performance and Security Hardening

* Deduplicate requests
* Add abort handling
* Add standardized caching approach
* Add code splitting/lazy loading
* Move toward secure cookie-based session handling
* Coordinate backend RBAC enforcement

## Phase D: Content Platform Readiness

* Define article model and public article routes
* Build authoring/publishing workflow requirements
* Define admin IA and permission model for content roles
* Add preview/publish/status concepts

The phased structure mirrors the separation already present in the internal tracker between frontend-only and backend-coordination items. 

## 11. Proposed Technical Direction

### Frontend Framework

Adopt Next.js App Router as the target architecture for the public website.

### Rendering Strategy

* Static or ISR for stable public pages and articles.
* Dynamic/server-rendered routes only where content freshness or user specificity requires it.
* Client components only for true interactivity.

### Styling and Design System

* Centralize colors, typography, spacing, breakpoints, and tokens.
* Use shared theme/config primitives rather than hardcoded values.

### Content Architecture

* Treat articles and key landing pages as structured content entities.
* Keep metadata and schema-friendly outputs close to the route layer.

### Authorization Direction

* Reuse the documented permission model concepts from the CMS for future admin/content workflows.
* Require backend enforcement for any protected operation.

This direction is a proposal informed by the current React-era architecture and the existing security roadmap.   

## 12. Success Metrics

### Business / Product Metrics

* Increase search visibility for target public pages
* Improve discoverability of public content in AI-generated search contexts
* Reduce time required to publish or update articles
* Reduce dependency on engineering for routine content tasks

### Engineering Metrics

* Lower duplicate request volume
* Lower client bundle size on key public pages
* Faster page rendering and interaction readiness
* Reduced code ownership confusion and onboarding time
* Fewer regressions from frontend changes
* Clear architecture documentation coverage for changed modules

### Security / Governance Metrics

* No sensitive auth data stored in insecure client-accessible patterns
* Protected admin/content operations blocked correctly at backend level
* Clear mapping between role capability and UI capability

The existing roadmap already defines several technical improvements that can be measured through request counts, Lighthouse/performance comparison, and backend/frontend security coordination. 

## 13. Dependencies

### Frontend Dependencies

* Architecture migration planning
* Design system/token consolidation
* Route/content refactor
* Public-page migration
* Documentation workstream

### Backend Dependencies

* Secure cookie issuance/validation
* CSRF-safe session model where required
* Backend permission enforcement
* Article/content APIs or CMS interfaces if needed for admin workflows

The active work sheet and improvement plan both explicitly show that secure cookies, backend RBAC, and some documentation/security items require backend coordination.  

## 14. Risks

* Migration may create temporary duplication if old and new architectures coexist for too long.
* Public SEO can regress if routing, metadata, or rendering are migrated without a strict page-by-page checklist.
* Admin/content ambitions can expand too broadly without phased scope control.
* Security can remain incomplete if backend authorization is delayed while frontend work advances.
* Documentation may become outdated if not updated alongside implementation.

These risks follow directly from the current split between completed preparatory work and not-started architecture/security/documentation work. 

## 15. Open Questions

1. What content types beyond articles should the admin panel support in phase 1?
2. Should article publishing be backed by the current CMS, a new admin surface, or a dedicated content service?
3. Which public pages are highest-priority for SEO migration first?
4. What analytics and search-console measurements will define success?
5. Which internal roles should be allowed to draft, review, approve, and publish content?
6. Should article workflows support draft, scheduled publish, and rollback in phase 1?

## 16. Recommended Delivery Order

1. Finalize architecture and folder structure decisions.
2. Freeze naming conventions, token strategy, and documentation format.
3. Define public route map and SEO-critical page list.
4. Build core Next.js app shell and shared foundation.
5. Migrate highest-value public pages first.
6. Add article content model and public article routes.
7. Define admin/content requirements in detail.
8. Integrate secure session and backend RBAC support for protected areas.
9. Complete architecture and codebase documentation.


