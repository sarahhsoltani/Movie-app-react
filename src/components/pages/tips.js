import React from 'react'
import Navbarr from '../navbar/navbar'
import './pages.css'

const Tips = () => {
  return(
    <div>
      <Navbarr/>
      <div className="image-show text-itemm">
      <div className="pl-3">
      <h1>Yes! Every movie <br/> is precious.</h1>
       <img className="image-fluid mt-5" src="image/awards-4.webp" alt="..."/>
      </div>
      </div>
      <div className=" container text-center mt-5">
        <p>CURABITUR TORTOR PURUS</p>
      <h1 className="mb-3">Our Latest Movies & TV Shows</h1>
      <p className="para-show">Duis mi velit, auctor vitae leo a, luctus congue dolor. Nullam at velit quis tortor malesuada <br/> 
       ultrices vitae vitae lacus. Curabitur tortor purus, tempor in dignissim eget, convallis in lorem. <br/> 
        Pellentesque non magna est. Sed sed mattis felis. 
        Curabitur orci turpis, pharetra in tristique quis, luctus ut purus.</p>
      </div>
    </div>
   )

 }

export default Tips