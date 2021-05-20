import React, {useState,useEffect}from 'react'
import './movie.css'
import {Link} from 'react-router-dom'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
function Movies ({film,input,addFavorite}) {


  console.log("jjjjjjjjjjjj",input)
  return(
       
         // input===""?
        // film.map(el=>
          
        //     <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 mt-3">
             
        //         <div className="card" >
        //         <Link to={"/details" + el.id}>
        //         <img src={el.Images} className="card-img-top w-100 h-100" alt="..."/>
        //         </Link>
        //      <div className="card-body ">
        //      <p className="card-text title-film">{el.Title} <i class="fas fa-heartbeat" onClick={() => {addFavorite(el)}}></i></p>
        //      <div className="d-flex justify-content-around">
        //      <p className="card-text text-center ">{el.Year}</p>
        //      <p className="type-film">{el.Type}</p>
        //      <p><i class="fas fa-play-circle"></i></p>
        //      </div>
             
        //   </div>
         
        //   </div> 
         
        //     </div>
            
        //    ):
    
          //  film.filter(el=>
          //   el.Title.toLowerCase().includes(input.toLowerCase())
          //   ).map(el=>
         film.map(el=>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 mt-3">
                <div className="card" >
                <Link to={"/details" + el.id}>
                <img src={el.image} className="card-img-top w-100 h-100" alt="..."/>
                 </Link>
             <div className="card-body ">
             <p className="card-text title-film">{el.title} </p>
             <div className="d-flex justify-content-around">
             <p className="card-text text-center ">{el.year}</p>
            
             <p><i class="fas fa-play-circle"></i></p>
             
             </div>
             <Rater total={5} rating={el.rating} interactive={false}  /><i class="fas fa-heartbeat ml-3" onClick={() => {addFavorite(el)}}></i>
          </div>
         
          </div> 
            </div>
           )
           
      
   
   
   )

 }

export default Movies