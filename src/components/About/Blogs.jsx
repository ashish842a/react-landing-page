import React from 'react'
import Blog from './Blog'

function Blogs() {
  return (
    <div className="col-sm-8 bg-white text-white">
     <div className="container p-4 ">
     <Blog heading={"More Hats! I "} subHead={"Title description, May 2, 2016"} imgUrl={"https://www.w3schools.com/w3images/girl_hat.jpg"} title={"Hats! The trend this summer is hats for men!"} para={"Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."}/>

     <Blog heading={"TITLE HEADING"} subHead={"Title description, May 2, 2016"} imgUrl={"https://www.w3schools.com/w3images/man_hat.jpg"} title={"Dont miss! The runway in New York City this weekend is gonna be legendary!"} para={"Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."} />

     <Blog heading={"TITLE HEADING"} subHead={"Title description, May 2, 2016"} imgUrl={"https://www.w3schools.com/w3images/runway.jpg"} title={"More Hats! I am crazy about hats these days"}  para={"Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."}/>
     </div>
    </div>
  )
}

export default Blogs