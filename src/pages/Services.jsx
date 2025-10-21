import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Code, Globe, Rocket, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const [selectedService, setSelectedService] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedService) {
      setFormSubmitted(true);
      // Simulate redirect after login/signup success
      setTimeout(() => navigate(`/services/${selectedService.toLowerCase().replace(/\s/g, "-")}`), 1000);
    } else {
      alert("Please select a service before continuing!");
    }
  };

  const services = [
    { name: "Web Development", icon: <Code size={20} /> },
    { name: "Digital Marketing", icon: <Globe size={20} /> },
    { name: "Branding", icon: <Rocket size={20} /> },
    { name: "Production House", icon: <Video size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-blue-500 mb-2">Our Services</h1>
        <p className="text-gray-400">
          Choose a service to explore its exclusive features and opportunities.
        </p>
      </motion.div>

      {/* DROPDOWN MENU */}
      <div className="relative w-full max-w-xs mb-6">
        <select
          onChange={(e) => handleServiceSelect(e.target.value)}
          value={selectedService}
          className="w-full bg-gray-900 text-white p-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
        >
          <option value="">-- Select a Service --</option>
          {services.map((service, i) => (
            <option key={i} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
      </div>

      {/* SUBMIT FORM */}
      <form onSubmit={handleSubmit} className="text-center">
        <input
          type="email"
          placeholder="Enter your email to continue"
          className="w-64 bg-gray-900 text-white p-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none mb-4"
          required
        />
        <br />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Continue
        </button>
      </form>

      {/* SUCCESS MESSAGE */}
      {formSubmitted && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-400 mt-6"
        >
          Redirecting to {selectedService} page...
        </motion.p>
      )}
    </div>
  );
};

export default Services;

