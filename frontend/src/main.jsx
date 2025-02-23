import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Homepage from './Components/Homepage.jsx'
import Navigationpage from './Components/Navigationpage.jsx'
import Examinationpage from './Components/Examinationpage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/navigation" element={<Navigationpage/>}/>
      <Route path="/examination" element={<Examinationpage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
