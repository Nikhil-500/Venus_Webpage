import React from "react";
import { motion } from "framer-motion";

const WebDevelopment = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center p-10"
  >
    <h1 className="text-4xl font-bold text-purple-500 mb-4">
      Web Development
    </h1>
    <p className="text-gray-400 max-w-2xl text-center leading-relaxed">
      We build high-performance, scalable websites using the latest technologies.{" "}
      Our solutions include <span className="text-purple-400">eCommerce</span>,{" "}
      <span className="text-purple-400">business websites</span>, and{" "}
      <span className="text-purple-400">custom applications</span> tailored to your goals.
    </p>
  </motion.div>
);

export default WebDevelopment;
