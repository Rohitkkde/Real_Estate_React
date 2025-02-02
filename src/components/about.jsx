import React from 'react'
import {assets} from '../assets/assets'
import {motion}
from 'framer-motion'
const about = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 , x: 200}}
        transition={{duration: 1.5}}
        whileInView={{ opacity: 1, x: 0}} 
        viewport={{once: true}}
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 '>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
        <p className='text-grey-500 max-w-80 text-center mb-8'>Passionate About Properties , Dedicated to Your Vision</p>
        <div className='flex flex-col md:flex-row items-center md:item-start md:gap-20'>
        <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg' />
        <div className='flex flex-col items-center md:items-start mt-10 text-grey-600'>
           <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
            <div>
                <p className='text-4xl font-medium text-grey-800'>10+</p>
                
                <p>
                    Years of Excellence
                </p>
            </div>
            <div>
                <p className='text-4xl font-medium text-grey-800'>12+</p>
                
                <p>
                   Project Completed
                </p>
            </div>
            <div>
                <p className='text-4xl font-medium text-grey-800'>20+</p>
                
                <p>
                    Mn. Sq. Ft. Delivered
                </p>
            </div>
            <div>
                <p className='text-4xl font-medium text-grey-800'>25+</p>
                
                <p>
                    Ongoing Projects
                </p>
            </div>

           </div>
           <p className='my-10 mx-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatum aperiam, doloremque quasi itaque quae ea delectus labore ipsa nulla voluptatibus accusamus at, recusandae quam eius sapiente hic. Ad, possimus.</p>
           <button className='bg-blue-500 text-white px-8 py-3 rounded-full'>
                Learn More
           </button>
        </div>
    </div>
    </motion.div>
  )
}

export default about