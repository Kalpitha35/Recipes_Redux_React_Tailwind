import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllRecipes } from '../redux/slices/recipeSlice'


const View = () => {

  const {id} = useParams()
  console.log(id);
  const dispatch = useDispatch()

  const [recipe,setRecipe] = useState({})
  
  useEffect(()=>{
    if(sessionStorage.getItem("allRecipes")){
      const allRecipes = JSON.parse(sessionStorage.getItem("allRecipes"))
      setRecipe(allRecipes?.find(item=>item.id==id))
    }
  },[])


  console.log(recipe);
  
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='flex content-center items-center mx-5'>
      <div className="grid grid-cols-2 items-center">
          <img width={'80%'} height={'250px'} src={recipe?.image} alt="" />
          <div>
            <h3>PID : {recipe?.id}</h3>
            <h1 className='text-5xl font-bold'>{recipe.name}</h1>
            <h4 className='text-2xl text-red-600 font-bold '>{recipe?.rating} <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i> </h4>
            <h3 className="font-bold my-2 text-black">Cuisine : {recipe?.cuisine} </h3>
            <h3 className="font-bold my-2 text-black">mealType : {recipe?.mealType}</h3>
            <h3 className="font-bold my-2 text-black">Ingredients : {recipe?.ingredients}</h3>

            
            <p className='fw-bold'>
              <span className='font-bold'>Instructions</span>: {recipe?.instructions} 
            </p>
            <div className="flex justify-between mt-5">
              <Link to={'/'}  className="text-white bg-pink-700 rounded p-2">Back</Link>
            </div>
            
          
          </div>
      </div>
    </div>
  </>
  )
}

export default View