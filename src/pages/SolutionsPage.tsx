
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Laptop, Heart, Settings, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import FeatureCard from "@/components/FeatureCard";

const SolutionsPage = () => {
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

  return (
    <>
      <PageHero 
        title="Solusi" 
        subtitle="Pendekatan komprehensif untuk tantangan bisnis dengan teknologi terkini"
        backgroundImage="/assets/solutions-hero-bg.jpg"
      />

      {/* Industry Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <span className="subtitle block mb-2">Industry Focus</span>
              <h2 className="text-3xl font-bold mb-6">Solusi Industri</h2>
              <p className="text-gray-600 mb-6">
                ANTLIA menyediakan solusi yang dirancang khusus untuk berbagai sektor industri, 
                memahami tantangan unik yang dihadapi oleh setiap sektor dan menghadirkan teknologi 
                yang relevan untuk mengatasi tantangan tersebut.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-antlia-blue/20 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Perbankan & Keuangan</h3>
                    <p className="text-sm text-gray-600">Solusi keamanan dan analitik untuk lembaga keuangan</p>
                  </CardContent>
                </Card>
                <Card className="border-antlia-blue/20 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Ritel & E-commerce</h3>
                    <p className="text-sm text-gray-600">Platform omnichannel untuk pengalaman pelanggan terbaik</p>
                  </CardContent>
                </Card>
                <Card className="border-antlia-blue/20 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Manufaktur</h3>
                    <p className="text-sm text-gray-600">Otomatisasi dan optimasi proses produksi</p>
                  </CardContent>
                </Card>
                <Card className="border-antlia-blue/20 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Kesehatan</h3>
                    <p className="text-sm text-gray-600">Sistem manajemen data pasien dan telemedicine</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative animate-on-scroll" style={{animationDelay: "200ms"}}>
              <img
                src="/assets/industry-solutions.jpg"
                alt="Solusi Industri"
                className="rounded-xl shadow-xl w-full h-auto"
              />
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white via-white/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Transformation Solutions */}
      <section className="py-16 bg-antlia-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="subtitle block mb-2">Digital Evolution</span>
            <h2 className="text-3xl font-bold mb-4">Solusi Transformasi Digital</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pendekatan holistik untuk transformasi digital bisnis Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Digital Workplace" 
              description="Platform kolaborasi dan produktivitas untuk lingkungan kerja modern dan fleksibel"
              icon="Laptop"
              delay={100}
            />
            <FeatureCard 
              title="Customer Experience" 
              description="Solusi yang mengutamakan pengalaman pelanggan di semua titik kontak digital"
              icon="Heart"
              delay={200}
            />
            <FeatureCard 
              title="Digital Operations" 
              description="Otomatisasi dan optimasi proses bisnis untuk efisiensi operasional yang lebih tinggi"
              icon="Settings"
              delay={300}
            />
          </div>
        </div>
      </section>
      
      {/* Featured Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="subtitle block mb-2">Our Innovations</span>
            <h2 className="text-3xl font-bold mb-4">Solusi Unggulan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan solusi inovatif yang kami kembangkan untuk mengatasi tantangan bisnis modern
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enterprise Automation Suite",
                description: "Platform otomatisasi bisnis end-to-end yang mengintegrasikan RPA, AI, dan workflow management.",
                features: [
                  "Otomatisasi proses bisnis",
                  "Workflow management terintegrasi",
                  "Analisis proses & optimasi",
                  "Dashboard kinerja real-time"
                ],
                image: "/assets/case-study-1.jpg",
                link: "/produk/enterprise-automation-suite"
              },
              {
                title: "Smart Data Platform",
                description: "Solusi manajemen data yang mengumpulkan, menganalisis, dan memvisualisasikan data bisnis Anda.",
                features: [
                  "ETL pipeline otomatis",
                  "Machine learning insights",
                  "Visualisasi data interaktif",
                  "Prediktif analitik"
                ],
                image: "/assets/case-study-2.jpg",
                link: "/produk/smart-data-platform"
              },
              {
                title: "Integrated Security Framework",
                description: "Framework keamanan komprehensif untuk melindungi aset digital bisnis Anda.",
                features: [
                  "Threat intelligence",
                  "Vulnerability management",
                  "Compliance monitoring",
                  "Zero-trust architecture"
                ],
                image: "/assets/case-study-3.jpg",
                link: "/produk/integrated-security-framework"
              }
            ].map((solution, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-on-scroll" style={{animationDelay: `${index * 150}ms`}}>
                <div className="h-52 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Fitur Utama:</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-antlia-blue mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    to={solution.link} 
                    className="text-antlia-blue hover:underline flex items-center font-medium mt-4"
                  >
                    Pelajari Lebih Lanjut <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Methodology */}
      <section className="py-16 bg-antlia-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="subtitle block mb-2">Our Approach</span>
            <h2 className="text-3xl font-bold mb-4">Metodologi Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pendekatan terstruktur untuk memastikan kesuksesan proyek transformasi digital Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Penilaian & Perencanaan",
                description: "Menganalisis kebutuhan dan menyusun roadmap transformasi digital yang sesuai"
              },
              {
                step: "02",
                title: "Desain & Pengembangan",
                description: "Merancang dan membangun solusi dengan metodologi agile"
              },
              {
                step: "03",
                title: "Implementasi & Integrasi",
                description: "Menerapkan solusi dan mengintegrasikannya dengan sistem yang ada"
              },
              {
                step: "04",
                title: "Pelatihan & Adopsi",
                description: "Memastikan tim Anda siap mengoptimalkan solusi baru"
              },
              {
                step: "05",
                title: "Evaluasi & Pengembangan",
                description: "Mengukur hasil dan terus meningkatkan solusi berdasarkan feedback"
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-antlia-blue animate-on-scroll" 
                style={{animationDelay: `${index * 100}ms`}}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-antlia-blue/10 flex items-center justify-center mb-4 text-antlia-blue font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Business Outcomes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="subtitle block mb-2">Results & Impact</span>
            <h2 className="text-3xl font-bold mb-4">Hasil Bisnis</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dampak nyata yang dihasilkan oleh solusi ANTLIA untuk bisnis klien kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                metric: "35%",
                title: "Peningkatan Efisiensi",
                description: "Rata-rata peningkatan efisiensi operasional yang dicapai klien kami"
              },
              {
                metric: "40%",
                title: "Pengurangan Biaya",
                description: "Rata-rata pengurangan biaya operasional melalui otomatisasi dan optimasi"
              },
              {
                metric: "50%",
                title: "Peningkatan Keterlibatan",
                description: "Rata-rata peningkatan keterlibatan pelanggan melalui pengalaman digital yang lebih baik"
              },
              {
                metric: "28%",
                title: "Pertumbuhan Pendapatan",
                description: "Rata-rata pertumbuhan pendapatan yang dicapai melalui solusi digital kami"
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 text-center animate-on-scroll" 
                style={{animationDelay: `${index * 100}ms`}}
              >
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-antlia-blue mb-4">{item.metric}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
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
                <h2 className="text-3xl font-bold mb-4">Mulai Transformasi Digital Anda</h2>
                <p className="mb-6">
                  Tim ANTLIA siap membantu Anda mengidentifikasi solusi yang tepat untuk kebutuhan bisnis Anda.
                  Hubungi kami sekarang untuk konsultasi awal.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-white text-antlia-blue hover:bg-white/90">
                    <Link to="/kontak" className="flex items-center">
                      Jadwalkan Konsultasi
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

export default SolutionsPage;
