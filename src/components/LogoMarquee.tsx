
import React from "react";

interface LogoMarqueeProps {
  logos: {
    id: number;
    name: string;
    logo: string;
  }[];
}

const LogoMarquee = ({ logos }: LogoMarqueeProps) => {
  // Duplicate logos to ensure smooth infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden bg-white py-8">
      <div className="flex animate-marquee space-x-12">
        {duplicatedLogos.map((logo, index) => (
          <div 
            key={`${logo.id}-${index}`} 
            className="w-32 h-20 md:w-40 md:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
          >
            <img 
              src={logo.logo} 
              alt={logo.name} 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
