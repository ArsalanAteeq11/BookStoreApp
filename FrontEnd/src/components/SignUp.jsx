import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Login from './Login'

const SignUp = () => {
    const navigate = useNavigate()
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='w-[600px]'>
        <div className="modal-box dark:text-black">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>{navigate('/')}}>
              ✕
            </button>
          
          <h3 className="font-bold text-2xl">Sign Up</h3>
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input type="text" placeholder="Enter your name" className="w-80 px-2 py-1 border rounded-md outline-none" {...register("name", { required: true })}/>
            <br />
              {errors.name && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
          </div>
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input type="email" placeholder="Enter your email" className="w-80 px-2 py-1 border rounded-md outline-none" {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
          </div>
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input type="password" placeholder="Enter your password" className="w-80 px-2 py-1 border rounded-md outline-none" {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
          </div>
          <div className="flex justify-around items-center mt-6">
            <button className="bg-pink-500 text-white px-3 py-1 rounded-md border hover:bg-pink-700 duration-200">SignUp</button>
            <p>Already have account?<span className="underline text-blue-500 cursor-pointer" onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }>Login</span></p>
                  
          </div>
          </form>
          <Login/>
        </div>
      </div>
      </div>
  )
}

export default SignUp