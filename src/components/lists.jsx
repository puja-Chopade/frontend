import React, { Component } from "react";
import { render } from "react-dom";
//import SearchBar from "./searchbar";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import axios from 'axios';
//import FileUpload from "./components/fileUpload.js";
import lists from './lists.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

class Lists extends Component{
    state={
        items:[],

    }    

    componentDidMount(){
        axios.get(`http://localhost:8000/Ads/1`).then(res=>{
            console.log(res.data);
            this.setState({items:res.data});

        });
    }

    deleteRow(id,filename, e){ 
        console.log(id);

        const body = JSON.stringify({Id: id,file:filename})

        axios.delete(`http://localhost:8000/Ads/`,{data:body})  
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
            
            axios.post(`http://localhost:8000/queue/`,b)  
              .then(res => {  
                console.log(res);  
                console.log(res.data);
                alert(res.data["msg"]);
              });
              
             // window.location.reload();
        
            } 

            

    render(){
              
        return  <div className="row">
                <div className="col-sm-12">
                <div className="row">
                <div className="col-sm-8">
                    <input type="text" className="form-control form-control-sm" id="myInput" placeholder="search here" name="" id=""/>
                </div>
                        <div className="col-sm-4">
                        <button type="button" class="btn btn-primary btn-sm btn-block" data-toggle="modal" data-target="#exampleModalCenter">
                            Create
                        </button>   
                        </div>
                    </div>

                   <div className="col-sm-12">
               <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Add Publisher Creatives</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>

  
{/*name */}
<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '20ch' },
      }}
      //noValidate
      autoComplete="off">
      <div className="creativeName">
        <TextField
          error
          id="outlined-error"
          label="Creative Name"
          defaultValue={null}
        /> 
      </div>
    </Box>



 {/* dropdown code for ad */}
            
  <div className="dropad">
  <label>
          Ad Type:
 <select defaultValue={this.state.selectValue} onChange={this.handleChange} >
    
    <option value="Video">Video</option>
    <option value="Banner">Banner</option>
    <option value="Others">Others</option>
  </select>
  </label>
  </div>  
<br></br>
 {/* dropdown code for brand*/}

  <div className="dropbrand">
  <label>
          Brand:
 <select defaultValue={this.state.selectValue} onChange={this.handleChange} >
    
    <option value="Video">Video</option>
    <option value="Banner">Banner</option>
    <option value="Others">Others</option>
  </select>
  </label>
  </div>  
  <br></br>
   {/* dropdown code for creative type */}
  <div className="creativetype">
  <label>
          Creative Type:
 <select defaultValue={this.state.selectValue} onChange={this.handleChange} >
    
    <option value="Video">Video</option>
    <option value="Banner">Banner</option>
    <option value="Others">Others</option>
  </select>
  </label>
  </div>  
  <br></br>
 {/* dropdown code for channel */}
  <div className="Channel">
  <label>
          Ad Channel:
 <select defaultValue={this.state.selectValue} onChange={this.handleChange}  >
    
    <option value="direct">Direct</option>
    <option value="RTB">RTB</option>
    <option value="Others">Others</option>
  </select>
  </label>
  </div> 

  <br></br>              

                <div class="modal-body">
                <form action="http://localhost:8000/Ads/" enctype="multipart/form-data" method="post">
                <div className="row">
                    <label>Mention number of ads</label>
                    <div className="NO-FIELD">
                        <input type="text" value={null}  name="ids" className="form-control form-control-sm" id="" />
                    </div>
                    <br></br>
                    <div className="col-sm-12">
                        <input type="file" className="form-control form-control-sm" name="myFile" id="" />
                    </div>
                    <br></br>

                {/* submit button code */}
                    <div className="submiton">
                    <div className="col-sm-12">
                        <input type="submit" className="btn btn-sm btn-primary" name="submit" value={"submit"}  id="" />
                    </div>
                    </div>

                
                {/* cancel button code */}
                    <div className="buttoncancel">
                    <div className="col-sm-12">
                    

                        <input type="cancel" className="btn btn-sm btn-primary close" name="cancel" value={"cancel"}  data-dismiss="modal" aria-label="Close" id="" />   
                    </div>
                    </div>
                </div>
                </form>
                </div>

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
                           <th scope="col">file</th>
                           <th scope="col">Action</th>                        
                    </tr>
                    </thead>
                    <tbody id="myTable">
                                    {
                                        this.state.items.map(itemLists=>(
                                            <tr draggable="true">
                                                <td>
                                                    {itemLists.id}
                                                </td>
                                                <td>
                                                    {itemLists.file}
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