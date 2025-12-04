import { useState } from 'react';
import { Hero } from './components/Hero';
import { FeaturedPackages } from './components/FeaturedPackages';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { TravelGallery } from './components/TravelGallery';
import { TravelStats } from './components/TravelStats';
import { CTASection } from './components/CTASection';
import { About } from './components/About';
import { Services } from './components/Services';
import { Destinations } from './components/Destinations';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Button } from './components/ui/button';
import { Menu, X, Plane } from 'lucide-react';
import { motion } from 'framer-motion';

type Page = 'home' | 'about' | 'services' | 'destinations' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity font-semibold tracking-wide"
            >
              <Plane className="size-8 text-primary" />
              <span className="text-xl text-primary font-bold tracking-tight">Global Travels</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 font-medium">
              <button
                onClick={() => scrollToSection('home')}
                className={`transition-all hover:scale-105 ${
                  currentPage === 'home' ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`transition-all hover:scale-105 ${
                  currentPage === 'about' ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`transition-all hover:scale-105 ${
                  currentPage === 'services' ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('destinations')}
                className={`transition-all hover:scale-105 ${
                  currentPage === 'destinations' ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
                }`}
              >
                Destinations
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`transition-all hover:scale-105 ${
                  currentPage === 'contact' ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'
                }`}
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all hover:scale-105 px-6 rounded-full font-semibold"
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-blue-50 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection('home')}
                  className={`text-left px-4 py-2 ${
                    currentPage === 'home' ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className={`text-left px-4 py-2 ${
                    currentPage === 'about' ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className={`text-left px-4 py-2 ${
                    currentPage === 'services' ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('destinations')}
                  className={`text-left px-4 py-2 ${
                    currentPage === 'destinations' ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  Destinations
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`text-left px-4 py-2 ${
                    currentPage === 'contact' ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  Contact
                </button>
                <div className="px-4">
                  <Button onClick={() => scrollToSection('contact')} className="w-full">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {currentPage === 'home' && (
          <>
            <Hero onBookNow={() => scrollToSection('contact')} />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <TravelStats />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FeaturedPackages onViewAll={() => scrollToSection('destinations')} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <WhyChooseUs />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Testimonials />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <TravelGallery />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <CTASection onBookNow={() => scrollToSection('contact')} />
            </motion.div>
          </>
        )}
        
        {currentPage === 'about' && <About />}
        
        {currentPage === 'services' && (
          <Services />
        )}
        
        {currentPage === 'destinations' && (
          <Destinations />
        )}
        
        {currentPage === 'contact' && <Contact />}
      </main>

      <Footer onNavigate={scrollToSection} />
    </div>
  );
}