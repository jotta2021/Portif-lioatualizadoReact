import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/header'
import Home from '../pages/home/home'
import About from '../pages/about/about'
import Tech from '../pages/tech/tech'
import App from '../App'

export default function Router() {
  return (
  
    <BrowserRouter>
      <Header />
      <Routes>
      
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route  exact path='/projects' element={<Tech/>}/>
      </Routes>
    </BrowserRouter>
  )
}
