import { Users } from "lucide-react";
import * as motion from "motion/react-client";
export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 py-12 text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex justify-center"
      >
        {[
          "À",
          "\u00A0",
          "P",
          "r",
          "o",
          "p",
          "o",
          "s",
          "\u00A0",
          "d",
          "e",
          "\u00A0",
          "T",
          "e",
          "c",
          "h",
          "B",
          "l",
          "o",
          "g",
        ].map((word, i) => (
          <motion.h1
            key={i}
            variants={item}
            className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent text-center pb-10"
          >
            {word}
          </motion.h1>
        ))}
      </motion.div>

      <p className="text-slate-300 mb-6">
        Bienvenue sur <strong>TechBlog</strong> – un projet de blog tech conçu
        pour expérimenter React, Tailwind CSS et les bonnes pratiques modernes
        de développement frontend.
      </p>

      <p className="text-slate-400 mb-4">
        Ce site a été créé comme un terrain d'entraînement personnel. Il propose
        une structure complète avec pages, navigation, affichage de contenu
        dynamique, système de catégories, filtres par popularité et date, etc.
      </p>

      <p className="text-slate-400 mb-4">
        Vous y trouverez des articles fictifs sur le développement web, des
        composants réutilisables, un système de routage, ainsi que l’utilisation
        de bibliothèques modernes comme <code>lucide-react</code> ou{" "}
        <code>react-router</code>.
      </p>

      <div className="mt-8 border-t border-slate-700 pt-6 grid md:grid-cols-2 gap-6">
        <div className="flex items-start space-x-3">
          <Users className="h-6 w-6 text-blue-400 mt-1" />
          <div>
            <h2 className="text-lg font-semibold">Projet personnel</h2>
            <p className="text-slate-400 text-sm">
              Développé dans le but de pratiquer la création de composants
              React, le design avec tailswind ,l'animation avec motion , et la
              manipulation de données JSON.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
