// import CourseRatings from '../components/CourseComponents/CourseRatings';
// import Instructor from '../components/CourseComponents/Instructor';
// import Reviews from '../components/CourseComponents/Reviews';
// import Skill from '../components/CourseComponents/Skill';
// import VidReview from '../components/CourseComponents/VidReview';
// import Yvideo from '../components/CourseComponents/Yvideo';

// const Course = () => {



//     return (
//         <div>
//             <div className='px-3 sm:px-14 lg:px-20 py-48'>
//                 <div className='flex'>
//                     <div className='w-[70%]'>
//                         <div>
//                             <Yvideo />
//                         </div>
//                         <Reviews />
//                         <Skill />
//                         <Instructor />
//                         <div className='bg-[#0C0C0C] p-4 rounded-lg'>
//                             <CourseRatings />
//                             <VidReview/>
//                         </div>
//                     </div>

//                     <div className='w-[25%]'></div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Course











import { Outlet } from 'react-router-dom';
import CourseRatings from '../components/CourseComponents/CourseRatings';
import Instructor from '../components/CourseComponents/Instructor';
import Skill from '../components/CourseComponents/Skill';
import Yvideo from '../components/CourseComponents/Yvideo';
import VidReview from '../components/CourseComponents/VidReview';

const Course = () => {
  return (
    <div className='px-3 sm:px-14 lg:px-20 '>
      <div className='flex'>
        <div className='w-full lg:w-[70%]'>
          <Yvideo />
          <Skill />
          <Instructor />
          <div className='bg-[#0C0C0C] p-4 rounded-lg'>
            <CourseRatings />

            {/* This is the tabs + <Outlet /> for Videos/Reviews */}
            <VidReview />
            <Outlet />
            
          </div>
        </div>

        <div className='lg:w-[25%]'></div>
      </div>
    </div>
  );
};

export default Course;

