"use client"
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { BsGear } from 'react-icons/bs';
import { MdOutlineDeveloperMode } from "react-icons/md";

import { PiSlackLogoThin } from "react-icons/pi";
const page = () => {

    return (
        <div className='font-Cormorant'>
            <Navbar />
            {/* what we do */}
            <section class="text-black body-font ">
                <div class="container px-10 py-5 mx-auto">
                    <div className="mb-16 text-center text-gray-900 ">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font  mb-4">What We Do
                        </h1>
                        <p class="text-base leading-relaxed  mx-auto text-gray-500s mb-2">We are a team of brand and marketing specialists who are passionate about helping your business grow. Use our strategies to achieve your business goals. We provide results-focused and affordable solutions that boost leads, sales and profits for all types of businesses. We are dedicated in delivering top quality, hassle-free service that will exceed your expectations. We are small and nimble and can think out-of-the-box….and that makes a real difference.

                        </p>
                        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s mb-2">We understand that your time is limited doing other things, so let us grow your business!!

                        </p>
                    </div>
                    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-2 -mt-4 md:space-y-0 space-y-6">

                        <div class="p-4 md:w-1/3 flex">
                            <div class="w-14 h-14 inline-flex items-center justify-center rounded-full  mb-4 flex-shrink-0 ">

                                <img src="/strategy_3897002.png" alt="" className='hover:scale-125' />
                            </div>
                            <div class="flex-grow pl-6">
                                <h2 class="hover:text-sky-500 text-lg title-font font-medium mb-2">Brand Development</h2>
                                <p class=" text-sm leading-5">Our consultants will give you the right advice and expertise to help you increase sales and get the most out of your investment.</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3 flex">
                            <div class="w-14 h-14 inline-flex items-center justify-center rounded-full  mb-4 flex-shrink-0">
                                <img src="/programmer_3344293.png" alt="" className='hover:scale-125'/>
                            </div>
                            <div class="flex-grow pl-6">
                                <h2 class="hover:text-sky-500 text-lg title-font font-medium mb-2">Websites/ Mobile Application</h2>
                                <p class="text-sm leading-5">Custom designed, mobile responsive, results-focused websites / Application that work harder to generate business returns – delivering targeted leads and sales right to your virtual doorstep.</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3 flex">
                            <div class="w-14 h-14 inline-flex items-center justify-center rounded-full  mb-4 flex-shrink-0">
                                <img src="/social-media_1968750.png" alt="" className='hover:scale-125'/>
                            </div>
                            <div class="flex-grow pl-6">
                                <h2 class="hover:text-sky-500 text-lg title-font font-medium mb-2">Social Media Marketing</h2>
                                <p class="text-sm leading-5">Social media marketing is the best way for your business to reach customers and create a consistent and memorable experience for your customers. Let us evaluate your social media presence.</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3 flex">
                            <div class="w-14 h-14 inline-flex items-center justify-center rounded-full  mb-4 flex-shrink-0">
                                <img src="/seo_11353927.png" alt="" className='hover:scale-125'/>
                            </div>
                            <div class="flex-grow pl-6">
                                <h2 class="hover:text-sky-500 text-lg title-font font-medium mb-2">Search Engine Optimisation</h2>
                                <p class="text-sm leading-5">The online landscape is fast becoming more competitive every day. Businesses of all sizes are starting to seek out advertising and marketing opportunities which produce the best ROI for their marketing budgets.</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3 flex">
                            <div class="w-14 h-14 inline-flex items-center justify-center rounded-full  mb-4 flex-shrink-0">
                                <img src="/magnet_11524775.png" alt="" className='hover:scale-125'/>
                            </div>
                            <div class="flex-grow pl-6">
                                <h2 class="hover:text-sky-500 text-lg title-font font-medium mb-2">Lead Generation</h2>
                                <p class="text-sm leading-5">If you’re tired of chasing new prospects and frustrated with inconsistent sales results, then our lead generation services are just for you.</p>
                            </div>
                        </div>
                        <div class="p-4 md:w-1/3 flex">
                            <div class="w-14 h-14 inline-flex items-center justify-center rounded-full  mb-4 flex-shrink-0">
                                <img src="/web-design_12700248.png" alt="" className='hover:scale-125'/>
                            </div>
                            <div class="flex-grow pl-6">
                                <h2 class="hover:text-sky-500 text-lg title-font font-medium mb-2">Graphic Design</h2>
                                <p class="text-sm leading-5">Create powerful branding that will get people talking about your brand and give you a competitive edge.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       
            {/* our work process */}
            <section class="text-black body-font">
                <div class="container mx-auto flex px-10  py-5 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-xl text-2xl mb-6 font-semibold text-gray-900">Our Work Process

                        </h1>


                        <div class="flex items-center  mx-auto my-0   border-b  mb-6 pb-2   sm:flex-row flex-col">
                            <div class="h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full  flex-shrink-0">

                            <PiSlackLogoThin className='hover:scale-125 hover:rotate-180 transition-all duration-1000 h-12 w-12 text-sky-500'/>
                            </div>
                            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-2 hover:text-sky-500">UNDERSTAND</h2>
                                <p class="leading-relaxed text-base">We begin with a deep dive into your business. We aim to put ourselves into your shoes to understand your strengths, weaknesses, and opportunities to grow. We succeed because we aim to understand you and your business better than anyone else.</p>

                            </div>
                        </div>
                        <div class="flex items-center  mx-auto my-0 border-b  mb-6 pb-2 sm:flex-row flex-col">
                            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-2 hover:text-sky-500">DEVELOP</h2>
                                <p class="leading-relaxed text-base">Thirsty Fishh creates custom solutions for your business. No two businesses are the same, which is why we take such an in-depth approach to discovery in order to create a custom solution combining various solutions.</p>

                            </div>
                            <div class=" sm:order-none order-first  h-20 w-14 sm:ml-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
                            <MdOutlineDeveloperMode className='hover:scale-125 h-12 w-12 text-sky-500'/>
                            </div>
                        </div>
                        <div class="flex items-center  mx-auto my-0 sm:flex-row flex-col">
                            <div class=" h-12 w-12 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
                            <BsGear className='text-sky-500 hover:rotate-180 transition-all duration-1000 h-12 w-12'/>
                            </div>
                            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-2 hover:text-sky-500">EXECUTE</h2>
                                <p class="leading-relaxed text-base">Once we have designed the perfect solution for your business we then implement the strategy. We position every one of your platforms for success.</p>

                            </div>
                        </div>

                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">

                        <img class="object-cover object-center rounded" alt="hero" src="https://s3-alpha-sig.figma.com/img/5f31/9943/bf06f0a7f2928d3317793331b26b6cc1?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n1er9X84vMHoyM3DVCH0IZv9sSOBbsd6JB4xbrx~CtPQhTDUgzCpzyKn5pfAjP3ho5uWMg6jQmAb-Xa8LhTidL1HDnsxIsQuQu3CQ1T-eJqSZzLRc8eBAnKwAXizPkXJb9eETM4J5CSVBApFfKWEbYXSFeTzkMYoHtBWS0rw80wI51B-Pg4QlxMdg8jLBN7sGQWtCMWcv1BqLEwLOQzRHsZ4h-eUADxswlCBevC0j0C~Qr1HhMgtOzXK6FnrbmMpock4SAyVaViTI4rkak16CIPp2oOMvOQLEeJhSTXGX7-JEvqL0xIqklmVueaOtDTEUyt7KmRcyMZ4yUx~l0UgdQ__" />
                    </div>
                </div>
            </section>
            {/* Pricing */}
            <section class="text-black body-font overflow-hidden">
                <div class="container px-10 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Choose your Plan</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Monthly Basis</p>

                    </div>
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 xl:w-1/3 md:w-1/3 w-full">
                            <div class="h-full p-6 rounded-lg border-2 border-gray-300 bg-gray-50 flex flex-col relative overflow-hidden hover:bg-gray-200 ">
                                <h2 class="text-xl text-gray-900 tracking-widest title-font pb-4 mb-4 font-semibold border-b border-gray-300">Basic</h2>
                                <h2 class="text-2xl tracking-widest text-gray-900 pb-4 mb-4 title-font font-semibold border-b border-gray-300">Rs. 12000/- onwards</h2>
                                <h1 class="text-sm text-gray-700  mb-4 leading-none">ex GST</h1>
                                <p class="text-sm text-gray-700 pb-4 mb-4 border-b border-gray-300">Start connecting with consumers using the largest and most engaging social channels</p>
                                <p class="flex items-center text-black mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-sky-500 rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Dedicated Consultant
                                </p>
                                <p class="flex items-center text-black mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-sky-500 rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>10 Posts Per Month
                                </p>
                                <p class="flex items-center text-black mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-sky-500 rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Implement Relevant #hashtags
                                </p>
                                <p class="flex items-center text-black mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-sky-500 rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Schedule your Entire Campaign
                                </p>
                                <p class="flex items-center text-black mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-sky-500 rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Develop the Plan & Calendar Each Month
                                </p>
                                <p class="flex items-center text-black mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-sky-500 rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Schedule your Campaign
                                </p>
                                <p class="flex items-center text-black mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-sky-500 rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Upto 1 Boosted Post Per Month
                                </p>
                                <p class="flex items-center text-black mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-sky-500 rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Monthly Report
                                </p>
                                <p class="flex items-center text-black mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-sky-500 rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>
                                </p>
                                <p class="flex items-center text-black mb-6">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-sky-500 rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>
                                </p>
                                <p class="flex items-center text-black mb-4">
                                    Minimum of 6 Month Contract Required
                                </p>

                                <button class="flex items-center mt-auto text-white bg-gray-800  border-0 py-2 px-4 w-full focus:outline-none h rounded">Choose Plan
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>

                            </div>
                        </div>
                        <div class="p-4 xl:w-1/3 md:w-1/3 w-full">
                            <div class="h-full p-6 rounded-lg border-2 border-sky-600 bg-sky-500 flex flex-col relative overflow-hidden hover:bg-sky-600">
                            <h2 class="text-xl text-white tracking-widest title-font pb-4 mb-4 font-semibold border-b border-gray-300">Best Value</h2>
                                <h2 class="text-2xl tracking-widest text-white pb-4 mb-4 title-font font-semibold border-b border-gray-300">Rs. 22000/- onwards</h2>
                                <h1 class="text-sm text-gray-100  mb-4 leading-none">ex GST</h1>
                                <p class="text-sm text-gray-100 pb-4 mb-4 border-b border-gray-300">For smaller businesses that want to start growing their community using two of the most popular social channels.</p>
                                <p class="flex items-center text-white mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Dedicated Consultant
                                </p>
                                <p class="flex items-center text-white mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>20 Posts Per Month
                                </p>
                                <p class="flex items-center text-white mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Implement Relevant #hashtags
                                </p>
                                <p class="flex items-center text-white mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Schedule your Entire Campaign
                                </p>
                                <p class="flex items-center text-white mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Develop the Plan & Calendar Each Month
                                </p>
                                <p class="flex items-center text-white mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Schedule your Campaign
                                </p>
                                <p class="flex items-center text-white mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Upto 8 Boosted Post Per Month
                                </p>
                                <p class="flex items-center text-white mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>20 Keywords Optimisation
                                </p>
                                <p class="flex items-center text-white mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Monthly Report
                                </p>
                                <p class="flex items-center text-white mb-6">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-white rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>
                                </p>
                                <p class="flex items-center text-white mb-4">
                                    Minimum of 6 Month Contract Required
                                </p>

                                <button class="flex items-center mt-auto text-white bg-gray-800  border-0 py-2 px-4 w-full focus:outline-none h rounded">Choose Plan
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="p-4 xl:w-1/3 md:w-1/3 w-full">
                            <div class="h-full p-6 rounded-lg border-2 border-gray-300 bg-gray-50 flex flex-col relative overflow-hidden hover:bg-gray-200">
                                <h2 class="text-xl text-gray-900 tracking-widest title-font pb-4 mb-4 font-semibold border-b border-gray-300">Enterprise</h2>
                                <h2 class="text-2xl tracking-widest text-gray-900 pb-4 mb-4 title-font font-semibold border-b border-gray-300">Rs. 35000/- onwards</h2>
                                <h1 class="text-sm text-gray-700  mb-4 leading-none">ex GST</h1>
                                <p class="text-sm text-gray-700 pb-4 mb-4 border-b border-gray-300">Build powerful engagement strategies that target popular & emerging platforms to give you the biggest social buzz.</p>
                                <p class="flex items-center text-black mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-sky-500 rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Dedicated Consultant
                                </p>
                                <p class="flex items-center text-black mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-sky-500 rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Unlimited Posts Per Month
                                </p>
                                <p class="flex items-center text-black mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-sky-500 rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Implement Relevant #hashtags
                                </p>
                                <p class="flex items-center text-black mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-sky-500 rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Schedule your Entire Campaign
                                </p>
                                <p class="flex items-center text-black mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-sky-500 rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Develop the Plan & Calendar Each Month
                                </p>
                                <p class="flex items-center text-black mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-sky-500 rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Schedule your Campaign
                                </p>
                                <p class="flex items-center text-black mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-sky-500 rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Upto 12 Boosted Post Per Month
                                </p>
                                <p class="flex items-center text-black mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-sky-500 rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>40 Keyword Optimisation
                                </p>
                                <p class="flex items-center text-black mb-2">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-sky-500 rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>Monthly Report
                                </p>
                                <p class="flex items-center text-black mb-6">
                                    <span class="w-4 h-4 mr-2 inline-flex items-center justify-center  text-sky-500 rounded-full flex-shrink-0">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                    </span>
                                </p>
                                <p class="flex items-center text-black mb-4">
                                    Minimum of 6 Month Contract Required
                                </p>

                                <button class="flex items-center mt-auto text-white bg-gray-800  border-0 py-2 px-4 w-full focus:outline-none h rounded">Choose Plan
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="text-black body-font pt-4 ">
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