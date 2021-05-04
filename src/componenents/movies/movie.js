import React, {useState,useEffect}from 'react'
import './movie.css'

function Movies () {
  const [film, setFilm] = useState([])
  const getFilm = ()=>{
    
    fetch('films.json').then(
          response => response.json()).then 
                   (films => setFilm(films));
  }
  
  useEffect(()=> {getFilm()
  },[])

  console.log("jjjjjjjjjjjj",film)
  return(
   
    film.map(el=>
      
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 mt-3">
            <div className="card" >
            <img src={el.Images} className="card-img-top w-100 h-100" alt="..."/>
         <div className="card-body ">
         <p className="card-text title-film">{el.Title}</p>
         <div className="d-flex justify-content-around">
         <p className="card-text text-center ">{el.Year}</p>
         <p className="type-film">{el.Type}</p>
         <p><i class="fas fa-play-circle"></i></p>
         </div>
         
      </div>
     
      </div> 
        </div>
       )
  
   )

 }

export default Movies