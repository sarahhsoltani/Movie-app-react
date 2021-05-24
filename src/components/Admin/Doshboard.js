import React from 'react'
import { Link } from 'react-router-dom';
import "./admin.css";
import "./material-dashboard.css"
const Doshboard = () => {
  return(
    <div class="dark-edition">
          <div class="wrapper ">
    <div className="sidebar" data-color="purple" data-background-color="black" >
    
      <div className="logo">
      <img src="./image/logo.png" alt="..." className="logo-dash mb-5"/>
  </div>
      <div className="sidebar-wrapper mt-5">
        <ul className="nav">
          <li className="nav-item active  ">
            <Link className="nav-link" to='/admin'>
              <i className="material-icons">dashboard</i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="./user.html">
              <i className="material-icons">person</i>
              <p>User Profile</p>
            </a>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/addMovies">
              <i className="material-icons">content_paste</i>
              <p>Movie List</p>
            </Link>
          </li>
         
         
         
          <li className="nav-item ">
            <Link className="nav-link" to="/notification">
              <i className="material-icons">notifications</i>
              <p>Notifications</p>
            </Link>
          </li>
         
        </ul>
      </div>
    </div>
    <div className="main-panel">
    
      <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top " id="navigation-example">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <a className="navbar-brand" href="javascript:void(0)">Dashboard</a>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation" data-target="#navigation-example">
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end">
            <form className="navbar-form">
              <div className="input-group no-border">
                <input type="text" value="" class="form-control" placeholder="Search..."/>
                <button type="submit" className="btn btn-default btn-round btn-just-icon">
                  <i className="material-icons">search</i>
                  <div className="ripple-container"></div>
                </button>
              </div>
            </form>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  <i className="material-icons">dashboard</i>
                  <p className="d-lg-none d-md-block">
                    Stats
                  </p>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="javscript:void(0)" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="material-icons">notifications</i>
                  <span className="notification">5</span>
                  <p className="d-lg-none d-md-block">
                    Some Actions
                  </p>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="javascript:void(0)">Mike John responded to your email</a>
                  <a className="dropdown-item" href="javascript:void(0)">You have 5 new tasks</a>
                  <a className="dropdown-item" href="javascript:void(0)">You're now friend with Andrew</a>
                  <a className="dropdown-item" href="javascript:void(0)">Another Notification</a>
                  <a className="dropdown-item" href="javascript:void(0)">Another One</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  <i className="material-icons">person</i>
                  <p className="d-lg-none d-md-block">
                    Account
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4 col-lg-12">
              <div className="card card-chart">
                <div className="card-header card-header-success">
                  <div className="ct-chart" id="dailySalesChart">
                  <span class="material-icons live">
                     live_tv
                     </span>
                  </div>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Movies Store</h4>
                  <p className="card-category">
                    <span className="text-success"><i class="fa fa-long-arrow-up">
                   
                      </i> 
                      <br/> <br/>
                      55% </span> increase in today sales.</p>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">access_time</i> updated 4 minutes ago
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12">
              <div className="card card-chart">
                <div className="card-header card-header-warning">
                  <div className="ct-chart" id="websiteViewsChart">
                  <span class="material-icons live">
                    forward_to_inbox
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Email Subscriptions</h4>
                  <p className="card-category"> <br/> <br/> Last Campaign Performance</p>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">access_time</i> campaign sent 2 days ago
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12">
              <div className="card card-chart">
                <div className="card-header card-header-danger">
                  <div className="ct-chart" id="completedTasksChart">
                  <span class="material-icons live">
                    notifications_active
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Completed Tasks</h4>
                  <p className="card-category"> <br/> <br/> Last Campaign Performance</p>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">access_time</i> campaign sent 2 days ago
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header card-header-warning card-header-icon">
                  <div className="card-icon">
                    <i className="material-icons">content_copy</i>
                  </div>
                  <p className="card-category">Used Space</p>
                  <h3 className="card-title">49/50
                    <small>GB</small>
                  </h3>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons text-warning">warning</i>
                    <a href="#pablo" className="warning-link">Get More Space...</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header card-header-success card-header-icon">
                  <div className="card-icon">
                    <i className="material-icons">store</i>
                  </div>
                  <p className="card-category">Revenue</p>
                  <h3 className="card-title">$34,245</h3>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">date_range</i> Last 24 Hours
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header card-header-danger card-header-icon">
                  <div className="card-icon">
                    <i className="material-icons">info_outline</i>
                  </div>
                  <p className="card-category">Fixed Issues</p>
                  <h3 className="card-title">75</h3>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">local_offer</i> Tracked from Github
                  </div>
                </div>
              </div>
            </div>
          
          </div>
         
        </div>
      </div>
     
    
    </div>
  </div>



  
    </div>
   )

 }

export default Doshboard