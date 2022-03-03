import axios from "axios";
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { CCarouselItem } from '@coreui/react';
import { CCarousel } from '@coreui/react';



class Screen extends Component{
   constructor(props){
       super(props);
       this.state={
           queues:[],
       }
   }

   componentDidMount(){
    axios.get(`http://localhost:8000/queue/1`).then(res=>{
        console.log(res.data);
        if(res.data == null){
            console.log("null");
        }else{
            this.setState({queues:res.data});
        }
//            
    });
}

   render(){
        return <CCarousel className={"coursel"}>
        {
            this.state.queues.map(item=>(
                <CCarouselItem>
                <img className={"queueImg"} src={"http://localhost:8000/"+item.file} alt="slide 1" />
            </CCarouselItem>
        ))
    }
    </CCarousel>          



    }
}

export default Screen;