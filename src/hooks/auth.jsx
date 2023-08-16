import {createContext , useContext, useState, useEffect} from 'react'

import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({children}){
    
    return(
    <AuthContext.Provider 
    // value={
        // {
        // signIn,
        // signOut,
        // UpdateProfile,
        // user: data.user
        // }
        // }
        >
        {children}
    </AuthContext.Provider>
)
}


function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export {AuthProvider, useAuth}