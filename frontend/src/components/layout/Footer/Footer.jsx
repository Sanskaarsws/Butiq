import { Link } from "react-router-dom";
import xIcon from "@/assets/images/x.svg";
import facebookIcon from "@/assets/images/facebook.svg";
import instagramIcon from "@/assets/images/instagram.svg";
import linkedinIcon from "@/assets/images/linkedin.svg";
import youtubeIcon from "@/assets/images/youtube.svg";
import ButiqIcon from "@/assets/images/ButiqForYou2.jpg";

export default function Footer() {
  return (
    <footer className="bg-white text-black px-4 sm:px-6 md:px-8 lg:px-16 py-8 md:py-10 border-t border-gray-300">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-6 sm:mb-8 w-full items-start">
          <div className="md:col-span-2">
            <h3 className="text-lg sm:text-xl font-medium mb-2">Get inspired</h3>
          </div>
          <div className="md:col-span-7 lg:col-span-8">
            <p className="text-sm text-gray-600">
              To receive updates about exclusive experiences, events, new destinations and more,
              please register your interest.
            </p>
          </div>
          <div className="md:col-span-3 lg:col-span-2 flex justify-start md:justify-end">
            <button className="bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
              Sign Up
            </button>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-gray-200 mb-6 sm:mb-8"></div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8 sm:mb-10">
          {/* More Information Links */}
          <div className="lg:col-span-1">
            <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">More information</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="hover:text-black transition-colors cursor-pointer">Aman Group</li>
              <li className="pl-2 hover:text-black transition-colors cursor-pointer">- Aman</li>
              <li className="pl-2 hover:text-black transition-colors cursor-pointer">- Aman Essentials</li>
              <li className="pl-2 hover:text-black transition-colors cursor-pointer">- Aman Interiors</li>
              <li className="pl-2 hover:text-black transition-colors cursor-pointer">- Janu</li>
              <li className="hover:text-black transition-colors cursor-pointer">Gift Card</li>
              <li className="hover:text-black transition-colors cursor-pointer">Forthcoming Developments</li>
              <li className="hover:text-black transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-black transition-colors cursor-pointer">Leadership</li>
              <li className="hover:text-black transition-colors cursor-pointer">Sustainability</li>
              <li className="hover:text-black transition-colors cursor-pointer">Privacy Notice</li>
              <li className="hover:text-black transition-colors cursor-pointer">Cookie Policy</li>
              <li className="hover:text-black transition-colors cursor-pointer">Legal Notice</li>
              <li className="hover:text-black transition-colors cursor-pointer">Digital Accessibility</li>
              <li className="hover:text-black transition-colors cursor-pointer">Cookies Settings</li>
            </ul>
            <button className="border border-black px-4 py-2 text-sm mt-6 hover:bg-black hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
              Contact Us
            </button>
          </div>

          {/* Destinations */}
          <div className="lg:col-span-3">
            <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Destinations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
              {/* Americas & Caribbean + Europe & Africa */}
              <div>
                <h4 className="font-semibold mb-2 text-gray-800">Americas & Caribbean</h4>
                <ul className="text-gray-700 space-y-1">
                  {[
                    "Amanera, Dominican Republic",
                    "Amangani, United States",
                    "Amangiri, United States",
                    "Aman New York, United States",
                    "Amanyara, Turks & Caicos Islands",
                    "Amanvari, Opening 2025",
                    "Aman Miami Beach, Opening 2026",
                    "Aman Beverly Hills, Opening 2027",
                  ].map((item, index) => (
                    <li key={index} className="hover:text-black transition-colors cursor-pointer">{item}</li>
                  ))}
                </ul>
                
                <h4 className="font-semibold mt-6 mb-2 text-gray-800">Europe & Africa</h4>
                <ul className="text-gray-700 space-y-1">
                  {[
                    "Amanjena, Morocco",
                    "Aman Le Mélézin, France",
                    "Amanruya, Turkey",
                    "Aman Sveti Stefan, Montenegro",
                    "Aman Venice, Italy",
                    "Amanzoe, Greece",
                    "Aman Rosa Alpina, Opening 2025",
                    "Aman Spa at The Connaught, United Kingdom",
                  ].map((item, index) => (
                    <li key={index} className="hover:text-black transition-colors cursor-pointer">{item}</li>
                  ))}
                </ul>
              </div>

              {/* Asia */}
              <div>
                <h4 className="font-semibold mb-2 text-gray-800">Asia</h4>
                <ul className="text-gray-700 space-y-1">
                  {[
                    "Amanbagh, India",
                    "Amandari, Indonesia",
                    "Amandayan, China",
                    "Amandira, Indonesia",
                    "Amanfayun, China",
                    "Amankila, Indonesia",
                    "Amankora, Bhutan",
                    "Aman Kyoto, Japan",
                    "Aman-i-Khas, India",
                    "Amanjiwo, Indonesia",
                    "Amansara, Cambodia",
                    "Aman Summer Palace, China",
                    "Aman Villas at Nusa Dua, Indonesia",
                    "Amanwana, Indonesia",
                    "Amanyanggyun, China",
                  ].map((item, index) => (
                    <li key={index} className="hover:text-black transition-colors cursor-pointer">{item}</li>
                  ))}
                </ul>
              </div>

              {/* Asia Continued */}
              <div className="sm:col-span-2 lg:col-span-1">
                <h4 className="font-semibold mb-2 text-gray-800">Asia (continued)</h4>
                <ul className="text-gray-700 space-y-1">
                  {[
                    "Amangalla, Sri Lanka",
                    "Amanemu, Japan",
                    "Aman Residences, Tokyo, Japan",
                    "Amantaka, Laos",
                    "Aman Tokyo, Japan",
                    "Amanoi, Vietnam",
                    "Amanpulo, Philippines",
                    "Amanpuri, Thailand",
                    "Amanwella, Sri Lanka",
                    "Aman Nai Lert Bangkok, Coming soon",
                    "Aman Niseko, Opening 2027",
                  ].map((item, index) => (
                    <li key={index} className="hover:text-black transition-colors cursor-pointer">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-t border-gray-200 pt-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <img 
              src={ButiqIcon} 
              alt="butiQ logo" 
              className="h-8 sm:h-10 w-auto"
              loading="lazy"
            />
          </div>

          {/* Social Icons */}
          <div className="flex items-center mb-4 md:mb-0 order-3 md:order-2">
            <span className="mr-3 text-sm whitespace-nowrap">Follow us on:</span>
            <div className="flex">
              {[
                { icon: facebookIcon, alt: "Facebook", url: "#" },
                { icon: linkedinIcon, alt: "LinkedIn", url: "#" },
                { icon: youtubeIcon, alt: "YouTube", url: "#" },
                { icon: instagramIcon, alt: "Instagram", url: "#" },
                { icon: xIcon, alt: "X/Twitter", url: "#" },
              ].map((social, index) => (
                <Link 
                  key={index} 
                  to={social.url}
                  className="hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black rounded-full"
                >
                  <img 
                    src={social.icon} 
                    alt={social.alt} 
                    className="sm:w-7 sm:h-7 lg:w-12 lg:h-12"
                    loading="lazy"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-600 order-2 md:order-3">
            Copyright 2025, Aman Group S.a.r.l.
          </p>
        </div>
      </div>
    </footer>
  );
}