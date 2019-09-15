import React, { Component } from 'react';
import MyNav from './Nav';


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
               <MyNav/>
               <div className="row justify-content-center align-self-center" style={{marginTop:50}}>
                <div className="card col-sm-12 col-md-4" style={{padding:20}}>
                    <h3 className="text-secondary">Signup</h3>
                    <br/>
                    <input className="form-control" type="text" name="name" placeholder="Full name..."/>
                    <br/>
                    <input className="form-control" type="email" name="email" placeholder="johndoe@example.com"/>
                    <br/>
                    <input className="form-control" type="password" name="password" placeholder="Password"/>
                    <br/>
                    <input className="form-control" type="password" name="cpassword" placeholder="Confirm Password"/>
                    <br/>
                    <div className="row justify-content-around">
                    <button className="col-4 btn btn-primary" type="submit">Signup</button>
                    <a href="/login" className="col-4 btn btn-outline-primary">Login</a>
                    </div>
                    </div>
                    
                </div>
            </div>
         );
    }
}
 
export default Signup;