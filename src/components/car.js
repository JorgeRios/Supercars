import React  from 'react';

const divStyle = {
  width: 100,
  heigth: 140
}

const titleStyle = {
  color: "#088A85"
}
export default ({path, name, year})=> {
  console.log("path "+ path)
  return  <div>
	  <img style={divStyle} src={path} />
	  <p style={titleStyle}>{name} {year}</p>
	  </div>
}
