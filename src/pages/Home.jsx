import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllRecipes } from '../redux/slices/recipeSlice'



const Home = () => {
  const dispatch = useDispatch()
  const {allRecipes,loading,error} = useSelector(state=>state.recipeReducer)
  console.log(allRecipes,loading,error);

  const [currentPage,setcurrentPage] = useState(1)
  const productPerPage = 8
  const totalPage = Math.ceil(allRecipes?.length/productPerPage)
  const currentPageLastProductIndex =  currentPage * productPerPage
  const currentPageFirstProductIndex = currentPageLastProductIndex - productPerPage
  const visibleProductCards = allRecipes?.slice(currentPageFirstProductIndex,currentPageLastProductIndex)
  
  useEffect(()=>{
      dispatch(fetchAllRecipes())
  },[])

  const navigateToNextPage = ()=>{
    if(currentPage<totalPage){
      setcurrentPage(currentPage+1)
    }
  }

  const navigateToPreviousPage = ()=>{
    if(currentPage!=1){
      setcurrentPage(currentPage-1)
    }
  }
  return (
    <>
    <Header insideHome={true}/>
    <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
       { 
        loading ?
          <div  className='flex justify-center items-center my-5 text-lg'>
            <img width={'70px'} height={'70px'} className='me-2' src="https://media.tenor.com/khzZ7-YSJW4AAAAM/cargando.gif" alt="" />Loading...
          </div>
        :
        <>
            <div className="grid grid-cols-4 gap-4">
               
               {
                allRecipes?.length>0 ?
                visibleProductCards?.map(recipe=>(
                  <div key={recipe?.id} className="rounded border p-2 shadow">
                  <img width={'100%'} height={'200px'} src={recipe?.image} alt="" />
                  <div className="text-center ">
                    <h3 className='text-xl font-bold'>{recipe?.name}</h3>
                    <p style={{fontSize:'15px'}}>Cuisine : {recipe?.cuisine}</p>

                    <Link className=' bg-pink-700 text-white p-1 mt-3 rounded inline-block'  to={`${recipe?.id}/view`}>View More</Link>
                  </div>
                      </div>
                ))
                :
                <div  className='flex justify-center items-center text-red-600 my-5 text-lg'>
                  No Recipes Found!!!
                  </div>

               }
                </div>

                
        <div className="text-center my-5 font-bold text-xl mt-20 ">
          <span onClick={navigateToPreviousPage} className='cursor-pointer'> <i className="fa-solid fa-backward me-5"></i> </span>
          <span className='me-5'> {currentPage} of {totalPage}  </span>
          <span onClick={navigateToNextPage} className='cursor-pointer'> <i className="fa-solid fa-forward me-5"></i> </span>

        </div>
        </>}
    </div>
    </>
  )
}

export default Home