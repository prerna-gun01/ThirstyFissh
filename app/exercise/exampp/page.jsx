"use client"
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
// const texts = ['Text for image 1', 'Text for image 2', 'Text for image 3'];

// const MyComponent = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleClick = () => {
//     // Increment index or loop back to the first image if at the end
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   return (
//     <div>
//       <motion.img
//         src={`/images/${images[currentIndex]}`}
//         alt={`Image ${currentIndex + 1}`}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       />
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1, duration: 0.5 }}
//       >
//         {texts[currentIndex]}
//       </motion.p>
//       <button onClick={handleClick}>Next Image</button>
//     </div>
//   );
// };

// export default MyComponent;

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const images = ['logo.svg', 'logo.svg', 'image3.jpg'];
// const texts = ['Text for image 1'];

// const MyComponent = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handleClick = () => {
//         // Increment index or loop back to the first image if at the end
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     };

//     return (
//         <div>

//             <AnimatePresence >
//                 <div className="grid grid-cols-3 grid-rows-1 gap-0">
//                     <div className=" col-span-2">
//                         <motion.img
//                             key={currentIndex}
//                             src={`/${images[currentIndex]}`}
//                             alt={`Image ${currentIndex + 1}`}
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             exit={{ opacity: 0 }}
//                             transition={{ duration: 0.5 }}
//                         />
//                     </div>
//                     <div className="  col-start-3 bg-gray-700"><motion.p
//                         key={currentIndex}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         {texts[currentIndex]}
//                     </motion.p></div>
//                 </div>


//             </AnimatePresence>
//             <button onClick={handleClick}>Next Image</button>
//             <img className="w-[507px] h-[479px]" src="https://via.placeholder.com/507x479" />
//         </div>
//     );
// };

// export default MyComponent;

import Styles from '../../../css/home.module.css'
import * as React from "react";
// import { motion } from "framer-motion";
// import "./styles.css";
import { motion, useMotionValue, useTransform, animate, Variants } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, Observer } from "gsap/all";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { EaselPlugin } from "gsap-trial/EaselPlugin";

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const page = () => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, Observer, EaselPlugin);
    useEffect(() => {
        let time = gsap.timeline({
            scrollTrigger: {
                smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
                effects: true, // looks for data-speed and data-lag attributes on elements
                smoothTouch: 0.5,
                trigger: ".scroll",
                start: "top 50%",
                end: "top 40%",
                markers: true,
                opacity: 0.3,
                lazy: true,
                toggleActions: "play reverse reverse none",
                scrub: 10,
            },
        });
        time.fromTo("#purple", { x: 0, opacity: 0 }, { x: 200, duration: 2, ease: "power2.out", opacity: 0.8, height: 200, width: 200, });
        
        // time.fromTo("#purple",{ x: 200, duration: 2, ease: "power2.out", opacity: 0.8, height: 200, width: 200, },{ x: 0, opacity: 0 });
    }, [])
    const [isOpen, setIsOpen] = useState(false);
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, 1460, { duration: 10 });

        return animation.stop;
    }, []);

    return (
        <div >
            {/* <motion.ul
    className={`${Styles.container} container`}
    variants={container}
    initial="hidden"
    animate="visible"
  >
    {[0, 1, 2, 3,4,5].map((index) => (
      <motion.li key={index} className={`${Styles.item} item`} variants={item} />
    ))}
  </motion.ul> */}
            <motion.h1>{rounded}</motion.h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti debitis unde dignissimos itaque dolore cumque veritatis necessitatibus ullam velit? Similique harum veritatis excepturi suscipit, ducimus nihil ad exercitationem? Velit eaque quasi voluptatem obcaecati vitae incidunt adipisci reprehenderit natus fugiat, sapiente cumque numquam non! Blanditiis laboriosam incidunt maxime enim tempore harum, aspernatur vero quidem nam sed ipsam totam maiores omnis autem numquam hic accusantium! Illum ipsum amet molestias perferendis culpa suscipit quasi assumenda, saepe, quibusdam atque perspiciatis officia cum officiis est illo odio non nemo quia, corporis aliquid blanditiis nisi sunt? Sed, delectus impedit quasi a eius fugiat ipsa tempora at, quaerat voluptate modi, ratione maxime suscipit obcaecati. Quidem laborum itaque accusantium modi voluptatibus quas ut, dignissimos ullam vel beatae qui aspernatur dolores quasi eligendi et tempore doloribus iusto excepturi quia facilis ratione provident? Distinctio debitis quasi deleniti consequatur reprehenderit nesciunt, ducimus et recusandae vitae magni ab cumque nam ex nulla adipisci illum modi perferendis eveniet mollitia sequi reiciendis aspernatur esse! Iusto aut, autem magnam praesentium, sit repellat, officia odit perspiciatis similique neque harum! Nam placeat, quo nihil soluta veniam rem eum consectetur blanditiis vero nostrum totam tempora, numquam accusamus asperiores. Error rem, provident minus quos eveniet deserunt blanditiis repudiandae voluptates iste illo quisquam tenetur qui ad assumenda maxime magni soluta modi dicta nostrum vitae veniam! Animi, reiciendis quae repellat recusandae provident perspiciatis pariatur doloremque. Numquam nostrum iure, esse quam unde quis accusamus quibusdam minus. Excepturi perferendis vitae iusto? Debitis autem rem possimus nisi, inventore rerum illo provident iste impedit fugiat laudantium tenetur neque consectetur. Incidunt est distinctio commodi adipisci! Incidunt corporis aspernatur asperiores soluta dolor voluptate commodi quaerat odio nam saepe impedit, in, id ad sint est inventore ducimus ipsum! Laudantium nobis alias aliquid. Voluptatibus deleniti obcaecati laborum harum repudiandae ad quis optio eos culpa ea tempora unde aliquid beatae minus iure aut nesciunt earum reprehenderit iste, similique incidunt voluptatum ut perferendis. Placeat vitae error enim quo, iusto, officia iste nam doloribus animi porro provident explicabo! Saepe temporibus soluta, porro unde cumque maiores. Quaerat cumque repudiandae sit quibusdam mollitia repellat quod debitis sunt vero sed, numquam magnam beatae, tenetur atque a possimus voluptate, eius illo dolores adipisci quam exercitationem magni vel. Ratione totam saepe aspernatur minus, officiis praesentium laboriosam eum facere aperiam accusantium blanditiis modi magni, reiciendis qui? Consequatur aut explicabo sunt laudantium, fugiat laboriosam ratione rerum, possimus magni repudiandae quisquam libero. Maxime accusantium error obcaecati eveniet minima voluptas tempore nam, architecto vero facere corporis earum quisquam assumenda mollitia in repellat voluptates quo libero illum dolorem similique iste! Veritatis, officia cum quia error voluptates eveniet consequatur magni, ut ipsam obcaecati tenetur ipsum! Ad, in sint maiores non repellat accusantium alias sapiente aspernatur rem fuga doloremque temporibus tempore iste mollitia sit quisquam impedit consequatur beatae eveniet ullam consectetur dolorem enim reiciendis placeat. Nulla doloribus vel recusandae quo, optio rem ab quod, maiores sint vero vitae dolor sit quos corrupti dignissimos, iusto quaerat iure id exercitationem numquam. Blanditiis delectus nemo vel similique! Voluptates placeat velit,</p>
            <div className="scroll">
                <div className={`h-20 w-20 bg-gray-500`} id='purple'></div>
            </div>
            <p>laboriosam nostrum qui unde praesentium ut reprehenderit esse sed quo beatae expedita vitae molestiae. Facere, neque! Consequuntur ea a obcaecati facilis corrupti itaque autem doloremque dolore maxime corporis nihil ad, odio provident numquam sequi dolor quod officia temporibus necessitatibus atque mollitia dolorum laborum officiis distinctio? Illo soluta eos voluptatibus neque nihil cum corrupti quidem quas ut amet in sint, ratione itaque hic explicabo natus culpa? Nihil iure aut veritatis, quisquam minima architecto eum, fugiat accusantium doloribus, totam natus repellendus consequuntur et distinctio illum nulla officia officiis nemo similique quos numquam dolorem quia ducimus? Recusandae id beatae veniam quos debitis eos accusamus accusantium esse rerum non illum, eum rem sapiente expedita, eligendi exercitationem? Nemo quisquam delectus sunt modi, illum tenetur officia dolor accusamus, eum ullam tempora voluptate, laborum vitae repudiandae voluptas iure asperiores numquam tempore similique fugit. Nostrum blanditiis facere consequatur. Quibusdam omnis et tempora ad inventore voluptatibus odit deleniti officia, reiciendis vitae, officiis numquam nemo pariatur atque, dolorum vero in veniam adipisci exercitationem expedita! Ea, veritatis. Minima consequatur adipisci sapiente aspernatur facilis voluptas laboriosam laborum, eos nulla accusamus amet dolores. Quis vel modi quo beatae. Delectus molestiae nemo sunt temporibus quibusdam vel voluptates nisi architecto laudantium esse. Delectus officia, harum totam voluptates consectetur suscipit pariatur iusto qui quisquam esse veniam animi omnis iure commodi eos cum quasi sequi? Ipsam nobis reprehenderit quia consectetur maxime sequi alias ullam saepe quo repellat voluptates, illo ab non commodi pariatur debitis animi. Provident ea nisi reiciendis fuga praesentium quisquam quod quis repudiandae ullam consectetur ex, aliquid magnam, perspiciatis voluptatum cumque cum ipsa perferendis modi ut facere deleniti? Voluptatum, deleniti praesentium. A aspernatur repudiandae harum eos aliquam reprehenderit autem consectetur nemo ipsam laboriosam eum voluptatibus, et deserunt esse ad dolore illo recusandae libero iste, facere nostrum id, cum quis. Non quaerat minus vero harum ipsum et quas, nisi veritatis? Laborum cumque in deleniti. Officiis iusto veritatis reprehenderit itaque beatae eius ex, magni commodi est corrupti tenetur quod modi! Cumque nobis rerum, minus ex esse vel, libero et sapiente earum laboriosam expedita laudantium ut. Quis at, ipsa voluptatem consequuntur, deleniti nobis rem vero aspernatur incidunt voluptas impedit pariatur nisi excepturi! Fuga dolor quidem minima ea, minus quas eaque eius libero eligendi? Deleniti aspernatur quibusdam numquam ipsam distinctio totam reiciendis nihil voluptas qui, maiores ex ducimus! Excepturi omnis modi obcaecati sit iste incidunt saepe reprehenderit, sequi aliquid provident velit quasi ducimus, molestiae aut dolor exercitationem facilis unde deleniti quo. Nam facere natus odit molestias, cumque voluptatum illo sequi! Veritatis, molestias ratione similique, doloremque non possimus alias odit nemo minus omnis, adipisci dolor beatae saepe voluptatibus? Quaerat quas eos officiis, totam id, mollitia cupiditate repellendus voluptatibus sunt sit minima voluptatem vitae. Dicta soluta ullam nihil placeat dignissimos aliquid consequatur tempore iste eos. Quod vel harum repudiandae, ab quasi officiis quibusdam blanditiis ipsam accusantium laborum praesentium veritatis modi tenetur optio porro, voluptatibus aspernatur maxime cum obcaecati voluptates eos nostrum sapiente! Accusantium, iusto est quidem saepe dignissimos dolorum totam quibusdam ullam necessitatibus sapiente placeat voluptates tenetur ipsam dicta quasi voluptatibus laborum qui. Numquam repellendus assumenda dolore omnis!</p>
            <p>laboriosam nostrum qui unde praesentium ut reprehenderit esse sed quo beatae expedita vitae molestiae. Facere, neque! Consequuntur ea a obcaecati facilis corrupti itaque autem doloremque dolore maxime corporis nihil ad, odio provident numquam sequi dolor quod officia temporibus necessitatibus atque mollitia dolorum laborum officiis distinctio? Illo soluta eos voluptatibus neque nihil cum corrupti quidem quas ut amet in sint, ratione itaque hic explicabo natus culpa? Nihil iure aut veritatis, quisquam minima architecto eum, fugiat accusantium doloribus, totam natus repellendus consequuntur et distinctio illum nulla officia officiis nemo similique quos numquam dolorem quia ducimus? Recusandae id beatae veniam quos debitis eos accusamus accusantium esse rerum non illum, eum rem sapiente expedita, eligendi exercitationem? Nemo quisquam delectus sunt modi, illum tenetur officia dolor accusamus, eum ullam tempora voluptate, laborum vitae repudiandae voluptas iure asperiores numquam tempore similique fugit. Nostrum blanditiis facere consequatur. Quibusdam omnis et tempora ad inventore voluptatibus odit deleniti officia, reiciendis vitae, officiis numquam nemo pariatur atque, dolorum vero in veniam adipisci exercitationem expedita! Ea, veritatis. Minima consequatur adipisci sapiente aspernatur facilis voluptas laboriosam laborum, eos nulla accusamus amet dolores. Quis vel modi quo beatae. Delectus molestiae nemo sunt temporibus quibusduptatem vitae. Dicta soluta ullam nihil placeat dignissimos aliquid consequatur tempore iste eos. Quod vel harum repudiandae, ab quasi officiis quibusdam blanditiis ipsam accusantium laborum praesentium veritatis modi tenetur optio porro, voluptatibus aspernatur maxime cum obcaecati voluptates eos nostrum sapiente! Accusantium, iusto est quidem saepe dignissimos dolorum totam quibusdam ullam necessitatibus sapiente placeat voluptates tenetur ipsam dicta quasi voluptatibus laborum qui. Numquam repellendus assumenda dolore omnis!</p>
            {/* <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className={`${Styles.menu} menu`}
            >
                <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Menu
                    <motion.div
                        variants={{
                            open: { rotate: 180 },
                            closed: { rotate: 0 }
                        }}
                        transition={{ duration: 0.2 }}
                        style={{ originY: 0.55 }}
                    >
                        <svg width="15" height="15" viewBox="0 0 20 20">
                            <path d="M0 7 L 20 7 L 10 16" />
                        </svg>
                    </motion.div>
                </motion.button>
                <motion.ul
                    variants={{
                        open: {
                            clipPath: "inset(0% 0% 0% 0% round 10px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.7,
                                delayChildren: 0.3,
                                staggerChildren: 0.05
                            }
                        },
                        closed: {
                            clipPath: "inset(10% 50% 90% 50% round 10px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.3
                            }
                        }
                    }}
                    style={{ pointerEvents: isOpen ? "auto" : "none" }}
                >
                    <motion.li variants={itemVariants}>Item 1 </motion.li>
                    <motion.li variants={itemVariants}>Item 2 </motion.li>
                    <motion.li variants={itemVariants}>Item 3 </motion.li>
                    <motion.li variants={itemVariants}>Item 4 </motion.li>
                    <motion.li variants={itemVariants}>Item 5 </motion.li>
                </motion.ul>
            </motion.nav> */}
        </div>
    )
}

export default page

