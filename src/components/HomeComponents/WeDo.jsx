import React from 'react'
import { assets } from '../../assets/assets'

const WeDo = () => {
  return (
    <>
      <div className=' bg-black px-3 sm:px-14 lg:px-20 pt-14 sm:pt-28'>
        <div className='text-center '>
          <h2 className='text-[#FFFFFF]  font-clash font-semibold text-[28px] sm:text-[40px] leading-[100%] tracking-[0] text-center align-middle uppercase'>WHATWE<span className='text-yellow '>DO</span>?</h2>
          <p className='text-[#B8B8B8] font-inter font-normal text-[14px] sm:text-[16px] leading-[24px] tracking-[0] text-center align-middle mt-3 mb-10 sm:mb-14'>Explore our dynamic offerings, including engaging courses, insightful webinars, personalized <span className='md:block'>1-on-1 consulting and personalized trainings tailored for corporate success.</span></p>



          <div className="grid lg:grid-cols-2 gap-5">


            <div className="flex flex-col sm:flex-row justify-between sm:items-center bg-[#161616] p-4 sm:p-6 gap-4 rounded-lg">
              <div className="order-2 sm:order-1 flex-1 text-start">
                <h4 className="text-white text-[20px] sm:text-[24px] font-semibold mb-2">Courses</h4>
                <p className="text-[#B8B8B8] mb-3 text-sm">
                  Choose from a variety of flexible courses that fit your schedule, with easy-to-follow materials and engaging content.
                </p>
                <a href="#" className="text-white font-inter font-medium text-[16px] leading-[100%] tracking-[0] align-middle underline underline-offset-[0%] decoration-[0.5px] decoration-solid">Explore more</a>
              </div>

              <div className="order-1 sm:order-2 flex-shrink-0 bg-gradient-to-b from-[#3B2D00] to-[#816D00] p-2 rounded-md">
                <img
                  src={assets.courses}
                  alt="Courses"
                  className="w-full sm:w-[160px] h-[120px] object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between sm:items-center bg-[#161616] p-4 sm:p-6 gap-4 rounded-lg">
              <div className="order-2 sm:order-1 flex-1 text-start">
                <h4 className="text-white text-[20px] sm:text-[24px] font-semibold mb-2">Webinars</h4>
                <p className="text-[#B8B8B8] mb-3 text-sm">
                  Catch live webinars with industry pros sharing the latest trends and practical tips to boost your skills.                  </p>
                <a href="#" className="text-white font-inter font-medium text-[16px] leading-[100%] tracking-[0] align-middle underline underline-offset-[0%] decoration-[0.5px] decoration-solid">Explore more</a>
              </div>

              <div className="order-1 sm:order-2 flex-shrink-0 bg-gradient-to-b from-[#3B2D00] to-[#816D00] p-2 rounded-md">
                <img
                  src={assets.webinars}
                  alt="Courses"
                  className="w-full sm:w-[160px] h-[120px] object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between sm:items-center bg-[#161616] p-4 sm:p-6 gap-4 rounded-lg">
              <div className="order-2 sm:order-1 flex-1 text-start">
                <h4 className="text-white text-[20px] sm:text-[24px] font-semibold mb-2">Courses</h4>
                <p className="text-[#B8B8B8] mb-3 text-sm">
                  Experience personalized 1-on-1 consulting with expert mentors, tailored to enhance your learning journey.                  </p>
                <a href="#" className="text-white font-inter font-medium text-[16px] leading-[100%] tracking-[0] align-middle underline underline-offset-[0%] decoration-[0.5px] decoration-solid">Explore more</a>
              </div>

              <div className="order-1 sm:order-2 flex-shrink-0 bg-gradient-to-b from-[#3B2D00] to-[#816D00] p-2 rounded-md">
                <img
                  src={assets.consult}
                  alt="Courses"
                  className="w-full sm:w-[160px] h-[120px] object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between sm:items-center bg-[#161616] p-4 sm:p-6 gap-4 rounded-lg">
              <div className="order-2 sm:order-1 flex-1 text-start">
                <h4 className="text-white text-[20px] sm:text-[24px] font-semibold mb-2">Courses</h4>
                <p className="text-[#B8B8B8] mb-3 text-sm">
                  Boost your team's skills with customized training programs designed to help you achieve your business goals.                  </p>
                <a href="#" className=" text-white font-inter font-medium text-[16px] leading-[100%] tracking-[0] align-middle underline underline-offset-[0%] decoration-[0.5px] decoration-solid">Explore more</a>
              </div>

              <div className="order-1 sm:order-2 flex-shrink-0 bg-gradient-to-b from-[#3B2D00] to-[#816D00] p-2 rounded-md">
                <img
                  src={assets.corporates}
                  alt="Courses"
                  className="w-full sm:w-[160px] h-[120px] object-contain"
                />
              </div>
            </div>


          </div>

        </div>
      </div>
    </>
  )
}

export default WeDo