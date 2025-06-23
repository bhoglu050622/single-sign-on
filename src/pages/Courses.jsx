import { useContext, useEffect, useState } from 'react';
import bghome from '../../public/bg_gradient.png'
import { FaCheck, FaSearch, } from 'react-icons/fa'; // npm install react-icons
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CourseContext } from '../context/CourseContextProvider';
import CoursesCard from '../components/CourseComponents/CoursesCard';



const Courses = () => {

    const { courses } = useContext(CourseContext)


    const [lan_more, setLan_more] = useState(true)
    const [ment_more, setMent_more] = useState(true)


    const [searchCourse, setSearchCourse] = useState([""])
    const [searched, setSearched] = useState("")



    const categories = [
        "Technology",
        "Arts",
        "Civil",
        "Mechanical",
        "Medical",
        "Electrical",
    ];

    const languages = [
        "English",
        "Tamil",
        "Telugu",
        "Hindi",
        "Malayalam",
        "French",
    ]

    const mentors = [
        "Davis Philips",
        "Ann Vaccaro",
        "Angel Gouse",
        "Giana Herwitz",
        "Lindsey Workman"
    ]

    const [selectedCategories, setSelectedCategories] = useState(["Mechanical"]);
    const [selectedLanguages, setSelectedLanguages] = useState(["Tamil"]);
    const [selectedMentors, setSelectedMentors] = useState(["Giana Herwitz"]);


    const handleCheckboxChange = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((item) => item !== category)
                : [...prev, category]
        );
    };


    const handleLanguagesCheckbox = (language) => {
        setSelectedLanguages((prev) =>
            prev.includes(language)
                ? prev.filter((item) => item !== language)
                : [...prev, language]
        );
    };


    const handleMentorsCheckbox = (mentor) => {
        setSelectedMentors((prev) =>
            prev.includes(mentor)
                ? prev.filter((item) => item !== mentor)
                : [...prev, mentor]
        );
    };


    const [showDropdown, setShowDropdown] = useState(false);
    const [selected, setSelected] = useState("Best Match");

    const options = ["Best Match", "Newest", "Most Popular"];





    useEffect(() => {
        let data = courses.slice()

        data = data.filter((value, i) =>
            value.domain.toLowerCase().includes(searched.toLowerCase()) ||
            value.mentors.toLowerCase().includes(searched.toLowerCase()) ||
            value.language.toLowerCase().includes(searched.toLowerCase())
        )

        // data = data.filter((value, i) => value.category.toLowerCase().includes(activeCategory.toLowerCase()))

        setSearchCourse(data)

    }, [searched])





    return (
        <>
            <div className='bg-black '>
                {/* <div className='absolute top-0  z-[-1]  w-full '>
                    <img src={bghome} alt="#" className="w-full h-full object-cover" />
                </div> */}

                <div className='px-4 lg:px-16 text-[#ffffff] '>

                    <div className='flex justify-between '>
                        {/* left */}
                        <div className='w-[20%] h-[90vh]   overflow-y-auto scrollbar-hidden'>
                            <div className='flex flex-col gap-6 pb-5'>

                                <div>
                                    <h5>COURSES</h5>
                                    <hr className='my-3  border-[#353535]' />
                                    <div className='flex flex-col '>
                                        <p className='py-1 pl-3 '>Bundle Courses</p>
                                        <p className='py-1 pl-3 '>Individual Courses</p>
                                        <p className='py-1 pl-3 '>Free Courses</p>
                                    </div>
                                </div>

                                <div>
                                    <h5>CATEGORIES</h5>
                                    <hr className='my-3  border-[#353535]' />
                                    <div className="space-y-3 ml-3">
                                        {categories.map((category) => {
                                            const isChecked = selectedCategories.includes(category);
                                            return (
                                                <label key={category} className="flex items-center space-x-3 cursor-pointer">
                                                    <div onClick={() => handleCheckboxChange(category)} className={`h-4 w-4 flex items-center justify-center border rounded-sm ${isChecked ? 'bg-yellow border-yellow' : 'bg-black border-[#353535]'}`}>
                                                        {isChecked && <FaCheck className="text-black text-xs" />}
                                                    </div>
                                                    <span className="text-sm">{category}</span>
                                                </label>
                                            );
                                        })}
                                    </div>
                                </div>


                                <div>
                                    <h5>LANGUAGES</h5>
                                    <hr className='my-3  border-[#353535]' />
                                    <div className="space-y-3 ml-3">
                                        {(lan_more ? languages.slice(0, 5) : languages).map((language) => {
                                            const isChecked = selectedLanguages.includes(language);
                                            return (
                                                <label key={language} className="flex items-center space-x-3 cursor-pointer">
                                                    <div onClick={() => handleLanguagesCheckbox(language)} className={`h-4 w-4 flex items-center justify-center border rounded-sm ${isChecked ? 'bg-yellow border-yellow' : 'bg-black border-[#353535]'}`}>
                                                        {isChecked && <FaCheck className="text-black text-xs" />}
                                                    </div>
                                                    <span className="text-sm">{language}</span>
                                                </label>
                                            );
                                        })}

                                        <div className='flex justify-between' onClick={() => { setLan_more(prev => !prev) }}>
                                            {lan_more ? <p className='text-yellow'>view more (25)</p> : <p className='text-yellow'>view less</p>}
                                            {lan_more ? <MdKeyboardArrowDown className='text-[##969696]' /> : <MdOutlineKeyboardArrowDown className='text-[##969696]' />}
                                        </div>

                                    </div>

                                </div>


                                <div>
                                    <h5>MENTORS</h5>
                                    <hr className='my-3  border-[#353535]' />
                                    <div className="space-y-3 ml-3">
                                        {(ment_more ? mentors.slice(0, 3) : mentors).map((mentor) => {
                                            const isChecked = selectedMentors.includes(mentor);
                                            return (
                                                <label key={mentor} className="flex items-center space-x-3 cursor-pointer">
                                                    <div onClick={() => handleMentorsCheckbox(mentor)} className={`h-4 w-4 flex items-center justify-center border rounded-sm ${isChecked ? 'bg-yellow border-yellow' : 'bg-black border-[#353535]'}`}>
                                                        {isChecked && <FaCheck className="text-black text-xs" />}
                                                    </div>
                                                    <span className="text-sm">{mentor}</span>
                                                </label>
                                            );
                                        })}

                                        <div className='flex justify-between' onClick={() => { setMent_more(prev => !prev) }}>
                                            {ment_more ? <p className='text-yellow'>view more (28)</p> : <p className='text-yellow'>view less</p>}
                                            {ment_more ? <MdKeyboardArrowDown className='text-[##969696]' /> : <MdOutlineKeyboardArrowDown className='text-[##969696]' />}
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        {/* right */}
                        <div className='w-[75%] h-[90vh]   overflow-y-auto scrollbar-hidden'>

                            <div className='flex justify-between'>
                                <div className='w-[60%]'>
                                    <div className="flex max-w-[630px]  pl-4 pr-1 py-1 bg-[#1a1a1a] text-white rounded-md ">
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
                                </div>



                                <div className='w-[30%] flex justify-end'>
                                    <div className="relative inline-flex text-left text-white  items-center gap-3 ">
                                        <label className="text-sm mr-2">Sort by:</label>

                                        <div
                                            className="bg-[#1a1a1a] px-4 py-2 rounded-md border border-[#2c2c2c] cursor-pointer flex items-center justify-between min-w-[160px]"
                                            onClick={() => setShowDropdown((prev) => !prev)}
                                            onMouseEnter={() => setShowDropdown(true)}
                                        >
                                            <div>{selected}</div>
                                            <div className="ml-2 text-gray-400">&#9662;</div>

                                            {showDropdown && (
                                                <div
                                                    className="absolute top-12 mt-2 left-0 w-full bg-black border border-[#2c2c2c] rounded-md shadow-md z-10"
                                                    onMouseEnter={() => setShowDropdown(true)}
                                                    onMouseLeave={() => setShowDropdown(false)}
                                                >
                                                    {options.map((option) => (
                                                        <div
                                                            key={option}
                                                            onClick={() => {
                                                                setSelected(option);
                                                                setShowDropdown(true);
                                                            }}
                                                            className={`px-4 py-2 text-sm flex justify-between items-center cursor-pointer hover:bg-[#333] ${selected === option ? "text-white" : "text-gray-400"
                                                                }`}
                                                        >
                                                            <span>{option}</span>
                                                            {selected === option && <FaCheck className="text-white text-xs" />}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>



                            </div>

                            <div className='mt-7  '>
                                {searchCourse.length == 0 ? <p className='text-[#ffffff]'>Not found</p> :
                                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                                        {
                                            searchCourse.map((data, i) => (
                                                <CoursesCard key={i} course={data} height='374px' />
                                            ))
                                        }
                                    </div>
                                }
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses





