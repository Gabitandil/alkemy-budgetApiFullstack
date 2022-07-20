import React from 'react'
import { useState } from 'react'
import '../style/layout/categories.scss'
function Categories({transactions, setData}) {

 const [category, setCategory] =   useState("")
 const [selected, setSelected] = useState(0)
 function filterCategory(opt){
    const backup = transactions
    if(category == opt){
        
        setData(backup)
        setCategory("")
    }
    else{
        let filterByCategory = backup.filter(element => element.category.includes(opt))
        
        setData(filterByCategory)
        setCategory(opt)
        setSelected(1)

    }
   

 }
  
  return (
    <div className='categoriesContainer'>

    <li className='opt-container' >
       
         <a className="probando" onClick={() => filterCategory("food")} >food</a> <a onClick={() =>filterCategory("taxes")}> taxes</a> <a onClick={() => filterCategory("fun")}>fun</a> <a onClick={() => filterCategory("other")}>others</a>
        
         </li>
    </div>
  )
}

export default Categories