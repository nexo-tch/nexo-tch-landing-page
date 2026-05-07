# Seguridad — Nexo Vending Landing

Este documento describe el modelo de seguridad de la landing y cómo reportar
vulnerabilidades. Si encontrás un problema de seguridad, **no abras un issue
público** — escríbenos directo a `contacto@nexotech.io`.

---

## Reporte de vulnerabilidades

- **Email**: `contacto@nexotech.io`
- **Tiempo de respuesta esperado**: 72 horas
- **Disclosure**: coordinada — pedimos no publicar hasta que el fix esté en producción

(Nota: idealmente este reporte debería ir a un alias dedicado tipo `security@nexotech.io`. Cuando crees el alias, actualizá esto.)

Datos útiles para el reporte:
- Descripción del impacto
- Pasos para reproducir
- Versión / commit afectado (si lo conocés)
- Tu nombre/handle si querés crédito en el changelog

---

## Modelo de seguridad

La landing es una aplicación Next.js servida desde Vercel con Cloudflare en
frente. La defensa se aplica en capas (defense in depth):

```
Cloudflare (WAF, DDoS, bots)
   ↓
Vercel Edge (HTTPS, edge protection)
   ↓
Next.js (security headers, server actions)
   ↓
Application logic (validation, rate limit, Turnstile, honeypot)
   ↓
Prospecting API (Railway) — segundo perímetro de auth
```

### Capas implementadas en este repo

| Capa | Implementación | Archivo(s) |
|---|---|---|
| HTTP security headers | HSTS, CSP estricto, COOP, X-Frame-Options, etc. | `next.config.ts` |
| Origin/Referer check | Allowlist de dominios para server actions | `src/lib/security/origin.ts` |
| Rate limiting | Upstash Redis con fallback in-memory | `src/lib/security/ratelimit.ts` |
| Bot protection | Cloudflare Turnstile (invisible) + honeypot | `src/lib/security/turnstile.ts`, `src/components/security/TurnstileWidget.tsx` |
| Input validation | Zod server-side estricto, redundante al client | `src/app/contacto/actions.ts` |
| Disposable email block | Allowlist de dominios desechables | `src/lib/security/disposable-emails.ts` |
| PII handling | Hash de IP, redacción en logs, sin PII en consola | `src/lib/security/prospecting-api.ts` |
| Habeas Data compliance | Política publicada + checkbox de consentimiento | `src/app/privacidad/page.tsx`, `src/components/ContactForm.tsx` |
| Secret scanning | gitleaks + workflow en CI | `.gitleaks.toml`, `.github/workflows/security.yml` |
| Dependency scanning | Dependabot + `pnpm audit` en CI | `.github/dependabot.yml`, `.github/workflows/security.yml` |

### Capas que se configuran fuera del código

Estas viven en panels externos y deben validarse al desplegar:

- **Cloudflare**: DNS proxy (nube naranja), Bot Fight Mode, DNSSEC, CAA records,
  WAF rules, Always Use HTTPS, Auto Minify
- **Vercel**: variables de entorno marcadas como Sensitive, 2FA en cuenta,
  Vercel Firewall (Pro plan), Audit logs (Pro plan)
- **DNS**: SPF/DKIM/DMARC para email outbound desde `@nexotech.io`
- **GitHub**: 2FA obligatorio, branch protection en `main`, requiere PR review

---

## Variables de entorno requeridas

Ver `.env.example` para la lista completa con explicaciones. Resumen ejecutivo:

| Variable | Crítica | Default si falta |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Sí | Usa `company.site.url` de `lib/company.ts` |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET_KEY` | Recomendado | Form acepta sin verificar bot |
| `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` | Recomendado | Rate limit en memoria (no confiable serverless) |
| `PROSPECTING_API_URL` + `PROSPECTING_API_KEY` | Sí, en prod | Leads se loggean pero no se persisten |
| `IP_HASH_SALT` | Sí, en prod | Usa salt default (todos los hashes serían iguales entre instalaciones) |

**En producción**, todas estas deben estar configuradas. El código degrada
gracefully en dev, pero emite warnings claros en logs cuando algo crítico falta
en producción.

---

## Checklist pre-deploy a producción

### Vercel

- [ ] Todas las env vars de `.env.example` configuradas en el proyecto
- [ ] Variables sensibles marcadas como **Sensitive** en la UI
- [ ] 2FA habilitado en la cuenta
- [ ] `NEXT_PUBLIC_SITE_URL` apunta al dominio final con HTTPS
- [ ] Project Settings → Git → habilitada la protección de branch `main`

### Cloudflare

- [ ] Dominio agregado y nameservers actualizados en el registrador
- [ ] DNS configurado: `A @ → 76.76.21.21`, `CNAME www → cname.vercel-dns.com` (proxied)
- [ ] DNSSEC activado
- [ ] CAA records: solo Let's Encrypt + Google CA
- [ ] Bot Fight Mode activado
- [ ] Always Use HTTPS activado
- [ ] Site agregado en Turnstile, keys configuradas en Vercel

### GitHub

- [ ] 2FA obligatorio para todos los colaboradores
- [ ] Branch protection en `main`: require PR + status checks
- [ ] Dependabot enabled (security + version updates)
- [ ] Workflows de `.github/workflows/` corren en cada PR

### Aplicación

- [ ] `pnpm build` corre sin errores ni warnings críticos
- [ ] `pnpm lint` corre sin errores
- [ ] Headers verificados en https://securityheaders.com (objetivo: A o A+)
- [ ] Test del form con honeypot lleno (debería responder éxito sin grabar)
- [ ] Test del form con email desechable (debería rechazar)
- [ ] Test del form con 4+ envíos rápidos (debería rate-limitear)
- [ ] Política de privacidad accesible desde footer
- [ ] Checkbox de consentimiento bloquea submit si no se marca

### Email del dominio

- [ ] SPF record con `_spf.resend.com` (o el provider que uses)
- [ ] DKIM key configurada en Cloudflare DNS
- [ ] DMARC record con `p=quarantine` (al menos)

### Compliance Colombia

- [ ] Política de privacidad publicada en `/privacidad`
- [ ] Datos de la empresa (NIT, razón social, contacto) actualizados en `lib/company.ts`
- [ ] Si superás 100k titulares: registro en RNBD ante SIC

---

## Operación en producción

### Rotación de secretos
- **Cada 90 días**: rotar `PROSPECTING_API_KEY`, `TURNSTILE_SECRET_KEY`, `UPSTASH_REDIS_REST_TOKEN`
- **Inmediatamente**: si un colaborador deja el equipo o si hay sospecha de compromiso

### Monitoreo
- Vercel Logs: revisar diario los primeros 30 días, después semanal
- Cloudflare Analytics: monitorear top countries, % de bots bloqueados
- Sentry (cuando se configure): alertas a Slack/email para errores 5xx

### Incident response
1. **Contener**: rotar secretos comprometidos, deshabilitar el endpoint si es necesario
2. **Investigar**: logs de Vercel + Cloudflare para entender alcance
3. **Notificar**: si hay PII de usuarios involucrada, notificar a SIC dentro de
   los plazos de la Ley 1581 de 2012
4. **Postmortem**: documentar en `/incidents/YYYY-MM-DD.md` (no commitear PII)

---

## Política de actualización

Esta política se revisa mínimo cada 6 meses, o ante cambios significativos de:
- Stack tecnológico
- Volumen de usuarios o datos manejados
- Marco legal aplicable

Última revisión: ver `git log -1 SECURITY.md`.
