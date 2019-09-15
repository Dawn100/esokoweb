import React, { Component } from 'react';   
import Product from './Product';
import MyNav from './Nav';


class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          products:[],
          myproducts:[]
         }
      }


      componentDidMount(){
          if(!localStorage.getItem("api_token")){
            window.location.href='/login'
          }
        fetch('http://127.0.0.1:8000/api/products?api_token='+localStorage.getItem('api_token')).then(data=>data.json()).then(data=>{
          this.setState({products:data})
        })

        fetch('http://127.0.0.1:8000/api/user/products?api_token='+localStorage.getItem('api_token')).then(data=>data.json()).then(data=>{
          this.setState({myproducts:data})
        })

      }
    render() { 
        return ( 
          <div>
            <MyNav/>
            <div className="container">

              <ul className="justify-content-center nav nav-tabs" style={{marginTop:15,marginBottom:15}} id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                  All Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                  My Products
                  </a>
                </li>
              </ul>


            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div className="row justify-content-center">
              {this.state.products.map(product=>{
                return (<Product key={product.id} product={product}/>)
              })}
              </div>
              </div>
              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <a href='/add' className="btn btn-info float-right">Add Product</a>
              {this.state.myproducts.map(product=>{
                return (<Product key={product.id} product={product} mine={true}/>)
              })}


              </div>
            </div>
              
            </div>
            </div>
         );
    }
}
 
export default ProductsList;