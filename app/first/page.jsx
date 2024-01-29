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

"use client"
import "../../css/module.home.css";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";
import { Object3D } from 'three';
const color = "#111111";

const Icosahedron = () => (
  <mesh rotation-x={0.35}>
    <icosahedronGeometry args={[1, 0]} />
    <meshBasicMaterial wireframe color={color} />
  </mesh>
);

const Star = ({ p }) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const distance = mix(2, 3.5, Math.random());
    const yAngle = mix(
      degreesToRadians(80),
      degreesToRadians(100),
      Math.random()
    );
    const xAngle = degreesToRadians(360) * p;
    ref.current.position.setFromSphericalCoords(distance, yAngle, xAngle);
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.05, 0.05, 0.05]} />
      <meshBasicMaterial wireframe color={color} />
    </mesh>
  );
};

function Scene({ numStars = 100 }) {
  const gl = useThree((state) => state.gl);
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [0.001, degreesToRadians(180)]
  );
  const distance = useTransform(scrollYProgress, [0, 1], [10, 3]);
  const time = useTime();

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      time.get() * 0.0005
    );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  useLayoutEffect(() => gl.setPixelRatio(0.3));

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star p={progress(0, numStars, i)} />);
  }

  return (
    <>
      <Icosahedron />
      {stars}
    </>
  );
}

export default function App() {
  return (
    <div className="h-52 w-52">
    <div className="container">
      <Canvas gl={{ antialias: false }}>
        <Scene />
      </Canvas>
    </div>
    </div>
  );
}



