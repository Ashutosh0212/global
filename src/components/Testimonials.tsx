import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay@8.6.0';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop',
    rating: 5,
    text: 'Our Andaman trip was absolutely magical! Global Travels took care of every detail, from hotel bookings to water sports activities. The team was incredibly professional and responsive. Highly recommend!',
    destination: 'Andaman Islands'
  },
  {
    name: 'Rajesh Kumar',
    location: 'Delhi, India',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop',
    rating: 5,
    text: 'The Bali package exceeded all our expectations. From the cultural tours to the beach resorts, everything was perfectly planned. Our honeymoon was a dream come true thanks to Global Travels!',
    destination: 'Bali, Indonesia'
  },
  {
    name: 'Meera Patel',
    location: 'Ahmedabad, India',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop',
    rating: 5,
    text: 'The Himalayan journey was breathtaking! Watching sunrise over Kanchenjunga was a once-in-a-lifetime experience. The accommodation and guides were top-notch. Thank you Global Travels!',
    destination: 'Himalayas'
  },
  {
    name: 'Arjun Menon',
    location: 'Bangalore, India',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop',
    rating: 5,
    text: 'Kerala backwaters cruise was so peaceful and rejuvenating. The houseboat was luxurious and the food was amazing. Global Travels made our family vacation absolutely perfect!',
    destination: 'Kerala'
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 sm:text-4xl">
            What Our Travelers Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Real experiences from real travelers
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <Quote className="size-8 text-blue-200 mb-4" />
                      
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      <p className="text-sm text-gray-700 mb-6 leading-relaxed flex-grow">
                        {testimonial.text}
                      </p>

                      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="size-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm text-gray-900">{testimonial.name}</p>
                          <p className="text-xs text-gray-500">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}