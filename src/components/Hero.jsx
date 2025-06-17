import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm Alexis
          </h1>
          <p className={`${styles.heroSubText}`}>
            SF Based Web Developer
          </p>
        </div>
      </div>
      <ComputersCanvas/>

      {/* <div className='absolute xs:bottom-2 bottom-32 w-full flex justify-center items-center'>
        <a href='#projects'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#fcebd7] flex justify-center items-start p-2'>
            <motion.div 
              animate={{
                y:[0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-[#fcebd7] mb-1'
              />
          </div>
        </a>
      </div> */}
    </section>
  )
}

export default Hero;
