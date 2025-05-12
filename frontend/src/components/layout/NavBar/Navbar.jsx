import { useState, useRef, useEffect, useCallback } from "react";
import { Menu, X, Search, Globe } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import butiqForYouLogo from "@/assets/images/ButiQ Black SVG.svg";
import DropdownMenu from "../../dropdowns/Dropdown";
import {
  hotelsAndResortsDropdown,
  destinationsDropdown,
} from "../../../utils/Constant";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);

  // Track which dropdowns are open in mobile view
  const [openDropdowns, setOpenDropdowns] = useState({});

  // Toggle specific dropdown in mobile view
  const toggleMobileDropdown = (dropdownName) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [dropdownName]: !prev[dropdownName],
    }));
  };

  // Responsive logo sizing
  const [navProps, setNavProps] = useState({
    logoSize: "8rem",
    linkSize: "14px",
  });

  // Adjust the scroll factor to make logo shrinking less aggressive
  const handleScroll = useCallback(() => {
    if (isTablet || isMobile) return; // Don't adjust logo size on scroll for mobile/tablet

    const scrollY = window.scrollY;
    // Adjusted min size to 12rem and max to 18rem
    setNavProps({
      logoSize: `${Math.max(6, 8 - scrollY * 0.01)}rem`,
      linkSize: `${Math.max(13, 14 - scrollY * 0.02)}px`,
    });
  }, [isTablet, isMobile]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Handle resize for responsive logo sizing and detect device type
  useEffect(() => {
    const handleResize = () => {
      // Check device type
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setIsTablet(false);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setIsMobile(false);
        setIsTablet(true);
      } else {
        setIsMobile(false);
        setIsTablet(false);
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

  // Handle click outside search to close search focus
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle responsive search behavior for touch devices
  useEffect(() => {
    const handleTouchStart = (event) => {
      // For touch devices, we want to toggle search on touch of the search icon
      if (
        event.target.closest("button") &&
        searchContainerRef.current &&
        searchContainerRef.current.contains(event.target)
      ) {
        setIsSearchFocused((prev) => !prev);
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchTerm = searchInputRef.current?.value;
    // Handle search submission here
    console.log("Search submitted:", searchTerm);

    if (searchTerm && searchTerm.trim()) {
      // Here you would typically navigate to search results page
      // or trigger a search function
      alert(`Searching for: ${searchTerm}`); // Replace with actual search functionality
    }

    // Reset search after submission
    if (isMobile) {
      // On mobile don't auto-collapse the search
      searchInputRef.current.value = "";
    } else {
      // On desktop, collapse the search
      setIsSearchFocused(false);
    }
  };

  // Navbar data
  const navbarData = {
    links: [
      {
        text: "HOTELS & RESORTS",
        link: "/hotels",
        dropdownContent: hotelsAndResortsDropdown,
      },
      { text: "RESIDENCES", link: "/residences" },
      { logo: butiqForYouLogo, link: "/" },
      {
        text: "DESTINATIONS",
        link: "/destinations",
        dropdownContent: destinationsDropdown,
      },
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

  // Function to render dropdown content based on the format of the data
  const renderDropdownContent = (dropdownData, linkText) => {
    // Check if it's the destinations format (array with items property but no heading)
    const isDestinationsFormat =
      Array.isArray(dropdownData) &&
      dropdownData.length > 0 &&
      dropdownData[0].items &&
      !dropdownData[0].heading;

    // Handle destinations format (transform to a common format)
    if (isDestinationsFormat) {
      return (
        <div className="mb-3">
          <div>
            {dropdownData[0].items.map((item, j) => (
              <Link
                key={j}
                to={`/destinations${item.link}`}
                state={{ data: item }}
                className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-100"
                onClick={() => {
                  toggleMobileDropdown(linkText);
                  setIsNavOpen(false);
                }}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      );
    }

    // If it's an array of objects with text and link properties (simple list)
    if (
      Array.isArray(dropdownData) &&
      dropdownData.length > 0 &&
      dropdownData[0].text &&
      dropdownData[0].link
    ) {
      return dropdownData.map((item, i) => (
        <Link
          key={i}
          to={item.link}
          className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-100"
          onClick={() => {
            toggleMobileDropdown(linkText);
            setIsNavOpen(false);
          }}
        >
          {item.text}
        </Link>
      ));
    }

    // If it's an array of sections with heading and items (like hotelsAndResortsDropdown)
    if (
      Array.isArray(dropdownData) &&
      dropdownData.length > 0 &&
      dropdownData[0].heading &&
      dropdownData[0].items
    ) {
      return dropdownData.map((section, i) => (
        <div key={i} className="mb-3">
          <h3 className="text-xs font-bold px-8 py-1 text-gray-500 bg-gray-50">
            {section.heading}
          </h3>
          <div>
            {section.items.map((item, j) => (
              <Link
                key={j}
                to={item.link}
                className="block px-8 py-2 text-sm text-gray-600 hover:bg-gray-100"
                onClick={() => {
                  toggleMobileDropdown(linkText);
                  setIsNavOpen(false);
                }}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      ));
    }

    // Fallback - empty content
    return (
      <div className="px-8 py-2 text-sm text-gray-400">No items available</div>
    );
  };
  return (
    <header className="sticky top-0 left-0 right-0 bg-white z-50 font-[Raleway] text-[14px]">
      <nav className="mx-auto px-4">
        <div className="flex items-center justify-between h-[10vh]">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <div
              style={{ display: "flex", alignItems: "center" }}
              onMouseEnter={() => !isMobile && !isTablet && setIsNavOpen(true)}
              onMouseLeave={() => !isMobile && !isTablet && setIsNavOpen(false)}
            >
              <button
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsNavOpen(!isNavOpen)}
              >
                <Menu size={24} />
              </button>

              {isNavOpen && !isMobile && !isTablet && (
                <div className="absolute top-[2.6rem] left-[1%] bg-white shadow-lg py-2 w-48 mt-2 hidden lg:block">
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

            <select className="text-sm text-gray-600 border-none focus:ring-0 cursor-pointer">
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="de">DE</option>
              <option value="es">ES</option>
              <option value="it">IT</option>
              <option value="hi">HI</option>
              <option value="zh">ZH</option>
              <option value="ja">JA</option>
            </select>

            {/* Expandable Search Bar - Hidden on Mobile */}
            <form
              ref={searchContainerRef}
              className="hidden lg:flex items-center absolute left-[15vh]"
              onSubmit={handleSearchSubmit}
            >
              <div
                className={`flex items-center ${
                  isSearchFocused ? "border-b" : ""
                }  border-gray-300 transition-all duration-300 lg:w-48 w-full`}
                onMouseEnter={() => !isMobile && setIsSearchFocused(true)}
              >
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-900 focus:outline-none flex-shrink-0 p-1"
                  onClick={() => setIsSearchFocused(!isSearchFocused)}
                >
                  <Search size={20} />
                </button>
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  className={`ml-1 py-1 focus:outline-none bg-transparent transition-all duration-300 w-full ${
                    isSearchFocused ? "opacity-100" : "w-0 opacity-0 absolute"
                  }`}
                  onFocus={() => setIsSearchFocused(true)}
                />
                {isSearchFocused && (
                  <button
                    type="submit"
                    className="text-gray-600 hover:text-gray-900 focus:outline-none ml-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14m-7-7v14" />
                    </svg>
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Center Logo - Mobile and Tablet */}
          <div
            className={`flex ${
              isTablet ? "flex" : "lg:hidden"
            } items-center justify-center`}
          >
            <Link to="/" className="brand">
              <img
                src={butiqForYouLogo}
                alt="Logo"
                className="h-10 object-contain"
              />
            </Link>
          </div>

          {/* Center - Desktop Only */}
          <div
            className={`hidden ${
              isTablet ? "hidden" : "lg:flex"
            } items-center justify-center h-full`}
          >
            {navbarData.links.map((link, index) =>
              link.logo && link.link === "/" ? (
                <li
                  className="flex items-center justify-center"
                  key={index}
                  style={{
                    width: navProps.logoSize,
                    transition: "width 0.3s ease",
                  }}
                >
                  <Link to="/">
                    <img src={link.logo} alt="Logo" className="h-full w-full" />
                  </Link>
                </li>
              ) : (
                <li
                  key={index}
                  className="h-full px-2 lg:px-4 flex items-center group !w-auto justify-center"
                >
                  {link?.dropdownContent ? (
                    <div>
                      <NavLink
                        to={link.link}
                        className="text-gray-600 hover:text-gray-900 relative whitespace-nowrap"
                        style={{ fontSize: navProps.linkSize }}
                      >
                        {link.text}
                      </NavLink>

                      <div
                        className="absolute top-[90%] left-0 bg-white shadow-lg  w-max mt-1 transition-all duration-200 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                        style={{ transitionDelay: "0.1s" }}
                      >
                        <DropdownMenu
                          title={link.text}
                          menuItems={link?.dropdownContent}
                        />
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      to={link.link}
                      className="text-gray-600 hover:text-gray-900 whitespace-nowrap"
                      style={{ fontSize: navProps.linkSize }}
                    >
                      {link.text}
                    </NavLink>
                  )}
                </li>
              )
            )}
          </div>

          {/* Right Section */}
          <div className="flex items-center">
            {/* Desktop Reserve Button */}
            <Link
              to="/book"
              className={`bg-black text-white text-sm px-4 ${
                isTablet ? "hidden" : "hidden lg:flex"
              } items-center justify-center whitespace-nowrap h-[40px]`}
            >
              RESERVE
            </Link>
            {/* Mobile/Tablet Reserve Button */}
            <Link
              to="/book"
              className={`bg-black text-white px-4 py-2 text-sm ${
                isTablet ? "flex" : "lg:hidden flex"
              } items-center justify-center whitespace-nowrap`}
            >
              BOOK
            </Link>
          </div>
        </div>

        {/* Mobile/Tablet Navigation - FIXED THIS SECTION */}
        <div
          className={`${
            isNavOpen ? "h-[90vh] overflow-y-auto scrollbar-none" : "max-h-0"
          } ${
            isTablet ? "" : "lg:hidden"
          } overflow-hidden transition-all duration-300`}
        >
          <div className="py-4 space-y-4">
            {/* Mobile/Tablet Sidebar Search Bar */}
            <form onSubmit={handleSearchSubmit} className="px-4 pb-4 pt-2">
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-gray-50">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full py-3 px-4 focus:outline-none text-sm bg-transparent"
                />
                <button
                  type="submit"
                  className="text-gray-600 hover:text-gray-900 flex-shrink-0 bg-gray-100 h-full px-4 border-l border-gray-300"
                >
                  <Search size={18} />
                </button>
              </div>
            </form>

            {/* Main Navigation Links */}
            {navbarData.links.map((link, index) => {
              // Skip the logo item in mobile menu
              if (link.logo) return null;

              return (
                <div key={index}>
                  {link.dropdownContent ? (
                    <>
                      {/* Button to toggle dropdown */}
                      <button
                        className="w-full flex justify-between items-center px-4 py-2 text-gray-600 hover:bg-gray-100 whitespace-nowrap"
                        onClick={() => toggleMobileDropdown(link.text)}
                      >
                        <span>{link.text}</span>
                        <span>{openDropdowns[link.text] ? "−" : "+"}</span>
                      </button>

                      {/* Dropdown content - uses the dynamic rendering function */}
                      {openDropdowns[link.text] && (
                        <div className="bg-gray-50 py-2">
                          {renderDropdownContent(
                            link.dropdownContent,
                            link.text
                          )}
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
            })}

            {/* Sidebar links */}
            {navbarData.sidebarLinks.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-100 whitespace-nowrap"
                onClick={() => setIsNavOpen(false)}
              >
                {link.text.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
