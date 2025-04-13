// components/Footer.js
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {/* Logo y descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <Link href="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Gourmet<span className="text-white">Elite</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Transformando eventos en experiencias gastronómicas memorables desde 2010.
            </p>
           
          </motion.div>

          {/* Links rápidos */}
       

          {/* Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Contacto</h3>
            <ul className="space-y-4">
              
              <li className="flex items-center">
                <FiPhone className="flex-shrink-0 h-5 w-5 text-amber-400" />
                <a href="tel:+1234567890" className="ml-3 text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <FiMail className="flex-shrink-0 h-5 w-5 text-amber-400" />
                <a href="mailto:hola@gourmetelite.com" className="ml-3 text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  hola@gourmetelite.com
                </a>
              </li>
            </ul>
          </motion.div>
         
         <motion.div>
         <h3 className="text-lg font-semibold text-white">Redes Sociales</h3>
          <div className="flex space-x-4 m-auto pt-3">
       
              {[FiFacebook, FiInstagram, FiTwitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
            </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 my-8"
        />

        {/* Copyright y legales */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"
        >
          <div className="mb-4 md:mb-0 m-auto">
            © {new Date().getFullYear()} GourmetElite. Todos los derechos reservados.
          </div>
         
        </motion.div>
      </div>
    </footer>
  );
}