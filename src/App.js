import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import Home from './components/home';
import Display from './components/display';
import Error from './components/error';

class App extends Component {
  state = {
    search: "",
    isHome: true,
  }
  render () {
    return (
      <Router>
        <Nav
        isHome={this.state.isHome}
        search={this.state.search}
        callbackFunction = {(searched)=>{
          this.setState({search: searched});
        }}/>
        <Routes>
          <Route path="/" 
          element={<Home search={this.state.search} 
          isHomeCallbackFunction={()=>{
            this.setState({isHome: false})
          }}
          callbackFunction = {(searched)=>{
            this.setState({search: searched});
          }}
          />} exact/>
          <Route path="/display"
          element={<Display search={this.state.search}
          isHomeCallbackFunction={()=>{
            this.setState({isHome: true})
          }}/>}/>
          <Route path="/error" 
          element={<Error search={this.state.search}
          isHomeCallbackFunction={()=>{
            this.setState({isHome: true})
          }}
          />}/>
        </Routes>
      </Router>
    )
  }
}

export default App;
