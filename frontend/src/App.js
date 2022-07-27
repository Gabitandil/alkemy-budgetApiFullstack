import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css';
import './style/layout/app.scss'
import axiosClient from './axios/axios';
import Balance from './components/balance'
import CreateTransaction from './components/createTransaction';
import Transactions from './components/transactions';
import Categories from './components/categories'
import NavBar from './components/navBar'
import Register from './components/register'
import Login from './components/login'

function App() {

  const [transactions, setTransactions] = useState([])
  const [data, setData] = useState([])
  const [trackState, setTrackState] = useState(0)
  const token = localStorage.getItem("token")
  function getValues() {
    axiosClient.get("/account/transactions",{
      headers: {
        token : `Bearer ${localStorage.getItem("token")}`
      }
    }).then(res => {

      setTransactions(res.data)
      setData(res.data)
      setTrackState(trackState)
    }).catch(err => {
      console.log(err.response.data.msg)
      
    })

 
  }

  useEffect(() => {
   token?
    setTimeout(() => {
      getValues()

    }, 200) : console.log('ea')

  }, [trackState])

  return (
    <BrowserRouter>
      <div className="App">

        <ToastContainer limit={1} autoClose={2000} />

        <Routes>
          <Route exact path ="/" element = {<Login/>} />
          <Route exact path ="/register" element = {<Register/>} />
          <Route exact path='/home' element={<><Balance transactions={transactions} /> <NavBar /> </>} />
          <Route exact path='/transactions'
            element={<><Transactions transactions={transactions} data={data} trackState={trackState} setTrackState={setTrackState} />
              <CreateTransaction transactions={transactions} trackState={trackState} setTrackState={setTrackState} />
              <Categories transactions={transactions} setData={setData} /> <NavBar /> </>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
