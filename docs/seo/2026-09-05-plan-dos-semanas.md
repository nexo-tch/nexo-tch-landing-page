# Plan SEO Nexo Vending — sprint 14 días

**Fechas:** 5–18 septiembre 2026  
**Canónico:** https://www.nexovending.co  
**Marca pública:** Nexo Vending  
**Titular:** Nexo Technologies S.A.S.  
**Puente:** nexotech.io redirige 301 un año (hasta feb 2027)

## Objetivo

Que Nexo aparezca cuando un decisor busca poner vending en su oficina, gym o coworking en Medellín — no solo cuando escribe “Nexo”.

Meta honesta al día 14:

- 3 URLs nuevas de intención publicadas e enviadas a Search Console
- Perfil de Google completo (sin reseñas)
- NAP en 4 directorios
- 15 contactos comerciales hechos a mano

Un dominio de días no llega a posición 1 en dos semanas. Este sprint construye las páginas y las señales que faltaban. El home de conversión no se reescribe.

## Diagnóstico (lo que ChatGPT acertó y lo que ya no aplica)

| Tema | Estado |
|---|---|
| Landing de conversión | Hecha. No tocarla. |
| Marca “Nexo Technologies” ambigua | Corregida en público: Nexo Vending. |
| Dominio nexotech.io | Mudado a nexovending.co. El .io redirige. |
| Search Console / cambio de dirección / sitemap | Enviado. El sitemap puede tardar en leerse (DNS nuevo). |
| Páginas Medellín y comodato | Ya existen. |
| Páginas café / proteína / snacks | Ya existen. |
| Schemas + llms.txt | Ya existen. |
| Reseñas | No hay clientes usando la máquina. No pedirlas. |
| Páginas por vertical (oficina, gym, coworking) | **Faltan. Este es el hueco.** |
| Autoridad / menciones | Baja. Se trabaja con directorios + LinkedIn + el primer caso real. |

## Fuera de estas dos semanas

- Reseñas (cuando el primer cliente lleve semanas operando)
- Registro de marca en la SIC (clases 35, 7, 30; titular la SAS)
- Páginas por municipio (Envigado, Sabaneta, etc.)
- Blog genérico o “mejores empresas de vending”
- Ads
- Reescribir el home

---

## Semana 1 — Publicar donde busca el cliente

### Día 1 — Tú (45 min)

- Confirmar que https://www.nexovending.co abre en el navegador.
- Search Console, propiedad `.co`: recargar `/sitemap.xml` si sigue “No se ha podido obtener”.
- Google Business Profile:
  - Fotos de la máquina (valen las del sitio).
  - Zonas: Medellín, Envigado, Sabaneta, Itagüí, Bello, La Estrella.
  - 4 preguntas publicadas por Nexo: ¿hay inversión? ¿cuánto tarda? ¿quién opera? ¿qué cobertura?
  - 1 post: primera instalación firmada en Medellín. Sin quote de cliente.

### Días 2–3 — Código ✅ listo (falta commit, deploy e indexar)

Crear `/vending-para-oficinas`.

- Intención: máquinas vending / café para oficinas en Medellín.
- Reutilizar `IntentHero`, `RelatedLinks`, FAQ, schemas (`Service`, `FAQPage`, `Breadcrumb`).
- CTA al formulario con Café (y Snacks) preseleccionados.
- Enlaces a `/comodato-maquinas-vending`, `/vending-corporativo-medellin`, `/cafe`, `/snacks`.
- Añadir la ruta a `src/app/sitemap.ts` y a `llms.txt`.

### Día 4 — Código ✅ listo (falta commit, deploy e indexar)

Crear `/vending-para-gimnasios`.

- Intención: vending de proteína / post-entreno.
- CTA con Protein preseleccionado.
- Enlaces a `/proteinas`, comodato, Medellín.

### Día 5 — Código ✅ listo (falta commit, deploy e indexar)

Crear `/vending-para-coworkings`.

- Intención: amenidad de café/snacks sin operación para el coworking.
- CTA Café + Snacks.
- Mallado interno entre las tres verticales.
- En Search Console, pedir indexación de las tres URLs.

### Días 6–7 — Tú

- Bing Places y Apple Business Connect. Mismo NAP:
  - Nombre: Nexo Vending
  - Web: https://www.nexovending.co
  - Tel: +57 301 930 7252
  - Email: contacto@nexovending.co
- Instagram y LinkedIn: nombre visible Nexo Vending, sitio `.co`. El handle puede esperar.

---

## Semana 2 — Entidad y conversaciones

### Día 8 — Código ✅ listo (falta commit, deploy e indexar)

Reforzar copy y titles de `/cafe` y `/comodato-maquinas-vending` para:

- “máquina de café para empresas”
- “vending en comodato” / “máquina vending sin inversión”

Sin duplicar el home.

### Día 9 — Código ✅ listo (falta commit y deploy)

Cerrar RelatedLinks y FAQ entre home, las 3 verticales, Medellín y comodato. Cada página nueva debe tener al menos 3 enlaces internos de entrada.

### Día 10 — Tú

- Ficha en Informa y mención Cámara de Comercio si aplica.
- NAP idéntico al de Google.
- Segundo post en Business Profile (comodato o café de oficina).

### Día 11 — Tú

Un artículo corto en LinkedIn de la empresa: comprar la máquina vs comodato. Hechos, no humo. Eso lo pueden citar IAs.

### Día 12 — Código ✅ listo (falta commit y deploy)

Actualizar `src/app/llms.txt/route.ts` con las 3 URLs y una frase citable por vertical.

### Días 13–14 — Ambos

- Search Console: cobertura, sitemap leído, indexación de las 3 URLs.
- Lista de 15 empresas (oficinas 50+, gyms, coworkings) y contacto por WhatsApp o LinkedIn.
- El SEO captura. El cierre es outbound.

---

## Copy y reglas de las páginas nuevas

- Tuteo corporativo. Frases cortas. Sin em dashes.
- Beneficio antes que feature.
- Sin testimonios inventados. Sin “50+ oficinas”.
- Prueba permitida: comodato, operación incluida, cobertura Valle de Aburrá, instalación sin obras.
- Title: intención + Nexo Vending. Un H1 por página.
- Formulario: máximo los campos que ya existen; preseleccionar producto.

## Correo y dominio (no reabrir)

| Pieza | Estado |
|---|---|
| www.nexovending.co | Canónico |
| nexotech.io | 301 al `.co` |
| contacto@ / ventas@ / hola@ `.co` | Forward al inbox `.io` |
| Envío desde @nexovending.co | Pendiente (no bloquea SEO) |
| Auto-renew nexotech.io | ON hasta feb 2027 |

## Criterio de hecho

Una tarea de código está hecha cuando la URL está en el sitemap, enlazada desde otra página y se puede abrir en producción. Una tarea tuya está hecha cuando el perfil o el directorio muestra el NAP canónico.

## Después del sprint

1. Fotos del primer punto instalado (aunque no haya reseña).
2. Reseña 6–8 semanas después de operar.
3. Registro SIC de “Nexo Vending”.
4. Universidad u otra vertical solo si las tres primeras ya están indexadas.
