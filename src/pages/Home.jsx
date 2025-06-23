import AboutUs from '../components/HomeComponents/AboutUs'
import Courses from '../components/HomeComponents/Courses'
import DownloadSection from '../components/HomeComponents/DownloadSection'
import Hero from '../components/HomeComponents/Hero'
import Skills from '../components/HomeComponents/Skills'
import StudentsSay from '../components/HomeComponents/StudentsSay'
import StudWorksAt from '../components/HomeComponents/StudWorksAt'
import WeDo from '../components/HomeComponents/WeDo'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Courses/>
      <AboutUs/>
      <StudentsSay/>
      <StudWorksAt/>
      <DownloadSection/>
    </div>
  )
}

export default Home