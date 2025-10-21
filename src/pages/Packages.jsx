import React from "react";
import { motion } from "framer-motion";
import { Gift, Briefcase, Star, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Packages = () => {
  const navigate = useNavigate();

  const packages = [
    {
      id: "starter",
      icon: <Gift size={40} />,
      name: "Starter Package",
      desc: "Perfect for small businesses launching their online presence.",
    },
    {
      id: "professional",
      icon: <Briefcase size={40} />,
      name: "Professional Package",
      desc: "Designed for growing companies that need advanced functionality.",
    },
    {
      id: "business",
      icon: <Star size={40} />,
      name: "Business Package",
      desc: "Ideal for established businesses aiming to scale fast.",
    },
    {
      id: "enterprise",
      icon: <Award size={40} />,
      name: "Enterprise Package",
      desc: "Custom-built enterprise-grade digital solutions for large-scale needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-blue-500 mb-8"
      >
        Our Packages
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 150 }}
            onClick={() => navigate(`/packages/${pkg.id}`)}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg text-center hover:shadow-blue-500/30 transition cursor-pointer"
          >
            <div className="flex justify-center text-blue-400 mb-4">{pkg.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{pkg.name}</h3>
            <p className="text-gray-400 text-sm">{pkg.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
