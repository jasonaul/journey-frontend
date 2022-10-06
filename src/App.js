import React, { Component } from 'react'
import './App.css';
import EventShow from './components/EventShow.js'
import FAQ from './components/FAQ'
import Home from './components/Pages/Home';

// Here be routers //

import {BrowserRouter, Routes, Route} from 'react-router-dom'



let baseURL = process.env.REACT_APP_BACKEND_URL


console.log('current base URL: ', baseURL)



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      events: []
    }
  }
  async componentDidMount(){
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
        console.log(data)
        this.setState({ events: data.events})
      })
      
  }

  handleAddEvent = (event) => {
    const copyEvents = [...this.state.events]
    const name = this.state.name
    copyEvents.unshift(event)
    this.setState({
      events: copyEvents,
      name: name,
      location: '',
      date: '',
      time: '',
      price: '',
      link: '',
      comments: '',
      image: '',

    })
  }
  handleDeleteEvent = (event) => {
    console.log(this.user)
    const copyEvents = [...this.state.events]
    
    copyEvents.unshift(event)
    this.setState({
      events: copyEvents,
      reloadThis () {
        window.location.reload(false);
    }
    
      // occurred: Boolean
    })
  }

  render (){
  return (
    <>
        <div>
      <div>

{/*       < NewForm handleAddEvent={this.handleAddEvent} />
 */}      <table>
        <tbody>
          {this.state.events.map(events =>{
            return (
              <tr key={events._id}>
              {/* <td> {events.name }</td> */}
              </tr>
              
            )
          })}
        </tbody>
        
      </table>
    </div>
      
    </div>
    
  <BrowserRouter>

  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/FAQ' element={<FAQ />}/>
    <Route path='/events' element={<EventShow 
        events = {this.state.events}/>
      }/>
  </Routes>

  </BrowserRouter>

    
</>

);
  
}

}



export default App;
