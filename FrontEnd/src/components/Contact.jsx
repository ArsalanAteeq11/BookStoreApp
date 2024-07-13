import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className='flex h-screen items-center justify-center'>
      <div className='w-[600px]'>
        <div className="modal-box dark:text-black">
          <form method="dialog">
          <h3 className="font-bold text-2xl">Contact Us</h3>
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input type="text" placeholder="Enter your name" className="w-80 px-2 py-1 border rounded-md outline-none"/>
          </div>
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input type="email" placeholder="Enter your email" className="w-80 px-2 py-1 border rounded-md outline-none"/>
          </div>
          <div className="mt-4 space-y-2">
            <span>Message</span>
            <br />
            <textarea placeholder="Type your message" className="w-80 px-2 py-1 border rounded-md outline-none" />
              
          </div>
          <div className="mt-6">
            <button className="bg-blue-500 text-white px-3 py-1 rounded-md border hover:bg-blue-700 duration-200">Submit</button>
                  
          </div>
          </form>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default Contact