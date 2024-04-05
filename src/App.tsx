import Navigation from './components/navigation'
import Hero from './components/hero'
import About from './components/about'
import Projects from './components/projects';
import Footer from './components/footer';
import './styles/App.css'
import projData from "./data/data.json";

const data = projData.map(dt => dt);

const proj = data[0].projectData || [];
const skills = data[1].languageSkills || [];
const tools = data[2].toolIUse || [];

function App() {


  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Hero />
        <About skillsList={skills} toolsList={tools}/>
        <Projects data={proj}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App