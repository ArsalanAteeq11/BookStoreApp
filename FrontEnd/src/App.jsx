import React from 'react'
import { Toaster } from 'react-hot-toast';
import { Navigate, Route,Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Courses from './components/courses/Courses'
import SignUp from './components/SignUp'
import Contact from './components/Contact'
import { useAuth } from './context/AuthProvider';


const App = () => {
  const [authUser, setAuthUser] = useAuth()
  return (<>
  <div className='dark:bg-slate-900 dark:text-white'>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/course' element={authUser?<Courses/>:<Navigate to='/signup'/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
   <Toaster position="top-center" />
   </div>
  </>)
}

export default App