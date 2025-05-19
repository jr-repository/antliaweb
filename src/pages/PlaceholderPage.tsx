
import React from "react";
import { useLocation } from "react-router-dom";

const PlaceholderPage = () => {
  const location = useLocation();
  let title = "";

  // Get the title based on the path
  if (location.pathname === "/produk-layanan") {
    title = "Produk & Layanan";
  } else if (location.pathname === "/tentang-kami") {
    title = "Tentang Kami";
  } else if (location.pathname === "/solusi") {
    title = "Solusi";
  } else if (location.pathname === "/klien") {
    title = "Klien";
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-gray-600 mb-8">
          Halaman ini masih dalam pengembangan.
        </p>
        <div className="p-8 bg-antlia-light rounded-lg">
          <div className="flex flex-col items-center justify-center h-40">
            <div className="w-16 h-16 text-antlia-blue mb-4">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
                />
              </svg>
            </div>
            <p className="text-gray-600">
              Konten untuk halaman ini sedang dipersiapkan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
