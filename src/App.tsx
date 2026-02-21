import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import SignUp from './components/SignUp'
import UpgradePackage from './pages/UpgradePackage'
import Marketplace from './pages/Marketplace'

function App() {
  return (
    <div className="app">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/upgrade" element={<UpgradePackage />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
