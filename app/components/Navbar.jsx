import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Styles from '../../css/home.module.css'

const Navbar = () => {
  return (
    
      <div className="text-gray-200 body-font bg-gray-800">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-sky-500 mb-4 md:mb-0">

                        <img src="/TF LOGO.png" alt="" className="w-10 h-14 text-white p-2 bg-slate-100 rounded-md" />
                        <span className={`${Styles.head} ml-3 text-2xl`}>TF Strategies</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-sky-500 " href='/'>Home</a>
                        <a className="mr-5 hover:text-sky-500" href='/about'>About</a>
                        <a className="mr-5 hover:text-sky-500" href='/servicee'>Services</a>
                        <a className="mr-5 hover:text-sky-500" href='/price'>Pricing</a>
                        <a className="mr-5 hover:text-sky-500" href='/case'>Case Study</a>
                        <a className="mr-5 hover:text-sky-500" href='/contact'>Contact</a>
                        <FaFacebookF className="mr-5 hover:text-sky-500" />
                        <FaInstagram className="mr-5 hover:text-sky-500" />
                    </nav>

                </div>
            </div>
    
  )
}

export default Navbar
