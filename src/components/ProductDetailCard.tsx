
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Feature {
  text: string;
}

interface ProductDetailCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  features: Feature[];
  buttonText?: string;
  buttonLink?: string;
}

const ProductDetailCard = ({
  id,
  name,
  description,
  image,
  features,
  buttonText = "Hubungi Kami",
  buttonLink = "/kontak",
}: ProductDetailCardProps) => {
  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="lg:col-span-2 h-full">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto"
            />
          </div>
          <div className="lg:col-span-3 p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-4 font-horizon">{name}</h3>
            <p className="text-gray-600 mb-6">{description}</p>
            
            <h4 className="text-lg font-semibold mb-3">Fitur dan Keunggulan:</h4>
            <ul className="space-y-2 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-antlia-blue mr-2 shrink-0" />
                  <span className="text-gray-600">{feature.text}</span>
                </li>
              ))}
            </ul>
            
            <Button className="bg-antlia-blue hover:bg-antlia-blue/80 mt-4" asChild>
              <Link to={buttonLink}>{buttonText}</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductDetailCard;
