import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
export default class Advertismentform extends React.Component{
    
    constructor(){
        super();
        this.state = {
            selectedFile :'',
            brands:[],
        }
     

    }
    componentDidMount(){
    axios.get(`http://13.234.48.68:8000/brand/1`).then(resbrands=>{
        console.log(resbrands.data);
        this.setState({brands:resbrands.data});
    });
}

  /* 
    fileHandlers(e){
        //let file = e.target.files;
       
        this.setState({files:imagefile.file[0]});
        console.log(this.state.files);
    }

    */
    uploading=(e)=>{
        e.preventDefault();
        let imagefile = document.querySelector('#Myfile');
        var clientID = document.getElementById("clientID").value;
        let Name = document.getElementById('CreativeName').value;
        let channel = document.getElementById('Channel').value;
        let CreativeType = document.getElementById('CreativeType').value;
        let BrandID = document.getElementById('Brand').value;
        let AdvType = document.getElementById('AdvType').value;      
        const formData = new FormData();

        formData.append("myFile",imagefile.files[0]);
        formData.append("clientid",clientID);
      //  console.log(clientID.value);
        formData.append("Name",Name);
        formData.append("brandID",BrandID);
        formData.append("channel",channel);
        formData.append("creativeType",CreativeType);
        formData.append("AdvType",AdvType);
     
        axios.post("http://13.234.48.68:8000/advertisment/",formData,{headers: {'Content-Type':'multipart/form-data'}}).then(res=>{
            console.log("posted");
            console.log(res.data);
            if(res.data["msg"]=="created"){
                alert("Advertisement Created");
                window.location.reload();
            }else{
                alert("Advertisement Not Created");
            }
        });
    }
    render(){
        return <form onSubmit={this.uploading}>
        <div className="row text-left">
            <div className="col-6">
                <label>Creative Name</label>
                <input type="text" className="form-control" name="CreativeName" id={"CreativeName"} placeholder={"Creative Name"} />
                
            </div>
            <div className="col-6">
                <input type="file" className="btn btn-sm btn-primary btn-block"  id={"Myfile"} name="Myfile" onChange={this.fileHandlers} />
            </div>
            <div className="col-6">
            <label>
                Ad Type:
            </label>
            <select defaultValue={this.state.selectValue} id={"AdvType"} className="form-control" >
                <option value="Video">Video</option>
                <option value="Banner">Banner</option>
                <option value="Others">Others</option>
            </select>
            </div>

            <div className="col-6">
            <label>
                Brand
            </label>
            <select  id={"Brand"} className="form-control" onChange={this.handleChange} >
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
            <select name="CreativeType" id={"CreativeType"} className="form-control" onChange={this.handleChange} >
                <option value="Video">Video</option>
                <option value="Banner">Banner</option>
                <option value="Others">Others</option>
            </select>  
            </div>
            <div className="col-6">
            <label>
                Adv Channel:
            </label>
            <select name="AdvChannel" id={"Channel"} className="form-control" onChange={this.handleChange}  >
                <option value="direct">Direct</option>
                <option value="RTB">RTB</option>
                <option value="Others">Others</option>
            </select>
            </div>
            <div className="col-12">
                <input type="number" className="form-control" value={1}   name="ids" id={"clientID"} />
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
