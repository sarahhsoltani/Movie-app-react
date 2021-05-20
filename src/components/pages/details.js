import React from 'react'
import {Link} from 'react-router-dom'
import Navbarr from '../navbar/navbar'
import './pages.css'
const Details = ({el}) => {
  return(
    
    <div >
   <Navbarr/>
   
 <div className="details">

 <h6 className="take  pl-5">Take a look  At</h6>
<h1 className="more pl-5">for more details</h1>
</div>

<div className="d-flex mx-5  mt-5">
<div >
<iframe src={el.trailer} autoplay className="iframe"></iframe>
</div>
<div className="ml-5" >
<div className="d-flex justify-content-between text-center">
<h1 >{el.Title}</h1>

<div className="d-flex"><div className="sociall"><i class="fab fa-facebook-f mr-3"></i> </div><div className="sociall"><i class="fab fa-twitter mr-3"> </i></div> <div className="sociall"><i class="fab fa-pinterest-p"></i></div></div>
</div>
<h5><i class="far fa-clock mr-2"></i>{el.Year}</h5>
<p className="mt-4">{el.desc}</p>
<button className="text-center btnn btn-redd mt-3">Commenter</button>
</div>
</div>

</div>
   )

 }

export default Details
