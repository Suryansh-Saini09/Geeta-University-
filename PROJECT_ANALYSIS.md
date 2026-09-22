# Geeta University Website CMS Project Analysis

## Current Architecture

The project is a Next.js 16.2.6 application using the App Router under `src/app`. React 19.2.4 and TypeScript 5 are enabled, with `strict: true` in `tsconfig.json`; however `allowJs: true` is also enabled because the repository contains JavaScript utility scripts.

The public website is currently built mostly as a static frontend:

- Pages live in `src/app/**/page.tsx`.
- Shared and page-specific UI lives in `src/components`.
- Website content lives in TypeScript data files under `src/data`.
- Dynamic school/program pages are powered by `src/lib/programs/programRepository.ts`.
- Dynamic course pages are powered by `src/lib/programs/courseRepository.ts`.
- Dynamic GU Edge pages are powered by `src/lib/edge/edgeRepository.ts`.
- Media is mostly in `public/`, with some remote images from `geetauniversity.edu.in` and `images.unsplash.com`.
- Styling uses Tailwind CSS 4 through `@tailwindcss/postcss`, plus global CSS variables in `src/app/globals.css`.
- The brand system is centered around navy, gold, white, and slate neutrals, with `Source Sans 3` and `Zilla Slab`.

There is no database, no ORM, no internal API layer, no server-side authentication, and no admin panel yet.

## Routing

The project uses the App Router only. There is no `pages` directory.

Important route patterns:

- `/` homepage
- Static informational pages such as `/about`, `/contact-us`, `/placements`, `/campus-life`, `/faq`, `/library`, `/ugc`
- Dynamic school/program route: `/programs/[slug]`
- Dynamic course route: `/programs/[slug]/[courseSlug]`
- Dynamic edge route: `/edge/[slug]`
- Several feedback forms as top-level pages

Next.js 16 route handler and server function guidance applies. Route handlers belong in `src/app/api/**/route.ts`, and protected mutations must authenticate and authorize on the server.

## UI And Components

The site has many page-specific sections. There is a small `src/components/ui` folder, but most components are custom to their page. `Navbar.tsx` and `Footer.tsx` contain large hardcoded navigation/link data.

Reusable foundations that should remain:

- Existing public page visual design
- `gu-container` layout convention
- Brand colors in `globals.css`
- Program and course page component composition
- Existing route paths and slugs
- Existing public media paths

Areas that need refactoring over time:

- Large hardcoded components such as `Navbar.tsx`, `Footer.tsx`, and `src/app/programs/sp-bansal-school-of-business/page.tsx`
- Repeated form patterns
- Repeated card/list/FAQ/gallery primitives
- Static TypeScript content that should be editable by staff
- Client components used for pages that could be server components

## Existing Data And CMS Candidates

The following data should eventually move to the CMS:

- Homepage hero banners, stats, updates, testimonials, recruiters, awards, scholarships, and industry sections
- Navigation menus and footer links
- Static pages and page sections
- Schools/departments
- Courses/programs, eligibility, fee data, outcomes, careers, FAQs, brochures
- Faculty/staff profiles
- Notices, announcements, news, and events
- Admissions information, GUTS/CUET details, scholarship slabs
- Placements, recruiters, student success stories, placement drives
- Gallery albums and images
- Downloads/documents such as UGC PDFs, reports, handbooks, policies
- Contact, enquiry, career, and feedback submissions
- SEO metadata per page/content item
- Site settings such as phone, email, address, social links, admission URLs

## Forms And Integrations

Current form behavior is inconsistent:

- Some forms only simulate submission in client state.
- Some feedback forms post to Google Apps Script URLs.
- GUTS, CUET, and Ph.D. enquiry forms post directly from the browser to `https://geetauniversity.com/Rapi/form/insert`.
- A sensitive API key is hardcoded inside client-side components.
- City/state data is fetched client-side from a public GitHub JSON URL.

Production direction:

- Move all secrets into server-side environment variables.
- Submit public forms to internal route handlers or server actions.
- Validate all inputs with Zod.
- Store submissions in PostgreSQL.
- Optionally forward selected leads to external systems from the server.
- Add rate limiting and spam controls before launch.

## SEO

SEO is partially implemented:

- Root metadata exists in `src/app/layout.tsx`.
- Dynamic program/course/edge routes generate metadata from static data.
- Some static pages define metadata individually.

Missing or incomplete:

- Centralized SEO model
- Editable metadata
- Canonical strategy for alias routes
- Sitemap and robots route handlers
- Open Graph image consistency
- Structured data for courses, organization, breadcrumbs, events, and news

## Performance Observations

Main risks:

- Several pages are marked `"use client"` at the page level even when most content is static.
- Very large one-off pages and components increase bundle size.
- Some components use raw `<img>` instead of `next/image`.
- Heavy dependencies like `framer-motion` are used broadly.
- Remote images depend on external hosts.
- Large static data arrays are bundled into the app.

Migration should keep the public frontend intact while gradually moving content reads into server-side repositories.

## Security Observations

Current risks:

- No admin authentication or authorization.
- Hardcoded third-party API key in client components.
- No server-side validation layer for form submissions.
- File upload UI exists for career applications, but there is no production upload validation/storage flow.
- No audit logs.
- No CSRF/origin checks for custom API mutations yet.
- No environment variable schema.

Required security model:

- Server-side sessions in secure HTTP-only cookies.
- Password hashing with a slow hash.
- RBAC enforced in server utilities, route handlers, and server actions.
- Zod validation for external input.
- Prisma parameterized queries.
- File type and size validation.
- Audit logs for admin mutations.
- No secrets exposed to client bundles.

## Recommended Production Tech Stack

- **Next.js App Router**: Keep the existing framework and route structure.
- **TypeScript**: Already strict; continue using it for all CMS/backend code.
- **PostgreSQL**: Best fit for relational university content: departments, programs, faculty, events, media, roles, submissions, and audits.
- **Prisma ORM**: Best fit for this project because the team needs a readable schema, migrations, strong generated types, and fast onboarding. Drizzle is excellent, but Prisma is more approachable for a content-heavy CMS with many relational models.
- **Zod**: Runtime validation for login, forms, CMS mutations, uploads, and environment variables.
- **Custom credential auth with secure server sessions**: Keeps dependencies small and gives direct RBAC control. Sessions are stored in the database and referenced by an HTTP-only cookie.
- **Next.js route handlers and server actions**: Use route handlers for JSON/file APIs and server actions for admin form mutations.
- **Vercel-compatible object storage**: Use Vercel Blob, S3/R2, or another S3-compatible store for media. Store file metadata in PostgreSQL.
- **Tailwind CSS 4**: Continue existing styling approach.

## Database Design

Core entities:

- `AdminUser`: staff account, email, hashed password, role, status, last login.
- `AdminSession`: opaque session token hash, expiry, IP/user-agent metadata.
- `AuditLog`: admin action trail with actor, entity, action, before/after JSON.
- `MediaAsset`: uploaded images/documents with storage key, URL, MIME type, size, dimensions, alt text.
- `SeoMetadata`: reusable SEO records attached to pages and content.
- `Page`: public page record with slug, title, template, status, ordered JSON sections.
- `PageRevision`: page version history.
- `Department`: school/department content.
- `Program`: course/program content related to a department.
- `ProgramAlias`: legacy/canonical slug support.
- `FacultyMember`: staff profile related to departments/programs.
- `Notice`, `NewsArticle`, `Event`: time-based publishable content.
- `AdmissionCycle`: admission-year information, deadlines, CTAs, eligibility notes.
- `PlacementRecord`: placement stats, recruiters, student stories, drives.
- `GalleryAlbum` and `GalleryImage`: managed media galleries.
- `HeroBanner`: reusable banners for homepage and landing pages.
- `Download`: documents/policies/brochures.
- `ContactSubmission`: enquiries, feedback, career applications, and form submissions.
- `NavigationMenu` and `NavigationItem`: header/footer/menu management.
- `SiteSetting`: global key-value settings.

Relationships:

- Departments have many programs and faculty.
- Programs belong to departments and can have many faculty.
- Media assets can be referenced by banners, pages, faculty, gallery images, downloads, news, and events.
- SEO metadata can be attached to pages and publishable content.
- Admin users own created/updated/published/audited records.
- Navigation items support parent-child nesting.

Status and publishing:

- Pages, departments, programs, notices, news, events, admissions, placements, gallery albums, banners, downloads, and navigation items should support draft/published/archived.
- Use `publishedAt`, `createdAt`, `updatedAt`, `createdById`, `updatedById`.
- Use `sortOrder` for manually ordered content.
- Use unique slugs per content type, with aliases for legacy URLs.

## Admin Panel Design

Routes:

- `/admin/login`
- `/admin`
- `/admin/pages`
- `/admin/departments`
- `/admin/programs`
- `/admin/faculty`
- `/admin/notices`
- `/admin/news`
- `/admin/events`
- `/admin/admissions`
- `/admin/placements`
- `/admin/gallery`
- `/admin/media`
- `/admin/downloads`
- `/admin/submissions`
- `/admin/navigation`
- `/admin/seo`
- `/admin/settings`
- `/admin/users`
- `/admin/audit-logs`

UI shell:

- Sidebar with grouped modules
- Header with current user, role, logout
- Dashboard cards for content counts and recent submissions
- Tables with search, filters, pagination, status chips, and row actions
- Create/edit forms with Zod validation
- Delete confirmation dialogs
- Upload controls with size/type restrictions
- Loading, empty, and error states
- Toast notifications for mutations

Roles:

- **Super Admin**: full access, users, settings, destructive actions.
- **Admin**: manage content, media, submissions, navigation, SEO.
- **Editor**: create/edit drafts and submit for publishing; limited delete/settings/user access.

Permissions must be checked on the server, never only by hiding UI controls.

## Recommended Project Structure

Adapt the existing structure instead of replacing it:

```text
src/
  app/
    admin/
      login/
      (secure)/
    api/
  components/
    admin/
    layout/
    ui/
  features/
    admin/
    cms/
    submissions/
  lib/
    programs/
    edge/
    env.ts
  server/
    auth/
    db/
    services/
    storage/
  types/
  validations/
prisma/
  schema.prisma
```

## Migration Strategy

1. Add Prisma, PostgreSQL schema, auth/session foundation, and admin route protection.
2. Build admin shell and dashboard.
3. Move form submissions server-side first because they have the biggest security risk.
4. Add media storage and downloads management.
5. Move navigation/footer data into CMS.
6. Move homepage sections into CMS.
7. Move departments and programs into CMS using the existing repositories as adapters.
8. Move news/events/notices/gallery/admissions/placements.
9. Add SEO/sitemap/robots generation from database.
10. Harden security, add tests, seed production baseline content, and prepare deployment.

## Current Baseline Issues

`npm run lint` currently fails before CMS work. Major categories:

- CommonJS `require()` errors in repository scripts.
- Existing unescaped JSX text lint errors.
- Existing `any` types in data/UI files.
- Existing React hook lint issues.
- Many unused imports.
- Several `<img>` performance warnings.

These should be handled in a separate cleanup milestone so the CMS foundation stays scoped.
