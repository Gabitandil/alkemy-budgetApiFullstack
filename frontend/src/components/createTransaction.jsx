import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import axiosClient from '../axios/axios'
import { toast } from 'react-toastify'
import '../style/layout/createTransactions.scss'
function CreateTransaction({transactions}) {
 const [input, setInput] = useState({
  concept: "",
  amount: "", 
  type_transaction: "",
  date: ""
 })
 function transactionCreate(input,e){
  if(!input.concept){
    toast.warn('concept is empty',{
      position: "top-center"
    })
    e.preventDefault()
  }
  if(!input.amount){
    toast.warn("amount is empty", {
      position: "top-center"
    })
    e.preventDefault()
  }
  if(isNaN(input.amount)){
    toast.warn('amount must be a number', {
      position: "top-center"
    })
    e.preventDefault()
  }
  if(!input.type_transaction){
    toast.warn('you must choose a transaction type', {
      position: "top-center"
    })
    e.preventDefault()
  }
  if(!input.date){
    toast.warn('you must put a date', {
      position: "top-center"
    })
    e.preventDefault()
  }
  else{
    axiosClient.post("/create",{
      concept: input.concept,
      amount : input.amount,
      type_transaction: input.type_transaction,
      date: input.date
    })
    toast.success('transaction created')
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  
    
 }

 function handleInputCreate(e){
  setInput({
    ...input,

    [e.target.name] : e.target.value
  })
 
 }

 function handleSelect(e){
  setInput({
    ...input,
    [e.target.name] :e.target.value
  })
 }


  return (
    <div className='createContainer'>

        <p>add your transactions here  </p>
        <form  className='formContainer'>
            <input onChange={(e) => handleInputCreate(e)} type="text" placeholder='concept ' name='concept'/>
            <input onChange={(e) => handleInputCreate(e)} type="text" placeholder='amount' name='amount' />
            <input onChange={(e) => handleInputCreate(e)} type="date"  name='date'/>
            <select onChange={(e) => handleSelect(e)} name='type_transaction' >
                <option value="">type of transaction</option>
                <option value="income">income</option>
                <option value="expense">expense</option>
            </select>
        </form>
        <button  onClick={() => transactionCreate(input)} className='createButton'>create transaction</button>
    
    </div>
  )
}

export default CreateTransaction