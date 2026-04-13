"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SaaS Dashboard",
    description:
      "Plateforme de gestion avec authentification, rôles utilisateurs et analytics en temps réel. Conçu pour tenir la charge dès le lancement.",
    tags: ["Next.js", "Prisma", "PostgreSQL"],
  },
  {
    title: "E-commerce Platform",
    description:
      "Boutique en ligne avec tunnel d'achat, paiement Stripe et back-office produits. Optimisée pour la conversion et le SEO.",
    tags: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    title: "Task Manager App",
    description:
      "Outil collaboratif de gestion de tâches : drag & drop, assignation, notifications et sync temps réel.",
    tags: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    description:
      "Site vitrine avec animations au scroll, design épuré et performances Lighthouse au vert.",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
  },
];

// animation plus smooth (pas de stagger violent)
const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier smooth (très important)
    },
  },
};

const Projects = () => {
  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 md:px-[10%] text-white w-full">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold"
          >
            Projets récents
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
            className="text-white/50 max-w-sm text-sm md:text-right"
          >
            Des produits livrés, pas des démos. Chaque projet ici a tourné en
            production.
          </motion.p>
        </div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={item}
              className="group relative flex flex-col gap-5 p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#25a244]/40 hover:bg-white/[0.05] transition-all duration-300"
            >
              {/* image */}
              <div className="relative h-44 rounded-xl overflow-hidden bg-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-[#25a244]/20 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-[#25a244]/60" />
                <div className="absolute top-3 right-3 text-[10px] text-white/20 font-mono tracking-widest uppercase">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              {/* content */}
              <div className="flex flex-col gap-3 flex-1">
                <h3 className="text-lg font-semibold group-hover:text-[#25a244] transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-white/55 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
              </div>

              {/* tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[11px] text-white/40 border border-white/10 rounded-full tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
