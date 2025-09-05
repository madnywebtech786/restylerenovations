import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import About from '../sections/About'
import WhyChoose from '../sections/WhyChoose'
import Testimonials from '../sections/Testimonials'

export default function page() {
  return (
    <div>
    <Breadcrumb name={'About Us'} />
    <About />
    <WhyChoose />
    <Testimonials />
    </div>
  )
}
