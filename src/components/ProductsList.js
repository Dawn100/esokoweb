import React, { Component } from 'react';   
import Product from './Product';
import Nav from './Nav';


class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          products:[]
         }
      }

      componentWillMount(){



        if(!localStorage.getItem("api_token")){
          window.location.href='/login'
        }
      }
      componentDidMount(){
        fetch('http://127.0.0.1:8000/api/products?api_token=zDlrQ3x4QLVxrK0xUseqVhzMmJQ8iEzKikdUvd2WHYQ4LXSx14nQWXsde9O9').then(data=>data.json()).then(data=>{
        this.setState({products:data})
        })
      }
    render() { 
        return ( 
          <div className="container">
            <Nav/>
              <h1>ProductsList</h1>
              <div className="row">
              {this.state.products.map(product=>{
                return (<Product key={product.id} product={product}/>)
              })}
              </div>
            </div>
         );
    }
}
 
export default ProductsList;