import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Default styles
import "react-date-range/dist/theme/default.css"; // Default theme
import { Box, Button, Select, MenuItem } from "@mui/material";
import "./Book.css";
import { Link } from "react-router-dom";
import Header from "@/components/Templates/Header/Header";
import expBanner from "@/assets/images/photo-1613247197993-cc5e8c4cdbcd.avif";
import ProgressBar from "@/components/common/ProgressBar/ProgressBar";
const Book = () => {
  const [selectedHotel, setSelectedHotel] = useState("");
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <Header title="BOOKING" bannerImg={expBanner} />
      </div>

      {/* Progress Bar */}
      <ProgressBar steps={["HOTEL", "ROOMS", "BOOK"]} activeStep={0} />

      <Box className="booking-container">
        <h1 className="text-start w-full text-[36px] font-[Raleway]">
          Lets Book Your Escape
        </h1>

        {/* Hotel Selection Dropdown */}
        <Select
          value={selectedHotel}
          onChange={(e) => setSelectedHotel(e.target.value)}
          displayEmpty
          className="hotel-select"
          sx={{
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
          }}
        >
          <MenuItem value="">Choose Hotel</MenuItem>
          <MenuItem value="Hotel A">Hotel A</MenuItem>
          <MenuItem value="Hotel B">Hotel B</MenuItem>
        </Select>

        {/* Always Visible Date Range Picker */}
        <Box className="calendar-container">
          <DateRange
            ranges={dateRange}
            onChange={(ranges) => setDateRange([ranges.selection])}
            showMonthAndYearPickers={false} // Allows selecting months/years
            showPreview={true} // Shows a preview of selected range
            moveRangeOnFirstSelection={false}
          />
        </Box>

        {/* Check Availability Button */}
        <Link to="/book/rooms">
          <Button
            variant="outlined"
            className="check-button"
            sx={{ borderRadius: 0, border: "1px solid black", color: "black" }}
          >
            CHECK AVAILABILITY
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default Book;
