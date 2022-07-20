import { useEffect, useState, useMemo } from 'react';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './style/layout/app.scss'
import axiosClient from './axios/axios';
import Balance from './components/balance'
import CreateTransaction from './components/createTransaction';
import Transactions from './components/transactions';
import Categories from './components/categories'


function App() {

  const [transactions , setTransactions] = useState([])
  const [data , setData] = useState([])
   let container = transactions.concept
   function getValues(){
    let jsonData = axiosClient.get().then(res => {
        
      setTransactions( res.data)
      setData(res.data)
    })
  }
  let test 
  useEffect( () => {
   getValues()
    console.log('useffect')
     
   }, [] )

   
 
  

  return (
    <div className="App">
      <ToastContainer limit={1} autoClose={1000}/>
     <Balance transactions = {transactions}   />
     <Transactions transactions={transactions} data = {data}/>
     <CreateTransaction transactions = {transactions} />
     <Categories transactions = {transactions} setData = {setData}/>
    </div>
  );
}

export default App;
