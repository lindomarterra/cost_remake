import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./components/page/Home"
import Projects from './components/page/Projects'
import Contact from './components/page/Contact'

import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import NewProject from "./components/page/NewProject"


const App = () => {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newProject" element={ <NewProject/> } />
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App