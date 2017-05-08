import React, {Component} from 'react';

let style = {};
style.h1 = {
  text: "center",
  color: "Green"
}
export default class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date(), contador: 0, otro: 'jaja' };
  }

  tick() {
    this.setState((prev, props)=>({
      date: new Date(),
      contador: prev.contador+1,
    }))
  }

  componentDidMount() {
    this.timeId = setInterval(
    ()=> this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeId)
  }
  click= ()=>{
    this.setState((prev, state)=>({
      otro: prev.otro === "jaja" ? "jojo" : "jaja"
    }))
  }

  render() {
    return (
      <div id="clock">
      <br/><br/>
      <br/><br/>
      <h1 style={style.h1}>Mexico Time {this.state.date.toLocaleTimeString()}</h1>
      <p>contador {this.state.contador}</p>
      <button onClick={this.click}>cambiar otro</button>
      <p>{this.state.otro}</p>
      </div>
    )
  }

}
