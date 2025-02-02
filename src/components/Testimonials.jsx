import React from 'react'
import {assets, testimonialsData } from '../assets/assets' 
import {motion} from 'framer-motion'
const Testimonials = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 , x: 200}}
        transition={{duration: 1.5}}
        whileInView={{ opacity: 1, x: 0}} 
        viewport={{once: true}}
    className='container mx-auto text-center py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Testimonials'>
        <h1 className='text 2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span  className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Real Stories From those who Found Home with Us</p>

        <div className='flex flex-wrap justify-center gap-8'>
            {testimonialsData.map((testimonial, index) => (
               < div className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center' key={index}>
                <img src={testimonial.image} alt={testimonial.alt} className='  w-20 h-20 rounded-full  mb-4 mx-auto' />   
                 <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
                 <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>

                 <div className='flex justify-center gap-2 text-red-500 mb-5'>
                    {Array.from({length : testimonial.rating},(item ,index)=>(
                        <img src={assets.star_icon} alt="star" className='w-5 h-5' key={index} />
                    ))}
                 </div>
                 <p className='text-gray-500'>
                    {testimonial.text}
                 </p>



                </div>

            ))}
        </div>
    </motion.div>
  )
}

export default Testimonials