import React from 'react';
import { github, githubB } from '../assets';
import resume from "../assets/AlexisWestResume.pdf";
import "./feedback.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons'

const Feedbacks = () => {
  return (
    <div className='contact-container'>
      <div className="contact-inner">
        <a target="_blank" href='https://github.com/alexiswest98'
          className='linkedin-tag'
        >
          <img src={githubB} alt="github logo" className='linkedin-img'></img>
        </a>
        <div className='button-container'>
        <a className="button" href={resume} download="AlexisWestResume.pdf" role="button">
          <span>Resume</span>
          <div className="icon">
            <FontAwesomeIcon icon={faCircleDown} style={{color: "#29008a",}} className="fa"/>
          </div>
        </a>
        </div>
      </div>
    </div>
  )
}

export default Feedbacks;
