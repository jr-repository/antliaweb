
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { ChevronRight, Phone, Mail, ArrowRight, CheckCircle } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import FeatureCard from "@/components/FeatureCard";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import MediaCarousel from "@/components/MediaCarousel";
import LogoMarquee from "@/components/LogoMarquee";

const HomePage = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Initialize AOS-like animations
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      animatedElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const mediaItems = [
    { id: 1, type: "image" as const, src: "/assets/portfolio-1.jpg", alt: "Digital Transformation Project" },
    { id: 2, type: "image" as const, src: "/assets/portfolio-2.jpg", alt: "Mobile App Development" },
    { id: 3, type: "image" as const, src: "/assets/portfolio-3.jpg", alt: "Cloud Migration Services" },
    { id: 4, type: "video" as const, src: "/assets/video-1.mp4", thumbnail: "/assets/video-thumb-1.jpg", alt: "Client Success Story" },
    { id: 5, type: "video" as const, src: "/assets/video-2.mp4", thumbnail: "/assets/video-thumb-2.jpg", alt: "Product Demo" }
  ];

  const partners = [
    { id: 1, name: "Microsoft", logo: "/assets/partner-1.png" },
    { id: 2, name: "Google Cloud", logo: "/assets/partner-2.png" },
    { id: 3, name: "Amazon AWS", logo: "/assets/partner-3.png" },
    { id: 4, name: "Oracle", logo: "/assets/partner-4.png" },
    { id: 5, name: "IBM", logo: "/assets/partner-5.png" },
    { id: 6, name: "Cisco", logo: "/assets/partner-6.png" },
  ];

  return (
    <div className="flex flex-col w-full font-poppins">
      <HeroSection />
      
      {/* Portfolio Showcase Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4 font-horizon">Portofolio Proyek</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lihat beberapa proyek terbaik yang telah kami kerjakan untuk berbagai klien
              di berbagai industri.
            </p>
          </div>
          
          <div className="animate-on-scroll">
            <MediaCarousel items={mediaItems} />
          </div>
        </div>
      </section>
      
      {/* Value Proposition Section */}
      <section className="py-16 bg-antlia-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4 font-horizon">Mengapa Memilih ANTLIA?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ANTLIA menyediakan solusi teknologi terbaik untuk membantu bisnis Anda
              berkembang di era digital. Kami menggabungkan keahlian teknologi dengan
              pemahaman bisnis yang mendalam.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Keahlian Teknis" 
              description="Tim ahli kami memiliki pengalaman luas dalam berbagai teknologi terkini"
              icon="CheckCircle"
              delay={100}
            />
            <FeatureCard 
              title="Solusi Kustom" 
              description="Kami membangun solusi yang disesuaikan dengan kebutuhan spesifik bisnis Anda"
              icon="CheckCircle" 
              delay={200}
            />
            <FeatureCard 
              title="Dukungan 24/7" 
              description="Layanan dukungan teknis tersedia 24 jam setiap hari untuk memastikan bisnis Anda selalu berjalan lancar"
              icon="CheckCircle"
              delay={300}
            />
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-antlia-blue/10 to-antlia-cyan/10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 relative overflow-hidden animate-on-scroll">
            <div className="absolute top-0 right-0 w-64 h-64 bg-antlia-blue/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-antlia-cyan/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4 font-horizon">Siap untuk Transformasi Digital?</h2>
                <p className="text-gray-600 mb-6 max-w-xl">
                  Mari diskusikan bagaimana ANTLIA dapat membantu bisnis Anda berkembang
                  melalui solusi teknologi yang inovatif dan efisien.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button className="bg-antlia-blue hover:bg-antlia-blue/80">
                    <Link to="/kontak" className="flex items-center">
                      Hubungi Kami <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-antlia-blue text-antlia-blue hover:bg-antlia-blue/10">
                    <a 
                      href="https://wa.me/6281573635143" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      WhatsApp <Phone size={16} className="ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <img 
                  src="/assets/cta-image.png" 
                  alt="Digital Transformation" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <TestimonialsSlider />
      
      {/* Partner Logos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4 font-horizon">Mitra Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami telah bekerja sama dengan berbagai perusahaan terkemuka
              untuk memberikan solusi teknologi terbaik.
            </p>
          </div>
          
          <div className="overflow-hidden animate-on-scroll">
            <LogoMarquee logos={partners} />
          </div>
        </div>
      </section>
      
      {/* Blog Preview Section */}
      <section className="py-16 bg-antlia-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4 font-horizon">Artikel Terbaru</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan informasi terbaru seputar teknologi dan inovasi digital
              di blog ANTLIA.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 animate-on-scroll border-0 shadow-sm overflow-hidden">
              <CardHeader className="p-0">
                <div className="h-52 overflow-hidden">
                  <img 
                    src="/assets/blog-1.jpg" 
                    alt="Transformasi Digital" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-antlia-blue font-medium">12 Mei 2023</CardDescription>
                <CardTitle className="mt-2 mb-3">Transformasi Digital di Indonesia</CardTitle>
                <p className="text-gray-600">
                  Bagaimana perusahaan Indonesia mengadopsi transformasi digital untuk tetap kompetitif di era modern.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/artikel/memahami-transformasi-digital-di-indonesia" className="text-antlia-blue hover:underline flex items-center">
                  Baca selengkapnya <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 animate-on-scroll border-0 shadow-sm overflow-hidden" style={{animationDelay: '100ms'}}>
              <CardHeader className="p-0">
                <div className="h-52 overflow-hidden">
                  <img 
                    src="/assets/blog-2.jpg" 
                    alt="Keamanan Siber" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-antlia-blue font-medium">25 Juni 2023</CardDescription>
                <CardTitle className="mt-2 mb-3">Keamanan Siber dalam Bisnis</CardTitle>
                <p className="text-gray-600">
                  Mengapa keamanan siber harus menjadi prioritas utama bagi setiap bisnis di era digital.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/artikel/keamanan-siber-tantangan-era-digital" className="text-antlia-blue hover:underline flex items-center">
                  Baca selengkapnya <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 animate-on-scroll border-0 shadow-sm overflow-hidden" style={{animationDelay: '200ms'}}>
              <CardHeader className="p-0">
                <div className="h-52 overflow-hidden">
                  <img 
                    src="/assets/blog-3.jpg" 
                    alt="Cloud Computing" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-antlia-blue font-medium">8 Juli 2023</CardDescription>
                <CardTitle className="mt-2 mb-3">Cloud Computing untuk UKM</CardTitle>
                <p className="text-gray-600">
                  Manfaat dan panduan implementasi cloud computing untuk Usaha Kecil dan Menengah di Indonesia.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/artikel" className="text-antlia-blue hover:underline flex items-center">
                  Baca selengkapnya <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link to="/artikel" className="flex items-center">
                Lihat Semua Artikel <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
