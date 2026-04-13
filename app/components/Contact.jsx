"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 md:px-[10%] text-white w-full">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold"
          >
            On travaille ensemble ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-white/50 max-w-xs text-sm md:text-right"
          >
            Un projet, une question, une idée <br />à cadrer — je réponds
          </motion.p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 md:gap-10 items-start">
          {/* Left — infos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 flex flex-col gap-4 sm:gap-6"
          >
            {[
              {
                label: "Email",
                value: "tonemail@gmail.com",
                href: "mailto:tonemail@gmail.com",
              },
              {
                label: "LinkedIn",
                value: "linkedin.com/in/tonprofil",
                href: "https://linkedin.com",
              },
              {
                label: "GitHub",
                value: "github.com/tonprofil",
                href: "https://github.com",
              },
            ].map(({ label, value, href }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="text-xs text-white/30 uppercase tracking-widest">
                  {label}
                </span>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-[#25a244] transition-colors duration-200"
                >
                  {value}
                </a>
              </div>
            ))}

            <div className="mt-4 pt-6 border-t border-white/10">
              <p className="text-xs text-white/30 leading-relaxed">
                Disponible pour des missions freelance, des collaborations
                ponctuelles ou des projets long terme.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 w-full"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center gap-4 py-16 text-center"
              >
                <div className="w-10 h-10 rounded-full border border-[#25a244]/40 flex items-center justify-center text-[#25a244] text-lg">
                  ✓
                </div>
                <p className="text-white/70 text-sm">
                  Message reçu. Je reviens vers vous rapidement.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nom"
                    required
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#25a244] outline-none transition text-sm placeholder:text-white/30"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#25a244] outline-none transition text-sm placeholder:text-white/30"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Sujet — ex : Développement d'un MVP"
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#25a244] outline-none transition text-sm placeholder:text-white/30"
                />

                <textarea
                  rows={5}
                  placeholder="Décrivez votre projet ou votre besoin..."
                  required
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#25a244] outline-none transition resize-none text-sm placeholder:text-white/30"
                />

                <div className="flex items-center justify-between gap-4 mt-1">
                  <p className="text-white/25 text-xs">
                    Réponse garantie sous 24h.
                  </p>
                  <button
                    type="submit"
                    className="px-6 py-3 cursor-pointer rounded-xl bg-[#25a244] text-sm font-semibold hover:scale-105 hover:shadow-[0_0_20px_#25a244] transition-all duration-300"
                  >
                    Envoyer →
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
