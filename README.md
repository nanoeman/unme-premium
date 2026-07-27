# UNME — Ultimate Natural Meditation Experience

> Plataforma web premium de bienestar, glamping y retiros espirituales en Zaragoza.

## 🏗️ Arquitectura

Esta plataforma implementa las **12 secciones** definidas en el Dossier Técnico de Arquitectura Web Premium:

| Ruta | Sección | Estado |
|------|---------|--------|
| `/` | Inicio (Home) | ✅ Hero, stats, pilares, experiencias, features, CTA |
| `/quienes-somos` | Quiénes somos | ✅ Manifiesto, valores |
| `/experiencias` | Experiencias | ✅ Catálogo con 6 experiencias |
| `/eventos` | Eventos | ✅ Lista de eventos con plazas |
| `/agenda` | Agenda | ✅ Calendario de disponibilidad |
| `/empresas` | Empresas Colaboradoras | ✅ Partners + beneficios B2B |
| `/reserva` | Reserva | ✅ Formulario multipaso (4 pasos) |
| `/contacto` | Contacto | ✅ Formulario + WhatsApp VIP |
| `/blog` | Blog | ✅ Grid de artículos + buscador |
| `/galeria` | Galería | ✅ Masonry + lightbox |
| `/faq` | FAQ | ✅ Acordeón por categorías + buscador |
| `/area-privada` | Área Privada | ✅ Login + beneficios VIP |

## 🎨 Paleta de colores (Design System)

| Token | Hex | Uso |
|-------|-----|-----|
| Forest | `#3A4F3D` | Primary, headers, CTAs |
| Taupe | `#8B7355` | Secondary, divisores |
| Amber | `#C4956A` | Accent, KPIs, highlights |
| Linen | `#F5F0EB` | Background general |
| Surface | `#EDE8E1` | Fondos de tarjetas |
| Earth | `#2C2420` | Texto principal |

## 🚀 Cómo empezar

```bash
# 1. Clonar o copiar el proyecto
cd unme-premium

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus valores

# 4. Generar cliente Prisma y migrar DB
npx prisma generate
npx prisma migrate dev --name init

# 5. Iniciar servidor de desarrollo
npm run dev
```

## 📁 Estructura del proyecto

```
unme-premium/
├── prisma/
│   └── schema.prisma      # Schema completo (User, Retreat, Booking, CRM...)
├── src/
│   ├── app/               # App Router (Next.js 16)
│   │   ├── page.tsx       # Home (12 secciones)
│   │   ├── layout.tsx     # Root layout (Header + Footer)
│   │   ├── globals.css    # Variables CSS + utilidades
│   │   ├── quienes-somos/
│   │   ├── experiencias/
│   │   ├── eventos/
│   │   ├── agenda/
│   │   ├── empresas/
│   │   ├── reserva/
│   │   ├── contacto/
│   │   ├── blog/
│   │   ├── galeria/
│   │   ├── faq/
│   │   └── area-privada/
│   ├── components/
│   │   ├── layout/        # Header, Footer
│   │   ├── ui/            # shadcn/ui components
│   │   └── features/      # Componentes reutilizables
│   └── lib/
│       ├── prisma.ts      # Cliente Prisma singleton
│       └── utils.ts       # Helpers (formatCurrency, formatDate)
├── tailwind.config.ts     # Configuración con paleta UNME
├── next.config.ts
└── package.json
```

## 🗄️ Base de datos

El schema Prisma incluye:

- **Auth**: `User`, `Profile` (con roles CUSTOMER/ADMIN/SUPER_ADMIN/TEACHER)
- **Retiros**: `Retreat`, `RetreatSchedule`, `Room`, `Activity`, `Teacher`
- **Reservas**: `Booking`, `BookingRoom`, `BookingActivity`
- **Pagos**: `Payment` (Stripe, PayPal, transferencia), `Invoice`
- **Blog**: `BlogPost`, `BlogCategory`, `Comment`
- **Marketplace**: `Product`, `ProductCategory`, `Order`
- **CRM**: `CrmContact`, `CrmBooking`, `CrmLead`
- **Soporte**: `Message`, `Review`, `FAQ`, `GalleryImage`, `CalendarEvent`

## ⚡ Stack técnico

- **Framework**: Next.js 16 (App Router)
- **Estilos**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animaciones**: Framer Motion
- **Base de datos**: Prisma + SQLite (desarrollo) / PostgreSQL (producción)
- **Fuentes**: Quattrocento Sans + Cormorant Garamond (Google Fonts)
- **Iconos**: Lucide React

## 📝 Notas

- La carpeta `unme-fresh/` del escritorio ha sido **descartada** (proyecto vacío redundante).
- La web estática de la raíz (`index.html`) ha sido **descartada** (obsoleta).
- El ZIP de `unme landing/` está vacío — se ignora.
- Este proyecto es la **única fuente de verdad** para la web de UNME.

## 🏛️ Arquitectura del sitio

Basado en los documentos:
- `Arquitectura Sitio Web Premium.pdf`
- `Propuesta_Arquitectura_Web_Premium.pdf`
- `design.md`
- `Mapa_Sitio_Premium.csv`
