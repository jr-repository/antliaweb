
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  bgImage: string;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Optimalkan Rantai Pasok Anda dengan Teknologi Terdepan",
    subtitle: "Antlia by Techno King",
    description: "Solusi digital lengkap untuk meningkatkan efisiensi, transparansi, dan keberlanjutan rantai pasok Anda",
    bgImage: "/assets/hero-bg.jpg",
    buttonText: "Pelajari",
    buttonLink: "/solusi"
  },
  {
    id: 2,
    title: "Teknologi Terkini untuk Bisnis Anda",
    subtitle: "Antlia by Techno King",
    description: "Kami menggabungkan teknologi terbaru dengan strategi bisnis untuk menghadirkan solusi yang efektif dan terdepan.",
    bgImage: "/assets/hero-bg-alt.jpg", 
    buttonText: "Layanan Kami",
    buttonLink: "/produk-layanan"
  },
  {
    id: 3,
    title: "Partner Tepat untuk Pertumbuhan",
    subtitle: "Antlia by Techno King",
    description: "Tim ahli ANTLIA siap mendukung transformasi digital bisnis Anda dengan solusi yang komprehensif dan terukur.",
    bgImage: "/assets/about-hero-bg.jpg",
    buttonText: "Tentang Kami",
    buttonLink: "/tentang-kami"
  }
];

const HeroCarousel = () => {
  const isMobile = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ zIndex: index === currentSlide ? 10 : 0 }}
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60 z-10"></div>
            <img 
              src={slide.bgImage} 
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4 h-full relative z-20">
            <div className="flex items-center h-full">
              <div className="max-w-3xl">
                <span className={`subtitle inline-block mb-2 px-3 py-1 rounded-full bg-antlia-blue/10 ${
                  index === currentSlide ? "animate-fade-in" : ""
                }`} style={{ animationDelay: "0.2s" }}>
                  {slide.subtitle}
                </span>
                
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 ${
                  index === currentSlide ? "animate-fade-in" : ""
                }`} style={{ animationDelay: "0.4s" }}>
                  {slide.title.split(" ").map((word, i, arr) => 
                    i === arr.length - 1 
                      ? <span key={i} className="text-antlia-cyan"> {word}</span>
                      : <span key={i}>{i > 0 ? " " : ""}{word}</span>
                  )}
                </h1>
                
                <p className={`text-xl text-white/90 mb-8 max-w-2xl ${
                  index === currentSlide ? "animate-fade-in" : ""
                }`} style={{ animationDelay: "0.6s" }}>
                  {slide.description}
                </p>
                
                <div className={`flex flex-col sm:flex-row gap-4 ${
                  index === currentSlide ? "animate-fade-in" : ""
                }`} style={{ animationDelay: "0.8s" }}>
                  <Button size="lg" className="bg-antlia-blue hover:bg-antlia-blue/80">
                    <Link to={slide.buttonLink}>{slide.buttonText}</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    <Link to="/kontak">Hubungi Kami</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Buttons */}
      <div className="absolute bottom-10 right-10 flex gap-4 z-30">
        <Button 
          variant="outline" 
          size="icon" 
          className="w-12 h-12 rounded-full border-2 border-white text-white hover:bg-white/20"
          onClick={prevSlide}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="w-12 h-12 rounded-full border-2 border-white text-white hover:bg-white/20"
          onClick={nextSlide}
        >
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-10 left-10 flex gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? "bg-white w-10" 
                : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
