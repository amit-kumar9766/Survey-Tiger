import React from 'react'
import Front from './Front';
import {BrowserRouter as Router, Switch, Route ,Link} from "react-router-dom";
import Dropdown from './Dropdown';
import Publish from './Publish';
import "bootstrap-css-only/css/bootstrap.min.css";
//import 'font-awesome/css/font-awesome.min.css';


const App=()=>{
  
  return (
    <>
      <Router>
        <Route path="/" exact component={Front} />
        <Route path="/create" exact component={Dropdown} />
        <Route path="/publish" exact component={Publish} />
    </Router>
  

    </>
  );
}

export default App;