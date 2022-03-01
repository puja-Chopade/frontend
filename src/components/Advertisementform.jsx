import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
export default class Advertismentform extends React.Component{
    
    constructor(){
        super();
        this.state = {
            selectedFile :'',
        }
        this.fileHandlers = this.fileHandlers.bind(this);

    }


    componentDidMount(){
        axios.get(`http://localhost:8000/advertisment/1`).then(res=>{
            console.log(res.data);
            this.setState({items:res.data});

        });  
    }

    fileHandlers(e){
        this.setState({files:e.target.files[0]});
        console.log(this.state.files);
    }

    render(){
        return <form onSubmit={this.submitData}>
        <div className="row text-left">
            <div className="col-6">
                <label>Creative Name</label>
                <input type="text" className="form-control" name="CreativeName" id="" placeholder={"Creative Name"} />
                
            </div>
            <div className="col-6">
                <input type="file" className="btn btn-sm btn-primary btn-block"  name="Myfile" onChange={this.fileHandlers} />
            </div>
            <div className="col-6">
            <label>
                Ad Type:
            </label>
            <select defaultValue={this.state.selectValue} name="AdvType" className="form-control" >
                <option value="Video">Video</option>
                <option value="Banner">Banner</option>
                <option value="Others">Others</option>
            </select>
            </div>

            <div className="col-6">
            <label>
                Brand
            </label>
            <select defaultValue={this.state.selectValue} name="Brand" className="form-control" onChange={this.handleChange} >
            {
                                this.state.brands.map(brandlists=>(
                                    <option value={brandlists.ID}>{brandlists.brandname}</option> 
                                    )
                                )
            }
            </select>

            </div>
            <div className="col-6">
            <label>
              Creative Type:
            </label>
            <select defaultValue={this.state.selectValue} name="CreativeType" className="form-control" onChange={this.handleChange} >
                <option value="Video">Video</option>
                <option value="Banner">Banner</option>
                <option value="Others">Others</option>
            </select>  
            </div>
            <div className="col-6">
            <label>
                Adv Channel:
            </label>
            <select defaultValue={this.state.selectValue} name="AdvChannel" className="form-control" onChange={this.handleChange}  >
                <option value="direct">Direct</option>
                <option value="RTB">RTB</option>
                <option value="Others">Others</option>
            </select>
            </div>
            <div className="col-12">
                <input type="hidden" value={1}   name="ids" className=""  id="" />
            </div>
            <div className="col-12">
                <div className="row content-justify-center">
                    <div className="col-6">
                        <input type="submit" className="btn btn-sm btn-success btn-block" value={"submit"} name="" id="" />
                    </div>
                    <div className="col-6">
                        <input type="button" className="btn btn-sm btn-danger btn-block" value={"Cancel"}  data-dismiss="modal" aria-label="Close" name="" id="" />
                    </div>
                    
                </div>
            </div>

            
        </div>
</form>;
    }
}
