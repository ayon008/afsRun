import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';

const ScrollButton = () => {
    // Button Function
    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 1000,
            smooth: true,
        });
    };
    return (
        <div className='bg-black'>
            <div className='pb-4 w-fit mx-auto'>
                {/* Button */}
                <motion.button
                    animate={{ scale: [1, 1.3, 1], transition: { duration: 1, repeat: Infinity } }}
                    className='text-white flex items-center lg:text-xs gap-1 dim Alliance uppercase' onClick={scrollToTop}><span><FaArrowUp /></span><span>Scroll To Top</span></motion.button>
            </div>
        </div>
    );
};

export default ScrollButton;