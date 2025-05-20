
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";
import PageHero from "@/components/PageHero";

interface Product {
  id: number;
  slug: string;
  name: string;
  shortDescription: string;
  image: string;
  category: string;
 
  featured: boolean;
}

const products: Product[] = [
  {
    id: 1,
    slug: "antlia-crm",
    name: "ANTLIA CRM",
    shortDescription: "Sistem manajemen pelanggan komprehensif dengan fitur otomatisasi dan analitik",
    image: "/assets/product-1.jpg",
    category: "Software",
    featured: true
  },
  {
    id: 2,
    slug: "antlia-pos",
    name: "ANTLIA POS",
    shortDescription: "Sistem kasir digital yang memudahkan transaksi jual beli secara langsung maupun online.",
    image: "/assets/product-2.jpg",
    category: "Software + Hardware",
 
    featured: true
  },
  {
    id: 3,
    slug: "antlia-erp",
    name: "ANTLIA ERP",
    shortDescription: "Sistem Enterprise Resource Planning untuk mengintegrasikan dan mengotomatisasi proses bisnis perusahaan.",
    image: "/assets/product-3.jpg",
    category: "Software",

    featured: true
  },
  {
    id: 4,
    slug: "antlia-wms",
    name: "ANTLIA WMS",
    shortDescription: "Sistem manajemen gudang untuk meningkatkan efisiensi operasional dengan integrasi teknologi barcode/RFID.",
    image: "/assets/product-4.jpg",
    category: "Software",
  
    featured: true
  },
  {
    id: 5,
    slug: "antlia-tms",
    name: "ANTLIA TMS",
    shortDescription: "Sistem manajemen transportasi untuk optimasi logistik, pengurangan biaya, dan peningkatan kepuasan pelanggan.",
    image: "/assets/product-5.jpg",
    category: "Software",
 
    featured: true
  },
  {
    id: 6,
    slug: "antlia-iot",
    name: "ANTLIA IoT",
    shortDescription: "Solusi Internet of Things untuk pemantauan real-time aset dan proses bisnis melalui dashboard cloud.",
    image: "/assets/product-6.jpg",
    category: "Software + Hardware",
  
    featured: true
  },
  {
    id: 7,
    slug: "antlia-hrm",
    name: "ANTLIA HRM",
    shortDescription: "Sistem manajemen sumber daya manusia untuk otomatisasi rekrutmen, penggajian, pelatihan, dan kinerja karyawan.",
    image: "/assets/product-7.jpg",
    category: "Software",
 
    featured: true
  }
];
const ProductsPage = () => {
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

  // Split products into featured and regular
  const featuredProducts = products.filter(product => product.featured);
  const regularProducts = products.filter(product => !product.featured);

  return (
    <>
      <PageHero 
        title="Produk Unggulan" 
        subtitle="Solusi digital terbaik yang dirancang khusus untuk memenuhi kebutuhan bisnis Anda"
        backgroundImage="/assets/services-hero-bg.jpg"
      />

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="subtitle block mb-2">antlia Produk</span>
            <h2 className="text-xl font-bold mb-4">Semua Produk Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Produk-produk unggulan kami yang telah terbukti memberikan nilai tambah signifikan bagi bisnis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="product-card animate-on-scroll">
                <CardContent className="p-0">
                  <div className="relative h-56 md:h-64">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-antlia-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.category}
                    </div>
                    <div className="product-overlay">
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <div className="flex items-center justify-center mb-4">
                     
                      
                      </div>
                      <Link to={`/produk/${product.slug}`}>
                        <Button className="bg-antlia-blue hover:bg-antlia-blue/80">
                          Lihat Detail
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.shortDescription}</p>
                    <Link 
                      to={`/produk/${product.slug}`} 
                      className="text-antlia-blue hover:underline flex items-center font-medium"
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
      
      {/* All Products
      <section className="py-16 bg-antlia-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="subtitle block mb-2">Our Solutions</span>
            <h2 className="text-xl font-bold mb-4">Semua Produk Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jelajahi berbagai solusi perangkat lunak yang kami kembangkan untuk berbagai kebutuhan bisnis
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regularProducts.map((product) => (
              <Card key={product.id} className="product-card h-full animate-on-scroll">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="relative h-48">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-antlia-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.category}
                    </div>
                    <div className="product-overlay">
                      <Link to={`/produk/${product.slug}`}>
                        <Button className="bg-antlia-blue hover:bg-antlia-blue/80">
                          Lihat Detail
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{product.shortDescription}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star 
                            key={index} 
                            className={`w-3 h-3 ${index < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}
                          />
                        ))}
                        <span className="ml-1 text-xs">{product.rating}</span>
                      </div>
                      <Link 
                        to={`/produk/${product.slug}`} 
                        className="text-antlia-blue hover:underline flex items-center text-sm font-medium"
                      >
                        Detail <ArrowRight className="ml-1 w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

         {/* CTA Section */}
         <section className="py-20 bg-gradient-to-r from-antlia-blue/10 to-antlia-cyan/10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 relative overflow-hidden animate-on-scroll">
            <div className="absolute top-0 right-0 w-64 h-64 bg-antlia-blue/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-antlia-cyan/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
                <h2 className="text-xl font-bold mb-4">Tidak Menemukan Produk yang Anda Cari?</h2>
                <p className="text-gray-600 mb-6 max-w-xl">
                ANTLIA juga menyediakan solusi kustom yang dirancang khusus untuk memenuhi kebutuhan spesifik bisnis Anda. Tim pengembangan kami siap bekerja sama dengan Anda untuk menciptakan solusi yang tepat.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button className="bg-antlia-blue hover:bg-antlia-blue/80">
                    <Link to="/kontak" className="flex items-center">
                      Hubungi Kami <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>

                  <Button className="bg-antlia-blue hover:bg-antlia-blue/80">
                    <Link to="/layanan" className="flex items-center">
                      Lihat Layanan Kustom
                    </Link>
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

export default ProductsPage;
