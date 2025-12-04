import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800&auto=format&fit=crop',
    title: 'Andaman Beach',
    location: 'Andaman Islands'
  },
  {
    url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop',
    title: 'Bali Temple',
    location: 'Bali, Indonesia'
  },
  {
    url: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
    title: 'Himalayan Peaks',
    location: 'Himalayas'
  },
  {
    url: 'https://images.unsplash.com/photo-1704365159740-ab1f3556044a?q=80&w=800&auto=format&fit=crop',
    title: 'Kerala Backwaters',
    location: 'Kerala'
  },
  {
    url: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop',
    title: 'Beach Sunset',
    location: 'Tropical Paradise'
  },
  {
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop',
    title: 'Mountain Vista',
    location: 'Mountain Ranges'
  }
];

export function TravelGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900 sm:text-4xl">
            Captured Moments
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            A glimpse into the adventures that await you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm">{image.title}</p>
                  <p className="text-xs text-gray-300">{image.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
