import React from 'react'
import MainContent from './MainContent'

function Main(props) {
  return (
    <div className='conatiner-fluid bg-dark position-relative'>
     <MainContent />
     <img src={props.imgUrl} class="img-fluid" style={{width:"100vw",height:"100vh"}} alt='about-img' /> 
    </div>
  )
}

export default Main