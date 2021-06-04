import React from 'react'
import Navbarr from '../navbar/navbar'
import './pages.css'
import {Button,FormControl,Form,Pagination} from "react-bootstrap"
import Footer from '../footer/footer'
const Favorites = ({favorite,removeFavoriteMovie,removeFavoriteMovieAll}) => {
  return(
    <div>
      <Navbarr/>
      <div className="favo">
        <p>hhhhhhhhhhhhhhhhhhh</p>
        <h1 className="favo-title">Your Favorite Movies.</h1>
      </div>
      {/* ------------Cards------------------ */}
     <div className="favorite row mx-5" >
     <div className="row">
      <div className="col-md-6">
      <h2 >YFIND ANYWHERE ELSE <i class="fas fa-heart favo-heart"></i></h2>
      </div>
        <Form className="d-flex col-md-6">
      <FormControl
        type="search"
        placeholder="Search"
        
        aria-label="Search"
      />
     <Button className="btn px-4 py-2 mb-5">Search</Button>
    </Form>
       </div>
       
     {
        favorite.map(el=>
          
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 ">
            
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
      <div className="text-center ml-5 pagination">
      <Pagination >
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Ellipsis />

  <Pagination.Item active>{12}</Pagination.Item>
  <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item disabled>{14}</Pagination.Item>

  <Pagination.Ellipsis />
  <Pagination.Item>{20}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination>
      </div>

     <Footer/>
    </div>
   )

 }

export default Favorites