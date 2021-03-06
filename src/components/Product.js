import React, { Component } from 'react';
import config from "../config";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.delete=this.delete.bind(this)
    }

    delete(){
        fetch(config.server+"/products/"+this.props.product.id+"?api_token="+localStorage.getItem('api_token'),{
            method:'DELETE'
        }).then(response=>{
            if(response.ok){
                return response.json()
            }
        }).then(response=>{
            if (response && response.message==="deleted") {
                window.location.href='/'                
            }
        })
    }
    render() { 


        let detailUrl="/"+this.props.product.id+"/detail"
        let editUrl="/"+this.props.product.id+"/edit"


        return ( <div className="card" style={{width: '22rem',margin:10}}>
        <img src={this.props.product.photo} height="250px" className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{this.props.product.name}</h5>
        <h6 className="card-subtitle mb-2 text-success">Kshs. {this.props.product.price}</h6>
        <small className="card-text text-muted" style={{height:200}}>{this.props.product.description}</small>
        <br/>
        {this.props.mine
        ?(<div className="row justify-content-around align-bottom">
            <a href={editUrl} className="btn text-info"><i className="fas fa-pen"></i></a>
            <button href={editUrl} className="btn text-danger" onClick={this.delete}><i className="fas fa-trash"></i></button>
        </div>)
        :<a href={detailUrl} className="btn text-primary">Details</a>
        }
        </div>
      </div>
         );
    }
}
 
export default Product;