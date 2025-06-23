import React, { useState, useRef } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { assets } from '../../assets/assets';
import { MdEmail } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";




const LoginModal = ({ onClose }) => {
  const [showOtpScreen, setShowOtpScreen] = useState(false);

  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < 5) {
      inputRefs.current[index + 1].focus(); // Go to next input
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus(); // Go to previous input
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Blurred background */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* <div className='h-[400px] flex justify-center items-center'> */}

      {/* Modal content */}
      <div className="relative bg-black  rounded-2xl text-white  w-[90%] xl:w-[80%] justify-center flex flex-col md:flex-row  overflow-hidden">

        {/* Left side image */}
        <div className=" w-full hidden  md:w-1/2 md:flex items-center justify-center md:justify-start p-4">
          <img src={assets.ex_logo} alt="logo" className="" />
        </div>


        {/* Mobile logo */}
        <div className="relative w-full md:hidden md:w-1/2 flex items-center justify-center px-4 py-2 sm:p-4">
          <img src={assets.ex_logo_mob} alt="logo" className='h-[200px]' />
          {/* <MdOutlineCancel className='absolute top-4 right-4 w-9 h-9 text-gray-200'/> */}
          <img src={assets.close} alt="" className='absolute top-4 right-4 border p-3 rounded-lg border-[#373737]' onClick={onClose} />


        </div>


        {/* Right side */}
        <div className="w-full md:w-1/2 py-4 md:py-10 px-4 md:px-10 lg:p-16 flex flex-col justify-center ">
          {showOtpScreen ? (
            <>
              <h2 className="font-clash font-semibold text-[26px] xl:text-[36px] leading-[100%] tracking-[0%] text-center align-middle uppercase">
                CHECK YOUR <span className="text-yellow">EMAIL</span>
              </h2>
              <p className="mt-2  mb-8 xl:mb-10 text-gray-300 font-inter font-normal text-base leading-6 tracking-[0%] text-center align-middle">
                We’ve emailed you a 6-digit code to expertisor@gmail.com.<br /> Please enter it below.
              </p>



              <div className="flex justify-center gap-2 mb-6">
                {Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <input
                      key={i}
                      ref={(el) => (inputRefs.current[i] = el)}
                      type="text"
                      maxLength="1"
                      className="w-10 h-12 text-center text-black font-bold text-xl rounded-md bg-gray-100 focus:outline-yellow"
                      onChange={(e) => handleChange(e, i)}
                      onKeyDown={(e) => handleKeyDown(e, i)}
                    />
                  ))}
              </div>

              <button className="bg-yellow text-black w-full py-2 text-[16px] rounded-md font-semibold mb-3">
                Verify
              </button>

              <button className="bg-[#0F0F0F] text-white w-full py-2 text-[16px] rounded-md border border-gray-600 mb-3" onClick={() => setShowOtpScreen(false)}>
                Cancel
              </button>

              <p className="text-sm text-center text-gray-100">
                Don’t receive the email? <span className="text-yellow cursor-pointer">Resend</span>
              </p>
            </>
          ) : (
            <>
              <h2 className="font-clash font-semibold text-[20px] xl:text-[36px] leading-tight sm:leading-none tracking-[0%] text-center align-middle uppercase">
                Learn from <span className="text-yellow">top creator</span> mentors
              </h2>
              <p className="mt-2 mb-2 md:mb-8 xl:mb-10 text-[14px] lg:text-[16px] text-gray-300 font-inter font-normal leading-tight sm:leading-6 tracking-[0%] text-center align-middle">
                Begin your journey of learning with top-tier creator mentors<br className="hidden xl:block" /> today, all at competitive prices.
              </p>

              <button className="flex items-center text-[14px] gap-3 px-4 py-2 bg-[#0F0F0F] hover:bg-gray-700 rounded-md mb-2 justify-center">
                <FcGoogle className="w-5 h-5" />
                Continue with Google
              </button>

              <button className="flex items-center text-[14px] gap-3 px-4 py-2 bg-[#0F0F0F] hover:bg-gray-700 rounded-md justify-center">
                <FaGithub className="w-5 h-5" />
                Continue with GitHub
              </button>

              <div className="text-center text-sm text-gray-400 my-2">or</div>

              {/* <input
                type="name"
                placeholder="Enter Name"
                className="w-full px-4 py-2 mb-2  text-[14px] rounded-md bg-[#0F0F0F]  text-white focus:outline-none focus:border-none"
              /> */}

              {/* <input
                type="email"
                placeholder="Enter Email address"
                className="w-full px-4 py-2 mb-3 md:mb-5 text-[14px] rounded-md bg-[#0F0F0F]  text-white focus:outline-none focus:border-none"
              /> */}

              <label className="flex items-center w-full bg-[#0F0F0F] text-white rounded-md mb-2  px-4 py-2">
                <IoPersonSharp className="text-gray-400 text-[18px] mr-2" />
                <input
                  type="name"
                  placeholder="Enter Name"
                  className="w-full bg-transparent outline-none border-none text-[14px]"
                />
              </label>

              <label className="flex items-center w-full bg-[#0F0F0F] text-white rounded-md mb-3 md:mb-5 px-4 py-2">
                <MdEmail className="text-gray-400 text-[18px] mr-2" />
                <input
                  type="email"
                  placeholder="Enter Email address"
                  className="w-full bg-transparent outline-none border-none text-[14px]"
                />
              </label>




              <button
                className="bg-yellow text-black text-[14px] w-full py-2 rounded-md font-semibold"
                onClick={() => setShowOtpScreen(true)}
              >
                Create Account
              </button>

              <p className="text-sm mt-2 md:mt-4 text-center">
                Already have an account? <span className="text-yellow cursor-pointer">Log in</span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default LoginModal;




