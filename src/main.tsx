import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/index.tsx'
import Error from './pages/Error/index.tsx'
import Flat from './pages/Flat/index.tsx'
import About from './pages/About/index.tsx'
import Header from './components/Header/index.tsx'
import Footer from './components/Footer/index.tsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flat/:id" element={<Flat />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
)
