import React from 'react'
import Router from './router/routes'
import Tech from './pages/tech/tech'
import { } from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import About from './pages/about/about'


export default function App() {
  return (
    <div>
      <Router/>
    <Tech/>
    </div>
  )
}
