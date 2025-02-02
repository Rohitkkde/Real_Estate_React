import React from 'react';
import {assets} from '../assets/assets';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-6 md:px-20 lg:px-32">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <img className=" py-2" src={assets.logo_dark} alt="" />
                        <h3 className="text-lg font-semibold mb-4 ">About Us</h3>
                        <p className="text-gray-400">We are a leading real estate company dedicated to helping you find your dream home. Our team of experts is here to guide you through every step of the process.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="text-gray-400">
                            <li className="mb-2"><a href="#Header" className="hover:text-white">Home</a></li>
                            <li className="mb-2"><a href="#About" className="hover:text-white">About</a></li>
                            <li className="mb-2"><a href="#Projects" className="hover:text-white">Projects</a></li>
                            <li className="mb-2"><a href="#Testimonials" className="hover:text-white">Testimonials</a></li>
                            <li className="mb-2"><a href="#Contact" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="text-gray-400">123 Real Estate St.<br />City, State, 12345</p>
                        <p className="text-gray-400 mt-2">Email: info@realestate.com</p>
                        <p className="text-gray-400 mt-2">Phone: (123) 456-7890</p>
                    </div>
                    <div className='w-full md:w-1/3'>
                    <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our Newsletter</h3>
                    <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles and resources , sent to your inbox weekly.</p>
                       <div className='flex gap-2'>
                        <input type="email" placeholder='Input your mail' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto'/>
                        <button className='py-2 px-4 rounded bg-blue-500 text-white'> Subscribe</button>
                       </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-400">
                    &copy; 2023 Real Estate Company. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;