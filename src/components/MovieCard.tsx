import { Movie } from "@/types";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

interface MovieCardProps {
  movie: Movie;
  onDelete: (movieId: string) => void;
}

const MovieCard = ({ movie, onDelete }: MovieCardProps) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
      <div className="relative overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
          <button className="bg-accent text-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform">
            <Icon name="Play" size={24} />
          </button>
        </div>
        <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded flex items-center space-x-1">
          <Icon
            name="Star"
            size={14}
            className="text-yellow-400 fill-current"
          />
          <span className="text-sm font-medium">{movie.rating}</span>
        </div>
        <button
          onClick={() => onDelete(movie.id)}
          className="absolute top-4 left-4 bg-red-500 bg-opacity-80 hover:bg-opacity-100 text-white rounded-full p-2 transition-all duration-200 hover:scale-110"
        >
          <Icon name="Trash2" size={16} />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-1">
          {movie.title}
        </h3>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
          <span>{movie.genre}</span>
          <span>{movie.duration} мин</span>
        </div>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {movie.description}
        </p>

        <div className="flex space-x-2">
          <button className="flex-1 bg-accent text-white py-2 px-4 rounded-lg hover:bg-accent/90 transition-colors text-sm font-medium">
            Купить билет
          </button>
          <Link
            to={`/movies/${movie.id}`}
            className="bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
