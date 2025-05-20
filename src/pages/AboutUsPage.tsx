
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import TeamSection from "@/components/TeamSection";
import LogoMarquee from "@/components/LogoMarquee";

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

const AboutUsPage = () => {
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
        title="Tentang Kami" 
        subtitle="Kenali lebih dalam mengenai sejarah, visi, misi, dan nilai-nilai yang mendorong inovasi kami"
        backgroundImage="/assets/about-hero-bg.jpg"
      />
      
      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <span className="subtitle block mb-2">Our Story</span>
              <h2 className="text-3xl font-bold mb-6">Sejarah ANTLIA</h2>
              <p className="text-gray-600 mb-4">
                Didirikan pada tahun 2013, ANTLIA bermula sebagai startup kecil dengan visi besar: 
                menghadirkan solusi teknologi kelas dunia yang dapat diakses oleh perusahaan Indonesia.
              </p>
              <p className="text-gray-600 mb-4">
                Nama ANTLIA diambil dari konstelasi bintang yang melambangkan teknologi dan inovasi. 
                Kami percaya bahwa seperti bintang yang memberikan cahaya, teknologi harus memberikan 
                pencerahan dan solusi bagi tantangan bisnis.
              </p>
              <p className="text-gray-600">
                Setelah satu dekade berkarya, kami telah berkembang menjadi perusahaan teknologi 
                terkemuka dengan tim yang terdiri dari lebih dari 50 ahli di bidangnya masing-masing.
                Perjalanan kami dilandasi oleh komitmen kuat untuk selalu berinovasi dan memberikan 
                pelayanan terbaik kepada klien, menciptakan hubungan jangka panjang yang berlandaskan 
                kepercayaan dan hasil nyata.
              </p>
            </div>
            <div className="relative animate-on-scroll" style={{animationDelay: "200ms"}}>
              <img
                src="/assets/about-image.jpg"
                alt="Tim ANTLIA"
                className="rounded-xl shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <p className="text-3xl font-bold text-antlia-blue">10+</p>
                <p className="text-gray-600">Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-antlia-light overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="subtitle block mb-2">Our Journey</span>
            <h2 className="text-3xl font-bold mb-4">Milestone Perjalanan Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Perjalanan ANTLIA dalam menghadirkan solusi teknologi terbaik untuk Indonesia
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-antlia-blue/20 transform -translate-x-1/2"></div>
            
            {[
              {
                year: "2013",
                title: "Pendirian ANTLIA",
                description: "ANTLIA didirikan sebagai perusahaan konsultan IT dengan fokus pada pengembangan aplikasi web."
              },
              {
                year: "2015",
                title: "Ekspansi Layanan",
                description: "Memperluas layanan ke pengembangan aplikasi mobile dan solusi cloud."
              },
              {
                year: "2017",
                title: "Pembukaan Kantor Regional",
                description: "Membuka kantor regional pertama di Surabaya untuk melayani klien di Indonesia Timur."
              },
              {
                year: "2019",
                title: "Peluncuran Produk Pertama",
                description: "Meluncurkan ANTLIA CRM, produk perangkat lunak pertama untuk manajemen hubungan pelanggan."
              },
              {
                year: "2021",
                title: "Pencapaian 100+ Klien",
                description: "Mencapai tonggak 100+ klien dari berbagai industri di seluruh Indonesia."
              },
              {
                year: "2023",
                title: "Transformasi Digital Hub",
                description: "Meluncurkan Digital Transformation Hub untuk mendukung perusahaan dalam perjalanan transformasi digital mereka."
              }
            ].map((milestone, index) => (
              <div 
                key={index} 
                className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-12 animate-on-scroll`}
                style={{animationDelay: `${index * 150}ms`}}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="mb-1 text-antlia-blue font-bold">{milestone.year}</div>
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-antlia-blue flex items-center justify-center text-antlia-blue font-bold z-10">
                  {index + 1}
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="subtitle block mb-2">Our Purpose</span>
            <h2 className="text-3xl font-bold mb-4">Visi & Misi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Komitmen kami untuk masa depan yang lebih baik melalui teknologi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-antlia-blue animate-on-scroll">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-antlia-blue">Visi Kami</h3>
                <p className="text-gray-600 mb-6">
                  Menjadi pemimpin inovasi teknologi di Indonesia yang mendorong 
                  transformasi digital dengan solusi yang inklusif dan berkelanjutan.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-antlia-blue mr-2 flex-shrink-0" />
                    <span>Mendorong adopsi teknologi terdepan</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-antlia-blue mr-2 flex-shrink-0" />
                    <span>Menjembatani kesenjangan digital</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-antlia-blue mr-2 flex-shrink-0" />
                    <span>Menciptakan ekosistem teknologi yang berkelanjutan</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-antlia-cyan animate-on-scroll" style={{animationDelay: "200ms"}}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-antlia-cyan">Misi Kami</h3>
                <p className="text-gray-600 mb-6">
                  Menghadirkan solusi teknologi yang inovatif, efektif, dan sesuai kebutuhan 
                  untuk membantu bisnis berkembang di era digital yang kompetitif.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-antlia-cyan mr-2 flex-shrink-0" />
                    <span>Mengembangkan talenta digital Indonesia</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-antlia-cyan mr-2 flex-shrink-0" />
                    <span>Memberikan solusi teknologi yang disesuaikan dengan kebutuhan lokal</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-antlia-cyan mr-2 flex-shrink-0" />
                    <span>Mendukung UKM dalam adopsi teknologi</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16 bg-antlia-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="subtitle block mb-2">Guiding Principles</span>
            <h2 className="text-3xl font-bold mb-4">Nilai-Nilai Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi setiap keputusan dan tindakan kami
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                value: "Inovasi",
                description: "Kami selalu mencari cara baru dan lebih baik untuk menyelesaikan masalah dan menciptakan nilai.",
                color: "from-antlia-blue to-antlia-cyan"
              },
              {
                value: "Integritas",
                description: "Kejujuran dan transparansi adalah dasar dari setiap interaksi dengan klien, mitra, dan antar tim.",
                color: "from-antlia-cyan to-green-400"
              },
              {
                value: "Kolaborasi",
                description: "Kami percaya bahwa hasil terbaik datang dari kerja sama tim dan kemitraan yang kuat.",
                color: "from-green-400 to-yellow-400"
              },
              {
                value: "Keunggulan",
                description: "Kami berkomitmen untuk memberikan kualitas tertinggi dalam setiap aspek pekerjaan kami.",
                color: "from-yellow-400 to-antlia-purple"
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 overflow-hidden animate-on-scroll" 
                style={{animationDelay: `${index * 100}ms`}}
              >
                <CardContent className="p-0">
                  <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{item.value}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <TeamSection 
        title="Tim Kami" 
        subtitle="Meet The Experts"
        description="Didukung oleh profesional berpengalaman yang berdedikasi untuk memberikan yang terbaik"
        members={teamMembers}
      />
      
      {/* Partners */}
      <LogoMarquee 
        logos={partners}
        title="Mitra Kami"
        subtitle="Bekerja sama dengan berbagai perusahaan terkemuka untuk menghadirkan solusi terbaik"
      />
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-antlia-blue to-antlia-cyan rounded-xl overflow-hidden shadow-lg animate-on-scroll">
            <div className="p-8 md:p-12 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Jadilah Bagian dari Perjalanan Kami</h2>
                <p className="mb-6">
                  Apakah Anda mencari solusi teknologi untuk bisnis Anda atau berminat untuk bergabung dengan tim kami?
                  Hubungi kami sekarang untuk memulai percakapan.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-white text-antlia-blue hover:bg-white/90">
                    <Link to="/kontak" className="flex items-center">
                      Hubungi Kami
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/karir" className="flex items-center">
                      Karir di ANTLIA
                    </Link>
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

export default AboutUsPage;
