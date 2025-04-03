import { useState, useEffect, useRef, useMemo } from "react";
import footerImg from "../../assets/images/Butiq-Footer1.png";
import "./Footer.css";

export default function Footer() {
  const slides = useMemo(() => ["we're all", "asked to", "do things", "we don't", "like"], []);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideIntervalRef = useRef(null);

  useEffect(() => {
    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 1000);

    return () => clearInterval(slideIntervalRef.current);
  }, [slides.length]);

  return (
    <footer>
      <figure>
        <img src={footerImg} alt="Footer Image" loading="lazy" />
      </figure>
    </footer>
  );
}
