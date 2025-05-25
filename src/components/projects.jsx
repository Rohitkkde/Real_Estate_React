import React, { useEffect } from 'react'
import {assets, projectsData} from '../assets/assets'
import {motion} from 'framer-motion'

function Projects() {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [cardToshow, setCardToShow] = React.useState(1);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    }
    const PrevProject = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1);


    }

    useEffect(() => {const updatecardtodisplay=()=>{
        if(window.innerWidth>=1024){
            setCardToShow(projectsData.length)
        }else{
            setCardToShow(1)
        }
    };
        updatecardtodisplay();
        window.addEventListener('resize', updatecardtodisplay);
        return () => {
            window.removeEventListener('resize', updatecardtodisplay)
        }   
    }, [])
    return (
        <motion.div 
        initial={{ opacity: 0 , x: -200}}
        transition={{duration: 1.5}}
        whileInView={{ opacity: 1, x: 0}} 
        viewport={{once: true}}
        className='container mx-auto text-center py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
            <h1 className='text 2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
            <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces , Bluiding Legacies-Explore our Portfolio</p>

            {/* slider button */}
            <div className='flex justify-end items-center mb-8'> 
                <button onClick={PrevProject} className='p-3 bg-grey-200 rounded mr-2' aria-label='Previous'>
                    <img src={assets.left_arrow} alt="Previous projects" />
                </button>
                <button onClick={nextProject} className='p-3 bg-grey-200 rounded mr-2' aria-label='next projects'>
                    <img src={assets.right_arrow} alt="next" />
                </button>
            </div>
            {/* project slider cards */}
            <div className='  overflow-hidden'>
                <div className='flex gap-8 transition-transfrom duration-500 ease-in-out' style={{ transform: `translateX(-${(currentIndex * 100)/cardToshow}%)` }}>
                    {projectsData.map((project,index)=>(
                        <div className='realtive flex-shrink-0 w-full sm:w-1/4' key={index}>
                            <img src={project.image}  alt={project.title} className='w-full mb-14 h-auto' /> 
                            <div className='relative  left-0 right-0 bottom-5 flex justify-center'>
                                <div className=" inline-block bottom-10 bg-white w-3/4 px-4 py-2 shadow-md">
                                <h2 className='text-xl font-semibold text-gray-800'>{project.title}
                                    </h2>
                                    <p className='text-gray-500 text-sm'>   
                                      {project.price }<span>|</span> {project.location}
                                    </p>
                                    </div>

                            </div>
                          
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Projects
