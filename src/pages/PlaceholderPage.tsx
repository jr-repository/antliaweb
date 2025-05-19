
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PlaceholderPage = () => {
  const location = useLocation();
  let title = "";
  let description = "";
  let content;

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

  // Get the content based on the path
  if (location.pathname === "/produk-layanan") {
    title = "Produk & Layanan";
    description = "Kami menyediakan berbagai produk dan layanan teknologi informasi untuk memenuhi kebutuhan bisnis Anda.";
    content = <ProductsServices />;
  } else if (location.pathname === "/tentang-kami") {
    title = "Tentang Kami";
    description = "ANTLIA adalah perusahaan teknologi informasi yang berdedikasi untuk membantu bisnis berkembang di era digital.";
    content = <AboutUs />;
  } else if (location.pathname === "/solusi") {
    title = "Solusi";
    description = "Kami menawarkan berbagai solusi teknologi yang dapat disesuaikan dengan kebutuhan spesifik bisnis Anda.";
    content = <Solutions />;
  } else if (location.pathname === "/klien") {
    title = "Klien";
    description = "Kami telah bekerja sama dengan berbagai perusahaan dari berbagai industri untuk memberikan solusi teknologi terbaik.";
    content = <Clients />;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
      {content}
    </div>
  );
};

const ProductsServices = () => {
  const services = [
    {
      id: 1,
      title: "Pengembangan Web",
      description: "Kami membangun website profesional yang responsif dan user-friendly sesuai kebutuhan bisnis Anda.",
      icon: "/assets/web-dev-icon.png",
      features: [
        "Desain website custom dan responsive",
        "Integrasi sistem manajemen konten (CMS)",
        "Optimasi SEO dan performa website",
        "Integrasi e-commerce dan pembayaran online"
      ]
    },
    {
      id: 2,
      title: "Aplikasi Mobile",
      description: "Kembangkan aplikasi mobile Android dan iOS yang inovatif untuk menjangkau pelanggan di mana saja.",
      icon: "/assets/mobile-app-icon.png",
      features: [
        "Aplikasi native untuk Android dan iOS",
        "Aplikasi hybrid yang hemat biaya",
        "Integrasi dengan sistem backend",
        "Desain UX/UI yang intuitif dan menarik"
      ]
    },
    {
      id: 3,
      title: "Solusi Cloud",
      description: "Pindahkan infrastruktur IT Anda ke cloud untuk skalabilitas, fleksibilitas, dan efisiensi yang lebih baik.",
      icon: "/assets/cloud-icon.png",
      features: [
        "Konsultasi dan perencanaan migrasi cloud",
        "Implementasi layanan AWS, Azure, dan Google Cloud",
        "Pengoptimalan biaya dan performa cloud",
        "Layanan backup dan keamanan cloud"
      ]
    },
    {
      id: 4,
      title: "IT Managed Services",
      description: "Kelola infrastruktur IT Anda dengan layanan dukungan yang komprehensif dan proaktif dari tim ahli kami.",
      icon: "/assets/it-managed-icon.png",
      features: [
        "Dukungan IT 24/7",
        "Pemantauan dan pengelolaan jaringan",
        "Manajemen keamanan IT",
        "Pemeliharaan dan update sistem berkala"
      ]
    }
  ];

  return (
    <div>
      {services.map((service, index) => (
        <div 
          key={service.id} 
          className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-16 items-center animate-on-scroll`}
          style={{animationDelay: `${index * 100}ms`}}
        >
          <div className="md:w-1/2">
            <img 
              src={service.icon} 
              alt={service.title} 
              className="w-full max-w-md mx-auto h-auto object-contain"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <div className="space-y-3 mb-6">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-antlia-blue mr-2 flex-shrink-0 mt-0.5" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
            <Button className="bg-antlia-blue hover:bg-antlia-blue/80">
              <Link to="/kontak" className="flex items-center">
                Konsultasi Gratis <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      ))}

      <div className="bg-antlia-light p-8 rounded-lg mt-12 animate-on-scroll">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Butuh Solusi Custom?</h2>
          <p className="mb-6">
            Hubungi kami untuk mendiskusikan kebutuhan spesifik bisnis Anda.
            Tim ahli kami siap memberikan konsultasi gratis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-antlia-blue hover:bg-antlia-blue/80">
              <a 
                href="https://wa.me/6281573635143" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                WhatsApp <Phone size={16} className="ml-2" />
              </a>
            </Button>
            <Button variant="outline" className="border-antlia-blue text-antlia-blue hover:bg-antlia-blue/10">
              <Link to="/kontak" className="flex items-center">
                Kontak Kami <Mail size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div>
      {/* Company Story */}
      <div className="mb-16 animate-on-scroll">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Cerita Kami</h2>
            <p className="text-gray-600 mb-4">
              ANTLIA didirikan pada tahun 2013 dengan visi untuk membantu bisnis di Indonesia
              mengadopsi teknologi digital dan meningkatkan daya saing mereka di pasar global.
            </p>
            <p className="text-gray-600 mb-4">
              Dimulai sebagai konsultan IT kecil dengan hanya 5 orang, ANTLIA kini telah berkembang
              menjadi perusahaan teknologi informasi terkemuka dengan lebih dari 50 ahli teknologi
              yang berdedikasi.
            </p>
            <p className="text-gray-600">
              Kami percaya bahwa teknologi harus menjadi pendorong pertumbuhan bisnis, bukan hambatan.
              Inilah mengapa kami fokus pada solusi teknologi yang praktis, skalabel, dan sesuai dengan
              kebutuhan spesifik klien kami.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/assets/about-story.jpg" 
              alt="Company Story" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Vision Mission */}
      <div className="mb-16 animate-on-scroll">
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Visi & Misi</h2>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2 text-antlia-blue">Visi</h3>
              <p className="text-gray-600">
                Menjadi mitra teknologi pilihan bagi bisnis di Indonesia, mendorong transformasi digital
                yang inklusif dan membangun ekosistem digital yang berkelanjutan.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-antlia-blue">Misi</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-antlia-blue mr-2 flex-shrink-0 mt-0.5" />
                  <p>Menyediakan solusi teknologi yang inovatif, handal, dan terjangkau.</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-antlia-blue mr-2 flex-shrink-0 mt-0.5" />
                  <p>Membantu bisnis mengadopsi teknologi digital dengan lancar dan efektif.</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-antlia-blue mr-2 flex-shrink-0 mt-0.5" />
                  <p>Mengembangkan talent digital di Indonesia melalui pelatihan dan kolaborasi.</p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-antlia-blue mr-2 flex-shrink-0 mt-0.5" />
                  <p>Mendorong praktik bisnis yang berkelanjutan dan bertanggung jawab secara sosial.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/assets/about-vision.jpg" 
              alt="Vision & Mission" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Team */}
      <div className="mb-16 animate-on-scroll">
        <h2 className="text-3xl font-bold mb-8 text-center">Tim Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={`/assets/team-${item}.jpg`} 
                  alt={`Team Member ${item}`} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-lg">Nama Lengkap</h3>
                <p className="text-antlia-blue">Posisi / Jabatan</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Values */}
      <div className="animate-on-scroll">
        <h2 className="text-3xl font-bold mb-8 text-center">Nilai-Nilai Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Inovasi", desc: "Kami selalu mencari cara-cara baru dan lebih baik untuk memecahkan masalah." },
            { title: "Integritas", desc: "Kami berkomitmen pada kejujuran, transparansi, dan etika bisnis yang kuat." },
            { title: "Kolaborasi", desc: "Kami percaya bahwa kerja sama yang baik menghasilkan solusi terbaik." },
            { title: "Keunggulan", desc: "Kami berdedikasi untuk memberikan kualitas dan nilai tertinggi dalam semua yang kami lakukan." },
            { title: "Empati", desc: "Kami berusaha memahami kebutuhan klien kami secara mendalam dan personal." },
            { title: "Keberlanjutan", desc: "Kami berkomitmen untuk praktik bisnis yang bertanggung jawab terhadap lingkungan dan masyarakat." }
          ].map((value, idx) => (
            <Card key={idx} className="hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-antlia-blue/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-antlia-blue">{idx + 1}</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const Solutions = () => {
  const solutions = [
    {
      id: 1,
      title: "Transformasi Digital",
      description: "Transformasikan bisnis Anda dengan strategi digital yang komprehensif, mulai dari penilaian kesiapan hingga implementasi penuh.",
      image: "/assets/solution-1.jpg",
      benefits: [
        "Peningkatan efisiensi operasional",
        "Pengalaman pelanggan yang lebih baik",
        "Model bisnis dan pendapatan baru",
        "Keunggulan kompetitif di pasar"
      ]
    },
    {
      id: 2,
      title: "Keamanan Siber",
      description: "Lindungi bisnis Anda dari ancaman siber dengan solusi keamanan komprehensif yang disesuaikan dengan kebutuhan Anda.",
      image: "/assets/solution-2.jpg",
      benefits: [
        "Perlindungan data pelanggan dan bisnis",
        "Kepatuhan terhadap regulasi keamanan data",
        "Mitigasi risiko keamanan IT",
        "Respon cepat terhadap insiden keamanan"
      ]
    },
    {
      id: 3,
      title: "Business Intelligence",
      description: "Ubah data Anda menjadi wawasan bisnis yang berharga dengan solusi analitik data dan business intelligence kami.",
      image: "/assets/solution-3.jpg",
      benefits: [
        "Visualisasi data yang intuitif",
        "Pengambilan keputusan berbasis data",
        "Identifikasi tren dan peluang bisnis",
        "Pemantauan KPI bisnis secara real-time"
      ]
    }
  ];

  return (
    <div>
      {solutions.map((solution, index) => (
        <div 
          key={solution.id} 
          className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-16 items-center animate-on-scroll`}
          style={{animationDelay: `${index * 100}ms`}}
        >
          <div className="md:w-1/2">
            <img 
              src={solution.image} 
              alt={solution.title} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">{solution.title}</h2>
            <p className="text-gray-600 mb-6">{solution.description}</p>
            <h3 className="font-semibold text-xl mb-3">Manfaat:</h3>
            <div className="space-y-3 mb-6">
              {solution.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-antlia-blue mr-2 flex-shrink-0 mt-0.5" />
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
            <Button className="bg-antlia-blue hover:bg-antlia-blue/80">
              <Link to="/kontak" className="flex items-center">
                Pelajari Lebih Lanjut <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      ))}

      {/* Consultation CTA */}
      <div className="bg-gradient-to-r from-antlia-blue/10 to-antlia-cyan/10 p-8 rounded-lg mt-12 animate-on-scroll">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-bold mb-2">Butuh Solusi Custom?</h2>
            <p className="text-gray-600">
              Tim ahli kami siap membantu Anda menemukan solusi teknologi yang tepat
              untuk kebutuhan bisnis spesifik Anda.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-antlia-blue hover:bg-antlia-blue/80">
              <a 
                href="https://wa.me/6281573635143" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                WhatsApp <Phone size={16} className="ml-2" />
              </a>
            </Button>
            <Button variant="outline" className="border-antlia-blue text-antlia-blue hover:bg-antlia-blue/10">
              <Link to="/kontak" className="flex items-center">
                Jadwalkan Konsultasi <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Clients = () => {
  // Client testimonials
  const testimonials = [
    {
      id: 1,
      name: "PT Maju Bersama",
      logo: "/assets/client-1.png",
      industry: "E-commerce",
      quote: "ANTLIA membantu kami mengembangkan platform e-commerce yang telah meningkatkan penjualan online kami sebesar 40% dalam waktu 3 bulan.",
      person: "Budi Santoso, CEO"
    },
    {
      id: 2,
      name: "Fintech Solutions",
      logo: "/assets/client-2.png",
      industry: "Layanan Keuangan",
      quote: "Dengan solusi keamanan siber dari ANTLIA, kami berhasil memperkuat perlindungan data dan memenuhi standar regulasi perbankan.",
      person: "Agus Permana, CTO"
    },
    {
      id: 3,
      name: "Retailindo",
      logo: "/assets/client-3.png",
      industry: "Retail",
      quote: "Aplikasi mobile yang dikembangkan oleh ANTLIA telah membantu kami menjangkau pelanggan dengan cara yang baru dan inovatif.",
      person: "Diana Putri, Operations Manager"
    },
    {
      id: 4,
      name: "Teknologi Prima",
      logo: "/assets/client-4.png",
      industry: "Teknologi",
      quote: "Solusi business intelligence ANTLIA memberikan wawasan berharga tentang perilaku pelanggan kami, yang membantu kami membuat keputusan bisnis yang lebih baik.",
      person: "Siti Rahayu, Marketing Director"
    }
  ];

  // Client logos (more than the testimonials)
  const clientLogos = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Client ${i + 1}`,
    logo: `/assets/client-logo-${i + 1}.png`
  }));

  return (
    <div>
      {/* Featured Clients */}
      <div className="mb-16 animate-on-scroll">
        <h2 className="text-3xl font-bold mb-8 text-center">Klien Terpilih</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((client) => (
            <Card key={client.id} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center bg-white rounded-lg shadow-sm">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="max-w-full max-h-full p-2"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">{client.name}</h3>
                    <p className="text-antlia-blue mb-4 text-sm">{client.industry}</p>
                    <p className="text-gray-600 italic mb-4">"{client.quote}"</p>
                    <p className="font-semibold">- {client.person}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Client Logo Wall */}
      <div className="mb-16 animate-on-scroll">
        <h2 className="text-3xl font-bold mb-8 text-center">Dipercaya oleh</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {clientLogos.map((logo) => (
            <div key={logo.id} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24">
              <img 
                src={logo.logo} 
                alt={logo.name}
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Case Studies */}
      <div className="mb-16 animate-on-scroll">
        <h2 className="text-3xl font-bold mb-8 text-center">Studi Kasus</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={`/assets/case-study-${item}.jpg`} 
                  alt={`Case Study ${item}`} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2">Nama Perusahaan</h3>
                <p className="text-gray-600 mb-4">
                  Deskripsi singkat tentang studi kasus dan bagaimana ANTLIA membantu
                  menyelesaikan masalah bisnis mereka.
                </p>
                <Button variant="outline" className="text-antlia-blue hover:bg-antlia-blue/10 border-antlia-blue w-full">
                  Baca Studi Kasus
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Become a Client CTA */}
      <div className="bg-antlia-blue/10 p-8 rounded-lg animate-on-scroll">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Menjadi Klien Kami</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Bergabunglah dengan ratusan bisnis yang telah mempercayakan
            kebutuhan teknologi mereka kepada ANTLIA.
          </p>
          <Button className="bg-antlia-blue hover:bg-antlia-blue/80">
            <Link to="/kontak" className="flex items-center">
              Hubungi Tim Kami <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
