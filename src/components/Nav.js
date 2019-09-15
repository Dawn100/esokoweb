import React, { Component } from 'react';

class MyNav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <nav className="navbar navbar-expand-md shadow-sm navbar-light bg-light">
          <div className="container justify-content-center">
          <a className="navbar-brand col" href="/">Esoko</a>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Find a product..." aria-label="Search"/>
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
        </div>
      </nav> );
    }
}
 
export default MyNav;