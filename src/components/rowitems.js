import React from 'react';
import styled from 'styled-components';
import Car from './car'
import { selectCar} from '../actions/index';
import { Button, Jumbotron, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

let sii = {
  'display':"inline-block",
  background: 'red'
}
let box2 =  {
'display': 'inline-block',
'width': '200px',
'height': '100px',
'margin': '1em',
}
const RowItems = (props)=>{
  return (
    <div>
     { 
       props.cars.map((item, index)=>
       <Car key={index} index={index} style={box2} path={item.path} name={item.name} year={item.year} id={item.id} onClick={() => props.onClick()}>
         <Button color="info" onClick={()=> props.dispatch(selectCar(item))}><Link to='/features'>Caracteristicas</Link></Button></Car>
       )
     }
    </div>
  )
}
export default RowItems
