import { z } from "zod";

const configSchema = z.object({
  VITE_BASE_URL: z.string(),
});

const configProject = configSchema.safeParse({
  VITE_BASE_URL: import.meta.env.VITE_BASE_URL,
});

if (!configProject.success) {
  console.error(configProject.error.errors);
  throw new Error("Environment variable reported invalid declaration");
}

const envConfig = configProject.data;

export default envConfig;
