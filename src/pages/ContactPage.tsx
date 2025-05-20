
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import PageHero from "@/components/PageHero";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Pesan Terkirim",
        description: "Terima kasih telah menghubungi kami. Tim kami akan segera merespons.",
        variant: "default",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="font-poppins">
      <PageHero 
        title="Hubungi"
        subtitle="Mari berbicara tentang bagaimana kami dapat membantu bisnis Anda."
        backgroundImage="/assets/contact-hero-bg.jpg"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6 font-horizon">Hubungi Kami</h2>
              <p className="text-gray-600 mb-8">
                Apakah Anda memiliki pertanyaan tentang layanan kami atau ingin memulai proyek? 
                Isi formulir di samping atau hubungi kami langsung melalui kontak di bawah.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-antlia-blue/10 rounded-full">
                    <Phone className="w-6 h-6 text-antlia-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Telepon</h3>
                    <p className="text-gray-600">+62 815 7363 5143</p>
                    <p className="text-gray-600">+62 21 5489 7654</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-antlia-blue/10 rounded-full">
                    <Mail className="w-6 h-6 text-antlia-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">info@antlia.co.id</p>
                    <p className="text-gray-600">support@antlia.co.id</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-antlia-blue/10 rounded-full">
                    <MapPin className="w-6 h-6 text-antlia-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Alamat</h3>
                    <p className="text-gray-600">
                      Gedung Cyber 2 Tower, Lantai 18<br />
                      Jl. HR. Rasuna Said No. X5, Kuningan<br />
                      Jakarta Selatan, DKI Jakarta 12950
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-antlia-blue/10 rounded-full">
                    <Clock className="w-6 h-6 text-antlia-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Jam Operasional</h3>
                    <p className="text-gray-600">
                      Senin - Jumat: 08:00 - 17:00<br />
                      Sabtu: 09:00 - 14:00<br />
                      Minggu: Tutup
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-antlia-blue/10 rounded-full hover:bg-antlia-blue/20 transition-colors">
                    <svg className="w-5 h-5 text-antlia-blue" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                  </a>
                  <a href="#" className="p-3 bg-antlia-blue/10 rounded-full hover:bg-antlia-blue/20 transition-colors">
                    <svg className="w-5 h-5 text-antlia-blue" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                  </a>
                  <a href="#" className="p-3 bg-antlia-blue/10 rounded-full hover:bg-antlia-blue/20 transition-colors">
                    <svg className="w-5 h-5 text-antlia-blue" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll" style={{animationDelay: '200ms'}}>
              <Card className="shadow-lg border-0 overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-antlia-blue focus:border-antlia-blue"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-antlia-blue focus:border-antlia-blue"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subjek</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-antlia-blue focus:border-antlia-blue"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-antlia-blue focus:border-antlia-blue"
                        required
                      ></textarea>
                    </div>
                    
                    <Button type="submit" className="bg-antlia-blue hover:bg-antlia-blue/80 text-white w-full" disabled={loading}>
                      {loading ? 'Mengirim...' : (
                        <>
                          Kirim Pesan <Send className="ml-2 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-antlia-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4 font-horizon">Lokasi Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kunjungi kantor kami untuk konsultasi langsung dengan tim ahli kami.
            </p>
          </div>
          
          <div className="overflow-hidden rounded-xl shadow-lg h-[400px] animate-on-scroll">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2844390995477!2d106.8269451!3d-6.2268061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3bcf5faee25%3A0x425c71c118b93008!2sJl.%20H.%20R.%20Rasuna%20Said%2C%20Kuningan%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1653971038289!5m2!1sen!2sid"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
