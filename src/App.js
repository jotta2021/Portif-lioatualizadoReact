import React from 'react'
import Router from './router/routes'
import Tech from './pages/tech/tech'
import { } from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import About from './pages/about/about'
import Home from './pages/home/home'


export default function App() {
  return (
    <div>
      <Router/>
    </div>
  )
}
