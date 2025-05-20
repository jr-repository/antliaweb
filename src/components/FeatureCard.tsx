
import React from "react";
import * as Icons from "lucide-react";
import { CheckCircle } from "lucide-react";  // Import a fallback icon explicitly

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  delay?: number;
}

const FeatureCard = ({ title, description, icon, delay = 0 }: FeatureCardProps) => {
  // Determine which icon to display based on the icon prop
  let IconComponent: React.ElementType = CheckCircle; // Default fallback
  
  // Only try to access a dynamic icon if it exists in the Icons object
  if (icon && typeof icon === 'string' && icon in Icons) {
    // Use type assertion to tell TypeScript this is a React component
    IconComponent = Icons[icon as keyof typeof Icons] as React.ElementType;
  }
  
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 animate-on-scroll" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-3 bg-antlia-blue/10 rounded-full">
          <IconComponent className="w-8 h-8 text-antlia-blue" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
