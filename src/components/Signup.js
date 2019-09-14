import React, { Component } from 'react';


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <input type="text" name="name" placeholder="Full name..."/>
                <input type="email" name="email" placeholder="johndoe@example.com"/>
                <input type="password" name="password" placeholder="Password"/>
                <input type="password" name="cpassword" placeholder="Confirm Password"/>
                <button type="submit">Signup</button>
            </div>
         );
    }
}
 
export default Signup;