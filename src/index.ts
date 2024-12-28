import ReactDOMServer from 'react-dom/server'
import { AuthenticationMagicLinkTemplate } from './mail/template/authentication-magic-link'
import { mail } from './mail/client'
import { env } from './env/env'

const userEmail = env.USER_EMAIL
const authLink = 'https://fala.dev.test/login'

const htmlContent = ReactDOMServer.renderToStaticMarkup(
  AuthenticationMagicLinkTemplate({
    userEmail,
    authLink: authLink,
  })
)

mail.sendMail({
  from: 'Pizza Shop <naoresponda@fala.dev>',
  to: userEmail,
  subject: '[Pizza Shop] Link para login',
  html: htmlContent,
})