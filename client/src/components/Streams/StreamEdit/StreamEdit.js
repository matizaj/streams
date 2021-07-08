import React, {useEffect} from "react";
import {connect} from  'react-redux';
import {fetchStream} from '../../../store/actions';
import StreamForm from '../StreamForm/StreamForm';
import {editStream} from '../../../store/actions';
import _ from 'lodash';


const StreamEdit = (props) => {
  useEffect(()=>{
    props.fetchStream(props.match.params.id);
  },[]);

  const onSubmit=(formValues)=>{
    console.log(formValues);
    props.editStream(props.match.params.id, formValues)
  }
  return (    
    <div>
      <h3>Edit Stream</h3>
      <StreamForm onSubmit={onSubmit} initialValues={_.pick(props.stream, 'title', 'description')}/>
    </div>
  )
};
const mapStateToProps=(state, ownProps)=> {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
};
export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);
