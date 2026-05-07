"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Wrench,
  Shield,
  CreditCard,
  Coffee,
  Dumbbell,
  Cookie,
  AlertCircle,
} from "lucide-react";
import { company, whatsappUrl, mailtoUrl } from "@/lib/company";
import { submitLead } from "@/app/contacto/actions";
import { TurnstileWidget } from "@/components/security/TurnstileWidget";

const contactSchema = z.object({
  empresa: z.string().min(2, "Ingresa el nombre de tu empresa").max(120),
  email: z.string().email("Ingresa un correo electrónico válido").max(160),
  productos: z.array(z.string()).min(1, "Selecciona al menos un producto"),
  nombre: z.string().max(120).optional().or(z.literal("")),
  empleados: z.string().max(20).optional().or(z.literal("")),
  tipoEspacio: z.string().max(40).optional().or(z.literal("")),
  ciudad: z.string().max(60).optional().or(z.literal("")),
  telefono: z.string().max(30).optional().or(z.literal("")),
  mensaje: z.string().max(2000).optional().or(z.literal("")),
  consentimiento: z.literal(true, {
    message: "Debes aceptar la política de tratamiento de datos",
  }),
  // Honeypot anti-bot: si trae valor, descartamos silenciosamente.
  website: z.string().max(0).optional().or(z.literal("")),
});

type ContactFormData = z.infer<typeof contactSchema>;

const productos = [
  { value: "cafe", label: "Nexo Café", icon: Coffee },
  { value: "protein", label: "Nexo Protein", icon: Dumbbell },
  { value: "snacks", label: "Nexo Snacks", icon: Cookie },
];

const trustSignals = [
  { icon: Clock, text: "Respuesta en menos de 24 horas" },
  { icon: CreditCard, text: "Sin costo de instalación" },
  { icon: Wrench, text: "Operación incluida 24/7" },
  { icon: Shield, text: "Modelo comercial flexible" },
];

const inputBase =
  "w-full h-12 rounded-lg border border-border-soft bg-bg-elevated px-4 text-base text-fg placeholder:text-fg-subtle transition-[border-color,box-shadow] duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

const textareaBase = inputBase.replace("h-12 ", "min-h-[120px] py-3 ");
const selectBase = inputBase + " appearance-none";

// Site key del widget de Cloudflare Turnstile (cliente).
// Si no está configurado, el widget no se renderiza y el server action
// corre en modo permissive (gated por TURNSTILE_SECRET_KEY del lado server).
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

export function ContactForm() {
  const [showOptional, setShowOptional] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const wa = whatsappUrl("Hola, me interesa una máquina Nexo");
  const waDisplay = company.contact.whatsapp.display;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      productos: ["cafe"],
      ciudad: company.city,
      consentimiento: false as unknown as true,
      website: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);

    // Anti-bot: honeypot lleno → descartamos sin avisar al bot.
    // Esta verificación también corre server-side; este es un fast-path.
    if (data.website) {
      setSubmitted(true);
      return;
    }

    // Construimos el FormData que espera el server action.
    // Nunca exponemos PII en consola; el server lo loggea con redacción.
    const fd = new FormData();
    fd.set("empresa", data.empresa);
    fd.set("email", data.email);
    for (const p of data.productos) fd.append("productos", p);
    if (data.nombre) fd.set("nombre", data.nombre);
    if (data.empleados) fd.set("empleados", data.empleados);
    if (data.tipoEspacio) fd.set("tipoEspacio", data.tipoEspacio);
    if (data.ciudad) fd.set("ciudad", data.ciudad);
    if (data.telefono) fd.set("telefono", data.telefono);
    if (data.mensaje) fd.set("mensaje", data.mensaje);
    fd.set("consentimiento", data.consentimiento ? "true" : "");
    fd.set("website", data.website ?? "");
    if (turnstileToken) fd.set("turnstileToken", turnstileToken);

    const result = await submitLead(fd);

    if (result.ok) {
      setSubmitted(true);
      return;
    }

    // Mensajes amigables por tipo de error. Nunca exponemos detalle técnico.
    const errorMessages: Record<typeof result.error, string> = {
      invalid_origin: "Origen no autorizado. Recargá la página e intentá de nuevo.",
      rate_limited:
        result.retryAfterSeconds && result.retryAfterSeconds > 60
          ? `Demasiados intentos. Intentá de nuevo en ${Math.ceil(result.retryAfterSeconds / 60)} min.`
          : "Demasiados intentos. Intentá de nuevo en unos segundos.",
      validation_failed:
        "Algunos datos no son válidos. Revisá los campos marcados.",
      bot_detected: "No pudimos verificar tu solicitud. Recargá la página.",
      turnstile_failed:
        "Verificación de seguridad fallida. Recargá la página e intentá de nuevo.",
      db_failed:
        "Tuvimos un problema procesando tu solicitud. Probá por WhatsApp si es urgente.",
    };

    setSubmitError(errorMessages[result.error] ?? result.message);
  };

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      {/* Form Column */}
      <div className="lg:col-span-7">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="flex flex-col items-start border-y border-border py-16"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.15,
                  type: "spring",
                  stiffness: 200,
                  damping: 18,
                }}
              >
                <CheckCircle2
                  className="h-12 w-12 text-accent"
                  strokeWidth={1.5}
                />
              </motion.div>
              <h3 className="display-md mt-8 text-fg">
                Recibimos tu solicitud.
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-fg-muted">
                Nuestro equipo revisará tu información y te contactará en menos
                de 24 horas para coordinar la instalación.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit(onSubmit)}
              className="relative space-y-7"
              noValidate
            >
              {/* Empresa */}
              <div>
                <label
                  htmlFor="empresa"
                  className="mb-2 block font-mono text-xs uppercase tracking-wider text-fg-muted"
                >
                  Nombre de la empresa <span className="text-accent">*</span>
                </label>
                <input
                  id="empresa"
                  type="text"
                  autoComplete="organization"
                  className={`${inputBase} ${
                    errors.empresa
                      ? "border-danger/60 focus:border-danger focus:ring-danger/20"
                      : ""
                  }`}
                  placeholder="Tu empresa"
                  {...register("empresa")}
                />
                {errors.empresa && (
                  <p className="mt-2 text-sm text-danger">
                    {errors.empresa.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-mono text-xs uppercase tracking-wider text-fg-muted"
                >
                  Correo corporativo <span className="text-accent">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className={`${inputBase} ${
                    errors.email
                      ? "border-danger/60 focus:border-danger focus:ring-danger/20"
                      : ""
                  }`}
                  placeholder="correo@empresa.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-danger">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Productos */}
              <fieldset>
                <legend className="mb-3 block font-mono text-xs uppercase tracking-wider text-fg-muted">
                  Productos de interés <span className="text-accent">*</span>
                </legend>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {productos.map((prod) => (
                    <label
                      key={prod.value}
                      className="cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value={prod.value}
                        className="peer sr-only"
                        {...register("productos")}
                      />
                      <span className="flex h-12 items-center justify-center gap-2 rounded-lg border border-border-soft bg-bg-elevated px-4 text-sm font-medium text-fg-muted transition-[color,border-color,background-color] duration-200 hover:border-border peer-checked:border-accent/50 peer-checked:bg-accent/10 peer-checked:text-accent peer-focus-visible:ring-2 peer-focus-visible:ring-accent/30">
                        <prod.icon className="h-4 w-4" strokeWidth={1.75} />
                        {prod.label}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.productos && (
                  <p className="mt-2 text-sm text-danger">
                    {errors.productos.message}
                  </p>
                )}
              </fieldset>

              {/* Optional toggle */}
              <button
                type="button"
                onClick={() => setShowOptional(!showOptional)}
                className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent tactile"
              >
                Cuéntanos más (opcional)
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    showOptional ? "rotate-180" : ""
                  }`}
                  strokeWidth={1.75}
                />
              </button>

              {/* Optional Fields */}
              <AnimatePresence>
                {showOptional && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    className="space-y-7 overflow-hidden"
                  >
                    <div>
                      <label
                        htmlFor="nombre"
                        className="mb-2 block font-mono text-xs uppercase tracking-wider text-fg-muted"
                      >
                        Nombre del contacto
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        autoComplete="name"
                        className={inputBase}
                        placeholder="Tu nombre"
                        {...register("nombre")}
                      />
                    </div>

                    <div className="grid gap-7 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="empleados"
                          className="mb-2 block font-mono text-xs uppercase tracking-wider text-fg-muted"
                        >
                          Número de empleados
                        </label>
                        <div className="relative">
                          <select
                            id="empleados"
                            className={selectBase}
                            {...register("empleados")}
                          >
                            <option value="">Selecciona un rango</option>
                            <option value="1-20">1 – 20</option>
                            <option value="21-50">21 – 50</option>
                            <option value="51-100">51 – 100</option>
                            <option value="100+">100+</option>
                          </select>
                          <ChevronDown
                            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-fg-muted"
                            strokeWidth={1.75}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="tipoEspacio"
                          className="mb-2 block font-mono text-xs uppercase tracking-wider text-fg-muted"
                        >
                          Tipo de espacio
                        </label>
                        <div className="relative">
                          <select
                            id="tipoEspacio"
                            className={selectBase}
                            {...register("tipoEspacio")}
                          >
                            <option value="">Selecciona un tipo</option>
                            <option value="oficina">Oficina</option>
                            <option value="coworking">Coworking</option>
                            <option value="gimnasio">Gimnasio</option>
                            <option value="universidad">Universidad</option>
                            <option value="otro">Otro</option>
                          </select>
                          <ChevronDown
                            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-fg-muted"
                            strokeWidth={1.75}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-7 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="ciudad"
                          className="mb-2 block font-mono text-xs uppercase tracking-wider text-fg-muted"
                        >
                          Ciudad
                        </label>
                        <input
                          id="ciudad"
                          type="text"
                          autoComplete="address-level2"
                          className={inputBase}
                          placeholder="Medellín"
                          {...register("ciudad")}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="telefono"
                          className="mb-2 block font-mono text-xs uppercase tracking-wider text-fg-muted"
                        >
                          Teléfono / WhatsApp
                        </label>
                        <input
                          id="telefono"
                          type="tel"
                          autoComplete="tel"
                          className={inputBase}
                          placeholder="+57 300 000 0000"
                          {...register("telefono")}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="mensaje"
                        className="mb-2 block font-mono text-xs uppercase tracking-wider text-fg-muted"
                      >
                        Mensaje adicional
                      </label>
                      <textarea
                        id="mensaje"
                        rows={4}
                        className={`${textareaBase} resize-none`}
                        placeholder="¿Algo más que quieras contarnos?"
                        {...register("mensaje")}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Honeypot anti-bot — invisible para humanos, irresistible para bots */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden opacity-0"
              >
                <label htmlFor="website">No llenar este campo</label>
                <input
                  id="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register("website")}
                />
              </div>

              {/* Consentimiento Habeas Data (Ley 1581 de 2012) */}
              <div>
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    className="peer mt-1 h-4 w-4 shrink-0 cursor-pointer appearance-none rounded border border-border bg-bg-elevated transition-colors duration-150 checked:border-accent checked:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
                    {...register("consentimiento")}
                  />
                  <span className="text-sm leading-relaxed text-fg-muted peer-checked:text-fg">
                    Autorizo a {company.legalName} a tratar mis datos para
                    contactarme con información comercial sobre Nexo. Conozco la{" "}
                    <Link
                      href="/privacidad"
                      className="text-accent underline-offset-2 hover:underline"
                    >
                      política de privacidad y tratamiento de datos
                    </Link>
                    .
                  </span>
                </label>
                {errors.consentimiento && (
                  <p className="mt-2 text-sm text-danger">
                    {errors.consentimiento.message}
                  </p>
                )}
              </div>

              {/* Cloudflare Turnstile (invisible) — gated por env var */}
              {TURNSTILE_SITE_KEY && (
                <TurnstileWidget
                  siteKey={TURNSTILE_SITE_KEY}
                  onToken={setTurnstileToken}
                  action="contact_form"
                />
              )}

              {/* Banner de error server-side */}
              <AnimatePresence>
                {submitError && (
                  <motion.div
                    role="alert"
                    aria-live="polite"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-3 rounded-lg border border-danger/40 bg-danger/5 px-4 py-3 text-sm text-danger"
                  >
                    <AlertCircle
                      className="mt-0.5 h-4 w-4 shrink-0"
                      strokeWidth={1.75}
                    />
                    <span>{submitError}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-accent px-7 text-base font-medium text-bg transition-[background-color,transform,box-shadow] duration-200 hover:bg-accent-bright tactile disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-bg/30 border-t-bg" />
                    Enviando…
                  </span>
                ) : (
                  "Quiero mi máquina"
                )}
              </button>

              <p className="text-center font-mono text-xs uppercase tracking-wider text-fg-subtle">
                Sin costo de instalación · Sin compromiso a largo plazo
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      {/* Info Column */}
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-32 lg:space-y-12">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
              ¿Prefieres hablar directamente?
            </h3>

            <ul className="mt-6 divide-y divide-border-soft border-y border-border-soft">
              {wa && waDisplay && (
                <li>
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 py-5 transition-colors duration-200 hover:text-fg"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border-soft text-fg-muted transition-colors duration-200 group-hover:border-accent/30 group-hover:text-accent">
                      <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-fg">WhatsApp</p>
                      <p className="text-sm text-fg-muted">{waDisplay}</p>
                    </div>
                  </a>
                </li>
              )}
              <li>
                <a
                  href={mailtoUrl()}
                  className="group flex items-center gap-4 py-5 transition-colors duration-200 hover:text-fg"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border-soft text-fg-muted transition-colors duration-200 group-hover:border-accent/30 group-hover:text-accent">
                    <Mail className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-fg">Email</p>
                    <p className="text-sm text-fg-muted">
                      {company.contact.email}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-4 py-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border-soft text-fg-muted">
                    <MapPin className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-fg">Ubicación</p>
                    <p className="text-sm text-fg-muted">
                      {company.city}, {company.country}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Trust signals */}
          <div className="mt-12 lg:mt-0">
            <h4 className="font-mono text-xs uppercase tracking-wider text-accent">
              Garantías Nexo
            </h4>
            <ul className="mt-6 divide-y divide-border-soft border-y border-border-soft">
              {trustSignals.map((signal, i) => (
                <li
                  key={signal.text}
                  className="flex items-baseline gap-4 py-4"
                >
                  <span className="font-mono text-xs text-accent">
                    0{i + 1}
                  </span>
                  <span className="text-sm text-fg-muted">{signal.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
