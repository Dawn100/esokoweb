import React, { Component } from 'react';
import MyNav from './Nav';


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { name:"",email:"",password:"",cpassword:"" }

        this.signup=this.signup.bind(this)
    }



    signup(){
        fetch('http://127.0.0.1:8000/api/register/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        }).then(response=>{
            if (response.ok) {
            return response.json()
            } 
        }).then(response=>{
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
               <div className="container">
               <div className="row justify-content-center align-self-center" style={{marginTop:50}}>
                <div className="card col-sm-12 col-md-4" style={{padding:20}}>
                    <h3 className="text-secondary">Signup</h3>
                    <br/>
                    <input className="form-control" onChange={(e)=>this.setState({name:e.target.value})} type="text" name="name" placeholder="Full name..."/>
                    <br/>
                    <input className="form-control" onChange={(e)=>this.setState({email:e.target.value})} type="email" name="email" placeholder="johndoe@example.com"/>
                    <br/>
                    <input className="form-control" onChange={(e)=>this.setState({password:e.target.value})} type="password" name="password" placeholder="Password"/>
                    <br/>
                    <input className="form-control" onChange={(e)=>this.setState({cpassword:e.target.value})} type="password" name="cpassword" placeholder="Confirm Password"/>
                    <br/>
                    <div className="row justify-content-around">
                    <button className="col-4 btn btn-primary" onClick={this.signup}>Signup</button>
                    <a href="/login" className="col-4 btn btn-outline-primary">Login</a>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Signup;