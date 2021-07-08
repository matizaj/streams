import React, {Component} from "react";
import {Field, reduxForm} from 'redux-form';

class StreamForm extends  Component{
  renderInput=(formProps)=>{
    const className=`field ${formProps.meta.error && formProps.meta.touched?'error': ''}`;
    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="false"/>
        {this.renderErr(formProps.meta)}
      </div>      
    );
  }
onSubmit=(formValues)=>{
  this.props.onSubmit(formValues);
}

renderErr=(inputs)=>{
  if(inputs.touched && inputs.error) {
    return (
      <div className="ui error message">
        <div className="header">{inputs.error}</div>
      </div>
    );
  }
}
  render(){
    return (
     <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
       <Field name='title' component={this.renderInput} label="Title"/>
       <Field name='description' component={this.renderInput} label="Description"/>
       <button className="ui button primary">Submit</button>
     </form>
    )
  } 
}
const validate=(formValues)=>{
  const errors={};
  if(!formValues.title){
    errors.title='User input is required for title';
  }
  if(!formValues.description){
    errors.description='User input is required for description';
  }
  return errors;
}
export default reduxForm({form: 'streamForm',validate})(StreamForm);

