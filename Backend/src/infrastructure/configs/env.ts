import {z} from "zod"
import * as dotenv from "dotenv"


dotenv.config();

const envSchema = z.object({
    PORT : z.string().transform(Number).default(5000),
    DB_URI : z.string().url(),
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
})

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("❌ Invalid environment variables:", parsed.error.format());
  throw new Error("Invalid environment variables");
}


export const env = parsed.data;