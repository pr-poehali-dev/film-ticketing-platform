import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Film" size={28} className="text-accent" />
              <span className="text-xl font-bold text-primary">CineMax</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Современный кинотеатр с лучшими фильмами и комфортными залами.
              Погрузитесь в мир кино с нами!
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Facebook"
                size={20}
                className="text-muted-foreground hover:text-accent cursor-pointer transition-colors"
              />
              <Icon
                name="Instagram"
                size={20}
                className="text-muted-foreground hover:text-accent cursor-pointer transition-colors"
              />
              <Icon
                name="Twitter"
                size={20}
                className="text-muted-foreground hover:text-accent cursor-pointer transition-colors"
              />
              <Icon
                name="Youtube"
                size={20}
                className="text-muted-foreground hover:text-accent cursor-pointer transition-colors"
              />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Контакты</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>ул. Кинематографистов, 15</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@cinemax.ru</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Информация</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>Ежедневно 10:00-23:00</span>
              </div>
              <div>О нас</div>
              <div>Вакансии</div>
              <div>Правила</div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8 text-center text-muted-foreground">
          <p>&copy; 2024 CineMax. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
