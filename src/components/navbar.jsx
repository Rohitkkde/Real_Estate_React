import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { assets } from '../assets/assets';
import hbg from '../assets/header_img.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        document.body.style.overflow = showMenu ? 'hidden' : 'auto';
        return () => { document.body.style.overflow = 'auto'; };
    }, [showMenu]);

    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
                <img src={assets.logo} alt="Logo" />
                <ul className='hidden md:flex gap-7 text-white'>
                    <li><Link to="Header" smooth={true} duration={500} className='cursor-pointer hover:text-gray-400'>Home</Link></li>
                    <li><Link to="About" smooth={true} duration={500} className='cursor-pointer hover:text-gray-400'>About</Link></li>
                    <li><Link to="Projects" smooth={true} duration={500} className='cursor-pointer hover:text-gray-400'>Projects</Link></li>
                    <li><Link to="Testimonials" smooth={true} duration={500} className='cursor-pointer hover:text-gray-400'>Testimonials</Link></li>
                </ul>
                <button className='hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer hover:bg-blue-500'>
                    Sign Up
                </button>
                <img onClick={() => setShowMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="Menu Icon" />
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 bg-white overflow-hidden transition-all duration-500`}
                 style={{ backgroundImage: `url(${hbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='flex justify-end p-5 cursor-pointer'>
                    <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-6' alt="Close Icon" />
                </div>
                <ul className='flex flex-col items-center mt-5 px-5 text-l gap-2 font-medium'>
                    <li><Link to="Header" smooth={true} duration={500} onClick={() => setShowMenu(false)} className='px-4 py-2 inline-block text-white cursor-pointer hover:text-gray-400'>Home</Link></li>
                    <li><Link to="About" smooth={true} duration={500} onClick={() => setShowMenu(false)} className='px-4 py-2 inline-block text-white cursor-pointer hover:text-gray-400'>About</Link></li>
                    <li><Link to="Projects" smooth={true} duration={500} onClick={() => setShowMenu(false)} className='px-4 py-2 inline-block text-white cursor-pointer hover:text-gray-400'>Projects</Link></li>
                    <li><Link to="Testimonials" smooth={true} duration={500} onClick={() => setShowMenu(false)} className='px-4 py-2 inline-block text-white cursor-pointer hover:text-gray-400'>Testimonials</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
