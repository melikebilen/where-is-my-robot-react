import React, { Component } from 'react';
import './App.css';
import {database} from './firebase';

class App extends Component {
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
          <h2>Welcome to React and Firebase</h2>
        </div>
        <div className="App--header">
          <h2>heyya</h2>
          <h2> {JSON.stringify(this.state.data, null,2)}</h2>
        </div>
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

export default App;