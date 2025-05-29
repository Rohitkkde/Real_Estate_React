import React from 'react'  
import Projects from './components/projects'
import Header from './components/header' 
import About from './components/about'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'  
const App = () => {
  return ( 
    <>       
      <div className='overflow-hidden w-full'> 
      <ToastContainer /> 
        <Header />     
      
      <About />
      <Projects />     
      <Testimonials/>  
      <Contact/>
      <Footer/>
      </div>
      </>
  )
}
                  
export default App    
