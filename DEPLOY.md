# 🚀 DESPLIEGUE EN VERCEL — Guía paso a paso

> Tu web UNME Premium lista en internet en 5 minutos.

---

## PASO 1: Crear repositorio en GitHub

1. Ve a 👉 **https://github.com/new**
2. En **"Repository name"** escribe: `unme-premium`
3. Deja **"Public"** marcado (es gratis)
4. Pulsa el botón verde **"Create repository"**
5. Copia la URL que aparece (será algo como):
   ```
   https://github.com/TU-USUARIO/unme-premium.git
   ```

---

## PASO 2: Subir el código a GitHub

Abre **CMD** en tu PC y ejecuta estos comandos uno por uno:

```cmd
cd C:\Users\nacho\Documents\kimi\workspace\unme-premium
```

```cmd
git remote add origin https://github.com/TU-USUARIO/unme-premium.git
```

*(Reemplaza `TU-USUARIO` por tu nombre de usuario de GitHub)*

```cmd
git branch -M main
```

```cmd
git push -u origin main
```

Te pedirá iniciar sesión en GitHub. Hazlo y espera a que suba todo.

---

## PASO 3: Conectar con Vercel

1. Ve a 👉 **https://vercel.com/new**
2. Inicia sesión con tu cuenta de **GitHub**
3. Busca y selecciona el repositorio `unme-premium`
4. Vercel detectará automáticamente que es **Next.js**

---

## PASO 4: Configurar variables de entorno

En el panel de Vercel, antes de dar a "Deploy", añade estas variables:

Haz clic en **"Environment Variables"** y añade una por una:

| Nombre | Valor |
|--------|-------|
| `DATABASE_URL` | `file:./dev.db` |
| `NEXTAUTH_SECRET` | `unme-super-secret-key-2024-change-in-production` |
| `NEXTAUTH_URL` | `https://unme-premium.vercel.app` |

*(Si Vercel te asigna otra URL, usa esa en NEXTAUTH_URL)*

---

## PASO 5: ¡Deploy!

Pulsa el botón **"Deploy"**.

En 2-3 minutos tendrás tu web online en una URL como:

```
https://unme-premium.vercel.app
```

---

## ✅ ¡Listo!

Abre la URL en cualquier navegador (PC, iPad, móvil) y tu web UNME estará online para siempre.

---

## 🔄 Actualizar la web

Cada vez que hagas cambios en tu PC:

```cmd
cd C:\Users\nacho\Documents\kimi\workspace\unme-premium
git add .
git commit -m "Nuevos cambios"
git push
```

Vercel se actualiza automáticamente en ~1 minuto.

---

## ⚠️ Nota importante: Base de datos

En Vercel (modo gratuito), SQLite **NO persiste** entre peticiones. Esto significa que:
- ✅ Las páginas se ven perfectamente
- ✅ El diseño, colores, textos funcionan
- ⚠️ Los datos de usuarios/reservas se borran en cada deploy

Para una web real con datos persistentes, necesitarías:
- **Vercel Postgres** (gratis hasta 60GB): https://vercel.com/storage/postgres
- O **Supabase** (gratis): https://supabase.com

Para una demo/inversores, con SQLite es suficiente.
