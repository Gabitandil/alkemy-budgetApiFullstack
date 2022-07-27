import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import axiosClient from '../axios/axios'
import { toast } from 'react-toastify'
import '../style/layout/createTransactions.scss'
function CreateTransaction({ transactions, setTrackState, trackState }) {
  const [input, setInput] = useState({
    concept: "",
    amount: "",
    type_transaction: "",
    date: "",
    category: ""
  })
  function transactionCreate(input, e) {
    if (!input.concept) {
      toast.warn('concept is empty', {
        position: "top-center"
      })
      e.preventDefault()
    }
    if (!input.amount) {
      toast.warn("amount is empty", {
        position: "top-center"
      })
      e.preventDefault()
    }
    if (isNaN(input.amount)) {
      toast.warn('amount must be a number', {
        position: "top-center"
      })
      e.preventDefault()
    }
    if (!input.date) {
      toast.warn('you must put a date', {
        position: "top-center"
      })
      e.preventDefault()
    }
    if (!input.type_transaction) {
      toast.warn('you must choose a transaction type', {
        position: "top-center"
      })
      e.preventDefault()
    }
    if (!input.category) {
      toast.warn("you must select a category", {
        position: "top-center"
      })
      e.preventDefault()
    }
    else {
      axiosClient.post("/create", {
        concept: input.concept,
        amount: input.amount,
        type_transaction: input.type_transaction,
        date: input.date,
        category: input.category
      }, 
      {
        headers : {
          token :  `Bearer ${localStorage.getItem("token")}`
        }
      }) 
      toast.success('transaction created', {
        position: "top-center"
      })
      setTrackState(trackState => trackState+ 1)
      setInput({
        concept: "",
        amount: "",
        type_transaction: "",
        date: "",
        category: ""
      })
    }
  }
  function handleInputCreate(e) {
    setInput({
      ...input,

      [e.target.name]: e.target.value
    })

  }
  function handleSelect(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className='createContainer'>
      <p>add your transactions here  </p>
      <form className='formContainer'>
        <input onChange={(e) => handleInputCreate(e)} value={input.concept} type="text" placeholder='concept ' name='concept' />
        <input onChange={(e) => handleInputCreate(e)} value={input.amount} type="text" placeholder='amount' name='amount' />
        <input onChange={(e) => handleInputCreate(e)} value={input.date} type="date" name='date' />
        <select onChange={(e) => handleSelect(e)} value={input.type_transaction} name='type_transaction' >
          <option value="">type of transaction</option>
          <option value="income">income</option>
          <option value="expense">expense</option>
        </select>
        <select onChange={(e) => handleSelect(e)} value={input.category} name="category" >
          <option value="">category</option>
          <option value="food">food</option>
          <option value="taxes">taxes</option>
          <option value="fun">fun</option>
          <option value="other">other</option>
        </select>
      </form>
      <button onClick={(e) => { transactionCreate(input, e); toast.clearWaitingQueue();  }} className='createButton'>create transaction</button>
    </div>
  )
}

export default CreateTransaction