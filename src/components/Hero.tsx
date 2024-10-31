import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">גינוני מלכות</h1>
          <p className="text-xl md:text-2xl mb-8">יוצרים את גן החלומות שלכם</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-emerald-700 transition-colors"
            >
              צור קשר
            </a>
            <a 
              href="#gallery"
              className="bg-white text-emerald-900 px-8 py-3 rounded-lg text-lg hover:bg-gray-100 transition-colors"
            >
              הפרויקטים שלנו
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </div>
  );
}