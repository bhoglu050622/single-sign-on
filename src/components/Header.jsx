// import React from 'react'
// import { assets } from '../assets/assets'
// import {NavLink} from 'react-router-dom'

// const Header = () => {
//     const activeClass= "inline-block py-2 px-2  rounded border border-[rgba(255,255,255,0.64)] bg-[linear-gradient(180deg,_rgba(0,0,0,0.1)_16.67%,_rgba(255,242,0,0.1)_100%)]"
//     const inActiveClass="inline-block py-2 px-2 rounded"
//   return (
//     <div >
//         <div >
//             <div className='flex justify-between items-center pt-1 sm:py-4'>
//                 <div>
//                     <img src={assets.logo_ex} alt="" />
//                 </div>

//                 <ul className='flex bg-[#141414] items-center text-white gap-1 p-1 rounded-lg ml-8'>
//                     <li>
//                         <NavLink to="/" className={({isActive})=>isActive ? activeClass : inActiveClass}>Trainings</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to='/courses'  className={({isActive})=>isActive ? activeClass : inActiveClass}>Courses</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to='/testimonials' className={({isActive})=>isActive ? activeClass : inActiveClass}>Testimonials</NavLink>
//                     </li>

//                 </ul>



//                 <div className='flex gap-3'>
//                     <button className='text-white py-[10.5px] px-[21.5px] bg-[#F2F2F21A] text-base rounded-[4px] border border-[#FFFFFF33]'>Login</button>
//                     <button className='text-black py-[10.5px] px-[21.5px] bg-[#FFF200] font-medium text-base rounded-[4px] '>Sign up</button>
//                 </div>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default Header







import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';
import LoginModal from './HomeComponents/LoginModal';


const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLogout, setShowLogout] = useState(false)

  // mobile menus
  const [visible, setVisible] = useState(false)

  const activeClass =
    'inline-block py-2 md:py-3 px-[6px] md:px-2 rounded border border-[rgba(255,255,255,0.64)] bg-[linear-gradient(180deg,_rgba(0,0,0,0.1)_16.67%,_rgba(255,242,0,0.1)_100%)]  font-normal text-[14px] lg:text-[16px] leading-[100%] tracking-[0] align-middle';
  const inActiveClass = 'inline-block py-2 md:py-3 px-[6px] md:px-2 rounded  font-normal text-[14px] lg:text-[16px] leading-[100%] tracking-[0] align-middle';

  return (

    <div >


      <div className=''>

        <div className="flex justify-between items-center py-4 px-3 md:px-14 lg:px-20">

          {/* logo */}
          <img src={assets.logo_ex} alt="logo" />

          {/* pages */}
          <ul className="sm:flex hidden bg-[#141414] items-center text-white gap-1 p-1 rounded-lg  ">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>Trainings</NavLink>
            </li>
            <li>
              <NavLink to="/courses" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>Courses</NavLink>
            </li>
            <li>
              <NavLink to="/testimonials" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>Testimonials</NavLink>
            </li>
            <li>
              <NavLink to="/mentors" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>Mentors</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? activeClass : inActiveClass)}>Contact</NavLink>
            </li>
          </ul>

          {/* login */}
          <div className="sm:block hidden">
            <button className="text-black  py-2 px-[15px] md:py-[10.5px] lg:px-[21.5px] text-[14px] lg:text-[16px] bg-[#FFF200] font-medium text-base rounded-[4px] " onClick={() => setShowLoginModal(true)}>
              Login
            </button>


            {/* dashboard and logout */}
            {/* <div className='flex gap-3 items-center relative'>
              <div className='flex gap-2 py-[10px] px-[20px] bg-[#F2F2F21A] rounded-md'>
                <p className='text-white font-inter font-normal text-[16px] 
                '>Dashboard</p>
                <img src={assets.rocket} alt="" />
              </div>

              <div className='flex gap-2 items-center' onClick={()=> setShowLogout((prev)=>!prev)}>
                <button className='p-[10px] bg-yellow rounded-md font-inter font-bold text-[16px] 
              '>GD</button>
                <img src={assets.down_arrow} alt="" />
              </div>

              {showLogout && 
              <div className='absolute bottom-[-60px] right-0'>
                <div className='flex gap-14 bg-[#1F1F1F] py-2 px-3 rounded-lg border-4 border-[#000000]'>
                  <p className='text-white font-inter font-normal text-[16px]'>Logout</p>
                  <img src={assets.logout} alt="" />
                </div>
              </div>
              } 

            </div> */}
          </div>

          <div className='sm:hidden block' onClick={() => { setVisible((prev) => !prev) }}>
            <img src={assets.menu} alt="" className='h-6 w-6' />
          </div>

        </div>

        <div className='relative'>



          <div className={`absolute top-0 right-0 w-full h-[calc(100vh-71px)] bg-black text-white z-50 transition-transform duration-300 ease-in-out ${visible ? 'translate-x-0' : 'translate-x-full'}`}>

            {/* THIS container must have h-full for justify-between to work */}
            <div className="flex flex-col justify-between h-full p-6">

              {/* Menu Items (Top) */}
              <div className="">
                <ul className="flex flex-col gap-4">
                  <li onClick={() => { setVisible(false) }}>
                    <NavLink to="/" className="font-inter ml-2 font-normal text-[18px] leading-[100%] tracking-[0] align-middle">Trainings</NavLink>
                    <hr className='mt-4 border-[#242424]' />
                  </li>
                  <li onClick={() => { setVisible(false) }}>
                    <NavLink to="/courses" className="font-inter ml-2 font-normal text-[18px] leading-[100%] tracking-[0] align-middle">Courses</NavLink>
                    <hr className='mt-4 border-[#242424]' />
                  </li>
                  <li onClick={() => { setVisible(false) }}>
                    <NavLink to="/testimonials" className="font-inter ml-2 font-normal text-[18px] leading-[100%] tracking-[0] align-middle">Testimonials</NavLink>
                    <hr className='mt-4 border-[#242424]' />
                  </li>
                  <li onClick={() => { setVisible(false) }}>
                    <NavLink to="/mentors" className="font-inter ml-2 font-normal text-[18px] leading-[100%] tracking-[0] align-middle">Mentors</NavLink>
                    <hr className='mt-4 border-[#242424]' />
                  </li>
                  <li onClick={() => { setVisible(false) }}>
                    <NavLink to="/contact" className="font-inter ml-2 font-normal text-[18px] leading-[100%] tracking-[0] align-middle">Contact</NavLink>
                    <hr className='mt-4 border-[#242424]' />
                  </li>
                </ul>
              </div>

              {/* Login Button (Bottom) */}
              <button
                onClick={() => {
                  setShowLoginModal(true);
                  setVisible(false);
                }}
                className="bg-yellow text-black py-2 rounded-md font-inter font-medium text-[16px] leading-[100%] tracking-[0] align-middle">
                Log in
              </button>

            </div>
          </div>


        </div>






      </div>

      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
    </div>
  );
};

export default Header;






