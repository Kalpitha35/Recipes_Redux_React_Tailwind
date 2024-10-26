import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchRecipe } from '../redux/slices/recipeSlice'

const Header = ({insideHome}) => {
  const dispatch = useDispatch()
  return (
    <nav className='flex bg-pink-700 fixed w-full h-20 p-5'>
        <Link className='text-white font-bold text-3xl' to={'/'} > <i className="fa-solid fa-bowl-food me-1"></i> Recipes</Link>
        <ul className='flex-1 text-right'>
{   
    insideHome &&
             <li className='list-none inline-block px-5'> <input onChange={e=>dispatch(searchRecipe(e.target.value.toLowerCase()))} type="text" style={{width:'300px'}} className='rounded p-1' placeholder='Search Recipes Here' /> </li>
}        </ul>
    </nav>
  )
}

export default Header