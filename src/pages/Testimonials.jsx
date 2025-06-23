import React from 'react'
import Hero from '../components/TestimonialsComponents/Hero'
import Achieve from '../components/TestimonialsComponents/Achieve'
import StudentsSay from '../components/HomeComponents/StudentsSay'
import { assets } from '../assets/assets'
import Success from '../components/TestimonialsComponents/Success'


const Testimonials = () => {
  return (
    <>
      <div className='bg-black'>
        <Hero/>
        <Achieve/>
        <StudentsSay/>
        <Success/>
      </div>
    </>
  )
}

export default Testimonials