import React from 'react';
import { Phone, MessageCircle, Leaf, TreePine, Flower2, Sun, Star } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-emerald-600" />
            <h1 className="text-2xl font-bold text-emerald-900">גינוני מלכות</h1>
          </div>
          <div className="flex gap-6">
            <a href="#services" className="text-gray-600 hover:text-emerald-600">שירותים</a>
            <a href="#gallery" className="text-gray-600 hover:text-emerald-600">גלריה</a>
            <a href="#testimonials" className="text-gray-600 hover:text-emerald-600">המלצות</a>
            <a href="#contact" className="text-gray-600 hover:text-emerald-600">צור קשר</a>
          </div>
          <a 
            href="https://wa.me/972532777204" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-emerald-700 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>

      <footer className="bg-emerald-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">גינוני מלכות</h2>
              <p className="mt-2">עיצוב ותחזוקת גינות ברמה הגבוהה ביותר</p>
            </div>
            <div className="flex gap-4">
              <Phone className="h-5 w-5" />
              <span>053-277-7204</span>
            </div>
          </div>
          <div className="mt-6 text-center text-emerald-200">
            © {new Date().getFullYear()} גינוני מלכות. כל הזכויות שמורות.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;