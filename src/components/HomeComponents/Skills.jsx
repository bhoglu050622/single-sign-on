import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import CoursesCard from '../CourseComponents/CoursesCard';
import { CourseContext } from '../../context/CourseContextProvider';




const Skills = () => {

    const {courses}=useContext(CourseContext)



    const categories = [
        { label: "TECHNOLOGY", emoji: "📡" },
        { label: "ARTS", emoji: "🎨" },
        { label: "CIVIL", emoji: "👷" },
        { label: "MECHANICAL", emoji: "🛠️" },
        { label: "MEDICAL", emoji: "🩺" },
        { label: "ELECTRICAL", emoji: "🔥" }
    ];

    
    // const courses = [
    //     {
    //         domain: "A complete guide to Amazon web services (AWS)",
    //         mentors: "sathish p c",
    //         language: "tamil",
    //         category: "technology"
    //     },
    //     {
    //         domain: "A complete guide to Devops ",
    //         mentors: "ragu",
    //         language: "hindhi",
    //         category: "arts"
    //     },
    //     {
    //         domain: "A complete guide to Data science in Machine learning",
    //         mentors: "jeeva",
    //         language: "english",
    //         category: "civil"
    //     },
    //     {
    //         domain: "A complete guide to Azure",
    //         mentors: "anand",
    //         language: "telugu",
    //         category: "mechanical"
    //     },
    //     {
    //         domain: "A complete guide to Devops ",
    //         mentors: "gowtham",
    //         language: "kannada",
    //         category: "medical"
    //     },
    //     {
    //         domain: "A complete guide to Amazon web services (AWS) ",
    //         mentors: "prabu",
    //         language: "hindhi",
    //         category: "electrical"
    //     },
    //     {
    //         domain: "A complete guide to Data science in Machine learning ",
    //         mentors: "deva",
    //         language: "english",
    //         category: "technology"
    //     },
    //     {
    //         domain: "A complete guide to Azure ",
    //         mentors: "sathish",
    //         language: "tamil",
    //         category: "arts"
    //     },
    //     {
    //         domain: "A complete guide to Amazon web services (AWS)",
    //         mentors: "sathish p c",
    //         language: "tamil",
    //         category: "technology"
    //     },
    //     {
    //         domain: "A complete guide to Devops ",
    //         mentors: "ragu",
    //         language: "hindhi",
    //         category: "arts"
    //     },
    //     {
    //         domain: "A complete guide to Data science in Machine learning",
    //         mentors: "jeeva",
    //         language: "english",
    //         category: "civil"
    //     },
    //     {
    //         domain: "A complete guide to Azure",
    //         mentors: "anand",
    //         language: "telugu",
    //         category: "mechanical"
    //     },
    //     {
    //         domain: "A complete guide to Devops ",
    //         mentors: "gowtham",
    //         language: "kannada",
    //         category: "medical"
    //     },
    //     {
    //         domain: "A complete guide to Amazon web services (AWS) ",
    //         mentors: "prabu",
    //         language: "hindhi",
    //         category: "electrical"
    //     },
    //     {
    //         domain: "A complete guide to Data science in Machine learning ",
    //         mentors: "deva",
    //         language: "english",
    //         category: "technology"
    //     },
    //     {
    //         domain: "A complete guide to Azure ",
    //         mentors: "sathish",
    //         language: "tamil",
    //         category: "arts"
    //     },
    //     {
    //         domain: "A complete guide to Amazon web services (AWS)",
    //         mentors: "sathish p c",
    //         language: "tamil",
    //         category: "technology"
    //     },
    //     {
    //         domain: "A complete guide to Devops ",
    //         mentors: "ragu",
    //         language: "hindhi",
    //         category: "arts"
    //     },
    //     {
    //         domain: "A complete guide to Data science in Machine learning",
    //         mentors: "jeeva",
    //         language: "english",
    //         category: "civil"
    //     },
    //     {
    //         domain: "A complete guide to Azure",
    //         mentors: "anand",
    //         language: "telugu",
    //         category: "mechanical"
    //     },
    //     {
    //         domain: "A complete guide to Devops ",
    //         mentors: "gowtham",
    //         language: "kannada",
    //         category: "medical"
    //     },
    //     {
    //         domain: "A complete guide to Amazon web services (AWS) ",
    //         mentors: "prabu",
    //         language: "hindhi",
    //         category: "electrical"
    //     },
    //     {
    //         domain: "A complete guide to Data science in Machine learning ",
    //         mentors: "deva",
    //         language: "english",
    //         category: "technology"
    //     },
    //     {
    //         domain: "A complete guide to Azure ",
    //         mentors: "sathish",
    //         language: "tamil",
    //         category: "arts"
    //     },
    //     {
    //         domain: "A complete guide to Amazon web services (AWS)",
    //         mentors: "sathish p c",
    //         language: "tamil",
    //         category: "technology"
    //     },
    //     {
    //         domain: "A complete guide to Devops ",
    //         mentors: "ragu",
    //         language: "hindhi",
    //         category: "arts"
    //     },
    //     {
    //         domain: "A complete guide to Data science in Machine learning",
    //         mentors: "jeeva",
    //         language: "english",
    //         category: "civil"
    //     },
    //     {
    //         domain: "A complete guide to Azure",
    //         mentors: "anand",
    //         language: "telugu",
    //         category: "mechanical"
    //     },
    //     {
    //         domain: "A complete guide to Devops ",
    //         mentors: "gowtham",
    //         language: "kannada",
    //         category: "medical"
    //     },
    //     {
    //         domain: "A complete guide to Amazon web services (AWS) ",
    //         mentors: "prabu",
    //         language: "hindhi",
    //         category: "electrical"
    //     },
    //     {
    //         domain: "A complete guide to Data science in Machine learning ",
    //         mentors: "deva",
    //         language: "english",
    //         category: "technology"
    //     },
    //     {
    //         domain: "A complete guide to Azure ",
    //         mentors: "sathish",
    //         language: "tamil",
    //         category: "arts"
    //     },
    // ]

    const [activeCategory, setActiveCategory] = useState("TECHNOLOGY");

    const [searchCourse, setSearchCourse] = useState([""])

    const [searched, setSearched] = useState("")


    useEffect(() => {
        let data = courses.slice()

        data = data.filter((value, i) =>
            value.domain.toLowerCase().includes(searched.toLowerCase()) ||
            value.mentors.toLowerCase().includes(searched.toLowerCase()) ||
            value.language.toLowerCase().includes(searched.toLowerCase())
        )

        data = data.filter((value, i) => value.category.toLowerCase().includes(activeCategory.toLowerCase()))

        setSearchCourse(data)

    }, [searched, activeCategory])



    const scrollRef = useRef(null);

    const scrollLeft = () => {
        console.log(scrollRef.current)
        scrollRef.current.scrollBy({ left: -310, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 310, behavior: 'smooth' });
    };



    return (
        <>
            <div className=' bg-black px-3 sm:px-14 lg:px-20 pt-14 sm:pt-28'>
                <div className=' text-center '>
                    {/* title and para */}
                    <h1 className='text-[#FFFFFF] font-clash font-semibold text-[28px] sm:text-[44px]  tracking-[0] align-middle uppercase leading-tight'>
                        ALL THE <span className='text-yellow inline-block'>SKILLS</span> YOU NEED IN <span className='text-yellow inline-block'>ONE PLACE</span>
                    </h1>
                    <p className='text-[#B8B8B8] font-inter font-normal text-[14px] sm:text-[18px] leading-5 sm:leading-[24px] tracking-[0] text-center align-middle mt-3'>Master skills in Tech, Arts, Civil, Mech, and Medical — all in one platform <span className='md:block'>guided by real-world experts.</span></p>

                     {/* search bar */}
                    <div className="flex max-w-3xl mx-auto pl-4 pr-1 py-1 bg-[#1a1a1a] text-white rounded-md mt-10 sm:mt-14">
                        <input
                            type="text"
                            placeholder="Search for courses, mentors, languages etc.,"
                            className="w-full text-[14px] bg-[#1a1a1a] placeholder:text-gray-400 border-none focus:outline-none"
                            value={searched}
                            onChange={(e) => setSearched(e.target.value)}
                        />
                        <button className="bg-yellow px-3 py-3 rounded-md">
                            <FaSearch className="text-black" />
                        </button>
                    </div>


                    {/* Categories */}
                    <div className="mt-6 overflow-x-auto sm:overflow-visible scrollbar-hidden">
                        <div className="flex sm:flex-wrap sm:justify-center gap-3 whitespace-nowrap sm:whitespace-normal px-1">
                            {categories.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => setActiveCategory(item.label)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-white font-medium text-sm cursor-pointer min-w-max sm:min-w-0 transition-colors duration-300 ${activeCategory === item.label
                                        ? "bg-gradient-to-r from-[#1a1a1a] to-[#3B2D00]"
                                        : "bg-[#1a1a1a]"
                                        }`}
                                >
                                    <span className="text-xl">{item.emoji}</span>
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* filtered course */}
                    <div className='relative mt-6 sm:mt-10'>
                        {/* Left Arrow */}

                        {searchCourse.length > 0 &&

                            <button
                                onClick={scrollLeft}
                                className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#1A1A1A] p-2 rounded-full shadow text-white"
                            >
                                <FaChevronLeft />
                            </button>

                        }

                        {/* courses */}
                        {searchCourse.length == 0 ? <p className='text-[#ffffff]'>Not found</p> :
                            <div ref={scrollRef} className='flex overflow-x-auto space-x-6 px-5 sm:px-10 scrollbar-hidden '>
                                {
                                    searchCourse.map((data, i) => (
                                        <CoursesCard key={i} course={data} width={"305px"} height={"318px"}/>
                                    ))
                                }
                            </div>
                        }

                        {/* Right Arrow */}
                        {searchCourse.length > 0 &&

                            <button
                                onClick={scrollRight}
                                className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#1A1A1A] p-2 rounded-full shadow text-white"
                            >
                                <FaChevronRight />
                            </button>

                        }
                    </div>

                     {/* explore button */}
                    <div className='mt-16'>
                        <a href="" className='border border-[yellow] px-[14.5px] py-[13px]  bg-custom-gold text-yellow rounded-lg font-medium text-[16px] leading-[100%] tracking-[0%] align-middle font-inter'>Explore more</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Skills