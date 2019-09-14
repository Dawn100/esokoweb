import React, { Component } from 'react';


class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>

                <input type="text" name="name" placeholder="Enter the name of the product"/>
                <textarea type="text" name="description" placeholder="Enter the description of the product"></textarea>
                <input type="number" name="price" placeholder="Enter the price of the product"/>
                <input type="file" name="photo"/>
                <button type="submit">Sumit</button>
            </div>
         );
    }
}
 
export default Add;