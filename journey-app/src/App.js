import React, { Component } from 'react'
import './App.css';
// import {Button, Alert, Card} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

let baseURL =''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'heroku backend url here'
}

console.log('current base URL: ', baseURL)

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      liveEvents: []
    }
  }
  render (){
  return (
    <div>
      <h1>Journey-App</h1>
    </div>
  );
}
}
export default App;
