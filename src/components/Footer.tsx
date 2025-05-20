
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-[#38b6ff] to-[#a0d8ef] backdrop-blur-sm rounded-xl p-6 mb-12 text-black">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Dapatkan Update Terbaru</h3>
              <p className="text-black/80">
                Berlangganan newsletter kami untuk mendapatkan informasi terbaru tentang teknologi dan layanan kami.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black min-w-[250px] text-black"
                />
                <Button className="bg-black hover:bg-black/90 text-white font-medium">
                  Berlangganan <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/assets/antlia-logo-white.png" 
                alt="ANTLIA Logo" 
                className="h-10 mr-3"
              />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-antlia-blue to-antlia-cyan bg-clip-text text-transparent">
               
              </h2>
            </div>
            <p className="text-gray-300 mb-4">
              Menyediakan solusi teknologi inovatif untuk membantu bisnis Anda berkembang di era digital.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-antlia-blue/20 hover:text-antlia-cyan transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="instagram.com/antlia.id" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-antlia-blue/20 hover:text-antlia-cyan transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-antlia-blue/20 hover:text-antlia-cyan transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2 grid grid-cols-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-antlia-cyan transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/produk-layanan" className="text-gray-300 hover:text-antlia-cyan transition-colors">
                  Produk & Layanan
                </Link>
              </li>
              <li>
                <Link to="/tentang-kami" className="text-gray-300 hover:text-antlia-cyan transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/solusi" className="text-gray-300 hover:text-antlia-cyan transition-colors">
                  Solusi
                </Link>
              </li>
              <li>
                <Link to="/klien" className="text-gray-300 hover:text-antlia-cyan transition-colors">
                  Klien
                </Link>
              </li>
              <li>
                <Link to="/artikel" className="text-gray-300 hover:text-antlia-cyan transition-colors">
                  Artikel
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="text-gray-300 hover:text-antlia-cyan transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-gray-300 hover:text-antlia-cyan transition-colors">
                  Manage Artikel
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-antlia-cyan flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                The Avani Nittaya, BSD City, <br />
                Cisauk, Banten, Tangerang
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-antlia-cyan flex-shrink-0" />
                <a href="mailto:hotmian@technokingindonesia.com" className="text-gray-300 hover:text-antlia-cyan transition-colors">
                hotmian@technokingindonesia.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-antlia-cyan flex-shrink-0" />
                <a 

                  href="https://wa.me/6287762877273" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-antlia-cyan transition-colors"
                >
                  +62 877-6287-7273 (Pak Roni) 
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <Button className="bg-antlia-blue hover:bg-antlia-blue/80 w-full">
                <a 
                  href="https://wa.me/6287762877273" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full"
                >
                  <Phone className="w-4 h-4 mr-2" /> Hubungi via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} ANTLIA. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-antlia-cyan transition-colors">
              Kebijakan Privasi
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-antlia-cyan transition-colors">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
