"use client";

import React from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/FarhaneXDev" },
  { label: "LinkedIn", href: "https://linkedin.com/in/tonprofil" },
];

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 md:px-[10%] pt-12 sm:pt-16 pb-8 text-white border-t border-white/10 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-10 mb-14 text-center md:text-left">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3 max-w-xs"
          >
            <h2 className="text-xl font-bold tracking-tight">
              Farhane <span className="text-[#25a244]">X</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed">
              Développeur Full Stack passionné, Je construis des produits
              web fiables, de l'idée à sa matérialisation.
            </p>
            <a
              href="mailto:tonemail@gmail.com"
              className="text-[#25a244] text-sm hover:text-white/70 duration-500 underline-offset-4 transition w-fit"
            >
              devlifeoffarhane@gmail.com
            </a>
          </motion.div>

          {/* Nav + Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16"
          >
            <div className="flex flex-col gap-3">
              <span className="text-xs text-white/25 uppercase tracking-widest mb-1">
                Navigation
              </span>
              {links.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm text-white/55 hover:text-[#25a244] transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs text-white/25 uppercase tracking-widest mb-1">
                Réseaux
              </span>
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/55 hover:text-[#25a244] transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col gap-3 md:items-end"
          >
            <span className="text-xs text-white/25 uppercase tracking-widest">
              Disponibilité
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#25a244] animate-pulse" />
              <span className="text-sm text-white/60">
                Disponible — missions freelance
              </span>
            </div>
            <a
              href="#contact"
              className="mt-2 px-5 py-2.5 rounded-xl border border-white/15 text-sm text-white/70 hover:border-[#25a244]/50 hover:text-[#25a244] hover:bg-[#25a244]/5 transition-all duration-300 w-fit"
            >
              Démarrer un projet →
            </a>
          </motion.div>
        </div>

        {/* Bottom line */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 pt-6 border-t border-white/10 text-white/25 text-xs">
          <span>
            © {new Date().getFullYear()} Farhane X. Tous droits réservés.
          </span>
          <span>Conçu & développé par Farhane X</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
