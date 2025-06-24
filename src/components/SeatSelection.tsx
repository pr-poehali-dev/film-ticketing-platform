import { useState } from "react";
import { Seat } from "@/types";
import Icon from "@/components/ui/icon";

interface SeatSelectionProps {
  seats: Seat[];
  onSeatSelect: (seatId: string) => void;
  selectedSeats: string[];
}

const SeatSelection = ({
  seats,
  onSeatSelect,
  selectedSeats,
}: SeatSelectionProps) => {
  const rows = Math.max(...seats.map((seat) => seat.row));
  const seatsPerRow = Math.max(...seats.map((seat) => seat.number));

  const getSeatByPosition = (row: number, number: number) => {
    return seats.find((seat) => seat.row === row && seat.number === number);
  };

  const getSeatStyle = (seat: Seat | undefined) => {
    if (!seat) return "invisible";

    const baseStyle =
      "w-8 h-8 rounded-lg border-2 cursor-pointer transition-all hover:scale-110 flex items-center justify-center text-xs font-bold";

    if (seat.isOccupied) {
      return `${baseStyle} bg-red-500 border-red-600 cursor-not-allowed`;
    }

    if (selectedSeats.includes(seat.id)) {
      return `${baseStyle} bg-accent border-accent text-white`;
    }

    switch (seat.type) {
      case "vip":
        return `${baseStyle} bg-yellow-100 border-yellow-300 hover:bg-yellow-200 text-yellow-800`;
      case "premium":
        return `${baseStyle} bg-purple-100 border-purple-300 hover:bg-purple-200 text-purple-800`;
      default:
        return `${baseStyle} bg-gray-100 border-gray-300 hover:bg-gray-200 text-gray-800`;
    }
  };

  const totalPrice = selectedSeats.reduce((sum, seatId) => {
    const seat = seats.find((s) => s.id === seatId);
    return sum + (seat?.price || 0);
  }, 0);

  return (
    <div className="bg-card rounded-lg p-6">
      <div className="mb-6">
        <div className="bg-gradient-to-r from-gray-400 to-gray-300 h-2 rounded-full mb-2"></div>
        <p className="text-center text-sm text-muted-foreground">ЭКРАН</p>
      </div>

      <div className="mb-6">
        <div
          className="grid gap-2"
          style={{ gridTemplateColumns: `repeat(${seatsPerRow}, 1fr)` }}
        >
          {Array.from({ length: rows }, (_, rowIndex) => {
            const currentRow = rowIndex + 1;
            return Array.from({ length: seatsPerRow }, (_, seatIndex) => {
              const seatNumber = seatIndex + 1;
              const seat = getSeatByPosition(currentRow, seatNumber);

              return (
                <div
                  key={`${currentRow}-${seatNumber}`}
                  className="flex items-center justify-center"
                >
                  {seatIndex === 0 && (
                    <div className="w-6 text-center text-sm text-muted-foreground mr-2">
                      {currentRow}
                    </div>
                  )}
                  <button
                    className={getSeatStyle(seat)}
                    onClick={() =>
                      seat && !seat.isOccupied && onSeatSelect(seat.id)
                    }
                    disabled={!seat || seat.isOccupied}
                  >
                    {seat?.number}
                  </button>
                </div>
              );
            });
          })}
        </div>
      </div>

      <div className="flex justify-center space-x-6 mb-6 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gray-100 border-2 border-gray-300 rounded"></div>
          <span>Свободно</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-accent border-2 border-accent rounded"></div>
          <span>Выбрано</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-red-500 border-2 border-red-600 rounded"></div>
          <span>Занято</span>
        </div>
      </div>

      {selectedSeats.length > 0 && (
        <div className="bg-muted p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">
                Выбранные места: {selectedSeats.length}
              </p>
              <p className="text-sm text-muted-foreground">
                {selectedSeats
                  .map((seatId) => {
                    const seat = seats.find((s) => s.id === seatId);
                    return seat ? `Ряд ${seat.row}, Место ${seat.number}` : "";
                  })
                  .join(", ")}
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-accent">{totalPrice} ₽</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeatSelection;
