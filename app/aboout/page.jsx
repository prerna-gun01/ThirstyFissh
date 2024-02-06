"use client"
import React, { useState, useEffect } from 'react';

import { FaAngleRight } from "react-icons/fa";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Card,
    CardContent,

} from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import { motion } from 'framer-motion';
import { gsap } from 'gsap/all';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const page = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Initialize GSAP timeline with ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    tl.to('.zoom-container', {
      scale: 1, // Initial scale when not triggered
      opacity: 1,
      ease: 'power4.out',
    });

    // Trigger the timeline on scroll
    ScrollTrigger.create({
      trigger: '.box',
      start: 'top ',
      end: 'bottom top',
      markers: true,
      smooth: 5, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1,
      onEnter: () => {
        tl.to('.zoom-container', {
          scale: 0.5 + scrollY / 300,
          opacity: 1 - scrollY / 500,
          ease: "steps(48)",

        });

      },
      onLeaveBack: () => {
        tl.to('.zoom-container', {
          scale: 1 - scrollY / 500,
          opacity: 1 + scrollY / 500,
          ease: "steps(48)",
        });
      },
    });
  }, []);
    return (
        <div>

            <Navbar />
            {/* photo */}
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-5 mx-auto flex flex-col">
                    <div class="w-full mx-auto ">
                        <div class="box rounded-lg h-full overflow-hidden">
                            {/* <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x300" /> */}
                            <motion.img
                                className=' zoom-container shadow-md'
                                src='https://dummyimage.com/1200x300'
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    animation: 'fade',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            />
                        </div>

                    </div>
                </div>
            </section>
            {/* about */}
            <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/5 md:w-1/3  object-cover object-center rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative  ">
                        <img className="absolute inset-0 w-full h-full" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://s3-alpha-sig.figma.com/img/6c07/5bdb/b8d7eead997e62252c6eef5357ed66d3?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NiRL1H-uF3BVKbN3fwmcMl0EBRjs55sR0zyvpnxLRpLX3FvjPPlco4V7h70KigG5mjgoO~texenNZCd156CRkUhFJ2wE3CcTMYotwRP3oQzxqYkEznkO~nHJ0A3XNCOXkDsrQ56Ozv0jaMfmmtSAv89ji92J~dXGdE93GCVoNKtqXmeQqmEgqfc2RDdgPnwq4HDczjK4wvDEaxfW3Nw9HSdRKn6lNEj8ra4sqz8iNrqxqddWnYc2gTFzwx6SInI8lbq0a7U6utnPvW4Rd06oDPgYNW18wnTW3r9dNujtNUrf~qlIExRPtw2nkVaQBmCF1EY8~F34h~uqewZQ7nMiWA__" style={{
                            filter: 'grayscale(0) contrast(1.2) opacity(0.8)',
                        }} />

                    </div>
                    <div class="lg:w-3/5 md:w-2/3 md:pr-10 md:py-6">
                        <div className="flex relative pb-5">
                            <div class="flex-grow pl-4">
                                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">CRAFTING EXPERIENCES SINCE 2011.</h1>
                                <p class="leading-relaxed">We are a specialist agency that understands brand strategy and applies it perceptively to the brands marketing and development process. At a time when brnads struggle for mindshare survival,we seek to rationally and emotionally communicate with audiences that would love to be associated with your brand,your identity.
                                </p>
                                <p class="leading-relaxed mt-2">Since 2011,we have serviced over 150 clients in the manufacturing, trading, construction, entertainment, food and service space. At Thirsty Fishh, we are constantly desirous of expanding our potential. When we partner with our clients we aspire to unlock and expand their brand value as well.
                                </p>
                            </div>
                        </div>

                        <div class="flex flex-wrap  sm:mx-auto sm:mb-2 -mx-2">
                            <div class="p-2 sm:w-1/3 w-full">
                                <div class="bg-gray-100 rounded flex p-2 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-sky-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span class="title-font font-medium">Brand Development</span>
                                </div>
                            </div>
                            <div class="p-2 sm:w-1/3 w-full">
                                <div class="bg-gray-100 rounded flex p-2 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-sky-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span class="title-font font-medium">Social Media Marketing</span>
                                </div>
                            </div>
                            <div class="p-2 sm:w-1/3 w-full">
                                <div class="bg-gray-100 rounded flex p-2 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-sky-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span class="title-font font-medium">Lead Generation</span>
                                </div>
                            </div>
                            <div class="p-2 sm:w-1/3 w-full">
                                <div class="bg-gray-100 rounded flex p-2 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-sky-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span class="title-font font-medium">Websites</span>
                                </div>
                            </div>
                            <div class="p-2 sm:w-1/3 w-full">
                                <div class="bg-gray-100 rounded flex p-2 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-sky-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span class="title-font font-medium">Search Engine Optimization</span>
                                </div>
                            </div>
                            <div class="p-2 sm:w-1/3 w-full">
                                <div class="bg-gray-100 rounded flex p-2 h-full items-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-sky-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span class="title-font font-medium">Graphic Design</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 mb-0 text-lg text-sky-500 group">

                            <p className='inline '>Check Our Services</p>
                            <FaAngleRight className='inline text-2xl group-hover:translate-x-10 transition-transform duration-1000 group' />
                        </div>
                    </div>
                </div>
            </section>
            {/* history */}
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-5 mx-auto">
                    <div className="text-2xl font-semibold  py-4">
                        CRAFTING DIGITAL EXPERIENCES SINCE 2005
                    </div>
                    <div class="divide-y-2 divide-gray-100 ">

                        <div class="py-4 flex flex-wrap md:flex-nowrap">
                            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span class="font-semibold title-font text-gray-700">HISTORY</span>
                            </div>
                            <div class="md:flex-grow">
                                <p class="leading-relaxed">At Thirsty Fishh, we go beyond the obvious,we build brands. Inspired by Rumi's poem A Thirsty Fish, we are an enthusiastic and abitious team of brand building professionals who have been breaking barriers and putting brand stories in the soptlight.</p>

                            </div>
                        </div>
                        <div class="py-4 flex flex-wrap md:flex-nowrap">
                            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span class="font-semibold title-font text-gray-700">PURPOSE</span>
                            </div>
                            <div class="md:flex-grow">
                                <p class="leading-relaxed">Our aim is to synergise with the best of talent to bring a global approach to local market. We believe in 'Your Success is Our Sucess' philosophy and go that extra mile to bring the best of ideas, systems and results to our client, vendors, team members and everyone associated with Thirsty Fishh.</p>

                            </div>
                        </div>
                        <div class="py-4 flex flex-wrap md:flex-nowrap">
                            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                <span class="font-semibold title-font text-gray-700">VISION</span>
                            </div>
                            <div class="md:flex-grow">
                                <p class="leading-relaxed">Since inception, and even before that, we wanted to build an organisation that plays a pivotal role in your brand communication. With truly out-of-the-box ideas and a dedicated team, we want to help our clients move few steps higher with every interaction.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* section */}
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-5 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 lg:w-1/3">
                            <div class="h-full bg-gray-100 bg-opacity-75 px-8 py-8 rounded-lg overflow-hidden relative">
                                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-8">01. UNDERSTAND</h1>
                                <p class="leading-relaxed">
                                    We begin with a deep dive into your business. We aim to put ourselves into your shoes to understand your strengths, weaknesses, and opportunities to grow. We succeed because we aim to understand you and your business better than anyone else.
                                </p>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/3">
                            <div class="h-full bg-gray-100 bg-opacity-75 px-8 py-8 rounded-lg overflow-hidden relative">

                                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-8">02. DEVELOP</h1>
                                <p class="leading-relaxed">
                                    Thirsty Fishh creates custom solutions for your business. No two businesses are the same, which is why we take such an in-depth approach to discovery in order to create a custom solution combining various solutions.
                                </p>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/3">
                            <div class="h-full bg-gray-100 bg-opacity-75 px-8 py-8 rounded-lg overflow-hidden relative">

                                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-8">03. EXECUTE</h1>
                                <p class="leading-relaxed">
                                    Once we have designed the perfect solution for your business we then implement the strategy. We position every one of your platforms for success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* our Clients */}
            <div className="">
                <h1 class="container px-5 pt-5 text-2xl font-medium title-font mb-4 text-gray-900">OUR CLIENTS</h1>
                <Carousel className="w-full container px-5  mx-auto" plugins={[Autoplay({ delay: 2000, }),]}>
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                            <Card className="">

                                <CardContent className="space-y-2 h-32 p-0">
                                    <section class="text-gray-600 body-font ">
                                        <div class="container px-5 py-5 mx-auto">
                                            <img src="/karade.png" alt="" className='w-32 h-20 mx-auto' />

                                        </div>
                                    </section>
                                </CardContent>

                            </Card>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                            <Card className="">

                                <CardContent className="space-y-2 h-32 p-0">
                                    <section class="text-gray-600 body-font ">
                                        <div class="container px-5 py-5 mx-auto">
                                            <img src="/optec.png" alt="" className='w-32 h-20 mx-auto' />

                                        </div>
                                    </section>
                                </CardContent>

                            </Card>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                            <Card className="">

                                <CardContent className="space-y-2 h-32 p-0">
                                    <section class="text-gray-600 body-font ">
                                        <div class="container px-5 py-5 mx-auto">
                                            <img src="/dressland.png" alt="" className='w-32 h-20 mx-auto' />

                                        </div>
                                    </section>
                                </CardContent>

                            </Card>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                            <Card className="">

                                <CardContent className="space-y-2 h-32 p-0">
                                    <section class="text-gray-600 body-font ">
                                        <div class="container px-5 py-5 mx-auto">
                                            <img src="/Ananta.png" alt="" className='w-32 h-20 mx-auto' />

                                        </div>
                                    </section>
                                </CardContent>

                            </Card>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                            <Card className="">

                                <CardContent className="space-y-2 h-32 p-0">
                                    <section class="text-gray-600 body-font ">
                                        <div class="container px-5 py-5 mx-auto">
                                            <img src="/logo.svg" alt="" className='w-32 h-20 mx-auto' />

                                        </div>
                                    </section>
                                </CardContent>

                            </Card>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                            <Card className="">

                                <CardContent className="space-y-2 h-32 p-0">
                                    <section class="text-gray-600 body-font ">
                                        <div class="container px-5 py-5 mx-auto">
                                            <img src="/logo.svg" alt="" className='w-32 h-20 mx-auto' />

                                        </div>
                                    </section>
                                </CardContent>

                            </Card>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                            <Card className="">

                                <CardContent className="space-y-2 h-32 p-0">
                                    <section class="text-gray-600 body-font ">
                                        <div class="container px-5 py-5 mx-auto">
                                            <img src="/logo.svg" alt="" className='w-32 h-20 mx-auto' />

                                        </div>
                                    </section>
                                </CardContent>

                            </Card>
                        </CarouselItem>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                            <Card className="">

                                <CardContent className="space-y-2 h-32 p-0">
                                    <section class="text-gray-600 body-font ">
                                        <div class="container px-5 py-5 mx-auto">
                                            <img src="/logo.svg" alt="" className='w-32 h-20 mx-auto' />

                                        </div>
                                    </section>
                                </CardContent>

                            </Card>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="" />
                    <CarouselNext />
                </Carousel>
            </div>
            {/* Testonimal */}
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div class="h-full text-center">
                                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302" />
                                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">MAHESH BAAD</h2>
                                <p class="text-gray-500">Director - Kisan Tyres</p>
                                <span class="inline-block h-1 w-10 rounded bg-sky-500 mt-6 mb-4"></span>

                                <p class="leading-relaxed">"The team at Thirsty Fishh has helped our business rebrand and move into the digital marketing and sales arena. Always friendly, always responsive, and a true partner to our business. We are fully committed to them being the key to taking our sales to the next level of course with their expertise of innovative branding strategies and unique creativity. We are so excited what Thirsty Fishh as the Best Business and Brand Consultancy can do wonders in social arena and help us pump our sales globally.""
                                </p>
                            </div>
                        </div>

                        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div class="h-full text-center">
                                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302" />
                                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">RISHIKESH LOKAPURE</h2>
                                <p class="text-gray-500">Freelancer</p>
                                <span class="inline-block h-1 w-10 rounded bg-sky-500 mt-6 mb-4"></span>

                                <p class="leading-relaxed">"Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes."
                                </p>
                            </div>
                        </div>

                        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div class="h-full text-center">
                                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302" />
                                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">NIKHIL KULKARNI</h2>
                                <p class="text-gray-500">Director - PMK Energy Pvt. Ltd.</p>
                                <span class="inline-block h-1 w-10 rounded bg-sky-500 mt-6 mb-4"></span>

                                <p class="leading-relaxed">"Thirsty Fishh fulfills your thirst for Branding by way of Social Media Marketing..The Designs Created will Certainly Make Impact of Your Brand..Thirsty Fishs team is Innovative and Creative..We are receiving lot of enquires through Social Media after continuous efforts by Thirsty Fishhs Team...All the Best Thirsty Fish Team."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default page