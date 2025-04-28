
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Mail, Instagram, Twitter, Facebook, MapPin, Phone, Linkedin} from 'lucide-react';
import { color } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/30 backdrop-blur-sm border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-white/70 text-sm">
              A community dedicated to excellence and innovation.
            </p>
            <div className="flex mt-6 space-x-4">
              <a target='_blank' href="https://www.instagram.com/data_polaris?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-white/50 hover:text-red-500 transition-colors">
                <Instagram size={25} />
              </a>
              <a href="https://www.linkedin.com/company/club-data-polaris" className="text-white/50 hover:text-club-accent transition-colors">
                <Linkedin size={25} />
              </a>
              <a href="#" className="text-white/50 hover:text-club-accent transition-colors">
                <Facebook size={25} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-orange-500 transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-orange-500 transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/team" className="text-white/70 hover:text-orange-500 transition-colors text-sm">Our Team</Link>
              </li>
              <li>
                <Link to="/events" className="text-white/70 hover:text-orange-500 transition-colors text-sm">Events</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/70 hover:text-orange-500 transition-colors text-sm">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-orange-500 transition-colors text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={16} className="text-club-accent mt-1 mr-2 flex-shrink-0" />
                <span className="text-white/70 text-sm">R. C. Patel Institute of Technology, Near Nimzari Naka, Shahada Road, Shirpur, Maharashtra - 425405</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-club-accent mr-2 flex-shrink-0" />
                <a href="tel:7559166455"><span className="text-white/70 text-sm">+91 7559166455</span></a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-club-accent mr-2 flex-shrink-0" />
               <a href="mailto:datapolaris.cse.rcpit@gmail.com"> <span className="text-white/70 text-sm">datapolaris.cse.rcpit@gmail.com</span></a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4 text-white">Newsletter</h3>
            <p className="text-white/70 text-sm mb-4">Subscribe to stay updated with our latest news and events.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-club-accent"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-md bg-club-accent hover:bg-club-accent/90 text-white font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center bg-gray-900 p-4">
      <p className="text-white/50 text-sm">
        © {new Date().getFullYear()} Data Polaris. All rights reserved.
      </p>
      <p className="text-white text-sm flex justify-center items-center gap-2 mt-2">
        Developed <span className="animate-pulse text-red-500 text-xl">✨</span> by <a href="https://www.instagram.com/data_polaris/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#"><b>Data Polaris Development Team</b></a>
      </p>
    </div>

      </div>
    </footer>
  );
};

export default Footer;
