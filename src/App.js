import './App.css';
import Favorites from './components/pages/favorites'
import Home from './components/home';
import {BrowserRouter,Route} from 'react-router-dom'
import Tips from './components/pages/tips';
import Contact from './components/pages/contact';
import {useState,useEffect} from 'react'
import Details from './components/pages/details';
import Admin from './components/Admin/admin';
import axios from 'axios';
import AddMovies from './components/Admin/addMovies';
import Notification from './components/Admin/notification';
import Users from './components/Admin/Users';
import Signup from './components/account/signup'
function App() {
  const [film, setFilm] = useState([])
  const [search,setSearch]=useState("")
  const [isLoading,setIsloading]=useState(true)
  const handleChange=(e)=>{
    setSearch(
      e.target.value
    )
  }
  // const getFilm = ()=>{
    
  //   fetch('films.json').then(
  //         response => response.json()).then 
  //                  (films => setFilm(films));
  // }
  
  // useEffect(()=> {getFilm()
  // },[])
  const [favorite,setfavorite]=useState([])
  const addFavorite=(e)=>{
    favorite.push(e)
    console.log(`favorite`, favorite)
  } 
   //Get movies
   const getFilm=()=> {
    axios.get("https://movie-app-react-76494-default-rtdb.firebaseio.com/posts.json").then((response) => {
      // console.log(`ziedaa`, Object.entries(response.data).map(el=>el))
      // setFilm(Object.entries(response.data).map(el=>el[1]));
      setFilm(response.data)
      //console.log(`(Object.values(response.data))`, (Object.values(response.data)))
      console.log('get my films',film)
      

      console.log('object',response.data)
    });
    
  } 

  useEffect(()=> {getFilm()
    console.log('hahahahaha',film)

  },[])
  useEffect(() =>{
    setTimeout(() => {
      setIsloading( false );
    }, 1000);
  })
 
  return (
   
     
 <div>
  
        <BrowserRouter>
        {/* {
       isLoading ? (
         <div className='text-center'> 
           <h1>Welcome to filmy</h1>
        <img src="./image/Spinner-1s-200px.svg" alt='...'/>
         </div>
        ) : 
      ( */}
      <div>
        <Route exact path="/" > <Home film={film} getFilm={getFilm} search={search} handleChange={handleChange} addFavorite={addFavorite}/></Route>
     

      
      <Route  path="/favorites" > <Favorites favorite={favorite}/> </Route>
      <Route  path="/tips" > <Tips/>
     </Route>
     {Object.keys(film).map((el) => (
              <Route exact path={"/details" + film[el].id}>
                <Details film={film} el={el}/>
              </Route>
            ))}
      <Route  path="/contact" > <Contact/></Route>
   
     
      <Route exact path="/admin" ><Admin /></Route>
    
      <Route exact path='/addMovies'><AddMovies getFilm={getFilm} film={film}  search={search} handleChange={handleChange} /></Route>
      <Route exact path="/notification"> <Notification/></Route>
      <Route exact path="/users"> <Users/></Route>
      
      </div>
     {/* )} */}
    </BrowserRouter>
 </div>
  );
}

export default App;
