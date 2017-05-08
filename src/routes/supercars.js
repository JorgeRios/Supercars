import React, { Component } from 'react';
import styled from 'styled-components';
const styles = {};
styles.com = {
  margin: '70px'
}
const StyleTitle = styled.h1`
 background: #f4b942;
 padding: 2em;
 margin: 10px;
 text-align: center;
 color: white;
`;
class  SuperCars extends Component{
  constructor(props) {
    super(props);
    this.state = {usuario: "", token: ""} 
  }

  render() {
   return (
     <StyleTitle>
     <h1>Super Cars</h1>
     {this.state.usuario}
     </StyleTitle>
   )
  }
  componentDidMount(){
  
  }
   
}
export default SuperCars
