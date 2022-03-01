import React, { Component } from "react";
import { render } from "react-dom";
//import SearchBar from "./searchbar";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import axios from 'axios';
import Advertismentform from "./Advertisementform";

class Lists extends Component{

    constructor(props){
        super(props);
        this.state={
            items:[],
            files:{},
            clientID:undefined,
        }  
      
    }

     
    componentDidMount(){
        axios.get(`http://localhost:8000/advertisment/1`).then(res=>{
            console.log(res.data);
            this.setState({items:res.data});

        });
        
        
    }
    deleteRow(id,filename, e){ 
        console.log(id);
        const body = JSON.stringify({Id: id,file:filename})
        axios.delete(`localhost:8000/advertisment/`,{data:body})  
          .then(res => {  
            console.log(res);  
            console.log(res.data);
            alert(res.data["msg"]);
          });
          window.location.reload();
      
        }  
    AddToQueue(id,f){ 

            console.log(id);
            const b = JSON.stringify({id: id})
            axios.post(`localhost:8000//`,b)  
              .then(res => {  
                console.log(res);  
                console.log(res.data);
                alert(res.data["msg"]);
              });
    } 

    render(){ 
        return  <div className="row">
                <div className="col-sm-12">
                <div className="row">
                <div className="col-sm-8">
                    <input type="text" className="form-control form-control-sm" id="myInput" placeholder="search here" name="" id=""/>
                </div>
                        <div className="col-sm-4">
                        <button type="button" className="btn btn-primary btn-sm btn-block" data-toggle="modal" data-target="#exampleModalCenter">
                            Create
                        </button>   
                        </div>
                    </div>
                </div>

            <div classNameName="col-sm-12">
               
               <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Add Publisher Creatives</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>  
                <div className="modal-body">
                    <Advertismentform/>
                </div>
                </div>
                </div>
      </div>
      </div>


                <div className="col-sm-12"> 
                <table class="table table-striped">
                    <thead className="bg-info text-white">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Action</th>                        
                    </tr>
                    </thead>
                    <tbody id="myTable">
                                    {
                                        this.state.items.map(itemLists=>(
                                            <tr draggable="true">
                                                <td>
                                                    {itemLists.ID}
                                                </td>
                                                <td>
                                                    {itemLists.name}
                                                </td>
                                                <td>
                                                     <div class="dropdown">
                                                <button class="btn btn-info btn-sm dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Action
                                                </button>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                    
                                                    <p class="dropdown-item text-success" onClick={(f) => this.AddToQueue(itemLists.id)} >Add To Queue</p>

                                                    <button class="dropdown-item text-danger" onClick={(e) => this.deleteRow(itemLists.id,itemLists.file, e)} type="button">Delete</button>
                                                   </div>
                                                </div>
                                                </td>
                                            </tr>
                                        ))
                                    }</tbody>
                </table> </div>
    </div>
    };
    
}

export default Lists;