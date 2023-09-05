import {createContext , useContext, useState, useEffect} from 'react'

import { api } from '../services/api'

const AuthContext = createContext({})

function AuthProvider({children}){
    const [data, setData]= useState({})
    const [dishData, setDishData]= useState({})

    async function getAllDish(){
        const response= await api.get('/dishes/showdishes')
        setDishData(response.data)
    }

    async function signIn({email, password}){
      try{
            const response = await api.post('/auth' ,{email, password})
            const {user , token} = response.data

            api.defaults.headers.common['authorization'] = `Bearer ${token}`
            setData({user , token})

            localStorage.setItem('@ExploreFood:user',JSON.stringify(user))
            localStorage.setItem('@ExploreFood:token',token)
      }catch (error){
        if(error.response){
            alert(error.response.data.error)
        }else{
        alert('Não foi possivel se conectar')}
      }
    }

    function signOut(){
        localStorage.removeItem('@ExploreFood:user')
        localStorage.removeItem('@ExploreFood:token')

        setData({})
    }

    async function UpdateDish({dish, dishFile}){
       
        if(dishFile){
            console.log(dishFile)
            const fileUploadForm= new FormData()
            fileUploadForm.append('image',dishFile)

            const response = await api.patch(`/imageofdish/${dish.id}`, fileUploadForm)
            dish.image = response.data.image
        }

        try{
          
            await api.put('/dishes',dish)            

            alert('Atualizado com sucesso')
      }catch (error){
        if(error.response){
            alert(error.response.data.error)
        }else{
        alert('Não foi possivel se conectar')}
      }
    }

    async function UploadImage({ imageOfDish, name }) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('newimage', imageOfDish)
        fileUploadForm.append('name', name)

        const response = await api.post('/dishes/imageofdish', fileUploadForm, name)
    
        return response
    }
    
    useEffect(()=>{
        getAllDish()
        const user = localStorage.getItem('@ExploreFood:user')
        const token = localStorage.getItem('@ExploreFood:token')
        if(user && token){
            api.defaults.headers.common['authorization']  = `Bearer ${token}`
          
            setData({
            user: JSON.parse(user),
            token
        })

    }
    },[])

    return(
        <AuthContext.Provider value={
            {
            signIn,
            signOut,
            UpdateDish,
            UploadImage,
            dishes: dishData,
            user: data.user
            }
            }>
            {children}
        </AuthContext.Provider>
    )
}
function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export {AuthProvider, useAuth}