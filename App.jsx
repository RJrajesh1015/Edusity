import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Conatct/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subTitle='Our PROGRAM' title='What We Offer'/>
      <Programs/>
      <About/>
      <Title subTitle='Gallery' title='campus Photos'/>
      <Campus/>
      <Title subTitle='TESIMONIALS' title='What Student Says'/>
     <Testimonials/>
     <Title subTitle='Contact Us' title='Get In Touch'/>
     <Contact/>
     <Footer/>
      </div>
      
    
    </div>
  )
}

export default App