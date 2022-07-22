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


function App() {

  const [transactions, setTransactions] = useState([])
  const [data, setData] = useState([])
  const [trackState, setTrackState] = useState(0)





  function getValues() {
    axiosClient.get().then(res => {

      setTransactions(res.data)
      setData(res.data)
      setTrackState(trackState)
    })
  }






  useEffect(() => {
    setTimeout(() => {
      getValues()

    }, 500);


    console.log('useeffect')

  }, [trackState])





  return (
    <BrowserRouter>
      <div className="App">

        <ToastContainer limit={1} autoClose={2000} />

        <Routes>
          <Route exact path='/home' element={<Balance transactions={transactions} />} />
          <Route exact path='/transactions'
            element={<><Transactions transactions={transactions} data={data} trackState={trackState} setTrackState={setTrackState} />
              <CreateTransaction transactions={transactions} trackState={trackState} setTrackState={setTrackState} />
              <Categories transactions={transactions} setData={setData} /></>} />


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
