import React from 'react'
import { useState } from 'react'
import '../style/layout/categories.scss'
function Categories({transactions, setData}) {
 const [category, setCategory] =   useState("")
 const [selected, setSelected] = useState(0)
 function filterByTransactionType(opt){
  const backup = transactions
  if(category === opt){
    setData(backup)
    setCategory("")
    setSelected("")
  }
  else{
    let filterByTransactionType = backup.filter(element => element.type_transaction.includes(opt))
    setData(filterByTransactionType)
    setCategory(opt)
    setSelected(opt)
  }
 }
 function filterCategory(opt){
    const backup = transactions
    if(category === opt){
        setData(backup)
        setCategory("")
        setSelected("")
    }
    else{
        let filterByCategory = backup.filter(element => element.category.includes(opt))
        setData(filterByCategory)
        setCategory(opt)
        setSelected(opt)

    }
 }
  return (
    <div className='categoriesContainer'>
    <li className='opt-container' >
         <span onClick={() => filterCategory("food")} className={selected === "food" ? "selected" : "opt-container"} > <a   >food</a> </span> 
         <span onClick={() =>filterCategory("taxes")}className={selected === "taxes" ? "selected" : "opt-container"}> <a > taxes</a></span>
          <span  onClick={() => filterCategory("fun")}className={selected === "fun" ? "selected" : "opt-container"}> <a >fun</a> </span>
           <span onClick={() => filterCategory("other")} className={selected ==="other" ? "selected" : "opt-container"}><a >others</a>   </span>
           <div className='tp-container' >
           <span onClick={() => filterByTransactionType("income")} className={selected === "income"? "income-selected" : "income-option"}> <a >incomes</a>  </span>
           <span  onClick={() => filterByTransactionType("expense")} className={selected ==="expense"? "expense-selected": "expense-option"} ><a  >expenses</a></span>
           </div>
         </li>
    </div>
  )
}

export default Categories