import "./Navbar.css";
import { useState, useRef, useEffect, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import { navbarData, destinationsDropdown, hotelsAndResortsDropdown } from "@/utils/Constant";
import { Button } from "@material-tailwind/react";
import DropdownMenu from "@/components/dropdowns/Dropdown";
import MultilanguageInput from "@/components/ui/language-input/MultilanguageInput";
import crossIcon from "@/assets/images/cross-svgrepo-com.svg";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);
  const inputRef = useRef(null);
  const sidebarRef = useRef(null);
  const navRef = useRef();

  const [navProps, setNavProps] = useState({
    imageSize: "10rem",
    linkSize: "14px",
    btnProps: { height: "40px", font: "16px", padding: "unset" },
  });

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setNavProps(() => ({
      imageSize: `${Math.max(8, 10 - scrollY * 0.02)}rem`,
      linkSize: `${Math.max(12, 14 - scrollY * 0.02)}px`,
      btnProps: {
        height: `${Math.max(30, 40 - scrollY * 0.02)}px`,
        font: `${Math.max(12, 16 - scrollY * 0.02)}px`,
      },
    }));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header className="navigation" ref={navRef}>
      <nav className="flex justify-between w-full items-center">
        {/* Sidebar & Language Input */}
        <div ref={sidebarRef} className="absolute left-0 flex items-center z-8">
          {/* Burger Menu */}
          <figure className="burgerIcon_dropDown_container">
            <svg id="burgerIcon" width="24" height="18" className="cursor-pointer">
              <path d="M1 1H23" stroke="#808080" strokeWidth="1" strokeLinecap="round" />
              <path d="M1 9H23" stroke="#808080" strokeWidth="1" strokeLinecap="round" />
              <path d="M1 17H23" stroke="#808080" strokeWidth="1" strokeLinecap="round" />
            </svg>
            <div className="sidebar">
              <ul className="p-4">
                {["About Us", "Partner With Us", "Offers", "Stories", "Contact Us"].map((text, i) => (
                  <li key={i}>
                    <Link to={text === "Contact Us" ? "/contact" : `/${text.toLowerCase().replace(/\s/g, "-")}`}>
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </figure>
          <span className="text-sm mx-7">
            <MultilanguageInput />
          </span>
          {/* Search Input */}
          <div className="searchInputBox relative">
            <figure className="searchIcon">
              <svg
                id="searchIconId"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                onMouseEnter={() => inputRef.current?.focus()}
              >
                <path
                  d="M21 21L16.657 16.657M16.657 16.657C19.657 13.657 19.657 8.343 16.657 5.343C13.657 2.343 8.343 2.343 5.343 5.343C2.343 8.343 2.343 13.657 5.343 16.657C8.343 19.657 13.657 19.657 16.657 16.657Z"
                  stroke="#808080"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </figure>
            <input ref={inputRef} className="searchInput searchInput-alt" type="text" required />
            <span className="searchInput-border searchInput-border-alt"></span>
          </div>
        </div>

        {/* Searchbar Overlay */}
        <div className={`searchbar ${isSearchbarOpen ? "openSearchbar" : "closeSearchbar"}`}>
          <div className="relative flex">
            <div className="bg-white w-[30rem] h-screen p-8">
              <div className="flex justify-end">
                <img src={crossIcon} alt="Close" onClick={() => setIsSearchbarOpen(false)} />
              </div>
              <div className="mt-8">
                <input
                  className="w-full border-b border-gray-400 bg-transparent"
                  placeholder="Enter Search Term"
                  type="text"
                />
              </div>
              <div className="flex justify-end mt-4">
                <Button className="rounded-none px-6 py-2">SEARCH</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-list ${isNavOpen ? "py-2" : "hidden"}`}>
          {navbarData.links.map((link, index) => {
            if (index === 2) {
              return (
                <li key="brand" className="brand mx-4" style={{ width: navProps.imageSize }}>
                  <Link to="/">
                    <img src={navbarData.brandLogo} alt="Vistaar Logo" />
                  </Link>
                </li>
              );
            }
            const isDropdown = link.text === "HOTELS & RESORTS" || link.text === "DESTINATIONS";
            return (
              <li key={index} className={`mx-4 ${isDropdown ? "dropdown-container" : ""}`}>
                {isDropdown ? (
                  <DropdownMenu title={link.text} menuItems={link.text === "HOTELS & RESORTS" ? hotelsAndResortsDropdown : destinationsDropdown} />
                ) : (
                  <NavLink to={link.link} onClick={() => setIsNavOpen(false)} className="text-sm">
                    {link.text}
                  </NavLink>
                )}
              </li>
            );
          })}
          {/* Reserve Button */}
          <li className="reserveBtn">
            <Link to="/book">
              <Button className="rounded-none px-6 py-2">{`RESERVE`}</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
