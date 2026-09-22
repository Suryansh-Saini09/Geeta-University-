# Geeta University CMS Implementation Plan

## Phase 1 - Foundation

- [x] Audit current Next.js architecture and content model.
- [x] Document target architecture in `PROJECT_ANALYSIS.md`.
- [x] Add Prisma and database client.
- [x] Add environment variable validation.
- [x] Add foundational auth/session/RBAC utilities.
- [x] Add protected `/admin` route structure.
- [x] Add initial admin login and dashboard shell.

## Phase 2 - Database

- [ ] Finalize PostgreSQL schema.
- [x] Generate Prisma client.
- [ ] Create initial migration.
- [ ] Add seed script for first Super Admin and baseline settings.
- [ ] Add repository/service layer for admin modules.

## Phase 3 - Authentication

- [x] Implement login action.
- [x] Implement logout action.
- [x] Store hashed database sessions.
- [x] Protect admin routes server-side.
- [x] Add optimistic route protection with Next.js `proxy.ts`.
- [ ] Add password rotation/reset plan.

## Phase 4 - Admin Layout

- [ ] Build responsive sidebar.
- [ ] Build admin header.
- [ ] Build dashboard cards.
- [ ] Add table, empty state, loading state, error state, badge, pagination, and modal primitives.
- [ ] Add toast notifications.

## Phase 5 - CMS Modules

- [ ] Pages and page sections.
- [ ] Departments.
- [ ] Courses/programs.
- [ ] Faculty/staff.
- [ ] Notices/announcements.
- [ ] News.
- [ ] Events.
- [ ] Admissions.
- [ ] Placements.
- [ ] Gallery.
- [ ] Downloads/documents.
- [ ] Navigation/menu items.
- [ ] Site settings.
- [ ] SEO metadata.
- [ ] Admin users.
- [ ] Audit logs.

## Phase 6 - Connect Frontend To CMS

- [ ] Create database-backed repositories alongside current static repositories.
- [ ] Migrate homepage content first.
- [ ] Migrate navigation/footer.
- [ ] Migrate departments and programs while preserving current slugs.
- [ ] Migrate course pages using aliases for existing URLs.
- [ ] Add fallback behavior during migration where appropriate.

## Phase 7 - Media Management

- [ ] Choose production object storage provider.
- [ ] Add upload route with auth and validation.
- [ ] Store media metadata in PostgreSQL.
- [ ] Add image/document picker for admin forms.
- [ ] Replace unmanaged remote assets over time.

## Phase 8 - Forms And Submissions

- [ ] Replace simulated contact/career submissions with server route handlers.
- [ ] Move GUTS/CUET/Ph.D. API key to server environment.
- [ ] Store all submissions in PostgreSQL.
- [ ] Add admin submission inbox.
- [ ] Add spam/rate limiting.

## Phase 9 - SEO

- [ ] Add CMS-managed SEO metadata.
- [ ] Add database-backed sitemap.
- [ ] Add robots route.
- [ ] Add canonical metadata for aliases.
- [ ] Add structured data for organization, courses, breadcrumbs, events, and news.

## Phase 10 - Security And Testing

- [ ] Enforce RBAC in every server mutation.
- [ ] Add Zod schemas for all external input.
- [ ] Add upload MIME/size checks.
- [ ] Add audit logs for admin actions.
- [ ] Add unit tests for validators and permissions.
- [ ] Add integration tests for auth and protected routes.
- [ ] Fix existing lint baseline.
- [ ] Run production build and smoke test critical routes.

## Phase 11 - Production Readiness

- [ ] Configure production PostgreSQL.
- [ ] Configure storage credentials.
- [ ] Configure secret/session environment variables.
- [ ] Add backup and restore plan.
- [ ] Add monitoring/error logging.
- [ ] Prepare launch migration from static data to database content.
