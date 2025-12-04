import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Plane, Ticket, Hotel, Bus, Car, FileText, DollarSign, CheckCircle } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Plane,
      title: "International & Domestic Tour Operators",
      description: "Experience seamless travel with our expertly curated tour packages. Whether you're exploring the ancient forts of Rajasthan or the pristine beaches of Bali, we handle every detail from accommodation to sightseeing. Our experienced tour operators ensure your journey is memorable, hassle-free, and tailored to your preferences. With extensive local knowledge and trusted partnerships worldwide, we create unforgettable experiences for solo travelers, families, and groups.",
      image: "https://images.unsplash.com/photo-1639763703351-c27defbb51b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyJTIwZ3VpZGUlMjB0cmF2ZWwlMjBncm91cHxlbnwxfHx8fDE3NjQ4Mjg5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      imageAlt: "Tour guide with travel group"
    },
    {
      icon: Ticket,
      title: "International & Domestic Air Tickets",
      description: "Get the best deals on flights to destinations across India and around the globe. Our ticketing services offer competitive rates, flexible booking options, and support for all major airlines. From budget-friendly economy seats to luxurious business class travel, we find the perfect flight options matching your schedule and budget. Our team provides real-time availability, instant confirmations, and 24/7 support for any changes or queries regarding your air travel.",
      image: "https://images.unsplash.com/photo-1545524324-cfdae5eb49f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHRpY2tldHMlMjBib2FyZGluZ3xlbnwxfHx8fDE3NjQ4Mjg5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      imageAlt: "Airplane tickets and boarding pass"
    },
    {
      icon: Hotel,
      title: "World Wide Hotel Booking",
      description: "Access an extensive network of hotels worldwide, from boutique properties to international chains. We offer competitive rates and exclusive deals on accommodations that suit every budget and preference. Our hotel booking service ensures you get the best locations, amenities, and value for money. Whether you need a budget guesthouse, a beachfront resort, or a luxury five-star hotel, our partnerships guarantee quality stays with hassle-free booking and confirmation processes.",
      image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2NDcxOTkxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      imageAlt: "Luxury hotel lobby"
    },
    {
      icon: Bus,
      title: "Tourist Vehicle Services",
      description: "Travel in comfort with our wide range of tourist vehicles suitable for every group size and journey type. From compact cars for couples to large coaches for group tours, we provide well-maintained, air-conditioned vehicles with professional drivers. Our fleet is regularly serviced to ensure safety and reliability. Whether you need airport transfers, city tours, or long-distance travel, our vehicles come equipped with modern amenities to make your journey comfortable and enjoyable throughout your trip.",
      image: "https://images.unsplash.com/photo-1725314681698-0fe6df390da1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3VyaXN0JTIwYnVzJTIwdmVoaWNsZXxlbnwxfHx8fDE3NjQ4Mjg5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      imageAlt: "Tourist bus vehicle"
    },
    {
      icon: Car,
      title: "Urbania Own Fleets",
      description: "Experience premium travel with our exclusive fleet of Force Urbania vehicles - the perfect blend of luxury and comfort. These modern, spacious vehicles are ideal for family trips, corporate travel, and group tours across Rajasthan and beyond. With plush seating, ample legroom, air conditioning, and entertainment systems, our Urbania fleet ensures a comfortable journey on long routes. Our well-trained drivers are familiar with all major routes and ensure safe, timely transportation while you relax and enjoy the scenic beauty.",
      image: "https://images.unsplash.com/photo-1651446404130-104e68e2f39a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2YW4lMjB0cmF2ZWx8ZW58MXx8fHwxNzY0ODI4OTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      imageAlt: "Luxury van travel"
    },
    {
      icon: FileText,
      title: "Visa & Passport Assistance",
      description: "Navigate the complexities of international travel documentation with our comprehensive visa and passport services. We provide end-to-end assistance for visa applications, documentation, and passport renewals. Our experienced team stays updated with the latest requirements for various countries, ensuring your applications are complete and accurate. From tourist visas to business visas, we handle all types of documentation, schedule appointments, and follow up on your behalf, making the process stress-free and efficient.",
      image: "https://images.unsplash.com/photo-1721378466986-ef7b4897a6d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXNzcG9ydCUyMHZpc2ElMjBzdGFtcHxlbnwxfHx8fDE3NjQ4Mjg5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      imageAlt: "Passport and visa"
    },
    {
      icon: DollarSign,
      title: "Forex Services",
      description: "Get competitive foreign exchange rates for all your international travel needs. We offer forex services for major currencies with transparent pricing and no hidden charges. Whether you need cash, forex cards, or traveler's cheques, we provide convenient options for carrying money abroad. Our forex service ensures you get the best exchange rates in Jodhpur, with doorstep delivery available for your convenience. We also provide expert guidance on the most cost-effective ways to manage your travel finances abroad.",
      image: "https://images.unsplash.com/photo-1657972590667-5d94b96ec583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJyZW5jeSUyMGV4Y2hhbmdlJTIwbW9uZXl8ZW58MXx8fHwxNzY0ODI4OTc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      imageAlt: "Currency exchange"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl text-gray-900 sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive travel solutions tailored to make your journey seamless and memorable
          </p>
        </div>
      </section>

      {/* Services Grid - Alternating Layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Image */}
                  <div className={`${isEven ? '' : 'lg:col-start-2'}`}>
                    <Card className="overflow-hidden border-0 shadow-xl bg-white">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-80 object-cover"
                      />
                    </Card>
                  </div>

                  {/* Content */}
                  <div className={`${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="size-8 text-primary" />
                      </div>
                      <h2 className="text-3xl text-gray-900">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-[#2596be]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-white sm:text-4xl mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-blue-50 text-lg max-w-3xl mx-auto">
              We're committed to providing exceptional service and value for every aspect of your journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="size-8 text-primary" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">Best Rates</h3>
                <p className="text-gray-600">
                  Competitive pricing on all services with no hidden charges
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="size-8 text-primary" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Round-the-clock assistance for all your travel needs
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="size-8 text-primary" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">Trusted Partners</h3>
                <p className="text-gray-600">
                  Verified partnerships with airlines, hotels, and service providers
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="size-8 text-primary" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">Local Expertise</h3>
                <p className="text-gray-600">
                  Based in Jodhpur with extensive knowledge of Rajasthan tourism
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}