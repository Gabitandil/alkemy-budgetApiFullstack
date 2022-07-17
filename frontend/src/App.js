import { useEffect, useState } from 'react';
import './style/layout/app.scss'
import axiosClient from './axios/axios';
import Balance from './components/balance'
import CreateTransaction from './components/createTransaction';
import Transactions from './components/transactions';


function App() {
  const [transactions , setTransactions] = useState([])
  let response 
  useEffect( () => {
   
    
      axiosClient.get().then(res => {
       
        setTransactions(res.data)
      })
     
  
    
  }, [])
  

  return (
    <div className="App">
     <Balance transactions = {transactions} />
     <Transactions transactions={transactions}/>
     <CreateTransaction transactions = {transactions} />
    </div>
  );
}

export default App;
