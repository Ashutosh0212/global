import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onBookNow: () => void;
}

export function Hero({ onBookNow }: HeroProps) {
  return (
    <div 
      className="relative min-h-[600px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1644813949013-c8ccb1f4e26b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodCUyMGFpcnklMjBiZWFjaCUyMHNreXxlbnwxfHx8fDE3NjQ4MjQ4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/40"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Discover Your Next</span>
          <span className="block text-primary">Great Adventure</span>
        </h1>
        <p className="mt-6 text-lg text-gray-700 sm:text-xl md:text-2xl max-w-3xl mx-auto">
          Your journey to extraordinary experiences begins here
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={onBookNow}
            className="w-full sm:w-auto flex items-center justify-center px-8 py-3 text-base"
          >
            Book Now
            <ArrowRight className="ml-2 size-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={onBookNow}
            className="w-full sm:w-auto flex items-center justify-center px-8 py-3 text-base bg-white/80 hover:bg-white"
          >
            Enquire Today
          </Button>
        </div>
      </div>
    </div>
  );
}