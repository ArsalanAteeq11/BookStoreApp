import React, { createContext, useContext, useState } from 'react'

export const authContext = createContext()

export const AuthProvider = ({children}) => {
  const initialAuthuser = localStorage.getItem("users")
  const [authUser , setAuthUser] = useState(
    initialAuthuser? JSON.parse(initialAuthuser): undefined
  )

return(
   <authContext.Provider value={[authUser,setAuthUser]}>
     {children}
   </authContext.Provider>
)
}

export const useAuth = ()=> useContext(authContext)