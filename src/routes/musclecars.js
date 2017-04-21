import React, { Component } from 'react';
import Car from '../components/car';
import {connect} from 'react-redux';
import {bringCars} from '../actions';

const styleCar = {
  background: '#CACACA' 
}

const styleRoute = {
  width: '50%',
  margin: '0 auto',
  aling: 'center',
  'text-align': 'center'
}

const styleWarning = {
  color: 'red'
}

class  MuscleCars extends Component {
  render() {
  const { token, cars} = this.props;
  console.log("en el componente")
  console.log(this.props.cars);
   return <div style={styleRoute}>
     <h4><br/><br/><br/><br/>Muscle Cars</h4>
     <br/>
     {token === "" ? <div style={styleWarning}>debes estar logeado para ver los autos </div> :
      cars.map((item, index)=> <Car key={index}  style={styleCar} path={item.path} name={item.name} year={item.year} /> )
     }
   </div>
  }

  componentWillMount(){
    const {token, dispatch} = this.props;
    if (token){
      dispatch(bringCars("musclecars"))
    }
  }
}

const mapStateToProps = (state)=> {
  return {
    token: state.token,
    cars: state.cars
  }
}

export default connect(mapStateToProps)(MuscleCars);
