import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MovieCard from "@/components/MovieCard";
import { Movie } from "@/types";
import Icon from "@/components/ui/icon";

const Movies = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>("all");
  const [movies, setMovies] = useState<Movie[]>([
    {
      id: "1",
      title: "Дюна: Часть вторая",
      genre: "Фантастика",
      duration: 166,
      rating: 8.5,
      description:
        "Продолжение эпической саги о Поле Атрейдесе и его пути к мести.",
      poster:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
      releaseDate: "2024-03-01",
    },
    {
      id: "2",
      title: "Оппенгеймер",
      genre: "Драма",
      duration: 180,
      rating: 8.7,
      description:
        "История создателя атомной бомбы и его внутренних противоречий.",
      poster:
        "https://images.unsplash.com/photo-1489599117036-bf48a76b2d7f?w=400&h=600&fit=crop",
      releaseDate: "2024-02-15",
    },
    {
      id: "3",
      title: "Джон Уик 4",
      genre: "Боевик",
      duration: 169,
      rating: 7.9,
      description: "Легендарный киллер продолжает борьбу за свободу.",
      poster:
        "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&h=600&fit=crop",
      releaseDate: "2024-01-20",
    },
    {
      id: "4",
      title: "Человек-паук: Через вселенные",
      genre: "Анимация",
      duration: 140,
      rating: 8.4,
      description: "Майлз Моралес встречается с паучками из разных измерений.",
      poster:
        "https://images.unsplash.com/photo-1611604548018-d56bbd85d681?w=400&h=600&fit=crop",
      releaseDate: "2024-01-10",
    },
    {
      id: "5",
      title: "Барби",
      genre: "Комедия",
      duration: 114,
      rating: 7.2,
      description: "Путешествие из розового мира Барби в реальный мир.",
      poster:
        "https://images.unsplash.com/photo-1563089145-599997674d42?w=400&h=600&fit=crop",
      releaseDate: "2023-12-15",
    },
    {
      id: "6",
      title: "Темный рыцарь возвращается",
      genre: "Фантастика",
      duration: 155,
      rating: 8.1,
      description: "Бэтмен возвращается после долгого отсутствия.",
      poster:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      releaseDate: "2023-11-30",
    },
  ]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: "",
    genre: "Фантастика",
    duration: "",
    rating: "",
    description: "",
    poster: "",
  });

  const handleAddMovie = () => {
    if (!newMovie.title || !newMovie.duration || !newMovie.rating) return;

    const movie: Movie = {
      id: Date.now().toString(),
      title: newMovie.title,
      genre: newMovie.genre,
      duration: parseInt(newMovie.duration),
      rating: parseFloat(newMovie.rating),
      description: newMovie.description,
      poster:
        newMovie.poster ||
        "https://images.unsplash.com/photo-1489599117036-bf48a76b2d7f?w=400&h=600&fit=crop",
      releaseDate: new Date().toISOString().split("T")[0],
    };

    setMovies([...movies, movie]);
    setNewMovie({
      title: "",
      genre: "Фантастика",
      duration: "",
      rating: "",
      description: "",
      poster: "",
    });
    setShowAddForm(false);
  };

  const handleDeleteMovie = (movieId: string) => {
    setMovies(movies.filter((movie) => movie.id !== movieId));
  };

  const genres = [
    "all",
    "Фантастика",
    "Драма",
    "Боевик",
    "Анимация",
    "Комедия",
  ];

  const filteredMovies =
    selectedGenre === "all"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-foreground">Все фильмы</h1>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors flex items-center space-x-2"
            >
              <Icon name="Plus" size={20} />
              <span>Добавить фильм</span>
            </button>
          </div>

          {showAddForm && (
            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">
                Добавить новый фильм
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Название фильма"
                  value={newMovie.title}
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, title: e.target.value })
                  }
                  className="bg-muted border border-border rounded-lg px-3 py-2"
                />
                <select
                  value={newMovie.genre}
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, genre: e.target.value })
                  }
                  className="bg-muted border border-border rounded-lg px-3 py-2"
                >
                  <option value="Фантастика">Фантастика</option>
                  <option value="Драма">Драма</option>
                  <option value="Боевик">Боевик</option>
                  <option value="Анимация">Анимация</option>
                  <option value="Комедия">Комедия</option>
                </select>
                <input
                  type="number"
                  placeholder="Длительность (мин)"
                  value={newMovie.duration}
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, duration: e.target.value })
                  }
                  className="bg-muted border border-border rounded-lg px-3 py-2"
                />
                <input
                  type="number"
                  step="0.1"
                  placeholder="Рейтинг (0-10)"
                  value={newMovie.rating}
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, rating: e.target.value })
                  }
                  className="bg-muted border border-border rounded-lg px-3 py-2"
                />
                <input
                  type="url"
                  placeholder="Ссылка на постер"
                  value={newMovie.poster}
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, poster: e.target.value })
                  }
                  className="bg-muted border border-border rounded-lg px-3 py-2"
                />
                <textarea
                  placeholder="Описание фильма"
                  value={newMovie.description}
                  onChange={(e) =>
                    setNewMovie({ ...newMovie, description: e.target.value })
                  }
                  className="bg-muted border border-border rounded-lg px-3 py-2 md:col-span-2 h-20 resize-none"
                />
              </div>
              <div className="flex space-x-2 mt-4">
                <button
                  onClick={handleAddMovie}
                  className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Добавить
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="bg-muted text-muted-foreground px-4 py-2 rounded-lg hover:bg-muted/80 transition-colors"
                >
                  Отмена
                </button>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-6">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedGenre === genre
                    ? "bg-accent text-white"
                    : "bg-muted text-muted-foreground hover:bg-accent/20"
                }`}
              >
                {genre === "all" ? "Все жанры" : genre}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">
              Найдено фильмов: {filteredMovies.length}
            </p>
            <div className="flex items-center space-x-2">
              <Icon name="Filter" size={20} className="text-muted-foreground" />
              <select className="bg-muted border border-border rounded-lg px-3 py-2 text-sm">
                <option>По популярности</option>
                <option>По рейтингу</option>
                <option>По дате выхода</option>
                <option>По названию</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onDelete={handleDeleteMovie}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Movies;
