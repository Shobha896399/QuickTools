import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const tools = [
    {
      name: 'Image to PDF',
      description: 'Convert your images into a single PDF document.',
      icon: '🖼️',
    },
    {
      name: 'PDF to JPG',
      description: 'Convert PDF pages into high-quality images.',
      icon: '📄',
    },
    {
      name: 'Merge PDF',
      description: 'Combine multiple PDF files into one document.',
      icon: '📚',
    },
    {
      name: 'Image Compressor',
      description: 'Reduce image file size without losing quality.',
      icon: '⚡',
    },
    {
      name: 'Document Scanner',
      description: 'Scan documents using your camera and save as PDF.',
      icon: '📸',
    },
    {
      name: 'PDF Compressor',
      description: 'Compress PDF files to make them easier to share.',
      icon: '🗜️',
    },
  ];

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const placeholders = [
    'Search Image to PDF...',
    'Search PDF Compressor...',
    'Search PDF to JPG...',
    'Search Merge PDF...',
    'Search Document Scanner...',
    'Search Image Compressor...',
  ];

  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isPlaceholderVisible, setIsPlaceholderVisible] = useState(true);

  useEffect(() => {
    let timeoutId;

    const intervalId = setInterval(() => {
      setIsPlaceholderVisible(false);

      timeoutId = setTimeout(() => {
        setPlaceholderIndex((prev) =>
          (prev + 1) % placeholders.length
        );

        setIsPlaceholderVisible(true);
      }, 400);

    }, 3000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={darkMode ? 'app dark' : 'app light'}>

      {/* Navbar */}
      <header className="navbar">
        <a href="#home" className="logo">
          Quick<span>Tools.</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#tools">All Tools</a>
          <a href="#about">About</a>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>

          <a href="#tools" className="nav-cta">
            Explore Tools
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <main id="home">
        <section className="hero">
          <div className="hero-badge">
            ✨ Your everyday digital toolkit
          </div>

          <h1>
            Simple Tools.
            <br />
            <span>Smarter Work.</span>
          </h1>

          <p>
            Everything you need to manage your files,
            convert documents and make everyday tasks easier.
            All in one place.
          </p>

          <div className="hero-search">
            <input
              type="text"
              className="search-input"
              placeholder=""
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={(e) => {
                const searchBar = e.currentTarget.closest('.hero-search');

                const top =
                  searchBar.getBoundingClientRect().top +
                  window.scrollY - 100;

                window.scrollTo({
                  top,
                  behavior: 'smooth',
                });
              }}
            />

            {!searchTerm && (
              <span
                className={`search-placeholder ${isPlaceholderVisible ? 'visible' : ''
                  }`}
              >
                {placeholders[placeholderIndex]}
              </span>
            )}
            <button>Search</button>
          </div>

          <div className="hero-note">
            🔒 Simple, fast and privacy-focused tools
          </div>
        </section>
        {/* All Tools Section */}
        <section className="tools-section" id="tools">
          <div className="section-heading">
            <span className="section-tag">OUR TOOLKIT</span>
            <h2>Everything You Need, <span>In One Place.</span></h2>
            <p>Powerful and easy-to-use tools to simplify your everyday tasks.</p>
          </div>

          <div className="tools-grid">
            {filteredTools.length > 0 ? (
              filteredTools.map((tool) => (
                <div className="tool-card" key={tool.name}>
                  <div className="tool-icon">{tool.icon}</div>

                  <h3>{tool.name}</h3>

                  <p>{tool.description}</p>

                  <span>Explore Tool →</span>
                </div>
              ))
            ) : (
              <p className="no-results">
                No tools found. Try another search!
              </p>
            )}
          </div>
        </section>
        {/* About Section */}
        <section className="about-section" id="about">
          <div className="about-content">
            <span className="section-tag">WHY QUICKTOOLS?</span>

            <h2>
              Make Your Work
              <br />
              <span>Simple & Faster.</span>
            </h2>

            <p>
              QuickTools brings useful file conversion and document
              management tools together in one simple place.
              No complicated steps, no unnecessary hassle.
            </p>

            <div className="about-features">
              <div>
                <span>⚡</span>
                <h3>Fast & Easy</h3>
                <p>Complete your tasks in just a few clicks.</p>
              </div>

              <div>
                <span>🔒</span>
                <h3>Privacy Focused</h3>
                <p>Your files are processed with privacy in mind.</p>
              </div>

              <div>
                <span>💜</span>
                <h3>Free to Use</h3>
                <p>Simple tools for your everyday needs.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="footer" id="footer">
        <div className="footer-content">

          <div className="footer-brand">
            <a href="#home" className="logo">
              Quick<span>Tools.</span>
            </a>

            <p>
              Simple tools. Smarter work.
              Make your everyday digital tasks easier.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#tools">All Tools</a>
            <a href="#about">About Us</a>
          </div>

          <div className="footer-links">
            <h3>Popular Tools</h3>
            <a href="#tools">Image to PDF</a>
            <a href="#tools">PDF to JPG</a>
            <a href="#tools">PDF Compressor</a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 QuickTools. All rights reserved.</p>
          <p>Made with 💜 for everyone.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;