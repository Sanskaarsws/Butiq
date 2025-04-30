import { useState, useRef, useEffect, useCallback } from "react";
import { Menu, X, Search, Globe } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import butiqForYouLogo from "@/assets/images/ButiQ Black SVG.svg";

const navbarData = {
  brandLogo: butiqForYouLogo,
  links: [
    { text: "HOTELS & RESORTS", link: "/hotels", isDropdown: true },
    { text: "RESIDENCES", link: "/residences" },
    { text: "DESTINATIONS", link: "/destinations", isDropdown: true },
    { text: "EXPERIENCES", link: "/experiences" },
  ],
  sidebarLinks: [
    { text: "About Us", link: "/about-us" },
    { text: "Partner With Us", link: "/partner-with-us" },
    { text: "Offers", link: "/offers" },
    { text: "Stories", link: "/stories" },
    { text: "Contact Us", link: "/contact" },
  ],
};

const hotelsAndResortsDropdown = [
  { text: "Luxury Hotels", link: "/hotels/luxury" },
  { text: "Beach Resorts", link: "/hotels/beach" },
  { text: "Mountain Retreats", link: "/hotels/mountain" },
];

const destinationsDropdown = [
  { text: "Asia", link: "/destinations/asia" },
  { text: "Europe", link: "/destinations/europe" },
  { text: "Americas", link: "/destinations/americas" },
];

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);
  const inputRef = useRef(null);

  // Set more reasonable logo sizes based on viewport
  const [logoSize, setLogoSize] = useState("14rem"); // Adjusted from 16rem to 14rem
  const linkSize = "14px"; // Fixed size for links
  const btnHeight = "40px"; // Fixed height for button

  // Adjust the scroll factor to make logo shrinking less aggressive
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    // Adjust min size to 10rem (from 12rem) and max to 14rem (from 16rem)
    setLogoSize(`${Math.max(10, 14 - scrollY * 0.01)}rem`);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Handle resize for responsive logo sizing
  useEffect(() => {
    const handleResize = () => {
      // Check for tablet size range (roughly 768px to 1024px)
      if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
        setLogoSize("10rem"); // Smaller size for tablets
      } else if (window.innerWidth > 1024) {
        setLogoSize("14rem"); // Full size for desktop
      }
    };

    // Initialize size based on current viewport
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close sidebar when clicking outside
  useEffect(() => {
    if (isNavOpen) {
      const handleClickOutside = (event) => {
        if (!event.target.closest("nav")) {
          setIsNavOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isNavOpen]);

  return (
    <header className="sticky top-0 left-0 right-0 bg-white z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[10vh]">
          {/* Left Section */}
          <div className="flex items-center space-x-6">
            <button
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              {isNavOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {isNavOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg py-2 w-48 mt-2 hidden lg:block">
                {navbarData.sidebarLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.link}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                    onClick={() => setIsNavOpen(false)}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            )}

            <button
              onClick={() => setIsSearchbarOpen(true)}
              className="text-gray-600 hover:text-gray-900"
            >
              <Search size={20} />
            </button>
            <select className="text-sm text-gray-600 border-none focus:ring-0 cursor-pointer">
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="de">DE</option>
            </select>
          </div>

          {/* Center Logo - Mobile */}
          <div className="flex lg:hidden items-center justify-center">
            <Link to="/" className="brand">
              <img
                src={navbarData.brandLogo}
                alt="Logo"
                className="h-10 object-contain" // Back to h-10 for better mobile fit
              />
            </Link>
          </div>

          {/* Center - Desktop Only */}
          <div className="hidden lg:flex items-center justify-center h-full">
            {navbarData.links.slice(0, 2).map((link, index) => (
              <div
                key={index}
                className="h-full flex items-center px-2 lg:px-4 group !w-unset justify-center"
              >
                {link.isDropdown ? (
                  <div>
                    <NavLink
                      to={link.link}
                      className="text-gray-600 hover:text-gray-900 relative whitespace-nowrap"
                      style={{ fontSize: linkSize }}
                    >
                      {link.text}
                    </NavLink>
                    <div
                      className="absolute top-full left-0 bg-white shadow-lg py-2 w-48 mt-1 transition-all duration-200 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                      style={{ transitionDelay: "0.1s" }}
                    >
                      {hotelsAndResortsDropdown.map((item, i) => (
                        <Link
                          key={i}
                          to={item.link}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {item.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={link.link}
                    className="text-gray-600 hover:text-gray-900 whitespace-nowrap"
                    style={{ fontSize: linkSize }}
                  >
                    {link.text}
                  </NavLink>
                )}
              </div>
            ))}

            {/* Logo - Desktop */}
            <div
              className="mx-2 lg:mx-6 flex items-center justify-center"
              style={{ width: logoSize, transition: "width 0.3s ease" }}
            >
              <Link to="/" className="w-full flex justify-center">
                <img
                  src={navbarData.brandLogo}
                  alt="Logo"
                  className="mx-auto h-auto w-full max-w-full" // Added max-w-full to prevent overflow
                />
              </Link>
            </div>

            {navbarData.links.slice(2).map((link, index) => (
              <div
                key={index}
                className="h-full flex items-center px-2 lg:px-4 group !w-unset justify-center"
              >
                {link.isDropdown ? (
                  <div>
                    <NavLink
                      to={link.link}
                      className="text-gray-600 hover:text-gray-900 relative whitespace-nowrap"
                      style={{ fontSize: linkSize }}
                    >
                      {link.text}
                    </NavLink>
                    <div
                      className="absolute top-full left-0 bg-white shadow-lg py-2 w-48 mt-1 transition-all duration-200 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                      style={{ transitionDelay: "0.1s" }}
                    >
                      {destinationsDropdown.map((item, i) => (
                        <Link
                          key={i}
                          to={item.link}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {item.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={link.link}
                    className="text-gray-600 hover:text-gray-900 whitespace-nowrap"
                    style={{ fontSize: linkSize }}
                  >
                    {link.text}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            <Link
              to="/book"
              className="bg-black text-white px-4 lg:px-6 hidden lg:flex items-center justify-center whitespace-nowrap"
              style={{ height: btnHeight }}
            >
              RESERVE
            </Link>
            {/* Mobile Reserve Button */}
            <Link
              to="/book"
              className="bg-black text-white px-4 py-2 text-sm lg:hidden flex items-center justify-center whitespace-nowrap"
            >
              BOOK
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isNavOpen ? "max-h-screen" : "max-h-0"
          } lg:hidden overflow-hidden transition-all duration-300`}
        >
          <div className="py-4 space-y-4">
            {[...navbarData.links, ...navbarData.sidebarLinks].map(
              (link, index) => {
                // For mobile, we'll keep the click functionality
                const [isThisDropdownOpen, setIsThisDropdownOpen] =
                  useState(false);
                const dropdownItems =
                  link.text === "HOTELS & RESORTS"
                    ? hotelsAndResortsDropdown
                    : link.text === "DESTINATIONS"
                    ? destinationsDropdown
                    : [];

                return (
                  <div key={index}>
                    {link.isDropdown ? (
                      <>
                        <button
                          className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 whitespace-nowrap"
                          onClick={() =>
                            setIsThisDropdownOpen(!isThisDropdownOpen)
                          }
                        >
                          {link.text}
                        </button>
                        {isThisDropdownOpen && (
                          <div className="bg-gray-50 py-2">
                            {dropdownItems.map((item, i) => (
                              <Link
                                key={i}
                                to={item.link}
                                className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-100"
                                onClick={() => {
                                  setIsThisDropdownOpen(false);
                                  setIsNavOpen(false);
                                }}
                              >
                                {item.text}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={link.link}
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-100 whitespace-nowrap"
                        onClick={() => setIsNavOpen(false)}
                      >
                        {link.text}
                      </Link>
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      {isSearchbarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white w-full max-w-md h-screen p-8">
            <div className="flex justify-end">
              <button
                onClick={() => setIsSearchbarOpen(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                <X size={24} />
              </button>
            </div>
            <div className="mt-8">
              <input
                ref={inputRef}
                type="text"
                placeholder="Enter search term..."
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
                autoFocus
              />
            </div>
            <div className="flex justify-end mt-6">
              <button className="px-6 py-2 bg-black text-white hover:bg-gray-800 transition-colors">
                SEARCH
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}