import React, { Component } from 'react';
import MyNav from './Nav';
import config from "../config";



class Edit extends Component {
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
        this.save=this.save.bind(this);
        this.addCategory=this.addCategory.bind(this);

    }


    componentDidMount(){
        fetch(config.server+'/categories').then(response=>response.json()).then(response=>{
            this.setState({
                categories:response
            })
        })
        fetch(config.server+'/products/'+this.props.match.params.id+'?api_token='+localStorage.getItem('api_token')).then(data=>data.json()).then(data=>{
            this.setState({
                category_id:data.category_id,
                name:data.name,
                description:data.description,
                price:data.price,
                stock:data.stock,
            })
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

    save(){

        const photoInput = document.getElementById('photo_file');

        var myjson={
            category_id:this.state.category_id,
            name:this.state.name,
            description:this.state.description,
            price:parseFloat(this.state.price),
            stock:parseInt(this.state.stock),
        }

        var formdata = new FormData()

        formdata.append('photo',photoInput.files[0])
        
        fetch(config.server+'/products/'+this.props.match.params.id+'?api_token='+localStorage.getItem('api_token'),{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(myjson)
        }).then(response=>{
            if (response.ok) {
                return response.json()
            } 
        }).then(response=>{
                fetch(config.server+'/products/'+this.props.match.params.id+'/setphoto?api_token='+localStorage.getItem('api_token'),{
                    method:'POST',
                    body:formdata
                }).then(response=>{
                    if (response.ok) {
                        return response.json()
                    } 
                }).then(response=>{
                    window.location.href='/'
                })
                
        })

    }

    render() { 
        return ( 
            <div>
                <MyNav/>
                <div className="container">
                    <div className="row justify-content-center align-self-center" style={{marginTop:20}}>
                        <div className="card col-sm-12 col-md-5" style={{padding:20}}>
                        <h3>New Product</h3>
                            <hr/>
                            <div className="row justify-content-around form-group">
                                <select name="category_id" value={this.state.category_id} onChange={(e)=>this.setState({category_id:e.target.value})} className="col form-control" id="categoriesSelect">
                                    <option>Category...</option>
                                    {this.state.categories.map(cat=>{
                                        return <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    })}
                                </select>
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">+</button>

                                <div className="modal fade bd-example-modal-sm" style={{backgroundColor:'#cccccc80'}} tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-sm">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">New Category</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <input name="cat" onChange={e=>this.setState({category:e.target
                                            .value})} type="text" className="form-control" placeholder="Category Name"/>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.addCategory}>Add</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                            <input value={this.state.name} className="form-control" type="text" onChange={(e)=>this.setState({name:e.target.value})} name="name" placeholder="Enter the name of the product"/>
                            <br/>
                            <input value={this.state.stock} className="form-control" type="number" onChange={(e)=>this.setState({stock:e.target.value})} name="stock" placeholder="Enter the amount of stock"/>
                            <br/>
                            <textarea value={this.state.description} className="form-control" type="text" onChange={(e)=>this.setState({description:e.target.value})} name="description" placeholder="Enter the description of the product"></textarea>
                            <br/>
                            <input value={this.state.price} className="form-control" type="number" onChange={(e)=>this.setState({price:e.target.value})} name="price" placeholder="Enter the price of the product"/>
                            <br/>
                            <input id="photo_file" type="file" name="photo"/>
                            <br/>
                            <button className="btn btn-primary" onClick={this.save} type="submit">Save</button>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Edit;