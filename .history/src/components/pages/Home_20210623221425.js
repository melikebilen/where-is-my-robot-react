import React from 'react';
import '../../App.css';
//import Cards from '../Cards';
import HeroSection from '../HeroSection';
//import Footer from '../Footer';
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {database} from './firebase';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home.js';
import AboutUs from './components/pages/AboutUs.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    database.ref().on('value', (snapshot) => {
        this.setState({
          data: snapshot.val(),
          newData: '',
          count: snapshot.child('Count/count').val(),
          x: snapshot.child('RobotLocation/x').val(),
          y: snapshot.child('RobotLocation/y').val(),
        });
    });
  }
  handleChange(e){
    const newData = e.target.value;
    this.setState({
      newData: newData
    });
  }

  handleSubmit(e){
    e.preventDefault();
    database.ref().child('AMAZINGNEWDATA').set(this.state.newData); //we can use push instead of set here , database.ref() is the root!
    //database.ref("/AMAZINGNEWDATA").push(this.state.newData);
  }

  render() {
    return (
      <div className="App">
        <div className="App--header">
        <>
        <Router>
          <Navbar/>
          <Switch>
            <Route path = '/' exact component={Home}/>
            <Route path = '/aboutus' exact component={AboutUs}/>
          </Switch>
        </Router>
          <HeroSection/>
        </>
        </div>
        <div className="App--position">
          <h3> Count : {JSON.stringify(this.state.count, null,2)}</h3>
          <h3> X : {JSON.stringify(this.state.x, null,2)}</h3>
          <h3> Y : {JSON.stringify(this.state.y, null,2)}</h3>
        </div>
        <img src="https://firebasestorage.googleapis.com/v0/b/tdoa-23cf7.appspot.com/o/images%2Fxyplot.png?alt=media&token=dccacb98-a0f4-4c5d-b2a7-865ca59c948c"></img>
        <pre className="App--data">
          {JSON.stringify(this.state.data, null,2)}
        </pre>
        <form className="App--form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.newData}  onChange={this.handleChange}/>
          <input type="submit"/>        
        </form>
      </div>
    );
  }
}

export default Home;