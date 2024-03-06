import { useState } from 'react';

const Suggest = () => {
  const [activeSection, setActiveSection] = useState(null);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  return (
    <div className="container">
      
      <div className={`square ${activeSection === 'section1' ? 'active' : ''} `} onClick={() => scrollToSection('section1')}>
        Square 1
      </div>
      <div className={`square ${activeSection === 'section2' ? 'active' : ''}`} onClick={() => scrollToSection('section2')}>
        Square 2
      </div>
      <div className={`square ${activeSection === 'section3' ? 'active' : ''}`} onClick={() => scrollToSection('section3')}>
        Square 3
      </div>
      <div className='suggest'>
      <div className={`code-section ${activeSection === 'section1' ? 'active' : ''}`} id="section1">
        <h2>First Code</h2>
      </div>

      <div className={`code-section ${activeSection === 'section2' ? 'active' : ''}`} id="section2">
        <h2>Second Code</h2>
      </div>

      <div className={`code-section ${activeSection === 'section3' ? 'active' : ''}`} id="section3">
        <h2>Third Code</h2>
      </div>
      </div>
    </div>
  );
};

export default Suggest;
