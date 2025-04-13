// components/ServicesSection.js
'use client';

import { motion } from 'framer-motion';
import { GiChefToque, GiPartyPopper, GiForkKnifeSpoon } from 'react-icons/gi';
import Link from 'next/link';
export default function ServicesSection() {
  const services = [
    {
      icon: <GiChefToque className="text-4xl text-amber-500" />,
      title: "Chefs Expertos",
      description: "Nuestros chefs con estrellas Michelin crean experiencias culinarias personalizadas para tu evento.",
      delay: 0.1
    },
    {
      icon: <GiPartyPopper className="text-4xl text-amber-500" />,
      title: "Eventos Memorables",
      description: "Desde bodas íntimas hasta galas corporativas, diseñamos cada detalle gastronómico.",
      delay: 0.3
    },
    {
      icon: <GiForkKnifeSpoon className="text-4xl text-amber-500" />,
      title: "Menús Personalizados",
      description: "Creación de menús adaptados a tus preferencias, alergias y requisitos especiales.",
      delay: 0.5
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado con animación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Servicios <span className="text-amber-500">Exclusivos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transformamos eventos ordinarios en experiencias gastronómicas extraordinarias
          </p>
        </motion.div>

        {/* Tarjetas de servicios */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Llamado a la acción integrado */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            ¿Listo para elevar tu evento?
          </h3>
          <Link href="#contacto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-medium shadow-lg hover:shadow-amber-200 transition-all"
            >
              Solicitar Presupuesto
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}