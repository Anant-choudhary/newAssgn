import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGauge, faBriefcase, faHeartPulse,faCalendarDays,faFile,faHandFist } from '@fortawesome/free-solid-svg-icons'; // Corrected icon import
import sideimg from "../assets/side.png"
const data = [
    {
        img: <FontAwesomeIcon icon={faGauge} size="2xl" style={{ color: "#93c5fd" }}
 />,
        tag: "Dashboard"
    },
    {
        img: <FontAwesomeIcon icon={faBriefcase} size="2xl" style={{ color: "#93c5fd" }}
 />,
        tag: "MyCases"
    },
    {
        img: <FontAwesomeIcon icon={faHeartPulse} size="2xl" style={{ color: "#93c5fd" }}
 />, // Corrected icon
        tag: "Activities"
    },
    {
        img: <FontAwesomeIcon icon={faCalendarDays} size="2xl" style={{ color: "#93c5fd" }}
/>,
        tag: "Calendar"
    },
    {
        img: <FontAwesomeIcon icon={faFile} size="2xl" style={{ color: "#93c5fd" }}
/>,
        tag: "Files"
    },
    {
        img: <FontAwesomeIcon icon={faHandFist} size="2xl" style={{ color: "#93c5fd" }}
/>,
        tag: "Open a Dispute"
    },
];

const Sidebar = () => {
    return (
        <div className='md:col-span-2 bg-white text-slate-400 font-semibold flex flex-col lg:gap-10 md:gap-5 md:justify-around md:items-center'>
            <ul className='flex flex-row justify-evenly md:flex-col md:gap-10'>
                {
                    data.map((value, index) => (
                        <li key={index} className='flex md:flex-row md:gap-3 flex-col items-center'>
                            <div>{value.img}</div>
                            <p className='text-xs sm:text-base sm:block hidden'>{value.tag}</p>
                        </li>
                    ))
                }
            </ul>
            <img src='' alt="sideimg" className='hidden md:block w-full h-' />
        </div>
    );
};

export default Sidebar;
