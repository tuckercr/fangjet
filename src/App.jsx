import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import AI from './pages/AI'
import Projects from './pages/Projects'
import PrivacyPolicy from './pages/PrivacyPolicy'
import FurcastPrivacy from './pages/FurcastPrivacy'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './styles/global.css'

// Router wrapper lives in main.jsx (browser) and entry-server.jsx (prerender).
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/weather" element={<FurcastPrivacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
