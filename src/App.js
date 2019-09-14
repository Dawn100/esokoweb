import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import  Update  from "./components/Update";
import  ProductsList  from "./components/ProductsList";
import  DetailProduct  from "./components/DetailProduct";
import Add from "./components/Add";
import Edit from './components/Edit';
import Login from './components/Login';
import Signup from './components/Signup';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
     }
  }



  
  render() { 

    return ( 
    <Router>
        <Route exact path="/" component={ProductsList} />
        <Route path="/add" component={Add} />
        <Route path="/edit" component={Edit} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/detail" component={DetailProduct} />
        <Route path="/update" component={Update} />
    </Router>
     );
  }
}
 
export default App;