import React from 'react'

function Head(props) {
  return (
    <div className="container d-flex align-item-center justify-content-center p-4 mt-4 text-dark">
    <div className="box d-flex flex-column mt-2">
        <h2>{props.heading.toUpperCase()}</h2>
        <p>{props.subHead}</p>
    </div>
</div>
  )
}

export default Head