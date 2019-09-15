import React, { Component } from 'react';   
import Product from './Product';
import MyNav from './Nav';


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
        fetch('http://127.0.0.1:8000/api/products?api_token='+localStorage.getItem('api_token')).then(data=>data.json()).then(data=>{
          this.setState({products:data})
        })
      }
    render() { 
        return ( 
          <div>
            <MyNav/>
            <div className="container">
              <h3 className="text-secondary">All Products</h3>
              <div className="row">
              {this.state.products.map(product=>{
                return (<Product key={product.id} product={product}/>)
              })}
              </div>
            </div>
            </div>
         );
    }
}
 
export default ProductsList;