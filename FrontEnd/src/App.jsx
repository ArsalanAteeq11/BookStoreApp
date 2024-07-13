import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Courses from './components/courses/Courses'
import SignUp from './components/SignUp'
import Contact from './components/Contact'


const App = () => {
  return (<>
  <div className='dark:bg-slate-900 dark:text-white'>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course' element={<Courses/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
   </div>
  </>)
}

export default App