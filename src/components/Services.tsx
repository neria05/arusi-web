import React from 'react';
import { Leaf, TreePine, Flower2, Sun } from 'lucide-react';

const services = [
  {
    icon: TreePine,
    title: 'תכנון ועיצוב גינות',
    description: 'תכנון מקצועי המותאם לצרכים ולסגנון שלכם'
  },
  {
    icon: Leaf,
    title: 'דשא סינטטי',
    description: 'התקנת דשא סינטטי באיכות גבוהה עם אחריות מלאה'
  },
  {
    icon: Sun,
    title: 'תחזוקת גינות',
    description: 'שירותי תחזוקה שוטפים לשמירה על גינה מטופחת'
  },
  {
    icon: Flower2,
    title: 'שתילה וגיזום',
    description: 'שתילת צמחים וגיזום מקצועי לצמחייה בריאה'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-emerald-900 mb-12">השירותים שלנו</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <service.icon className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}