import React, {useEffect} from "react";
import Modal from '../../../Modal/Modal';
import history from '../../../history';
import {connect} from 'react-redux';
import {deleteStream, fetchStream} from '../../../store/actions';
import {Link} from 'react-router-dom';

const StreamDelete = (props) => {
  const actions=(
    <React.Fragment>
      <button className="ui button negative" onClick={()=>props.deleteStream(props.match.params.id)}>Delete</button>
      <Link to={'/'} className="ui button">Cancel</Link>
    </React.Fragment>
  );
  
  const newPath=()=>{
    history.push('/');
  }

  const renderContent=()=>{
    if(!props.stream) {
      return 'Are you sure to delete this stream';
    }
    return `Are you sure to delete this stream ${props.stream.description}`
  };

  const renderTitle=()=>{
    if(!props.stream) {
      return 'Delete Stream';
    }
    return `Delete Stream${props.stream.title}`
  };

  return (  
      <Modal actions={actions}  onDismiss={newPath} content={renderContent()} title={renderTitle()}/>  
  )
};
const mapStateToProps=(state, ownProps)=> {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
}
export default connect(mapStateToProps, {deleteStream, fetchStream})(StreamDelete);
