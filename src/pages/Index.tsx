import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MovieCard from "@/components/MovieCard";
import { Movie } from "@/types";
import Icon from "@/components/ui/icon";

const Index = () => {
  const featuredMovies: Movie[] = [
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
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1489599117036-bf48a76b2d7f?w=1200&h=800&fit=crop"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="cinema-name-matvey">Матвей</span>{" "}
            <span className="cinema-name-premiere">Premiere</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Погрузитесь в мир кино с максимальным комфортом
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/movies"
              className="bg-accent text-white px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors font-medium text-lg"
            >
              Смотреть фильмы
            </Link>
            <Link
              to="/booking"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-colors font-medium text-lg"
            >
              Купить билеты
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Movies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">
              Популярные фильмы
            </h2>
            <Link
              to="/movies"
              className="text-accent hover:text-accent/80 transition-colors flex items-center space-x-2"
            >
              <span>Все фильмы</span>
              <Icon name="ArrowRight" size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Почему выбирают нас
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Armchair" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Комфортные залы
              </h3>
              <p className="text-muted-foreground">
                Современные кресла с подогревом и системой массажа для
                максимального комфорта
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Volume2" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Dolby Atmos
              </h3>
              <p className="text-muted-foreground">
                Объемный звук высочайшего качества погружает вас в атмосферу
                фильма
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Monitor" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                4K экраны
              </h3>
              <p className="text-muted-foreground">
                Кристально четкое изображение в формате 4K с технологией HDR
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
