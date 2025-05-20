
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
import HeroCarousel from "@/components/HeroCarousel";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import LogoMarquee from "@/components/LogoMarquee";
import FeatureCard from "@/components/FeatureCard";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import TeamSection from "@/components/TeamSection";

const partners = [
  { id: 1, name: "Company A", logo: "/assets/partner-1.png" },
  { id: 2, name: "Company B", logo: "/assets/partner-2.png" },
  { id: 3, name: "Company C", logo: "/assets/partner-3.png" },
  { id: 4, name: "Company D", logo: "/assets/partner-4.png" },
  { id: 5, name: "Company E", logo: "/assets/partner-5.png" },
  { id: 6, name: "Company F", logo: "/assets/partner-6.png" },
];

const teamMembers = [
  {
    name: "Ahmad Rasyid",
    position: "CEO & Founder",
    image: "/assets/team-1.jpg",
    bio: "Memiliki pengalaman 15 tahun di industri teknologi informasi dengan fokus pada solusi enterprise.",
    linkedin: "https://linkedin.com",
    email: "ahmad@antlia.id"
  },
  {
    name: "Siti Nuraini",
    position: "CTO",
    image: "/assets/team-2.jpg",
    bio: "Ahli teknologi dengan spesialisasi di cloud computing dan arsitektur sistem terdistribusi.",
    linkedin: "https://linkedin.com",
    email: "siti@antlia.id"
  },
  {
    name: "Budi Santoso",
    position: "Lead Developer",
    image: "/assets/team-3.jpg",
    bio: "Pengembang senior dengan keahlian di berbagai bahasa pemrograman dan framework modern.",
    linkedin: "https://linkedin.com",
    email: "budi@antlia.id"
  },
  {
    name: "Maya Putri",
    position: "UX Design Lead",
    image: "/assets/team-4.jpg",
    bio: "Desainer UX berpengalaman dengan fokus pada menciptakan pengalaman digital yang intuitif dan efisien.",
    linkedin: "https://linkedin.com",
    email: "maya@antlia.id"
  }
];

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

  return (
    <div className="flex flex-col w-full">
      <HeroCarousel />
      
      {/* Value Proposition Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="subtitle block mb-2">Why Choose Us</span>
            <h2 className="text-3xl font-bold mb-4">Mengapa Memilih ANTLIA?</h2>
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
      
      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="subtitle block mb-2">Our Products</span>
            <h2 className="text-3xl font-bold mb-4">Produk Unggulan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Solusi perangkat lunak terbaik untuk membantu bisnis Anda berkembang dan bersaing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "ANTLIA CRM",
                description: "Sistem manajemen pelanggan komprehensif dengan fitur otomatisasi dan analitik",
                image: "/assets/product-1.jpg"
              },
              {
                title: "ANTLIA ERP",
                description: "Solusi Enterprise Resource Planning terintegrasi untuk efisiensi operasional bisnis",
                image: "/assets/product-2.jpg"
              },
              {
                title: "ANTLIA Analytics",
                description: "Platform analitik data untuk mengubah data mentah menjadi wawasan bisnis yang berharga",
                image: "/assets/product-3.jpg"
              }
            ].map((product, index) => (
              <Card key={index} className="product-card overflow-hidden animate-on-scroll" style={{animationDelay: `${index * 100}ms`}}>
                <div className="h-52 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="product-overlay">
                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                    <Button className="mt-4 bg-antlia-blue hover:bg-antlia-blue/80">
                      <Link to="/produk-layanan">Lihat Detail</Link>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link 
                    to="/produk-layanan" 
                    className="text-antlia-blue hover:underline flex items-center font-medium"
                  >
                    Lihat Detail <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10 animate-on-scroll">
            <Button className="bg-antlia-blue hover:bg-antlia-blue/80">
              <Link to="/produk-layanan" className="flex items-center">
                Lihat Semua Produk <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <TeamSection 
        title="Tim Ahli Kami" 
        subtitle="Meet Our Experts"
        description="Didukung oleh profesional berpengalaman yang berdedikasi untuk memberikan yang terbaik"
        members={teamMembers}
      />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-antlia-blue/10 to-antlia-cyan/10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 relative overflow-hidden animate-on-scroll">
            <div className="absolute top-0 right-0 w-64 h-64 bg-antlia-blue/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-antlia-cyan/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4">Siap untuk Transformasi Digital?</h2>
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
      <LogoMarquee logos={partners} />
      
      {/* Blog Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="subtitle block mb-2">Latest Updates</span>
            <h2 className="text-3xl font-bold mb-4">Artikel Terbaru</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan informasi terbaru seputar teknologi dan inovasi digital
              di blog ANTLIA.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 animate-on-scroll">
              <CardHeader>
                <CardTitle>Transformasi Digital di Indonesia</CardTitle>
                <CardDescription>12 Mei 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 overflow-hidden rounded-md mb-4">
                  <img 
                    src="/assets/blog-1.jpg" 
                    alt="Transformasi Digital" 
                    className="w-full h-full object-cover"
                  />
                </div>
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
            
            <Card className="hover:shadow-lg transition-shadow duration-300 animate-on-scroll" style={{animationDelay: '100ms'}}>
              <CardHeader>
                <CardTitle>Keamanan Siber dalam Bisnis</CardTitle>
                <CardDescription>25 Juni 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 overflow-hidden rounded-md mb-4">
                  <img 
                    src="/assets/blog-2.jpg" 
                    alt="Keamanan Siber" 
                    className="w-full h-full object-cover"
                  />
                </div>
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
            
            <Card className="hover:shadow-lg transition-shadow duration-300 animate-on-scroll" style={{animationDelay: '200ms'}}>
              <CardHeader>
                <CardTitle>Cloud Computing untuk UKM</CardTitle>
                <CardDescription>8 Juli 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 overflow-hidden rounded-md mb-4">
                  <img 
                    src="/assets/blog-3.jpg" 
                    alt="Cloud Computing" 
                    className="w-full h-full object-cover"
                  />
                </div>
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
