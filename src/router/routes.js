import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/header'
import Home from '../pages/home/home'
import About from '../pages/about/about'
import Tech from '../pages/tech/tech'

export default function Router() {
  return (
  
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/projects' element={Tech}/>
      </Routes>
    </BrowserRouter>
  )
}
