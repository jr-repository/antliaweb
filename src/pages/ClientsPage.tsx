
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageHero from "@/components/PageHero";

interface Client {
  id: number;
  name: string;
  logo: string;
  industry: string;
  featured: boolean;
}

interface CaseStudy {
  id: number;
  client: string;
  title: string;
  description: string;
  result: string;
  image: string;
  industry: string;
}

const clients: Client[] = [
  { id: 1, name: "Bank Nusantara", logo: "/assets/partner-1.png", industry: "Perbankan & Keuangan", featured: true },
  { id: 2, name: "Tech Innovations", logo: "/assets/partner-1.png", industry: "Teknologi", featured: true },
  { id: 3, name: "MegaRetail Group", logo: "/assets/partner-1.png", industry: "Ritel & E-commerce", featured: true },
  { id: 4, name: "Indo Manufactur", logo: "/assets/partner-1.png", industry: "Manufaktur", featured: true },
];

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    client: "Techno",
    title: "Penggunaan Sistem ERP",
    description: "Modernisasi sistem bISNIS LEBIH MUDAH",
    result: "30% peningkatan efisiensi operasional",
    image: "/assets/product-3.jpg",
    industry: "Perbankan & Keuangan"
  },
  {
    id: 2,
    client: "antlia",
    title: "System POS",
    description: "Implementasi SISTEM POS yang berdampak Positif",
    result: "45% peningkatan penjualan online",
    image: "/assets/product-2.jpg",
    industry: "Ritel & E-commerce"
  },
  {
    id: 3,
    client: "IKN",
    title: "Smart Factory Implementation",
    description: "iMPLEMENTASI TERBAIK",
    result: "25% pengurangan biaya operasional",
    image: "/assets/product-4.jpg",
    industry: "Manufaktur"
  }
];

const ClientsPage = () => {
  useEffect(() => {
    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // Get unique industries
  const industries = Array.from(new Set(clients.map(client => client.industry)));

  return (
    <>
      <PageHero 
        title="Klien Kami" 
        subtitle="Cerita sukses dari klien yang telah mempercayai layanan ANTLIA"
        backgroundImage="/assets/clients-hero-bg.jpg"
      />

      {/* Featured Clients */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="subtitle block mb-2">Our Partners</span>
            <h2 className="text-3xl font-bold mb-4">Klien Unggulan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Perusahaan terkemuka yang mempercayakan transformasi digital mereka kepada ANTLIA
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clients
              .filter(client => client.featured)
              .map((client) => (
                <Card 
                  key={client.id} 
                  className="hover:shadow-lg transition-all duration-300 text-center p-6 animate-on-scroll"
                  style={{animationDelay: `${client.id * 100}ms`}}
                >
                  <CardContent className="p-0">
                    <div className="h-32 flex items-center justify-center mb-4">
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="max-h-20 max-w-full transition-all duration-300 hover:scale-110" 
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{client.name}</h3>
                    <p className="text-gray-600 text-sm">{client.industry}</p>
                  </CardContent>
                </Card>
              ))
            }
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="py-16 bg-antlia-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="subtitle block mb-2">Success Stories</span>
            <h2 className="text-3xl font-bold mb-4">Studi Kasus</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kisah sukses transformasi digital bersama klien kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-on-scroll" style={{animationDelay: `${study.id * 200}ms`}}>
                <div className="h-56 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm font-medium text-antlia-blue mb-2">{study.client}</div>
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-sm font-medium">Hasil:</div>
                    <div className="text-sm text-antlia-blue font-medium">{study.result}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center animate-on-scroll" style={{animationDelay: "400ms"}}>
            <Button variant="outline" className="border-antlia-blue text-antlia-blue hover:bg-antlia-blue/10">
              Lihat Semua Studi Kasus
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="subtitle block mb-2">Client Feedback</span>
            <h2 className="text-3xl font-bold mb-4">Testimoni</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Apa yang dikatakan klien kami tentang pengalaman bekerja sama dengan ANTLIA
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Elia Fernandoo",
                position: "CIO",
                company: "Bank Nusantara",
                content: "ANTLIA memahami kebutuhan bisnis kami dengan sangat baik dan menghadirkan solusi yang jauh melampaui harapan. Sistem yang mereka kembangkan telah menjadi tulang punggung operasi kami.",
                image: "/assets/avatar-1.jpg"
              },
              {
                name: "Eva Ria Damanik",
                position: "CIO",
                company: "Bank Nusantara",
                content: "ANTLIA memahami kebutuhan bisnis kami dengan sangat baik dan menghadirkan solusi yang jauh melampaui harapan. Sistem yang mereka kembangkan telah menjadi tulang punggung operasi kami.",
                image: "/assets/avatar-1.jpg"
              },
              {
                name: "Fernando Girsang",
                position: "CIO",
                company: "Bank Nusantara",
                content: "ANTLIA memahami kebutuhan bisnis kami dengan sangat baik dan menghadirkan solusi yang jauh melampaui harapan. Sistem yang mereka kembangkan telah menjadi tulang punggung operasi kami.",
                image: "/assets/avatar-1.jpg"
              }
            ].map((testimonial, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-antlia-blue animate-on-scroll"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -top-3 -left-2 text-4xl text-antlia-blue/20">"</div>
                    <p className="relative text-gray-700 italic">{testimonial.content}</p>
                    <div className="absolute -bottom-3 -right-2 text-4xl text-antlia-blue/20">"</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* All Clients */}
      <section className="py-16 bg-antlia-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="subtitle block mb-2">Our Clientele</span>
            <h2 className="text-3xl font-bold mb-4">Semua Klien</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai perusahaan dari berbagai industri yang telah bekerja sama dengan ANTLIA
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center mb-8 gap-4 animate-on-scroll">
            {industries.map((industry, index) => (
              <Button 
                key={industry}
                variant="outline" 
                className="border-antlia-blue text-antlia-blue hover:bg-antlia-blue/10"
                style={{animationDelay: `${index * 50}ms`}}
              >
                {industry}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client) => (
              <div 
                key={client.id} 
                className="p-6 bg-white rounded-lg shadow-sm border flex items-center justify-center h-32 animate-on-scroll" 
                style={{animationDelay: `${client.id * 50}ms`}}
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-16 max-w-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-antlia-blue to-antlia-cyan rounded-xl overflow-hidden shadow-lg animate-on-scroll">
            <div className="p-8 md:p-12 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Bergabunglah dengan Klien Kami</h2>
                <p className="mb-6">
                  Mulai perjalanan transformasi digital bersama ANTLIA dan rasakan perbedaannya. 
                  Tim kami siap membantu Anda menavigasi tantangan dan memanfaatkan peluang era digital.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-white text-antlia-blue hover:bg-white/90">
                    <Link to="/kontak" className="flex items-center">
                      Hubungi Kami
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    <a 
                      href="https://wa.me/6281573635143" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Konsultasi Gratis
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientsPage;
