import React from 'react'
import { useState } from 'react'
import '../style/layout/categories.scss'
function Categories({transactions, setData}) {

 const [category, setCategory] =   useState("")
 const [selected, setSelected] = useState(0)
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
        
       
         <span className={selected === "food" ? "selected" : "opt-container"} > <a  onClick={() => filterCategory("food")} >food</a> </span> 
         <span className={selected === "taxes" ? "selected" : "opt-container"}> <a onClick={() =>filterCategory("taxes")}> taxes</a></span>
          <span className={selected === "fun" ? "selected" : "opt-container"}> <a onClick={() => filterCategory("fun")}>fun</a> </span>
           <span className={selected ==="other" ? "selected" : "opt-container"}><a onClick={() => filterCategory("other")}>others</a>   </span> 
         
         </li>
    </div>
  )
}

export default Categories