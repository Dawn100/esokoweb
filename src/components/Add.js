import React, { Component } from 'react';
import MyNav from './Nav';


class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <MyNav/>
                <div className="container">
                    <div className="row justify-content-center align-self-center" style={{marginTop:50}}>
                        <div className="card col-sm-12 col-md-4" style={{padding:20}}>
                        <h3>New Product</h3>
                            <hr/>
                            <input className="form-control" type="text" name="name" placeholder="Enter the name of the product"/>
                            <br/>
                            <textarea className="form-control" type="text" name="description" placeholder="Enter the description of the product"></textarea>
                            <br/>
                            <input className="form-control" type="number" name="price" placeholder="Enter the price of the product"/>
                            <br/>
                            <input  type="file" name="photo"/>
                            <br/>
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Add;