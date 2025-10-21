import React from "react";
import { motion } from "framer-motion";
import { Palette, PenTool, Sparkles } from "lucide-react";

const Branding = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center px-8 py-20"
    >
      <h1 className="text-4xl font-bold text-purple-500 mb-6">Branding</h1>
      <p className="text-gray-400 max-w-2xl text-center mb-10 leading-relaxed">
        Your brand is your identity.  
        We help you create a consistent and memorable image that resonates with your audience.
      </p>

      <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
        {[
          {
            icon: <Palette size={36} />,
            title: "Logo Design",
            desc: "Crafting unique and memorable logos that capture your brand essence.",
          },
          {
            icon: <PenTool size={36} />,
            title: "Brand Strategy",
            desc: "Developing strong brand foundations that align with your business goals.",
          },
          {
            icon: <Sparkles size={36} />,
            title: "Visual Identity",
            desc: "Building a cohesive visual style that strengthens brand recognition.",
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

export default Branding;
