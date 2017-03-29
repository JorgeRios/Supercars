import React, {Component} from 'react';
import {connect} from 'react-redux';
import {clickButton} from '../actions';

const log = (msg) => console.log(msg);
class Home extends Component {
  render() {
    const {props, dispatch} = this.props;
    return <div><br/><br/><br/><br/>
      Este es el Home
      <button onClick={(e) => dispatch(clickButton())}>Probando</button>
      </div>
  }
}

const mapStateToProps = (state) => {
  log("viendo el state inicial"); 
  log(state);
  return {
    state
  }
}
export default connect(mapStateToProps)(Home);
