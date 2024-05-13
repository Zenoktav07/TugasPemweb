import React from 'react';
import Home from './Home';
import Header from './Header';
import Fasility from './Fasility';
import Testimoni from './Testimoni';
import JadwalShalat from './JadwalShalat';
import Gallery from './Gallery';
import Event from './Event';
import About from './About';
import Contact from './Contact';
import './style.css';

function App() {
  return (
    <div className="App">

      <Header />

      <main>
        <Home />
        <Fasility />
        <About />
        <Event />
        <JadwalShalat />
        <Gallery />
        <Testimoni />
        <Contact />
      </main>

      <footer className="Footer">
        <p>&copy; 2024 ProjekTIM. Novan & Dyandra. Matkul Pemweb</p>
      </footer>
      
    </div>
  );
}

export default App;
