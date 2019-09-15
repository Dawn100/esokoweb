import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
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
        <Route path="/:id/edit" component={Edit} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/:id/detail" component={DetailProduct} />
    </Router>
     );
  }
}
 
export default App;