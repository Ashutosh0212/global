import { Card, CardContent } from './ui/card';
import { Shield, Users, Award, Clock, Headphones, DollarSign } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Trusted & Secure',
    description: 'Safe, verified accommodations and secure booking process with transparent pricing'
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Professional travel consultants with deep local knowledge and 15+ years experience'
  },
  {
    icon: Award,
    title: 'Best Value',
    description: 'Competitive prices with exclusive deals and flexible package options for every budget'
  },
  {
    icon: Clock,
    title: 'Hassle-Free Planning',
    description: 'Complete itineraries with all arrangements handled, from flights to activities'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock assistance during your trip for complete peace of mind'
  },
  {
    icon: DollarSign,
    title: 'No Hidden Costs',
    description: 'Transparent pricing with detailed breakdowns and no surprise charges'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-[#2596be]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-white sm:text-4xl">
            Why Travel with Global Travels?
          </h2>
          <p className="mt-4 text-xl text-white/90">
            Your satisfaction is our priority
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                        <Icon className="size-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}