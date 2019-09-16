import React, { Component } from 'react';

class MyNav extends Component {
    constructor(props) {
        super(props);
        this.state = { searchterm:'' }
        this.search=this.search.bind(this)
    }

    search(){
      this.props.search(this.state.searchterm)
    }
    render() { 
        return ( 
        <nav className="navbar navbar-expand-md shadow-sm navbar-light sticky-top" style={{backgroundColor:'#f9f9f9e0'}}>
          <div className="container justify-content-center">
            <a className="navbar-brand col" href="/">Esoko</a>
      
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              
              <div className="form-inline my-auto">
                <div className="input-group ">

                  <input 
                    className="form-control" 
                    aria-describedby="button-addon2"
                    name="searchterm" 
                    onChange={e=>this.setState({searchterm:e.target.value})} 
                    value={this.state.searchterm} 
                    type="search" 
                    placeholder="Find a product..." 
                    aria-label="Search"/>

                  <div className="input-group-append">
                    <button className="btn btn-secondary" type="button" id="button-addon2" onClick={this.search} >
                      <i className="fas fa-search"></i>
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
      </nav> );
    }
}
 
export default MyNav;