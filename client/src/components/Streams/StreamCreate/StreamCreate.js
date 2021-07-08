import React, {Component} from "react";
import {connect} from 'react-redux';
import {createStream} from '../../../store/actions';
import StreamForm from '../StreamForm/StreamForm';

class StreamCreate extends  Component{
  
onSubmit=(formValues)=>{
  this.props.createStream(formValues);
}
  render(){
    return (
    <div>
      <h3>Create a Strean</h3>
      <StreamForm onSubmit={this.onSubmit}/>
    </div>
    );
  } 
    
}

export default  connect(null,  {createStream})(StreamCreate);

