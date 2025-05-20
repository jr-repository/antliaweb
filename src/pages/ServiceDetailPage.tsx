
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
}

const services: ServiceDetail[] = [
  {
    id: 1,
    slug: "it-consulting",
    name: "IT Consulting",
    description: "Konsultasi IT memberikan solusi teknologi untuk masalah bisnis yang terkait dengan infrastruktur TI, pengelolaan sistem, dan perencanaan implementasi teknologi yang lebih efisien.",
    longDescription: "Konsultasi IT memberikan solusi teknologi untuk masalah bisnis yang terkait dengan infrastruktur TI, pengelolaan sistem, dan perencanaan implementasi teknologi yang lebih efisien. Layanan ini membantu perusahaan dalam meningkatkan performa operasional, menjaga keamanan data, serta menyediakan solusi yang disesuaikan dengan kebutuhan spesifik perusahaan Anda.",
    image: "/assets/service-1.jpg",
    icon: "Settings",
    category: "Consulting",
    deliverables: [
      "Evaluasi Sistem TI: Melakukan audit dan evaluasi terhadap sistem TI yang sudah ada.",
      "Perencanaan Implementasi: Membantu merencanakan dan melaksanakan implementasi solusi teknologi baru.",
      "Pengelolaan Infrastruktur: Menyediakan layanan pengelolaan infrastruktur TI seperti server, jaringan, dan perangkat keras.",
      "Keamanan TI: Menyediakan solusi untuk meningkatkan keamanan data dan perlindungan terhadap ancaman siber.",
      "Pemeliharaan Sistem: Layanan pemeliharaan dan troubleshooting sistem untuk memastikan ketersediaan dan kinerja yang optimal."
    ],
    process: [], // Kosong karena tidak ada tahapan proses yang diberikan
    benefits: [
      "Meningkatkan performa dan efisiensi operasional perusahaan.",
      "Menjamin keamanan data dan sistem TI.",
      "Menyediakan solusi yang disesuaikan dengan kebutuhan perusahaan."
    ]
  },

  {
    id: 2,
    slug: "business-operations-consulting",
    name: "Business Operations Consulting",
    description: "Jasa konsultasi operasional untuk peningkatan kinerja bisnis melalui pengembangan tim, optimasi proses, dan implementasi sistem pengendalian yang efektif.",
    longDescription: "Jasa konsultasi operasional yang kami tawarkan bertujuan untuk memberikan nilai tambah kepada klien melalui pemecahan masalah, peningkatan kinerja, dan pengembangan kapasitas. Kami membantu perusahaan mengoptimalkan proses bisnis, membangun tim yang lebih efisien, serta menerapkan sistem kontrol dan continuous improvement untuk mendukung pertumbuhan berkelanjutan.",
    image: "/assets/service-2.jpg",
    icon: "BarChart",
    category: "Consulting",
    deliverables: [
      "Layanan Pengembangan Tim dan Manajerial: Pengelolaan konflik, pembuatan laporan, delegasi tugas yang efektif, dan manajemen kinerja, dilengkapi pelatihan bersertifikat.",
      "Bisnis Proses dan Analisis Operasional: Evaluasi operasional, perbaikan proses tidak efisien, desain sistem pengendalian, analisis cost untuk menekan biaya dan meningkatkan margin keuntungan.",
      "Pengembangan Supply Chain dan Continuous Improvement: Demand planning, procurement, sourcing, logistik, serta penerapan perbaikan berkelanjutan di seluruh bagian perusahaan.",
      "Proyek Konsultasi & Pelatihan Berkelanjutan: Mencakup area kritikal seperti manajemen SDM, pemasaran, dan teknologi untuk mencapai tujuan operasional secara efektif dan efisien."
    ],
    process: [], // Kosong karena tidak ada tahapan proses yang diberikan
    benefits: [
      "Peningkatan kinerja operasional secara signifikan",
      "Pengembangan kapasitas tim dan manajerial yang lebih profesional",
      "Efisiensi biaya operasional dan peningkatan profitabilitas",
      "Penerapan sistem kontrol dan perbaikan berkelanjutan",
      "Dukungan strategis untuk pencapaian tujuan jangka panjang perusahaan"
    ]
  },

  {
    id: 3,
    slug: "excel-training-course",
    name: "Excel Training Course",
    description: "Pelatihan Microsoft Excel untuk meningkatkan keterampilan analisis data dan penyusunan laporan profesional di berbagai bidang bisnis.",
    longDescription: "Pelatihan Excel ini dirancang untuk meningkatkan keterampilan penggunaan Microsoft Excel untuk berbagai industri, seperti keuangan, supply chain, pemasaran, dan manajemen. Setiap modul pelatihan dilengkapi dengan latihan praktis dan studi kasus nyata, memungkinkan peserta untuk memahami penerapan Excel di dunia kerja secara langsung. Pelatihan ini memberikan pemahaman tentang cara menggunakan Excel untuk menyelesaikan tugas analitis dan menghasilkan laporan yang profesional.",
    image: "/assets/service-3.jpg",
    icon: "FileSpreadsheet",
    category: "Training",
    deliverables: [
      "Modul pelatihan lengkap untuk setiap tingkatan (Beginner, Intermediate, Advanced)",
      "Latihan praktis dan studi kasus nyata",
      "Sertifikat resmi setelah menyelesaikan pelatihan",
      "Akses ke materi digital dan panduan referensi Excel"
    ],
    process: [], // Kosong karena tidak ada tahapan proses yang diberikan
    benefits: [
      "Meningkatkan produktivitas kerja melalui penguasaan Excel",
      "Kemampuan analisis data yang lebih baik dan akurat",
      "Pembuatan laporan yang profesional dan mudah dipahami",
      "Kesiapan untuk pekerjaan di berbagai industri yang membutuhkan Excel",
      "Peningkatan kompetensi individu dan tim"
    ]
  },

  {
    id: 4,
    slug: "workplace-communication-training",
    name: "Workplace Communication Training Course",
    description: "Pelatihan komunikasi profesional untuk meningkatkan kemampuan komunikasi persuasif di tempat kerja pada berbagai situasi dan level jabatan.",
    longDescription: "Pelatihan ini bertujuan untuk meningkatkan pengetahuan, pemahaman, dan keterampilan dalam komunikasi persuasif, yang dapat diterapkan dalam berbagai situasi profesional. Dengan pelatihan ini, peserta dapat menganalisis masalah komunikasi yang dihadapi dan mencari solusi efektif untuk meningkatkan hubungan kerja serta membangun kepercayaan dan kredibilitas di tempat kerja. Pelatihan menggunakan media online dan perangkat interaktif untuk memfasilitasi pemahaman yang lebih baik tentang teknik-teknik yang diajarkan. Peserta akan mendapatkan sertifikat resmi. Pelatihan ini diajarkan oleh pengajar yang berpengalaman, termasuk Meike Lusye Karolus, S.Sos., M.A. dan Angela Frenzia Betyarini, S.S., M.A., yang memiliki latar belakang akademis dan profesional yang kuat di bidang komunikasi dan media.",
    image: "/assets/service-4.jpg",
    icon: "MessageSquare",
    category: "Training",
    deliverables: [
      "Pelatihan komunikasi persuasif untuk berbagai tingkatan (Beginner, Intermediate, Advanced)",
      "Materi interaktif dan simulasi situasi nyata di tempat kerja",
      "Sertifikat resmi dari instruktur berpengalaman",
      "Akses ke modul digital dan bahan pendukung pembelajaran"
    ],
    process: [], // Kosong karena tidak ada tahapan proses yang diberikan
    benefits: [
      "Peningkatan keterampilan komunikasi profesional dan persuasif",
      "Pemahaman tentang etika dan citra diri dalam komunikasi",
      "Kemampuan mengelola konflik dan membangun relasi kerja yang positif",
      "Peningkatan kepercayaan diri saat berbicara di depan umum atau presentasi",
      "Peningkatan reputasi dan kredibilitas di lingkungan kerja"
    ]
  }
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
      
    
         {/* CTA Section */}
         <section className="py-20 bg-gradient-to-r from-antlia-blue/10 to-antlia-cyan/10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 relative overflow-hidden animate-on-scroll">
            <div className="absolute top-0 right-0 w-64 h-64 bg-antlia-blue/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-antlia-cyan/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4">Siap untuk Mendiskusikan Proyek Anda?</h2>
                <p className="text-gray-600 mb-6 max-w-xl">
                Tim ANTLIA siap membantu Anda dengan solusi IT Consulting yang disesuaikan dengan kebutuhan bisnis Anda. Hubungi kami sekarang untuk konsultasi awal.                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                 
                  <Button className="bg-antlia-blue hover:bg-antlia-blue/80">
                  <a 
                      href="https://wa.me/6281573635143" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Diskusikan Proyek Anda
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

      
    </>
  );
};

export default ServiceDetailPage;
