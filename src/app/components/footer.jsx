'use client';

import { motion } from 'framer-motion';
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Columna 1: Logo y redes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Gourmet<span className="text-white">Elite</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Transformando eventos en experiencias gastronómicas memorables desde 2010.
            </p>
            <div className="flex space-x-4">
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

          {/* Columna 2: Info de contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Información</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="flex-shrink-0 h-5 w-5 text-amber-400 mt-0.5" />
                <span className="ml-3 text-gray-400 text-sm">
                  Av. Gourmet 1234<br />Ciudad Elegante, CP 56789
                </span>
              </li>
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
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 my-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500"
        >
          © {new Date().getFullYear()} GourmetElite. Todos los derechos reservados.
        </motion.div>
      </div>
    </footer>
  );
}