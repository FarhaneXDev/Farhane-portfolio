"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 md:px-[10%] text-white w-full">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-10"
        >
          Qui suis-je ?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Left — texte personnel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-white/70 text-lg"
          >
            <p>
              Je construis des applications web depuis plusieurs années — pas
              par hasard, mais parce que j'aime voir une idée devenir quelque
              chose qu'on peut vraiment utiliser.
            </p>
            <p>
              J'interviens à tous les niveaux : de la première maquette jusqu'au
              déploiement. Startups en phase de lancement, entrepreneurs avec un
              projet en tête, boîtes qui veulent moderniser leurs outils — nous
              travaillons ensemble.
            </p>
            <p>
              Ce qui m'importe : que le code reste lisible, que l'interface soit
              agréable sans être tape-à-l'œil, et que le produit puisse grossir
              sans tout refaire.
            </p>
          </motion.div>

          {/* Right — cartes */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="grid gap-6"
          >
            <div className="p-6 rounded-2xl border border-white/10 backdrop-blur-md hover:shadow-[0_0_20px_#25a24420] transition">
              <h3 className="text-xl font-semibold mb-2">
                Ce avec quoi je travaille
              </h3>
              <p className="text-white/60">
                Next.js, Prisma, PostgreSQL — une stack que j’utilise pour
                construire des applications web performantes, scalables et
                prêtes à être déployées.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 backdrop-blur-md hover:shadow-[0_0_20px_#25a24420] transition">
              <h3 className="text-xl font-semibold mb-2">Ce que je livre</h3>
              <p className="text-white/60">
                Apps web, APIs, dashboards, SaaS — des produits complets, et
                prêts à servir.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 backdrop-blur-md hover:shadow-[0_0_20px_#25a24420] transition">
              <h3 className="text-xl font-semibold mb-2">Ce que j'évite</h3>
              <p className="text-white/60">
                Le code jetable, les promesses floues, les livraisons sans
                documentation. Je préfère prendre le temps de bien faire.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
