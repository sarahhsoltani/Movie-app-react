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
function App() {
  const [film, setFilm] = useState([])
  const [search,setSearch]=useState("")

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
    axios.get("http://localhost:3007/posts").then((response) => {
    
      setFilm(response.data);
      console.log(`ziedaa`, film)
    });
  } 
  useEffect(()=> {getFilm()
    console.log(`ziedaa`, film)

  },[])
  return (
    <BrowserRouter>
      <Route exact path="/" > <Home film={film} getFilm={getFilm} search={search} handleChange={handleChange} addFavorite={addFavorite}/></Route>
      <Route  path="/favorites" > <Favorites favorite={favorite}/> </Route>
      <Route  path="/tips" > <Tips/></Route>
            {film.map((el) => (
              <Route path={"/details" + el.id}>
                <Details el={el}/>
              </Route>
            ))}
      <Route  path="/contact" > <Contact/></Route>
      <Route path="/admin" ><Admin /></Route>
      <Route path='/addMovies'><AddMovies getFilm={getFilm} film={film}  search={search} handleChange={handleChange} /></Route>
      <Route path="/notification"> <Notification/></Route>
    </BrowserRouter>
  );
}

export default App;
