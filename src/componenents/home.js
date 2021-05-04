import React from 'react'
import Navbarr from './navbar/navbar'
import Movies from './movies/movie'


const Home = (props) => {
  return(
    <div>
        <Navbarr/>
      
     <div className="header">
       <div className="container ">
         <h1 className="pt-5 guerra">La Guerra de</h1>
       <h1 className="mandou">Mandou</h1>
       <div className="d-flex mt-3 list">
         <p className="chiffre mr-5">5.6 </p>
         <p></p>
         <p className="year mr-5"><i class="fas fa-layer-group"></i> 2020</p>
         <img className="hd mr-5" src="./image/hd.png" alt="..."/>
         <p className="type ">Romance, Action</p>
       </div>
      <div className="para mt-4">
      <p>lorem lorem lorem lorem lorem lorem lorem </p> 
       <p>lorem lorem lorem lorem lorem lorem lorem </p>
      </div>
      <div className="d-flex mt-5 ">
      <button className="btnn btn-redd mr-5 text-uppercase">Play Trailler</button>
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
   {/* -------------------------------------------------- */}
    {/*-------------------------- Start Services  ------------------*/}
    <div className="row mt-5">
     <div className="text-center">
     <h3 className="sub-title ">FILMMING SERVICES</h3>
        <h2 className="explore ">Explore Services</h2>
        <p className="para-service">Doloremque, ad. Vero veniam dicta aliquid blanditiis ullam quibusdam, accusamus, <br/>
eius quia molestias nihil temporibus nam praesentium odit repellat.</p>
     </div>
      <div className="col-md-6 mt-3">
        <img className="w-100 h-100" src="./image/side-image01.png" alt="...."/>
      </div>
      <div className="col-md-6 side-content mt-5">
        <h2>Best pick for hassle-free streaming experience.</h2>
        <div>
          <div className="row">
            <div className="col-md-3"><img className="w-50 h-50" src="./image/icon01.png " alt="...."/></div>
            <div className="col-md-9"><h4>Access while traveling </h4>
            <p>Keep access to your entertainment content while roaming the world.Pick from thousands.</p></div>
          </div>
          {/* ------------------------ */}
          <div className="row">
            <div className="col-md-3"><img className="w-50 h-50" src="./image/icon02.png" alt="...."/></div>
            <div className="col-md-9"><h4>Stream with no interruptions </h4>
            <p>Pause for snacks, not buffering. Stream smoothly with our lightning-fast NordLynx protocol network.</p></div>
          </div>
          {/* ------------ */}
          <div className="row">
            <div className="col-md-3"><img className="w-50 h-50" src="./image/icon03.png" alt="...."/></div>
            <div className="col-md-9"><h4>Stay secure at all times</h4>
            <p>Securely access and enjoy your favorite content, even on public Wi-Fi. Your connection</p></div>
          </div>
        </div>
      </div>
    </div>
    {/*-------------------------- End Services  --------------------*/}
      </div>
      
    <div className="list-movies text-center">
  <div className="p-5">  <h5>FIND ANYWHERE ELSE</h5> 
    <h2>Movies For You</h2></div>

   <div className="row px-3">
    <Movies/>
  
   </div>
   <button className="text-center btnn btn-redd mb-4">BROWSE ALL MOVIES</button>
    </div>
    <div className="container">
      <div className="row mt-5 ">
      <div className="col-md-6 col-12 mt-5">
        <h2>Unlimited movies, TV shows, and more.</h2>
        <h5>Watch anywhere. Cancel anytime.</h5>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span class="input-group-text" id="basic-addon2">Get Started</span>
</div>
      </div>
      <div className="col-md-6 col-12">
        <img src="./image/side-image02.png" className="image-fluid w-75 h-75  " alt="...."/>
      </div>
    </div>
    </div>
    </div>
   )

 }

export default Home