// import React from "react";
// import { motion } from "framer-motion";
// import { Code, Globe, Rocket, Brush } from "lucide-react";

// const Home = () => {
//   return (
//     <div className="bg-black text-gray-200 overflow-hidden">
//       {/* HERO SECTION */}
//       <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pt-24 relative">
//         <motion.div
//           initial={{ opacity: 0, x: -80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-xl space-y-6 text-center md:text-left"
//         >
//           <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
//             Transforming Ideas Into{" "}
//             <span className="text-blue-500">Digital Success</span>
//           </h1>
//           <p className="text-gray-400 text-lg">
//             At <span className="text-yellow-400 font-semibold">Venus Soft Technologies</span>, we craft stunning web experiences, scalable applications, and impactful digital marketing solutions to help your business thrive online.
//           </p>
//           <motion.a
//             href="/contact"
//             whileHover={{ scale: 1.05 }}
//             className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-semibold shadow-lg transition"
//           >
//             Get Started
//           </motion.a>
//         </motion.div>

//         <motion.img
//           src="/images/landing-hero.png"
//           alt="Digital Innovation"
//           initial={{ opacity: 0, x: 80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="w-full md:w-[450px] mt-10 md:mt-0 drop-shadow-2xl"
//         />
//       </section>

//       {/* SERVICES SECTION */}
//       <section className="py-20 bg-gray-900">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center text-3xl md:text-4xl font-bold mb-12"
//         >
//           Our <span className="text-blue-500">Services</span>
//         </motion.h2>

//         <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-8">
//           {[
//             { icon: <Code size={36} />, title: "Web Development", desc: "Modern, responsive, and scalable web apps for your business." },
//             { icon: <Globe size={36} />, title: "Digital Marketing", desc: "Grow your reach with SEO, social media, and ad campaigns." },
//             { icon: <Brush size={36} />, title: "UI/UX Design", desc: "Elegant and intuitive designs that drive user engagement." },
//             { icon: <Rocket size={36} />, title: "Branding", desc: "Build a strong, memorable identity for your company." },
//           ].map((service, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05, y: -5 }}
//               transition={{ type: "spring", stiffness: 200 }}
//               className="bg-gray-800 rounded-2xl p-6 text-center shadow-md hover:shadow-xl"
//             >
//               <div className="flex justify-center mb-4 text-blue-500">{service.icon}</div>
//               <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
//               <p className="text-gray-400 text-sm">{service.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ABOUT SECTION */}
//       <section className="py-20 px-8 md:px-20 bg-gradient-to-b from-black to-gray-950 flex flex-col md:flex-row items-center gap-10">
//         <motion.img
//           src="/images/about-venus.png"
//           alt="Venus Soft Team"
//           initial={{ opacity: 0, x: -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="w-full md:w-[400px] rounded-2xl shadow-lg"
//         />
//         <motion.div
//           initial={{ opacity: 0, x: 80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="max-w-xl text-center md:text-left"
//         >
//           <h2 className="text-3xl font-bold mb-4 text-white">
//             About <span className="text-blue-500">Venus Soft</span>
//           </h2>
//           <p className="text-gray-400 mb-6">
//             We are a creative digital agency specializing in innovative web solutions, branding, and marketing strategies.
//             Our passionate team helps brands shine in the digital world through technology and design.
//           </p>
//           <motion.a
//             href="/about"
//             whileHover={{ scale: 1.05 }}
//             className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-full transition"
//           >
//             Learn More
//           </motion.a>
//         </motion.div>
//       </section>

//       {/* CTA SECTION */}
//       <motion.section
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//         className="py-16 bg-blue-600 text-white text-center"
//       >
//         <h2 className="text-3xl font-bold mb-4">Let’s Build Something Amazing Together</h2>
//         <p className="text-blue-100 mb-6">
//           Partner with Venus Soft Technologies and turn your ideas into reality.
//         </p>
//         <a
//           href="/contact"
//           className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition"
//         >
//           Contact Us
//         </a>
//       </motion.section>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, Rocket, Brush } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-black text-gray-200 overflow-hidden">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pt-24 relative">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Transforming Ideas Into{" "}
            <span className="text-purple-500">Digital Success</span>
          </h1>
          <p className="text-gray-400 text-lg">
            At{" "}
            <span className="text-purple-400 font-semibold">
              Venus Soft Technologies
            </span>
            , we craft stunning web experiences, scalable applications, and
            impactful digital marketing solutions to help your business thrive
            online.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-white font-semibold shadow-lg transition"
          >
            Get Started
          </motion.a>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=900&q=80"
          alt="Digital Innovation"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-[450px] mt-10 md:mt-0 drop-shadow-2xl rounded-xl"
        />
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-gray-900">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-bold mb-12"
        >
          Our <span className="text-purple-500">Services</span>
        </motion.h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-8">
          {[
            {
              icon: <Code size={36} />,
              title: "Web Development",
              desc: "Modern, responsive, and scalable web apps for your business.",
            },
            {
              icon: <Globe size={36} />,
              title: "Digital Marketing",
              desc: "Grow your reach with SEO, social media, and ad campaigns.",
            },
            {
              icon: <Brush size={36} />,
              title: "UI/UX Design",
              desc: "Elegant and intuitive designs that drive user engagement.",
            },
            {
              icon: <Rocket size={36} />,
              title: "Branding",
              desc: "Build a strong, memorable identity for your company.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-gray-800 rounded-2xl p-6 text-center shadow-md hover:shadow-lg border border-purple-800/40"
            >
              <div className="flex justify-center mb-4 text-purple-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-8 md:px-20 bg-gradient-to-b from-black to-gray-950 flex flex-col md:flex-row items-center gap-10">
        <motion.img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
          alt="Venus Soft Team"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-[400px] rounded-2xl shadow-lg border border-purple-700/30"
        />
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl text-center md:text-left"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            About <span className="text-purple-500">Venus Soft</span>
          </h2>
          <p className="text-gray-400 mb-6">
            We are a creative digital agency specializing in innovative web
            solutions, branding, and marketing strategies. Our passionate team
            helps brands shine in the digital world through technology and
            design.
          </p>
          <motion.a
            href="/about"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-full transition"
          >
            Learn More
          </motion.a>
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-purple-700 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          Let’s Build Something Amazing Together
        </h2>
        <p className="text-purple-100 mb-6">
          Partner with Venus Soft Technologies and turn your ideas into reality.
        </p>
        <a
          href="/contact"
          className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full hover:bg-purple-100 transition"
        >
          Contact Us
        </a>
      </motion.section>
    </div>
  );
};

export default Home;
