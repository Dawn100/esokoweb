import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 


        let detailUrl="/"+this.props.product.id+"/detail"
        let editUrl="/"+this.props.product.id+"/edit"


        return ( <div className="card" style={{width: '18rem'}}>
        <img src={this.props.product.photo} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{this.props.product.name}</h5>
        <h6 className="card-subtitle mb-2 text-success">Kshs. {this.props.product.price}</h6>
        <small className="card-text text-muted">{this.props.product.description}</small>
        <br/>
        {this.props.mine
        ?<a href={editUrl} className="btn btn-primary">Edit</a>
        :<a href={detailUrl} className="btn btn-primary">Detais</a>
        }
        </div>
      </div>
         );
    }
}
 
export default Product;