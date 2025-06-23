import React, { useState } from 'react'
import { assets } from '../../assets/assets';
import Infinite from './Infinite';

const StudentsSay = () => {

    const videos = {
        id: 1,
        url: "https://www.youtube.com/embed/v02U7mvaIvk",
        thumbnail: "https://img.youtube.com/vi/v02U7mvaIvk/hqdefault.jpg"
    };

    const [playing, setPlaying] = useState(false);

    return (
        <>
            <div className='bg-black'>
                <div className=' py-20 px-5 sm:px-14 lg:px-20 pt-14 sm:pt-28'>
                    {/* title and para */}
                    <div className='text-center'>
                        <h1 className='text-[#ffffff] font-clash font-semibold text-[44px] leading-[100%] tracking-[0%] align-middle uppercase'>What Our Students Are <span className='text-yellow'>Saying</span>?</h1>
                        <p className='mt-3 text-[#ffffff] font-inter font-normal text-[18px] leading-[24px] tracking-[0%] text-center align-middle'>Hear from Our Students: Turning Aspirations into Technological <span className='md:block'>Breakthroughs for Everyone.</span></p>
                    </div>


                    {/* <div className='flex py-20 '>
                        <div className='w-[70%]'>
                            <div className="relative ">
                                <div className="relative w-full pt-[56.25%]">

                                    {playing !== 1 ? (
                                        <div className="absolute inset-0 cursor-pointer" onClick={() => setPlaying(1)}>
                                            <img src={videos.thumbnail}  alt="Video Thumbnail" className=" h-full object-cover rounded-3xl" />

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

                        <div className=' overflow-scroll scrollbar-hidden  flex flex-col gap-4'>
                            <div>
                                <img src={assets.a} alt="" />
                            </div>
                            <div>
                                <img src={assets.a} alt="" />
                            </div>
                            <div>
                                <img src={assets.a} alt="" />
                            </div>
                            <div>
                                <img src={assets.a} alt="" />
                            </div>
                        </div>
                    </div> */}


                    <div className='flex mt-8  gap-6 h-fit overflow-hidden'>
                        {/* Left: Video player */}
                        <div className='w-[60%] border h-fit'>
                            <div className="relative">
                                <div className="relative w-full pt-[56.25%]">
                                    {playing !== 1 ? (
                                        <div className="absolute inset-0 cursor-pointer" onClick={() => setPlaying(1)}>
                                            <img src={videos.thumbnail} alt="Video Thumbnail" className="h-full w-full object-cover rounded-3xl" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="bg-yellow w-[47px] h-[47px] sm:w-[86px] sm:h-[86px] rounded-full flex justify-center items-center">
                                                    <img src={assets.pause} alt="" className='w-[33px] h-[33px] sm:w-[60px] sm:h-[60px]' />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <iframe
                                            className="absolute top-0 left-0 w-full h-full rounded-3xl"
                                            src="https://www.youtube.com/embed/v02U7mvaIvk?autoplay=1&modestbranding=1&showinfo=0&controls=1&rel=0&disablekb=1"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                        ></iframe>
                                    )}
                                </div>

                                <div>
                                    <h1 className='text-[#ffffff]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit</h1>
                                    <p className='text-[#ffffff]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, inventore!</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Scrollable list */}
                        <div className=' overflow-y-auto flex flex-col gap-4 scrollbar-hidden h-fit lg:max-h-[60vh] xl:max-h-[80vh] border '>
                            <div><img src={assets.a} alt="" /></div>
                            <div><img src={assets.a} alt="" /></div>
                            <div><img src={assets.a} alt="" /></div>
                            <div><img src={assets.a} alt="" /></div>
                            <div><img src={assets.a} alt="" /></div>
                            <div><img src={assets.a} alt="" /></div>
                            <div><img src={assets.a} alt="" /></div>
                            <div><img src={assets.a} alt="" /></div>
                        </div>
                    </div>
                </div>

                <div className='mt-8 '>
                    <Infinite />
                </div>

                
            </div>
        </>
    )
}

export default StudentsSay






