import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import logo25 from '../assets/logo25.png'
import { menu, close } from '../assets';
import './Swiper.css'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full h-24 flex items-center py-5 fixed top-0 z-20 bg-primary shadownav`}>
      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
        <Link to="/"
          className='flex items-center gap-1'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0)
          }}>
          <img src={logo25} alt='logo' className='w-1/2 h-1/2 object-contain' />
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id}
              className={`${active === link.title ? "text-navy" : "text-secondary"} hover:text-orange text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex justify-end items-center'>
          <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}>
          </img>
          {toggle && (
            <div className='flex p-6 bg-[#f3843b] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl'>
              <ul className='list-none flex justify-end items-start flex-col gap-4'>
                {navLinks.map((link) => (
                  <li key={link.id}
                    className={`${active === link.title ? "text-[#fcebd7]" : "text-black"} font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }
                    }
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </nav>
  )
}

export default Navbar;
