import React from 'react'
import axiosClient from '../axios/axios';
function Balance({transactions}) {

    // async function test(){
    //     let prueba = await axiosClient.get()
    //     console.log('a', prueba.data)
    //   }


  return (
    <div>
         <h1>BUGDET API  </h1>
         
        {transactions.length > 0? transactions.map(el => {
            return <div>
                <h2> {el.concept}</h2>
            <h2>{`amount: ${el.amount}$`}</h2>
            <h2>{el.type_transaction}</h2>
            <h2>{el.date}</h2>

            <button>edit </button>
            </div>

        })
        
        : <p>there are no transactions yet </p>} 
    <button>add transaction</button>
    
    {/* {transactions.length > 0? <h2>{`balance: ${transactions[0].amount}`} </h2> : null}  */}
    {/* <h2>{`balance: ${transactions[0].amount}`}</h2> */}
    {/* <button onClick= {test}>prueba</button> */}
    </div>
  )
}

export default Balance