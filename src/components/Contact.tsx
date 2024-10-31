import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-emerald-900 mb-12">צור קשר</h2>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">פרטי התקשרות</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-emerald-600" />
                  <a href="tel:+972532777204" className="hover:text-emerald-600">053-277-7204</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                  <span>אזור השרון והמרכז</span>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="https://wa.me/972532777204" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>שלח הודעת WhatsApp</span>
                </a>
              </div>
            </div>
            
            <div>
              <img 
                src="https://i.ibb.co/hdMDx98/46718962-755797424812919-6396343963271299072-n.jpg"
                alt="אביתר ערוסי"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <p className="mt-4 text-center text-gray-600">
                אביתר ערוסי - בעלים ומנהל מקצועי
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}