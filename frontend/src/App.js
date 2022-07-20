import { useEffect, useState, useMemo } from 'react';
import './style/layout/app.scss'
import axiosClient from './axios/axios';
import Balance from './components/balance'
import CreateTransaction from './components/createTransaction';
import Transactions from './components/transactions';



function App() {
  
  const [transactions , setTransactions] = useState([])
  const [transactions2 , setTransactions2] = useState("")
   let container = transactions.concept
   function getValues(){
    let jsonData = axiosClient.get().then(res => {
        
      setTransactions( res.data)
      
    })
  }
  let test 
  useEffect( () => {
   getValues()
    console.log('useffect')
     test = transactions.concept
   }, [test] )
   console.log(transactions.length)
   console.log(transactions)
 
  

  return (
    <div className="App">
     <Balance transactions = {transactions} transactions2 = {transactions2} />
     <Transactions transactions={transactions}/>
     <CreateTransaction transactions = {transactions} />
    </div>
  );
}

export default App;
