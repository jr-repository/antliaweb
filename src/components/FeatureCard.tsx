
import React from "react";
import * as LucideIcons from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: keyof typeof LucideIcons;
  delay?: number;
}

const FeatureCard = ({ title, description, icon, delay = 0 }: FeatureCardProps) => {
  // Check if the icon exists in lucide-react
  const IconComponent = LucideIcons[icon];
  
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 animate-on-scroll" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-3 bg-antlia-blue/10 rounded-full">
          {IconComponent ? <IconComponent className="w-8 h-8 text-antlia-blue" /> : <div className="w-8 h-8" />}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
