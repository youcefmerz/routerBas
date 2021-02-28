import React, { useState , useEffect, useRef } from "react"
import MoviesList from "./Components/MoviesList";
import SearchBar from "./Components/SearchBar";
import AddMovie from "./Components/AddMovie";
import {moviesList} from './assets/MookData'
import {Switch , Route}  from 'react-router-dom'
import Desc from './Components/Desc'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [movieList, setMovieList] = useState(moviesList)

const [searchWord , setSearchWord] = useState('')
const handleSearch = (a) => {
  setSearchWord(a.target.value) }

  const [ratingSearch, setRatingSearch] = useState(0) 
  const Addmovie = (newMovie)=> {
    setMovieList([...movieList, newMovie])
      }
    
  
  return (
    <div className="App"> 
    
     <Switch>

       <Route path='/' exact>
        <SearchBar handleSearch={handleSearch} ratingSearch={ratingSearch} setRatingSearch= {setRatingSearch}/>
     <MoviesList moviesArray={searchWord ? movieList.filter((elm) => elm.title.includes(searchWord))
     :
     ratingSearch > 1
     ? movieList.filter((movie)=> movie.rate >= ratingSearch)
     : movieList} />
     <AddMovie handleAdd={Addmovie}/>
       </Route>
       <Route path='/App' exact>
        <SearchBar handleSearch={handleSearch} ratingSearch={ratingSearch} setRatingSearch= {setRatingSearch}/>
     <MoviesList moviesArray={searchWord ? movieList.filter((elm) => elm.title.includes(searchWord))
     :
     ratingSearch > 1
     ? movieList.filter((movie)=> movie.rate >= ratingSearch)
     : movieList} />
     <AddMovie handleAdd={Addmovie}/>
       </Route>
       <Route path="/Desc" exact>
         <Desc  />
       </Route>
      
     </Switch>
      </div>
  )

  }
  


export default App;
