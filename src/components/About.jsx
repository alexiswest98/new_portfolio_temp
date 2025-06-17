import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
// import { services } from '../constants';
import { personalpic } from '../assets';
import { SectionWrapper } from '../HOC';
import { fadeIn, textVariant } from '../utls/motion';

const About = () => {
  return (
    <>
      {/* Main container with text and image */}
      <div className='flex flex-wrap mt-4'>
        {/* Text section - 2/3 width */}
        <motion.div className='w-full md:w-2/3 pr-4 bg-[#fcebd7] bg-opacity-90 rounded-lg p-4'
          variants={fadeIn("", "", 0.1, 1)}>
          <h2 className={styles.sectionHeadText}>About Me</h2>
          <p className='text-secondary text-[17px] leading-[28px]'>
            From a young age, I remember being drawn to programming when I would edit the HTML and CSS on my old Tumblr blog. At the time, what felt like very advanced technical skills would soon develop into a fascination for web development and design.
            <br />
            After graduating from San Francisco State University, I decided to enroll in App Academy's 24-Week Software Engineering Program. I mastered JavaScript, Python, React/Redux, different backend frameworks, PostgreSQL, and more. Along the way, I became a pro at picking up new languages quickly by diving into documentation and adopting agile workflows.
            <br />
            While web development has proven to be both fulfilling and challenging, a part of me still craves learning how to combine coding with more creative projects. My passion for drawing and design has naturally influenced my approach to web development. In my portfolio, I've tried to express my personality by incorporating elements inspired by my love for hiking and nature—bringing the organic world into the digital space. These creative explorations have only strengthened my desire to blend technical skills with artistic expression, which is why I would be thrilled to have the opportunity to grow creatively through Gray Area's Creative Code Intensive Program.
            <br /><br />
            (ps: The graphics in this website are interactive!)
          </p>
        </motion.div>

        {/* Image section - 1/3 width */}
        <div className='w-full md:w-1/3 flex items-center justify-center mt-6 md:mt-0'>
          <Tilt className='w-full max-w-[250px]'>
            <motion.div
              className='w-full border-2 border-[#e8d6ea] p-[1px] rounded-[20px] shadow-card'
            >
              <img
                src={personalpic}
                alt='web-development'
                className='w-full object-cover rounded-[20px]'
              />
            </motion.div>
          </Tilt>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");