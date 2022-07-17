import React from 'react'
import '../style/layout/transactions.scss'
function Transactions({ transactions }) {
  return (
    <div className='transactionsContainer'>
        {transactions.length > 0 ? transactions.map(el => {
        return <div  key={el.id}>
            <ul>
            <li className='incomes' key={el.id} >{el.concept} {el.date}  <span className={el.amount > 0 ? "income" : "expense"}> {`$${el.amount}` } </span>
           
            
            <button className='editButton' onClick={() => console.log(el.id)}>edit</button>
            <button className='deleteButton'>x</button>
            </li>
            </ul>
           

        </div>

      }) : <p>there are no transactions yet :( </p>}
           
    </div>
  )
}

export default Transactions

