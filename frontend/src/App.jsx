import "./App.css";

import Navbar from "./components/layout/NavBar/Navbar";
import Footer from "./components/layout/Footer/Footer";

import Home from "./pages/home/Home";
import Experiences from "./pages/Experiences";
import Residences from "./pages/Residences";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import PartnerWithUs from "./pages/partner-with-us/PatnerWithUs";
import Book from "./pages/book/Book";
import RoomSection from "./pages/RoomSection";
import BookingSummary from "./pages/BookingSummary";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./hooks/useScrollToTop";
import DestinationTemplate from "./components/Templates/Destination/DestinationTemplate";

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
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/residences" element={<Residences />} />
        <Route
          path="/destinations/:location"
          element={<DestinationTemplate />}
        />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partner-with-us" element={<PartnerWithUs />} />
        <Route path="/book" element={<Book />} />
        <Route path="/book/rooms" element={<RoomSection />} />
        <Route
          path="/book/rooms/booking-summary"
          element={<BookingSummary />}
        />
      </Routes>
      <Footer />
    </>
  );
}
