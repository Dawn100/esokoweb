import React, { Component } from 'react';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <input type="email" name="email" placeholder="Enter your email"/>
                <input type="password" name="password" placeholder="Password"/>
                <button type="submit">Login</button>
            </div>
         );
    }
}
 
export default Login;