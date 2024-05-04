import { useState } from 'react';
import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Home from './components/Home';

const pages = [
  { name: 'about', title: 'About' },
  { name: 'projects', title: 'Projects' },
  { name: 'contact', title: 'Contact' },
];

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'about': return <About/>;
      case 'projects': return <Projects/>;
      case 'contact': return <Contact/>;
      default: return <Home/>;
    }
  };

  return (
    <>
      <header>
        <nav>
          <div className="nav-left">
            <button onClick={() => setCurrentPage('home')}>Home</button>
          </div>
          <div className="nav-right">
            {pages.map(page => (
              <button key={page.name} onClick={() => setCurrentPage(page.name)}>
                {page.title}
              </button>
            ))}
            <a href="public/Nick's Resume (Updated 10.14.2023).pdf" target="_blank" rel="noopener noreferrer">
              <button>Resume</button>
            </a>
          </div>
        </nav>
      </header>
      <main>
        {renderContent()}
      </main>
    </>
  );
}

export default App;

