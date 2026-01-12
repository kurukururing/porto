import './App.css'
import Navbar from './assets/components/navbar'
import HomeContentCard from './assets/components/homeContentCard'
import AboutContent from './assets/components/aboutContent'

function App() {
  return(
    <>
      <Navbar />
      <div id='home' className='section'>
        <HomeContentCard />
      </div>
      <div id='about' className='section'>
        <AboutContent />
      </div>
      <div id='certification' className='section'>

      </div>
      <div id='project' className='section'>

      </div>
      <div id='contact' className='section'>

      </div>
    </>
  )
}

export default App