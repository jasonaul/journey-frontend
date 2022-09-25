import React, { Component } from 'react'
// import {} from 'react-router-dom';
import './App.css';
import NewForm from './components/NewForm';
// import {Button, Alert, Card} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

let baseURL =''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000'
} else {
  baseURL = 'heroku backend url here'
}

console.log('current base URL: ', baseURL)


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      events: []
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
        console.log(data.events)
        this.setState({ events: data.events})
      })
  }

  handleAddEvent = (event) => {
    const copyEvents = [...this.state.events]
    copyEvents.unshift(event)
    this.setState({
      events: copyEvents,
      name: '',
      location: '',
      date: '',
      time: '',
      price: '',
      link: '',
      comments: '',
      // occurred: Boolean
    })
  }
  render (){
  return (
    <div>
      <h1>Journey-App</h1>
      < NewForm handleAddEvent={this.handleAddEvent} />
      <table>
        <tbody>
          {this.state.events.map(events =>{
            return (
              <tr key={events._id}>
                <td> {events.name }</td>
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
