import React from 'react'
import Blog from './Blog'
import AllBlog from '../../helper/Blog'


function Blogs() {
  return (
    <div className="col-sm-8 bg-white text-white">
     <div className="container p-4 ">
     {AllBlog && AllBlog.map((blog, index) => (
        <Blog key={index} {...blog} />
      ))}
     </div>
    </div>
  )
}

export default Blogs