import React from 'react'

function AddData(props) {
  return (
  <div className="container mt-2 ">
    <div className="card bg-dark text-white border">
  <img src={props.imgUrl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.para}</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
  </div>
  )
}

export default AddData;