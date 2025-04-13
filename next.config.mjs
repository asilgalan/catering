/** @type {import('next').NextConfig} */
const nextConfig = {
     output: 'export', // Habilita exportación estática

    images: {
       // Habilita exportación estática
       
          unoptimized: true, // Necesario para GitHub Pages
        
      // Dominios permitidos para imágenes remotas
      domains: [
        'images.unsplash.com',     // Unsplash
        'plus.unsplash.com',       // Unsplash (variante)
        'source.unsplash.com',     // Unsplash (otra variante)
        'your-cdn-domain.com',     // Si usas otro CDN
      ],
      // Opcional: Configuración de tamaños de imagen
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      // Opcional: Formatos de imagen permitidos
      formats: ['image/webp'],
      // Opcional: Desactivar advertencias de imágenes remotas (solo desarrollo)
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    // Otras configuraciones útiles:
    reactStrictMode: true,
    swcMinify: true,
  };
  
  export default nextConfig;