import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Clock, Ship, Coffee, TreePine, Mountain } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FeaturedPackagesProps {
  onViewAll: () => void;
}

const packages = [
  {
    id: 'andaman',
    title: 'Andaman Islands: Tropical Paradise',
    duration: '6 Nights / 7 Days',
    description: 'Experience pristine beaches, crystal-clear waters, and vibrant coral reefs in India\'s most exotic island destination.',
    image: 'https://images.unsplash.com/photo-1731934235370-29208e177720?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmRhbWFuJTIwaXNsYW5kcyUyMGJlYWNofGVufDF8fHx8MTc2NDgxOTI4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    highlights: [
      { icon: Ship, text: 'Scuba Diving & Snorkeling' },
      { icon: Coffee, text: 'Beach Resorts' },
      { icon: TreePine, text: 'Island Hopping' }
    ]
  },
  {
    id: 'bali',
    title: 'Bali: Island of Gods',
    duration: '5 Nights / 6 Days',
    description: 'Discover ancient temples, terraced rice paddies, and world-class beaches in Indonesia\'s cultural heart.',
    image: 'https://images.unsplash.com/photo-1608994605211-ba1494f62e2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwYmVhY2glMjBpbmRvbmVzaWF8ZW58MXx8fHwxNzY0ODI2NjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    highlights: [
      { icon: TreePine, text: 'Temple Tours' },
      { icon: Coffee, text: 'Kintamani Highlands' },
      { icon: Ship, text: 'Water Sports' }
    ]
  },
  {
    id: 'himalayas',
    title: 'Himalayas: Mountain Majesty',
    duration: '7 Nights / 8 Days',
    description: 'Journey through snow-capped peaks, serene monasteries, and charming hill stations in the Eastern Himalayas.',
    image: 'https://images.unsplash.com/photo-1629184950099-3eb7993b5f48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YXMlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzY0ODIxNzE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    highlights: [
      { icon: Mountain, text: 'Mountain Views' },
      { icon: TreePine, text: 'Monastery Visits' },
      { icon: Coffee, text: 'Tea Plantations' }
    ]
  },
  {
    id: 'kerala',
    title: 'Kerala: God\'s Own Country',
    duration: '6 Nights / 7 Days',
    description: 'Cruise through tranquil backwaters, explore lush hill stations, and encounter exotic wildlife in Kerala.',
    image: 'https://images.unsplash.com/photo-1707893013488-51672ef83425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXJhbGElMjBiYWNrd2F0ZXJzJTIwaG91c2Vib2F0fGVufDF8fHx8MTc2NDczNjIxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    highlights: [
      { icon: Ship, text: 'Backwater Cruise' },
      { icon: Coffee, text: 'Tea Gardens' },
      { icon: TreePine, text: 'Wildlife Safari' }
    ]
  }
];

export function FeaturedPackages({ onViewAll }: FeaturedPackagesProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 sm:text-4xl">
            Featured Destinations
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Handpicked packages for unforgettable journeys
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className="relative h-48">
                <ImageWithFallback
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md flex items-center gap-2">
                  <Clock className="size-4 text-primary" />
                  <span className="text-sm font-medium">{pkg.duration}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{pkg.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{pkg.description}</p>
                
                <div className="space-y-2 mb-4">
                  {pkg.highlights.map((highlight, index) => {
                    const Icon = highlight.icon;
                    return (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                        <Icon className="size-4 text-primary" />
                        <span>{highlight.text}</span>
                      </div>
                    );
                  })}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={onViewAll}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" onClick={onViewAll}>
            Explore All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
}