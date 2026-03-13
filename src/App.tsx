import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedProjects from './components/FeaturedProjects';
import TechnicalSkills from './components/TechnicalSkills';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen relative">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <HeroSection />
      <TechnicalSkills />
      <FeaturedProjects />
    </div>
  );
}

export default App;
