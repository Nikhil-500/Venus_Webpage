import React from "react";
import { motion } from "framer-motion";
import { Globe, TrendingUp, Share2 } from "lucide-react";

const DigitalMarketing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center px-8 py-20"
    >
      <h1 className="text-4xl font-bold text-purple-500 mb-6">
        Digital Marketing
      </h1>
      <p className="text-gray-400 max-w-2xl text-center mb-10 leading-relaxed">
        Grow your business online with powerful digital strategies.{" "}
        We help you connect with your audience and turn clicks into conversions.
      </p>

      <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
        {[
          {
            icon: <Globe size={36} />,
            title: "SEO Optimization",
            desc: "Boost your visibility and rank higher on Google with our proven SEO strategies.",
          },
          {
            icon: <TrendingUp size={36} />,
            title: "Social Media Campaigns",
            desc: "Engage your audience with creative and data-driven social media marketing.",
          },
          {
            icon: <Share2 size={36} />,
            title: "Content Marketing",
            desc: "Deliver value-driven content that builds trust and drives organic traffic.",
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

export default DigitalMarketing;
