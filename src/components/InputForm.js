import React from "react";
import { post } from 'axios';
import SweetAlert from 'react-bootstrap-sweetalert';

import "./InputForm.css"

export default class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
          file:null,
          showSubmit: false,
          showSuccess: false
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
        this.hideAlert = this.hideAlert.bind(this)
      }
      onFormSubmit(e){
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response)=>{
          console.log(response.data);
        })
        this.setState({showSuccess:true})

      }
      onChange(e) {
        this.setState({file:e.target.files[0], showSubmit:true})
      }
      fileUpload(file){
        const url = 'http://127.0.0.1:8000/road_damages/file_upload/';
        const formData = new FormData();
        formData.append('file',file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return  post(url, formData,config)
      }
      hideAlert(e){
          this.setState({showSuccess:false})
          this.setState({showSubmit:false})
        }

    render() {
      return (
        <form onSubmit={this.onFormSubmit} method="post" enctype="multipart/form-data">
          <p>
            <input className="inputfile" id="file" type="file" class="" name="photo" onChange={this.onChange} multiple/>
            <label for="file"> 
                <img src='http://127.0.0.1:8000/media/images/upload-cloud.png'></img>
            </label>
            <p>Upload images or video!</p>
          </p>
          { this.state.showSubmit ? <SumbitElement/> : null }
          { this.state.showSuccess ? <SweetAlert success title="Success!" onConfirm={this.hideAlert}>
            Files were sent to server! </SweetAlert> : null }
        </form>
      );
    }
  }

  function SumbitElement() {
    return (
        <div>
        <input id="submit" type="submit" value="Submit" /> 
        {/* <label for="submit"> 
        <img src='http://127.0.0.1:8000/media/images/submit-button.png'></img>
        </label>  */}
        </div>
    )
  }