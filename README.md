# AutoVolt Energy — Sitio web

Sitio web oficial (landing público) de **AutoVolt Energy**. Presenta la propuesta
para **conductores** (app), **conjuntos residenciales**, **hoteles y hospitales**,
**centros comerciales y parqueaderos**, **micromovilidad** (patinetas, scooters y motos eléctricas),
**empresas/operadores** (importación e instalación de hardware)
y **operadores que licencian el software** (dos modelos: licencia base y white-label), y aloja las páginas legales.

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
| `index.html` | Landing principal (hub de soluciones **agrupado por intención**: *¿Tienes un espacio?* —conjuntos, centros comerciales y parqueaderos, hoteles y hospitales, micromovilidad—, *¿Quieres operar?* —empresas/hardware, software— y *¿Conduces?* —app conductores—; más sección de conductores y contacto) |
| `cargadores-conjuntos-residenciales.html` | Modelo anfitrión sujeto a prefactibilidad: la copropiedad puede elegir participación de ingresos o tarifa preferencial. 100% residencial, carga lenta AC de 7 kW. Ofrece micromovilidad como opción complementaria (sección "Dos formas de cargar" + enlace cruzado) |
| `cargadores-centros-comerciales.html` | Modelo anfitrión para **centros comerciales y parqueaderos** (públicos/privados y cadenas) y zonas de alta afluencia: espacio + conexión; comisión por contrato. Carga rápida DC desde 20 kW para carros **y** estación AC para micromovilidad en el mismo sitio. Cross-link con micromovilidad |
| `cargadores-hoteles-hospitales.html` | Modelo anfitrión para hoteles y hospitales: AC 7 kW (huéspedes) o DC desde 20 kW (visitantes/personal), según evaluación del sitio |
| `cargadores-micromovilidad.html` | Carga AC para patinetas, scooters y motos eléctricas. Estaciones multi-toma (2–20 tomas) sobre OCPP; **modelo anfitrión** (comisión por contrato) o **suministro del equipo** al operador. Cobro por la app por tiempo/sesión/energía. Segmentos: flotas de domicilios, universidades, conjuntos y comercios |
| `soluciones-para-empresas.html` | Página comercial: 2 líneas para empresas/operadores (importación de hardware + instalación). Cruza a la página de software para la plataforma |
| `software-para-electrolineras.html` | Página comercial: licenciamiento del software CPO en dos modelos (keyword principal "software para electrolineras"). Cada tarjeta lleva un badge de estado arriba: **licencia base → Disponible** (plan piloto; la plataforma ya está construida y probada) y **white-label → Próximamente**. En ambos el operador opera y recibe el dinero directo; AutoVolt no custodia |
| `como-poner-cargadores-en-mi-conjunto.html` | Guía SEO (top-of-funnel) que enlaza a la página comercial de conjuntos |
| `terminos.html` | Términos y Condiciones |
| `privacidad.html` | Política de Privacidad y Tratamiento de Datos |
| `styles.css` | Hoja de estilos compartida |
| `sitemap.xml` | Mapa del sitio para buscadores |
| `robots.txt` | Directivas de rastreo + referencia al sitemap |
| `CNAME` | Dominio personalizado para GitHub Pages (`www.autovoltenergy.net`) |
| `google6258b155e64498e9.html` | Archivo de verificación de Google Search Console. No eliminar mientras se use ese método |
| `.nojekyll` | Desactiva el procesamiento Jekyll de GitHub Pages |
| `assets/` | Logo (transparente y 4K) e isotipo (favicon) |

## SEO y captación

Dominio canónico: **`https://www.autovoltenergy.net`** (todas las `<link rel="canonical">`,
`og:url` y el `sitemap.xml` apuntan ahí).

- **Estrategia:** una página por intención de búsqueda (conjuntos residenciales, centros comerciales y parqueaderos, hoteles y hospitales, micromovilidad, empresas/operadores, software).
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
- **Empresas/operadores:** dos líneas (importación de hardware + instalación) sujetas a alcance,
  permisos y compatibilidad (p. ej. OCPP 1.6-J). La plataforma se ofrece aparte, en la página de software.
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
- **Placeholders legales:** ✅ **reemplazados con datos reales del RUT (22 jul 2026)** en
  `terminos.html` y `privacidad.html` — NIT `902.087.036-0`, domicilio Ibagué (Tolima),
  fecha de vigencia 22 jul 2026. Falta hacer **commit + push** para que salgan en GitHub Pages.
- **Visibilidad / captación:** ejecutar el **Plan de visibilidad (captación orgánica)** de arriba
  (Perfil de Empresa de Google → indexación → redes/sameAs → contenido long-tail → backlinks).
  El Perfil de Empresa de Google va sin dirección visible hasta tener sede o estación pública real.
- **Analítica:** no instalar scripts de tracking/cookies por ahora. Usar Search Console primero;
  GA4/Meta Pixel/Hotjar/Plausible quedan para después de aprobar privacidad y aviso/capa de cookies si aplica.
- **Badges de tiendas:** Google Play / App Store quedan como elementos visuales no clicables hasta publicar las apps.
