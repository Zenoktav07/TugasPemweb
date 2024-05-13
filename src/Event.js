import React from 'react';
import './style.css'; // Import file CSS Anda
// import kurban from './images/kurban'
import blankimage from './images/blank-image.jpg';

const Event = () => {
  return (
    <section className="event-section" id="acara">
      <h2>Kegiatan dan Acara</h2>
      <p>Deskripsi singkat tentang kegiatan dan acara yang diadakan di masjid.</p>
      <div className="card-container">
        <div className="event-card">
          <img src="https://img.inews.co.id/media/600/files/networks/2022/07/10/6cba7_salurkan-hewan-qurban.jpg" alt="Event 1" />
          <p>Kegiatan pemotongan hewan qurban</p>
        </div>
        <div className="event-card">
          <img src="https://korlantas.polri.go.id/wp-content/uploads/2021/09/cirebon.jpg" alt="Event 2" />
          <p>Pembagian sembako di Masjid Subulussalam</p>
        </div>
        <div className="event-card">
          <img src="https://radarcirebon.disway.id/upload/7908075ee0087900d6099f44c324dbbb.jpeg" alt="Event 3" />
          <p>Sholat tarawih berjamaah</p>
        </div>
      </div>
    </section>
  );
}

export default Event;
