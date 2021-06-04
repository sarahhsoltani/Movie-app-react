import React from 'react'
import './footer.css'


const Footer = () => {
  return(
   <div className="footer mt-5 pt-4">
      <div className="container">
        <div className="row">
        
        <div className="col-md-3 ">
        <img  className="mb-3 log"  src="./image/logo.png" alt="..."/>
        <div className="d-flex">
        <div className="social"> <i class="fab fa-facebook-f"></i></div>
            <div className="social"><i class="fab fa-twitter"></i></div>
            <div className="social"><i class="fab fa-instagram"></i></div>
             <div className="social"><i class="fab fa-pinterest-p"></i></div>
        </div>
        </div>
        <div className="col-md-3">
        <h3 className="title-footer">Quick Links</h3>
            
          <ul>
          <li><a href="ll">My Account</a></li>
            <li><a href="ll">About Us</a></li>
            <li><a href="ll">Promotions</a></li>
           <li> <a href="ll">Dressing</a></li>
           <li> <a href="ll">Contact Us</a></li>
          </ul>
        </div>
        <div className="col-md-3">
        
           {/* ------------------------ */}
           <h3 className="title-footer">Conect With Us</h3>
          <p>A: 14 L.E Goulburn St, Berlin 2000Wm</p>
          <p>P: (+88) 1990 6886</p>
          <p>E: contact@9studio.com</p>
         <div className="d-flex"> <p className="social"><i class="fas fa-map-marker-alt"></i></p>
          <a href="ll">Google Map</a></div>
      
        </div>
        <div className="col-md-3">
           {/* ------------------------ */}
        <h3 className="title-footer">Conect With Us</h3>
        <div className="d-flex flex-wrap">
          <img src='image/serial-category04.jpg' className="w-50 immg image-fluid "  alt="..."/>
          <img src='image/serial-category03.jpg' className="w-50 immg image-fluid "  alt="..."/>
          <img src='image/serial-category02.jpg'  className="w-50 immg image-fluid " alt="..."/>
          <img src='image/serial-category01.jpg'  className="w-50 immg image-fluid " alt="..."/>
        </div>
        </div>
        </div>
        <hr className="hr"/>
        <p className="text-center pb-2">Copyright ©2021 All rights reserved | By Sarah </p>
    </div>
   </div>
   )

 }

export default Footer