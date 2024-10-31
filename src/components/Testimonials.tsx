import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "דני כהן",
    text: "אביתר ביצע עבודה מדהימה בגינה שלנו. המקצועיות והשירות היו ברמה הגבוהה ביותר.",
    rating: 5
  },
  {
    name: "מיכל לוי",
    text: "התקנת הדשא הסינטטי הייתה מושלמת. הצוות היה אדיב ומקצועי, והתוצאה מדהימה.",
    rating: 5
  },
  {
    name: "יוסי אברהם",
    text: "שירות מעולה ותוצאות מרשימות. ממליץ בחום על גינוני מלכות לכל מי שמחפש גנן מקצועי.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-emerald-900 mb-12">מה הלקוחות אומרים</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="font-bold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}