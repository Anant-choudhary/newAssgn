import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell ,faUser} from '@fortawesome/free-regular-svg-icons';
import logo from '../assets/high_resolution_logo.png' // Correct import for the bell icon

const Navbar = () => {
  return (
    <div className='md:row-span-1 row-span-1 bg-white flex flex-row justify-between items-center md:p-8 p-2'>
        <div className='flex flex-row  md:gap-2'>
        <img src={logo} alt="logo" className='w-1/6 h-auto' 
/>
            <h1 className='md:text-3xl text-2xl font-bold'>Jur</h1>
        </div>
        <div className='flex flex-row gap-x-4 items-center justify-center'>
            {/* Correct usage of FontAwesomeIcon */}
            <FontAwesomeIcon icon={faBell} size="lg" style={{color: "#289af0"}} /> {/* Using the correct size */}
            <FontAwesomeIcon icon={faUser} size="lg" style={{color: "#289af0"}} />
        </div>
    </div>
  );
}

export default Navbar;
