import React, { useState } from 'react'
import ImgRun from './ImgRun';

import { assets } from '../../assets/assets'

const AboutUs = () => {

    const videos = {
        id: 1,
        url: "https://www.youtube.com/embed/v02U7mvaIvk",
        thumbnail: "https://img.youtube.com/vi/v02U7mvaIvk/hqdefault.jpg"
    };

    const [playing, setPlaying] = useState(false);

    const slide1 = [
        assets.a,
        assets.b,
        assets.c,
        assets.d,
        assets.e,
        assets.f,
        assets.g,
        assets.h,
        assets.i,
        assets.j,
    ]


    return (
        <>
            <div className=' bg-black px-5 sm:px-14 lg:px-20 pt-14 sm:pt-28'>
                <div>

                    {/* title and para */}
                    <div className='text-center'>
                        <h1 className='text-[#ffffff] font-clash font-semibold text-[44px] leading-[100%] tracking-[0%] align-middle uppercase'>ABOUT <span className='text-yellow'>US</span></h1>
                        <p className='mt-3 text-[#ffffff] font-inter font-normal text-[18px] leading-[24px] tracking-[0%] text-center align-middle'>From a College Dreamer to a Tech Visionary: Making Technology Accessible for Everyone</p>
                    </div>

                    {/* video and about us */}
                    <div className='mt-11 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-7 sm:gap-12'>

                        <div className=''>
                            <div className="relative ">
                                <div className="relative w-full pt-[56.25%]">

                                    {playing !== 1 ? (
                                        <div className="absolute inset-0 cursor-pointer" onClick={() => setPlaying(1)}>
                                            <img src={videos.thumbnail} width={"100%"} alt="Video Thumbnail" className="max-w-full h-full object-cover rounded-3xl" />

                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="bg-yellow w-[47px] h-[47px] sm:w-[86px] sm:h-[86px] rounded-full flex justify-center items-center">
                                                    <img src={assets.pause} alt="" className='w-[33px] h-[33px] sm:w-[60px] sm:h-[60px]' />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <iframe className="absolute top-0 left-0 w-full h-full rounded-3xl" src="https://www.youtube.com/embed/v02U7mvaIvk?autoplay=1&modestbranding=1&showinfo=0&controls=1&rel=0&disablekb=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='text-center sm:text-start'>
                                <div className='flex justify-center  sm:hidden'>
                                    <div className='flex'>
                                        <img src={assets.ragu} alt="" />
                                        <img src={assets.sathish} alt="" />
                                    </div>
                                </div>
                                <div className='flex items-center justify-around'>
                                    <img src={assets.ragu} alt="" className='hidden sm:block' />
                                    <h4 className='text-[#ffffff] font-clash font-normal text-[20px] sm:text-[24px] leading-[34px] tracking-[0%] text-center'>Two college-broken minds,<span className='xl:block'>One <span className='text-yellow font-semibold'>big vision</span>.</span></h4>
                                    <img src={assets.sathish} alt="" className='hidden sm:block' />
                                </div>

                                <p className='mt-4 text-[#B8B8B8] font-inter font-normal text-[16px] sm:text-[18px] leading-[20px] sm:leading-[22px] tracking-[0%] align-middle'>We saw the gap-education teaches, but reality demands more. Today, learning goes beyond classrooms, with YouTubers making complex topics simple.</p>

                                <p className='mt-4 text-[#B8B8B8] font-inter font-normal text-[16px] sm:text-[18px] leading-[20px] sm:leading-[22px] tracking-[0%] align-middle'>So, we built Expertisor Academy-where friendly creators become mentors, making quality learning accessible to everyone.</p>

                                <p className='mt-4 text-[#B8B8B8] font-inter font-normal text-[16px] sm:text-[18px] leading-[20px] sm:leading-[22px] tracking-[0%] align-middle'>We're on a mission to impact 1 million students' lives.</p>

                                <p className='mt-4 text-[#B8B8B8] font-inter font-normal text-[16px] sm:text-[18px] leading-[20px] sm:leading-[22px] tracking-[0%] align-middle'>Our Philosophy: Top-quality education should be affordable and driven by value. Money is a by-product of creating real impact</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='pt-11 bg-black '>
                <ImgRun datas={slide1} dirc="left" speed="60" m="mb-0" h="h-[200px] sm:h-[247px]" />
            </div>

        </>
    )
}

export default AboutUs