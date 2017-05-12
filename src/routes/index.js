import React, { Component }  from 'react';
import {
  BrowserRouter as router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import SuperCars from '../routes/supercars';
import MuscleCars from '../routes/musclecars';
import Features from '../routes/features';
import Home from '../routes/home';
import Clock from '../routes/clock';
import {connect} from 'react-redux';

const styles = {}
styles.nav = {
  padding: 0,
  margin: 0,
  position: 'absolute',
  top: 0,
  height: '40px',
  width: '100%',
  display: 'flex',
  background: '#CACACA'
}

styles.navItem = {
  textAlign: 'center',
  flex: 1,
  listStyleType: 'none',
  padding: '10px'
}


styles.fill = {
	  position: 'absolute',
	    left: 0,
	      right: 0,
	        top: 0,
		  bottom: 0
}


const NavLink = (props) => (
  <li style={styles.navItem}>
    <Link {...props} style={{ color: 'inherit' }}/>
  </li>
)

class Index extends Component {
   render() {
     return (
      <div>
	<ul style={styles.nav}>
	<NavLink to="/">Home</NavLink>
	<NavLink to="/supercars">Super Cars</NavLink>
	<NavLink to="/musclecars">Muscle Cars</NavLink>
	<NavLink to="/clock">Clock</NavLink>
	</ul>

	<Route exact path="/" component={Home}/>
	<Route exact path="/supercars" component={SuperCars}/>
	<Route exact path="/musclecars" component={MuscleCars}/>
	<Route exact path="/clock" component={Clock}/>
	<Route exact path="/features" component={Features}/>
      </div>
    )
   }
  
}

styles.comp= {
  margin: '50px'
}

export default Index
