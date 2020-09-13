import React from 'react';
import {BrowserRouter as Router, Switch, Route ,Link} from "react-router-dom";
import { MDBBtn } from "mdbreact";
import './Front.css';
import Navbar from './Navbar'


const Front=()=>{
    return(
       <div className="survey__tiger">
        
        <div className="survey__body">
         <Navbar/>
            
         <Link to="/create" >
            <button className="survey__btn">Create Survey</button>
         </Link>

         <Link to="/take" >
            <button className="survey__btn">Take Survey</button>
         </Link>

        </div>
      </div>

    )
}

export default Front;
    