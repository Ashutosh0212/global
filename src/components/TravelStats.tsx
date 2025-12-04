import { Users, MapPin, Award, Heart } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '50,000+',
    label: 'Happy Travelers',
    description: 'Satisfied customers worldwide'
  },
  {
    icon: MapPin,
    value: '100+',
    label: 'Destinations',
    description: 'Across India and abroad'
  },
  {
    icon: Award,
    value: '15+',
    label: 'Years Experience',
    description: 'In the travel industry'
  },
  {
    icon: Heart,
    value: '98%',
    label: 'Customer Satisfaction',
    description: 'Based on reviews'
  }
];

export function TravelStats() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md mb-4">
                  <Icon className="size-8 text-primary" />
                </div>
                <div className="text-3xl text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-900 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-600">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
