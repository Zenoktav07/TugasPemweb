import React from 'react';
import './style.css'; // Import file CSS

const Contact = () => {
  return (
    <section className="location-section" id="kontak">
      <div className="location-info">
        <h2>Alamat Masjid Subulussalam</h2>
        <p>Jl. Permata Raya, Kalijaga, Kec. Harjamukti,</p>
        <p>Kota Cirebon, Jawa Barat</p>
      </div>
      <div className="map-container">
        {/* Tempatkan peta di sini menggunakan Google Maps API atau layanan peta lainnya */}
        <iframe
          title="lokasi-perusahaan"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.0875369533173!2d108.55165637410423!3d-6.759179866093332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1db0911339bf%3A0x417b1a48caefbdcb!2sMasjid%20Subulussalam!5e0!3m2!1sid!2sid!4v1715544090315!5m2!1sid!2sid"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
