import React from 'react';
import './style.css'; // File CSS untuk styling
import masjid1 from './images/masjid1.jpg';
// import masjid2 from './images/masjid2.jpg';
import masjid3 from './images/masjid3.jpg';
import masjid4 from './images/masjid4.jpg';
import masjid5 from './images/masjid5.jpg';
import masjid6 from './images/masjid6.jpg';
import masjid7 from './images/masjid7.jpg';
import masjid8 from './images/masjid8.jpg';
// import masjid9 from './images/masjid9.jpg';
import masjid10 from './images/masjid10.jpg';

const Gallery = () => {
  // Daftar foto dokumentasi masjid (contoh)
  const photos = [
    { id: 1, src: masjid1, alt: 'Masjid 1' },
    // { id: 2, src: masjid2, alt: 'Masjid 2' },
    { id: 3, src: masjid3, alt: 'Masjid 3' },
    { id: 4, src: masjid4, alt: 'Masjid 4' },
    { id: 5, src: masjid5, alt: 'Masjid 5' },
    { id: 6, src: masjid6, alt: 'Masjid 6' },
    { id: 7, src: masjid7, alt: 'Masjid 7' },
    { id: 8, src: masjid8, alt: 'Masjid 8' },
    // { id: 9, src: masjid9, alt: 'Masjid 9' },
    { id: 10, src: masjid10, alt: 'Masjid 10' },
  ];

  return (
    <section className="gallery">
        <h2>Gallery</h2>
      <div className="grid-container">
        {photos.map(photo => (
          <div key={photo.id} className="grid-item">
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
