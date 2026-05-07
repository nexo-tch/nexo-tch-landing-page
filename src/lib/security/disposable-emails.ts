/**
 * Lista compacta de dominios de email desechables / temporales.
 * Curada manualmente con los proveedores más usados en bots de spam.
 *
 * Fuentes para mantener:
 * - https://github.com/disposable-email-domains/disposable-email-domains
 * - https://github.com/ivolo/disposable-email-domains
 *
 * Se mantiene corta a propósito: mejor ser permisivos y limpiar en CRM
 * que rechazar leads legítimos por una lista enorme.
 */
const DISPOSABLE_DOMAINS = new Set<string>([
  "10minutemail.com",
  "10minutemail.net",
  "guerrillamail.com",
  "guerrillamail.net",
  "guerrillamail.org",
  "mailinator.com",
  "mailinator.net",
  "mailinator2.com",
  "trbvm.com",
  "yopmail.com",
  "yopmail.net",
  "yopmail.fr",
  "tempmail.com",
  "temp-mail.org",
  "throwawaymail.com",
  "fakeinbox.com",
  "trashmail.com",
  "trashmail.net",
  "sharklasers.com",
  "spam4.me",
  "getairmail.com",
  "maildrop.cc",
  "moakt.com",
  "mintemail.com",
  "tempr.email",
  "discard.email",
  "discardmail.com",
  "dispostable.com",
  "mailnesia.com",
  "mvrht.com",
  "tempinbox.com",
  "tempmailaddress.com",
  "fakemail.fr",
  "wegwerfmail.de",
  "wegwerfmail.net",
  "wegwerfmail.org",
  "spambog.com",
  "spambog.de",
  "spambog.ru",
  "tempemail.net",
  "tempemail.com",
  "tempmailo.com",
  "emailondeck.com",
  "harakirimail.com",
  "anonbox.net",
  "deadaddress.com",
  "spamfree24.org",
  "spamgourmet.com",
  "tempmail.de",
  "tempmail.net",
  "fakemailgenerator.com",
  "instantemail.com",
  "throwam.com",
  "0wnd.net",
  "0wnd.org",
  "1secmail.com",
  "1secmail.net",
  "1secmail.org",
]);

/**
 * Devuelve true si el dominio del email es desechable conocido.
 * Comparación case-insensitive sobre el dominio.
 */
export function isDisposableEmail(email: string): boolean {
  const at = email.lastIndexOf("@");
  if (at === -1) return false;
  const domain = email.slice(at + 1).toLowerCase().trim();
  return DISPOSABLE_DOMAINS.has(domain);
}

/**
 * Lista de dominios de proveedores de email personal (gmail, hotmail, etc.).
 * No los bloqueamos por defecto, pero la exponemos por si el negocio
 * decide más adelante exigir email corporativo.
 */
const FREE_PROVIDER_DOMAINS = new Set<string>([
  "gmail.com",
  "googlemail.com",
  "hotmail.com",
  "hotmail.es",
  "outlook.com",
  "outlook.es",
  "live.com",
  "yahoo.com",
  "yahoo.es",
  "icloud.com",
  "me.com",
  "aol.com",
  "protonmail.com",
  "proton.me",
  "mail.com",
  "zoho.com",
  "gmx.com",
  "gmx.net",
]);

export function isFreeProviderEmail(email: string): boolean {
  const at = email.lastIndexOf("@");
  if (at === -1) return false;
  const domain = email.slice(at + 1).toLowerCase().trim();
  return FREE_PROVIDER_DOMAINS.has(domain);
}
