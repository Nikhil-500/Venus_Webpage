import ContactForm from "../component/ContactForm";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

function Contact() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-950 to-purple-950 text-gray-200 pt-24">
      {/* SECTION */}
      <section className="h-72 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/70"></div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-5xl font-bold text-white z-10"
        >
          Contact <span className="text-purple-500">Us</span>
        </motion.h1>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 p-8">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-b from-gray-900 to-gray-800 p-8 rounded-2xl shadow-lg border border-purple-700/40"
        >
          <h2 className="text-2xl font-semibold mb-4 text-purple-400">
            Let’s work together
          </h2>
          <p className="text-gray-400 mb-6">
            We’d love to hear from you and discuss your next digital project.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-purple-400 mt-1" />
              <p>
                Gowda Samaj Road, Behind Sub-Registrar Office, Kushalnagar - 571234,
                Coorg, Karnataka.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-purple-400 mt-1" />
              <p>+91 9482816456</p>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-purple-400 mt-1" />
              <p>info@venussofttech.com</p>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="text-purple-400 mt-1" />
              <p>
                Mon–Fri: 09:00–20:00 <br /> Sat–Sun: 10:00–18:30
              </p>
            </div>
          </div>
        </motion.div>

        <ContactForm />
      </section>

      {/* GOOGLE MAP SECTION */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="p-8"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.274664708126!2d75.96482527499358!3d12.455248727853437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba53d7d5c9eddb5%3A0x9f23b91f5077d91b!2sVenus%20Soft%20Technologies!5e0!3m2!1sen!2sin!4v1729412146793!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg border-2 border-purple-700 w-full h-[400px] shadow-lg shadow-purple-900/50"
        ></iframe>
      </motion.section>
    </div>
  );
}

export default Contact;
