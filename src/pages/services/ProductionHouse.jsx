import React from "react";
import { motion } from "framer-motion";
import { Camera, Film, Mic2 } from "lucide-react";

const ProductionHouse = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center px-8 py-20"
    >
      <h1 className="text-4xl font-bold text-purple-500 mb-6">
        Production House
      </h1>

      <p className="text-gray-400 max-w-2xl text-center mb-10 leading-relaxed">
        We bring stories to life through cinematic visuals and creative storytelling.{" "}
        Our production team handles everything from concept to final cut.
      </p>

      <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
        {[
          {
            icon: <Camera size={36} />,
            title: "Photography",
            desc: "Capture your brand’s essence through stunning professional photography.",
          },
          {
            icon: <Film size={36} />,
            title: "Video Production",
            desc: "Create promotional and corporate videos that leave a lasting impact.",
          },
          {
            icon: <Mic2 size={36} />,
            title: "Audio & Voiceovers",
            desc: "Deliver high-quality sound design, podcasts, and narration services.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg text-center border border-gray-800 hover:border-purple-500 transition"
          >
            <div className="text-purple-500 flex justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductionHouse;

