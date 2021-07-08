import React, {useEffect} from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchStreams} from '../../../store/actions';

const StreamList = (props) => {
  useEffect(()=>{
    props.fetchStreams();
  }, []);

const renderAdmin=(stream)=> {
  if(stream.userId=== props.currentUserId) {
    return (
      <div className="right floated content">
        <Link className="ui button primary" to={`/streams/edit/${stream.id}`}>Edit</Link>
        <Link className="ui button negative" to={`/streams/delete/${stream.id}`}>Delete</Link>
      </div>
      );
  }
}

const renderCreate=()=>{
  if(props.isSignedIn) {
    return (
        <div style={{textAlign: 'right'}}>
          <Link to="/streams/new" className="ui button primary">Create tream</Link>
        </div>
    );
  }    
}
  const renderedStreams = props.streams.map(stream=> {
    return (
      <div className="item" key={stream.id}>
      {renderAdmin(stream)}
        <i className="large middle alignd icon camera"/>
        <div className="content"><Link to={`/streams/${stream.id}`}>{stream.title}</Link></div>
        <div className="description">{stream.description}</div>
      </div>
      );
  })
  return (
    <div>
      <h2>Streams</h2>
     <div className="ui celled list">{renderedStreams}</div>
     {renderCreate()}
    </div>
  )
};

const mapStateToProps=state=>{
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, {fetchStreams})(StreamList);