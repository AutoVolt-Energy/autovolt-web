# AutoVolt Energy — Sitio web

Sitio web oficial (landing público) de **AutoVolt Energy**. Presenta la propuesta
para **conductores** (app), **conjuntos residenciales**, **hoteles y hospitales**,
**centros comerciales y parqueaderos**, **micromovilidad** (patinetas, scooters y motos eléctricas),
**empresas y operadores** que licencian el software (dos modelos: licencia base y white-label),
y aloja las páginas legales.

Es un sitio **100% estático**: HTML + CSS, sin framework ni paso de build.
Dentro del workspace vive en `Web/` y se despliega de forma independiente de la
plataforma operativa (`../Operativo/`) para que publicar marketing no toque backend,
dashboard, app ni infraestructura de producción.

Producción: **https://www.autovoltenergy.net** (GitHub Pages)

## Stack

| Capa | Tecnología |
|---|---|
| Marcado | HTML5 |
| Estilos | CSS plano (variables nativas, sin preprocesador) |
| Tipografía | Inter (Google Fonts) |
| JS | Mínimo, inline (año del footer) |
| Build | Ninguno — se sirven los archivos tal cual |
| Hosting | GitHub Pages |

## Estructura

| Archivo | Propósito |
|---|---|
| `index.html` | Landing principal, reestructurada **audiencia-primero** (jul 2026): hero enfocado al **modelo anfitrión** ("carga en tu propiedad, sin invertir") con un solo CTA (prefactibilidad) → **selector de 4 segmentos** (conjuntos, centros comerciales y parqueaderos, hoteles y hospitales, micromovilidad) → franja de **confianza** (S.A.S/RETIE/DIAN/OCPP) → **operadores** (software) y **conductores** (app) como **bandas secundarias** → contacto. La sección "cómo funciona" en 3 pasos se retiró en ago 2026. Antes agrupaba 3 intenciones con el mismo peso (se sentía confuso). El software white-label se anuncia aquí como "en desarrollo". Domicilio del schema `Organization`: Ibagué/Tolima **Ago 2026:** el `<title>` vendía *software para electrolineras* mientras el H1 promete *carga sin invertir* — dos promesas en la misma pantalla, y además canibalizaba la keyword de `software-para-electrolineras.html`. Ahora title/description/OG hablan del **modelo anfitrión**; la keyword de software vive solo en su página. La franja de sellos (S.A.S/OCPP/DIAN/RETIE) aparecía **dos veces** (hero y sección "Hecho para cumplir", con una sola sección de por medio): se quedó únicamente en la sección de confianza, porque el hero debe ser promesa + acción, no credenciales. Se quitó el botón secundario "Ver soluciones", que solo hacía scroll a la sección de abajo y le restaba peso al CTA. |
| `donde-estamos.html` | **Mapa público de la red** (ago 2026): Leaflet + tiles de OpenStreetMap sobre `ubicaciones.json`. Muestra ubicación, tipo de sitio, acceso, potencia y conectores — **nunca estado en vivo, sesiones ni conductores**. La lista de tarjetas se renderiza siempre (es el contenido indexable); el mapa es un extra que degrada sin romper. Con la red vacía muestra un CTA a prefactibilidad en vez de un mapa desierto Era la única página del sitio **sin `<h1>`** (arrancaba en `<h2>`); corregido en ago 2026 — `.section__head h1` comparte estilo con `h2`, así que se ve igual. |
| `cargadores-conjuntos-residenciales.html` | Modelo anfitrión sujeto a prefactibilidad: la copropiedad puede elegir participación de ingresos o tarifa preferencial. 100% residencial, carga lenta AC de 7 kW. Ofrece micromovilidad como opción complementaria (sección "Dos formas de cargar" + enlace cruzado) |
| `cargadores-centros-comerciales.html` | Modelo anfitrión para **centros comerciales y parqueaderos** (públicos/privados y cadenas) y zonas de alta afluencia: espacio + conexión; comisión por contrato. Carga rápida DC desde 20 kW para carros **y** estación AC para micromovilidad en el mismo sitio. Cross-link con micromovilidad |
| `cargadores-hoteles-hospitales.html` | Modelo anfitrión para hoteles y hospitales: AC 7 kW (huéspedes) o DC desde 20 kW (visitantes/personal), según evaluación del sitio |
| `cargadores-micromovilidad.html` | Carga AC para patinetas, scooters y motos eléctricas. Estaciones multi-toma (2–20 tomas) sobre OCPP; **modelo anfitrión** (comisión por contrato) o **suministro del equipo** al operador. Cobro por la app por tiempo/sesión/energía. Segmentos: flotas de domicilios, universidades, conjuntos y comercios |
| `soluciones-para-empresas.html` | **Redirección** (ago 2026) a `software-para-electrolineras.html`. Era una segunda página para la misma audiencia (empresas/operadores) con los mismos dos modelos de licencia, la misma FAQ y el mismo CTA — y se enlazaban entre sí. Se fusionó en la página de software, que ya cubría todo su contenido. Se conserva el archivo como redirección `noindex, follow` + `canonical` porque GitHub Pages no permite 301 y la URL ya estaba indexada. **No volver a crear una página de audiencia aparte para operadores.** Hasta ago 2026 vendía importación e instalación de hardware; esa línea se retiró del sitio |
| `software-para-electrolineras.html` | Página comercial: licenciamiento del software CPO en dos modelos (keyword principal "software para electrolineras"). Cada tarjeta lleva un badge de estado arriba: **licencia base → Disponible** (plan piloto; la plataforma ya está construida y probada) y **white-label → Próximamente**. En ambos el operador opera y recibe el dinero directo; AutoVolt no custodia **Ago 2026 — sección `#plataforma` "Qué trae la plataforma":** 11 tarjetas de características reales del software, cada una con badge de estado (`.badge-estado--ok` / `.badge-estado--pedido`). Reglas de contenido acordadas: **no se nombra la pasarela** (se dice "integramos la que tú uses", respaldado por el adaptador genérico de `ocpp-backend/src/services/payment/`), **no se menciona micromovilidad** en esta página, y **reserva de cargador va incluida** (verificado en código: `ChargerReservation`, `services/reservations/`, endpoints en `charger.routes.ts` — el PLAN la describe como "diseñada", pero está construida). **Ninguna tarjeta lleva estado pendiente:** la de `Tu marca y tu app` se retiró de esta sección porque el white-label ya se ofrece abajo, en *Elige el modelo* — no se duplica una oferta en la misma página. Por eso el subtítulo tampoco promete marcas de "todavía no". La nota al pie aclara que la pasarela concreta se define en la cotización Se **retiró la sección "Operar un CPO no es solo instalar cargadores"** (6 tarjetas de problemas): con `#plataforma` en su lugar la página pasa del hero directo a lo que el software hace, en vez de dedicar una pantalla a explicar el problema. También quitaba presión sobre una promesa aún no cerrada (facturación DIAN) También se retiró **"De cero a operando en 3 pasos"** (sección `#como`): el botón del hero que apuntaba ahí ahora lleva a `#plataforma` con el texto "Ver qué incluye". La promesa de acompañamiento en el onboarding sobrevive en la tarjeta *Empieza con la Licencia base*. Al quitar ambas secciones quedaban **tres `section--alt` seguidas**, así que "Elige el modelo" volvió a `section` para restaurar la alternancia de fondos **Los dos rieles de recarga NO van como tarjetas separadas:** "Tu pasarela, tu cuenta" y "Recarga por transferencia" se leían como lo mismo (al operador no le cambia nada cuál riel usó el conductor) y ninguna vendía el punto real. Fundidas en **"Tu plata no pasa por nosotros"**, que es el argumento diferenciador: el recaudo entra directo a su cuenta, sin liquidaciones ni custodia de por medio. El hueco lo ocupa **"Soporte que no te consume el día"** (asistente guiado + escalación con contexto + analítica), que responde al miedo de que operar signifique vivir contestando llamadas La tarifa de ocupación se titula **"Penalización por ocupación del cargador"** (decisión del fundador: nombre directo y reconocible en el sector, sobre alternativas de beneficio como "La pistola se libera sola"). Ya no se llama "Cobro por ocupación con gracia": "gracia" es jerga interna. **El cuerpo sí vende la rotación** —que el punto se libere y entre el siguiente cliente—, porque ahí está el valor real; el recargo es la palanca. Regla general para estas tarjetas: **el cuerpo nombra la situación que el operador ya sufre antes que la función del software** El white-label se marca **`Bajo pedido`**, no *Próximamente* (decisión del fundador): no está en estantería pero se construye cuando un cliente lo contrata — vende mejor y sigue siendo cierto. La clase es `.badge-estado--pedido` |
| `como-poner-cargadores-en-mi-conjunto.html` | Guía SEO (top-of-funnel) que enlaza a la página comercial de conjuntos |
| `propuesta-parqueaderos.html` | **Deck comercial** (propuesta por link) para parqueaderos públicos: modelos A + B + comparación. `noindex`, sin enlazar en nav/sitemap. Ver *Propuestas comerciales por segmento* |
| `propuesta-conjuntos.html` | Deck comercial para conjuntos: solo Modelo A + micromovilidad. `noindex`, unlisted |
| `propuesta-hoteles.html` | Deck comercial para hoteles: solo Modelo A, sin micromovilidad. `noindex`, unlisted |
| `propuesta-centros-comerciales.html` | Deck comercial para centros comerciales: Modelo A + micromovilidad, con Modelo B anexado como opción. `noindex`, unlisted |
| `terminos.html` | Términos y Condiciones |
| `privacidad.html` | Política de Privacidad y Tratamiento de Datos |
| `pago-retorno.html` | **Pantalla de retorno de la pasarela de pago.** Destino de `WOMPI_REDIRECT_URL`: sin ella, Wompi deja al conductor en su propia pantalla de resultado, que habla de una transacción y no de AutoVolt. A propósito **no afirma que el pago fue aprobado** — la redirección solo trae el id, no el estado; prometer una aprobación le mentiría a quien le rebotó la tarjeta. El botón «Abrir la app» es mejor esfuerzo mientras no haya App Links (intent al LAUNCHER en Android, ficha de App Store en iOS). `noindex`, autónoma (estilos propios, sin `styles.css` ni nav). Esta misma URL será el App Link cuando se implemente el retorno automático |
| `styles.css` | Hoja de estilos compartida |
| `sitemap.xml` | Mapa del sitio para buscadores |
| `robots.txt` | Directivas de rastreo + referencia al sitemap |
| `CNAME` | Dominio personalizado para GitHub Pages (`www.autovoltenergy.net`) |
| `google6258b155e64498e9.html` | Archivo de verificación de Google Search Console. No eliminar mientras se use ese método |
| `.nojekyll` | Desactiva el procesamiento Jekyll de GitHub Pages |
| `assets/` | Logo (transparente y 4K) e isotipo (favicon) |

## Navegación

El menú es **idéntico en todas las páginas** con `styles.css` (se genera desde un solo bloque; si
cambia, cambia en todas). Reestructurado en ago 2026 porque mezclaba los dos negocios y repetía
destinos: el desplegable "Soluciones" juntaba los 4 segmentos de sitio con las 2 páginas de software,
y además existían "Operadores" (ancla) y "Empresas y operadores" (página) apuntando a lo mismo.

```
Cargadores ▾ | Software CPO | Dónde estamos | App | Contacto | [Evaluación gratis]
   └ Conjuntos residenciales / Centros comerciales y parqueaderos / Hoteles y hospitales / Micromovilidad
```

- **Dos caminos, no seis:** `Cargadores` = modelo anfitrión (nosotros ponemos y operamos);
  `Software CPO` = licenciamiento (el cliente opera). Nada más entra al menú.
- **Un solo CTA en todo el sitio:** "Evaluación gratis" → `prefactibilidad.html`. Antes cambiaba de
  nombre por página ("Solicitar evaluación" / "Avísame" / "Solicitar cotización"), lo que hacía parecer
  que eran acciones distintas. El CTA del hero de la home usa el mismo nombre. Los CTA **contextuales**
  (p. ej. "Quiero cotizar" en `#cotizar` de software) viven dentro del contenido, no en el menú.
  Solo existen dos redacciones, a propósito: `Evaluación gratis` (botón compacto del menú) y
  `Solicita tu evaluación gratis` (botón grande dentro del contenido). Misma acción, misma palabra clave.
- **Etiquetas cortas a propósito:** con textos largos ("Cargadores en tu sitio", "App para conductores")
  el nav se parte en dos líneas y el CTA se solapa con "Contacto" a 1440 px — `--maxw` es 1140 px.
  `.nav__links > a, .nav__dropbtn, .nav__cta` llevan `white-space: nowrap`.
- **Página activa:** `is-active` en el enlace y también en `.nav__dropbtn` cuando el activo está
  dentro del desplegable. La guía SEO de conjuntos marca activo "Conjuntos residenciales".
- `descarga-app.html` y `pago-retorno.html` son landings autónomas (estilos propios, sin este nav).

## Encabezados y clases compartidas

Auditado en ago 2026: **toda página con encabezados tiene exactamente un `<h1>` y ningún salto de
nivel** (nunca H1→H3). Vale la pena re-correr la comprobación al añadir páginas.

- `donde-estamos.html` saltaba de H1 a H3: el mensaje de red vacía y **el título de cada punto de
  carga, que lo genera el JS**, eran `<h3>` sin ningún H2 de por medio. Ambos pasaron a `<h2>`
  (con su CSS inline y el `querySelector` del JS ajustados). Si se toca ese render, mantener `h2`.
- Los 4 decks `propuesta-*.html` traían **dos `<h1>`**: la portada y la slide de contacto. La de
  contacto es `<h2 class="slide-title">`, y esa clase le devuelve el tamaño del h1 — **el diseño no
  cambió**, solo la semántica. Son `noindex`, así que era deuda de accesibilidad, no de SEO.
- `google6258b155e64498e9.html` no lleva `<h1>` **a propósito**: es el archivo de verificación de
  Search Console, una sola línea de texto.

> **Cuidado con `.estado`:** `donde-estamos.html` la usa en su `<style>` propio para los chips de
> los puntos de carga (`--operativo`, `--en-instalacion`, `--proximamente`). Los badges de
> características de `software-para-electrolineras.html` se llaman **`.badge-estado`** justamente
> para no chocar: `styles.css` carga **antes** que el `<style>` de la página, así que una `.estado`
> global le filtra a esos chips todo lo que su regla local no redefina (pasó con `text-transform`
> y `letter-spacing`). No declarar `.estado` en `styles.css`.

## SEO y captación

Dominio canónico: **`https://www.autovoltenergy.net`** (todas las `<link rel="canonical">`,
`og:url` y el `sitemap.xml` apuntan ahí).

- **Estrategia:** una página por intención de búsqueda (conjuntos residenciales, centros comerciales y parqueaderos, hoteles y hospitales, micromovilidad, software para operadores). **Una intención, una página:** cuando dos páginas compiten por la misma audiencia se fusionan y la perdedora queda como redirección (ver `soluciones-para-empresas.html`).
- **Datos estructurados (JSON-LD):** `Organization` + `WebSite` + `OfferCatalog` (home);
  `sameAs` queda pendiente hasta crear redes oficiales; `Service`,
  `BreadcrumbList` y `FAQPage` en las páginas comerciales; `BreadcrumbList` en
  `prefactibilidad.html`; `Article` + `BreadcrumbList` + `FAQPage` en la guía.
- **Conversión:** botón flotante de WhatsApp (`+57 314 490 7237`) en todas las páginas + CTA por WhatsApp/correo.
- **Contacto:** correos formales `contacto@` (atención general), `ventas@` (páginas comerciales),
  `privacidad@` y `legal@` (páginas legales). Además existen `facturacion@` (facturación DIAN) y
  `no-responder@` (correos automáticos del sistema), aún no usados en la web pero ya creados.
  Todos son alias que redirigen al buzón operativo `gerencia@autovoltenergy.net`.

## Contenido comercial (promesas defendibles)

Las páginas comerciales se redactaron para que **ninguna promesa quede sin respaldo**. El
principio editorial es que cada afirmación de modelo, ingreso o instalación sea **defendible**
ante un comité de copropiedad, un centro comercial o una empresa.

- **Todo va condicionado a prefactibilidad** técnica, eléctrica, económica y contractual.
  No se promete instalación ni rentabilidad sin evaluar capacidad, flujo, costos e inversión.
- **Sin cifras de comisión fijas en el sitio:** el porcentaje y la liquidación se definen
  **por contrato** según flujo, costos de energía, inversión y condiciones del sitio
  (se eliminó el rango `7,5%–20%` que antes aparecía publicado).
- **Conjuntos residenciales:** el modelo anfitrión busca cero inversión inicial *en proyectos
  aprobados*; la copropiedad puede elegir participación de ingresos **o** tarifa preferencial
  para residentes, sujeto a costos de energía y contrato. Foco 100% residencial, carga lenta AC de 7 kW.
- **Hoteles y hospitales:** modelo anfitrión para sitios de alta rotación; AC de 7 kW (huéspedes)
  o DC desde 20 kW (visitantes/personal), según evaluación del sitio (flujo, plazas, capacidad eléctrica).
- **Micromovilidad:** carga AC para patinetas, scooters y motos eléctricas con estaciones multi-toma
  (2–20 tomas) sobre OCPP; **modelo anfitrión** (comisión por contrato) **o suministro del equipo** al
  operador. La copia vende el **beneficio del socio** (fácil y económico de sumar, atrae usuarios, genera
  ingreso), **no** la ventaja de costo interna de AutoVolt. Cobro por la app por tiempo, sesión o energía.
  Es cross-sell natural de conjuntos, hoteles y centros comerciales. Candidatos de hardware evaluados
  (sin contratar): NASN (10–20 tomas) y Zhongchongfu (2 canales 3,5 kW), pendientes del filtro de
  certificación (ISO 9001 con alcance + informes de ensayo ≤9 meses).
- **Centros comerciales y parqueaderos:** una sola página (`cargadores-centros-comerciales.html`, menú
  "Centros comerciales y parqueaderos") cubre centros comerciales, **parqueaderos** públicos/privados y
  cadenas, y zonas de alta afluencia. Modelo a comisión por contrato, con carga rápida (DC desde 20 kW)
  para carros donde la capacidad y el flujo lo justifiquen, **y estación AC para micromovilidad** (motos
  de domicilio, scooters, patinetas) en el mismo sitio. Se decidió **fusionar parqueaderos aquí** (en vez
  de página propia) por el alto solapamiento de modelo/pitch/keywords; la página de parqueaderos aparte
  nunca se desplegó. Cross-link con micromovilidad.
- **Empresas/operadores:** entrada por audiencia al licenciamiento de la plataforma, sujeta a alcance
  y compatibilidad (p. ej. OCPP 1.6-J). El detalle del producto vive en la página de software.
  **La importación e instalación de hardware ya no se publicita en el sitio** (ago 2026): se retiró
  de esta página, del inicio, de la de software, de `llms.txt` y de los 4 decks. Se conservan el
  modelo anfitrión (AutoVolt instala y opera) y la opción de que el aliado compre el equipo.
- **Software (operadores):** se ofrece en **dos modelos de licenciamiento**: **licencia base** (el
  operador opera con la app y la marca de AutoVolt o una genérica; se cobra por **comisión** sobre la
  operación) y **licencia white-label** (opera con su propia marca, app, tarifas, conductores y pasarela;
  **licencia sin comisión**). En ambos el operador **opera y recibe el dinero directo a su cuenta** y
  AutoVolt **no custodia**. Los modelos "operado por AutoVolt" y "agregador" quedaron **descartados**
  (custodia de dinero). **Sin cifras publicadas** (se definen en la cotización). Detalle en
  `../Operativo/docs/fase2-multioperador/fase2-modelos-licenciamiento.md`.
  - **Estado (3 jul 2026):** la **licencia base** (Modelo B) ya está **construida y probada** en el
    repo operativo, así que la web la anuncia como **Disponible en plan piloto** (con acompañamiento;
    no self-service — aún sin pasarela automática integrada y con el hardware DC pendiente de validar).
    El **white-label** (Modelo C) sigue como **Próximamente**. Encuadre honesto: verbos de *cotizar*,
    no "demo"; el estado se lee de un vistazo en el badge de cada tarjeta.

Al editar estas páginas, mantener este criterio: preferir verbos como *evaluamos, cotizamos,
proponemos* y condicionantes (*sujeto a, según contrato, cuando el flujo lo justifique*)
en lugar de promesas absolutas o cifras cerradas.

## Propuestas comerciales por segmento (decks)

Además de las páginas de marketing, hay **decks comerciales interactivos** (una sola página HTML
self-contained, navegación por slides con flechas/swipe, marca oscura azul+verde) que se **envían
por link** a un cliente concreto. Son `noindex, nofollow`, **no** están enlazados en el menú ni en
`sitemap.xml`, y viven en el mismo repo para servirse por GitHub Pages (`propuesta-*.html`):

| Deck | Enfoque |
|---|---|
| `propuesta-parqueaderos.html` | Modelos **A + B** + tabla comparativa |
| `propuesta-conjuntos.html` | Solo **A** + micromovilidad |
| `propuesta-hoteles.html` | Solo **A**, sin micromovilidad |
| `propuesta-centros-comerciales.html` | **A + micromovilidad**, con **B anexado como opción** |

Reglas de contenido (alineadas con "promesas defendibles"): sin cifras de comisión fijas; carga
**lenta <7 kW / rápida 11 kW+**; **Modelo A** = cero inversión + participación (o tarifa/amenidad);
**Modelo B** = el cliente compra el equipo, AutoVolt instala **y opera**, el cliente maneja el dinero y
recibe **+90%**, AutoVolt cobra comisión por operar. Las pantallas de la app en los decks son
**mockups ilustrativos** (pendiente: capturas reales). Fuentes editables fuera del repo (scratchpad).

## Mapa de ubicaciones (`donde-estamos.html`)

La página se alimenta de **`ubicaciones.json`**, un **artefacto generado**: no se edita a mano,
se sobrescribe. **No consulta el backend en vivo**, y no va a hacerlo: el mapa en tiempo real en
la web quedó **descartado por decisión de negocio** (23 ago 2026, ver el
[plan de avance](../Operativo/PLAN-DE-AVANCE.md)). El estado en vivo de cada cargador vive en la
**app**, que es donde el conductor lo necesita; la web muestra la foto que el operador aprueba.

### Cómo se publica

1. En el **dashboard**: *Cargadores → Ubicaciones → Editar*. Ahí está el interruptor
   **«Mostrar en el mapa público»** y, al encenderlo, la clase de sitio, quién puede entrar, el
   estado de cara al público y una nota opcional.
2. En **GitHub → Actions → «Publicar mapa de ubicaciones» → Run workflow** (repo privado). Tiene
   una casilla *solo revisar* que muestra qué saldría sin publicar nada.
3. El workflow escribe `ubicaciones.json` en este repo y GitHub Pages redespliega solo.

El workflow vive en el repo privado porque las credenciales de administrador no pueden estar en
secrets de un repo público. Escribe aquí, así que **no dispara el deploy de Hetzner**.

A mano, si hiciera falta:

```powershell
# PowerShell (Windows) — desde la raíz del workspace
$env:AUTOVOLT_ADMIN_EMAIL = 'gerencia@autovoltenergy.net'
$env:AUTOVOLT_ADMIN_PASSWORD = '...'
node Operativo/scripts/exportar-ubicaciones.mjs --dry-run   # revisa sin escribir
node Operativo/scripts/exportar-ubicaciones.mjs             # escribe Web/ubicaciones.json
cd Web; git add ubicaciones.json; git commit -m "chore: actualiza el mapa de ubicaciones"; git push origin main
```

```bash
# bash / Git Bash
AUTOVOLT_ADMIN_EMAIL=... AUTOVOLT_ADMIN_PASSWORD=... \
  node Operativo/scripts/exportar-ubicaciones.mjs           # --dry-run para revisar antes
cd Web && git add ubicaciones.json && git commit && git push origin main
```

El script se autentica contra `api.autovoltenergy.net`, lee `GET /api/locations` y **filtra con
lista blanca**: publica nombre, ciudad, coordenadas, potencia, tipo de conector y número de
conectores. Nunca tarifas, `chargePointId`, configuración OCPP, estado en vivo ni datos de
conductores.

### Cinco reglas que no hay que romper

- **El dashboard es la única fuente.** `tipo`, `acceso`, `estado` y `nota` viven en la tabla
  `Location` desde la `1.37.0`. Editar el JSON a mano no sirve: la siguiente corrida lo pisa.
- **Nada se publica solo.** `showOnPublicMap` nace **apagado**. Es lo que permite que la
  publicación sea automática sin que un sitio nuevo salga a internet antes de tiempo.
- **Precisión según acceso.** Los sitios que no son `acceso: "publico"` se publican con
  coordenada redondeada a 3 decimales (~100 m). Un conjunto residencial en el mapa con
  precisión de portería es un dato sobre la propiedad del aliado, no sobre nosotros.
- **Sin estado en vivo.** El estado (`operativo`/`en-instalacion`/`proximamente`) es editorial
  y estable, no el `ChargerStatus` del momento. Publicar disponibilidad en tiempo real permite
  inferir cuándo un sitio privado está vacío. Eso vive en la app.
- **Pedir permiso al aliado** antes de publicar su punto, sobre todo si es residencial.

### De dónde sale cada dato del cargador

Dos criterios que deben seguir igual a los del resto del sistema; si allá cambian, aquí también:

- **Potencia:** manda la de la **pistola** (`ConnectorState.powerKw`) y el techo del equipo
  (`Charger.maxPowerKw`) es el respaldo — el mismo orden que usa la app en
  `charger_detail_screen.dart`. Son datos distintos: el del equipo lo reparte el balanceador
  entre sesiones.
- **AC o DC:** lo decide el **tipo de conector** (CCS2, CHAdeMO, CCS1, GBT son DC), con la misma
  lista que `charger.query.controller.ts`. **No se deduce de la potencia:** hasta la `1.37.2` se
  asumía que ≥20 kW era DC, y con esa regla un DC lento de 15 kW se publicaba como AC.

Leaflet está **vendorizado** en `assets/vendor/leaflet/` (v1.9.4) en vez de cargarse por
CDN: sin dependencia de terceros en runtime. Los marcadores son `divIcon` con CSS, así que
no hacen falta las imágenes de marcador de Leaflet. La atribución de OpenStreetMap es
obligatoria por licencia (ODbL) y ya está puesta — no quitarla.

## Desarrollo local

No requiere instalación. Desde la raíz del workspace:

```bash
npm run web:serve        # luego abrir http://localhost:8080
```

O desde esta carpeta, sirve los archivos con cualquier servidor estático:

```bash
python -m http.server 8080      # luego abrir http://localhost:8080
```

O abre `index.html` directamente en el navegador.

## Despliegue (GitHub Pages)

1. Publica el contenido de `Web/` como raíz del repositorio de GitHub Pages (p. ej. `autovolt-web`) y haz push a la rama `main`.
2. En **Settings → Pages**: *Source* = **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. El archivo `CNAME` ya fija el dominio `www.autovoltenergy.net`. En **Settings → Pages → Custom domain** debe quedar verificado.
4. En Squarespace DNS: registro **CNAME** `www` → `autovolt-energy.github.io`, y **4 registros A** del apex (host `@`) → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (para que el dominio sin `www` también resuelva y GitHub lo redirija a `www`).
5. Activa **Enforce HTTPS** (Settings → Pages) una vez emitido el certificado, para forzar `http → https`. Si el certificado no se emite, borra y vuelve a poner el *Custom domain* para re-disparar la emisión.

Cada push a `main` republica el sitio automáticamente. No depende de `Operativo/` ni del deploy a Hetzner.

> **Estado de despliegue:** sitio en producción con **HTTPS forzado**. Repo
> `AutoVolt-Energy/autovolt-web` (rama `main`); apex `autovoltenergy.net` y `www` resuelven a
> GitHub Pages (CNAME `www` → `autovolt-energy.github.io` + 4 registros A del apex a
> `185.199.108–111.153`); certificado Let's Encrypt para ambos. El apex redirige a `https://www…`.

### SEO técnico

Completo: meta/canónicos únicos por página, **datos estructurados JSON-LD** en todas (home con
`Organization`+`WebSite`+`OfferCatalog`; segmentos con `Service`/`BreadcrumbList`/`FAQPage`; guía con
`Article`/`FAQPage`), `sitemap.xml` publicado con 12 páginas y `robots.txt` apuntando a él, y **Search
Console verificado** por archivo HTML (`google6258b155e64498e9.html`). Sin scripts de
tracking/cookies por ahora. **Pendiente:** Perfil de Empresa de Google (negocio virtual/área de
servicio, sin dirección visible) y `sameAs` cuando existan redes oficiales.

### Plan de visibilidad (captación orgánica)

> El SEO técnico **ya está sólido** (meta únicos, datos estructurados, sitemap, robots).
> Lo que falta para **aparecer y vender** no es código: es autoridad, presencia local y
> tiempo. El dominio es nuevo, así que estos pasos —en orden de impacto— son lo que mueve
> la aguja. Ejecutar de arriba hacia abajo.

1. **Perfil de Empresa de Google (máxima prioridad, sin código).** Es lo único que hace
   aparecer en días (Maps + paquete local). Crear como negocio virtual/área de servicio,
   sin dirección visible, con sitio web y WhatsApp `+57 314 490 7237`.
2. **Indexación en Search Console.** Reenviar `sitemap.xml` y usar *Inspección de URL →
   Solicitar indexación* en las 12 páginas; verificar que queden **indexadas** (no solo
   enviadas) en la pestaña *Páginas*.
3. **Redes sociales oficiales + schema.** Crear Instagram, Facebook y LinkedIn de la empresa.
   Cuando existan las URLs, agregarlas al `sameAs` del schema `Organization` del home.
4. **Contenido long-tail.** Replicar el modelo de `como-poner-cargadores-en-mi-conjunto.html`
   con guías que respondan preguntas reales y poco competidas, p. ej.: cuánto cuesta instalar
   un cargador en un conjunto, permisos en propiedad horizontal, requisitos RETIE de cargadores,
   AC vs DC cuál elegir. Cada guía enlaza a su página comercial.
5. **Backlinks / autoridad.** Conseguir menciones y enlaces desde directorios de movilidad
   eléctrica de Colombia, cámaras de comercio, asociaciones (p. ej. ANDEMOS), prensa local y aliados.
6. **(Opcional, pago) Google Ads.** Para aparecer de inmediato por keywords objetivo mientras
   el posicionamiento orgánico madura.

> Mantener la decisión de **no instalar analítica/cookies** hasta aprobar privacidad y la capa
> de consentimiento (ver Pendientes).

## Pendientes

- **Cumplimiento:** revisar y cerrar `../PLAN-DE-AVANCE.md` antes de publicar la app,
  cobrar sesiones o instalar estaciones de acceso público.
- **Placeholders legales:** ✅ **reemplazados con datos reales del RUT y publicados (22 jul 2026)** en
  `terminos.html` y `privacidad.html` — NIT `902.087.036-0`, domicilio Ibagué (Tolima),
  fecha de vigencia 22 jul 2026 (commit `f3a3e8c`, push a `main` → en vivo en GitHub Pages).
- **Política de privacidad — auditoría legal (24 jul 2026):** `privacidad.html` reforzada con 6 cláusulas
  nuevas (transferencias internacionales, datos de diagnóstico, menores de edad, plazos habeas data,
  consentimiento por casilla, marketing separado) y nueva vigencia **24 jul 2026**. Cambio espejo del texto
  en la app. ✅ **Publicada** (commit `5932073`, push a `main` → en vivo en GitHub Pages). Estado en
  `../Operativo/PLAN-DE-AVANCE.md` (sección Protección de Datos Personales).
- **Visibilidad / captación:** ejecutar el **Plan de visibilidad (captación orgánica)** de arriba
  (Perfil de Empresa de Google → indexación → redes/sameAs → contenido long-tail → backlinks).
  El Perfil de Empresa de Google va sin dirección visible hasta tener sede o estación pública real.
- **Analítica:** no instalar scripts de tracking/cookies por ahora. Usar Search Console primero;
  GA4/Meta Pixel/Hotjar/Plausible quedan para después de aprobar privacidad y aviso/capa de cookies si aplica.
- **Badges de tiendas:** ✅ **App Store con enlace real y clicable** (`apps.apple.com/co/app/autovolt-energy/id6795232669`).
  **Google Play sigue como "Próximamente" y deshabilitado** (`store--disabled`) porque la app está en prueba
  cerrada, no publicada. Pendiente: convertirlo en `<a>` con la URL real el día que Android salga a producción
  (bloqueado por los 14 días × ≥12 verificadores de Play, ver `../Operativo/PLAN-DE-AVANCE.md`).
