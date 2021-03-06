import React, { Component } from 'react';
import MyNav from './Nav';
import config from "../config";


class Add extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            categories:[],
            category_id:'',
            name:'',
            description:'',
            price:0,
            stock:0,
            category:''
        }
        this.add=this.add.bind(this);
        this.addCategory=this.addCategory.bind(this);
        this.fetchCategories=this.fetchCategories.bind(this);
    }

    fetchCategories(id){
        fetch(config.server+'/categories').then(response=>response.json()).then(response=>{
            this.setState({
                categories:response
            })
        })
    }

    componentDidMount(){
        this.fetchCategories();
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

        for (var key in myjson) {
            if (myjson.hasOwnProperty(key)) {
                const element = myjson[key];
                data.append(key, element)
            }
        }
        
        fetch(config.server+'/products?api_token='+localStorage.getItem("api_token"),{
            method:'POST',
            body:data
        }).then(response=>{
            if (response.ok) {
                return response.json()
            } 
        }).then(response=>{
                window.location.href='/'
        })

    }

    addCategory(){
        fetch(config.server+'/categories',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:this.state.category
            })
        }).then(response=>response.ok?response.json():null).then(response=>{
            let category_id=response.id
            fetch(config.server+'/categories').then(response=>response.json()).then(response=>{

                this.setState({
                    categories:response,
                    category_id:category_id
                })
            })
        })
    }

    render() { 
        return ( 
            <div>
                <MyNav/>
                <div className="container">
                    <div className="row justify-content-center align-self-center" style={{marginTop:50}}>
                        <div className="card shadow col-sm-12 col-md-5" style={{padding:50}}>
                        <h5 className="text-secondary">New Product</h5>
                            <hr/>
                            <div className="row justify-content-around form-group">
                                <select name="category_id" value={this.state.category_id} onChange={(e)=>this.setState({category_id:e.target.value})} className="col form-control" id="categoriesSelect">
                                    <option>Category...</option>
                                    {this.state.categories.map(cat=>{
                                        return <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    })}
                                </select>
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">+</button>

                                <div class="modal fade bd-example-modal-sm" style={{backgroundColor:'#cccccc80'}} tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-sm">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">New Category</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <input name="cat" onChange={e=>this.setState({category:e.target
                                            .value})} type="text" className="form-control" placeholder="Category Name"/>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.addCategory}>Add</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
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