import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SeatSelection from "@/components/SeatSelection";
import { Seat } from "@/types";
import Icon from "@/components/ui/icon";

const Booking = () => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [step, setStep] = useState<"movie" | "seats" | "payment">("movie");

  // Генерируем места для демонстрации
  const generateSeats = (): Seat[] => {
    const seats: Seat[] = [];
    const rows = 8;
    const seatsPerRow = 12;

    for (let row = 1; row <= rows; row++) {
      for (let seatNumber = 1; seatNumber <= seatsPerRow; seatNumber++) {
        const isOccupied = Math.random() < 0.3; // 30% мест занято
        const type = row <= 2 ? "vip" : row <= 4 ? "premium" : "standard";
        const basePrice = type === "vip" ? 800 : type === "premium" ? 600 : 400;

        seats.push({
          id: `${row}-${seatNumber}`,
          row,
          number: seatNumber,
          isOccupied,
          isSelected: false,
          type,
          price: basePrice,
        });
      }
    }

    return seats;
  };

  const [seats] = useState<Seat[]>(generateSeats());

  const handleSeatSelect = (seatId: string) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId],
    );
  };

  const selectedMovie = {
    title: "Дюна: Часть вторая",
    date: "24 июня 2024",
    time: "19:30",
    hall: "Зал 1",
    poster:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop",
  };

  const totalPrice = selectedSeats.reduce((sum, seatId) => {
    const seat = seats.find((s) => s.id === seatId);
    return sum + (seat?.price || 0);
  }, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Покупка билетов
            </h1>

            {/* Прогресс */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <span className="text-accent font-medium">Выбор фильма</span>
              </div>
              <div className="flex-1 h-0.5 bg-accent"></div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <span className="text-accent font-medium">Выбор мест</span>
              </div>
              <div className="flex-1 h-0.5 bg-muted"></div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground font-bold">
                  3
                </div>
                <span className="text-muted-foreground">Оплата</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Левая колонка - выбор мест */}
            <div className="lg:col-span-2">
              <SeatSelection
                seats={seats}
                onSeatSelect={handleSeatSelect}
                selectedSeats={selectedSeats}
              />
            </div>

            {/* Правая колонка - информация о заказе */}
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Информация о сеансе
                </h3>
                <div className="flex space-x-4 mb-4">
                  <img
                    src={selectedMovie.poster}
                    alt={selectedMovie.title}
                    className="w-20 h-28 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground mb-2">
                      {selectedMovie.title}
                    </h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Icon name="Calendar" size={16} />
                        <span>{selectedMovie.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" size={16} />
                        <span>{selectedMovie.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="MapPin" size={16} />
                        <span>{selectedMovie.hall}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {selectedSeats.length > 0 && (
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    Выбранные места
                  </h3>
                  <div className="space-y-2 mb-4">
                    {selectedSeats.map((seatId) => {
                      const seat = seats.find((s) => s.id === seatId);
                      if (!seat) return null;

                      return (
                        <div
                          key={seatId}
                          className="flex justify-between items-center text-sm"
                        >
                          <span>
                            Ряд {seat.row}, Место {seat.number}
                          </span>
                          <span className="font-medium">{seat.price} ₽</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Итого:</span>
                      <span className="text-accent">{totalPrice} ₽</span>
                    </div>
                  </div>
                  <button className="w-full bg-accent text-white py-3 px-4 rounded-lg hover:bg-accent/90 transition-colors mt-6 font-medium">
                    Перейти к оплате
                  </button>
                </div>
              )}

              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium text-foreground mb-2">
                  Правила покупки билетов
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Билеты можно вернуть за 2 часа до сеанса</li>
                  <li>• Скидки действуют при предъявлении документов</li>
                  <li>• Вход в зал прекращается через 15 минут после начала</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Booking;
