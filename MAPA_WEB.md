# 🗺️ MAPA DE LA WEB UNME — Guía de Edición

> Ubicación: `C:\Users\nacho\Documents\kimi\workspace\unme-premium\src\app\`

---

## 📄 PÁGINAS PRINCIPALES

| Página | Archivo | Qué editar |
|---|---|---|
| **Home** (inicio) | `page.tsx` | Hero, estadísticas, pilares, experiencias destacadas, CTA |
| **Experiencias** | `experiencias/page.tsx` | Catálogo completo de retiros (títulos, descripciones, precios) |
| **Contacto** | `contacto/page.tsx` | Email, teléfono, WhatsApp, dirección, horario |
| **Reserva** | `reserva/page.tsx` | Formulario de reserva |
| **Área Privada** | `area-privada/page.tsx` | Login, dashboard de cliente |
| **FAQ** | `faq/page.tsx` | Preguntas frecuentes |
| **Galería** | `galeria/page.tsx` | Fotos |
| **Blog** | `blog/page.tsx` | Artículos |
| **Quiénes Somos** | `quienes-somos/page.tsx` | Historia, equipo |
| **Empresas** | `empresas/page.tsx` | Partners B2B |
| **Eventos** | `eventos/page.tsx` | Calendario de eventos |
| **Agenda** | `agenda/page.tsx` | Calendario |

---

## 🧩 COMPONENTES COMPARTIDOS

| Componente | Archivo | Qué editar |
|---|---|---|
| **Header** (menú superior) | `src/components/layout/header.tsx` | Logo, enlaces del menú, botón "Reservar" |
| **Footer** (pie de página) | `src/components/layout/footer.tsx` | Columnas de enlaces, copyright |
| **Layout general** | `src/app/layout.tsx` | Fuentes, metadatos SEO, estructura base |

---

## 🎨 ESTILOS Y COLORES

| Archivo | Qué editar |
|---|---|
| `src/app/globals.css` | Colores principales, tamaños, sombras |
| `tailwind.config.ts` | Paleta de colores UNME (forest, taupe, amber, linen, earth) |

---

## 📊 BASE DE DATOS (Prisma)

| Archivo | Qué editar |
|---|---|
| `prisma/schema.prisma` | Modelos: usuarios, reservas, pagos, productos... |

---

## 🔧 DATOS DE CONTACTO — Dónde cambiar

| Dato | Archivo | Línea aprox. |
|---|---|---|
| **Email** | `src/app/contacto/page.tsx` | Busca `📧` |
| **Teléfono** | `src/app/contacto/page.tsx` | Busca `📱` |
| **WhatsApp** | `src/app/contacto/page.tsx` | Busca `wa.me` |
| **Dirección** | `src/app/contacto/page.tsx` | Busca `📍` |

---

## 💰 PRECIOS — Dónde cambiar

| Página | Archivo | Buscar |
|---|---|---|
| Home (destacados) | `src/app/page.tsx` | `price:` |
| Experiencias (catálogo) | `src/app/experiencias/page.tsx` | `price:` |

---

## 📝 TEXTO DEL HERO (página de inicio)

Archivo: `src/app/page.tsx`

```tsx
// Línea 75 — Título principal
<h1>El lujo del silencio,<br/><span>el despertar del ser.</span></h1>

// Línea 82 — Subtítulo
<p>Experiencias inmersivas de bienestar...</p>

// Línea 71 — Badge superior
<span>Centro de Bienestar Premium — Zaragoza</span>
```

---

## 🚀 CÓMO EDITAR (pasos simples)

1. Abre VS Code
2. Ve a `Archivo > Abrir carpeta`
3. Selecciona: `C:\Users\nacho\Documents\kimi\workspace\unme-premium`
4. Navega al archivo que quieres editar (ver tabla arriba)
5. Modifica el texto que necesites
6. Guarda (Ctrl+S)
7. Sube los cambios:
   ```bash
   git add .
   git commit -m "Cambio: [describe qué cambiaste]"
   git push origin main
   ```

---

## ⚡ CÓMO BUSCAR TEXTO RÁPIDO

En VS Code, pulsa `Ctrl + Shift + F` y escribe el texto que quieres cambiar (por ejemplo: "Zaragoza" o "Consultar"). Te mostrará todos los archivos donde aparece.

---

## 📞 DATOS CORRECTOS ACTUALES

- **Email:** unmezgz@gmail.com
- **Teléfono/WhatsApp:** +34 609 371 555
- **Ubicación:** Zaragoza, Aragón, España
- **Link WhatsApp:** https://wa.me/34609371555

---

*Última actualización: 1 de agosto de 2026*
