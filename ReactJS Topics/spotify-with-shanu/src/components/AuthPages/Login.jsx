import React, { useReducer } from 'react'
import { Reducer } from '../utilities/Reducer'
import axios from "axios"
import {ToastContainer, toast} from "react-toastify"
import {useNavigate} from "react-router-dom"

let loginData = {
  email: "",
  password: ""
}
const Login = () => {
  let [initialData, dispatch] = useReducer(Reducer, loginData)
  let navigate = useNavigate()

  let handleChange = (e) => {
    let { name, value } = e.target
    dispatch({ type: "updateUser", name, value })
  }

  let handleSubmit = async (e) => {
    e.preventDefault()
    console.log(initialData)
    try {
      const res = await axios.get(`https://obscure-space-potato-wrpr7xrrg674c59w-5500.app.github.dev/users/?email=${initialData.email}`)
      if(res.data.length!=0 && res.data[0].email === initialData.email && res.data[0].password === initialData.password){
        toast.success("User Logged in Successfully", {
          position: 'top-right',
          autoClose: 2000,
        })
        setTimeout(() => {
          navigate("/")
        }, 2000);
      }else{
      toast.error("Credentials are incorrect", {
          position:'top-right',
          autoClose: 2000
        })

      console.log("User is not present")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h1>Login Here To listen</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Enter your mail' name='email' id='email' value={initialData.email} onChange={handleChange} />
        <input type="password" placeholder='Enter your password' name='password' id='password' value={initialData.password} onChange={handleChange} />
        <button type='submit'>Login</button>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default Login