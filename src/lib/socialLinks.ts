export interface SocialLink {
  id: number;
  name: string;
  type: string;
  url: string;
  icon: string;
  description: string;
  target?: string;
  enabled: boolean;
  sortOrder: number;
}

export interface SocialProfile {
  name: string;
  shortName?: string;
  location?: string;
  tagline?: string;
  pageTitle?: string;
  description?: string;
  heroImage?: string;
  logo?: string;
  phone?: string;
  enabled?: boolean;
}

export interface SocialApiResponse {
  success: boolean;
  data?: {
    profile?: SocialProfile;
    links?: SocialLink[];
  };
  error?: string;
}

export const SOCIAL_API_URL = process.env.NEXT_PUBLIC_SOCIAL_API_URL || "";

export async function fetchSocialData(): Promise<SocialApiResponse> {
  if (!SOCIAL_API_URL) {
    return {
      success: false,
      error: "NEXT_PUBLIC_SOCIAL_API_URL environment variable is not defined",
    };
  }

  try {
    const response = await fetch(SOCIAL_API_URL, {
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        success: false,
        error: `API error: ${response.status} ${response.statusText}`,
      };
    }

    const json: SocialApiResponse = await response.json();

    if (!json.success || !json.data) {
      return {
        success: false,
        error: json.error || "Invalid API response format",
      };
    }

    return json;
  } catch (err) {
    console.error("Error fetching social data:", err);
    return {
      success: false,
      error: "Unable to load social links from API",
    };
  }
}

export async function getSocialLinks(): Promise<SocialLink[]> {
  const json = await fetchSocialData();
  if (json.success && Array.isArray(json.data?.links)) {
    return json.data.links
      .filter((link) => link.enabled)
      .sort((a, b) => a.sortOrder - b.sortOrder);
  }
  return [];
}

