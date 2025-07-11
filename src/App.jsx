import React from 'react'
import "@fontsource/inter";
import Header from './components/Header'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses';
import Testimonials from './pages/Testimonials';
import Course from './pages/Course';
import AdminDashboard from './pages/AdminDashboard';
import StudentDashboard from './pages/StudentDashboard';
import { useAuth } from './context/AuthContextProvider';

// Nested children
import Videos from './components/CourseComponents/Videos';
import StudRev from './components/CourseComponents/StudRev';

import React, { Component } from 'react'
import "@fontsource/inter";
import Header from './components/Header'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses';
import Testimonials from './pages/Testimonials';
import Course from './pages/Course';
import AdminDashboard from './pages/AdminDashboard';
import StudentDashboard from './pages/StudentDashboard';
import { useAuth } from './context/AuthContextProvider';

// Nested children
import Videos from './components/CourseComponents/Videos';
import StudRev from './components/CourseComponents/StudRev';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-red-600 p-4">Something went wrong: {this.state.error?.message}</div>;
    }

    return this.props.children; 
  }
}

const App = () => {
  const { user } = useAuth();

  return (
    <ErrorBoundary>
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

            <Route path='/admin-dashboard' element={user?.role === 'admin' ? <AdminDashboard /> : <Navigate to='/' />} />
            <Route path='/student-dashboard' element={user?.role === 'student' ? <StudentDashboard /> : <Navigate to='/' />} />

            {/* Redirect after login based on role */}
            <Route path='/dashboard' element={
              user?.role === 'admin' ? <Navigate to='/admin-dashboard' /> :
                user?.role === 'student' ? <Navigate to='/student-dashboard' /> :
                  <Navigate to='/' />
            } />

            {/* Redirect unknown routes */}
            <Route path="*" element={<Navigate to="/" />} />

          </Routes>
        </div>

      </div>
    </ErrorBoundary>
  )
}

export default App
