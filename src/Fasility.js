import React from 'react';
import './style.css';
import parkir from './images/parking.png';
import wudhu from './images/wudhu.png';
import kamarmandi from './images/bathroom.png';
import alatsholat from './images/prayer-mat.png';
import quran from './images/quran.png'
import masjid from './images/masjid.png';

const Fasility = () => {
  return (
    <section className="Fasility" id="fasilitas">
      <div className='content'>
        <div className="List">
            <img src={parkir} ></img>
            <h5>Lahan Parkir</h5>
            <p>Tempat parkir untuk kendaraan</p>
          </div>

          <div className="List">
            <img src={wudhu} ></img>
            <h5>Tempat Wudhu</h5>
            <p>Terdapat tempat wudhu pria dan wanita</p>
          </div>

          <div className="List">
            <img src={kamarmandi} ></img>
            <h5>Kamar Mandi</h5>
            <p>WC dan kamar mandi yang bersih</p>
          </div>

          <div className="List">
            <img src={alatsholat} ></img>
            <h5>Peralatan Sholat</h5>
            <p>Disediakan peralatan untuk sholat</p>
          </div>

          <div className="List">
            <img src={quran} ></img>
            <h5>Lemari Al-Quran</h5>
            <p>Lemari untuk menyimpan Al-Quran</p>
          </div>
        </div>
    </section>
  );
}

export default Fasility;
