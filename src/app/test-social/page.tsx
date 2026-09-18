import Image from "next/image";
import { fetchSocialData, SocialLink, SocialProfile } from "@/lib/socialLinks";
import {
  ArrowUpRight,
  Globe,
  Star,
  Compass,
  GraduationCap,
  MessageCircle,
  Radio,
  ExternalLink,
} from "lucide-react";

// Platform Icon Badge Component with subtle brand accent background
function PlatformIcon({ iconKey, name }: { iconKey: string; name: string }) {
  const key = (iconKey || name).toLowerCase();

  if (key.includes("whatsapp") && key.includes("channel")) {
    return (
      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
        <Radio className="w-5 h-5" />
      </div>
    );
  }

  if (key.includes("whatsapp")) {
    return (
      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-all">
        <MessageCircle className="w-5 h-5" />
      </div>
    );
  }

  if (key.includes("instagram")) {
    return (
      <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center shrink-0 group-hover:bg-gradient-to-tr group-hover:from-amber-500 group-hover:via-rose-500 group-hover:to-purple-600 group-hover:text-white transition-all">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </div>
    );
  }

  if (key.includes("facebook")) {
    return (
      <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-[#1877F2] group-hover:text-white transition-all">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </div>
    );
  }

  if (key.includes("youtube")) {
    return (
      <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-600 flex items-center justify-center shrink-0 group-hover:bg-[#FF0000] group-hover:text-white transition-all">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      </div>
    );
  }

  if (key.includes("linkedin")) {
    return (
      <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-[#0A66C2] group-hover:text-white transition-all">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </div>
    );
  }

  if (key.includes("google")) {
    return (
      <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-all">
        <Star className="w-5 h-5" />
      </div>
    );
  }

  if (key.includes("twitter") || key.includes("x")) {
    return (
      <div className="w-10 h-10 rounded-xl bg-slate-900/10 text-slate-900 flex items-center justify-center shrink-0 group-hover:bg-slate-950 group-hover:text-white transition-all">
        <span className="font-extrabold text-base leading-none">𝕏</span>
      </div>
    );
  }

  if (key.includes("pinterest")) {
    return (
      <div className="w-10 h-10 rounded-xl bg-rose-600/10 text-rose-600 flex items-center justify-center shrink-0 group-hover:bg-[#E60023] group-hover:text-white transition-all">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026z" />
        </svg>
      </div>
    );
  }

  if (key.includes("portal") || key.includes("admission")) {
    return (
      <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-all">
        <GraduationCap className="w-5 h-5" />
      </div>
    );
  }

  if (key.includes("tour")) {
    return (
      <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-all">
        <Compass className="w-5 h-5" />
      </div>
    );
  }

  return (
    <div className="w-10 h-10 rounded-xl bg-blue-900/10 text-blue-900 flex items-center justify-center shrink-0 group-hover:bg-[#0A1F44] group-hover:text-white transition-all">
      <Globe className="w-5 h-5" />
    </div>
  );
}

export default async function TestSocialPage() {
  let profile: SocialProfile | null = null;
  let links: SocialLink[] = [];
  let errorMsg: string | null = null;

  try {
    const json = await fetchSocialData();
    if (json.success && json.data) {
      profile = json.data.profile || null;
      if (Array.isArray(json.data.links)) {
        links = json.data.links
          .filter((link) => link.enabled)
          .sort((a, b) => a.sortOrder - b.sortOrder);
      }
    } else {
      errorMsg = json.error || "Unable to load social links from API.";
    }
  } catch (err) {
    console.error("Error loading social links page:", err);
    errorMsg = "Unable to connect to the social links API.";
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-12 sm:py-16 px-4 font-sans">
      <div className="max-w-xl mx-auto space-y-8">
        {/* Header Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white p-3 shadow-md border border-slate-200/80 mb-2">
            <Image
              src={profile?.logo || "/GU-Logo.webp"}
              alt={profile?.name || "Geeta University"}
              width={64}
              height={64}
              className="object-contain"
            />
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A1F44] tracking-tight">
            {profile?.name || "Geeta University"}
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-md mx-auto">
            {profile?.tagline || profile?.description || "Official Social Channels & Digital Media Portals"}
          </p>
        </div>

        {/* Error / API Notice Alert */}
        {errorMsg && (
          <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-sm text-center font-medium space-y-1 shadow-xs">
            <p className="font-bold">{errorMsg}</p>
            <p className="text-xs text-amber-600">
              Please ensure <code className="bg-amber-100 px-1.5 py-0.5 rounded font-mono text-[11px]">NEXT_PUBLIC_SOCIAL_API_URL</code> is defined in your environment file.
            </p>
          </div>
        )}

        {/* Links Showcase List */}
        {!errorMsg && links.length === 0 && (
          <div className="p-8 rounded-2xl bg-white border border-slate-200/80 text-center text-slate-500 text-sm shadow-xs">
            No active social links are currently available from the API.
          </div>
        )}

        {!errorMsg && links.length > 0 && (
          <div className="space-y-3">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target={link.target || "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 bg-white border border-slate-200/80 rounded-2xl shadow-xs hover:shadow-md hover:border-[#E8871A]/40 transition-all duration-200"
              >
                <div className="flex items-center gap-3.5 min-w-0 pr-3">
                  <PlatformIcon iconKey={link.icon} name={link.name} />
                  <div className="min-w-0 space-y-0.5">
                    <h2 className="text-sm sm:text-base font-bold text-[#0A1F44] group-hover:text-[#E8871A] transition-colors truncate">
                      {link.name}
                    </h2>
                    <p className="text-xs text-slate-500 truncate font-mono text-[11px] opacity-80">
                      {link.url}
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-xl bg-slate-100 group-hover:bg-[#E8871A] text-slate-400 group-hover:text-white flex items-center justify-center shrink-0 transition-all">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Sleek Minimal Footer */}
        <footer className="text-center pt-8 border-t border-slate-200/80">
          <p className="text-xs text-slate-400 font-medium">
            © {new Date().getFullYear()} Geeta University • Official Social Directory
          </p>
        </footer>
      </div>
    </main>
  );
}

