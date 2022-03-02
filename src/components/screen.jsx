import axios from "axios";
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { CCarouselItem } from '@coreui/react'
import { CCarousel } from '@coreui/react'
import lists from './screen.css';

class Screen extends Component{
    state={
        queue:[],
    }

componentDidMount(){
    axios.get(`http://localhost:8000/queue/1`).then(res=>{
       
        this.setState({queue:res.data});

    });
}

    render(){
        return <CCarousel controls indicators>
                    {
                        this.state.items.map(item=>(
                            <CCarouselItem>
                            <img className="d-block w-100" src={"http://localhost:8000/files/"+item.file} alt="slide 1" />
                        </CCarouselItem>
                    ))
                }
                </CCarousel>        

   

    }
}

export default Screen;