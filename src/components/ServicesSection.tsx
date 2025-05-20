
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, PenTool, Code, Database, BarChart3, Smartphone, Monitor } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="text-antlia-blue w-10 h-10" />,
      title: "Pengembangan Web",
      description: "Kami membangun website profesional yang sesuai kebutuhan bisnis Anda dengan desain modern dan responsif.",
      delay: 0,
      link: "/produk-layanan/pengembangan-web-mobile"
    },
    {
      icon: <Smartphone className="text-antlia-blue w-10 h-10" />,
      title: "Aplikasi Mobile",
      description: "Kembangkan aplikasi mobile Android dan iOS untuk menjangkau pelanggan di mana saja.",
      delay: 100,
      link: "/produk-layanan/pengembangan-web-mobile"
    },
    {
      icon: <Database className="text-antlia-blue w-10 h-10" />,
      title: "Solusi Cloud",
      description: "Pindahkan infrastruktur IT Anda ke cloud untuk skalabilitas dan efisiensi yang lebih baik.",
      delay: 200,
      link: "/produk-layanan/cloud-migration"
    },
    {
      icon: <PenTool className="text-antlia-blue w-10 h-10" />,
      title: "Desain UI/UX",
      description: "Ciptakan pengalaman pengguna yang luar biasa dengan desain antarmuka yang intuitif dan menarik.",
      delay: 300,
      link: "/produk-layanan"
    },
    {
      icon: <BarChart3 className="text-antlia-blue w-10 h-10" />,
      title: "Analisis Data",
      description: "Ubah data Anda menjadi wawasan bisnis yang berharga melalui visualisasi dan analisis data.",
      delay: 400,
      link: "/produk-layanan/analisis-data-bi"
    },
    {
      icon: <Monitor className="text-antlia-blue w-10 h-10" />,
      title: "IT Managed Services",
      description: "Kelola infrastruktur IT Anda dengan layanan dukungan yang komprehensif dan proaktif.",
      delay: 500,
      link: "/produk-layanan"
    }
  ];

  return (
    <section className="py-16 bg-antlia-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl font-bold mb-4 font-horizon">Layanan Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan teknologi informasi untuk
            membantu bisnis Anda berkembang di era digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-md group animate-on-scroll" style={{animationDelay: `${service.delay}ms`}}>
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-5">
                    {service.description}
                  </p>
                  <Link 
                    to={service.link} 
                    className="text-antlia-blue hover:text-antlia-blue/80 font-medium mt-auto flex items-center group-hover:underline transition-all"
                  >
                    Pelajari Lebih Lanjut <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-antlia-blue hover:bg-antlia-blue/80" asChild>
            <Link to="/produk-layanan" className="flex items-center">
              Lihat Semua Layanan <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
