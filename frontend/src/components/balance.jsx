import React from 'react'

import "../style/layout/balance.scss"

function Balance({ transactions }) {
  const getAmounts = transactions.map(transaction => transaction.amount)
    const total = getAmounts.reduce((acc, item) => (acc += item),0)
 
  
   

  return (
    <div>
      <h1 className='title'>BUGDET API  </h1>
      <h2>Your Balance is  </h2>
       {total? <h1 className={total < 0 ? "expense" : null}>{`$${total}`}</h1> : <h1>$0</h1>}
       

      
   
    </div>
  )
}

export default Balance