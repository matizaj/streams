import React, {Component} from "react";
import {connect} from 'react-redux';
import streamsApi from "../../../api/streamsApi";
import {fetchStream} from '../../../store/actions';
import flv from 'flv.js';

class  StreamShow extends Component{

  constructor(props){
    super(props);
    this.videoRef = React.createRef();
  }
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    this.buildPalyer();
  }

  componentDidUpdate(){
    
    this.buildPalyer();
  }

  componentWillUnmount(){
    this.flvPlayer.destroy();
  }

  buildPalyer=()=> {    
    const {id} = this.props.match.params;
    if(this.flvPlayer || !this.props.stream) {
      return;
    }
    this.flvPlayer = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });
    this.flvPlayer.attachMediaElement(this.videoRef.current);
    this.flvPlayer.load();
  }
  render() {
    if(!this.props.stream) {
      return <div>Loading...</div>;
    } 
    const {title, description} = this.props.stream;
    return (
      <div>
        <video ref={this.videoRef} style={{width: '100%'}} controls/>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    )
  }
}

const mapStateToProps=(state, ownProps)=> {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}
export default connect(mapStateToProps, {fetchStream})(StreamShow);
