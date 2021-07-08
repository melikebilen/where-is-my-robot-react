import React from 'react';
import '../../App.css';
//import Cards from '../Cards';
import HeroSection from '../HeroSection';
//import Footer from '../Footer';

handleChange(e){
  const newData = e.target.value;
  this.setState({
    newData: newData
  });
};

handleSubmit(e){
  e.preventDefault();
  database.ref().child('AMAZINGNEWDATA').set(this.state.newData); //we can use push instead of set here , database.ref() is the root!
  //database.ref("/AMAZINGNEWDATA").push(this.state.newData);
}

function Home() {
  return (
    
    <>
      <HeroSection />
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

    </>
    
  );
}

export default Home;