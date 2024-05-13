import React from 'react';
import './style.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Masjid Subulussalam</h1>
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item"><a href="#home">Home</a></li>
            <li className="nav-item"><a href="#fasilitas">Fasilitas</a></li>
            <li className="nav-item"><a href="#tentang">Tentang Masjid</a></li>
            <li className="nav-item"><a href="#acara">Acara</a></li>
            <li className="nav-item"><a href="#jadwal">Jadwal Sholat</a></li>
            <li className="nav-item"><a href="#ulasan">Ulasan</a></li>
            <li className="nav-item"><a href="#kontak">Kontak</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;