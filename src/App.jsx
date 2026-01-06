// App.jsx
import './App.css'
import Navbar from './assets/components/navbar.jsx'
import Card from './assets/components/card.jsx'
import GridCard from './assets/components/gridCard.jsx'
import About from './assets/components/about.jsx'
import FadeInSection from './assets/components/FadeInSection.jsx'
import Project from './assets/components/project.jsx'
import Contact from './assets/components/contact.jsx'

function App() {
  return(
    <>
      <Navbar />
      <FadeInSection>
        <div id="home" className="section">
          <Card />
          <GridCard />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div id="about" className="section">
          <About />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div id="project" className="section">
          <Project />
        </div>
      </FadeInSection>
      <FadeInSection>
        <div id="contact" className="section">
          <Contact />
        </div>
      </FadeInSection>
      <footer>
        <div className="footerContainer">
        
        {/* Kolom 1: Brand & Deskripsi Singkat */}
        <div className="footerColumn">
            <h3>MyPortfolio.</h3>
            <p>
                Membangun pengalaman digital yang menarik dengan kode yang bersih dan desain modern.
            </p>
        </div>

        {/* Kolom 2: Navigasi */}
        <div className="footerColumn">
            <h3>Links</h3>
            <a href="#home">Home</a>
            <a href="#project">Project</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </div>

        {/* Kolom 3: Social Media */}
        <div className="footerColumn">
            <h3>Socials</h3>
            {/* Target="_blank" agar membuka tab baru */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </div>

    </div>

    {/* Garis Bawah Copyright */}
    <div className="footerBottom">
        <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
    </div>
      </footer>
    </>
  )
}

export default App