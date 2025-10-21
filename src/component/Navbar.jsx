// import { motion } from "framer-motion";
// import { Menu } from "lucide-react";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7 }}
//       className="fixed w-full z-50 bg-black/70 backdrop-blur-md text-white shadow-lg"
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
//         <h1 className="text-2xl font-bold text-yellow-400">VENUS</h1>
//         <ul className="hidden md:flex space-x-6 text-sm uppercase tracking-wide">
//           {["Home", "About", "Services", "Packages", "Contact"].map((item) => (
//             <li key={item}>
//               <Link to={`/${item.toLowerCase()}`} className="hover:text-blue-400 transition">{item}</Link>
//             </li>
//           ))}
//         </ul>

//         <button onClick={() => setOpen(!open)} className="md:hidden">
//           <Menu />
//         </button>
//       </div>

//       {open && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-black text-center py-4 space-y-2 md:hidden"
//         >
//           {["Home", "About", "Services", "Packages", "Contact"].map((item) => (
//             <Link key={item} to={`/${item.toLowerCase()}`} className="block text-white hover:text-blue-400">
//               {item}
//             </Link>
//           ))}
//         </motion.div>
//       )}
//     </motion.nav>
//   );
// }

// export default Navbar;
import { motion, AnimatePresence } from "framer-motion";
import {Menu,ChevronDown,Code,Globe,Rocket,Video,Gift,Star,Briefcase,Award} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);
  const navigate = useNavigate();

  const services = [
    {
      name: "Web Development",
      path: "/services/web-development",
      icon: <Code size={16} />,
    },
    {
      name: "Digital Marketing",
      path: "/services/digital-marketing",
      icon: <Globe size={16} />,
    },
    {
      name: "Branding",
      path: "/services/branding",
      icon: <Rocket size={16} />,
    },
    {
      name: "Production House",
      path: "/services/production-house",
      icon: <Video size={16} />,
    },
  ];

  const packages = [
    { name: "Starter Package", path: "/packages/starter", icon: <Gift size={16} /> },
    { name: "Professional Package", path: "/packages/professional", icon: <Briefcase size={16} /> },
    { name: "Business Package", path: "/packages/business", icon: <Star size={16} /> },
    { name: "Enterprise Package", path: "/packages/enterprise", icon: <Award size={16} /> },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed w-full z-50 bg-black/70 backdrop-blur-md text-white shadow-lg border-b border-purple-800/20"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1
          className="text-2xl font-bold text-purple-500 cursor-pointer"
          onClick={() => navigate("/")}
        >
          VENUS
        </h1>

        <ul className="hidden md:flex space-x-6 text-sm uppercase tracking-wide">
          <li>
            <Link to="/" className="hover:text-purple-500 transition font-mono">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-purple-500 transition font-mono">
              About
            </Link>
          </li>

          {/* SERVICES DROPDOWN */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center hover:text-purple-500 transition font-mono">
              Services <ChevronDown size={14} className="ml-1" />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute mt-3 bg-gray-900 border border-purple-700/40 rounded-xl shadow-lg w-56"
                >
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => navigate(service.path)}
                      className="w-full flex items-center gap-2 px-4 py-3 text-left text-gray-300 hover:bg-gray-800 hover:text-purple-400 transition"
                    >
                      {service.icon}
                      {service.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* PACKAGES DROPDOWN */}
          <li
            className="relative"
            onMouseEnter={() => setPackagesOpen(true)}
            onMouseLeave={() => setPackagesOpen(false)}
          >
            <button className="flex items-center hover:text-purple-500 transition font-mono">
              Packages <ChevronDown size={14} className="ml-1" />
            </button>

            <AnimatePresence>
              {packagesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute mt-3 bg-gray-900 border border-purple-700/40 rounded-xl shadow-lg w-56"
                >
                  {packages.map((pkg, index) => (
                    <button
                      key={index}
                      onClick={() => navigate(pkg.path)}
                      className="w-full flex items-center gap-2 px-4 py-3 text-left text-gray-300 hover:bg-gray-800 hover:text-purple-400 transition"
                    >
                      {pkg.icon}
                      {pkg.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-white transition bg-purple-600 hover:bg-purple-700 px-4 py-3 rounded-lg font-bold"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* MOBILE MENU ICON */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <Menu />
        </button>
      </div>
    </motion.nav>
  );
}

export default Navbar;
