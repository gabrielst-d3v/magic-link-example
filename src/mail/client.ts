import nodemailer from 'nodemailer'
import { env } from '../env/env'

export const mail = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: env.MAIL_USER,
    pass: env.MAIL_PASS
  }
})