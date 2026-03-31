"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
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
} from "lucide-react";

const contactSchema = z.object({
  empresa: z.string().min(2, "Ingresa el nombre de tu empresa"),
  email: z.string().email("Ingresa un correo electrónico válido"),
  productos: z.array(z.string()).min(1, "Selecciona al menos un producto"),
  nombre: z.string().optional(),
  empleados: z.string().optional(),
  tipoEspacio: z.string().optional(),
  ciudad: z.string().optional(),
  telefono: z.string().optional(),
  mensaje: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const productos = [
  { value: "cafe", label: "Nexo Café", emoji: "☕" },
  { value: "protein", label: "Nexo Protein", emoji: "💪" },
  { value: "snacks", label: "Nexo Snacks", emoji: "🍪" },
];

const trustSignals = [
  { icon: Clock, text: "Instalación en 48 horas" },
  { icon: CreditCard, text: "Sin costo de instalación" },
  { icon: Wrench, text: "Mantenimiento incluido 24/7" },
  { icon: Shield, text: "Sin contrato a largo plazo" },
];

const inputBase =
  "w-full rounded-xl border border-white/10 bg-nexo-gray-dark px-4 py-3 text-base text-nexo-white placeholder:text-nexo-gray/40 transition-all duration-300 focus:border-nexo-teal focus:ring-1 focus:ring-nexo-teal focus:outline-none";

export function ContactForm() {
  const [showOptional, setShowOptional] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      productos: ["cafe"],
      ciudad: "Medellín",
    },
    mode: "onBlur",
  });

  const onSubmit = async (_data: ContactFormData) => {
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
  };

  return (
    <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
      {/* Form Column */}
      <div className="lg:col-span-3">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center rounded-2xl border border-nexo-teal/20 bg-nexo-gray-dark p-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <CheckCircle2 className="h-16 w-16 text-nexo-teal" />
              </motion.div>
              <h3 className="mt-6 font-display text-2xl font-bold text-nexo-white">
                ¡Gracias! Te contactamos pronto.
              </h3>
              <p className="mt-3 max-w-sm text-nexo-gray">
                Nuestro equipo revisará tu solicitud y te escribirá en menos de
                24 horas.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              noValidate
            >
              {/* Empresa */}
              <div>
                <label
                  htmlFor="empresa"
                  className="mb-2 block text-sm font-medium text-nexo-gray"
                >
                  Nombre de la empresa <span className="text-nexo-teal">*</span>
                </label>
                <input
                  id="empresa"
                  type="text"
                  autoComplete="organization"
                  className={`${inputBase} ${errors.empresa ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/50" : ""}`}
                  placeholder="Tu empresa"
                  {...register("empresa")}
                />
                {errors.empresa && (
                  <p className="mt-1.5 text-sm text-red-400">
                    {errors.empresa.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-nexo-gray"
                >
                  Correo electrónico <span className="text-nexo-teal">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className={`${inputBase} ${errors.email ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/50" : ""}`}
                  placeholder="correo@empresa.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1.5 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Productos */}
              <fieldset>
                <legend className="mb-3 block text-sm font-medium text-nexo-gray">
                  Productos de interés <span className="text-nexo-teal">*</span>
                </legend>
                <div className="flex flex-wrap gap-3">
                  {productos.map((prod) => (
                    <label key={prod.value} className="cursor-pointer">
                      <input
                        type="checkbox"
                        value={prod.value}
                        className="peer sr-only"
                        {...register("productos")}
                      />
                      <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-nexo-gray-dark px-4 py-2.5 text-sm font-medium text-nexo-gray transition-all duration-300 peer-checked:border-nexo-teal/50 peer-checked:bg-nexo-teal/10 peer-checked:text-nexo-teal hover:border-white/20">
                        <span>{prod.emoji}</span>
                        {prod.label}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.productos && (
                  <p className="mt-1.5 text-sm text-red-400">
                    {errors.productos.message}
                  </p>
                )}
              </fieldset>

              {/* Optional toggle */}
              <button
                type="button"
                onClick={() => setShowOptional(!showOptional)}
                className="inline-flex items-center gap-2 text-sm font-medium text-nexo-gold transition-colors hover:text-nexo-gold-bright"
              >
                Cuéntanos más (opcional)
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${showOptional ? "rotate-180" : ""}`}
                />
              </button>

              {/* Optional Fields */}
              <AnimatePresence>
                {showOptional && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="space-y-6 overflow-hidden"
                  >
                    {/* Nombre */}
                    <div>
                      <label
                        htmlFor="nombre"
                        className="mb-2 block text-sm font-medium text-nexo-gray"
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

                    {/* Empleados */}
                    <div>
                      <label
                        htmlFor="empleados"
                        className="mb-2 block text-sm font-medium text-nexo-gray"
                      >
                        Número de empleados
                      </label>
                      <select
                        id="empleados"
                        className={inputBase}
                        {...register("empleados")}
                      >
                        <option value="">Selecciona un rango</option>
                        <option value="1-20">1 – 20</option>
                        <option value="21-50">21 – 50</option>
                        <option value="51-100">51 – 100</option>
                        <option value="100+">100+</option>
                      </select>
                    </div>

                    {/* Tipo de Espacio */}
                    <div>
                      <label
                        htmlFor="tipoEspacio"
                        className="mb-2 block text-sm font-medium text-nexo-gray"
                      >
                        Tipo de espacio
                      </label>
                      <select
                        id="tipoEspacio"
                        className={inputBase}
                        {...register("tipoEspacio")}
                      >
                        <option value="">Selecciona un tipo</option>
                        <option value="oficina">Oficina</option>
                        <option value="coworking">Coworking</option>
                        <option value="gimnasio">Gimnasio</option>
                        <option value="universidad">Universidad</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    {/* Ciudad */}
                    <div>
                      <label
                        htmlFor="ciudad"
                        className="mb-2 block text-sm font-medium text-nexo-gray"
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

                    {/* Teléfono */}
                    <div>
                      <label
                        htmlFor="telefono"
                        className="mb-2 block text-sm font-medium text-nexo-gray"
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

                    {/* Mensaje */}
                    <div>
                      <label
                        htmlFor="mensaje"
                        className="mb-2 block text-sm font-medium text-nexo-gray"
                      >
                        Mensaje adicional
                      </label>
                      <textarea
                        id="mensaje"
                        rows={4}
                        className={`${inputBase} resize-none`}
                        placeholder="¿Algo más que quieras contarnos?"
                        {...register("mensaje")}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-nexo-teal py-4 text-lg font-bold text-nexo-black transition-all duration-300 hover:bg-nexo-teal-hover hover:shadow-[0_0_30px_rgba(0,194,160,0.25)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-nexo-black/30 border-t-nexo-black" />
                    Enviando...
                  </span>
                ) : (
                  "Quiero mi máquina"
                )}
              </button>

              <p className="text-center text-sm text-nexo-gray/50">
                Sin costo de instalación · Sin compromiso a largo plazo
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      {/* Info Column */}
      <div className="lg:col-span-2">
        <div className="sticky top-28 space-y-8">
          <div>
            <h3 className="mb-6 font-display text-xl font-bold text-nexo-white">
              ¿Prefieres hablar directamente?
            </h3>

            <div className="space-y-4">
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/5 bg-nexo-gray-dark p-4 transition-all duration-300 hover:border-nexo-teal/20"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-400 transition-colors group-hover:bg-green-500/20">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-nexo-white">
                    WhatsApp
                  </p>
                  <p className="text-sm text-nexo-gray/70">
                    +57 300 123 4567
                  </p>
                </div>
              </a>

              <a
                href="mailto:hola@nexovending.com"
                className="group flex items-center gap-4 rounded-xl border border-white/5 bg-nexo-gray-dark p-4 transition-all duration-300 hover:border-nexo-gold/20"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-nexo-gold/10 text-nexo-gold transition-colors group-hover:bg-nexo-gold/20">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-nexo-white">Email</p>
                  <p className="text-sm text-nexo-gray/70">
                    hola@nexovending.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-nexo-gray-dark p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-nexo-teal/10 text-nexo-teal">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-nexo-white">
                    Ubicación
                  </p>
                  <p className="text-sm text-nexo-gray/70">
                    Medellín, Colombia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="rounded-2xl border border-nexo-gold/10 bg-nexo-gray-dark p-6">
            <h4 className="mb-5 font-display text-sm font-semibold uppercase tracking-wider text-nexo-gold">
              Garantías Nexo
            </h4>
            <ul className="space-y-4">
              {trustSignals.map((signal) => (
                <li key={signal.text} className="flex items-center gap-3">
                  <signal.icon className="h-4 w-4 shrink-0 text-nexo-teal" />
                  <span className="text-sm text-nexo-gray">
                    {signal.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
