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
import Test from './components/Admin/test';
function App() {
  const [film, setFilm] = useState([])
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
      <Route exact path="/" > <Home film={film} getFilm={getFilm} addFavorite={addFavorite}/></Route>
      <Route  path="/favorites" > <Favorites favorite={favorite}/> </Route>
      <Route  path="/tips" > <Tips/></Route>
            {film.map((el) => (
              <Route path={"/details" + el.id}>
                <Details el={el}/>
              </Route>
            ))}
      <Route  path="/contact" > <Contact/></Route>
      <Route path="/admin" ><Admin/></Route>
      <Route path="/test" ><Test/></Route>
    </BrowserRouter>
  );
}

export default App;
