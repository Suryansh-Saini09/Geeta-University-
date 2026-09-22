import { z } from "zod";

const envSchema = z
  .object({
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    DATABASE_URL: z.string().min(1).optional(),
    ADMIN_SESSION_DAYS: z.coerce.number().int().positive().default(7),
    GEETA_LEAD_API_URL: z.string().url().optional(),
    GEETA_LEAD_API_KEY: z.string().optional(),
  })
  .superRefine((env, ctx) => {
    if (env.NODE_ENV === "production" && !env.DATABASE_URL) {
      ctx.addIssue({
        code: "custom",
        path: ["DATABASE_URL"],
        message: "DATABASE_URL is required in production.",
      });
    }
  });

export const env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL,
  ADMIN_SESSION_DAYS: process.env.ADMIN_SESSION_DAYS,
  GEETA_LEAD_API_URL: process.env.GEETA_LEAD_API_URL,
  GEETA_LEAD_API_KEY: process.env.GEETA_LEAD_API_KEY,
});
