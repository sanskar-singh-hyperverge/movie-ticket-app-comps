import React, { useState } from "react";

interface SeatSelectorProps {
  rows: number;
  seatsPerRow: number;
  maxSelections: number;
  gap?: number;
  seatSize?: string;
  colors?: {
    booked: string;
    available: string;
    selected: string;
  };
  availableSeats?: Record<string, "booked" | "available">;
}

const SeatSelector: React.FC<SeatSelectorProps> = ({
  rows,
  seatsPerRow,
  maxSelections,
  gap = 2,
  seatSize = "40px",
  colors = {
    booked: "bg-gray-600",
    available: "bg-purple-500",
    selected: "bg-orange-500",
  },
  availableSeats = {},
}) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSeatClick = (seatId: string) => {
    const status = availableSeats[seatId] || "booked";
    console.log(status);
    if (status === "booked") return;

    const isSelected = selectedSeats.includes(seatId);
    let updatedSelections;

    if (isSelected) {
      updatedSelections = selectedSeats.filter((id) => id !== seatId);
    } else if (selectedSeats.length < maxSelections) {
      updatedSelections = [...selectedSeats, seatId];
    } else {
      return;
    }

    setSelectedSeats(updatedSelections);
  };

  return (
    <div className="space-y-4">
      {Array.from({ length: rows }, (_, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          style={{ gap: `${gap * 4}px` }}
          className="flex justify-center"
        >
          {Array.from({ length: seatsPerRow }, (_, seatIndex) => {
            const seatId = `R${rowIndex + 1}S${seatIndex + 1}`;
            const status = availableSeats[seatId] || "booked";
            const isSelected = selectedSeats.includes(seatId);

            const seatColor =
              status === "booked"
                ? colors.booked
                : isSelected
                ? colors.selected
                : colors.available;

            return (
              <div
                key={seatId}
                onClick={() => handleSeatClick(seatId)}
                className={`${seatColor} rounded-md cursor-pointer hover:opacity-80`}
                style={{
                  width: seatSize,
                  height: seatSize,
                }}
              ></div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default SeatSelector;
