import React, { Component } from "react";
import { render } from "react-dom";

import axios from 'axios';
import './queue.css';


class Queue extends Component{
   
    constructor(props){
        super(props);
        this.state={
         
            queue:[],
        }  

    

        

    }

    componentDidMount(){
        axios.get(`http://13.234.48.68:8000/queue/1`).then(res=>{
            console.log(res.data);
            if(res.data == null){
                console.log("null");
            }else{
                this.setState({queue:res.data});
            }
//            
        });
        
        
    }



    deleteQueue(id, e){ 
    const data = JSON.stringify({id: id})
    axios.delete(`http://13.234.48.68:8000/queue/`,{data:data})  
      .then(res => {  
        if(res.data["msg"]=="Deleted"){
           window.location.reload();
        }else{
            alert("Failed TO Delete");
        }
      });
    }  


    render() {

        return (
            <div className="row">
                
                {
                    this.state.queue.map(items=>(

                            items.AdvType === "Video" ?

                                <div className={"col-auto card b"}>

                                    <div className={"container-fluid"}>
                                        Videos
                                    </div>
                                  
                                    
                                    <button className={"btn btn-sm btn-danger"} onClick={(e) => this.deleteQueue(items.id, e)}>
                                      
                                     Delete
                                    </button>
                                </div>
                                :
                                <div className={"col-auto card b"}>

                                <div className={"container-fluid"}>
                                <img src={"http://localhost:8000/"+items.file}></img>
                                </div>
                                <button className={"btn btn-sm btn-danger"} onClick={(e) => this.deleteQueue(items.id, e)}>
                                 Delete
                                </button>
                            </div>
                    ))
                }
          </div>
        );
    }
}

export default Queue;