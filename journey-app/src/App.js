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
  componentDidMount(){
    this.getEvents()
  }
  getEvents = () => {
    fetch(baseURL +'/events')
      .then((res) => {
        if (res.status === 200){
          return res.json()
        } else {
          return[]
        }
      })
      .then((data) => {
        this.setState({ events: data.events})
      })
  }
  render (){
  return (
    <div>
      <h1>Journey-App</h1>
      <table>
        <tbody>
          {this.state.events.map(event =>{
            return (
              <tr key={event._id}>
                <td> {event.name }</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
}
export default App;
