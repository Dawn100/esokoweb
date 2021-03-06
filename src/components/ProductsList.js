import React, { Component } from 'react';   
import Product from './Product';
import MyNav from './Nav';
import config from "../config";

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          products:[],
          myproducts:[]
         }
         this.search=this.search.bind(this);
      }

      search(searchterm){
        fetch(config.server+"/search",{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({searchterm:searchterm})
        }).then(data=>data.json()).then(data=>{
          this.setState({products:data})
        })
      }


      componentDidMount(){
          if(!localStorage.getItem("api_token")){
            window.location.href='/login'
          }
        fetch(config.server+'/products?api_token='+localStorage.getItem('api_token')).then(data=>data.json()).then(data=>{
          this.setState({products:data})
        })

        fetch(config.server+'/user/products?api_token='+localStorage.getItem('api_token')).then(data=>data.json()).then(data=>{
          this.setState({myproducts:data})
        })

      }
    render() { 
        return ( 
          <div>
            <MyNav search={this.search}/>
            <div className="container">

              <ul className="justify-content-center nav nav-tabs" style={{marginTop:15,marginBottom:15}} id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" style={{border:'none',backgroundColor:'transparent'}}  id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                  All Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{border:'none',backgroundColor:'transparent'}} id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
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
                
                  <a href='/add' className="shadow-lg btn btn-secondary float-right"><i className="fas fa-plus"> Add Product</i></a>
                <br/>
                <br/>
              <div className="row justify-content-center">
              {this.state.myproducts.map(product=>{
                return (<Product key={product.id} product={product} mine={true}/>)
              })}
              </div>

              </div>
            </div>
              
            </div>
            </div>
         );
    }
}
 
export default ProductsList;