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
            queue:[],
        }  

    

        

    }






    componentDidMount(){
        axios.get(`http://13.234.48.68:8000/advertisment/1`).then(res=>{
            console.log(res.data);
            this.setState({items:res.data});

        });
        
        
    }

    deleteRow(Id,filename,name,e){ 
    const body = JSON.stringify([{ID: Id,file:filename,clientID:this.state.clientID}])
        axios.delete(`http://13.234.48.68:8000/advertisment/`,{data:body})  
          .then(res => {  
            if(res.data["msg"]=="Deleted"){
                alert(name+" "+"Deleted Successfully")
                window.location.reload();
            }else{
                alert("Not Deleted")
            }
          });
        }  
    
    AddToQueue(id,clientId,f){ 
            const b = JSON.stringify({ID: id,clientID:clientId});
            axios.post(`http://13.234.48.68:8000/queue/`,b)  
              .then(res => {  
                if(res.data["msg"]=="Created"){
                    window.location.reload();
                }else{
                    alert("Failed to Add To Queue");
                }
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
                    <th scope="col">#ID</th>
                    <th scope="col">Name</th>
                    <th scope="col"></th>                        
                    </tr>
                    </thead>
                    <tbody id="myTable">
                                    {
                                        this.state.items.map(itemLists=>(
                                            <tr>
                                                <td>
                                                   #{itemLists.ID}
                                                </td>
                                                <td>
                                                    {itemLists.name}
                                                </td>
                                                <td>
                                                    <div className="row justify-content-end">
                                                        <div className="col-auto">
                                                        <button className="text-primary btn btn-block btn-sm" onClick={(f) => this.AddToQueue(itemLists.ID,itemLists.clientID,f)} type="button">Add</button>
                                                        </div>
                                                        <div className="col-auto">
                                                     
                                                             <button className="text-danger close" onClick={(e) => this.deleteRow(itemLists.ID,itemLists.file,itemLists.name,e)} type="button"><span aria-hidden="true">&times;</span></button>
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