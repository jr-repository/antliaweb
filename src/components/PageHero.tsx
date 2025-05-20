
import React from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHero = ({ title, subtitle, backgroundImage = "/assets/hero-bg-alt.jpg" }: PageHeroProps) => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/70 z-10"></div>
        <img 
          src={backgroundImage} 
          alt={`${title} Background`}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title} <span className="text-antlia-cyan">ANTLIA</span>
          </h1>
          {subtitle && (
            <p className="text-lg text-white/90 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
