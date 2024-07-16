import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Login from './Login'
import axios from 'axios';
import toast from 'react-hot-toast';

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit =async (data) => {
      const userInfo = {
        fullname : data.fullname,
        email : data.email,
        password:data.password
      }
      await axios.post("http://localhost:4001/user/signup", userInfo)
      .then((res)=>{
        console.log(res.data)
        if (res.data) {
          
          toast.success("Signup Sucessfully")
          navigate(from, { replace: true } );
        }
        localStorage.setItem("users",JSON.stringify(res.data))
      }).catch((err)=>{
        if (err.response) {
          
          console.log(err)
          toast.error("Error " + err.response.data.message)
        }
      })
    };
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='w-[600px]'>
        <div className="modal-box dark:bg-slate-800 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>{navigate('/')}}>
              ✕
            </button>
          
          <h3 className="font-bold text-2xl">Sign Up</h3>
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input type="text" placeholder="Enter your name" className="w-80 px-2 py-1 border rounded-md outline-none dark:bg-slate-800 dark:text-white" {...register("fullname", { required: true })}/>
            <br />
              {errors.fullname && (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              )}
          </div>
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input type="email" placeholder="Enter your email" className="w-80 px-2 py-1 border rounded-md outline-none dark:bg-slate-800 dark:text-white" {...register("email", { required: true })}
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
            <input type="password" placeholder="Enter your password" className="w-80 px-2 py-1 border rounded-md outline-none dark:bg-slate-800 dark:text-white" {...register("password", { required: true })}
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