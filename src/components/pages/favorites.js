import React from 'react'
import Navbarr from '../navbar/navbar'
import './pages.css'

const Favorites = ({favorite}) => {
  return(
    <div>
      <Navbarr/>
     <div className="favorite row mx-2" >
     {
         favorite.map(el=>
    
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 mt-3">
              <div className="card" >
              <img src={el.image} className="card-img-top w-100 h-100" alt="..."/>
           <div className="card-body ">
           <p className="card-text title-film">{el.title}</p>
           <div className="d-flex justify-content-around">
           <p className="card-text text-center ">{el.year}</p>
           <p className="type-film">{el.type}</p>
           <p><i class="fas fa-play-circle"></i></p>
           </div>
           
        </div>
       
        </div> 
          </div>
         )
     }
     </div>
    </div>
   )

 }

export default Favorites