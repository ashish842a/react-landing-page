import React from 'react'

function Adds(props) {
  return (
  <div className="container mt-2 ">
    <div class="card bg-dark text-white border">
  <img src={props.imgUrl} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.para}</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
  </div>
  )
}

export default Adds