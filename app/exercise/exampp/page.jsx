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

    const [isOpen, setIsOpen] = useState(false);
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, 100, { duration: 10 });

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

            <motion.nav
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
            </motion.nav>
        </div>
    )
}

export default page

