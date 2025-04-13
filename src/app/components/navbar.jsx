// components/HeroNavbar.js
'use client';

import { useState,useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50); // Cambia el valor según cuando quieras que ocurra el efecto
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const navItems = [
      { name: 'Menús', href: '#menus' },
      { name: 'Galería', href: '#galeria' },
      { name: 'Servicios', href: '#servicios' },
      { name: 'Contacto', href: '#contacto' },
    ];
  
    return (
      <>
        {/* Navbar que cambia al hacer scroll */}
        <header className={`fixed w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              
              {/* Logo */}
              <Link href="/">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-bold"
                >
                  <span className={`${scrolled ? 'text-amber-500' : 'text-amber-400'}`}>Gourmet</span>
                  <span className={scrolled ? 'text-gray-900' : 'text-white'}>Events</span>
                </motion.div>
              </Link>
  
              {/* Menú desktop */}
              <nav className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      whileHover={{ y: -3 }}
                      className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-amber-500' : 'text-white/90 hover:text-white'}`}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                ))}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`ml-4 px-5 py-2 rounded-full text-sm font-medium shadow-lg transition-all ${scrolled ? 'bg-amber-500 hover:bg-amber-600 text-white' : 'bg-white text-gray-900 hover:bg-gray-100'}`}
                >
                  Reservar
                </motion.button>
              </nav>
  
              {/* Botón móvil */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                className={`md:hidden p-2 focus:outline-none ${scrolled ? 'text-gray-900' : 'text-white'}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.button>
            </div>
          </div>
  
          {/* Menú móvil */}
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`md:hidden absolute w-full left-0 px-4 pb-4 ${scrolled ? 'bg-white/95' : 'bg-black/80'} backdrop-blur-sm`}
            >
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    className={`block py-3 ${scrolled ? 'text-gray-700 hover:text-amber-500 border-b border-gray-200' : 'text-white hover:text-amber-400 border-b border-white/10'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className={`w-full mt-4 py-3 rounded-lg font-medium ${scrolled ? 'bg-amber-500 text-white' : 'bg-white text-gray-900'}`}
              >
                Reservar
              </motion.button>
            </motion.div>
          )}
        </header>

      {/* Hero Section (ejemplo de integración) */}
      <section className="relative h-screen bg-gray-900 flex items-center justify-center">
        {/* Video o imagen de fondo */}
        <div className="absolute inset-0 overflow-hidden">
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover opacity-70"
          >
            <source src="/food-video.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Contenido del hero */}
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Catering <span className="text-amber-400">Gourmet</span> Profesional
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Servicio premium para bodas, eventos corporativos y celebraciones exclusivas
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link href="#contacto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-medium shadow-lg"
              >
                Contactar Ahora
              </motion.button>
            </Link>
            <Link href="#menus">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full font-medium"
              >
                Ver Menús
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}