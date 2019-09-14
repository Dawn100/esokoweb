import React, { Component } from 'react';


class DetailProduct extends Component {
    constructor(props) {
        super(props);
        this.state = { product:{},user:{}  }
    }

    async componentWillMount(){
        await fetch('http://127.0.0.1:8000/api/products/'+this.props.match.params.id+'?api_token=zDlrQ3x4QLVxrK0xUseqVhzMmJQ8iEzKikdUvd2WHYQ4LXSx14nQWXsde9O9').then(data=>data.json()).then(data=>{
        this.setState({product:data,user:data.user})
        })
      }
    render() { 
        console.log(this.state.product.user)
        return ( 
            <div>
                <h1>{this.state.product.name}</h1>
                <img src={this.state.product.photo}/>
                {/* <h3>By {this.state.product.user.name}</h3> */}
                <p>{this.state.product.description}</p>
            </div>            
         );
    }
}
 
export default DetailProduct;