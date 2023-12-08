import React from 'react'
import AddData from './AddData'
import adsData from '../../helper/adsData'

function Advertisement() {
  return (
    <div className="col-sm-4 bg-dark">
        {adsData && adsData.map((ad, index) => (
        <AddData key={index} {...ad} />
      ))}
    </div>
  )
}

export default Advertisement