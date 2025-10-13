import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './shared/pages/Home'
import Navbar from './shared/components/Navbar'
import Footer from './shared/components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
