import React, { Component } from "react";
import { render } from "react-dom";

import axios from 'axios';
import './queue.css';
import { useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

class Queue extends Component{
    
      
    state={
        items:[],
    }    
    
     
    componentDidMount(){
        axios.get(`http://localhost:8000/queue/1`).then(res=>{
           
            this.setState({items:res.data});

        });

    }

    
    deleteQueue(id, e){ 
    console.log(id);

    const body = JSON.stringify({Id: id})
/*
    axios.delete(`http://localhost:8000/queue/`,{data:body})  
      .then(res => {  
        console.log(res);  
        console.log(res.data);
        alert(res.data["msg"]);
      });
      */
     // window.location.reload();

    }  


    render() {

        return (
            <div className="row">
                {
                    this.state.items.map(item=>(
                                <div className="col-auto card b">
                                    <img src={"http://localhost:8000/"+item.file} alt="" />
                                    
                                    <button className="btn btn-sm btn-danger" onClick={(e) => this.deleteQueue(item.id, e)}>
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