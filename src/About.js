import React from 'react';
import './style.css';
import logo from './images/logo.jpg';

const About = () => {
  return (
    <div className="about-container" id="tentang">
      <div className="image-container">
        <img src={logo}></img>
      </div>
      <div className="text-container">
        <h2>Arti Logo Masjid Subulussalam</h2>
        <p>
        A. Masjid<br></br>
        - Memiliki 6 anak tangga mempresentasikan dasar rukun iman sebagai azas akidah pendirian masjid<br></br>
        - Memiliki 5 pintu masuk, mempresentasikan rukun islam untuk mewujudkan kesholehan individual dan kesholehan sosial<br></br>
        - Kubah dengan puncak mengarah kepada Allah SWT yang Esa sebagai tujuan<br></br>
        - Warna hijau sebagai representasi potensi wadah yang memiliki manfaat dan kesejukan bagi umat<br></br>

        B. Bentuk Persegi 8 Putih<br></br>
        - Merupakan dampak pemberdayaan potensi masjid yang memancar keseluruh penjuru mata angin(Rahmatan Lil Alamain)<br></br>

        C. Lingkaran Hijau<br></br>
        - Sebagai bentuk kesejukan & kenyamanan serta keseluruhan dalam wadah yang bulat, wujud kebulatan tekad DKM Subulussalam untuk memberdayakan potensi masjiddalam meningkatkan kesejahteraaan jamaah dan umat<br></br>

        D. Lingkaran Kuning<br></br>
        - Sebagai ikatan persaudaraan dan ukhuwah islamiyah jamaah dalam merajut kesatuan dan persatuan umat<br></br>

        E. Tulisan "DKM SUBULUSSALAAM RW 14 PERMATA HARJAMUKTI UTARA"<br></br>
        - Menunjukkan tempat dan lokasi keberadaan masjid subulussalam
        </p>
      </div>
    </div>
  );
};

export default About;
