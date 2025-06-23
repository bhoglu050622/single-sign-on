import React from 'react';
import { assets } from '../../assets/assets';

const DownloadSection = () => {
    return (
        <div>
            <div className=' px-3 sm:px-14 lg:px-20 my-10' >
                <div className='relative'>
                    <img src={assets.bg_download} alt="" />
                    <div className='absolute inset-0 grid grid-cols-2 items-center ' >
                        <div className='ml-16'>
                            <h2 className='font-clash text-[44px] leading-[50px] font-semibold uppercase align-middle text-white'> <span className='block text-yellow'>Learn</span> Anywhere Anytime</h2>
                            <p className='font-inter py-5 text-[#B8B8B8] text-[16px] leading-[24px] font-normal align-middle'>Download our mobile app and access 100+ creator-led courses, live webinars, and personalized mentorship - all from your pocket.</p>
                            <img src={assets.gplay} alt="" />
                        </div>

                        <div className='flex justify-center items-end'>
                            <div>
                            <img  src={assets.iphone} alt="" className='max-w-[100%]'/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadSection;
