import React, { Component } from "react";
//import axios from "axios";


class FileUploadForm extends Component{


  render(){
      return <div className="col-sm-12">
                <div className="row">
                        <div className="col-sm-8">
                            <input type="text" className="form-control form-control-sm" placeholder="Search here" name="" id="" />
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
                <h5 class="modal-title" id="exampleModalLongTitle">Create Adv</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                </div>
                
                <br></br>
                <div class="modal-body">
                <form action="http://localhost:8000/Ads/" enctype="multipart/form-data" method="post">
                <div className="row">
                    <div className="col-sm-12">
                        <input type="text" value={3}  name="ids" className="form-control form-control-sm" id="" />
                    </div>
                    
                   
                    <div className="val">
                    <div className="col-sm-12">
                        <input type="file" className="form-control form-control-sm" name="myFile" id="file"/>
                    </div>
                    <br></br>




                   <div className="col-sm-12">
                        <input type="submit" className="btn btn-sm btn-primary" name="submit" value={"submit"} id="" />
                    </div>
                  <div className="col-sm-12">
                      <input type="cancel" className="btn btn-sm btn-primary" name="cancel" value={"cancel"} id="" />
                </div>
                </div>
                </form>
                </div>

                </div>
                </div>
                </div>
      </div>
  </div>
  }

}

export default FileUploadForm;

