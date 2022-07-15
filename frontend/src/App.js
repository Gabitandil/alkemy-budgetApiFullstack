import { useEffect, useState } from 'react';
import './App.css';
import axiosClient from './axios/axios';
import Balance from './components/balance'


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
    </div>
  );
}

export default App;
