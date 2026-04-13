"use client";

import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center text-center px-4 sm:px-6">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 px-4 py-2 rounded-full border border-white/20 backdrop-blur-md text-sm text-white/70"
      >
        👋 Disponible pour missions freelance
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
      >
        Je crée des expériences <br />
        <span className="text-[#25a244]">web modernes & performantes</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-4 sm:mt-6 max-w-sm sm:max-w-xl text-white/60 text-sm sm:text-base md:text-lg px-2"
      >
        Développeur full stack spécialisé en Next.js, Prisma, PostgreSQL, je
        crée des produits digitaux rapides, scalables et centrés sur
        l’utilisateur.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 flex-wrap justify-center"
      >
        <button className="px-4 sm:px-6 py-3 cursor-pointer rounded-full bg-[#25a244] text-white font-semibold hover:scale-105 hover:shadow-[0_0_15px_#25a244] transition text-sm sm:text-base">
          Voir mes projets
        </button>

        <button className="px-4 sm:px-6 py-3 cursor-pointer rounded-full border border-white/20 text-white hover:bg-white/10 hover:shadow-[0_0_10px_white/20] transition text-sm sm:text-base">
          Me contacter
        </button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-5 text-white/40 text-lg"
      >
        ↓ Scroll
      </motion.div>
    </section>
  );
};

export default Header;
