
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Code, Cloud, Shield, Smartphone, Database } from "lucide-react";
import PageHero from "@/components/PageHero";

interface Service {
  id: number;
  slug: string;
  name: string;
  shortDescription: string;
  icon: React.ReactNode;
  image: string;
  category: string;
  featured: boolean;
}

const services: Service[] = [
  {
    id: 1,
    slug: "pengembangan-aplikasi-kustom",
    name: "Pengembangan Aplikasi Kustom",
    shortDescription: "Membangun aplikasi yang disesuaikan dengan kebutuhan spesifik bisnis Anda",
    icon: <Code className="w-6 h-6" />,
    image: "/assets/service-1.jpg",
    category: "Development",
    featured: true
  },
  {
    id: 2,
    slug: "konsultasi-it",
    name: "Konsultasi IT",
    shortDescription: "Pemetaan strategi teknologi untuk mendukung tujuan bisnis Anda",
    icon: <Users className="w-6 h-6" />,
    image: "/assets/service-2.jpg",
    category: "Consulting",
    featured: true
  },
  {
    id: 3,
    slug: "cloud-migration",
    name: "Cloud Migration",
    shortDescription: "Migrasi sistem ke cloud dengan aman dan efisien untuk skalabilitas yang lebih baik",
    icon: <Cloud className="w-6 h-6" />,
    image: "/assets/service-3.jpg",
    category: "Cloud",
    featured: true
  },
  {
    id: 4,
    slug: "keamanan-cyber",
    name: "Keamanan Cyber",
    shortDescription: "Lindungi aset digital Anda dengan solusi keamanan siber komprehensif",
    icon: <Shield className="w-6 h-6" />,
    image: "/assets/service-4.jpg",
    category: "Security",
    featured: false
  },
  {
    id: 5,
    slug: "pengembangan-web-mobile",
    name: "Pengembangan Web & Mobile",
    shortDescription: "Wujudkan kehadiran digital Anda dengan aplikasi web dan mobile yang responsif",
    icon: <Smartphone className="w-6 h-6" />,
    image: "/assets/service-5.jpg",
    category: "Development",
    featured: false
  },
  {
    id: 6,
    slug: "analisis-data-bi",
    name: "Analisis Data & BI",
    shortDescription: "Ekstrak nilai dari data Anda untuk pengambilan keputusan yang lebih baik",
    icon: <Database className="w-6 h-6" />,
    image: "/assets/service-6.jpg",
    category: "Analytics",
    featured: false
  }
];

const ServicesPage = () => {
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

  // Split services into featured and regular
  const featuredServices = services.filter(service => service.featured);
  const regularServices = services.filter(service => !service.featured);

  return (
    <>
      <PageHero 
        title="Layanan Profesional" 
        subtitle="Jasa konsultasi dan implementasi teknologi oleh tim ahli berpengalaman"
        backgroundImage="/assets/solutions-hero-bg.jpg"
      />

      {/* Featured Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="subtitle block mb-2">Our Services</span>
            <h2 className="text-3xl font-bold mb-4">Layanan Utama</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jasa profesional ANTLIA untuk membantu transformasi digital bisnis Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Card key={service.id} className="service-card animate-on-scroll" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative h-48">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-antlia-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                      {service.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="w-12 h-12 bg-antlia-blue/10 rounded-lg flex items-center justify-center mb-4 text-antlia-blue">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{service.shortDescription}</p>
                    <Link 
                      to={`/layanan/${service.slug}`} 
                      className="text-antlia-blue hover:underline flex items-center font-medium self-start mt-auto"
                    >
                      Lihat Detail <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* All Services */}
      <section className="py-16 bg-antlia-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="subtitle block mb-2">Professional Services</span>
            <h2 className="text-3xl font-bold mb-4">Semua Layanan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jelajahi berbagai jasa profesional untuk mendukung kebutuhan teknologi bisnis Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularServices.map((service, index) => (
              <Card key={service.id} className="service-card h-full animate-on-scroll" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-antlia-blue/10 rounded-lg flex items-center justify-center mr-4 text-antlia-blue">
                      {service.icon}
                    </div>
                    <div>
                      <span className="text-xs font-medium text-antlia-blue/80">{service.category}</span>
                      <h3 className="text-lg font-semibold">{service.name}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">{service.shortDescription}</p>
                  <Link 
                    to={`/layanan/${service.slug}`} 
                    className="text-antlia-blue hover:underline flex items-center font-medium self-start mt-auto"
                  >
                    Lihat Detail <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="subtitle block mb-2">Our Methodology</span>
            <h2 className="text-3xl font-bold mb-4">Pendekatan Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bagaimana kami menghadirkan solusi yang efektif dan bernilai tinggi untuk klien kami
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-antlia-blue/20 transform -translate-x-1/2"></div>
            
            {[
              {
                step: "01",
                title: "Discovery & Assessment",
                description: "Kami memulai dengan memahami kebutuhan spesifik bisnis Anda, mengidentifikasi tantangan, dan menentukan tujuan."
              },
              {
                step: "02",
                title: "Strategic Planning",
                description: "Berdasarkan assessment, kami merancang roadmap dan strategi implementasi yang selaras dengan tujuan bisnis Anda."
              },
              {
                step: "03",
                title: "Solution Development",
                description: "Tim ahli kami mengembangkan solusi kustom dengan menggunakan metodologi agile dan praktik terbaik industri."
              },
              {
                step: "04",
                title: "Implementation",
                description: "Kami mengimplementasikan solusi dengan hati-hati, memastikan minimal disrupsi pada operasi yang sedang berjalan."
              },
              {
                step: "05",
                title: "Training & Onboarding",
                description: "Kami melatih tim Anda untuk memaksimalkan potensi solusi yang diimplementasikan."
              },
              {
                step: "06",
                title: "Ongoing Support",
                description: "Dukungan berkelanjutan dan peningkatan untuk memastikan solusi terus memberikan nilai optimal."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-12 animate-on-scroll`}
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-antlia-blue flex items-center justify-center text-antlia-blue font-bold z-10">
                  {item.step}
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-antlia-light">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-antlia-blue to-antlia-cyan rounded-xl overflow-hidden shadow-lg animate-on-scroll">
            <div className="p-8 md:p-12 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Butuh Solusi Khusus?</h2>
                <p className="mb-6">
                  Tim ANTLIA siap membantu Anda dengan solusi yang disesuaikan dengan kebutuhan spesifik bisnis Anda.
                  Hubungi kami sekarang untuk konsultasi gratis.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-white text-antlia-blue hover:bg-white/90">
                    <Link to="/kontak" className="flex items-center">
                      Konsultasi Gratis
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    <a 
                      href="https://wa.me/6281573635143" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Hubungi via WhatsApp
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

export default ServicesPage;
