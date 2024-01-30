"use client"
import React, { useEffect } from 'react'
import Styles from '../../css/home.module.css'
import { gsap } from "gsap";

import { ScrollTrigger, Observer } from "gsap/all";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { EaselPlugin } from "gsap-trial/EaselPlugin";


const page = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Observer, EaselPlugin);





  useEffect(() => {
    gsap.to('.element', {
      duration: 2,
      autoAlpha: 0,
    });
    gsap.to('.element', { duration: 2, autoAlpha: 1, delay: 2 });
    gsap.to(".box", {
      duration: 5,
      ease: "elastic",
      y: -250
    });

    let tl = gsap.timeline({ repeat: 2, repeatDelay: 1 });
    tl.fromTo("#purple", { x: 0, opacity: 0 }, { x: 200, duration: 2, ease: "elastic.out(1,0.3)", opacity: 0.8, height:200, width:200, repeat:Infinity });
    tl.to("#blue", { y: 50, duration: 1 });
    tl.to(".box", { opacity: 0.3, duration: 1 });

    let time = gsap.timeline({
      scrollTrigger: {
        smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true, // looks for data-speed and data-lag attributes on elements
        smoothTouch: 0.1,
        trigger: ".scroll",
        start: "top 30%",
        end: "bottom top",
        markers: true,
        opacity: 0,
      },
    });

    time.fromTo(".croll", { x: 0, opacity: 0 }, { x: 200, duration: 2, ease: "elastic.out(1,0.3)", opacity: 0.8 });
    time.fromTo(".roll", { x: 0, opacity: 0 }, { x: 200, duration: 2, ease: "elastic.out(1,0.3)", opacity: 0.8 });
    // insert at the START of the  previous animation
    let til = gsap.timeline({});
    // til.to("#id", {x: 100, duration: 1});
    // til.to("#id", {y: 50, duration: 1});
    // til.to("#id", {opacity: 0, duration: 1});
    Observer.create({
      target: window, // can be any element (selector text is fine)
      type: "wheel,touch", // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")
      onUp: () => previous(),
      onDown: () => next(),
    });
    const previous = () => {
      til.fromTo('.ft', { y: 300, }, { y: 0, opacity: 1 });
      til.fromTo('.tf', { y: 300, }, { y: 0, opacity: 1 });
      til.fromTo('.logo', { y: 300, }, { y: 0 });
    };
    const next = () => {
      til.to(".logo", {
        ease: "elastic",
        y: -2000
      });
      til.fromTo('.tf', { y: 300, }, { y: -300 })
    };

  }, [])

  return (
    <div className={`${Styles.body}`}>
      <div className={`${Styles.color}`}>Hi</div>
      <div className={`${Styles.head} text-5xl font-bold`}>
        Wait a bit, then jump right in.
      </div>
      <div className="window  relative">
        <img className="logo absolute top-0 " src="https://source.unsplash.com/400x200/?code" alt="" />
        <img className="tf opacity-0 absolute top-0" src="https://source.unsplash.com/400x200/?technology" alt="" />
        <img className="ft opacity-0 absolute top-0" src="https://source.unsplash.com/400x200/?computer" alt="" />
      </div>
      <div className=" h-screen bg-red-500">
        <div className={`box h-20 w-20 bg-green-500`}></div>
        <div className={`class rounded-full h-20 w-20 bg-green-500`}></div>
        <div className={`class rounded-full h-20 w-20 bg-red-200`}></div>
        <div className={`h-20 w-20 bg-gray-500`} id='purple'></div>
        <div className={`h-20 w-20 bg-blue-500`} id='blue'></div>
      </div>
      <div className="india"></div>
      <div className={`scroll `}>
        <div className={`croll rounded-full h-20 w-20 bg-pink-200`}></div>
        <div className={`roll rounded-full h-20 w-20 bg-pink-800`}></div>
      </div>
      <div className="element">Lorem ipsum dolor sit amet.</div>
      <h1 className='border sticky bottom-0 -z-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat omnis rem sint assumenda, illum maiores blanditiis eius rerum dolore tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit facere earum, aperiam delectus possimus. Tempore numquam quidem aut id laboriosam possimus fugiat placeat esse, eos unde autem dignissimos dolorum. Vel aliquid ipsum nam non dolorem eaque maxime commodi ex pariatur totam sunt sapiente, dolores illum dolorum, nihil adipisci? Distinctio placeat tempore neque, et enim blanditiis nesciunt culpa consequatur cum cumque vero magni atque voluptate id assumenda mollitia fugiat? Quae ratione quam quo? Vitae aspernatur maxime velit sint nihil autem laborum eius qui quisquam iste eligendi debitis, nostrum ullam modi, fugiat quia asperiores quibusdam et saepe libero similique nam voluptatibus deleniti iure? Aut ex laudantium odio inventore veritatis? Sequi amet cum dolor quia, quos molestiae consectetur velit labore laudantium temporibus provident sed aliquid enim. Explicabo corrupti dignissimos aspernatur possimus sit quaerat et assumenda vel quasi hic numquam velit quam eveniet tenetur dolor voluptatem soluta autem, quia, laboriosam optio! Atque quam doloremque quas consequatur nesciunt. Pariatur, delectus sunt. Minima rem illum mollitia laborum natus harum quidem, optio facilis, dolore distinctio sunt asperiores! Amet veniam placeat, earum aut illo aperiam magni natus nesciunt blanditiis veritatis, molestiae consequuntur voluptatum. Quae facilis quod dolor eaque. Corrupti obcaecati vero, expedita rerum blanditiis ratione vel voluptate, eos ex repudiandae mollitia! Nesciunt, doloribus aliquam? Adipisci sequi repellendus eos repellat at! Est iure deleniti sequi quasi eum quam, unde aspernatur maxime necessitatibus recusandae quo velit explicabo? Fugit, qui ipsum culpa hic, eligendi asperiores expedita deserunt assumenda nobis labore, facilis corporis perspiciatis laboriosam nisi accusantium officia similique porro. Amet quos nemo error quas hic, eos illo qui nisi rem minus ipsa perferendis ex unde! Impedit sint beatae fuga! Officia doloribus voluptatibus eveniet alias rerum assumenda quae ad vel! Blanditiis ipsam nobis, officiis, alias necessitatibus voluptate nihil dicta, error illum dolor sapiente voluptatibus odio possimus sequi quaerat voluptatum eligendi molestiae nulla. Error perspiciatis consequatur, laborum fugiat dolorem ipsa explicabo aspernatur ex maiores ducimus omnis rem eligendi qui odio consectetur, quasi corrupti? Dolor autem recusandae ipsum optio veniam quisquam dolores cupiditate explicabo alias at ipsa nam, porro rem voluptatem sed! Ut eius veniam fugit error! Enim voluptatum quasi odio sunt explicabo! Error cupiditate, aut nulla corporis eos fuga quod ipsum, magni provident unde ut iure suscipit nobis laudantium voluptate fugit voluptatem. Provident corporis illum aliquam sint explicabo. Voluptates sapiente asperiores quisquam. Nam dolor, veritatis nesciunt modi libero, dolorem corporis aliquid quia eos incidunt praesentium doloribus voluptate eius debitis placeat quidem facilis, maiores iusto. Sit porro culpa nemo excepturi delectus neque ipsa officia iure consequatur odit. Quis, quidem aliquam excepturi porro adipisci optio quasi sint aut, id beatae obcaecati nobis consectetur voluptatum sit nostrum? Dolorem, atque, non nihil alias cupiditate, sapiente soluta qui optio totam nesciunt laboriosam deleniti omnis! Eaque quod cumque praesentium modi impedit aut quis placeat similique magnam beatae nesciunt fugiat quos eligendi, eius accusantium at harum blanditiis optio obcaecati accusamus ab? Esse eos voluptatum quaerat excepturi provident deleniti, odio doloribus quod facere, porro modi mollitia reprehenderit harum tempore aspernatur. Excepturi quidem similique, ab optio laboriosam veniam alias corrupti eius.</h1>


    </div>
  )
}

export default page

