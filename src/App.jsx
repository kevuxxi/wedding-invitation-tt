import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './shared/pages/Home'
import Footer from './shared/components/Footer'
import Rsvp from './features/rsvp/Rsvp'
import Dresscode from './features/dresscode/dresscode'
import Gifts from './features/gifts/Gifts'
import Location from './features/location/Location'
import Container from './shared/components/container/Container'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rsvp" element={<Rsvp />} />
            <Route path="/gifts" element={<Gifts />} />
            <Route path="/dresscode" element={<Dresscode />} />
            <Route path="/location" element={<Location />} />
          </Routes>
          <Footer />
        </Container>

        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
      </BrowserRouter>
    </>
  )
}

export default App
