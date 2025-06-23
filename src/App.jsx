import React from 'react'
import "@fontsource/inter";
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses';
import Testimonials from './pages/Testimonials';
import Course from './pages/Course';

// Nested children
import Videos from './components/CourseComponents/Videos';
import StudRev from './components/CourseComponents/StudRev';

const App = () => {
  return (
    <div className=''>
      <div className=''>
        <div className='fixed top-0 left-0 w-full z-50  bg-black sm:bg-none'>
          <Header />
        </div>

      </div>

      <div className='mt-20 sm:mt-20 sm:h-[90vh] overflow-auto scrollbar-hidden'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/course/:id' element={<Course />} />

          <Route path='/course/:id' element={<Course />}>
            <Route index element={<Videos />} />
            <Route path='review' element={<StudRev />} />
          </Route>


        </Routes>
      </div>

    </div>
  )
}

export default App



// import React from 'react';
// import "@fontsource/inter";
// import Header from './components/Header';
// import { Route, Routes } from 'react-router-dom';

// import Home from './pages/Home';
// import Courses from './pages/Courses';
// import Testimonials from './pages/Testimonials';
// import Course from './pages/Course';

// // Nested children
// import Videos from './components/CourseComponents/Videos';
// import StudRev from './components/CourseComponents/StudRev';

// const App = () => {
//   return (
//     <div className=''>
//       {/* Fixed Header */}
//       <div className='fixed top-0 left-0 w-full z-50 px-20'>
//         <Header />
//       </div>

//       {/* Page Content */}
//       <div className='mt-20 sm:h-[90vh] overflow-auto scrollbar-hidden'>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/courses' element={<Courses />} />
//           <Route path='/testimonials' element={<Testimonials />} />

//           {/* Course Route with Nested Tabs */}
//           <Route path='/course/:id' element={<Course />}>
//             <Route index element={<Videos />} />
//             <Route path='review' element={<StudRev />} />
//           </Route>
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default App;

