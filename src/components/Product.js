import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div class="card" style={{width: '18rem'}}>
        <img src={this.props.product.photo} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">{this.props.product.name}</h5>
        <h6 class="card-subtitle mb-2 text-success">Kshs. {this.props.product.price}</h6>
        <small class="card-text text-muted">{this.props.product.description}</small>
        </div>
      </div>
         );
    }
}
 
export default Product;