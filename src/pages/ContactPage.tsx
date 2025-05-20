
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    company: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        company: ""
      });
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <PageHero 
        title="Hubungi Kami" 
        subtitle="Tim kami siap membantu Anda dengan pertanyaan dan kebutuhan Anda"
        backgroundImage="/assets/clients-hero-bg.jpg"
      />
      
      {/* Contact Info & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 animate-on-scroll">
              <div className="mb-8">
                <span className="subtitle block mb-2">Get in Touch</span>
                <h2 className="text-3xl font-bold mb-4">Informasi Kontak</h2>
                <p className="text-gray-600">
                  Hubungi kami untuk konsultasi, informasi lebih lanjut, atau mulai kerjasama.
                </p>
              </div>
              
              <Card className="mb-6 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-antlia-blue/10 rounded-full">
                      <Phone className="w-6 h-6 text-antlia-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Telepon</h3>
                      <p className="text-gray-600 mb-2">Senin - Jumat, 09:00 - 17:00</p>
                      <a href="tel:+6281573635143" className="text-antlia-blue hover:underline">+62 815-7363-5143</a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mb-6 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-antlia-blue/10 rounded-full">
                      <Mail className="w-6 h-6 text-antlia-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-gray-600 mb-2">Respons dalam 24 jam</p>
                      <a href="mailto:info@antlia.id" className="text-antlia-blue hover:underline">info@antlia.id</a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mb-6 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-antlia-blue/10 rounded-full">
                      <MapPin className="w-6 h-6 text-antlia-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Kantor Pusat</h3>
                      <p className="text-gray-600 mb-2">Jakarta</p>
                      <address className="text-gray-600 not-italic">
                        Jalan Sudirman No. 123<br />
                        Jakarta Selatan, 12190<br />
                        Indonesia
                      </address>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-antlia-blue/10 rounded-full">
                      <Clock className="w-6 h-6 text-antlia-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Jam Kerja</h3>
                      <div className="text-gray-600">
                        <p className="mb-1">Senin - Jumat: 09:00 - 17:00</p>
                        <p>Sabtu - Minggu: Tutup</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2 animate-on-scroll" style={{animationDelay: "200ms"}}>
              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">Kirim Pesan</h2>
                    <p className="text-gray-600">
                      Isi formulir di bawah ini dan tim kami akan menghubungi Anda sesegera mungkin.
                    </p>
                  </div>
                  
                  {formSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start">
                      <CheckCircle className="text-green-500 w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-green-800">Pesan Terkirim!</h3>
                        <p className="text-green-700">
                          Terima kasih telah menghubungi kami. Tim kami akan segera meninjau pesan Anda dan menghubungi Anda.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Nama Lengkap</label>
                          <input 
                            type="text" 
                            id="name" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-antlia-blue/50 focus:border-antlia-blue"
                            placeholder="Masukkan nama lengkap"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                          <input 
                            type="email" 
                            id="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-antlia-blue/50 focus:border-antlia-blue"
                            placeholder="contoh@email.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Nomor Telepon</label>
                          <input 
                            type="tel" 
                            id="phone" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-antlia-blue/50 focus:border-antlia-blue"
                            placeholder="+62 8xx xxxx xxxx"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-gray-700 font-medium mb-1">Perusahaan (opsional)</label>
                          <input 
                            type="text" 
                            id="company" 
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-antlia-blue/50 focus:border-antlia-blue"
                            placeholder="Nama perusahaan"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">Jenis Layanan</label>
                        <select 
                          id="subject" 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-antlia-blue/50 focus:border-antlia-blue"
                        >
                          <option value="">Pilih layanan</option>
                          <option value="Pengembangan Aplikasi Kustom">Pengembangan Aplikasi Kustom</option>
                          <option value="Konsultasi IT">Konsultasi IT</option>
                          <option value="Cloud Migration">Cloud Migration</option>
                          <option value="Keamanan Cyber">Keamanan Cyber</option>
                          <option value="Pengembangan Web & Mobile">Pengembangan Web & Mobile</option>
                          <option value="Analisis Data & BI">Analisis Data & BI</option>
                          <option value="Lainnya">Lainnya</option>
                        </select>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Pesan</label>
                        <textarea 
                          id="message" 
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-antlia-blue/50 focus:border-antlia-blue"
                          placeholder="Jelaskan kebutuhan Anda secara detail..."
                        ></textarea>
                      </div>
                      
                      <div>
                        <Button type="submit" className="bg-antlia-blue hover:bg-antlia-blue/80 w-full md:w-auto">
                          Kirim Pesan
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-10 bg-antlia-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 animate-on-scroll">
            <span className="subtitle block mb-2">Our Location</span>
            <h2 className="text-3xl font-bold mb-4">Temukan Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kunjungi kantor kami untuk diskusi langsung dengan tim ANTLIA
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px] animate-on-scroll">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0665752633857!2d106.8273991!3d-6.2478833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e604144ea3%3A0xf970e58aaaadf04!2sJl.%20Jend.%20Sudirman%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1653914958497!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="ANTLIA Office Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <span className="subtitle block mb-2">Questions & Answers</span>
            <h2 className="text-3xl font-bold mb-4">Pertanyaan Umum</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jawaban untuk pertanyaan yang sering diajukan tentang layanan kami
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Bagaimana cara memulai kerjasama dengan ANTLIA?",
                answer: "Proses kerja sama dimulai dengan konsultasi awal untuk memahami kebutuhan Anda. Silakan hubungi kami melalui formulir kontak, email, atau telepon untuk mengatur jadwal konsultasi."
              },
              {
                question: "Berapa biaya untuk layanan ANTLIA?",
                answer: "Biaya layanan kami bervariasi tergantung pada jenis dan skala proyek. Kami menawarkan penawaran yang disesuaikan berdasarkan kebutuhan spesifik Anda. Hubungi kami untuk mendapatkan penawaran yang sesuai dengan proyek Anda."
              },
              {
                question: "Berapa lama waktu yang dibutuhkan untuk menyelesaikan proyek?",
                answer: "Durasi proyek bergantung pada kompleksitas dan ruang lingkupnya. Proyek sederhana dapat selesai dalam beberapa minggu, sementara proyek yang lebih kompleks mungkin membutuhkan beberapa bulan. Kami akan memberikan estimasi yang realistis setelah konsultasi awal."
              },
              {
                question: "Apakah ANTLIA menyediakan dukungan setelah proyek selesai?",
                answer: "Ya, kami menawarkan paket dukungan dan pemeliharaan pasca-peluncuran untuk memastikan solusi Anda tetap berjalan optimal. Kami juga menyediakan pelatihan pengguna dan dokumentasi lengkap."
              }
            ].map((faq, index) => (
              <Card key={index} className="mb-4 animate-on-scroll" style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
