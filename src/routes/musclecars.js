import React, { Component } from 'react';
import Car from '../components/car';
import Bienvenido from '../components/welcome';
import {connect} from 'react-redux';
import {bringCars} from '../actions';
import RowItems from '../components/rowitems';
import { carDetail } from '../actions/index';

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
  color: 'white',
  background: '#f4df41',
  padding: '5px',
  size: '10px',
  'border-radius':'5px'
}


const usuario = {
  nombre: "jorhe",
  apellido: "rios"
}

let auto = class Auto {
  constructor(nombre, year) {
    this.nombre = nombre;
    this.year = year;
  }
  getName() {
    return this.nombre;
  }
}


let honda = new auto("mazda3", 2012);


const TextArea = (props)=> {
  return (
   <div>
      <textarea id="textarea" onChange={(e) => props.onChange(e)}>{props.value}</textarea>
   </div>
  )
}

const otro = <div>Hola este es otro {usuario.nombre} </div>

let makeList = (lista)=> {
  return lista.map((item)=> {
    <div key={item}>valor de item {item} </div>
  })
}

let Welcome = (props)=> {
  return <h1> Welcome {props.name} </h1>
}


  let moveToPage = (e)=>{
    window.location.href="http://www.grupoiclar.com";
  }

let that = this;
class  MuscleCars extends Component {
  constructor(props) {
    super(props)
    this.state = {calis : "calis", area: "este es area"}
  }
  handleClick = (ruta)=> {
    window.location.href = `http://localhost:3000/supercars`;
    console.log("en el botn");
  }
  changeArea = (e)=> {
    let a =document.getElementById("textarea").value
    console.log(a)
    this.setState((prev, props)=>({
      area: a
    }))
    console.log("este es el state "+ this.state.area)
  }
  makeLista = ()=> {
    let legth = this.props.cars.length/4
    let rows = 0;
    if (length > 1){
      rows = length;
    }else {
      rows = 1;
    }
    console.log("viendo rows "+ rows)
    for(let i=0; i<rows; i++) {
        
    }
  }
  render() {
  const { token, cars, calis, dispatch } = this.props;
  console.log("en el componente")
  console.log(this.props.cars);
  this.makeLista();
   return <div style={styleRoute}>
     <h4><br/><br/><br/><br/>Muscle Cars</h4>
     <br/>
     {token === "" ? <div style={styleWarning}>debes estar logeado para ver los autos </div> :
       <RowItems cars={cars} />   
     }
   <br/>
   <br/>
   <a href="#" onClick={(e)=> this.handleClick(e)}>probando</a>
   </div>
  }

  componentDidMount(){
    this.nombre ="jorge rios";
    const {token, dispatch} = this.props;
    if (token){
      console.log(`el nombre es ${this.nombre}`)
      dispatch(bringCars("musclecars"))
    }
  }
 
  componentWillUnmount() {
    console.log("saliendo de la ruta muscle cars");
  }
}

const mapStateToProps = (state)=> {
  return {
    token: state.token,
    cars: state.cars,
    calis: state.calis
  }
}

export default connect(mapStateToProps)(MuscleCars);
