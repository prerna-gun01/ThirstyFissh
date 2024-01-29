"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import ReactMapGL from 'react-map-gl';
const page = () => {
    const MAPBOX_TOKEN = 'YOUR_MAPBOX_TOKEN'; // Replace with your Mapbox token

    const viewport = {
        width: '100%',
        height: '400px',
        latitude: 37.7749, // Example latitude (replace with your address coordinates)
        longitude: -122.4194, // Example longitude
        zoom: 12,
    };
    return (
        <div>
            {/* <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                        <img src="/TF LOGO.png" alt="" className="w-10 h-14 text-white p-2 " />
                        <span className="ml-3 text-xl">TF Strategies</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900" href=''>Home</a>
                        <a className="mr-5 hover:text-gray-900" href='/about'>About</a>
                        <a className="mr-5 hover:text-gray-900" href='/servicee'>Services</a>
                        <a className="mr-5 hover:text-gray-900" href='/price'>Pricing</a>
                        <a className="mr-5 hover:text-gray-900" href='/case'>Case Study</a>
                        <a className="mr-5 hover:text-gray-900" href='/contact'>Contact</a>
                        <FaFacebookF className="mr-5" />
                        <FaInstagram className="mr-5" />
                    </nav>

                </div>
            </header> */}
            <Navbar />
            <section className=' container px-5 py-5 mx-auto '>
                <div className="rounded-lg overflow-hidden flex items-end justify-start relative h-96">
                    {/* <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7643.09220370228!2d74.247181!3d16.699582!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc101b2dc174645%3A0xfe0736990c6fffce!2sTF%20STRATEGIES%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1705992008259!5m2!1sen!2sin" className='w-full h-96' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
            <div className="w-full h-max container px-5 py-24 pb-0 mx-auto font-semibold  text-xl">
                <h4 className='text-sky-500 text-2xl '>Let's Get Started</h4>
            </div>
            <section className="text-gray-600 body-font relative">

                <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap">

                    {/* <div className="lg:w-1/3 md:w-1/4  rounded-lg  sm:mr-10 flex  justify-start relative">
                       

                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                        <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>


                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                        <a className="text-sky-500 leading-relaxed">example@email.com</a>
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                        <p className="leading-relaxed">123-456-7890</p>


                    </div> */}
                    <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col mr-3 md:ml-auto w-full md:py-8 mt-8 md:mt-0">

                        <div class="relative mb-4 ">
                            <h3 class="leading-7 text-sm text-gray-600 hover:text-sky-500">Phone</h3>
                            <p class="w-full bg-white rounded  hover:text-sky-500 text-base outline-none text-gray-700 py-1 ">+91 9970503705</p>
                        </div>
                        <div class="relative mb-4">
                            <h3 class="leading-7 text-sm text-gray-600 hover:text-sky-500">Email</h3>
                            <p class="w-full bg-white rounded hover:text-sky-500  text-base outline-none text-gray-700 py-1 ">hello@ythirstyfishh.com</p>
                        </div>
                        <div class="relative mb-4">
                            <h3 class="leading-7 text-sm text-gray-600 hover:text-sky-500">Address</h3>
                            <p class="w-full bg-white rounded hover:text-sky-500  text-base outline-none text-gray-700 py-1 ">Shikar Building, Dabholkar Corner
                                Kolhapur, Maharashtra, India</p>
                        </div>
                        
                    </div>
                    <div className="lg:w-2/3 md:w-1/2 bg-white flex flex-col w-full md:py-8 mt-8 ml-3 md:mt-0">
                        <section className="">
                            <div className="">
                                <div className=" ">
                                    <div className="flex flex-wrap -m-2">
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                
                                                <input type="text" id="name" name="name" placeholder='Name *' className="w-full border-b focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                
                                                <input type="email" id="email" name="email" placeholder='Email *' className="w-full border-b focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                
                                                <input type="text" id="company" name="company" placeholder='Company/ Organisation *' className="w-full border-b focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        <div className="p-2 w-1/2">
                                            <div className="relative">
                                                
                                            <input type="phone" id="phone" name="phone" placeholder='Phone Number *' className="w-full border-b focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                        <div className="p-2 w-full">
                                            <div className="relative">
                                               
                                                <textarea id="message" name="message" placeholder='Message' className="w-full border-b focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                            </div>
                                        </div>
                                        <div className="p-2 w-full">
                                            <button className="flex mx-auto text-white bg-sky-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit </button>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <div className="relative mb-4">
                            <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p> */}
                    </div>
                </div>
            </section>
            {/* <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                mapStyle="mapbox://styles/mapbox/streets-v11"
            >
              
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <div style={{ color: 'red', fontSize: '24px' }}>📍</div>
                </div>
            </ReactMapGL> */}
            <footer className="text-gray-600 body-font pt-4 ">
                <div className="bg-gray-100">
                    <div className="container mx-auto py-10 px-5 flex flex-wrap flex-col sm:flex-row">
                        <div>
                            <p className="text-gray-500 text-sm text-center sm:text-left">
                                Thirsty Fishh | Beyond the obvious
                            </p>
                            <p className="text-gray-500 text-sm text-center sm:text-left">
                                © 2020 Thirsty Fishh | All Rightes Reserved
                            </p>
                        </div>



                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">

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
