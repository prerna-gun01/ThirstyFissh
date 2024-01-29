"use client"
import React from 'react'

import Navbar from '../components/Navbar';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const page = () => {
    return (
        <div>
            <Navbar />
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-5 justify-center flex-col">
                    <div class="flex relative">
                        <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x300" />
                        <div class="px-8 py-32 relative z-10 w-full h border-4  bg-white opacity-50">
                            <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                            
                        </div>
                    </div>
                </div>
            </section>
            <div className=" w-full h-max  container px-5 py-5 pt-0 mx-auto font-semibold text-xl">
                <h4 className='text-gray-800 text-2xl'>Project Brief</h4>
            </div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-5 pt-0 mx-auto flex flex-wrap">

                    <div class="md:w-2/3   mb-10 md:mb-0 pb-10 ">
                        <h1 class=" text-xl font-light mr-5 title-font mb-2 text-gray-900">KISAN TYRES is the well-known face of Tyre retailers in Western Maharashtra. Incorporated in 1987, Kisan Tyres offer a range of services for vehicles of all shapes and sizes at the Showroom cum Service Centre in the heart of the city.
                        </h1>
                        <p class="leading-relaxed text-base">Locavore cardigan small batch roof party blue bottle blog meggings sartorial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki neutra, distillery gastropub pok pok ugh.</p>

                    </div>
                    <div class=" flex flex-col md:w-1/3 md:pl-5">
                        <div class="flex flex-wrap list-none -mb-1">
                            <li class="lg:w-1/4 mb-1 w-1/2">
                                <h3 class="text-gray-600 hover:text-gray-800">Client: </h3>
                            </li>
                            <li class="lg:w-3/4 mb-1 w-1/2">
                                <h3 class="text-gray-600 hover:text-gray-800">Kisan Tyres</h3>
                            </li>
                            <li class="lg:w-1/4 mb-1 w-1/2">
                                <h3 class="text-gray-600 hover:text-gray-800">Discipline: </h3>
                            </li>
                            <li class="lg:w-3/4 mb-1 w-1/2">
                                <h3 class="text-gray-600 hover:text-gray-800">Rebrand Consultancy, Website Design, Social Media Strategy</h3>
                            </li>
                            <li class="lg:w-1/4 mb-1 w-1/2">
                                <h3 class="text-gray-600 hover:text-gray-800">Date</h3>
                            </li>
                            <li class="lg:w-3/4 mb-1 w-1/2">
                                <h3 class="text-gray-600 hover:text-gray-800">01 September 2020</h3>
                            </li>
                            <li class="lg:w-1/4 mb-1 w-1/2">
                                <h3 class="text-gray-600 hover:text-gray-800">Share: </h3>
                            </li>
                            <li class="lg:w-3/4 mb-1 w-1/2">
                                <FaFacebookF class="text-gray-600 hover:text-sky-500 inline" />
                                <FaInstagram class="text-gray-600 hover:text-sky-500 inline ml-4" />
                            </li>
                        </div>
                        <div class="flex md:mt-4 mt-6">

                            <div class="text-sky-500 inline-flex items-center border p-3">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-5 mx-auto">
                    {/* <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
                        <div class="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
                            <button class="py-1 px-4 bg-indigo-500 text-white focus:outline-none">Monthly</button>
                            <button class="py-1 px-4 focus:outline-none">Annually</button>
                        </div>
                    </div> */}
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 xl:w-1/2 md:w-1/2 w-full">
                            <div class="h-full  rounded-lg  flex flex-col relative overflow-hidden">
                                <img src="https://dummyimage.com/720x600" alt="" />
                            </div>
                        </div>
                        <div class="p-4 xl:w-1/2 md:w-1/2 w-full">
                            <div class="h-full  rounded-lg  flex flex-col relative overflow-hidden">
                                <img src="https://dummyimage.com/720x600" alt="" />
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <div className=" w-full h-max text-center container px-5 py-5 pt-0 mx-auto font-semibold text-xl">
                <h4 className='text-gray-800 text-2xl'>RESULTS ACHIEVED</h4>
                <p className="text-lg">We are consulting since September 2019 and has taken the brand a step ahead!</p>
            </div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4 text-center">
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">1460</h2>
                            <p class="leading-relaxed">New Followes</p>
                        </div>
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">1</h2>
                            <p class="leading-relaxed">Franchise Sold</p>
                        </div>
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">9</h2>
                            <p class="leading-relaxed">Months of Consultancy</p>
                        </div>
                        <div class="p-4 sm:w-1/4 w-1/2">
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">400</h2>
                            <p class="leading-relaxed">Cups of Coffee</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-5 mx-auto">

                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 xl:w-1/2 md:w-1/2 w-full">
                            <div class="h-full  rounded-lg  flex flex-col relative overflow-hidden">
                                <img src="https://dummyimage.com/720x500" alt="" />
                            </div>
                        </div>
                        <div class="p-4 xl:w-1/2 md:w-1/2 w-full">
                            <div class="h-full  rounded-lg  flex flex-col relative overflow-hidden">
                                <img src="https://dummyimage.com/720x500" alt="" />
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-5 justify-center flex-col">
                    <img class="mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x300" />
                </div>
            </section>
            <footer class="text-gray-600 body-font pt-4 ">
                <div class="bg-gray-100">
                    <div class="container mx-auto py-10 px-5 flex flex-wrap flex-col sm:flex-row">
                        <div>
                            <p className="text-gray-500 text-sm text-center sm:text-left">
                                Thirsty Fishh | Beyond the obvious
                            </p>
                            <p className="text-gray-500 text-sm text-center sm:text-left">
                                © 2020 Thirsty Fishh | All Rightes Reserved
                            </p>
                        </div>



                        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">

                            <div className='mx-2'>
                                <p className="text-gray-500 text-sm text-center sm:text-left">
                                    hello@thirstyfishh.com
                                </p>
                                <p className="text-gray-500 text-sm text-center sm:text-left">
                                    +91 9970503705
                                </p>
                            </div>

                            <div className='mx-2'>
                                <p className="text-gray-500 text-sm text-center sm:text-left">
                                    {/* <FaFacebookF />  */}
                                    Facebook
                                </p>
                                <p className="text-gray-500 text-sm text-center sm:text-left">
                                    {/* <FaInstagram /> */}
                                    Instagram
                                </p>
                            </div>

                        </span>
                    </div>
                </div>
            </footer >
        </div>
    )
}

export default page
