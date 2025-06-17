import { SectionWrapper } from "../HOC";
import { technologies } from "../constants";
import { motion } from 'framer-motion';
import { styles } from "../styles";

const ServiceCard = ({name, icon }) => (
  <motion.div
    whileHover={{ scale: 1.5, opacity: 0.85 }}
    className='w-full h-full bg-[#191970] p-[5px] rounded-[20px] shadow-card flex flex-col justify-center items-center'
  >
    <img
      src={icon}
      alt='web-development'
      className='w-14 h-14 object-contain'
    />
    <h3 className='text-white text-[18px] font-bold text-center'>
      {name}
    </h3>
  </motion.div>
);


const Tech = () => {

  return (
    <div className="mb-20">
      <h2 className='sm:text-[20px] text-[18px] mb-8 uppercase tracking-wider text-[#f3843b]'>Tehcnologies</h2>
      <div
        className="flex flex-row flex-wrap justify-center gap-9"
      >
        {technologies.map((tech) => (
          <div className="w-28 h-28" key={tech.id}>
            <ServiceCard key={tech.name} {...tech} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, "");
