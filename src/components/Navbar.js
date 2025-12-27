import { useEffect, useState } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'experience', 'resume'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, section) => {
    e.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-center items-center gap-8 py-4">
          <a
            href="#about"
            onClick={(e) => handleClick(e, 'about')}
            className={`font-medium transition-colors duration-200 ${
              activeSection === 'about'
                ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => handleClick(e, 'projects')}
            className={`font-medium transition-colors duration-200 ${
              activeSection === 'projects'
                ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={(e) => handleClick(e, 'experience')}
            className={`font-medium transition-colors duration-200 ${
              activeSection === 'experience'
                ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Experience
          </a>
          <a
            href="#resume"
            onClick={(e) => handleClick(e, 'resume')}
            className={`font-medium transition-colors duration-200 ${
              activeSection === 'resume'
                ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}