import React, { useState , useEffect, useRef } from "react"
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
  } from 'reactstrap';
  import Rate from './Rate'
  import { Link } from "react-router-dom"

const MovieCard = ({movie}) => {

  return (
    <div className="App"style={{width:"330px",padding:"10px",margin:"3px",borderStyle:"groove"}}> 

        <Card>
        <CardBody>
            <div><CardTitle tag="h5"> {movie.title}</CardTitle></div>
          
        </CardBody>
        <Link className="item" to="/desc">
           <div><img width="100%" height="300px" src={movie.url} alt="Card image cap" /></div>
         </Link>
        
        
        <CardBody>
        <div><CardText>{movie.desc}</CardText></div>
          <div><Rate rating={movie.rate}/></div>
         
        </CardBody>
      </Card>
      </div>
  )

  }
  


export default MovieCard;

