import React, { Component } from 'react';
import MyNav from './Nav';
import config from "../config";

class DetailProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { product:{},user:{},category:{}  }
    }

    componentDidMount(){
     fetch(config.server+'/products/'+this.props.match.params.id+'?api_token='+localStorage.getItem('api_token')).then(data=>data.json()).then(data=>{
        this.setState({product:data,user:data.user,category:data.category})
        })
      }
    render() { 
        return ( 
            <div>
                <MyNav/>
                <div className="container">
                    <div className="row justify-content-center align-self-center" style={{marginTop:10}}>
                        <div className="row col-sm-12 col-md-12" style={{padding:20}}>
                        <img alt={"An Image showing "+this.state.product.name} className="col-md-6" src={this.state.product.photo}/>
                        <div className="col-md-6">
                            <p className="text-info">{this.state.category.name}</p>
                            <h1>{this.state.product.name}</h1>
                            <h6>Posted by: <span className="text-primary">{this.state.user.name}</span></h6>
                            <h6 className="text-warning">Kshs. {this.state.product.price}</h6>
                            <hr/>
                            <p className="text-muted">{this.state.product.description}</p>
                            <a className="btn btn-info"  href={"mailto:"+this.state.user.email+"?Subject="+this.state.product.name} target="_top">Contact Seller</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>            
         );
    }
}
 
export default DetailProduct;