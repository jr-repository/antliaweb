
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    position: "CEO, PT Maju Bersama",
    avatar: "/assets/avatar-1.jpg",
    text: "Kami sangat puas dengan layanan ANTLIA. Tim mereka sangat profesional dan memahami kebutuhan bisnis kami. Website baru kami telah meningkatkan penjualan online sebesar 40% dalam waktu 3 bulan.",
  },
  {
    id: 2,
    name: "Siti Rahayu",
    position: "Marketing Director, Teknologi Prima",
    avatar: "/assets/avatar-2.jpg",
    text: "Aplikasi mobile yang dikembangkan oleh ANTLIA telah membantu kami menjangkau pelanggan dengan cara yang baru dan inovatif. Sangat merekomendasikan layanan mereka!",
  },
  {
    id: 3,
    name: "Agus Permana",
    position: "CTO, Fintech Solutions",
    avatar: "/assets/avatar-3.jpg",
    text: "ANTLIA membantu kami dalam migrasi ke cloud dengan sangat efisien. Tidak ada gangguan pada operasional bisnis dan sekarang infrastruktur IT kami jauh lebih handal dan aman.",
  },
  {
    id: 4,
    name: "Diana Putri",
    position: "Operations Manager, Retailindo",
    avatar: "/assets/avatar-4.jpg",
    text: "Solusi analisis data yang disediakan oleh ANTLIA memberikan wawasan berharga tentang perilaku pelanggan kami, yang membantu kami membuat keputusan bisnis yang lebih baik.",
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <Card className="border-none shadow-none">
    <CardContent className="p-6 bg-white rounded-xl shadow-md">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 relative">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-antlia-blue">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-antlia-cyan rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M10 11h2v5M10 11V9a2 2 0 114 0v2M7 15h8M7 6h2v4M2 20h20"></path>
            </svg>
          </div>
        </div>
        
        <div className="mb-4">
          {Array(5).fill(0).map((_, i) => (
            <span key={i} className="text-yellow-400">★</span>
          ))}
        </div>
        
        <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
        
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-gray-500 text-sm">{testimonial.position}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const TestimonialsSlider = () => {
  return (
    <section className="py-16 bg-antlia-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-xl font-bold mb-4">Apa Kata Klien Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami telah membantu berbagai perusahaan dalam transformasi digital mereka.
            Berikut adalah apa yang mereka katakan tentang kami.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto animate-on-scroll">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static mr-2" />
              <CarouselNext className="relative static ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
