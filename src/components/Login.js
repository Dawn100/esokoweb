import React, { Component } from 'react';
import MyNav from './Nav';
const axios = require('axios');



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",password:""
          }
    }

    login(){
        fetch('http://127.0.0.1:8000/api/login/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        }).then(response=>response.json()).then(response=>{
           localStorage.setItem('api_token',response.api_token);
           if(localStorage.getItem("api_token")){
            window.location.href='/'
          }
        })
    }
    render() { 
        return ( 
            <div>
                <MyNav/>
                <div className="row justify-content-center align-self-center" style={{marginTop:100}}>
                    <div className="card col-sm-12 col-md-4" style={{padding:20}}>
                        <h3>Login</h3>
                        <input className="form-control" type="email" onChange={(e)=>this.setState({email:e.target.value})} name="email" placeholder="Enter your email"/>
                        <br/>
                        <input className="form-control" type="password" onChange={(e)=>this.setState({password:e.target.value})} name="password" placeholder="Password"/>
                        <br/>
                        <div className="row justify-content-around">
                            <button className="btn btn-primary" type="submit" onClick={this.login.bind(this)}>Login</button>
                            <a href="/signup" className="btn btn-outline-primary">Signup</a>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Login;