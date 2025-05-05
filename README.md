# Grateksa

Sitio web profesional para la empresa Grateksa, dedicada a la seguridad, protección civil y capacitación de brigadas en México.

## Características principales
- Página de inicio con hero visual y fondo personalizado.
- Sección de servicios destacados.
- Sección "Quiénes Somos" con carrusel de imágenes animado.
- Footer moderno con contacto, ubicación, WhatsApp y redes sociales.
- Navegación suave y animada entre secciones.
- Animaciones de entrada con AOS.

## Tecnologías utilizadas
- Node.js + Express
- EJS (plantillas)
- Tailwind CSS
- JavaScript (vanilla)
- AOS (Animate On Scroll)

## Instalación y uso
1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repo>
   cd Grateksa
   ```
2. **Instala las dependencias:**
   ```bash
   npm install
   ```
3. **Ejecuta el servidor en modo desarrollo:**
   ```bash
   npm run dev
   ```
   O en modo producción:
   ```bash
   npm start
   ```
4. **Abre tu navegador en:**
   [http://localhost:3000](http://localhost:3000)

## Personalización
- **Imágenes:** Coloca tus imágenes en la carpeta `public/images/` y actualiza las rutas en las secciones correspondientes.
- **Servicios:** Edita el array `services` en `index.js` para mostrar tus propios servicios.
- **Colores y estilos:** Personaliza los colores en `public/css/style.css` o usando Tailwind.
- **Redes sociales y contacto:** Modifica los enlaces y datos en el footer en `views/index.ejs`.

## Créditos
Desarrollado por [Francisco Gonzalez Sosa](https://franciscogonzalez.netlify.app/)

---
¡Gracias por confiar en Grateksa para la seguridad y capacitación de tu empresa! 