import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:courseId' element={<CourseDetail />} />

        {/* below is not the correct way for nested routing as it will not render the product component */}
        {/* <Route path='/product/men' element={<Men />} />
        <Route path='/product/women' element={<Women />} />
        <Route path='/product/kids' element={<Kids />} /> */}

        <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids />} />
        </Route>

        {/* * path is used to match all the routes which are not defined and render the not found component */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App