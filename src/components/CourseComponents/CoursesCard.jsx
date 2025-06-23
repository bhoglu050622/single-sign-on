import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'


const CoursesCard = ({ course, width, height }) => {
    return (
        <Link to={`/course/1`}>
            <div className=''>
                <div className={`text-[#ffffff]  h-[374px] bg-[#404040] p-3 text-start rounded-lg`}>
                    <div>
                        <img width={"100%"} src={assets.awscard} alt="" className='rounded-lg' />
                    </div>
                    <div className='flex-col justify-between mt-2'>
                        <div className='flex justify-between'>
                            <p>Beginner</p>
                            <div className='flex text-[#ffff] gap-1 items-center'>
                                <img src={assets.star} alt="" className='w-[20px] h-[20px]' />
                                <p>4.5 (30)</p>
                            </div>
                        </div>
                        <h3 >{course.domain}</h3>
                        <p>{course.mentors}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}



export default CoursesCard



