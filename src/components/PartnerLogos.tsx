
import React from "react";

const partners = [
  { id: 1, name: "Company A", logo: "/assets/partner-1.png" },
  { id: 2, name: "Company B", logo: "/assets/partner-2.png" },
  { id: 3, name: "Company C", logo: "/assets/partner-3.png" },
  { id: 4, name: "Company D", logo: "/assets/partner-4.png" },
  { id: 5, name: "Company E", logo: "/assets/partner-5.png" },
  { id: 6, name: "Company F", logo: "/assets/partner-6.png" },
];

const PartnerLogos = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl font-bold mb-4">Mitra Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami telah bekerja sama dengan berbagai perusahaan terkemuka
            untuk memberikan solusi teknologi terbaik.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 animate-on-scroll">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="w-32 h-20 md:w-40 md:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
