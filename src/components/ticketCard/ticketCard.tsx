import React from "react";

export type TicketInfoProps = {
  movieName: string;
  ticketCount: string;
  ticketPrice: number;
  sessionTime: string;
  seatNumbers: string[];
  buffetProducts?: string;
  buffetPrice?: number;
  movieTheater: string;
  isPaymentSuccess?: boolean;
};

const TicketCard: React.FC<TicketInfoProps> = ({
  movieName,
  ticketCount,
  ticketPrice,
  sessionTime,
  seatNumbers,
  buffetProducts = "None",
  buffetPrice = 0,
  movieTheater,
  isPaymentSuccess = false,
}) => {
  return (
    <div className="flex justify-center items-center">
      {/* Ticket Container */}
      <div className="flex items-stretch relative">
        {/* Left Section */}
        <div
          className={`bg-black text-white shadow-md p-4 rounded-l-lg text-left`}
          style={{
            width: "fit-content",
            borderRight: "2px dotted rgba(255, 255, 255, 0.31)",
          }}
        >
          {/* Content */}
          <div className="flex flex-col space-y-1">
            <p className="text-[10px] text-white/90">
              Movie: <span className="font-medium">{movieName}</span>
            </p>
            <p
              className="text-[10px] font-medium text-white"
              style={{ textShadow: "0px 0px 6px rgba(255, 255, 255, 0.8)" }}
            >
              Ticket Count: {ticketCount}{" "}
              <span className="text-[#33B528]">(${ticketPrice})</span>
            </p>
            <p className="text-[10px] text-white/90">Session: {sessionTime}</p>
            <p
              className="text-[10px] font-medium text-white"
              style={{ textShadow: "0px 0px 6px rgba(255, 255, 255, 0.8)" }}
            >
              Seat Number: {seatNumbers.join(", ")}
            </p>
            <p className="text-[10px] text-white/90">
              Buffet Products: {buffetProducts}{" "}
              <span className="text-[#33B528]">(${buffetPrice})</span>
            </p>
            <p className="text-[10px] text-white/90">Movie Theater: {movieTheater}</p>
          </div>
        </div>

        {/* Right Section */}
        <div
          className={`bg-black text-white shadow-md rounded-r-lg ${
            isPaymentSuccess ? "translate-x-2 translate-y-2" : ""
          }`}
          style={{
            width: "fit-content",
            borderLeft: "2px dotted rgba(255, 255, 255, 0.31)",
            display: "flex",
            padding: "16px", 
            // Ensure equal height with left div
          }}
        >
          <div className="flex flex-col items-center">
            <p className="text-[10px] underline mb-3">Total Amount</p>
            <p
              className="text-[#33B528] text-[36px] font-bold"
              style={{ textShadow: "0px 0px 6px rgba(51, 181, 40, 0.8)" }}
            >
              ${ticketPrice + buffetPrice}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
