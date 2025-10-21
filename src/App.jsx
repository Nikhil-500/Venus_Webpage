import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Packages from "./pages/Packages";

// Service Subpages
import WebDevelopment from "./pages/services/WebDevelopment";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import Branding from "./pages/services/Branding";
import ProductionHouse from "./pages/services/ProductionHouse";

//Packages Subpages
import StarterPackage from "./pages/packages/StarterPackage";
import ProfessionalPackage from "./pages/packages/ProfessionalPackage";
import BusinessPackage from "./pages/packages/BusinessPackage";
import EnterprisePackage from "./pages/packages/EnterprisePackage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        <Routes>
          {/* General Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Services */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/branding" element={<Branding />} />
          <Route path="/services/production-house" element={<ProductionHouse />} />

          {/* Packages */}
          <Route path="/packages" element={<Packages />} /> 
          <Route path="/packages/starter" element={<StarterPackage />} />
          <Route path="/packages/professional" element={<ProfessionalPackage />} />
          <Route path="/packages/business" element={<BusinessPackage />} />
          <Route path="/packages/enterprise" element={<EnterprisePackage />} />

        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

