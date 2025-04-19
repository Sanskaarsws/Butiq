import { useState } from "react";
import { Button, IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import ProgressBar from "@/components/common/ProgressBar/ProgressBar";

const BookingSummary = () => {
  const [showQwikCilver, setShowQwikCilver] = useState(false);
  const navigate = useNavigate();

  const toggleQwikCilver = () => setShowQwikCilver((prev) => !prev);

  const PricingRow = ({ label, value, bold, uppercase }) => (
    <div
      className={`flex justify-between border-b border-dashed border-gray-500 pb-2 ${
        bold ? "font-bold" : ""
      } ${uppercase ? "uppercase" : ""} text-sm ${
        bold ? "text-gray-800" : "text-gray-600"
      }`}
    >
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );

  const QwikCilverForm = () => (
    <div className="mt-4 bg-gray-300 p-4 space-y-3 border-b border-dashed border-gray-500 pb-2">
      <QwikInput label="ENTER CARD NUMBER" />
      <QwikInput label="ENTER PIN" type="password" />
      <div className="flex justify-between items-center">
        <p className="text-xs font-semibold text-gray-700">
          CHECK CARD BALANCE
        </p>
        <Button
          variant="contained"
          className="!bg-white !text-black border border-black text-xs px-4 py-2"
        >
          CLICK HERE TO RETRIEVE BALANCE
        </Button>
      </div>
      <QwikInput label="AMOUNT TO BE REDEEMED" />
      <div className="flex justify-end">
        <Button
          variant="contained"
          className="!bg-black !text-white text-xs px-6 py-2"
        >
          ADD PAYMENT
        </Button>
      </div>
    </div>
  );

  const QwikInput = ({ label, type = "text" }) => (
    <div>
      <p className="text-xs font-semibold text-gray-700">{label}</p>
      <TextField fullWidth variant="outlined" size="small" type={type} />
    </div>
  );

  return (
    <>
      <ProgressBar steps={["HOTEL", "ROOMS", "BOOK"]} activeStep={2} />

      {/* Header Section */}
      <div className="bg-gray-300 mx-auto my-4 p-6 w-[75%] roomSection_pageStyle">
        <h2 className="text-sm font-normal mb-2 border-b border-dashed border-gray-500 pb-2">
          YOUR STAY
        </h2>
        <h2 className="text-lg font-bold mb-2">
          THE POSTCARD CUELIM, SOUTH GOA
        </h2>
        <p className="text-sm">
          WEDNESDAY, FEBRUARY 26, 2025 &nbsp; —————— &nbsp; THURSDAY, FEBRUARY
          27, 2025
        </p>
      </div>

      {/* Booking Summary Card */}
      <div className="mx-auto w-[75%] mb-[5rem] bg-gray-300 p-6 shadow-md text-gray-900 roomSection_pageStyle">
        {/* Room Details */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-4">
          <div>
            <h2 className="text-sm font-semibold text-gray-900">
              ROOM 1 ( 2 ADULT, 0 CHILD ) - LUXURY ROOM WITH PATIO
            </h2>
            <p className="text-gray-600 text-xs">INR 19000/NIGHT X 1</p>
          </div>
          <IconButton>
            <DeleteIcon className="text-gray-500" />
          </IconButton>
        </div>

        {/* Pricing Summary */}
        <div className="mt-4 space-y-2">
          <PricingRow label="Total" value="INR 19000" bold uppercase />
          <PricingRow label="5% Service Charge" value="INR 950" />
          <PricingRow label="Goods and Services Tax" value="INR 3591" />
          <PricingRow label="Net Amount" value="INR 23541" bold />
        </div>

        {/* Advance Payment Info */}
        <div className="mt-4 border-b border-dashed border-gray-500 pb-2">
          <div className="mt-5 w-fit px-4 bg-black text-white py-3 text-center text-sm">
            50% ADVANCE PAYMENT ( INR 11771 )
          </div>
        </div>

        {/* QwikCilver Section */}
        <div className="mt-3 border-b border-dashed border-gray-500 pb-2">
          <Button
            variant="contained"
            onClick={toggleQwikCilver}
            className="!bg-black !text-white px-4 py-2 font-semibold text-xs !rounded-none"
          >
            QWIKCILVER {showQwikCilver ? "▼" : "▶"}
          </Button>
        </div>

        {showQwikCilver && <QwikCilverForm />}

        {/* Payable Amount */}
        <div className="mt-5 border-b border-dashed border-gray-500 pb-2">
          <div className="flex justify-between text-lg text-gray-900">
            <span className="uppercase">Payable Amount</span>
            <span>INR 11771</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-4 flex gap-2 justify-between">
          <div>
            <Button
              variant="contained"
              className="!bg-black !text-white py-3 text-xs font-semibold !mr-4 !rounded-none"
            >
              Add Room +
            </Button>
            <Button
              variant="contained"
              className="!bg-black !text-white text-xs font-semibold !rounded-none"
            >
              Enter Promo Code
            </Button>
          </div>
          <Button
            onClick={() => navigate("/")}
            variant="contained"
            className="!bg-black !text-white w-full py-3 font-semibold text-sm uppercase basis-[10%] !rounded-none"
          >
            PAY NOW
          </Button>
        </div>
      </div>
    </>
  );
};

export default BookingSummary;
