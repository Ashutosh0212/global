import { Card, CardContent } from './ui/card';
import { Users, Globe, Award, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stats = [
  { icon: Users, value: '50,000+', label: 'Happy Travelers' },
  { icon: Globe, value: '100+', label: 'Destinations' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: TrendingUp, value: '98%', label: 'Satisfaction Rate' }
];

const values = [
  {
    title: 'Personalized Service',
    description: 'We understand that every traveler is unique. Our team takes the time to understand your preferences, interests, and budget to create tailored itineraries that exceed expectations.'
  },
  {
    title: 'Local Expertise',
    description: 'Our deep local knowledge and strong relationships with hotels, guides, and service providers ensure you get authentic experiences and the best value for your money.'
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden fees, no surprises. We believe in complete transparency, providing detailed breakdowns of all costs upfront so you can travel with confidence.'
  },
  {
    title: 'Sustainable Travel',
    description: 'We\'re committed to responsible tourism practices that respect local communities and preserve the natural beauty of the destinations we operate in.'
  }
];

export function About() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-100 via-blue-50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl text-gray-900 sm:text-5xl md:text-6xl">
              About Global Travels
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Creating unforgettable travel experiences since 2009
            </p>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-sm bg-white">
                  <CardContent className="p-6">
                    <Icon className="size-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                At Global Travels, our mission is simple yet profound: to transform your travel dreams into extraordinary realities. We believe that travel is more than just visiting new places—it's about creating memories, discovering new cultures, and experiencing the world in ways that inspire and enrich your life.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you're seeking a romantic beach escape, an adventurous mountain trek, or a cultural immersion in exotic lands, we're here to make it happen seamlessly and memorably.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2035&auto=format&fit=crop"
                alt="Travel planning"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-96 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
                alt="Travel destinations"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Founded in 2009 by a group of passionate travelers and hospitality experts, Global Travels was born from a simple observation: travelers deserve better. Better planning, better accommodations, better experiences, and better support throughout their journey.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                What started as a small travel consultancy in India has grown into a trusted name in the travel industry, serving thousands of satisfied customers across the globe. Our expertise spans both domestic Indian destinations and international hotspots, with specialized knowledge in Southeast Asia, the Himalayas, and tropical paradises.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we pride ourselves on our diverse portfolio of travel packages—from budget-friendly escapes to premium luxury experiences, and from peaceful retreats to adrenaline-pumping adventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600">Our commitment to excellence in every journey</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}