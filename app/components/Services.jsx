"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Full Stack Web",
    description:
      "Applications Next.js complètes : frontend, backend, base de données. Du repo au déploiement.",
    dir: -30,
  },
  {
    title: "SaaS & MVP",
    description:
      "Produit fonctionnel en quelques semaines. Architecture pensée pour évoluer dès le départ.",
    dir: 30,
  },
  {
    title: "API & Backend",
    description:
      "API REST bien structurées, Prisma + PostgreSQL, logique métier propre et documentée.",
    dir: -30,
  },
  {
    title: "Intégration UI",
    description:
      "Maquette ou design system existant ? Je l'intègre pixel-perfect, responsive et accessible.",
    dir: 30,
  },
];

const Services = () => {
  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 md:px-[10%] text-white w-full">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Ce que je fais
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-white/60 max-w-2xl mb-12"
        >
          Chaque mission part d'un besoin réel et aboutit à <br /> quelque chose
          de livrable. Voici ce sur quoi j'interviens.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {services.map(({ title, description, dir }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: dir }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-2xl border border-white/10 backdrop-blur-md hover:shadow-[0_0_25px_#25a24420] transition"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-white/60">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
