import React from 'react'
import Head from './Head'

function Blog(props) {
  return (
   <div className="container border mt-4 box-shadow">
     <Head heading={props.heading} subHead={props.subHead}/>
     <div class="card mt-3 border">
    <img src={props.imgUrl} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{props.title}</h5>
      <p class="card-text">{props.para}</p>
      {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}

      <div className="container d-flex justify-content-between">
        <div className="btn btn-light text-dark border">Like</div>
        <div className="btn btn-dark text-white">Reply</div>
      </div>
    </div>
  </div>
   </div>
  )
}

export default Blog