import { Button } from './ui/button';
import { ArrowRight, Phone } from 'lucide-react';

interface CTASectionProps {
  onBookNow: () => void;
}

export function CTASection({ onBookNow }: CTASectionProps) {
  return (
    <section className="py-20 bg-[#2596be] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl text-white sm:text-4xl md:text-5xl mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Let us turn your travel dreams into reality. Get in touch today and discover personalized journeys crafted just for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={onBookNow}
              className="bg-white text-[#2596be] hover:bg-gray-100 gap-2 text-lg px-8"
            >
              Book Your Trip Now
              <ArrowRight className="size-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 gap-2 text-lg px-8"
            >
              <Phone className="size-5" />
              Call Us: +91 98765 43210
            </Button>
          </div>

          <p className="mt-8 text-white/80 text-sm">
            📞 Available 7 days a week | 🌍 Trusted by 50,000+ travelers
          </p>
        </div>
      </div>
    </section>
  );
}
