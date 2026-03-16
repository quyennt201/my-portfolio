import { useEffect, useState } from 'react';
import './App.css';
import Header, { SECTIONS } from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedProjects from './components/FeaturedProjects';
import TechnicalSkills from './components/TechnicalSkills';
import ContactForm from './components/ContactForm';
import Background from './components/Background';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }

      const scrollPosition = window.scrollY + 100
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id)
        if (element) {
          const offsetTop = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section.id)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen relative">
      <Header activeSection={activeSection} />
      <HeroSection />
      <TechnicalSkills />
      <FeaturedProjects />
      <ContactForm />

      <Background />
      <ScrollToTopButton showBtn={showTopBtn} />
    </div>
  );
}

export default App;
