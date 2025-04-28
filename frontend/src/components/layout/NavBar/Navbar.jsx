import { useState, useRef, useEffect, useCallback } from "react";
import { Menu, X, Search, Globe } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import butiqForYouLogo from "../../../assets/images/ButiqBlack.svg";

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

  const [navProps, setNavProps] = useState({
    imageSize: "10rem",
    linkSize: "14px",
    btnHeight: "40px",
  });

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setNavProps({
      imageSize: `${Math.max(8, 10 - scrollY * 0.02)}rem`,
      linkSize: `${Math.max(12, 14 - scrollY * 0.02)}px`,
      btnHeight: `${Math.max(30, 40 - scrollY * 0.02)}px`,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left Section */}
          <div className="flex items-center space-x-6">
            <div className="relative">
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
            </div>
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
            <Link to="/" className="brand" style={{ width: "8rem" }}>
              <img
                src={navbarData.brandLogo}
                alt="Logo"
                className="h-10 object-contain"
              />
            </Link>
          </div>

          {/* Center - Desktop Only */}
          <div className="hidden lg:flex items-center space-x-8">
            {navbarData.links.slice(0, 2).map((link, index) => (
              <div key={index} className="relative group">
                {link.isDropdown ? (
                  <div className="flex items-center">
                    <NavLink
                      to={link.link}
                      className="text-gray-600 hover:text-gray-900"
                      style={{ fontSize: navProps.linkSize }}
                    >
                      {link.text}
                    </NavLink>
                  </div>
                ) : (
                  <NavLink
                    to={link.link}
                    className="text-gray-600 hover:text-gray-900"
                    style={{ fontSize: navProps.linkSize }}
                  >
                    {link.text}
                  </NavLink>
                )}
                {link.isDropdown && (
                  <div className="absolute top-full left-0 bg-white shadow-lg py-2 w-48 mt-2 hidden group-hover:block hover:block transition-all duration-200">
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
                )}
              </div>
            ))}

            {/* Logo - Desktop */}
            <Link
              to="/"
              className="brand mx-8"
              style={{ width: navProps.imageSize }}
            >
              <img
                src={navbarData.brandLogo}
                alt="Logo"
                className="h-12 object-contain"
              />
            </Link>

            {navbarData.links.slice(2).map((link, index) => (
              <div key={index} className="relative group">
                {link.isDropdown ? (
                  <div className="flex items-center">
                    <NavLink
                      to={link.link}
                      className="text-gray-600 hover:text-gray-900"
                      style={{ fontSize: navProps.linkSize }}
                    >
                      {link.text}
                    </NavLink>
                  </div>
                ) : (
                  <NavLink
                    to={link.link}
                    className="text-gray-600 hover:text-gray-900"
                    style={{ fontSize: navProps.linkSize }}
                  >
                    {link.text}
                  </NavLink>
                )}
                {link.isDropdown && (
                  <div className="absolute top-full left-0 bg-white shadow-lg py-2 w-48 mt-2 hidden group-hover:block hover:block transition-all duration-200">
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
                )}
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            <Link
              to="/book"
              className="bg-black text-white px-6 hidden lg:flex items-center justify-center"
              style={{ height: navProps.btnHeight }}
            >
              RESERVE
            </Link>
            {/* Mobile Reserve Button */}
            <Link
              to="/book"
              className="bg-black text-white px-4 py-2 text-sm lg:hidden flex items-center justify-center"
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
                          className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100"
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
                        className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
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
