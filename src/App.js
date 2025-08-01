import React, { useEffect } from 'react';
import './App.css';
// import './Design.css';
// import './About.css';
// import './contact.css';

function App() {
  useEffect(() => {
    document.title = 'Kaviyarasan';
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <h1><span className="highlight">K</span>aviyarasan G</h1>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Home Section */}
      <section id="home" className="intro">
        <img src="/assets/ID photo.jpg" alt="Kaviyarasan" className="profile-pic" />
        <div>
          <h2>Frontend Developer </h2>
          <p>Email: <a href="mailto:kavigunasekar185@gmail.com">kavigunasekar185@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/kaviyarasan-g-11068125a" target="_blank">View Profile</a></p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section">
        <h2>Experience</h2>
        <div className="card">
          <h3>Frontend Developer Intern – PRADAN (Apr 2025)</h3>
          <ul>
            <li>Digitized form collection system, reducing manual input by 60%</li>
            <li>Built mobile app using React Native and TypeScript</li>
            <li>Used Zustand for state management and AWS for backend</li>
            <li>Led a 4-member team and ensured timely project delivery</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <h2>Projects</h2>

        <div className="card">
          <h3>Const-easy-tution</h3>
          <p><strong>Tech:</strong> Python, PyTorch, CUDA, Flask, Tkinter</p>
          <ul>
            <li>Trained transformer model on Indian legal corpus, boosted performance by 40%</li>
            <li>Built AI chatbot GUI with 500ms latency </li>
          </ul>
        </div>

        <div className="card">
          <h3>Nexus TPMS</h3>
          <p><strong>Tech:</strong> React Native, AWS, LoRaWAN, Esp32</p>
          <ul>
            <li>Created IoT-based tyre pressure system, reduced data delay by 35%</li>
            <li>Used 6+ AWS services for real-time updates</li>
          </ul>
        </div>

        <div className="card">
          <h3>Spot It Glasses</h3>
          <p><strong>Tech:</strong> Java, Android Studio, Tesseract, Figma</p>
          <ul>
            <li>Built smart glasses with 95% OCR accuracy</li>
            <li>Enabled real-time translation and definitions using Serp API</li>
          </ul>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        

        <h2>Skils</h2>
        <table className="language-table">
          <tbody>
            <tr><td>1</td><td><span className="lang java">Java</span></td></tr>
            <tr><td>2</td><td><span className="lang python">Python</span></td></tr>
            <tr><td>3</td><td><span className="lang c">C</span></td></tr>
            <tr><td>4</td><td><span className="lang cpp">C++</span></td></tr>
          </tbody>
        </table>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p><strong>Phone:</strong> +91 6380641920</p>
        <p><strong>Email:</strong> <a href="mailto:kavigunasekar185@gmail.com">kavigunasekar185@gmail.com</a></p>

        <h2>Social Profiles</h2>
        <ul className="social-links">
          <li><a href="https://github.com/kaviyarasan-2005" target="_blank">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/kaviyarasan-g-11068125a" target="_blank">LinkedIn</a></li>
          <li><a href="https://leetcode.com/u/kavi-185/" target="_blank">LeetCode</a></li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Kaviyarasan G</p>
      </footer>
    </div>
  );
}

export default App;