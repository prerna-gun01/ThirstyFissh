"use client"
import React, { useRef, useEffect } from 'react';
import { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
// import { initialTabs as tabs } from "./ingredient";
import { wrap } from "popmotion";
import Navbar from '../components/Navbar'
import Styles from '../../css/home.style.css'
import { LuPencilRuler } from "react-icons/lu";
import { FaGears } from "react-icons/fa6";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Autoplay from "embla-carousel-autoplay"
import { gsap } from "gsap";
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel"
// import { Card, CardContent } from "@/components/ui/card"


const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};
export const images = [
    "/logo.svg",
    "/logo.svg",
    "/logo.svg"
];

const Tab = ({ isSelected, onClick, children }) => (
    <motion.div
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        style={{
            padding: '10px',
            borderBottom: isSelected ? '2px solid blue' : '2px solid transparent',
            cursor: 'pointer',
        }}
    >
        {children}
    </motion.div>
);

const TabContent = ({ isSelected, children }) => (
    <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: isSelected ? 1 : 0, x: isSelected ? 0 : -10 }}
        transition={{ duration: 0.3 }}
        style={{ marginTop: '10px' }}
    >
        {isSelected && children}
    </motion.div>
);


const page = () => {

    const containerRef = useRef(null);
    const controls = useAnimation(); // Initialize controls for animations
    const caroselImages = ['/logo.svg', '/karade.png', '/optec.png', '/dressland.png', '/Ananta.png', '/logo.svg', '/logo.svg', '/logo.svg', '/logo.svg'];

    useEffect(() => {
        const containerWidth = containerRef.current.offsetWidth;

        const animateImages = async () => {
            controls.start({
                x: `-${containerWidth}px`,
                transition: { duration: 20, ease: 'linear', repeat: Infinity },
            });
        };

        animateImages();
    }, [controls]);

    const [selectedTab, setSelectedTab] = useState(1);
    gsap.registerPlugin(TextPlugin, ScrollTrigger);
   
    useEffect(() => {

        let tl = gsap.timeline({
            scrollTrigger: {
                smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
                effects: true, // looks for data-speed and data-lag attributes on elements
                smoothTouch: 0.1,
                trigger: ".scroll",
                start: "top 40%",
                end: "bottom top",
                // markers: true,
                opacity: 0,
                toggleActions: "restart none none none"
            },
        });

        tl.fromTo(".anime", { x: -400, opacity: 0 }, { x: 0, duration: 1, ease: "power2.out", opacity: 1 });
        tl.fromTo(".business", { x: -400, opacity: 0 }, { x: 0, duration: 1, ease: "sine.out", opacity: 1 });
        // tl.fromTo(".para", { x: -400, opacity: 0 }, { x: 0, duration: 2, ease: "elastic.out(1,0.3)", opacity: 1 });
        tl.fromTo(".text", { y: 100, opacity: 0 }, { y: 0, duration: 2, ease: "sine.out", opacity: 1 });


        let para = gsap.timeline({
            scrollTrigger: {
                smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
                effects: true, // looks for data-speed and data-lag attributes on elements
                smoothTouch: 0.1,
                trigger: ".roast",
                start: "top 30%",
                end: "bottom top",
                // markers: true,
                opacity: 0,
                toggleActions: "restart none none none"
            },
        });
        para.fromTo(".headed", { y: 100, opacity: 0 }, { y: 0, duration: 2, ease: "circ.out", opacity: 1 });
        para.fromTo(".point1", { x: -400, opacity: 0 }, { x: 0, duration: 1, ease: "power2.out", opacity: 1 });
        para.fromTo(".point2", { x: -400, opacity: 0 }, { x: 0, duration: 1, ease: "sine.out", opacity: 1 });

        let boost = gsap.timeline({
            scrollTrigger: {
                smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
                effects: true, // looks for data-speed and data-lag attributes on elements
                smoothTouch: 0.1,
                trigger: ".dost",
                start: "top 90%",
                end: "bottom top",
                toggleActions: "restart none none none",
                opacity: 0,
            },
        });
        let booost = gsap.timeline({
            scrollTrigger: {
                smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
                effects: true, // looks for data-speed and data-lag attributes on elements
                smoothTouch: 0.1,
                trigger: ".dost",
                start: "top 90%",
                end: "bottom top",
                toggleActions: "restart none none none",
                opacity: 0,
            },
        });
        boost.fromTo(".who1", { x: -400, opacity: 0 }, { x: 0, duration: 2, ease: "power1.out", opacity: 0.8 });
        boost.fromTo(".who2", { x: -200, opacity: 0 }, { x: 0, duration: 2, ease: "power3.out", opacity: 0.8 });
        booost.to(".boox", {
            duration: 2,
            text: {
                value: "WHO WE ARE",

                newClass: "title-font sm:text-4xl text-3xl mb-4 font-medium ",
                delimiter: "",
            },
        });
        booost.to(".booox", {
            duration: 5,
            text: {
                value: "We are THIRSTY FISHH- A full service advertising agency focused on story telling and experiences for result oriented strategic marketing campaigns. We are known for engaging both traditional & digital natives & converting clicks leads.",

                newClass: "",
                delimiter: " ",
            },
        });

    }, [])

    // const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const [[page, direction], setPage] = useState([0, 0]);

    // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
    // then wrap that within 0-2 to find our image ID in the array below. By passing an
    // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
    // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };


    return (
        <div>
            <Navbar />
            {/* carousel */}
            <div className={`${Styles.exampleContainer} container mx-auto px-10 py-5`}>
                <AnimatePresence initial={false} custom={direction} >
                    <motion.img
                        className={`${Styles.img}`}
                        key={page}
                        src={images[imageIndex]}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        // exit="exit"
                        transition={{
                            x: { type: 'spring', restSpeed: 0.3, stiffness: 100, damping: 80 },
                            opacity: { duration: 0.5 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                    />
                </AnimatePresence>

                <div className={`${Styles.next} next`} onClick={() => paginate(1)}>
                    {"‣"}
                </div>
                <div className={`${Styles.prev} prev`} onClick={() => paginate(-1)}>
                    {"‣"}
                </div>
            </div>
            {/* Who we are */}
            <section>
            <div className="container mx-auto px-10 py-10 my-11 ">

                <div className="grid grid-cols-2 grid-rows-1 gap-12 relative">
                    <div className='who1'><img src="https://dummyimage.com/420x400" alt="" /></div>

                    <div className='dost my-auto mx-auto px-5'>
                        <h1 className="boox text-sky-500"></h1>
                        <p className="booox "></p>
                    </div>
                </div>
                <div className="who2 absolute -bottom-80 right-2/4 h-96 w-80 border">
                    <img src="https://dummyimage.com/320x390" alt="" />
                </div>

            </div>
            </section>
            {/* Services */}
            <section className="text-gray-600 body-font relative pt-20 mt-20 ">
                <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap  ">

                    <div className="roast lg:w-3/5 md:w-2/3 md:pr-10 md:py-6">
                        <div className="flex relative pb-12">
                            <div className="flex-grow pl-4">
                                <h1 className={` title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900`}>Our Services</h1>
                                <p className="headed leading-relaxed">Use our business strategies to achieve your business goals. We understand that your time is limited doing other things, so let us grow your business online for you.</p>
                            </div>
                        </div>
                        <div className="point1 flex relative pb-12">

                            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>

                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-500 inline-flex items-center justify-center text-white relative z-10 hover:scale-150">

                                <LuPencilRuler className='hover:scale-150' />
                            </div>

                            <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider hover:text-xl">Business Strategy</h2>
                                <p className="leading-relaxed">Let us facilitate a busniess strategy workshop for your business and together we’ll develop a action plan.</p>
                            </div>
                        </div>
                        <div className="point2 flex relative pb-12">


                            <div className="hover:scale-150 flex-shrink-0 w-10 h-10 rounded-full bg-sky-500 inline-flex items-center justify-center text-white relative z-10">

                                <FaGears className='hover:scale-150' />
                            </div>

                            <div className="flex-grow pl-4">
                                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider hover:text-xl">Web & Marketing</h2>
                                <p className="leading-relaxed">We offer a strategic approach to your brand, website, social media, Google search, PR and even lead generation. We’ll even coordinate multiple programs at the same time and develop a new marketing strategy that goes above, through or below the line, whilst delivering a constant stream of leads for your business.</p>
                            </div>
                        </div>
                    </div>
                    <div className="scroll lg:w-2/5 md:w-1/3  object-cover object-center rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative  ">
                        <img className="anime absolute inset-0 w-full h-full" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://s3-alpha-sig.figma.com/img/72bc/162b/5d623d5546eb9aceb1bb018bd762e09a?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lhGgQGArwlUbXvn-f9rLTZEdCHSG7~pzVnAnNbRNNtSJrqviTmMDp03ngWSrlHqFnXMtg0FpO1NlyOHoOTwkE97lJwdH30uKA0OXNv9KqQ~J1JV8vMyMdpOsDWu6gy9WeMnJrwBsO~Mkdq1VKo1a80Tzn8TrbZUz0LRyM1-Aj9w15ShNgJ0DGLxisXiDlKzOLdIs6tNi4voRdjmHIm8AHeYZTm9USe3ysVDv8i~90qMfrkU1ioV3iKnuzIMvy~H6XHMxSVGZGUkrK0KT-CvencloomYFg757mHqKjjtAT-jSqGbhFoC~jxiPm2kAwjNfryS4zG1H-pfmOpW7VQioSw__" style={{
                            filter: 'grayscale(0) contrast(1.2) opacity(0.8)',
                        }} />
                        <div className={`${Styles.business} business bg-white text-gray-900 relative flex flex-wrap py-6 rounded shadow-lg `}>
                            <div className=" px-6">
                                <h2 className={`title-font font-semibold text-lg `}>We Want Your Business To Succeed</h2>
                                <p className="mt-1">At Thirsty Fishh, our main goal is to build a brand presence that drives business growth through various channels. And our small business brand strategists will be with you throughout your business journey.</p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            {/* tabs */}
            <div className="container mx-auto px-10 ">
                <div className='w-fit container px-5 my-5 py-5 mx-auto'>
                    <div className='mx-auto px-5 py-5 border text-center rounded-xl'>
                        <span isSelected={selectedTab === 1} onClick={() => setSelectedTab(1)} className='px-5 py-2 inline hover:bg-sky-500 rounded-xl'>
                            All
                        </span>
                        <span isSelected={selectedTab === 2} onClick={() => setSelectedTab(2)} className='px-5 py-2 inline hover:bg-sky-500 rounded-xl '>
                            Brand Development
                        </span>
                        <span isSelected={selectedTab === 3} onClick={() => setSelectedTab(3)} className='px-5 py-2 inline hover:bg-sky-500 rounded-xl'>
                            Logos & Branding
                        </span>
                        <span isSelected={selectedTab === 4} onClick={() => setSelectedTab(4)} className='px-5 py-2 inline hover:bg-sky-500 rounded-xl'>
                            Websites
                        </span>
                        <span isSelected={selectedTab === 5} onClick={() => setSelectedTab(5)} className='px-5 py-2 inline hover:bg-sky-500 rounded-xl'>
                            Marketing
                        </span>
                        <span isSelected={selectedTab === 6} onClick={() => setSelectedTab(6)} className='px-5 py-2 inline hover:bg-sky-500 rounded-xl'>
                            Print Media
                        </span>
                    </div>
                    <TabContent isSelected={selectedTab === 1}>

                        <section class="text-gray-600 body-font ">
                            <div class="container px-5 py-7  mx-auto">


                                <div className="grid grid-cols-3 grid-rows-4 gap-4">
                                    <div className="row-span-2">
                                        <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />
                                        {/* <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-transparent opacity-0 hover:opacity-100">

                                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Sure Technology</h1>
                                                    <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                                </div> */}
                                    </div>
                                    <div >
                                        <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />

                                    </div>
                                    <div >
                                        <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />

                                    </div>
                                    <div className="row-span-2 col-start-2">
                                        <img src="https://dummyimage.com/400x600" alt="" className='h-full border object-cover w-full' />

                                    </div>
                                    <div className="col-start-1 row-start-3">
                                        <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />

                                    </div>
                                    <div className="col-start-3 row-start-2">
                                        <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />

                                    </div>
                                    <div className="row-span-2 col-start-3 row-start-3">
                                        <img src="https://dummyimage.com/400x600" alt="" className='h-full border object-cover w-full' />

                                    </div>
                                    <div className="col-start-2 row-start-4">
                                        <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />

                                    </div>
                                    <div className="col-start-1 row-start-4">
                                        <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />

                                    </div>
                                </div>
                            </div>
                        </section>

                    </TabContent>
                    <TabContent isSelected={selectedTab === 2}>

                        <section class="text-gray-600 body-font ">
                            <div class="container px-5 py-7  mx-auto">
                                <div className="grid grid-cols-3 grid-rows-2 gap-4">
                                    <div className="row-span-2">
                                        <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />
                                    </div>
                                    <div >
                                        <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
                                    </div>
                                    <div className="col-start-2 row-start-2">
                                        <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
                                    </div>
                                    <div className="row-span-2 col-start-3 row-start-1">
                                        <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />
                                    </div>
                                </div>

                            </div>
                        </section>

                    </TabContent>
                    <TabContent isSelected={selectedTab === 3}>
                        <section class="text-gray-600 body-font ">
                            <div class="container px-5 py-7  mx-auto">
                                <div className="grid grid-cols-3 grid-rows-1 gap-4">
                                    <div >
                                        <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
                                    </div>
                                    <div >
                                        <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
                                    </div>
                                </div>

                            </div>
                        </section>
                    </TabContent>
                    <TabContent isSelected={selectedTab === 4}>

                        <section class="text-gray-600 body-font ">
                            <div class="container px-5 py-7  mx-auto">
                                <div className="grid grid-cols-3 grid-rows-2 gap-4">
                                    <div >
                                        <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
                                    </div>
                                    <div className="row-span-2">
                                        <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />
                                    </div>
                                    <div >
                                        <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
                                    </div>
                                    <div >
                                        <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
                                    </div>
                                </div>

                            </div>
                        </section>

                    </TabContent>
                    <TabContent isSelected={selectedTab === 5}>

                        <section class="text-gray-600 body-font ">
                            <div class="container px-5 py-7  mx-auto">
                                <div className="grid grid-cols-3 grid-rows-3 gap-4">
                                    <div >
                                        <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
                                    </div>
                                    <div >
                                        <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
                                    </div>
                                    <div className="row-span-2">
                                        <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />
                                    </div>
                                    <div className="row-span-2">
                                        <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />
                                    </div>
                                    <div className="row-span-2">
                                        <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />
                                    </div>
                                    <div className="col-start-3 row-start-3">
                                        <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
                                    </div>
                                </div>

                            </div>
                        </section>

                    </TabContent>
                    <TabContent isSelected={selectedTab === 6}>

                        <section class="text-gray-600 body-font ">
                            <div class="container px-5 py-7  mx-auto">
                                <div className="grid grid-cols-3 grid-rows-2 gap-4">
                                    <div className="row-span-2">
                                        <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />
                                    </div>
                                    <div className="row-span-2">
                                        <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />
                                    </div>
                                </div>

                            </div>
                        </section>

                    </TabContent>
                </div>
            </div>
            {/* clients */}
            <div className="">
                <div ref={containerRef} style={{ display: 'flex', flexDirection: 'row' }}>
                    {caroselImages.map((image, index) => (
                        <motion.img
                            key={index}
                            src={image}
                            className='pl-10 w-32 h-20 mx-auto'
                           
                            style={{

                                marginRight: '10px',
                            }}
                            animate={controls} // Use the animate prop to apply the animation
                        />
                    ))}
                </div>
            </div>
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
