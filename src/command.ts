export const SALEOR_COMMAND = process.env.SALEOR_CLI_PATH
  ? `${process.env.SALEOR_CLI_PATH}`
  : 'saleor'

export enum Command {
  Help = 'help',
  Info = 'info',
  Login = 'login',
  Logout = 'logout',
  Configure = 'configure',
  Trigger = 'trigger',
  Organization = 'organization',
  Environment = 'environment',
  Backup = 'backup',
  Job = 'job',
  Project = 'project',
  Storefront = 'storefront',
  Telemetry = 'telemetry',
  Webhook = 'webhook',
  App = 'app',
  Vercel = 'vercel',
  Github = 'github',
  Checkout = 'checkout',
}
