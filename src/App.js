import React, { Component } from 'react'
import './App.css';
import EventShow from './components/EventShow.js'
import FAQ from './components/FAQ'
import Home from './components/Pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';

// Here be routers //

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signin from './components/Signup';



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

  loginUser = (e) => {
    // e.preventDefault()
    fetch(baseURL + '/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "include"
    }).then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      this.getEvents()
    })
  }

  signup = (e) => {
    e.preventDefault()
    fetch(baseURL + '/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(resJson => {
      console.log(resJson)
    })
  }

  getEvents = () => {
    fetch(baseURL +'/events', {
      credentials: "include"
    })
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
    
     
    })
  }

  render (){
  return (
    <>
        <div>
        {/* < Login loginUser={this.loginUser} register={this.register} /> */}
      <div>

       {/* < NewForm handleAddEvent={this.handleAddEvent} />
         <table>
            <tbody>
              {this.state.events.map(events =>{
            return (
              <tr key={events._id}>
              {/* <td> {events.name }</td> */}
              {/* </tr>)})} */}
        {/* {</tbody>} */}
        
      {/*</table> */}
    </div>
      
    </div>
    
  <BrowserRouter>

  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/FAQ' element={<FAQ />}/>
    <Route path='/events' element={<EventShow 
        events = {this.state.events}/>
      }/>
    <Route path='/login' element={<Login loginUser={this.loginUser}/>}/>
    <Route path='/signup' element={<Signup signup={this.signup}/>}/>
  </Routes>

  </BrowserRouter>

    
</>

);
  
}

}



export default App;
