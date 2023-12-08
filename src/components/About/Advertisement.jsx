import React from 'react'
import Adds from './Adds'
import adsData from '../../helper/adsData'

function Advertisement() {
  return (
    <div className="col-sm-4 bg-dark">
        {adsData && adsData.map((ad, index) => (
        <Adds key={index} {...ad} />
      ))}
    </div>
  )
}

export default Advertisement