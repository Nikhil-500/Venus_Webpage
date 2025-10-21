import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-950 text-gray-300 py-12"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 p-4">
        <div>
          <h2 className="text-xl font-bold text-green-600 mb-3">VENUS</h2>
          <p className="text-sm">A full-service digital marketing company helping businesses grow online.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-purple-400">Services</a></li>
            <li><a href="#" className="hover:text-purple-400">Career</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <p>info@venussofttech.com</p>
          <p>+91 9482816456</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Subscribe</h3>
          <div className="flex">
            <input type="email" placeholder="Email address" className="p-2 rounded-l bg-gray-800 text-white" />
            <button className="bg-purple-600 hover:bg-purple-700 px-4 rounded-r">Sign Up</button>
          </div>
        </div>
      </div>
      <p className="text-center text-xs mt-6 text-gray-500">© 2025 Venus Soft Tech. All rights reserved.</p>
    </motion.footer>
  );
}

export default Footer;
