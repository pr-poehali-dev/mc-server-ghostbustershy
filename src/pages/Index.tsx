import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const donationPackages = [
    {
      id: 'vip',
      title: 'VIP Игрок',
      price: '199₽',
      icon: '/img/4ea9a33f-47ff-4969-9cdc-3161eedbb6f7.jpg',
      color: 'minecraft-green',
      privileges: [
        'Префикс [VIP] в чате',
        'Дом: /sethome (3 точки)',
        'Приват территории: 50 блоков',
        'Цветной ник в чате',
        'Доступ к VIP зонам'
      ]
    },
    {
      id: 'premium',
      title: 'Premium Игрок',
      price: '399₽',
      icon: '/img/e068bfa9-9395-4d76-adc1-2e153fbb429c.jpg',
      color: 'minecraft-blue',
      privileges: [
        'Префикс [PREMIUM] в чате',
        'Дом: /sethome (5 точек)',
        'Приват территории: 100 блоков',
        'Цветной ник в чате',
        'Комплект алмазной брони',
        'Доступ к Premium зонам',
        'Команда /fly на 30 минут в день'
      ]
    },
    {
      id: 'legend',
      title: 'Legend Игрок',
      price: '799₽',
      icon: '/img/49b306b4-ce4a-44c9-a735-4442fa83c996.jpg',
      color: 'minecraft-gold',
      privileges: [
        'Префикс [LEGEND] в чате',
        'Дом: /sethome (10 точек)',
        'Приват территории: 200 блоков',
        'Цветной ник в чате',
        'Комплект незеритовой брони',
        'Доступ ко всем зонам',
        'Команда /fly без ограничений',
        'Собственная варп точка',
        'Доступ к креативному инвентарю'
      ]
    }
  ];

  const handlePurchase = (packageId: string) => {
    setSelectedPackage(packageId);
    // В реальном приложении здесь будет интеграция с платежной системой
    alert(`Переход к оплате пакета: ${donationPackages.find(p => p.id === packageId)?.title}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-minecraft-obsidian to-slate-800 border-b-4 border-minecraft-green">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Crect x='0' y='0' width='4' height='4'/%3E%3Crect x='8' y='8' width='4' height='4'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-2xl font-mono tracking-wider">
              GHOSTBUSTERSHY SERVER
            </h1>
            <p className="text-2xl text-minecraft-green mb-2 font-mono">
              Minecraft 1.20.10 • Aternos Hosting
            </p>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Присоединяйся к нашему серверу и получи уникальные привилегии! 
              Поддержи проект и получи эксклюзивные возможности в игре.
            </p>
          </div>
        </div>
      </header>

      {/* Server Info */}
      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-slate-800 border-minecraft-green border-2 hover:border-minecraft-blue transition-colors duration-300">
              <CardHeader className="text-center">
                <Icon name="Server" size={48} className="text-minecraft-green mx-auto mb-4" />
                <CardTitle className="text-white font-mono">IP Сервера</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-2xl font-mono text-minecraft-green">
                  ghostbustershy.aternos.me
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-minecraft-blue border-2 hover:border-minecraft-gold transition-colors duration-300">
              <CardHeader className="text-center">
                <Icon name="Users" size={48} className="text-minecraft-blue mx-auto mb-4" />
                <CardTitle className="text-white font-mono">Онлайн</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-2xl font-mono text-minecraft-blue">
                  12/20 игроков
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-minecraft-gold border-2 hover:border-minecraft-green transition-colors duration-300">
              <CardHeader className="text-center">
                <Icon name="Gamepad2" size={48} className="text-minecraft-gold mx-auto mb-4" />
                <CardTitle className="text-white font-mono">Версия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-2xl font-mono text-minecraft-gold">
                  1.20.10
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 font-mono">
              💎 ДОНАТ ПРИВИЛЕГИИ 💎
            </h2>
            <p className="text-xl text-slate-300">
              Выбери свой уровень и получи уникальные возможности!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donationPackages.map((pkg) => (
              <Card 
                key={pkg.id}
                className={`bg-slate-800 border-2 hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  selectedPackage === pkg.id ? 'border-yellow-400 shadow-2xl shadow-yellow-400/20' : `border-${pkg.color}`
                }`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                
                <CardHeader className="text-center pb-4">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center border-2 border-slate-600">
                      <img 
                        src={pkg.icon} 
                        alt={pkg.title} 
                        className="w-12 h-12 pixelated"
                        style={{ imageRendering: 'pixelated' }}
                      />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-white font-mono mb-2">
                    {pkg.title}
                  </CardTitle>
                  <CardDescription>
                    <Badge variant="outline" className={`text-${pkg.color} border-${pkg.color} text-xl px-4 py-2 font-mono`}>
                      {pkg.price}
                    </Badge>
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  {pkg.privileges.map((privilege, index) => (
                    <div key={index} className="flex items-center text-slate-300">
                      <Icon name="Check" size={16} className="text-minecraft-green mr-3 flex-shrink-0" />
                      <span className="text-sm">{privilege}</span>
                    </div>
                  ))}
                </CardContent>

                <CardFooter>
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePurchase(pkg.id);
                    }}
                    className={`w-full bg-${pkg.color} hover:bg-${pkg.color}/80 text-white font-bold py-3 font-mono text-lg border-2 border-transparent hover:border-white transition-all duration-300`}
                    size="lg"
                  >
                    <Icon name="CreditCard" size={20} className="mr-2" />
                    КУПИТЬ
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 font-mono">
              🎮 ВОЗМОЖНОСТИ СЕРВЕРА 🎮
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800 border-slate-700 hover:border-minecraft-green transition-colors duration-300">
              <CardHeader className="text-center">
                <Icon name="Shield" size={40} className="text-minecraft-blue mx-auto mb-3" />
                <CardTitle className="text-white font-mono text-lg">Защита</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-center text-sm">
                  Система привата территорий и защиты от гриферов
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-minecraft-gold transition-colors duration-300">
              <CardHeader className="text-center">
                <Icon name="Home" size={40} className="text-minecraft-gold mx-auto mb-3" />
                <CardTitle className="text-white font-mono text-lg">Дома</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-center text-sm">
                  Устанавливай точки дома и быстро телепортируйся
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-minecraft-green transition-colors duration-300">
              <CardHeader className="text-center">
                <Icon name="MessageCircle" size={40} className="text-minecraft-green mx-auto mb-3" />
                <CardTitle className="text-white font-mono text-lg">Чат</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-center text-sm">
                  Цветные ники, префиксы и модерируемый чат
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 hover:border-minecraft-blue transition-colors duration-300">
              <CardHeader className="text-center">
                <Icon name="Zap" size={40} className="text-minecraft-blue mx-auto mb-3" />
                <CardTitle className="text-white font-mono text-lg">События</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-center text-sm">
                  Регулярные ивенты, конкурсы и турниры
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-minecraft-obsidian py-8 border-t-4 border-minecraft-green">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-2xl font-bold text-white mb-4 font-mono">
            GHOSTBUSTERSHY SERVER
          </h4>
          <p className="text-slate-300 mb-4">
            Лучший сервер Minecraft с уникальными возможностями
          </p>
          <p className="text-slate-400 text-sm">
            © 2024 Ghostbustershy Server. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;