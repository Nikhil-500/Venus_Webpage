// import { motion } from "framer-motion";
// import { useState } from "react";

// function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "", lastName: "", email: "", phone: "", topic: "", message: "",
//   });

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message sent successfully!");
//     setFormData({ name: "", lastName: "", email: "", phone: "", topic: "", message: "" });
//   };

//   return (
//     <motion.form
//       onSubmit={handleSubmit}
//       initial={{ opacity: 0, x: 80 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8 }}
//       className="bg-gray-900 p-8 rounded-2xl shadow-lg space-y-4"
//     >
//       <div className="grid grid-cols-2 gap-4">
//         <input name="name" value={formData.name} onChange={handleChange} placeholder="First Name" className="p-2 bg-gray-800 text-white rounded" />
//         <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="p-2 bg-gray-800 text-white rounded" />
//       </div>
//       <div className="grid grid-cols-2 gap-4">
//         <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="p-2 bg-gray-800 text-white rounded" />
//         <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="p-2 bg-gray-800 text-white rounded" />
//       </div>
//       <select name="topic" value={formData.topic} onChange={handleChange} className="w-full p-2 bg-gray-800 text-white rounded">
//         <option>Select Topic</option>
//         <option>Web Design</option>
//         <option>Marketing</option>
//         <option>Support</option>
//       </select>
//       <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className="w-full p-2 bg-gray-800 text-white rounded h-28"></textarea>
//       <motion.button whileHover={{ scale: 1.05 }} className="bg-blue-600 px-5 py-2 rounded-lg text-white hover:bg-blue-700 transition">
//         Submit Message
//       </motion.button>
//     </motion.form>
//   );
// }

// export default ContactForm;

import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.data.redirectURL) {
        window.location.href = res.data.redirectURL;
      } else {
        alert("Message sent successfully!");
      }

      setFormData({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        topic: "",
        message: "",
      });
    } catch (err) {
      console.error("Error submitting form:", err.response?.data || err.message);
      alert("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-950 p-8 rounded-2xl shadow-lg space-y-4 border border-purple-800"
    >
      {/* Name fields */}
      <div className="grid grid-cols-2 gap-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="First Name"
          className="p-2 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="p-2 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Contact info */}
      <div className="grid grid-cols-2 gap-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="p-2 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="p-2 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Topic */}
      <select
        name="topic"
        value={formData.topic}
        onChange={handleChange}
        className="w-full p-2 bg-gray-900 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        required
      >
        <option value="">Select Topic</option>
        <option value="Web Design">Web Design</option>
        <option value="Marketing">Marketing</option>
        <option value="Support">Support</option>
      </select>

      {/* Message */}
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        className="w-full p-2 bg-gray-900 text-white rounded h-28 focus:outline-none focus:ring-2 focus:ring-purple-500"
        required
      ></textarea>

      {/* Submit button */}
      <motion.button
        whileHover={!loading ? { scale: 1.05 } : {}}
        disabled={loading}
        className={`${
          loading
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-purple-600 hover:bg-purple-700"
        } px-5 py-2 rounded-lg text-white transition w-full font-semibold shadow-md shadow-purple-900/30`}
      >
        {loading ? "Sending..." : "Submit Message"}
      </motion.button>
    </motion.form>
  );
}

export default ContactForm;
