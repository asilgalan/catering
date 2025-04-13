// components/GallerySection.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState,useEffect } from 'react';
export default function GallerySection() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => {
          setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
      }, []);
  const galleryItems = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
      alt: 'Plato gourmet presentación elegante',
      category: 'Gourmet'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
      alt: 'Evento de catering para boda',
      category: 'Bodas'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
      alt: 'Desayuno gourmet',
      category: 'Desayunos'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
      alt: 'Postres finos',
      category: 'Postres'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
      alt: 'Cócteles artesanales',
      category: 'Bebidas'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1481931098730-318b6f776db0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
      alt: 'Buffet de evento corporativo',
      category: 'Corporativos'
    }
  ];

  return (
    <section id="galeria" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Nuestra <span className="text-amber-500">Galería</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Bodas gourmet, eventos corporativos y experiencias culinarias
          </p>
        </motion.div>

        {/* Galería adaptativa */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Contenedor de la imagen */}
              <div className={`overflow-hidden rounded-xl shadow-lg ${item.featured ? 'ring-2 ring-amber-400' : ''}`}>
                <Image
                  src={item.url}
                  alt={item.alt}
                  width={600}
                  height={400}
                  className={`w-full h-48 sm:h-64 object-cover transition-transform duration-500 ${!isMobile && 'group-hover:scale-110'}`}
                  priority={item.featured}
                />
              </div>

              {/* Overlay - Comportamiento diferente en móvil/desktop */}
              <div className={`
                absolute inset-0 flex items-end p-4 md:p-6
                ${isMobile 
                  ? 'bg-gradient-to-t from-black/60 to-transparent' 
                  : 'bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                }
              `}>
                <div>
                  <span className={`
                    inline-block px-2 py-1 text-xs md:text-sm font-medium rounded-full mb-1 md:mb-2 bg-amber-500 text-white
                    ${item.featured}
                  `}>
                    {item.category}
                  </span>
                  <h3 className={`text-sm md:text-xl font-semibold ${isMobile ? 'text-white' : 'text-white'}`}>
                    {item.alt}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <Link href="#contacto" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full text-sm md:text-base font-medium shadow-lg hover:shadow-amber-200 transition-all"
            >
              Ver Bodas Gourmet
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}