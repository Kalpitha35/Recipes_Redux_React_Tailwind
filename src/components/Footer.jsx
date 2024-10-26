import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'250px',marginTop:'100px'}} className='mt-5 w-full  bg-pink-500 text-white p-4'>
      
      <div className="flex flex-col justify-between m-5">

        <div style={{marginBottom:'30px'}} className="intro text-center">
        <Link className='text-white font-bold text-3xl' to={'/'} > <i className="fa-solid fa-bowl-food me-1"></i> Recipes</Link>
         
        </div>

        
        <div className="flex flex-col">
        <h5 className="text-xl font-bold text-center">Contact us</h5>
        
       
          <div style={{color:'white', marginTop:'20px', marginLeft:'-20px'}} className="flex justify-evenly ">
         
          <a href="" target='_blank' style={{textDecoration:'none', color:'white'}}><i className="fa-brands fa-twitter"></i></a>
          <a href="" target='_blank' style={{textDecoration:'none', color:'white'}}><i className="fa-brands fa-instagram"></i></a>
          <a href="" target='_blank' style={{textDecoration:'none', color:'white'}}><i className="fa-brands fa-facebook"></i></a>
          <a href="" target='_blank' style={{textDecoration:'none', color:'white'}}><i className="fa-brands fa-linkedin"></i></a>
          <a href="" target='_blank' style={{textDecoration:'none', color:'white'}}><i className="fa-brands fa-github"></i></a>
          <a href="" target='_blank' style={{textDecoration:'none', color:'white'}}><i className="fa-brands fa-phone"></i></a>

          </div>
 
        
        </div>
      </div>

     <div className='text-center text-white'> <span >Copyright Recipes.Built with React Redux</span></div>
    </div>
  )
}

export default Footer