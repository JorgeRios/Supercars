import React  from 'react';
import Title from './title';

const divStyle = {
  width: 200,
  heigth: 240
}

const titleStyle = {
  color: "#088A85"
}
const linkStyle = {
 "text-decoration": "none"
}
export default ({ index, path, name, year, style, onClick, id, children })=> {
  let br = null 
  if(index%4 === 0){
    <br/>
  }else {
   br = null
  }
  console.log("holaaa", id);
  return (
    <div style={style}>
    <img style={divStyle} src={path} />
    <Title title={name} year={year} id={id} />
    {children}
    {br}
    </div>
  )
}
