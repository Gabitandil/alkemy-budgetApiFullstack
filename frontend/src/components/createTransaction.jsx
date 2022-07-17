import React from 'react'
import '../style/layout/createTransactions.scss'
function CreateTransaction({transactions}) {
  return (
    <div className='createContainer'>

        <p>add your transactions here  </p>
        <form  className='formContainer'>
            <input type="text" placeholder='concept ' />
            <input type="text" placeholder='amount' />
            <input type="date" />
            <select placeholder='tuvieja' >
                <option  value="">type of transaction</option>
                <option value="">income</option>
                <option value="">expense</option>
            </select>
        </form>
        <button className='createButton'>create transaction</button>

    </div>
  )
}

export default CreateTransaction