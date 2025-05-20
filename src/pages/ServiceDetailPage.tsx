
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Clock, Users } from "lucide-react";
import PageHero from "@/components/PageHero";

interface Process {
  title: string;
  description: string;
}

interface ServiceDetail {
  id: number;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  icon: string;
  category: string;
  deliverables: string[];
  process: Process[];
  benefits: string[];
  technologies: string[];
  caseStudies: {
    title: string;
    client: string;
    description: string;
    result: string;
    image: string;
  }[];
  testimonials: {
    name: string;
    position: string;
    company: string;
    content: string;
    avatar?: string;
  }[];
  faq: { question: string; answer: string }[];
}

const services: ServiceDetail[] = [
  {
    id: 1,
    slug: "pengembangan-aplikasi-kustom",
    name: "Pengembangan Aplikasi Kustom",
    description: "Membangun aplikasi yang disesuaikan dengan kebutuhan spesifik bisnis Anda",
    longDescription: "Layanan pengembangan aplikasi kustom dari ANTLIA membantu bisnis menciptakan solusi perangkat lunak yang sesuai dengan kebutuhan spesifik mereka. Tim ahli kami menggunakan teknologi terkini dan metodologi pengembangan terbaik untuk membangun aplikasi yang skalabel, aman, dan user-friendly untuk berbagai platform termasuk web, mobile, dan desktop.",
    image: "/assets/service-1.jpg",
    icon: "Code",
    category: "Development",
    deliverables: [
      "Analisis kebutuhan bisnis dan teknis",
      "Rancangan UI/UX yang intuitif",
      "Kode sumber aplikasi",
      "Dokumentasi teknis lengkap",
      "Dukungan implementasi dan pelatihan",
      "Maintenance dan update berkala"
    ],
    process: [
      {
        title: "Requirement Gathering",
        description: "Mengumpulkan dan menganalisis kebutuhan bisnis untuk menentukan fitur dan fungsionalitas aplikasi."
      },
      {
        title: "Design & Prototyping",
        description: "Membuat wireframe dan prototipe interaktif untuk visualisasi pengalaman pengguna."
      },
      {
        title: "Development",
        description: "Mengembangkan aplikasi menggunakan teknologi yang sesuai dengan kebutuhan proyek."
      },
      {
        title: "Quality Assurance",
        description: "Melakukan pengujian menyeluruh untuk memastikan aplikasi berfungsi dengan benar dan bebas bug."
      },
      {
        title: "Deployment",
        description: "Meluncurkan aplikasi ke lingkungan produksi dengan minimal gangguan."
      },
      {
        title: "Training & Support",
        description: "Memberikan pelatihan kepada pengguna dan dukungan berkelanjutan."
      }
    ],
    benefits: [
      "Solusi yang disesuaikan dengan kebutuhan spesifik bisnis",
      "Pengalaman pengguna yang dioptimalkan",
      "Keamanan yang ditingkatkan",
      "Skalabilitas untuk pertumbuhan masa depan",
      "Integrasi dengan sistem yang ada",
      "Keunggulan kompetitif melalui solusi unik"
    ],
    technologies: [
      "JavaScript/TypeScript",
      "React/Angular/Vue",
      "Node.js",
      "PHP/Laravel",
      "Python/Django",
      "Java/Spring",
      ".NET Core",
      "Swift/Kotlin",
      "Flutter/React Native",
      "AWS/Azure/Google Cloud"
    ],
    caseStudies: [
      {
        title: "Sistem Manajemen Logistik Terintegrasi",
        client: "PT Logistik Nusantara",
        description: "Pengembangan sistem manajemen logistik end-to-end untuk mengoptimalkan operasi dan pelacakan pengiriman.",
        result: "Peningkatan efisiensi operasional sebesar 35% dan pengurangan kesalahan pengiriman hingga 80%.",
        image: "/assets/case-study-1.jpg"
      },
      {
        title: "Portal B2B untuk Distributor",
        client: "MegaRetail Group",
        description: "Portal B2B yang memungkinkan distributor mengelola pesanan, inventaris, dan pembayaran secara real-time.",
        result: "Peningkatan volume pesanan sebesar 45% dan pengurangan waktu pemrosesan pesanan sebesar 60%.",
        image: "/assets/case-study-2.jpg"
      }
    ],
    testimonials: [
      {
        name: "Budi Santoso",
        position: "CIO",
        company: "PT Logistik Nusantara",
        content: "ANTLIA memahami kebutuhan bisnis kami dengan sangat baik dan menghadirkan solusi yang jauh melampaui harapan. Sistem yang mereka kembangkan telah menjadi tulang punggung operasi kami.",
        avatar: "/assets/team-3.jpg"
      },
      {
        name: "Linda Wijaya",
        position: "Head of IT",
        company: "MegaRetail Group",
        content: "Kerja sama dengan tim ANTLIA sangat profesional dan efisien. Mereka tidak hanya fokus pada pengembangan teknologi, tetapi juga memahami aspek bisnis yang menjadi dasar kebutuhan kami.",
        avatar: "/assets/team-2.jpg"
      }
    ],
    faq: [
      {
        question: "Berapa lama waktu untuk mengembangkan aplikasi kustom?",
        answer: "Waktu pengembangan bervariasi tergantung pada kompleksitas dan skala proyek, mulai dari 1-3 bulan untuk aplikasi sederhana hingga 6-12 bulan untuk sistem yang kompleks."
      },
      {
        question: "Apakah ANTLIA menyediakan dukungan setelah peluncuran aplikasi?",
        answer: "Ya, kami menyediakan paket dukungan dan pemeliharaan pasca-peluncuran untuk memastikan aplikasi Anda berjalan optimal dan tetap diperbarui."
      },
      {
        question: "Bagaimana dengan keamanan aplikasi yang dikembangkan?",
        answer: "Keamanan adalah prioritas utama kami. Kami mengikuti standar industri terbaik untuk keamanan aplikasi, melakukan pengujian penetrasi, dan menerapkan praktik pengkodean yang aman."
      },
      {
        question: "Apakah aplikasi dapat diintegrasikan dengan sistem yang sudah ada?",
        answer: "Ya, kami memiliki pengalaman luas dalam mengintegrasikan aplikasi baru dengan sistem yang sudah ada menggunakan API dan middleware."
      }
    ]
  },
  // Add more service details as needed
];

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);
  
  useEffect(() => {
    if (!service) {
      // Handle service not found
      return;
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
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
  }, [service]);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Layanan tidak ditemukan</h1>
        <p className="mb-6">Maaf, layanan yang Anda cari tidak ditemukan.</p>
        <Link to="/layanan" className="text-antlia-blue hover:underline flex items-center">
          <ArrowLeft className="mr-2" /> Kembali ke Daftar Layanan
        </Link>
      </div>
    );
  }

  return (
    <>
      <PageHero 
        title={service.name} 
        subtitle={`Kategori: ${service.category}`}
        backgroundImage="/assets/solutions-hero-bg.jpg"
      />
      
      {/* Service Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2 animate-on-scroll">
              <img 
                src={service.image} 
                alt={service.name} 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            <div className="w-full lg:w-1/2 animate-on-scroll" style={{animationDelay: "200ms"}}>
              <Link to="/layanan" className="text-antlia-blue hover:underline flex items-center mb-6">
                <ArrowLeft className="mr-2 w-4 h-4" /> Kembali ke Daftar Layanan
              </Link>
              <h1 className="text-4xl font-bold mb-6">{service.name}</h1>
              <p className="text-gray-700 mb-6">{service.longDescription}</p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-antlia-blue hover:bg-antlia-blue/80">
                  <Link to="/kontak" className="flex items-center">
                    Diskusikan Kebutuhan Anda
                  </Link>
                </Button>
                <Button variant="outline" className="border-antlia-blue text-antlia-blue hover:bg-antlia-blue/10">
                  <a 
                    href="https://wa.me/6281573635143" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Konsultasi via WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section className="py-16 bg-antlia-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="subtitle block mb-2">Methodology</span>
            <h2 className="text-3xl font-bold mb-4">Proses Kerja Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pendekatan sistematis kami untuk menghadirkan {service.name} berkualitas tinggi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-on-scroll" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-6">
                  <div className="flex flex-col items-start">
                    <div className="w-12 h-12 rounded-full bg-antlia-blue/10 flex items-center justify-center mb-4 text-antlia-blue font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Deliverables & Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Deliverables */}
            <div className="animate-on-scroll">
              <span className="subtitle block mb-2">What You Get</span>
              <h2 className="text-3xl font-bold mb-6">Deliverables</h2>
              <div className="bg-antlia-light p-6 rounded-lg">
                <ul className="space-y-4">
                  {service.deliverables.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-antlia-blue mr-3 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Benefits */}
            <div className="animate-on-scroll" style={{animationDelay: "200ms"}}>
              <span className="subtitle block mb-2">Advantages</span>
              <h2 className="text-3xl font-bold mb-6">Manfaat</h2>
              <div className="bg-antlia-light p-6 rounded-lg">
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-antlia-blue mr-3 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technologies */}
      <section className="py-16 bg-antlia-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="subtitle block mb-2">Our Stack</span>
            <h2 className="text-3xl font-bold mb-4">Teknologi yang Kami Gunakan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menggunakan teknologi terkini untuk mengembangkan solusi yang skalabel dan berperforma tinggi
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {service.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium animate-on-scroll"
                style={{animationDelay: `${index * 50}ms`}}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="subtitle block mb-2">Success Stories</span>
            <h2 className="text-3xl font-bold mb-4">Studi Kasus</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lihat bagaimana kami telah membantu klien kami mencapai tujuan mereka
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.caseStudies.map((caseStudy, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-on-scroll" style={{animationDelay: `${index * 200}ms`}}>
                <div className="h-56 overflow-hidden">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm font-medium text-antlia-blue mb-2">{caseStudy.client}</div>
                  <h3 className="text-xl font-semibold mb-3">{caseStudy.title}</h3>
                  <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                  <div className="flex items-center border-t border-gray-100 pt-4 mt-4">
                    <div className="text-sm font-medium">Hasil:</div>
                    <div className="ml-2 text-sm text-antlia-blue font-medium">{caseStudy.result}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-antlia-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="subtitle block mb-2">Client Feedback</span>
            <h2 className="text-3xl font-bold mb-4">Apa Kata Klien Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pengalaman klien yang telah menggunakan layanan {service.name} dari ANTLIA
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-on-scroll" style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    {testimonial.avatar ? (
                      <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-antlia-blue/10 flex items-center justify-center mr-4 text-antlia-blue font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h4 className="text-lg font-semibold">{testimonial.name}</h4>
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
      
      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="subtitle block mb-2">Questions & Answers</span>
            <h2 className="text-3xl font-bold mb-4">Pertanyaan Umum</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jawaban untuk pertanyaan yang sering diajukan tentang {service.name}
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {service.faq.map((item, index) => (
              <Card key={index} className="mb-4 animate-on-scroll" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
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
                <h2 className="text-3xl font-bold mb-4">Siap untuk Mendiskusikan Proyek Anda?</h2>
                <p className="mb-6">
                  Tim ANTLIA siap membantu Anda dengan solusi {service.name} yang disesuaikan dengan kebutuhan bisnis Anda.
                  Hubungi kami sekarang untuk konsultasi awal.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-white text-antlia-blue hover:bg-white/90">
                    <Link to="/kontak" className="flex items-center">
                      Diskusikan Proyek Anda
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

export default ServiceDetailPage;
