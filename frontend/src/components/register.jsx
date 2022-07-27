import React from 'react'
import { useState } from 'react'
import axiosClient from '../axios/axios'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'


function Register() {

  const [user, setUser] = useState({
    username: "",
    password: ""
  })

  async function register(input, e) {
    try {
      e.preventDefault()
      await axiosClient.post("/user/register", {
        username: input.username,
        password: input.password
      })
      toast.success("registered succesfully now you can log in", {
        position: "top-center"
      })
    } catch (error) {
      console.log(error.response.data.msg)
      toast.warn(error.response.data.msg, {
        position: "top-center"
      })
      toast.clearWaitingQueue();
    }
  }

  function inputHandler(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })

  }


  return (
    <div>
      <form onSubmit={(e) => register(user, e)} >
        <div className='loginContainer'>
          <h1 >register an account</h1>
          <label > username
            <input onChange={(e) => inputHandler(e)} className='loginInput' type="text" placeholder='username' name='username' />
          </label>
          <label> password
            <input onChange={(e) => inputHandler(e)} className='loginInput' type="password" placeholder='password' name='password' />
          </label>
          <button className='buttonLogin' type='submit'>register</button>
        </div>
      </form>
      <Link to="/"> <button className='registerButton'>login</button></Link>
    </div>
  )
}

export default Register