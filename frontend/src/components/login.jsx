import React from 'react'
import { useState } from 'react'
import axiosClient  from'../axios/axios'
import { useNavigate } from 'react-router'
import {toast} from 'react-toastify'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import "../style/layout/login.scss"



function Login() {
  const navigate = useNavigate()
  const [userInput, setuserInput]= useState({
    username: "",
    password : ""
  })
 const token = localStorage.getItem("token")
 

  async function login(input,e){
    try {
        e.preventDefault()
        let data = await axiosClient.post("/user/login",{
         username:input.username,
           password : input.password
         })
         
         localStorage.setItem("token", data.data.token)
         setTimeout(() => {
           window.location.reload()
         }, 300);
      
    } catch (err) {
      console.log(err.response.data.msg)
      toast.warn(err.response.data.msg,{
        position: "top-center"
      })
      toast.clearWaitingQueue();
    }
  

  
  }

  console.log(userInput)
  useEffect(() => {
    console.log('useeffect login')
    token ? navigate("/home") : navigate("/");
    
  }, [token])

  function handleInput(e){
    setuserInput({
      ...userInput,
      [e.target.name]: e.target.value

    })
  }


  

  return (
    <div  >
    
        <form onSubmit={(e) => login(userInput, e)} >
          <div className='loginContainer'>
          <h1 >welcome to budget api</h1>
            <label > username
                <input className='loginInput' onChange={(e) =>handleInput(e) } type="text" placeholder='username' name='username'/>
            </label>
            
            
            <label> password
                <input   className='loginInput' onChange={(e) =>handleInput(e) }  type="password" placeholder='password' name='password'/>

            </label>
            <button className='buttonLogin' type='submit'>login</button>
           
            </div>
           </form>
       
           <Link to  = "/register" > <button className='registerButton'>register</button></Link> 
             
            {/* <button onClick={() => login(userInput)}>login</button> */}
    </div>
  )
}

export default Login