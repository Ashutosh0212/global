import { Card, CardContent } from './ui/card';
import { Ship, Coffee, TreePine, Mountain, Sunset, Umbrella } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const destinations = [
  {
    id: 'kerala',
    title: "Kerala: God's Own Country",
    duration: '6 Nights / 7 Days',
    description: [
      "Discover the enchanting beauty of Kerala, where tranquil backwaters, misty hill stations, and exotic wildlife sanctuaries combine to create one of India's most diverse and captivating destinations. This week-long journey takes you through the best of what Kerala has to offer.",
      "Cruise through serene backwaters on a traditional houseboat, waking up to the gentle sounds of water and birdsong. Explore sprawling tea and spice plantations in the cool mountain air of Munnar, where endless green carpets cascade across hillsides. Encounter majestic elephants and diverse wildlife in their natural habitat, completing a perfect blend of relaxation and exploration."
    ],
    image: 'https://images.unsplash.com/photo-1704365159740-ab1f3556044a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXJhbGElMjBiYWNrd2F0ZXIlMjBzdW5zZXR8ZW58MXx8fHwxNzY0ODIyMDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    activities: [
      {
        icon: Ship,
        title: 'Backwater Cruise',
        description: "Overnight stay on traditional Kettuvallam houseboat through Alleppey's picturesque canals"
      },
      {
        icon: Coffee,
        title: 'Tea Garden Tours',
        description: "Visit Munnar's sprawling tea estates and learn about tea processing while enjoying mountain vistas"
      },
      {
        icon: TreePine,
        title: 'Wildlife Safari',
        description: "Spot elephants, tigers, and exotic birds in Periyar Wildlife Sanctuary's lush forests"
      }
    ]
  },
  {
    id: 'andaman',
    title: 'Andaman Islands: Tropical Paradise',
    duration: '6 Nights / 7 Days',
    description: [
      "Escape to the Andaman Islands, where pristine white-sand beaches meet crystal-clear turquoise waters. This archipelago offers some of the world's most spectacular coral reefs, making it a paradise for beach lovers and adventure seekers alike.",
      "Dive into vibrant underwater worlds teeming with colorful marine life, relax on secluded beaches surrounded by lush tropical forests, and explore historic sites that tell tales of India's colonial past. From the famous Radhanagar Beach to the limestone caves of Baratang, every day brings new wonders."
    ],
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop',
    activities: [
      {
        icon: Umbrella,
        title: 'Beach Hopping',
        description: 'Visit pristine beaches including Radhanagar, Elephant Beach, and Corbyn\'s Cove'
      },
      {
        icon: Ship,
        title: 'Water Sports',
        description: 'Scuba diving, snorkeling, sea walking, and kayaking in crystal-clear waters'
      },
      {
        icon: Sunset,
        title: 'Island Tours',
        description: 'Explore Port Blair, Havelock, and Neil Islands with their unique attractions'
      }
    ]
  },
  {
    id: 'bali',
    title: 'Bali: Island of Gods',
    duration: '5 Nights / 6 Days',
    description: [
      "Experience the magical island of Bali, where ancient Hindu culture meets stunning natural beauty. From terraced rice paddies to sacred temples perched on cliffsides, Bali offers a perfect blend of spirituality, adventure, and relaxation.",
      "Witness breathtaking sunrises at ancient temples, explore traditional villages where artisans craft intricate woodcarvings and paintings, and indulge in world-class spa treatments. The volcanic highlands of Kintamani offer spectacular views, while Ubud's cultural heart provides insight into Balinese traditions and arts."
    ],
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop',
    activities: [
      {
        icon: Mountain,
        title: 'Kintamani Highlands',
        description: 'Visit Mount Batur volcano and enjoy panoramic views of the crater lake'
      },
      {
        icon: TreePine,
        title: 'Ubud Cultural Tour',
        description: 'Explore rice terraces, ancient temples, traditional markets, and art galleries'
      },
      {
        icon: Umbrella,
        title: 'Beach & Water Sports',
        description: 'Relax at Seminyak beaches and enjoy surfing, parasailing, and jet skiing'
      }
    ]
  },
  {
    id: 'himalayas',
    title: 'Himalayas: Mountain Majesty',
    duration: '7 Nights / 8 Days',
    description: [
      "Journey to the roof of the world, where snow-capped peaks touch the sky and ancient monasteries cling to mountainsides. The Eastern Himalayas offer breathtaking landscapes, rich Buddhist culture, and charming hill stations that have captivated travelers for centuries.",
      "Wake up to views of Mount Kanchenjunga, the world's third-highest peak, explore centuries-old monasteries filled with prayer flags and spinning wheels, and wander through emerald tea gardens that blanket the hillsides. Experience the unique blend of Tibetan, Nepali, and Indian cultures in Darjeeling, Gangtok, and Kalimpong."
    ],
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop',
    activities: [
      {
        icon: Mountain,
        title: 'Mountain Views',
        description: 'Witness sunrise over Kanchenjunga from Tiger Hill and various viewpoints'
      },
      {
        icon: TreePine,
        title: 'Monastery Visits',
        description: 'Explore ancient Buddhist monasteries including Rumtek and Enchey'
      },
      {
        icon: Coffee,
        title: 'Tea Plantations',
        description: 'Tour Darjeeling\'s famous tea estates and learn about tea cultivation'
      }
    ]
  }
];

export function Destinations() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <section className="py-20 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl text-gray-900 sm:text-5xl">
            Our Destinations
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our curated collection of breathtaking destinations
          </p>
        </div>
      </section>

      {/* Destination Details */}
      {destinations.map((destination, index) => (
        <section 
          key={destination.id} 
          className={index % 2 === 0 ? 'py-20' : 'py-20 bg-blue-50/50'}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-3">
                {destination.title}
              </h2>
              <p className="text-lg text-gray-600">{destination.duration}</p>
            </div>

            {/* Main Content: Description + Image - Alternating Layout */}
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              {/* Text on Left for even indices, Right for odd indices */}
              <div className={`space-y-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                {destination.description.map((paragraph, idx) => (
                  <p key={idx} className="text-base text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              {/* Image on Right for even indices, Left for odd indices */}
              <div className={`relative h-96 rounded-2xl overflow-hidden shadow-lg ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Activity Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {destination.activities.map((activity, idx) => {
                const Icon = activity.icon;
                return (
                  <Card 
                    key={idx} 
                    className="border-0 bg-gradient-to-br from-blue-50 to-blue-100/50 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mb-4 mx-auto">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 text-center mb-3">
                        {activity.title}
                      </h3>
                      <p className="text-sm text-gray-700 text-center">
                        {activity.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Package Tiers - Andaman Specific */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Flexible Package Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer multiple budget tiers to suit every traveler's needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Economy Package</h3>
                <p className="text-gray-700 mb-6">Perfect for budget-conscious travelers who don't want to compromise on experiences.</p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    3-star accommodations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    Government ferry transfers
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    Essential sightseeing tours
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-xl transform md:-translate-y-2">
              <CardContent className="p-8">
                <div className="text-center mb-4">
                  <span className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Standard Package</h3>
                <p className="text-gray-700 mb-6">The perfect balance of comfort, value, and comprehensive experiences.</p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    4-star beach resorts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    Private ferry options
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    Premium water sports included
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Deluxe Package</h3>
                <p className="text-gray-700 mb-6">Ultimate luxury experience with premium services and exclusive amenities.</p>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    5-star luxury resorts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    Premium luxury ferry service
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    All activities & spa treatments
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}