import React from 'react'

import '../style/layout/transactions.scss'
import axiosClient from '../axios/axios'
import { toast } from 'react-toastify'

import { useState } from 'react'
import Modal from 'react-modal'
import '../style/layout/modal.scss'

function Transactions({ transactions, data , trackState, setTrackState }) {
    Modal.setAppElement('#root');
 const [openModal, setOpenModal] = useState(false);
 const [modalData, setModalData] = useState(null);

  const [updateTransaction, setUpdateTransaction] = useState({
    
    concept:   "",
    amount :  "",
    date: "",
  })

    function deleteTransaction(id){
        axiosClient.delete(`delete/${id}`)
        setTrackState(trackState => trackState+ 1)
        toast.success('Transaction deleted succesfully', {
          position: "top-center"
        })
        
     


    }
    

    function handleEditInput(e){
      setUpdateTransaction({
        ...updateTransaction,
        
        [e.target.name]: e.target.value
      })
    }

 
    const customStyles = {
        content: {
          top: '35%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          height: "20%",
          width: "50%",
          padding: "0"
        },
      }

     
      function closeModal() {
        setOpenModal(false);
      }
      
      function editTransaction(updateTransaction, id,e){
        if(!updateTransaction.date){
          updateTransaction.date = modalData.date
        }
        if(!updateTransaction.concept) {
         
          updateTransaction.concept = modalData.concept
         
        }
        if(!updateTransaction.amount){
         updateTransaction.amount = modalData.amount
          
        }
        if(modalData.type_transaction == "expense"){
          
          let expenseTransaction = -Math.abs(updateTransaction.amount)
          updateTransaction.amount = expenseTransaction
          
        }
        if(isNaN(updateTransaction.amount)){
          
          toast.warning("amount must be a number", {
            position: "top-center"
          });
          e.preventDefault()
        } 
         else{
          axiosClient.put(`/change/${id}`, {
            concept: updateTransaction.concept,
            amount: updateTransaction.amount,
            date: updateTransaction.date

          })
          
          setUpdateTransaction({
            concept: "",
            amount: ""
          })
          toast.success('Transaction updated', {
            position: "top-center"
          })
          setTrackState(trackState+1)
          
        }

        
     
       
      }
     
     
  return (
    <div className='transactionsContainer'>
        {data.length > 0 ? data.map(el => {
        return <div  key={el.id}>
            <ul>
            <li className='incomes' key={el.id} > <span className='category'>{`[${el.category}]`} </span> {el.concept} {el.date}  <span className={el.amount > 0 ? "income" : "expense"}> {`$${el.amount}` } </span>
           
            
           
            <Modal isOpen={openModal}   style={customStyles}>
                <div className='modal-container' >
                <button className='closeModal' onClick={() => closeModal()}>x</button>
                
                <div className='modal'>
                    <input onChange={(e) =>handleEditInput(e)} value={updateTransaction.concept} type="text"  name='concept' placeholder={modalData? modalData.concept : null}  />
                    <input onChange={(e)=> handleEditInput(e)} value={updateTransaction.amount} type="text" name='amount'  placeholder={modalData? modalData.amount : null} />
                    <input  onChange={(e)=> handleEditInput(e)} name="date" type="text" onFocus={(e) => (e.target.type = "date")} onBlur = {(e) => (e.target.type = "text")} placeholder={modalData? modalData.date : null} />
                    <button onClick={() => {editTransaction(updateTransaction, modalData.id); closeModal();  toast.clearWaitingQueue();}  }>edit transaction</button>
                    </div>
                    
                
                </div>
                </Modal>
                <div className='buttonContainer'>
                <button className='editButton' onClick={()=> {setModalData(el); setOpenModal(true);  } }>edit</button>
            <button onClick={() => {deleteTransaction(el.id); toast.clearWaitingQueue()}} className='deleteButton'>x</button>
            </div>
            </li>
            </ul>
           

            
        </div>
      }) : <p>there are no transactions yet :( </p>}
           
    </div>
  )
}

export default Transactions

