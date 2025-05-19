
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img 
            src="/assets/antlia-logo.png" 
            alt="ANTLIA Logo" 
            className="w-24 h-24 animate-pulse" 
          />
          <div className="absolute inset-0 border-t-4 border-antlia-blue rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-gray-600 animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
