import { Route, Routes } from "react-router-dom"
import Navbar from "./global/Navbar"
import Contact from "./pages/Contact/Contact"
import Faq from "./pages/FAQ/Faq"
import Home from "./pages/Home/Home"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
