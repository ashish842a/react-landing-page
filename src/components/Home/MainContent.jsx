import React from 'react'

function MainContent() {
  return (
    <div className='container-fluid text-white position-absolute top-50 gap-10' style={{marginTop:"-20vh"}}>
    <div className="container-fluid d-flex flex-column gap-2">
        <h4>Jane's</h4>
        <h1>FASHION BLOG</h1>
        <button className='btn bg-dark text-white d-block p-2' style={{width:"fit-content"}}>SUBSCRIBE</button>
    </div>
    </div>
  )
}

export default MainContent