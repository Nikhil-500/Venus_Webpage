import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Heart } from "lucide-react";

const features = [
  {
    icon: <Users size={40} />,
    title: "Expert Team",
    desc: "A passionate group of developers, designers, and strategists working together to create impactful digital products.",
  },
  {
    icon: <Target size={40} />,
    title: "Client-Focused",
    desc: "Our clients are at the heart of everything we do — we tailor each project to their goals and vision.",
  },
  {
    icon: <Lightbulb size={40} />,
    title: "Innovative Solutions",
    desc: "We leverage the latest technologies and trends to keep your business ahead of the curve.",
  },
  {
    icon: <Heart size={40} />,
    title: "Quality & Care",
    desc: "From design to deployment, every detail is handled with precision and dedication.",
  },
];

const About = () => {
  return (
    <div className="bg-black text-gray-200 min-h-screen py-20 px-8 md:px-20">
      {/* ABOUT HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          About <span className="text-purple-500">Venus Soft Technologies</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We are a creative digital agency that blends design, technology, and innovation
          to craft meaningful online experiences for our clients worldwide.
        </p>
      </motion.div>

      {/* COMPANY FEATURES */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {features.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1, rotate: 2 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition text-center border border-gray-800 hover:border-purple-500"
          >
            <div className="text-purple-500 flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* COMPANY MISSION SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-20 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-purple-500 mb-4">Our Mission</h2>
        <p className="text-gray-400">
          At <span className="text-white font-semibold">Venus Soft Technologies</span>, our mission is to empower businesses through technology — 
          providing creative, high-performance, and scalable solutions that drive success in the digital era.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
