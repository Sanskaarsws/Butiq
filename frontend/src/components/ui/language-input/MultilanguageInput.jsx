import { useState } from "react";
import Select from "react-select";

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  // Language options with short codes
  const languageOptions = [
    { value: "EN", label: "EN" },
    { value: "FR", label: "FR" },
    { value: "DE", label: "DE" },
    { value: "ES", label: "ES" },
    { value: "IT", label: "IT" },
    { value: "HI", label: "HI" },
    { value: "ZH", label: "ZH" },
    { value: "JA", label: "JA" },
    { value: "RU", label: "RU" },
    { value: "PT", label: "PT" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "none", // Light grey border
      boxShadow: "none", // Removes blue focus border
      backgroundColor: "#fcfcfa",
      "&:hover": {
        backgroundColor: "#f0f0f0", // Grey background on hover
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#f0f0f0" : "white", // Grey hover effect
      color: "black",
    }),
    menuList: (provided) => ({
      ...provided,
      scrollbarWidth: "none", // ✅ Removes scrollbar in Firefox
      msOverflowStyle: "none", // ✅ Removes scrollbar in IE/Edge
      "&::-webkit-scrollbar": {
        display: "none", // ✅ Hides scrollbar in Chrome/Safari
      },
    }),
  };

  return (
    <div className="LanguageSelector">
      {/* ✅ Language Dropdown with Short Codes */}
      <Select
        options={languageOptions}
        onChange={(option) => setSelectedLanguage(option)}
        placeholder="EN"
        styles={customStyles}
        components={{ DropdownIndicator: null }}
      />
    </div>
  );
}
