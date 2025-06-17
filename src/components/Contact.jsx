import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../HOC';
import { slideIn } from '../utls/motion';
import { serviceId, templateId, publicKey } from '../../config';
import Feedbacks from './Feedbacks';


const Contact = () => {
  // const formRef = useRef();
  // const [loading, setLoading] = useState(false);
  // const [form, setForm] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  // const handleChange = (e) => {
  //   const { target } = e;
  //   const { name, value } = target;

  //   setForm({
  //     ...form,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   emailjs
  //     .send(
  //       serviceId,
  //       templateId,
  //       {
  //         from_name: form.name,
  //         to_name: "Alexis West",
  //         from_email: form.email,
  //         to_email: "alexishwest98@gmail.com",
  //         message: form.message,
  //       },
  //       publicKey
  //     )
  //     .then(
  //       () => {
  //         setLoading(false);
  //         alert("Thank you. I will get back to you soon.");

  //         setForm({
  //           name: "",
  //           email: "",
  //           message: "",
  //         });
  //       },
  //       (error) => {
  //         setLoading(false);
  //         console.error(error);

  //         alert("Something went wrong. Please try again or email directly at alexishwest98@gmail.com.");
  //       }
  //     );
  // };

  return (
    <div className='xl:mt-8 flex flex-col md:flex-row md:justify-between sml:items-center sml:justify-center overflow-hidden'>
      {/* Text section - left side on desktop */}
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="md:w-3/5 p-8 rounded-2xl shadow-contact h-full self-center flex flex-col items-center text-center"
      >
        <h3 className={styles.sectionHeadText}>Contact Me</h3>
        <h3 className={styles.sectionSubText}>Work Email:<br/> alexis.west@mentalhealthsf.org</h3>
        <h3 className={styles.sectionSubText}>Email: <br/> alexishwest98@gmail.com</h3>
        <Feedbacks></Feedbacks>
      </motion.div>
  
      {/* EarthCanvas - right side on desktop, bottom on mobile */}
      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className='md:w-2/5 h-[350px] md:h-[500px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');