export interface Movie {
  id: string;
  title: string;
  genre: string;
  duration: number;
  rating: number;
  description: string;
  poster: string;
  trailer?: string;
  releaseDate: string;
}

export interface Showtime {
  id: string;
  movieId: string;
  date: string;
  time: string;
  hallId: string;
  price: number;
}

export interface Seat {
  id: string;
  row: number;
  number: number;
  isOccupied: boolean;
  isSelected: boolean;
  type: "standard" | "premium" | "vip";
  price: number;
}

export interface Hall {
  id: string;
  name: string;
  rows: number;
  seatsPerRow: number;
  seats: Seat[];
}

export interface Booking {
  id: string;
  movieId: string;
  showtimeId: string;
  selectedSeats: string[];
  totalPrice: number;
  customerName: string;
  customerEmail: string;
}
