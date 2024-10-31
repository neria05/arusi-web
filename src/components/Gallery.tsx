import React from 'react';

const projects = [
  {
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80",
    title: "גינה מעוצבת בהרצליה"
  },
  {
    image: "https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&q=80",
    title: "התקנת דשא סינטטי ברעננה"
  },
  {
    image: "https://images.unsplash.com/photo-1584479898061-15742e14f50d?auto=format&fit=crop&q=80",
    title: "גינת גג בתל אביב"
  },
  {
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80",
    title: "עיצוב גינה ביתית"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-emerald-900 mb-12">הפרויקטים שלנו</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 w-full p-6">
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}