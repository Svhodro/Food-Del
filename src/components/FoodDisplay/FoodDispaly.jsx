import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

function FoodDispaly() {
   const{food_list}= useContext(StoreContext)
   
  return (
    <div>
      <div className='py-6'>
       <h1 className='font-bold text-2xl sm:text-4xl ' >Top Disces Near You</h1>
      </div>
      <div className='flex justify-center items-center flex-wrap gap-2 py-10'>
        {food_list.map((item,index)=>{
              return <FoodItem key={index} item={item}/>
        })}
      </div>
    </div>
  )
}

export default FoodDispaly