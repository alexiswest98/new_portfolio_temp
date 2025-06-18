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
            From a young age, I was drawn to programming through creative exploration, like editing the HTML and CSS of my old Tumblr blog. What began as a curiosity quickly grew into a passion for web development and design. After graduating from San Francisco State University, I enrolled in App Academy's 24-week Software Engineering Program, where I mastered JavaScript, Python, React/Redux, backend frameworks, PostgreSQL, and more. My technical skills continued to grow in my current role at the Mental Health Association of San Francisco, where I redesigned and built our organization’s new website, increasing user engagement by 45.6% and boosting site traffic by over 160,000 users over a year. I also developed a full design system in Figma—including a sitemap, user stories, style guides, reusable components, and responsive wireframes.
            <br />
            While I enjoy solving backend and frontend challenges, I’m especially excited by the intersection of design, storytelling, and code. My creative background in drawing has evolved into a practice that now includes Blender, projection mapping, and creative coding with tools like Tone.js, P5.js, Hydra, and WebSockets. These tools have helped me prototype interactive experiences and experiment with audio-visual interfaces. Whether I’m building scalable systems or expressive web experiences, I aim to bridge technical fluency with imaginative thinking.
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