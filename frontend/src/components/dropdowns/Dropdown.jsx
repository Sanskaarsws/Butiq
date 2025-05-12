import { Link } from "react-router-dom";

export default function DropdownMenu({ title, menuItems = [] }) {
  return (
    <div>
      <ul className=" bg-white shadow-lg z-10">
        {menuItems.map((section, index) => (
          <li key={index} className="">
            <h1 className="text-sm text-gray-600 font-normal px-2 mt-4 ">
              {section.heading}
            </h1>
            <ul className="flex flex-col list-none ">
              {section.items?.map((item, idx) => (
                <li
                  key={idx}
                  className={`px-4 py-2 text-gray-600  hover:bg-[#f3f4f6] ${
                    section.heading === "OPENING SOON"
                      ? "cursor-default opacity-50"
                      : ""
                  }
                    
                  `}
                >
                  <Link
                    to={
                      title === "DESTINATIONS"
                        ? `/destinations${item.link}`
                        : item.link
                    }
                    state={{ data: item }}
                    style={{ fontFamily: "Glacial Indifference" }}
                    className={` text-sm text-gray-600 ${
                      section.heading === "OPENING SOON"
                        ? "pointer-events-none"
                        : "cursor-pointer"
                    }`}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
