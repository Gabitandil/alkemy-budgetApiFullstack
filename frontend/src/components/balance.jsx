import React from 'react'
import { Link } from 'react-router-dom'
import "../style/layout/balance.scss"

function Balance({ transactions }) {
  const getAmounts = transactions.map(transaction => transaction.amount)
  const total = getAmounts.reduce((acc, item) => (acc += item), 0)

  const limitTransactions = transactions.slice(-10)
  console.log('total', total)

  return (
    <div >

      <h1 style={{ margin: 0 }} >Your Balance is  </h1  >
      {total ? <h1 className={total < 0 ? "expense" : "income"}>{`$${total}`}</h1> : <h1>$0</h1>}

      {limitTransactions.length > 0 ? limitTransactions.map(transaction => {
        return <div key={transaction.id}>
          <li className='homeTransactions'>
            <h2 className='category'>{`{${transaction.category}}`}</h2>  <h2>{transaction.concept}</h2>  <h2 >{transaction.type_transaction}</h2>  <h2 className={transaction.amount < 0 ? "expense" : "income"}>{`$${transaction.amount}`}</h2>

          </li>
        </div>
      }) : <p>you have no movements go to transactions to add them</p>}



    </div>
  )
}

export default Balance