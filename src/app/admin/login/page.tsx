import { LockKeyhole } from "lucide-react";

import { loginAction } from "@/features/admin/auth/actions";

const errorMessages: Record<string, string> = {
  "invalid-input": "Enter a valid email and password.",
  "invalid-credentials": "The email or password is incorrect.",
};

interface AdminLoginPageProps {
  searchParams: Promise<{
    error?: string;
  }>;
}

export default async function AdminLoginPage({
  searchParams,
}: AdminLoginPageProps) {
  const { error } = await searchParams;
  const message = error ? errorMessages[error] : null;

  return (
    <main className="min-h-screen bg-[#F7F9FC] px-4 py-10">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-md items-center">
        <div className="w-full rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70">
          <div className="mb-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A1F44] text-white">
              <LockKeyhole className="h-6 w-6" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8871A]">
              Staff access
            </p>
            <h1 className="mt-2 font-serif text-3xl font-bold text-[#0A1F44]">
              Sign in to CMS
            </h1>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Manage university pages, programs, media, submissions, and SEO
              from a protected dashboard.
            </p>
          </div>

          {message ? (
            <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              {message}
            </div>
          ) : null}

          <form action={loginAction} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-bold text-[#0A1F44]"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-[#E8871A] focus:bg-white focus:ring-4 focus:ring-[#E8871A]/15"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-bold text-[#0A1F44]"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                minLength={8}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-[#E8871A] focus:bg-white focus:ring-4 focus:ring-[#E8871A]/15"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#E8871A] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:bg-[#F5A623]"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
