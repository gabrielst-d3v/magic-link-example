import { z } from 'zod'

const envSchema = z.object({
  USER_EMAIL: z.string().min(1),
  MAIL_USER: z.string().min(1),
  MAIL_PASS: z.string().min(1),
})

export const env = envSchema.parse(process.env)
