import React from 'react';
import {connect} from 'react-redux';
import { carDetail } from '../actions/index';

let styleDiv = {
  color:'#CACACA',
  cursor: "pointer" 
}
const Title =  (props)=>{
  let {id} = props;
  console.log("viendo el id "+id);
  const { token, cars, calis, dispatch } = props;
  return (
    <div style={styleDiv}>
      <h2 onClick={()=> dispatch(carDetail(id))}> {props.title} {props.year}</h2>
    </div>
  )
}

const mapStateToProps = (state)=> {
  return {
    token: state.token,
    cars: state.cars,
    calis: state.calis
  }
}
export default connect(mapStateToProps)(Title);
