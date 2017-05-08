import React from 'react';
import styled from 'styled-components';
import Car from './car'

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
       <Car key={index} index={index} style={box2} path={item.path} name={item.name} year={item.year} id={item.id} onClick={() => props.onClick()}/>
       )
     }
    </div>
  )
}
export default RowItems
