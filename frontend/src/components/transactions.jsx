import React from 'react'

import '../style/layout/transactions.scss'
import axiosClient from '../axios/axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import Modal from 'react-modal'


function Transactions({ transactions }) {
    Modal.setAppElement('#root');
 const [openModal, setOpenModal] = useState(false);
 const [modalData, setModalData] = useState(null);

  const [updateTransaction, setUpdateTransaction] = useState({
    
    concept:   "",
    amount :  ""
  })

    function deleteTransaction(id){
        axiosClient.delete(`delete/${id}`)
        toast.success('Transaction deleted succesfully')
        setTimeout(() => {
            window.location.reload();
        }, 800);


    }
    

    function handleEditInput(e){
      setUpdateTransaction({
        ...updateTransaction,
        
        [e.target.name]: e.target.value
      })
    }

 
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          height: "50%",
          width: "50%",
          padding: "0"
        },
      }

     
      function closeModal() {
        setOpenModal(false);
      }
      
      function editTransaction(updateTransaction, id,e){
        if(!updateTransaction.concept) {
          toast.warning('concept is empty')
          e.preventDefault()
        }
        if(modalData.amount <0){
          
          updateTransaction.amount =  updateTransaction.amount*-1
        }
        if(!updateTransaction.amount){
          toast.warning("amount is empty");
          e.preventDefault()
        }
        if(isNaN(updateTransaction.amount)){
          
          toast.warning("amount must be a number");
          e.preventDefault()
        } 
         else{
          axiosClient.put(`/change/${id}`, {
            concept: updateTransaction.concept,
            amount: updateTransaction.amount
          })
          toast.success('Transaction updated')
          setTimeout(() => {
            window.location.reload();
        }, 2000);
        }

        
     
       
      }
     
      
  return (
    <div className='transactionsContainer'>
        {transactions.length > 0 ? transactions.map(el => {
        return <div  key={el.id}>
            <ul>
            <li className='incomes' key={el.id} >{el.concept} {el.date}  <span className={el.amount > 0 ? "income" : "expense"}> {`$${el.amount}` } </span>
           
            
            <button className='editButton' onClick={()=> {setModalData(el); setOpenModal(true);  } }>edit</button>
            <Modal isOpen={openModal}   style={customStyles}>
                <div>
                <button className='closeModal' onClick={() => closeModal()}>x</button>
                
                
                    <input onChange={(e) =>handleEditInput(e)} value={updateTransaction.concept} type="text"  name='concept' placeholder={modalData? modalData.concept : null}  />
                    <input onChange={(e)=> handleEditInput(e)} value={updateTransaction.amount} type="text" name='amount'  placeholder={modalData? modalData.amount : null} />
                    <button onClick={() => editTransaction(updateTransaction, modalData.id)  }>finish edit</button>
                    
                    
                
                </div>
                </Modal>
            
            <button onClick={() => deleteTransaction(el.id)} className='deleteButton'>x</button>
            </li>
            </ul>
           

            <ToastContainer/>
        </div>
      }) : <p>there are no transactions yet :( </p>}
           
    </div>
  )
}

export default Transactions

