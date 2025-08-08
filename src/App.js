import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import AppointmentForm from './components/AppointmentForm';
import ClinicHours from './components/ClinicHours';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <Header isScrolled={isScrolled} />
        <Hero />
        <FloatingButtons />
        
        <main>
          <About />
          <Services />
          <Testimonials />
          <Gallery />
          <ClinicHours />
          <AppointmentForm />
        </main>
        
        <Footer />
        {/* WhatsApp Floating Button */}
<a
  href="https://wa.me/918077531426?text=Hello%2C%20I%20am%20interested%20in%20your%20services.%20Please%20guide%20me."
  className="fixed bottom-20 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src="https://img.icons8.com/ios-filled/30/ffffff/whatsapp.png" alt="WhatsApp" />
</a>
{/* Instagram Floating Button */}
<a
  href="https://www.instagram.com/dr_chandra_heal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
  className="fixed bottom-60 right-4 bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-full shadow-lg z-40"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://img.icons8.com/ios-filled/30/ffffff/instagram-new.png"
    alt="Instagram"
  />
</a>
<a
  href="https://www.facebook.com/share/195VNrLAeo/?mibextid=wwXIfr" // Replace with your page URL
  className="fixed bottom-40 right-4 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50"
  target="_blank"
  rel="noopener noreferrer"
>
  <img
    src="https://img.icons8.com/ios-filled/30/ffffff/facebook-new.png"
    alt="Facebook"
  />
</a>


      </div>
    </ThemeProvider>
  );
}

export default App; 