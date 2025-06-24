import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/movies", label: "Фильмы" },
    { path: "/schedule", label: "Расписание" },
    { path: "/booking", label: "Билеты" },
    { path: "/contacts", label: "Контакты" },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Film" size={32} className="text-accent" />
            <span className="text-2xl font-bold">
              <span className="cinema-name-matvey">Матвей</span>{" "}
              <span className="cinema-name-premiere">Premiere</span>
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-accent ${
                  location.pathname === item.path
                    ? "text-accent"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                placeholder="Поиск фильмов..."
                className="pl-10 pr-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
            </div>
            <button className="md:hidden">
              <Icon name="Menu" size={24} className="text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
