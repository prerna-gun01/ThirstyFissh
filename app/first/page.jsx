// "use client"
// import React, { useEffect } from 'react'
// import Navbar from '../components/Navbar';
// import { gsap } from "gsap";
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel"
// import Autoplay from "embla-carousel-autoplay"
// import { TextPlugin } from "gsap/TextPlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Card, CardContent } from "@/components/ui/card"
// import { LuPencilRuler } from "react-icons/lu";
// import { FaGears } from "react-icons/fa6";
// import Styles from '../../css/home.module.css'
// import {
//     Tabs,
//     TabsContent,
//     TabsList,
//     TabsTrigger,
// } from "@/components/ui/tabs"
// const page = () => {
//     gsap.registerPlugin(TextPlugin, ScrollTrigger);
//     useEffect(() => {

//         gsap.fromTo(".box", { y: 400, opacity: 0 }, { y: 0, duration: 2, ease: "elastic.out(1,0.3)", opacity: 0.8 });
//         // gsap.fromTo(".boox", { y: -400, opacity: 0 }, { y: 0, duration: 2, ease: "elastic.out(1,0.3)", opacity: 0.8 });

//         // var tl = gsap.timeline();

//         let boost = gsap.timeline({
//             scrollTrigger: {
//                 smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
//                 effects: true, // looks for data-speed and data-lag attributes on elements
//                 smoothTouch: 0.1,
//                 trigger: ".dost",
//                 // start: "top 30%",
//                 // end: "bottom top",
//                 // markers: true,
//                 opacity: 0,
//             },
//         });

//         boost.to(".boox", {
//             duration: 2,
//             text: {
//                 value: "WHO WE ARE",

//                 newClass: "title-font sm:text-4xl text-3xl mb-4 font-medium ",
//                 delimiter: "",
//             },
//         });
//         boost.to(".booox", {
//             duration: 5,
//             text: {
//                 value: "We are THIRSTY FISHH- A full service advertising agency focused on story telling and experiences for result oriented strategic marketing campaigns. We are known for engaging both traditional & digital natives & converting clicks leads.",

//                 newClass: "",
//                 delimiter: " ",
//             },
//         });


//         let tl = gsap.timeline({
//             scrollTrigger: {
//                 smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
//                 effects: true, // looks for data-speed and data-lag attributes on elements
//                 smoothTouch: 0.1,
//                 trigger: ".scroll",
//                 start: "top 40%",
//                 end: "bottom top",
//                 markers: true,
//                 opacity: 0,
//             },
//         });

//         tl.fromTo(".img1", { x: -400, opacity: 0 }, { x: 0, duration: 1, ease: "power2.out", opacity: 1 });
//         tl.fromTo(".img2", { x: -400, opacity: 0 }, { x: 0, duration: 1, ease: "sine.out", opacity: 1 });
//         // tl.fromTo(".para", { x: -400, opacity: 0 }, { x: 0, duration: 2, ease: "elastic.out(1,0.3)", opacity: 1 });
//         tl.fromTo(".text", { y: 100, opacity: 0 }, { y: 0, duration: 2, ease: "sine.out", opacity: 1 });

//         let para = gsap.timeline({
//             scrollTrigger: {
//                 smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
//                 effects: true, // looks for data-speed and data-lag attributes on elements
//                 smoothTouch: 0.1,
//                 trigger: ".roast",
//                 start: "top 10%",
//                 end: "bottom top",
//                 markers: true,
//                 opacity: 0,
//             },
//         });
//         para.fromTo(".headed", { y: 100, opacity: 0 }, { y: 0, duration: 2, ease: "steps(8)", opacity: 1 });
//         para.fromTo(".point1", { x: -400, opacity: 0 }, { x: 0, duration: 1, ease: "power2.out", opacity: 1 });
//         para.fromTo(".point2", { x: -400, opacity: 0 }, { x: 0, duration: 1, ease: "sine.out", opacity: 1 });
//         // tl.fromTo(".para", { x: -400, opacity: 0 }, { x: 0, duration: 2, ease: "elastic.out(1,0.3)", opacity: 1 });


//     }, [])
//     return (
//         <div className=''>
//             <Navbar />
//             <div className="bg-gray-800 text-gray-200  w-full ">
//                 <div className="flex justify-center ">

//                     <div className="full-width-carousel-container container mx-auto h-full ">
//                         <Carousel className=" h-full">
//                             <CarouselContent className="">
//                                 <CarouselItem>
//                                     <div className="grid grid-cols-3 grid-rows-1 gap-0">
//                                         <div className="box col-span-2">
//                                             <img src=" https://source.unsplash.com/1400x600/?computer" alt="" />
//                                         </div>
//                                         <div className="dost my-auto px-10 col-start-3">
//                                             <h1 className="boox "></h1>
//                                             <p className="booox "></p>
//                                         </div>
//                                     </div>

//                                 </CarouselItem>
//                                 <CarouselItem>
//                                     <div className="grid grid-cols-3 grid-rows-1 gap-0">
//                                         <div className=' boox'>1</div>
//                                         <div className="box col-span-2">
//                                             <img src="logo.svg" alt="" />
//                                         </div>
//                                     </div>
//                                 </CarouselItem>
//                             </CarouselContent>
//                             <CarouselPrevious className='text-black hover:bg-slate-400' />
//                             <CarouselNext className='text-black hover:bg-slate-400' />
//                         </Carousel>

//                     </div>


//                 </div>

//             </div>
//             {/* <section className="scroll bg-white body-font">
//                 <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
//                     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
//                         <img id='img' className="object-cover object-center rounded" alt="hero" src="https://s3-alpha-sig.figma.com/img/437c/f2d6/bbc3bbfc2227eb2c265186742afbdeec?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MuMK-yg~fh9PYH5jKW4Z2q9PX0br3nRvlJBnw39ikJML32GPd6Bfqy1oKiKV8~MElicbEqyINHQhbQLOdn0QPIMy4uz3cRTMmW8fovD1wR6fqwfgfOz6mlSLY8h7ORn5QZ7VTwKYQX2~miNtRyEQT464uQ5RZl7fuwOVv8YtEZ4DBHlGz5kapO9JlJ27cAF-oodjfoNMqGJwfTSDnAp8T0yP7Bh27DDOd1iKCMYD8GhGZ2MqL2HUuwKtug1tAOdL8nb3q0gwOXWNxfhpHYPl4ep2JbyNaWKCkDYKL~sd8bPiS16PbyhJNEVIXoLT7N9Z5-Qasi0b-YGehiKT5YpzzA__" />
//                     </div>
//                     <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
//                         <h1 className="para title-font sm:text-4xl text-3xl mb-4 font-medium ">WHO WE ARE</h1>
//                         <p className="para mb-8 leading-relaxed overflow-hidden">We are THIRSTY FISHH- A full service advertising agency focused on story telling and experiences for result oriented strategic marketing campaigns. We are known for engaging both traditional & digital natives & converting clicks leads.</p>
//                         <div className="flex w-full md:justify-start justify-center items-end">
//                             <button id='head' className="inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded text-lg">Learn More</button>
//                         </div>

//                     </div>
//                 </div>
//             </section> */}
//             {/* <div className="container mx-auto px-5 py-5">
//                 <div className="scroll relative border">
//                     <img id='img1' src="https://dummyimage.com/500x400" alt="" className='' />
//                     <div className="absolute top-72 left-96">
//                         <img id='img2' src="https://dummyimage.com/400x300" alt="" className='' />
//                     </div>

//                 </div>
//             </div> */}
//             <section className="text-gray-600 body-font relative bg-slate-200">
//                 <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap  ">
//                     <div className="scroll lg:w-2/5 md:w-1/3  object-cover object-center rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative  ">
//                         <img className="img1 absolute inset-0 w-full h-full" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://s3-alpha-sig.figma.com/img/72bc/162b/5d623d5546eb9aceb1bb018bd762e09a?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lhGgQGArwlUbXvn-f9rLTZEdCHSG7~pzVnAnNbRNNtSJrqviTmMDp03ngWSrlHqFnXMtg0FpO1NlyOHoOTwkE97lJwdH30uKA0OXNv9KqQ~J1JV8vMyMdpOsDWu6gy9WeMnJrwBsO~Mkdq1VKo1a80Tzn8TrbZUz0LRyM1-Aj9w15ShNgJ0DGLxisXiDlKzOLdIs6tNi4voRdjmHIm8AHeYZTm9USe3ysVDv8i~90qMfrkU1ioV3iKnuzIMvy~H6XHMxSVGZGUkrK0KT-CvencloomYFg757mHqKjjtAT-jSqGbhFoC~jxiPm2kAwjNfryS4zG1H-pfmOpW7VQioSw__" style={{
//                             filter: 'grayscale(0) contrast(1.2) opacity(0.8)',
//                         }} />
//                         <div className={`${Styles.card} img2 bg-white text-gray-900 relative flex flex-wrap py-6 rounded shadow-lg `}>
//                             <div className=" px-6">
//                                 <h2 className={`${Styles.head} title-font font-semibold  tracking-widest text-lg `}>We Want Your Business To Succeed</h2>
//                                 <p className="mt-1">At Thirsty Fishh, our main goal is to build a brand presence that drives business growth through various channels. And our small business brand strategists will be with you throughout your business journey.</p>
//                             </div>

//                         </div>
//                     </div>
//                     <div className="roast lg:w-3/5 md:w-2/3 md:pr-10 md:py-6">
//                         <div className="flex relative pb-12">
//                             <div className="flex-grow pl-4">
//                                 <h1 className={`${Styles.color} title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900`}>Our Services</h1>
//                                 <p className="headed leading-relaxed">Use our business strategies to achieve your business goals. We understand that your time is limited doing other things, so let us grow your business online for you.</p>
//                             </div>
//                         </div>
//                         <div className="point1 flex relative pb-12">

//                             <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
//                                 <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
//                             </div>

//                             <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-500 inline-flex items-center justify-center text-white relative z-10 ">

//                                 <LuPencilRuler className='hover:scale-150' />
//                             </div>

//                             <div className="flex-grow pl-4">
//                                 <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Business Strategy</h2>
//                                 <p className="leading-relaxed">Let us facilitate a busniess strategy workshop for your business and together we’ll develop a action plan.</p>
//                             </div>
//                         </div>
//                         <div className="point2 flex relative pb-12">


//                             <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sky-500 inline-flex items-center justify-center text-white relative z-10">

//                                 <FaGears className='hover:scale-110' />
//                             </div>

//                             <div className="flex-grow pl-4">
//                                 <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Web & Marketing</h2>
//                                 <p className="leading-relaxed">We offer a strategic approach to your brand, website, social media, Google search, PR and even lead generation. We’ll even coordinate multiple programs at the same time and develop a new marketing strategy that goes above, through or below the line, whilst delivering a constant stream of leads for your business.</p>
//                             </div>
//                         </div>
//                     </div>


//                 </div>
//             </section>

//             <div className='bg-slate-200'>
//                 <Tabs defaultValue="all" className="container px-5 py-5 mx-auto border-0 bg-slate-200">
//                     <TabsList className="grid grid-cols-6 ">
//                         <TabsTrigger value="all">All</TabsTrigger>
//                         <TabsTrigger value="brand">Brand Development</TabsTrigger>
//                         <TabsTrigger value="logos">Logos And Branding</TabsTrigger>
//                         <TabsTrigger value="website">Websites</TabsTrigger>
//                         <TabsTrigger value="market">Marketing</TabsTrigger>
//                         <TabsTrigger value="print">Print Media</TabsTrigger>
//                     </TabsList>
//                     <TabsContent value="all">
//                         <Card className="">

//                             <CardContent className="space-y-2 pt-6 bg-slate-200 border-0">
//                                 <section class="text-gray-600 body-font ">
//                                     <div class="container px-5 py-7  mx-auto">


//                                         <div className="grid grid-cols-3 grid-rows-4 gap-4">
//                                             <div className="row-span-2">
//                                                 <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />

//                                             </div>
//                                             <div >
//                                                 <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />

//                                             </div>
//                                             <div >
//                                                 <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />

//                                             </div>
//                                             <div className="row-span-2 col-start-2">
//                                                 <img src="https://dummyimage.com/400x600" alt="" className='h-full border object-cover w-full' />

//                                             </div>
//                                             <div className="col-start-1 row-start-3">
//                                                 <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />

//                                             </div>
//                                             <div className="col-start-3 row-start-2">
//                                                 <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />

//                                             </div>
//                                             <div className="row-span-2 col-start-3 row-start-3">
//                                                 <img src="https://dummyimage.com/400x600" alt="" className='h-full border object-cover w-full' />

//                                             </div>
//                                             <div className="col-start-2 row-start-4">
//                                                 <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />

//                                             </div>
//                                             <div className="col-start-1 row-start-4">
//                                                 <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />

//                                             </div>
//                                         </div>
//                                     </div>
//                                 </section>
//                             </CardContent>

//                         </Card>



//                     </TabsContent>

//                     <TabsContent value="brand" className="w-full">
//                         <Card className="w-full">

//                             <CardContent className="space-y-2 pt-6">
//                                 <section class="text-gray-600 body-font ">
//                                     <div class="container px-5 py-7  mx-auto">
//                                         <div className="grid grid-cols-3 grid-rows-2 gap-4">
//                                             <div className="row-span-2">
//                                                 <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />
//                                             </div>
//                                             <div >
//                                                 <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
//                                             </div>
//                                             <div className="col-start-2 row-start-2">
//                                                 <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
//                                             </div>
//                                             <div className="row-span-2 col-start-3 row-start-1">
//                                                 <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />
//                                             </div>
//                                         </div>

//                                     </div>
//                                 </section>
//                             </CardContent>

//                         </Card>
//                     </TabsContent>
//                     <TabsContent value="logos">
//                         <Card className="w-full">

//                             <CardContent className="space-y-2 pt-6">
//                                 <section class="text-gray-600 body-font ">
//                                     <div class="container px-5 py-7  mx-auto">
//                                         <div className="grid grid-cols-3 grid-rows-1 gap-4">
//                                             <div >
//                                                 <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
//                                             </div>
//                                             <div >
//                                                 <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
//                                             </div>
//                                         </div>

//                                     </div>
//                                 </section>
//                             </CardContent>

//                         </Card>
//                     </TabsContent>

//                     <TabsContent value="website" className="w-full">
//                         <Card className="w-full">

//                             <CardContent className="space-y-2 pt-6">
//                                 <section class="text-gray-600 body-font ">
//                                     <div class="container px-5 py-7  mx-auto">
//                                         <div className="grid grid-cols-3 grid-rows-2 gap-4">
//                                             <div >
//                                                 <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
//                                             </div>
//                                             <div className="row-span-2">
//                                                 <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />
//                                             </div>
//                                             <div >
//                                                 <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
//                                             </div>
//                                             <div >
//                                                 <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
//                                             </div>
//                                         </div>

//                                     </div>
//                                 </section>
//                             </CardContent>

//                         </Card>
//                     </TabsContent>
//                     <TabsContent value="market">
//                         <Card className="w-full">

//                             <CardContent className="space-y-2 pt-6">
//                                 <section class="text-gray-600 body-font ">
//                                     <div class="container px-5 py-7  mx-auto">
//                                         <div className="grid grid-cols-3 grid-rows-3 gap-4">
//                                             <div >
//                                                 <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
//                                             </div>
//                                             <div >
//                                                 <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
//                                             </div>
//                                             <div className="row-span-2">
//                                                 <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />
//                                             </div>
//                                             <div className="row-span-2">
//                                                 <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />
//                                             </div>
//                                             <div className="row-span-2">
//                                                 <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />
//                                             </div>
//                                             <div className="col-start-3 row-start-3">
//                                                 <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
//                                             </div>
//                                         </div>

//                                     </div>
//                                 </section>
//                             </CardContent>

//                         </Card>
//                     </TabsContent>

//                     <TabsContent value="print" className="w-full">
//                         <Card className="w-full">

//                             <CardContent className="space-y-2 pt-6">
//                                 <section class="text-gray-600 body-font ">
//                                     <div class="container px-5 py-7  mx-auto">
//                                         <div className="grid grid-cols-3 grid-rows-2 gap-4">
//                                             <div className="row-span-2">
//                                                 <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />
//                                             </div>
//                                             <div className="row-span-2">
//                                                 <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />
//                                             </div>
//                                         </div>

//                                     </div>
//                                 </section>
//                             </CardContent>

//                         </Card>
//                     </TabsContent>
//                 </Tabs>
//             </div>

//             <div className="">
//                 <Carousel className="w-full container px-5 py-5 mx-auto" plugins={[Autoplay({ delay: 2000, }),]}>
//                     <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">OUR CLIENTS</h1>
//                     <CarouselContent>
//                         <CarouselItem className="md:basis-1/3 lg:basis-1/4">
//                             <Card className="">

//                                 <CardContent className="space-y-2 h-32 p-0">
//                                     <section class="text-gray-600 body-font ">
//                                         <div class="container px-5 py-5 mx-auto">
//                                             <img src="/karade.png" alt="" className='w-32 h-20 mx-auto' />

//                                         </div>
//                                     </section>
//                                 </CardContent>

//                             </Card>
//                         </CarouselItem>
//                         <CarouselItem className="md:basis-1/3 lg:basis-1/4">
//                             <Card className="">

//                                 <CardContent className="space-y-2 h-32 p-0">
//                                     <section class="text-gray-600 body-font ">
//                                         <div class="container px-5 py-5 mx-auto">
//                                             <img src="/optec.png" alt="" className='w-32 h-20 mx-auto' />

//                                         </div>
//                                     </section>
//                                 </CardContent>

//                             </Card>
//                         </CarouselItem>
//                         <CarouselItem className="md:basis-1/3 lg:basis-1/4">
//                             <Card className="">

//                                 <CardContent className="space-y-2 h-32 p-0">
//                                     <section class="text-gray-600 body-font ">
//                                         <div class="container px-5 py-5 mx-auto">
//                                             <img src="/dressland.png" alt="" className='w-32 h-20 mx-auto' />

//                                         </div>
//                                     </section>
//                                 </CardContent>

//                             </Card>
//                         </CarouselItem>
//                         <CarouselItem className="md:basis-1/3 lg:basis-1/4">
//                             <Card className="">

//                                 <CardContent className="space-y-2 h-32 p-0">
//                                     <section class="text-gray-600 body-font ">
//                                         <div class="container px-5 py-5 mx-auto">
//                                             <img src="/Ananta.png" alt="" className='w-32 h-20 mx-auto' />

//                                         </div>
//                                     </section>
//                                 </CardContent>

//                             </Card>
//                         </CarouselItem>
//                         <CarouselItem className="md:basis-1/3 lg:basis-1/4">
//                             <Card className="">

//                                 <CardContent className="space-y-2 h-32 p-0">
//                                     <section class="text-gray-600 body-font ">
//                                         <div class="container px-5 py-5 mx-auto">
//                                             <img src="/logo.svg" alt="" className='w-32 h-20 mx-auto' />

//                                         </div>
//                                     </section>
//                                 </CardContent>

//                             </Card>
//                         </CarouselItem>
//                         <CarouselItem className="md:basis-1/3 lg:basis-1/4">
//                             <Card className="">

//                                 <CardContent className="space-y-2 h-32 p-0">
//                                     <section class="text-gray-600 body-font ">
//                                         <div class="container px-5 py-5 mx-auto">
//                                             <img src="/logo.svg" alt="" className='w-32 h-20 mx-auto' />

//                                         </div>
//                                     </section>
//                                 </CardContent>

//                             </Card>
//                         </CarouselItem>
//                         <CarouselItem className="md:basis-1/3 lg:basis-1/4">
//                             <Card className="">

//                                 <CardContent className="space-y-2 h-32 p-0">
//                                     <section class="text-gray-600 body-font ">
//                                         <div class="container px-5 py-5 mx-auto">
//                                             <img src="/logo.svg" alt="" className='w-32 h-20 mx-auto' />

//                                         </div>
//                                     </section>
//                                 </CardContent>

//                             </Card>
//                         </CarouselItem>
//                         <CarouselItem className="md:basis-1/3 lg:basis-1/4">
//                             <Card className="">

//                                 <CardContent className="space-y-2 h-32 p-0">
//                                     <section class="text-gray-600 body-font ">
//                                         <div class="container px-5 py-5 mx-auto">
//                                             <img src="/logo.svg" alt="" className='w-32 h-20 mx-auto' />

//                                         </div>
//                                     </section>
//                                 </CardContent>

//                             </Card>
//                         </CarouselItem>
//                     </CarouselContent>
//                     <CarouselPrevious />
//                     <CarouselNext />
//                 </Carousel>
//             </div>

//             <footer class="text-gray-600 body-font pt-4 ">
//                 <div class="">
//                     <div class="container mx-auto py-10 px-5 flex flex-wrap flex-col sm:flex-row">
//                         <div>
//                             <p className="text-gray-500 text-sm text-center sm:text-left">
//                                 Thirsty Fishh | Beyond the obvious
//                             </p>
//                             <p className="text-gray-500 text-sm text-center sm:text-left">
//                                 © 2020 Thirsty Fishh | All Rightes Reserved
//                             </p>
//                         </div>



//                         <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">

//                             <div className='mx-2'>
//                                 <p className="text-gray-500 text-sm text-center sm:text-left">
//                                     hello@thirstyfishh.com
//                                 </p>
//                                 <p className="text-gray-500 text-sm text-center sm:text-left">
//                                     +91 9970503705
//                                 </p>
//                             </div>

//                             <div className='mx-2'>
//                                 <p className="text-gray-500 text-sm text-center sm:text-left">
//                                     {/* <FaFacebookF />  */}
//                                     Facebook
//                                 </p>
//                                 <p className="text-gray-500 text-sm text-center sm:text-left">
//                                     {/* <FaInstagram /> */}
//                                     Instagram
//                                 </p>
//                             </div>

//                         </span>
//                     </div>
//                 </div>
//             </footer >

//         </div>
//     )
// }

// export default page

// "use client"
// import { useState } from 'react';
// import { motion } from 'framer-motion';


// const Tab = ({ isSelected, onClick, children }) => (
//     <motion.div
//         whileTap={{ scale: 0.95 }}
//         onClick={onClick}
//         style={{
//             padding: '10px',
//             borderBottom: isSelected ? '2px solid blue' : '2px solid transparent',
//             cursor: 'pointer',
//         }}
//     >
//         {children}
//     </motion.div>
// );

// const TabContent = ({ isSelected, children }) => (
//     <motion.div
//         initial={{ opacity: 0, x: -10 }}
//         animate={{ opacity: isSelected ? 1 : 0, x: isSelected ? 0 : -10 }}
//         transition={{ duration: 0.3 }}
//         style={{ marginTop: '10px' }}
//     >
//         {isSelected && children}
//     </motion.div>
// );

// const Tabs = () => {
//     const [selectedTab, setSelectedTab] = useState(1);

//     return (
//         <div>
//             <div className='w-fit container px-5 my-5 py-5 mx-auto'>
//                 <div className='mx-auto px-5 py-5 border text-center rounded-xl'>
//                     <span isSelected={selectedTab === 1} onClick={() => setSelectedTab(1)} className='px-5 py-2 inline hover:bg-sky-500 rounded-xl'>
//                         Tab 1
//                     </span>
//                     <span isSelected={selectedTab === 2} onClick={() => setSelectedTab(2)} className='px-5 py-2 inline hover:bg-sky-500 rounded-xl'>
//                         Tab 2
//                     </span>
//                     <span isSelected={selectedTab === 3} onClick={() => setSelectedTab(3)} className='px-5 py-2 inline hover:bg-sky-500 rounded-xl'>
//                         Tab 3
//                     </span>
//                     <span isSelected={selectedTab === 4} onClick={() => setSelectedTab(4)} className='px-5 py-2 inline hover:bg-sky-500 rounded-xl'>
//                         Tab 4
//                     </span>
//                     <span isSelected={selectedTab === 5} onClick={() => setSelectedTab(5)} className='px-5 py-2 inline hover:bg-sky-500 rounded-xl'>
//                         Tab 5
//                     </span>
//                     <span isSelected={selectedTab === 6} onClick={() => setSelectedTab(6)} className='px-5 py-2 inline hover:bg-sky-500 rounded-xl'>
//                         Tab 6
//                     </span>
//                 </div>
//                 <TabContent isSelected={selectedTab === 1}>

//                     <section class="text-gray-600 body-font ">
//                         <div class="container px-5 py-7  mx-auto">


//                             <div className="grid grid-cols-3 grid-rows-4 gap-4">
//                                 <div className="row-span-2">
//                                     <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />
//                                     {/* <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-transparent opacity-0 hover:opacity-100">

//                                                     <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Sure Technology</h1>
//                                                     <p class="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
//                                                 </div> */}
//                                 </div>
//                                 <div >
//                                     <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />

//                                 </div>
//                                 <div >
//                                     <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />

//                                 </div>
//                                 <div className="row-span-2 col-start-2">
//                                     <img src="https://dummyimage.com/400x600" alt="" className='h-full border object-cover w-full' />

//                                 </div>
//                                 <div className="col-start-1 row-start-3">
//                                     <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />

//                                 </div>
//                                 <div className="col-start-3 row-start-2">
//                                     <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />

//                                 </div>
//                                 <div className="row-span-2 col-start-3 row-start-3">
//                                     <img src="https://dummyimage.com/400x600" alt="" className='h-full border object-cover w-full' />

//                                 </div>
//                                 <div className="col-start-2 row-start-4">
//                                     <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />

//                                 </div>
//                                 <div className="col-start-1 row-start-4">
//                                     <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />

//                                 </div>
//                             </div>
//                         </div>
//                     </section>

//                 </TabContent>
//                 <TabContent isSelected={selectedTab === 2}>

//                     <section class="text-gray-600 body-font ">
//                         <div class="container px-5 py-7  mx-auto">
//                             <div className="grid grid-cols-3 grid-rows-2 gap-4">
//                                 <div className="row-span-2">
//                                     <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />
//                                 </div>
//                                 <div >
//                                     <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
//                                 </div>
//                                 <div className="col-start-2 row-start-2">
//                                     <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
//                                 </div>
//                                 <div className="row-span-2 col-start-3 row-start-1">
//                                     <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />
//                                 </div>
//                             </div>

//                         </div>
//                     </section>

//                 </TabContent>
//                 <TabContent isSelected={selectedTab === 3}>
//                     <section class="text-gray-600 body-font ">
//                         <div class="container px-5 py-7  mx-auto">
//                             <div className="grid grid-cols-3 grid-rows-1 gap-4">
//                                 <div >
//                                     <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
//                                 </div>
//                                 <div >
//                                     <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
//                                 </div>
//                             </div>

//                         </div>
//                     </section>
//                 </TabContent>
//                 <TabContent isSelected={selectedTab === 4}>

//                     <section class="text-gray-600 body-font ">
//                         <div class="container px-5 py-7  mx-auto">
//                             <div className="grid grid-cols-3 grid-rows-2 gap-4">
//                                 <div >
//                                     <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
//                                 </div>
//                                 <div className="row-span-2">
//                                     <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />
//                                 </div>
//                                 <div >
//                                     <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
//                                 </div>
//                                 <div >
//                                     <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
//                                 </div>
//                             </div>

//                         </div>
//                     </section>

//                 </TabContent>
//                 <TabContent isSelected={selectedTab === 5}>

//                     <section class="text-gray-600 body-font ">
//                         <div class="container px-5 py-7  mx-auto">
//                             <div className="grid grid-cols-3 grid-rows-3 gap-4">
//                                 <div >
//                                     <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
//                                 </div>
//                                 <div >
//                                     <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
//                                 </div>
//                                 <div className="row-span-2">
//                                     <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />
//                                 </div>
//                                 <div className="row-span-2">
//                                     <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />
//                                 </div>
//                                 <div className="row-span-2">
//                                     <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />
//                                 </div>
//                                 <div className="col-start-3 row-start-3">
//                                     <img src="https://dummyimage.com/720x400" alt="" className='h-full border object-cover w-full' />
//                                 </div>
//                             </div>

//                         </div>
//                     </section>

//                 </TabContent>
//                 <TabContent isSelected={selectedTab === 6}>

//                     <section class="text-gray-600 body-font ">
//                         <div class="container px-5 py-7  mx-auto">
//                             <div className="grid grid-cols-3 grid-rows-2 gap-4">
//                                 <div className="row-span-2">
//                                     <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />
//                                 </div>
//                                 <div className="row-span-2">
//                                     <img src="https://dummyimage.com/400x600" alt="" className=' w-full h-full object-cover object-center' />
//                                 </div>
//                             </div>

//                         </div>
//                     </section>

//                 </TabContent>
//             </div>

//         </div>
//     );
// };

// export default Tabs;

// "use client"
// import { useRef } from "react";
// import { motion, useScroll } from "framer-motion";
// import "../../css/module.home.css"

// export default function App() {
//   const ref = useRef(null);
//   const { scrollXProgress } = useScroll({ container: ref });

//   return (
//     <>

//       <ul ref={ref}>
//         <li>
//             <img src="/karade.png" alt="" className='w-32 h-20 mx-auto' />
//         </li>
//         <li>
//             <img src="/optec.png" alt="" className='w-32 h-20 mx-auto' />
//         </li>
//         <li>
//             <img src="/dressland.png" alt="" className='w-32 h-20 mx-auto' />
//         </li>
//         <li>
//             <img src="/Ananta.png" alt="" className='w-32 h-20 mx-auto' />
//         </li>
//         <li>
//             <img src="/logo.svg" alt="" className='w-32 h-20 mx-auto' />
//         </li>
//         <li>
//             <img src="/karade.png" alt="" className='w-32 h-20 mx-auto' />
//         </li>
//         <li>
//             <img src="/karade.png" alt="" className='w-32 h-20 mx-auto' />
//         </li>
//         <li>
//             <img src="/karade.png" alt="" className='w-32 h-20 mx-auto' />
//         </li>
//       </ul>
//     </>
//   );
// }

// "use client"
// import React, { useRef, useEffect } from 'react';
// import { useInView, motion, AnimatePresence, useAnimation  } from "framer-motion";
// import "../../css/module.home.css"
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"
// function Section({ children }) {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true });

//     return (

//         <section ref={ref}>
//             <span
//                 style={{
//                     transform: isInView ? "none" : "translateX(-200px)",
//                     opacity: isInView ? 1 : 0,
//                     transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
//                 }}
//             >
//                 {children}
//             </span>
//         </section>
//     );
// }

// export default function App() {
//     const containerRef = useRef(null);
//     const controls = useAnimation(); // Initialize controls for animations
//     const caroselImages = ['/logo.svg', '/karade.png', '/optec.png', '/dressland.png', '/Ananta.png', '/logo.svg', '/logo.svg', '/logo.svg', '/logo.svg'];

//     useEffect(() => {
//         const containerWidth = containerRef.current.offsetWidth;

//         const animateImages = async () => {
//             controls.start({
//                 x: `-${containerWidth}px`,
//                 transition: { duration: 20, ease: 'linear', repeat: Infinity },
//             });
//         };

//         animateImages();
//     }, [controls]);
//     return (
//         <>
//             <div className="text-sm font-light">L. os, asperiores? Rerum, asperiores consequuntur.
//             </div>
//             <Section>Animate</Section>
//             <Section>
//                 <div ref={containerRef} style={{ display: 'flex', flexDirection: 'row' }}>
//                     {caroselImages.map((image, index) => (
//                         <motion.img
//                             key={index}
//                             src={image}
//                             className='w-32 h-20 mx-auto'
//                             alt={`Image ${index + 1}`}
//                             style={{

//                                 marginRight: '10px',
//                             }}
//                             animate={controls} // Use the animate prop to apply the animation
//                         />
//                     ))}
//                 </div>
//             </Section>
//             <Section>in</Section>
//             <Section>
//                 <Card className="">

//                     <CardContent className="space-y-2 h-32 p-0">
//                         <section class="text-gray-600 body-font ">
//                             <div class="container px-5 py-5 mx-auto">
//                                 <img src="/logo.svg" alt="" className='w-32 h-20 mx-auto' />

//                             </div>
//                         </section>
//                     </CardContent>

//                 </Card>
//             </Section>
//         </>
//     );
// }


// import "../../css/module.home.css";
// import { Canvas, useThree, useFrame } from "@react-three/fiber";
// import { useRef, useLayoutEffect } from "react";
// import { useTransform, useScroll, useTime } from "framer-motion";
// import { degreesToRadians, progress, mix } from "popmotion";
// import { Object3D } from 'three';
// const color = "#111111";

// const Icosahedron = () => (
//   <mesh rotation-x={0.35}>
//     <icosahedronGeometry args={[1, 0]} />
//     <meshBasicMaterial wireframe color={color} />
//   </mesh>
// );

// const Star = ({ p }) => {
//   const ref = useRef(null);

//   useLayoutEffect(() => {
//     const distance = mix(2, 3.5, Math.random());
//     const yAngle = mix(
//       degreesToRadians(80),
//       degreesToRadians(100),
//       Math.random()
//     );
//     const xAngle = degreesToRadians(360) * p;
//     ref.current.position.setFromSphericalCoords(distance, yAngle, xAngle);
//   });

//   return (
//     <mesh ref={ref}>
//       <boxGeometry args={[0.05, 0.05, 0.05]} />
//       <meshBasicMaterial wireframe color={color} />
//     </mesh>
//   );
// };

// function Scene({ numStars = 100 }) {
//   const gl = useThree((state) => state.gl);
//   const { scrollYProgress } = useScroll();
//   const yAngle = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0.001, degreesToRadians(180)]
//   );
//   const distance = useTransform(scrollYProgress, [0, 1], [10, 3]);
//   const time = useTime();

//   useFrame(({ camera }) => {
//     camera.position.setFromSphericalCoords(
//       distance.get(),
//       yAngle.get(),
//       time.get() * 0.0005
//     );
//     camera.updateProjectionMatrix();
//     camera.lookAt(0, 0, 0);
//   });

//   useLayoutEffect(() => gl.setPixelRatio(0.3));

//   const stars = [];
//   for (let i = 0; i < numStars; i++) {
//     stars.push(<Star p={progress(0, numStars, i)} />);
//   }

//   return (
//     <>
//       <Icosahedron />
//       {stars}
//     </>
//   );
// }

// export default function App() {
//   return (
//     <div className="h-52 w-52">
//     <div className="container">
//       <Canvas gl={{ antialias: false }}>
//         <Scene />
//       </Canvas>
//     </div>
//     </div>
//   );
// }
"use client"
import React from 'react'

// import { motion, useAnimation } from "framer-motion";
// import { useEffect } from "react";

// const LoadingSVG = () => {
//   const controls = useAnimation();

//   useEffect(() => {
//     const animatePath = async () => {
//       await controls.start({
//         opacity: [0, 1, 0], // Fading in and out
//         transition: {
//           repeat: Infinity, // Repeat the animation indefinitely
//           duration: 2.5, // Adjust the duration as needed
//         },
//       });
//     };

//     animatePath();
//   }, [controls]);

//   return (
//     <svg
//       version="1.1"
//       id="Layer_1"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//       x="0px"
//       y="0px"
//       viewBox="0 0 684 158"
//       style={{ enableBackground: "new 0 0 684 158" }}
//       xmlSpace="preserve"
//     >
//       <g id="Layer_1_00000172439709840492482220000005742948453259362209_">
//         <g>
//           <g>
//             <motion.path
//               initial={{ opacity: 0 }}
//               animate={controls}
//               d="M329.1,31.4c0,0.4,0,0.9,0,1.3c0,0.1,0,0.1-0.1,0.2c-0.1,1.3-0.6,2.4-1.2,3.5c-0.9,1.5-2.1,2.6-3.4,3.7
//                 c-1.5,1.3-3.1,2.5-4.6,3.8c-1.6,1.4-3,2.9-3.9,4.9c0,0,0,0-0.1,0c0,0,0,0-0.1-0.1c-0.7-1.6-1.7-2.9-3-4c-1.5-1.3-3.1-2.6-4.6-3.8
//                 c-1.3-1-2.5-2.1-3.6-3.4c-1.6-2-2.3-4.2-1.9-6.7c0.5-3,2.8-5.7,6.3-6.1c2.7-0.2,4.8,0.7,6.3,2.9c0.3,0.5,0.7,0.5,1,0
//                 c1.6-2.3,4.3-3.4,7.1-2.8c2.8,0.6,4.6,2.4,5.4,5.1C328.9,30.4,329,30.9,329.1,31.4z"
//               style={{ fill: "#6D6E71", stroke: "#6D6E71", strokeWidth: 2 }}
//             />
//             <motion.path
//               initial={{ opacity: 0 }}
//               animate={controls}
//               d="M316,120.9c-0.1,0-0.2,0-0.3,0c-0.1-0.2-0.1-0.3-0.3-0.5c-1.9-2.3-3.7-4.6-5.6-7c-0.8-1-1.7-2-2.5-3
//                 c0-0.4,0-0.8,0-1.1c0.1-0.1,0.1-0.3,0.1-0.5c0.3-3.4,0.6-6.7,0.9-10c0.5-6.2,1-12.3,1.6-18.5c0.5-6.4,1.1-12.8,1.6-19.2
//                 c0-0.5,0.2-0.6,0.6-0.6c2.5,0,5,0,7.5,0c0.4,0,0.6,0.1,0.6,0.6c0.4,4.4,0.7,8.9,1.1,13.3c0.5,5.9,1,11.8,1.5,17.7
//                 c0.5,5.9,1,11.8,1.5,17.6c0,0.3-0.1,0.8-0.3,1c-2.2,2.7-4.4,5.4-6.5,8.1C317,119.5,316.5,120.2,316,120.9z"
//               style={{ fill: "#009CD9", stroke: "#009CD9", strokeWidth: 2 }}
//             />
//             <motion.path
//               initial={{ opacity: 0 }}
//               animate={controls}
//               d="M310,51c4,0,7.9,0,11.8,0c-0.6,2.4-1.2,4.7-1.8,7c0,0.1-0.3,0.3-0.5,0.3c-2.5,0-4.9,0-7.4,0
//                 c-0.1,0-0.4-0.2-0.4-0.3C311.1,55.7,310.6,53.4,310,51z"
//               style={{ fill: "#009CD9", stroke: "#009CD9", strokeWidth: 2 }}
//             />
//           </g>
//         </g>
//       </g>
//     </svg>
//   );
// };

// export default LoadingSVG;
// components/StyledSVG.js
// components/StyledSVG.js
// components/StyledSVG.js
// components/StyledSVG.js
// import { motion, useAnimation } from "framer-motion";
// import { useEffect } from "react";

// const StyledSVG = () => {
//   const controlsPath1 = useAnimation();
//   const controlsPath2 = useAnimation();
//   const controlsPath3 = useAnimation();

//   useEffect(() => {
//     const animatePaths = async () => {
//       while (true) {
//         await controlsPath1.start({
//           opacity: [0, 1, 0],
//           transition: {
//             repeat: 0,
//             duration: 0.5,
//           },
//         });



//         await controlsPath3.start({
//           opacity: [0, 1, 0],
//           transition: {
//             repeat: 0,
//             duration: 0.5,
//           },
//         });

//         await controlsPath2.start({
//           opacity: [0, 1, 0],
//           transition: {
//             repeat: 0,
//             duration: 0.5,
//           },
//         });
//       }
//     };

//     animatePaths();
//   }, [controlsPath1, controlsPath2, controlsPath3]); 

//   return (
//     <motion.svg
//       version="1.1"
//       id="Layer_1"
//       xmlns="http://www.w3.org/2000/svg"
//       xmlnsXlink="http://www.w3.org/1999/xlink"
//       x="0px"
//       y="0px"
//       viewBox="0 0 684 158"
//       style={{
//         enableBackground: "new 0 0 684 158",
//         animation: "fade",
//         grouping: "none",
//         order: "normal",
//         timeFlow: "alternate",
//       }}
//       xmlSpace="preserve"
//     >
//       <motion.g id="Layer_1_00000172439709840492482220000005742948453259362209_">
//         <motion.g>
//           <motion.g>
//             <motion.path
//               initial={{ opacity: 0 }}
//               animate={controlsPath1}
//               d="M329.1,31.4c0,0.4,0,0.9,0,1.3c0,0.1,0,0.1-0.1,0.2c-0.1,1.3-0.6,2.4-1.2,3.5c-0.9,1.5-2.1,2.6-3.4,3.7
//                 c-1.5,1.3-3.1,2.5-4.6,3.8c-1.6,1.4-3,2.9-3.9,4.9c0,0,0,0-0.1,0c0,0,0,0-0.1-0.1c-0.7-1.6-1.7-2.9-3-4c-1.5-1.3-3.1-2.6-4.6-3.8
//                 c-1.3-1-2.5-2.1-3.6-3.4c-1.6-2-2.3-4.2-1.9-6.7c0.5-3,2.8-5.7,6.3-6.1c2.7-0.2,4.8,0.7,6.3,2.9c0.3,0.5,0.7,0.5,1,0
//                 c1.6-2.3,4.3-3.4,7.1-2.8c2.8,0.6,4.6,2.4,5.4,5.1C328.9,30.4,329,30.9,329.1,31.4z"
//               style={{ fill: "#6D6E71", stroke: "#6D6E71", strokeWidth: 2 }}
//             />
//             <motion.path
//               initial={{ opacity: 0 }}
//               animate={controlsPath2}
//               d="M316,120.9c-0.1,0-0.2,0-0.3,0c-0.1-0.2-0.1-0.3-0.3-0.5c-1.9-2.3-3.7-4.6-5.6-7c-0.8-1-1.7-2-2.5-3
//                 c0-0.4,0-0.8,0-1.1c0.1-0.1,0.1-0.3,0.1-0.5c0.3-3.4,0.6-6.7,0.9-10c0.5-6.2,1-12.3,1.6-18.5c0.5-6.4,1.1-12.8,1.6-19.2
//                 c0-0.5,0.2-0.6,0.6-0.6c2.5,0,5,0,7.5,0c0.4,0,0.6,0.1,0.6,0.6c0.4,4.4,0.7,8.9,1.1,13.3c0.5,5.9,1,11.8,1.5,17.7
//                 c0.5,5.9,1,11.8,1.5,17.6c0,0.3-0.1,0.8-0.3,1c-2.2,2.7-4.4,5.4-6.5,8.1C317,119.5,316.5,120.2,316,120.9z"
//               style={{ fill: "#009CD9", stroke: "#009CD9", strokeWidth: 2 }}
//             />
//             <motion.path
//               initial={{ opacity: 0 }}
//               animate={controlsPath3}
//               d="M310,51c4,0,7.9,0,11.8,0c-0.6,2.4-1.2,4.7-1.8,7c0,0.1-0.3,0.3-0.5,0.3c-2.5,0-4.9,0-7.4,0
//                 c-0.1,0-0.4-0.2-0.4-0.3C311.1,55.7,310.6,53.4,310,51z"
//               style={{ fill: "#009CD9", stroke: "#009CD9", strokeWidth: 2 }}
//             />
//           </motion.g>
//         </motion.g>
//       </motion.g>
//     </motion.svg>
//   );
// };

// export default StyledSVG;
// import { useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';

// const ScrollZoomContainer = () => {
//   const controls = useAnimation();

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

//       // Adjust the values based on your specific use case
//       const zoomFactor = 1 + scrollY / 500;
//       const opacity = 1 - scrollY / 500;

//       // Apply zoom-in effect and opacity based on scroll position
//       controls.start({
//         scale: zoomFactor,
//         opacity: opacity,
//       });

//       // Check if at the end of the scroll and fade out
//       if (scrollY >= maxScroll - 100) {
//         controls.start({
//           opacity: 0,
//         });
//       }
//     };

//     // Attach scroll event listener
//     window.addEventListener('scroll', handleScroll);

//     // Cleanup event listener on component unmount
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [controls]);

//   return (
//     <div>
//       <motion.div
//         animate={controls}
//         transition={{ type: 'spring', stiffness: 100 }}
//         style={{
//           width: '100%',
//           height: '70vh', // Adjust as needed
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           background: '#f0f0f0', // Background color, adjust as needed
//         }}
//       >
//         {/* Your content goes here, this element will zoom in as you scroll */}
//         <h1>Your Zooming Element</h1>
//       </motion.div>

//       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure numquam, error repudiandae dolores doloremque laborum quod ex blanditiis cupiditate ullam adipisci pariatur veritatis omnis, fugit, laboriosam optio consequuntur? Corporis laboriosam quo enim voluptas? Voluptatibus, culpa perferendis quae perspiciatis quaerat molestiae quis repellendus aspernatur quo veritatis quidem, cumque enim doloribus commodi tenetur qui quia minima omnis quibusdam a quos nesciunt voluptates dolor facere. Deleniti dignissimos voluptas alias, qui eum rerum quos id perferendis debitis esse reprehenderit dolores praesentium, at natus nobis cum impedit! Architecto ipsa quia neque voluptas sed beatae exercitationem, eius cumque consequatur iure! Explicabo exercitationem similique doloremque tempore harum mollitia, amet excepturi, ea ipsa expedita, laborum nulla! Accusantium optio ratione iusto earum, reprehenderit qui sequi voluptatum vitae quibusdam ut a rem molestiae? Fuga, doloremque officiis ad nulla vel blanditiis, iusto atque quis expedita minus reiciendis. Ipsa, ducimus consectetur illum dolores eveniet pariatur aspernatur ex consequatur quaerat iusto nostrum vel aut temporibus beatae nihil voluptatum, molestiae aliquam qui suscipit! Eos, voluptatem distinctio aliquam ratione commodi quis aperiam fuga, quia pariatur tenetur voluptatum dicta officiis modi in est laboriosam nemo rerum quod esse molestiae dolorum aliquid. Sunt cum officia nisi odio blanditiis, asperiores culpa distinctio quae laudantium fugiat commodi corrupti harum soluta quaerat voluptas. Voluptatem reprehenderit consectetur vel rem molestias illum laborum beatae obcaecati voluptas sequi saepe eius, eveniet repudiandae autem voluptatum mollitia, doloremque quasi est, aperiam voluptate accusantium ipsam provident necessitatibus! Dolores aperiam accusantium earum tempora illum harum magni obcaecati reprehenderit est non enim officiis aut, numquam officia cum, vel alias, at repellendus ducimus. A fugiat perspiciatis aperiam aliquid, magni temporibus et! Tempora sit ullam cumque quas itaque officia sequi at dolorem eum accusamus! Consectetur tenetur eius rem magni aspernatur officia reiciendis sunt quos voluptatum est, esse neque recusandae dolores repudiandae doloremque sequi, quasi nihil tempore vel et enim quod debitis! Nisi eligendi explicabo nesciunt impedit repellendus sapiente illo ratione, maxime, quas corporis ab quae asperiores? Id ex, asperiores rem, quidem voluptas quos dolorem tempora atque molestias praesentium ipsa! Laborum optio quam atque. Nobis corrupti totam, praesentium tenetur fugiat iste eveniet sit excepturi mollitia explicabo dicta odit repellendus voluptatum voluptate, ad dolor quo? Suscipit necessitatibus facilis quo officiis iste nostrum, impedit ipsam ducimus ea vitae dolor, doloremque velit exercitationem a, odio ab veniam laboriosam quis magni aperiam labore! Saepe dolores nostrum eaque error laboriosam nam quasi inventore natus laborum eligendi quos reiciendis neque aspernatur, distinctio accusamus animi ducimus ratione dolor nesciunt dignissimos nihil officia recusandae veniam aut! Eius vero, quo facilis aliquam dolores fugiat sit magnam eligendi, id quisquam officia. Praesentium provident nemo dolor, voluptas sit nihil odit quibusdam ipsa molestias asperiores ut, iusto animi placeat? Ipsa dignissimos rem amet reiciendis sit deleniti voluptatem cupiditate vero cum, perferendis esse quam, illum excepturi maxime iure voluptates quibusdam nulla exercitationem, quasi totam aperiam! Recusandae voluptas perferendis praesentium temporibus aliquam nobis, quod similique amet. Repudiandae nam debitis blanditiis asperiores molestias a repellat ut cupiditate dignissimos soluta earum repellendus nemo aliquid, consectetur vero fugiat veritatis at nesciunt aliquam. Vero, aperiam mollitia illum repellendus corporis, eos ab sint natus recusandae maiores illo facere praesentium dolores. Nemo id veritatis possimus. Sunt, ea. Inventore autem aut quisquam aperiam officiis quo deserunt culpa alias error! Iure fugit fugiat voluptatum vitae! Sequi, a dolores hic maxime accusantium aliquam, sunt nam mollitia suscipit obcaecati enim quia. Consequatur, nihil. Dicta magnam doloremque laboriosam laborum inventore rerum sunt, rem natus minus nisi, necessitatibus labore? Ipsa rem doloremque saepe vitae molestias, veniam eveniet deserunt culpa, eius aut repellat optio quasi quo recusandae modi sapiente explicabo voluptatem? Nemo vitae molestiae nihil, dolorem dignissimos iure unde repudiandae quasi, assumenda sequi eligendi omnis ducimus beatae? Fuga aspernatur autem vero libero consequuntur sint sequi natus dolores a possimus eum, tempore quaerat porro numquam architecto et modi quam? Eos nobis voluptas debitis animi porro accusantium soluta. Perferendis alias dolor aspernatur debitis totam cum inventore modi ea animi, magnam sequi consequuntur ipsam quisquam illum amet veritatis ducimus porro non! Veritatis dolores, nobis inventore aperiam quo culpa? Quisquam at perspiciatis esse nam? Illum eveniet est corrupti beatae animi ipsum aut, praesentium ipsa deserunt explicabo commodi ab quod dolores! Molestiae officiis atque mollitia dolor provident deleniti sapiente reiciendis temporibus quis. Ducimus recusandae nostrum culpa nemo deserunt mollitia aliquam aut libero voluptates, debitis fugit repellat accusantium inventore assumenda est cum, hic sapiente quidem veritatis animi nesciunt reprehenderit, laboriosam eveniet! Veniam explicabo aliquid similique excepturi. Quam sint assumenda aliquam reprehenderit odit voluptatum necessitatibus modi incidunt totam, tenetur quasi provident molestiae? Expedita, quisquam minima! Temporibus, nihil libero. Dolorem, minima voluptas vitae, minus deserunt est aliquid praesentium dicta necessitatibus numquam magnam nisi laborum debitis ad. Et voluptates ipsam laborum veritatis explicabo maiores quos, ipsum accusamus id doloremque blanditiis possimus, voluptate odit cupiditate recusandae qui totam at architecto. Veniam neque cupiditate obcaecati doloribus facere amet odit, iste voluptatum corporis corrupti, quos, quod cum delectus. Minus quo dolorem commodi quam! Ratione sunt quisquam velit. Repudiandae animi at odio earum deserunt? Quia perspiciatis, eum nostrum amet distinctio tempore dicta illo ab voluptatem quae minus culpa quidem, molestias sapiente esse adipisci sit! Voluptate ea perferendis veritatis quod, odit a molestias blanditiis doloremque dolorum consequatur commodi delectus. Corrupti vero repudiandae veniam ex laudantium repellat culpa quae aliquam qui ducimus distinctio dolore nemo, sit temporibus! Alias, amet explicabo assumenda corrupti eum harum! Fugiat, qui, tempora quidem dolores atque iure laudantium officia fuga rem perspiciatis quia cumque ducimus assumenda quo numquam, est fugit cupiditate aut doloremque! Cupiditate, culpa dolorem! Ipsam, cum provident quasi magni aperiam excepturi sint cumque ex numquam minus nihil explicabo hic est omnis iste maxime? Molestiae quis nihil maxime distinctio repellendus in temporibus iure perspiciatis ea architecto commodi voluptas optio fuga consectetur voluptate, reprehenderit nam accusamus officia nulla magni officiis non ipsam culpa nemo. Doloribus quidem nostrum consequuntur quasi impedit expedita voluptates itaque, dignissimos, soluta quos fugiat reprehenderit accusamus obcaecati, debitis aperiam officia nemo tempora placeat facilis? Nobis eius aspernatur officiis tempore mollitia voluptatibus amet harum cumque ipsam? Ea inventore provident animi quam voluptatum dolor laborum eveniet exercitationem ullam minus corrupti corporis, accusantium, dolores nobis, cupiditate aut modi voluptas!</p>
//     </div>
//   );
// };

// export default ScrollZoomContainer;
// import { useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';

// const ScrollZoomContainer = () => {
//   const controls = useAnimation();

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
//       const zoomFactor = 0.5 - scrollY / 500;
//       const opacity = 1 + scrollY / 500;
//       controls.start({
//         scale: zoomFactor,
//         opacity: opacity,
//         lag: 0.5, speed: 1,
//       });
//       if (scrollY >= maxScroll - 100) {
//         controls.start({
//           opacity: 0,
//         });
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [controls]);

//   return (
//     <div>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quasi fugit quas eaque consectetur porro delectus libero cupiditate, sint eligendi, facere aliquid unde est sed aperiam autem atque, deleniti officiis rerum. Pariatur totam molestiae ratione tenetur, culpa officia omnis odio provident fuga excepturi dicta explicabo ducimus facere enim itaque aliquam officiis voluptate labore minima fugit voluptatum maiores. Iure minus minima amet? Dolore iure aliquam impedit aspernatur consequuntur fugiat quod nulla rerum. Reprehenderit sapiente cumque possimus odio fugiat amet ullam. Temporibus, eius possimus est consequatur dolore molestias repellat, dicta atque perspiciatis aspernatur id repudiandae corrupti natus laboriosam iste animi eos! Commodi ab debitis quam. Corrupti facilis ut quaerat incidunt culpa? Ipsam, quos reiciendis blanditiis ipsa sunt accusamus. Tenetur hic voluptate ad modi placeat laudantium explicabo, earum obcaecati ipsam ipsa sunt. Perferendis, recusandae voluptatum, unde enim non ipsa consequatur ipsam accusantium praesentium inventore illo soluta laudantium nulla eaque optio, dolore at quidem cupiditate! Illum necessitatibus debitis provident officia? Placeat maiores voluptates ab beatae fuga. Iste earum quisquam, officia ullam voluptatum est dolorum illum nisi inventore vel recusandae nulla architecto accusantium excepturi, amet iure fuga totam corrupti porro dignissimos a animi ipsa deserunt eius! Laudantium doloribus iure quia accusantium, repellat, provident reprehenderit sapiente alias ratione ab nulla fugit consectetur magni minima. Nesciunt a maiores eaque vero porro officiis adipisci ex reprehenderit expedita commodi natus, tenetur repudiandae consequuntur praesentium aut nobis. Ex, dolorem iusto deserunt id suscipit eaque alias vero nam maxime maiores, quis rerum a? Sunt obcaecati dolores blanditiis cumque nulla sequi dolorum possimus, officiis natus minima a, repudiandae quas eos. Dolorum in repellat sit a, eligendi sed assumenda totam quis placeat id tempora saepe et voluptates tempore quod! Eaque ratione, enim adipisci velit quae dolores dolore est modi veritatis amet hic. Tempora soluta veritatis at error deserunt, totam reprehenderit unde sapiente necessitatibus?</p>

//       {/* <div className="grid grid-cols-2 grid-rows-2 gap-4">
//         <div >
//           <motion.img
//             className='pt-5'
//             src='/logo.svg'
//             animate={controls}
//             transition={{ type: 'spring', stiffness: 100 }}
//             style={{
//               width: '100%',
//               // Adjust as needed
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               // Background color, adjust as needed
//             }}
//           >


//           </motion.img>
//         </div>
//         <div className="col-start-2 row-start-2" >
//           <motion.img
//             className='pt-5'
//             src='/logo.svg'
//             animate={controls}
//             transition={{ type: 'spring', stiffness: 100 }}
//             style={{
//               width: '100%',
//               // Adjust as needed
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               // Background color, adjust as needed
//             }}
//           >


//           </motion.img>
//         </div>
//       </div> */}


//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis accusamus, fugiat culpa rem expedita reiciendis ut vero neque esse optio, officia dolorem. Hic non, saepe eaque quos sequi fuga veniam perferendis debitis deserunt tempora quia, perspiciatis iure quas excepturi nesciunt error? Dicta non tempora quae et molestiae dignissimos, repellat eligendi est explicabo minus eaque perspiciatis exercitationem nisi laborum eveniet necessitatibus. Illum a assumenda consectetur, quam quibusdam dolore quisquam. Aliquid laborum repellendus ut incidunt a quas repellat dignissimos tempora animi laudantium rem ratione aut, velit nihil hic voluptate. Quos similique aperiam quaerat distinctio neque iusto voluptate quidem eveniet sit aspernatur soluta, unde omnis culpa doloremque ad cupiditate quasi enim accusamus ex? Ab error dolor laboriosam deleniti sunt dolorum ipsa libero debitis quisquam at est adipisci id voluptas quia, quae eius sit quo consequuntur aut, eaque quaerat. A impedit minus voluptatum maiores accusamus voluptatibus enim. Quod laborum doloremque vitae magni distinctio, in commodi ut consequatur error similique sint fuga tempore qui dignissimos tempora aliquid ab facilis veritatis animi, repellendus iste nemo dolores minus saepe. Eius ut placeat quasi quo, excepturi officiis vero. Amet, quod ex. Animi voluptates tempore voluptas delectus? Rerum, sit? Minima ut aperiam odio quae deserunt dignissimos, officia quibusdam quisquam odit consequatur perferendis voluptate eum id quidem ex quo ipsum animi. Incidunt iusto temporibus iste ab excepturi sed ex maiores exercitationem adipisci voluptas cupiditate aspernatur velit, asperiores reiciendis hic error rerum. Accusamus praesentium dolorem, error repudiandae aperiam dolorum totam veniam quos saepe mollitia dolore ut at impedit eligendi rem ullam aspernatur. Error sit quibusdam veniam. Provident porro accusantium excepturi dolorum asperiores. Eius deserunt reiciendis at totam explicabo sapiente velit accusantium illum, vero quo quisquam asperiores </p>

//       <p>dolore minima nobis impedit ut, saepe error animi exercitationem non pariatur beatae! Voluptatum, delectus amet. Non, expedita nulla quod laborum quas ea impedit repellat sint libero tempora ipsum magnam beatae magni recusandae quos, ratione ipsa, iste possimus voluptate blanditiis eaque voluptas harum cum! Ad culpa quos nesciunt doloribus molestiae ex libero soluta, sapiente magni corporis nam dolorem odio pariatur ratione voluptatem dicta saepe tempora aut quo! Accusantium dignissimos fugiat non vero quas minima sapiente architecto voluptatibus officiis eos sed cupiditate nobis iure id reprehenderit laudantium, aliquid quaerat quos dolor aliquam distinctio? Vel, in officia dolorum dolorem dolore cupiditate, fuga necessitatibus, quod minus est enim nostrum architecto cum amet recusandae aperiam obcaecati! Necessitatibus doloremque inventore maxime nulla aut autem beatae minus, expedita temporibus voluptatem aspernatur sequi, vero doloribus ex impedit distinctio suscipit ratione dolores tenetur, molestiae nihil deleniti quaerat omnis iusto. Nihil provident quae totam temporibus maiores quos incidunt, similique, excepturi deleniti facere rerum. Repudiandae totam sapiente rem eaque inventore dignissimos omnis, libero error, commodi quo rerum, explicabo quam. Repellat voluptatum, reprehenderit animi harum culpa optio debitis quas ratione nesciunt? Neque temporibus obcaecati odit debitis exercitationem quibusdam animi? Unde, consequuntur vel corrupti ab harum error reiciendis eaque? Corrupti sequi, dolor necessitatibus aliquam quam qui, hic fugiat, dolores possimus quidem eum nemo? Enim eaque, at aut quasi reprehenderit ullam voluptatum tempore optio repudiandae iusto rem nemo recusandae magnam obcaecati dolores eligendi libero expedita praesentium quisquam eum amet minus atque unde quia! Maiores, commodi iste autem qui placeat eos perferendis accusantium laudantium maxime nisi unde odio quia doloremque ipsa, eius nulla eum id, possimus minima quas quam distinctio. Alias perspiciatis recusandae esse numquam mollitia consequatur quos quae placeat, corrupti sequi facere ad iste sit dicta aliquam accusamus ipsa illo qui similique quas pariatur aperiam voluptatum atque! Distinctio laboriosam dolore esse iusto quo sunt nostrum earum, provident vel optio. Aliquid voluptas omnis culpa, distinctio fugiat eveniet facilis. Molestias repudiandae laborum praesentium odio nam illum deleniti accusantium iste quos, dolores tempora sapiente est fugit assumenda sit aliquam quasi. Odio dolorum architecto esse soluta dolores molestiae neque deleniti sit rerum magnam? Perspiciatis, rem, inventore eum dolor culpa minus, corporis nobis quia repudiandae cumque optio magni repellat! Cumque facere expedita esse minima commodi voluptatum laboriosam assumenda impedit omnis quisquam et est, dolorem delectus, quos autem blanditiis sed officiis nobis enim ratione. Consequatur laborum voluptas harum magnam unde neque praesentium nihil doloribus labore aspernatur assumenda possimus, nam quas inventore non nisi laboriosam quisquam quidem. Ab consequatur, odit aliquam et officiis excepturi officia cumque assumenda incidunt ipsam numquam, voluptatum ut dignissimos obcaecati at quasi mollitia iusto soluta sit adipisci perspiciatis. Vel, repellat explicabo! Animi asperiores excepturi eos minus suscipit repudiandae illum sed eligendi, architecto esse nisi aliquam, dignissimos doloribus ea aut, aliquid laborum rem consequatur quisquam tempore iusto. Eligendi, velit illo debitis a quos dignissimos tempore est fugiat cumque neque beatae fuga, ex incidunt similique consequuntur tempora, id assumenda corrupti voluptatum soluta at. Itaque obcaecati pariatur velit voluptates perspiciatis veniam accusamus, nulla quidem voluptatibus et. Dolorem dolorum magni labore laboriosam ipsam iusto aliquam quae debitis odit ut quaerat quas nulla, laudantium, asperiores expedita! Cum quis amet dolorem quidem explicabo vero accusamus at, repellendus tenetur tempore quisquam cupiditate pariatur! Vel aliquam adipisci voluptatibus nisi cupiditate quibusdam, dolorum labore, aliquid quis quam fuga nihil! Doloribus suscipit distinctio maiores sunt tenetur repellat laboriosam autem eos molestias, ad excepturi, ullam vel accusantium quos temporibus labore adipisci rem impedit nihil. Facilis nulla odio, sequi cupiditate, qui repellat ullam quas quia ad accusamus, est doloremque corrupti earum consequuntur officiis optio? Assumenda ex labore quibusdam, quo vitae non aut, nisi incidunt dolorum vero, placeat fugiat quasi sunt perspiciatis magni totam quod quidem voluptates! Distinctio illum quaerat dignissimos cumque reiciendis et ex at dolor repudiandae. Sit, id! Ab at, eligendi ratione adipisci ad recusandae facilis dolores dolor nemo, consequatur voluptate quaerat animi quisquam laudantium deserunt vitae fuga accusamus sunt laboriosam incidunt! Molestiae praesentium libero illum aspernatur eligendi eaque aut at voluptate magnam sint animi mollitia odit molestias ipsa excepturi pariatur qui nihil doloribus, debitis delectus. Adipisci sunt earum, aut illum praesentium molestiae impedit nisi quis consequatur est rerum explicabo. Cum temporibus eaque consequatur? Quasi nam natus laboriosam officia sit ullam tempora consectetur assumenda nostrum, explicabo architecto! Minus perferendis ab nulla dolore, non fugiat corporis magni aperiam, voluptatum culpa ipsa quisquam laboriosam quae praesentium. Voluptates magnam quas minus nesciunt, corrupti illo deleniti mollitia.</p>
//       <motion.img
//             className='pt-5'
//             src='/logo.svg'
//             animate={controls}
//             transition={{ type: 'spring', stiffness: 100 }}
//             style={{
//               width: '100%',
//               // Adjust as needed
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               // Background color, adjust as needed
//             }}
//           >


//           </motion.img>
//     </div>
//   );
// };
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { gsap } from 'gsap/all';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollZoomContainer = () => {
  // const scrollContainerRef = useRef(null);

  // useEffect(() => {
  //   const scrollContainer = scrollContainerRef.current;

  //   // Initialize GSAP timeline
  //   const tl = gsap.timeline();

  //   // Add animations to the timeline
  //   tl.to('.zoom-container', {
  //     scale: 0.5 - scrollContainer.scrollTop / 500,
  //     opacity: 1 + scrollContainer.scrollTop / 500,
  //     ease: 'power4.out',
  //   });

  //   // Optionally, add more animations to the timeline

  //   // Trigger the timeline on scroll
  //   tl.progress(scrollContainer.scrollTop / (scrollContainer.scrollHeight - scrollContainer.clientHeight));

  //   // Control animation progress based on scroll position within the container
  //   const handleScroll = () => {
  //     tl.progress(scrollContainer.scrollTop / (scrollContainer.scrollHeight - scrollContainer.clientHeight));
  //   };

  //   // Add scroll event listener to the container
  //   scrollContainer.addEventListener('scroll', handleScroll);

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     scrollContainer.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

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
      start: 'top 40%',
      end: 'bottom top',
      markers: true,
      smooth: 5, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1,
      scrub: true,
      onEnter: () => {
        tl.to('.zoom-container', {
          scale: 0.5 + scrollY / 500,
          opacity: 1 - scrollY / 500,
          ease: "steps(24)",

        });

      },
      onLeaveBack: () => {
        tl.to('.zoom-container', {
          scale: 1 - scrollY / 500,
          opacity: 1 + scrollY / 500,
          ease: "steps(24)",
        });
      },
    });
  }, []);

  return (
    <div>

      {/* Your content */}
      <div>
        <p>
          Scroll down to see the zoom effect
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, fugit. Fugiat repellendus cupiditate ipsa fuga corporis nihil. Id dolores sunt adipisci, tempora molestias magnam illum. Est cumque sint autem laudantium qui repellat in explicabo consequuntur velit, ratione exercitationem nesciunt, tempore accusamus laboriosam neque sequi quibusdam a. Atque, perferendis? Doloremque aut repellat est totam pariatur quisquam delectus quibusdam reprehenderit facilis illo tempore sed dolorum accusantium omnis enim alias sunt nihil quaerat adipisci, magni magnam ipsum a quos? Eum debitis quia dolor itaque, distinctio ratione. Deserunt cumque laudantium ad voluptates earum voluptatem tenetur sapiente accusamus! Accusamus soluta voluptatum, distinctio inventore veniam quia necessitatibus molestias debitis nostrum numquam possimus sunt expedita cumque blanditiis? Distinctio tempore explicabo dolore libero provident in, eligendi voluptates nulla corporis nisi maxime ullam illum praesentium soluta suscipit nesciunt obcaecati alias! Fugit ut reiciendis tempore non molestias optio, temporibus est hic delectus atque explicabo sit itaque animi, soluta pariatur unde dicta provident? Corrupti voluptate ex aspernatur rerum blanditiis non. Assumenda dicta et nemo nam adipisci, cupiditate esse odio sequi, dolores saepe tenetur inventore vitae eum soluta quam nesciunt veniam nulla? Voluptas voluptatum blanditiis ipsam, in commodi quod ea dolorem a animi? Fugit quidem labore excepturi. Recusandae ex tenetur possimus? Veniam, explicabo voluptates, fugit praesentium itaque dolores est iste a neque aliquid et officiis magnam consectetur ad voluptas enim. Qui accusantium eaque iusto dolorum libero reprehenderit eum ratione soluta quis dolorem, commodi est voluptatem repellat quaerat, vitae consectetur culpa nostrum fugit odio. Nostrum facere iste dignissimos sit, molestiae animi doloribus illo pariatur. Eligendi enim quam fugit minus esse, ex ipsa, beatae architecto dolore, aliquam autem aspernatur? Delectus, laboriosam soluta reprehenderit tempora non veniam modi et mollitia tenetur culpa quaerat, voluptatem voluptatum architecto libero ratione molestiae necessitatibus ad porro? Recusandae error enim vitae eius quasi doloremque totam provident non explicabo, aliquid cupiditate consequuntur molestiae asperiores neque. Alias cumque est quas laudantium odit aliquam repudiandae excepturi aperiam reiciendis officia odio voluptates obcaecati fugit voluptatem, vero cupiditate hic nisi, voluptatibus amet modi. Facilis praesentium, corrupti maiores aliquam repellendus explicabo at accusamus provident molestias velit hic sequi dolor animi voluptates consequuntur ad, voluptatum magnam nobis. Qui voluptatem fugiat veritatis quaerat quasi suscipit vitae, repudiandae quisquam ratione obcaecati commodi tempore pariatur sapiente porro sequi exercitationem maiores dolorum! Iusto ea excepturi, nihil obcaecati, quae aliquid sapiente quod eius veritatis alias tempore? Unde suscipit veniam nobis inventore dignissimos provident doloremque distinctio tempore a repellendus accusantium eos culpa corrupti beatae, iure fugiat voluptas ducimus repudiandae maxime architecto. Id cum nisi iure odio fugit, eligendi assumenda pariatur ea quae numquam tenetur facere atque neque magnam reprehenderit in omnis eaque illo a porro! Voluptatum, facilis aperiam saepe ea magni doloribus itaque assumenda, dolore odit labore nulla repellat corporis voluptas, inventore recusandae laboriosam tempore cumque alias obcaecati corrupti ullam. Consequatur facilis fugiat repudiandae sequi possimus totam beatae repellendus voluptatum unde veritatis deserunt dicta itaque nesciunt at explicabo saepe repellat soluta molestias sit, quos, autem qui? Non suscipit voluptatibus voluptatum? Obcaecati voluptatum error, eius nulla possimus est adipisci quibusdam cum iure unde aperiam minus cupiditate, a explicabo magni beatae placeat vitae enim rerum tempore necessitatibus suscipit eos, nisi commodi. Expedita reiciendis, fugit pariatur illo illum mollitia provident veritatis velit voluptas eum placeat autem officiis a nisi accusamus sequi porro commodi delectus nulla, eos corrupti! Reprehenderit quam doloribus ea hic explicabo quae eos blanditiis perspiciatis mollitia? Odit, similique? Quae modi nisi officiis nostrum neque, quaerat animi quam tempora voluptatem vero veniam laboriosam voluptate reiciendis earum ipsum deleniti voluptates velit dolorum atque recusandae temporibus impedit repellendus! Aliquam consequatur esse perspiciatis corporis nam. Nesciunt ut maiores enim voluptatem ipsum. Cupiditate, aspernatur modi sequi tempore odio corporis et sunt dicta sit deleniti in odit excepturi, at iure ut incidunt quia veniam minus, accusantium iusto! Beatae sapiente numquam eos accusantium quis delectus culpa, dicta inventore cupiditate eius quibusdam perferendis, deleniti dolore voluptatibus nihil unde porro veniam? Eius et sed recusandae ipsum consequuntur rerum delectus tempora nulla labore temporibus blanditiis mollitia, alias ipsam, saepe a maxime enim. Id optio repellendus asperiores ab ea obcaecati maxime ducimus placeat blanditiis, culpa ipsum, fugit quam atque eius. Blanditiis, reiciendis! Ullam quisquam tempora assumenda asperiores a, ut earum. Saepe tempora obcaecati tenetur inventore. Molestias eum error commodi maiores nihil ut quo assumenda labore. Pariatur quae porro suscipit, quas quos tempore aliquam culpa nobis, placeat alias voluptate voluptatem sed? Mollitia nam ducimus incidunt quod excepturi recusandae, rerum dolorum minima libero facilis et perferendis doloribus odio, est culpa porro illo quia eius, hic doloremque nobis autem similique? Nostrum quo ratione magni voluptatem cum et, autem aliquam mollitia eveniet accusamus deserunt ullam nobis distinctio error voluptatum possimus quidem repudiandae sapiente quia perspiciatis vitae esse? Incidunt numquam facilis rerum similique excepturi aspernatur voluptatem soluta reprehenderit nemo est esse perspiciatis voluptas at, molestias maiores recusandae veritatis ullam voluptatum sit itaque repellendus vero corrupti rem illum! Modi, fugiat repudiandae! Obcaecati similique quia libero earum id animi molestias dicta est quaerat nostrum. Natus id at blanditiis fuga aliquid reiciendis, itaque repellendus laboriosam atque, quis deleniti. Libero dolor tempore veniam labore. Animi facere voluptates voluptatem et. Minus quam fugiat vel tempore. Ipsa iusto, ad quod officia id numquam possimus. Earum beatae praesentium, tempore quibusdam dicta, odio in voluptas nostrum sint maiores aliquid accusantium ratione vero atque. Iste qui maxime beatae corrupti, labore a. Non sed, numquam corrupti sit doloremque expedita similique a officia esse alias suscipit cumque. Tenetur vitae accusamus eaque qui aut, ea accusantium nesciunt odit minus aperiam illum? Ab, culpa vitae sequi voluptas saepe libero alias exercitationem magni! Incidunt ratione quo, magni officiis maiores molestiae minima, eos consequuntur non, distinctio tempora consectetur ducimus. Vel magni illo sed laborum repellat rem reprehenderit recusandae dolorum aspernatur hic! Ad necessitatibus error vitae ullam cupiditate nihil, saepe et explicabo rem aperiam cum, ratione iusto dolore dignissimos excepturi minima nemo. Est, reprehenderit vero. Nulla unde, laborum, maiores rerum, laboriosam in amet reiciendis suscipit exercitationem quae perferendis. Fuga, voluptates esse! Sit aperiam ut modi maiores quis quisquam, velit illo id magni, quos, esse laudantium deserunt natus earum a? Recusandae error dolorum, autem fuga tenetur eligendi?
        </p>
      </div>
      {/* Image with zoom effect */}

      <div className="box grid grid-cols-2 grid-rows-1 gap-4">
        <div >
          <motion.img
            className='pt-5 zoom-container'
            src='/logo.svg'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </div>
        <div >
          <motion.img
            className='pt-5 zoom-container'
            src='/logo.svg'
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem eveniet, quidem accusantium nostrum saepe unde consequuntur culpa soluta fugiat magnam tenetur explicabo fugit, in illum dignissimos quas accusamus nesciunt, facilis eligendi? Laboriosam, veritatis est? Enim rerum pariatur tenetur libero corrupti. Officia qui dolores, at eaque tenetur quaerat eos, quia dignissimos atque dolorum voluptate? Totam dolor rerum temporibus necessitatibus blanditiis dicta illo accusamus sit a at nihil eum voluptatum minima, omnis aliquam impedit voluptas, ipsa sapiente, laudantium nostrum est. Cupiditate laudantium necessitatibus exercitationem corporis modi. Vel tempora harum est voluptate blanditiis. Eius iusto omnis ex minima, fuga vero dicta consectetur corrupti deleniti, iure assumenda, blanditiis neque id a esse tempora debitis. Veritatis in impedit neque minus, nam nostrum modi dolorum enim qui dolores explicabo voluptate incidunt repellendus rerum autem culpa! Soluta obcaecati ad eveniet sed consectetur totam ipsam facilis voluptatem quo sunt. At dolorem minus eum animi, accusamus cupiditate. Suscipit, nisi nihil quasi sint eum deleniti autem laborum doloremque tempora minus quisquam aliquam, id quo eveniet commodi. Facilis accusantium voluptatum odio ut dignissimos nam quidem earum, necessitatibus ipsam deleniti nemo incidunt blanditiis saepe quo, atque ullam beatae similique! Odio cumque voluptas deserunt error perspiciatis praesentium illo eius, iusto iure. Esse quidem nostrum ducimus pariatur dignissimos. Blanditiis cupiditate dignissimos excepturi asperiores animi ullam voluptatum enim, provident quo magnam alias eveniet, nostrum fugiat error quia exercitationem illo itaque ab labore porro explicabo nihil delectus tempore! Enim minima exercitationem, doloremque necessitatibus excepturi quaerat placeat temporibus dolores totam voluptas numquam deleniti? A recusandae, dolorem, vitae harum tempora tempore quaerat cum aliquam vero doloremque neque. Consectetur ea soluta illo, officiis adipisci, nemo ipsa perferendis necessitatibus molestias nobis eos quidem, quis voluptates! Aliquam rem facilis, unde ipsam minima libero beatae, cupiditate omnis commodi tempora delectus officia et velit magnam! Voluptates molestias perspiciatis est fuga culpa sed dolore non consectetur accusamus aut suscipit rerum dolores corporis cum, vitae obcaecati maiores impedit id voluptatibus. Deserunt qui quis quo est excepturi accusantium dicta dolorum quidem enim dolore blanditiis iste, doloribus, nostrum animi ipsa adipisci? Animi tempore dolorem impedit facere? Eius veritatis eligendi tempora exercitationem pariatur, nostrum rem inventore vitae necessitatibus sit excepturi! Consequatur odio in voluptates aperiam aut impedit minima aliquid excepturi eius iste. Illo corrupti voluptatem cupiditate nesciunt voluptate officia! Recusandae, eligendi illo sit quod ipsam doloremque sunt iste! Inventore maiores dolores beatae quae laudantium quasi omnis debitis sunt? Iusto adipisci delectus eveniet dignissimos culpa doloremque, sint dolorum accusamus, voluptate necessitatibus eligendi. Excepturi distinctio ad, voluptatem amet maiores perferendis harum veritatis optio a minus cupiditate quis perspiciatis vel eos, sit aspernatur similique beatae officia ullam quas blanditiis. Earum iure consequuntur at vel nisi consequatur, corporis pariatur ea veritatis tempore suscipit fuga sed maxime! Ullam voluptatum perspiciatis adipisci veritatis atque. Nulla, maxime inventore ab quo velit atque unde, id accusantium autem sunt fugiat repellendus voluptates quia nostrum ipsum animi. Earum, eaque magni laboriosam est quam accusamus voluptas dolor itaque dolorum doloribus soluta voluptate dolores enim odio corporis saepe magnam? Ea doloremque excepturi quos! Necessitatibus, magni eius? Dignissimos fugit rerum enim!
        </p>
      </div>
    </div>
  );
};

export default ScrollZoomContainer;
