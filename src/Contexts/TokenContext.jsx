import React, { createContext, useState } from 'react'

export const LoginTokenContext=createContext()

const TokenContext = ({children}) => {

    const [tokenStatus,setTokenStatus]=useState()
  return (
    <LoginTokenContext.Provider value={{tokenStatus,setTokenStatus}} >
        {children}
    </LoginTokenContext.Provider>
  )
}

export default TokenContext