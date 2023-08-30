import React from 'react';
import { FaEnvelope, FaInstagram, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../images/logooo.png';
import '../Footer/index.css';

function Footer() {
    return (
        <footer className="text-black body-font  border border-t-2">
            <div className='bg-cyan-100'>
                <div className='center-content'>
                    <div className="container px-5 py-24 mx-auto flex md:items-start lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                        <div className="w-full md:w-64 flex-shrink-0 md:mx-0 mx-auto text-left">
                            <a className="flex title-font font-medium items-center md:justify-start justify-center text-black">
                                <img src={logo} alt="Logo" className="w-16 h-12 p-2 rounded" />
                                <span className="ml-3 text-xl">3B Sports</span>
                            </a>
                            <div className="content">
                            Discover the world of cricketing excellence with 3B sports, one of the leading sports equipment manufacturers in the world. Specializing in crafting top-quality cricket bats, pads, and gloves, we are dedicated to enhancing your performance on the field.
                        </div>
                        </div>
                        <div className="box center">
                            <h2 className="title-font font-medium tracking-widest text-sm mb-3 text-black">CATEGORIES</h2>
                            <nav className="list-none mb-4 md:mb-10">
                                <li>
                                    <a className="text-black hover:text-yellow-500" href="/">Home</a>
                                </li>
                                <li>
                                    <Link to="/products-all" className="text-black hover:text-yellow-500">
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about-us" className="text-black hover:text-yellow-500">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact-us" className="text-black hover:text-yellow-500">
                                        Contact
                                    </Link>
                                </li>
                            </nav>
                        </div>
                        <div className="w-full md:w-1/3 px-4 ml-auto md:ml-4 md:mr-0">
                            <div className="contact-container pr-4 text-right">
                                <h2 className="title-font font-medium tracking-widest text-sm mb-3 text-black">CONTACT</h2>
                                <nav className="list-none mb-4 md:mb-10">
                                    <li className="flex items-center">
                                        <FaEnvelope className="inline-block align-text-top mr-2" />
                                        <a className="text-black hover:text-yellow-500" href="mailto:3brothersports@gmail.com" target="_blank" rel="noopener noreferrer">3brothersports@gmail.com</a>
                                    </li>
                                    <li className="flex items-center">
                                        <FaPhone className="inline-block align-text-top mr-2" />
                                        <a className="text-black hover:text-yellow-500" href="tel:+923268810307">+923268810307</a>
                                    </li>
                                    <li className="flex items-center">
                                        <FaMapMarkerAlt className="inline-block align-text-top mr-2" />
                                        <span className="text-black hover:text-yellow-500">Sialkot, Pakistan</span>
                                    </li>
                                    <li className="flex items-center">
                                        <FaInstagram className="inline-block align-text-top mr-2" />
                                        <a href="https://www.instagram.com/3_brothers.sports/?igshid=MzNlNGNkZWQ4Mg%3D%3D" target="_blank" rel="noopener noreferrer" className="text-black hover:text-yellow-500">3_brothers.sports</a>
                                    </li>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


    );
}

export default Footer;
