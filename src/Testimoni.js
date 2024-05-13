// Testimonials.js

import React, { useState } from 'react';
import './style.css';

const testimonialsData = [
  {
    id: 1,
    name: "Pramiadhy Nugraha",
    position: "",
    testimonial: '"Nyaman banget hy saran tuk kamar mandi harap diperbaiki ya dan yg parkir d luar masjid tolong diperhatikan terutama pas belokan.. sebelum kejadian lebih baik mengantisipasi..mksh"'
  },
  {
    id: 2,
    name: "Dhian Hayyu",
    position: "",
    testimonial: '"Masjid di deket komplek perumahan Permata Harja Mukti , bersih masjid nya , bagus tempatnya , nyaman juga , tempat wudhu nya bersih , tempat nya rapih , bawa uang kencleng kalo ke masjid , isi celengan masjid , sodaqoh buat sangu nanti , kalo punya uang banyak bisa dititipin ke masjid uangnya , bekel buat nanti.."'
  },
  {
    id: 3,
    name: "Dwi Asmoro",
    position: "",
    testimonial: '"Masjid nya nyaman, parkir luas, suasana nya teduh meskipun berada di perumahan."'
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? testimonialsData.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === testimonialsData.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="testimonials" id="ulasan">
      <h2>Ulasan</h2>
      <div className="carousel">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={index === currentSlide ? "slide active" : "slide"}
          >
            <p className="testimonial-text">{testimonial.testimonial}</p>
            <p className="testimonial-author">{testimonial.name}, {testimonial.position}</p>
          </div>
        ))}
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  );
}

export default Testimonials;
