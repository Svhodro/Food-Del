import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreManu/ExploreMenu'
import FoodDispaly from '../../components/FoodDisplay/FoodDispaly'

function Home() {
  const [category,setcategory]=useState('All')
  useEffect(()=>{
    console.log(category);
  },[category])
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setcategory={setcategory}/>
      <FoodDispaly category={category}/>
    </div>
  )
}

export default Home