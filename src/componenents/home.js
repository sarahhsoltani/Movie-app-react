import React from 'react'
import Navbarr from './navbar/navbar'
import {Carousel} from 'react-bootstrap'


const Home = (props) => {
  return(
    <div>
        <Navbarr/>
      
     <div className="header">
       <div className="container ">
         <h1 className="pt-5 guerra">La Guerra de</h1>
       <h1 className="mandou">Mandou</h1>
       <div className="d-flex mt-3 list">
         <p className="chiffre mr-5">5.6</p>
         <p className="year mr-5"><i class="fas fa-layer-group"></i> 2020</p>
         <img className="hd mr-5" src="./image/hd.png"/>
         <p className="type ">Romance, Action</p>
       </div>
      <div className="para mt-4">
      <p>lorem lorem lorem lorem lorem lorem lorem </p> 
       <p>lorem lorem lorem lorem lorem lorem lorem </p>
      </div>
      <div className="d-flex mt-5 ">
      <button className="btnn btn-redd mr-5">Play Trailler</button>
      <p className="plus"><span>+</span></p>
      </div>
       </div>
     </div>
      <div className="container mt-5">
        <h5 className="about"> About Us</h5>
        <h2 className="his">Our History</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="experience col-md-5 mt-5">
              <h1 className="pt-5 mt-7">YEARS OF EXPERIENCE 
              <p className="pt-3">Films+Series+ Production vidéos</p>
              </h1>
            </div>
            <div className="experience col-md-6 "> <h1 className="nine">9</h1></div>
          </div>
        </div>
        <div className="col-md-6 history">
          <h2 className="mb-4">We are a creative film and photo production company based in Berlin</h2>
          <p>We are a creative film and photo production company hungry for quality in aesthetics. To create modern recognizable stuff we are working with a strong network of experienced professionals. We set up teams to shape your identity, push your idea and manage the workflow from pre- to post-production.</p>
          <button className="btnn btn-redd">HIRE US NOW</button>
        </div>
      
      </div>
   
      </div>
       {/*-------------------------- Start Services  ------------------*/}
    <div className="row mt-5">
      <div className="col-md-6">
        <img className="w-100 h-100" src="./image/side-image01.png" alt="...."/>
      </div>
      <div className="col-md-6 side-content mt-5">
        <h2>Best pick for hassle-free streaming experience.</h2>
        <div>
          <div className="row">
            <div className="col-md-3"><img className="w-50 h-50" src="./image/icon01.png"/></div>
            <div className="col-md-9"><h4>Access while traveling </h4>
            <p>Keep access to your entertainment content while roaming the world.Pick from thousands.</p></div>
          </div>
          {/* ------------------------ */}
          <div className="row">
            <div className="col-md-3"><img className="w-50 h-50" src="./image/icon02.png"/></div>
            <div className="col-md-9"><h4>Stream with no interruptions </h4>
            <p>Pause for snacks, not buffering. Stream smoothly with our lightning-fast NordLynx protocol network.</p></div>
          </div>
          {/* ------------ */}
          <div className="row">
            <div className="col-md-3"><img className="w-50 h-50" src="./image/icon03.png"/></div>
            <div className="col-md-9"><h4>Stay secure at all times</h4>
            <p>Securely access and enjoy your favorite content, even on public Wi-Fi. Your connection</p></div>
          </div>
        </div>
      </div>
    </div>
    {/*-------------------------- End Services  --------------------*/}
    </div>
   )

 }

export default Home