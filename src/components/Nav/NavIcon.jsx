import React from 'react'

function NavIcon(props) {
  return (
    <a href="https://www.google.com/" className='container' role='button' rel='noreferrer' target='_blank'>
        {props.icon}
    </a>
  )
}

export default NavIcon