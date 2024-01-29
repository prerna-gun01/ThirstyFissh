"use client"
import React, { useEffect } from 'react';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { LuPencilRuler } from "react-icons/lu";
import { FaGears } from "react-icons/fa6";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay"
import Navbar from './components/Navbar';

const page = () => {

    return (
        <div>
            <Navbar/>
            {/* carousel */}
            <div className="flex justify-center ">

                <div className="full-width-carousel-container container mx-auto px-5 py-5">
                    <Carousel plugins={[Autoplay({ delay: 4000, }),]}>
                        <CarouselContent className="h-full">
                            <CarouselItem><img src="https://source.unsplash.com/1400x400/?growth" alt="" className='w-full' /></CarouselItem>
                            <CarouselItem><img src="https://source.unsplash.com/1400x400/?trust" alt="" className='w-full' /></CarouselItem>
                            <CarouselItem><img src="https://source.unsplash.com/1400x400/?computer" alt="" className='w-full' /></CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

            </div>
            {/* who we are */}
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src="https://s3-alpha-sig.figma.com/img/437c/f2d6/bbc3bbfc2227eb2c265186742afbdeec?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MuMK-yg~fh9PYH5jKW4Z2q9PX0br3nRvlJBnw39ikJML32GPd6Bfqy1oKiKV8~MElicbEqyINHQhbQLOdn0QPIMy4uz3cRTMmW8fovD1wR6fqwfgfOz6mlSLY8h7ORn5QZ7VTwKYQX2~miNtRyEQT464uQ5RZl7fuwOVv8YtEZ4DBHlGz5kapO9JlJ27cAF-oodjfoNMqGJwfTSDnAp8T0yP7Bh27DDOd1iKCMYD8GhGZ2MqL2HUuwKtug1tAOdL8nb3q0gwOXWNxfhpHYPl4ep2JbyNaWKCkDYKL~sd8bPiS16PbyhJNEVIXoLT7N9Z5-Qasi0b-YGehiKT5YpzzA__" />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">WHO WE ARE</h1>
                        <p class="mb-8 leading-relaxed">We are THIRSTY FISHH- A full service advertising agency focused on story telling and experiences for result oriented strategic marketing campaigns. We are known for engaging both traditional & digital natives & converting clicks leads.</p>
                        <div class="flex w-full md:justify-start justify-center items-end">
                            <button class="inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded text-lg">Learn More</button>
                        </div>

                    </div>
                </div>
            </section>
            {/* our services */}
            <section class="text-gray-600 body-font relative">

                <div class="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div class="lg:w-3/5 md:w-2/3 md:pr-10 md:py-6">
                        <div className="flex relative pb-12">
                            <div class="flex-grow pl-4">
                                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Our Services</h1>
                                <p class="leading-relaxed">Use our business strategies to achieve your business goals. We understand that your time is limited doing other things, so let us grow your business online for you.</p>
                            </div>
                        </div>
                        <div class="flex relative pb-12">

                            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                            </div>

                            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-sky-500 inline-flex items-center justify-center text-white relative z-10">
                              
                                <LuPencilRuler />
                            </div>

                            <div class="flex-grow pl-4">
                                <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Business Strategy</h2>
                                <p class="leading-relaxed">Let us facilitate a busniess strategy workshop for your business and together we’ll develop a action plan.</p>
                            </div>
                        </div>
                        <div class="flex relative pb-12">

                            
                            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-sky-500 inline-flex items-center justify-center text-white relative z-10">
                                
                                <FaGears />
                            </div>

                            <div class="flex-grow pl-4">
                                <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">Web & Marketing</h2>
                                <p class="leading-relaxed">We offer a strategic approach to your brand, website, social media, Google search, PR and even lead generation. We’ll even coordinate multiple programs at the same time and develop a new marketing strategy that goes above, through or below the line, whilst delivering a constant stream of leads for your business.</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/5 md:w-1/3  object-cover object-center rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative  ">
                        <img className="absolute inset-0 w-full h-full" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://s3-alpha-sig.figma.com/img/72bc/162b/5d623d5546eb9aceb1bb018bd762e09a?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lhGgQGArwlUbXvn-f9rLTZEdCHSG7~pzVnAnNbRNNtSJrqviTmMDp03ngWSrlHqFnXMtg0FpO1NlyOHoOTwkE97lJwdH30uKA0OXNv9KqQ~J1JV8vMyMdpOsDWu6gy9WeMnJrwBsO~Mkdq1VKo1a80Tzn8TrbZUz0LRyM1-Aj9w15ShNgJ0DGLxisXiDlKzOLdIs6tNi4voRdjmHIm8AHeYZTm9USe3ysVDv8i~90qMfrkU1ioV3iKnuzIMvy~H6XHMxSVGZGUkrK0KT-CvencloomYFg757mHqKjjtAT-jSqGbhFoC~jxiPm2kAwjNfryS4zG1H-pfmOpW7VQioSw__" style={{
                            filter: 'grayscale(0) contrast(1.2) opacity(0.8)',
                        }} />
                        <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md ">
                            <div class=" px-6">
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-lg">We Want Your Business To Succeed</h2>
                                <p class="mt-1">At Thirsty Fishh, our main goal is to build a brand presence that drives business growth through various channels. And our small business brand strategists will be with you throughout your business journey.</p>
                            </div>
                           
                        </div>
                    </div>

                </div>
            </section>

            {/* tabs */}
            <div>
                <Tabs defaultValue="all" className="container px-5 py-5 mx-auto rounded-xl">
                    <TabsList className="grid grid-cols-6 ">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="brand">Brand Development</TabsTrigger>
                        <TabsTrigger value="logos">Logos And Branding</TabsTrigger>
                        <TabsTrigger value="website">Websites</TabsTrigger>
                        <TabsTrigger value="market">Marketing</TabsTrigger>
                        <TabsTrigger value="print">Print Media</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all">
                        <Card className="">

                            <CardContent className="space-y-2 pt-6">
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
                            </CardContent>

                        </Card>



                    </TabsContent>

                    <TabsContent value="brand" className="w-full">
                        <Card className="w-full">

                            <CardContent className="space-y-2 pt-6">
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
                            </CardContent>

                        </Card>
                    </TabsContent>
                    <TabsContent value="logos">
                        <Card className="w-full">

                            <CardContent className="space-y-2 pt-6">
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
                            </CardContent>

                        </Card>
                    </TabsContent>

                    <TabsContent value="website" className="w-full">
                        <Card className="w-full">

                            <CardContent className="space-y-2 pt-6">
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
                            </CardContent>

                        </Card>
                    </TabsContent>
                    <TabsContent value="market">
                        <Card className="w-full">

                            <CardContent className="space-y-2 pt-6">
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
                            </CardContent>

                        </Card>
                    </TabsContent>

                    <TabsContent value="print" className="w-full">
                        <Card className="w-full">

                            <CardContent className="space-y-2 pt-6">
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
                            </CardContent>

                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
            {/* our clients */}
            <div className="">
                <Carousel className="w-full container px-5 py-5 mx-auto" plugins={[Autoplay({ delay: 2000, }),]}>
                    <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">OUR CLIENTS</h1>
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
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            {/* footer */}
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




        </div >
    )
}

export default page

