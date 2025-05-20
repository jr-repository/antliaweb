
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  bio: string;
  linkedin?: string;
  email?: string;
}

interface TeamSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  members: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ 
  title = "Tim Kami", 
  subtitle = "Meet Our Experts",
  description = "Didukung oleh profesional berpengalaman yang berdedikasi untuk memberikan yang terbaik",
  members 
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="subtitle block mb-2">{subtitle}</span>
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden animate-on-scroll" style={{animationDelay: `${index * 100}ms`}}>
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden group">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-white text-sm">{member.bio}</p>
                    <div className="flex gap-2 mt-3">
                      {member.linkedin && (
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-antlia-blue/80 transition-colors"
                        >
                          <Linkedin className="w-4 h-4 text-white" />
                        </a>
                      )}
                      {member.email && (
                        <a 
                          href={`mailto:${member.email}`} 
                          className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-antlia-blue/80 transition-colors"
                        >
                          <Mail className="w-4 h-4 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
