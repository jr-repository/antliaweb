
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden font-poppins">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/70 z-10"></div>
        <img 
          src="/assets/hero-bg.jpg" 
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-block bg-antlia-blue/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Inovasi Digital Terdepan
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-horizon leading-tight">
            Solusi Digital untuk <span className="text-antlia-cyan">Masa Depan</span> Bisnis Anda
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            ANTLIA menghadirkan layanan teknologi informasi terdepan untuk membantu
            bisnis Anda berkembang di era digital yang kompetitif.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-antlia-blue hover:bg-antlia-blue/80 text-lg py-6">
              <Link to="/solusi">Eksplorasi Layanan</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg py-6">
              <Link to="/tentang-kami">Tentang Kami</Link>
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/20 transition-colors">
              <h3 className="text-antlia-cyan text-3xl font-bold mb-1">500+</h3>
              <p className="text-white text-sm">Klien Puas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/20 transition-colors">
              <h3 className="text-antlia-cyan text-3xl font-bold mb-1">10+</h3>
              <p className="text-white text-sm">Tahun Pengalaman</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/20 transition-colors">
              <h3 className="text-antlia-cyan text-3xl font-bold mb-1">50+</h3>
              <p className="text-white text-sm">Tim Ahli</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/20 transition-colors">
              <h3 className="text-antlia-cyan text-3xl font-bold mb-1">99%</h3>
              <p className="text-white text-sm">Uptime Layanan</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-antlia-blue/10 rounded-full transform translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-antlia-cyan/10 rounded-full transform -translate-x-1/3 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
