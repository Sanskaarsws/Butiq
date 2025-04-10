import "./App.css";

import Navbar from "@/components/layout/NavBar/Navbar";
import Footer from "@/components/layout/Footer/Footer";

import Home from "@/pages/Home";
import Residences from "@/pages/Residences";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/hooks/useScrollToTop";
import DestinationTemplate from "@/components/Templates/Destination/DestinationTemplate";

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

// -------------------- Routing --------------------
function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/residences" element={<Residences />} />
        <Route
          path="/destination/:location"
          element={<DestinationTemplate />}
        />
      </Routes>
      <Footer />
    </>
  );
}
