import React, { Component } from 'react';
import MyNav from './Nav';


class Add extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            categories:[],
            category_id:'',
            name:'',
            description:'',
            price:0,
            stock:0
        }
        this.add=this.add.bind(this);
    }


    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/categories').then(response=>response.json()).then(response=>{
            this.setState({
                categories:response
            })
        })
    }

    add(){

        const photoInput = document.getElementById('photo_file');

        var myjson={
            category_id:this.state.category_id,
            name:this.state.name,
            description:this.state.description,
            price:parseFloat(this.state.price),
            stock:parseInt(this.state.stock),
            photo:photoInput.files[0]
        }

        var data = new FormData()

        for (const key in myjson) {
            if (myjson.hasOwnProperty(key)) {
                const element = myjson[key];
                data.append(key, element)
            }
        }
        
        fetch('http://127.0.0.1:8000/api/products?api_token='+localStorage.getItem("api_token"),{
            method:'POST',
            body:data
        }).then(response=>{
            if (response.ok) {
                return response.json()
            } 
        }).then(response=>{
                //window.location.href='/'
                console.log(response)
        })

    }

    render() { 
        return ( 
            <div>
                <MyNav/>
                <div className="container">
                    <div className="row justify-content-center align-self-center" style={{marginTop:50}}>
                        <div className="card col-sm-12 col-md-5" style={{padding:20}}>
                        <h3>New Product</h3>
                            <hr/>
                            <div className="form-group">
                                <select name="category_id" onChange={(e)=>this.setState({category_id:e.target.value})} className="form-control" id="categoriesSelect">
                                    <option>Category...</option>
                                    {this.state.categories.map(cat=>{
                                        return <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    })}
                                </select>
                            </div>
                            
                            <input className="form-control" type="text" onChange={(e)=>this.setState({name:e.target.value})} name="name" placeholder="Enter the name of the product"/>
                            <br/>
                            <input className="form-control" type="number" onChange={(e)=>this.setState({stock:e.target.value})} name="stock" placeholder="Enter the amount of stock"/>
                            <br/>
                            <textarea className="form-control" type="text" onChange={(e)=>this.setState({description:e.target.value})} name="description" placeholder="Enter the description of the product"></textarea>
                            <br/>
                            <input className="form-control" type="number" onChange={(e)=>this.setState({price:e.target.value})} name="price" placeholder="Enter the price of the product"/>
                            <br/>
                            <input id="photo_file" type="file" name="photo"/>
                            <br/>
                            <button className="btn btn-primary" onClick={this.add} type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Add;