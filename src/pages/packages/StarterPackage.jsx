import React from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";

const StarterPackage = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl text-center"
      >
        <div className="flex justify-center mb-4 text-purple-500">
          <Gift size={50} />
        </div>
        <h1 className="text-4xl font-bold text-purple-400 mb-4">Starter Package</h1>
        <p className="text-gray-400 text-lg mb-6">
          The perfect choice for small businesses taking their first step into the digital world. 
          Includes responsive web design, basic SEO, and essential branding support.
        </p>
      </motion.div>
    </div>
  );
};

export default StarterPackage;
