import { Plane, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'about' | 'services' | 'destinations' | 'contact') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Plane className="size-8 text-blue-400" />
              <span className="text-xl font-semibold">Global Travel Solution</span>
            </div>
            <p className="text-gray-400 mb-4">
              Creating unforgettable travel experiences. Your trusted partner for memorable journeys across India and beyond.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="size-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="size-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="size-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('home')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('destinations')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Destinations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Andaman Islands</li>
              <li>Bali, Indonesia</li>
              <li>Himalayas</li>
              <li>Kerala</li>
              <li>Dubai & UAE</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <Phone className="size-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mobile: +91-9784354521</p>
                  <p>Landline: +91(291)2980638</p>
                </div>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Mail className="size-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>globaltravel285@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="size-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>189, Ajeet Colony</p>
                  <p>Circuit House Road</p>
                  <p>Jodhpur, Rajasthan, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Global Travel Solution. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Cancellation Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}