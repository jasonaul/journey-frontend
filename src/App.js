import React, { Component } from 'react'
import './App.css';
/* import NewForm from './components/NewForm';
 */import EventShow from './components/EventShow.js'
import FormPop from './components/FormPop'
import FAQ from './components/FAQ'



let baseURL = process.env.REACT_APP_BACKEND_URL
// let baseURL =''

// if (process.env.NODE_ENV === 'development') {
//   baseURL = 'http://localhost:3003'
// } else {
//   baseURL = process.env.REACT_APP_BACKEND_URL
// }

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
    <div>
      <div>
   <FAQ />
      <h1>Journey-App</h1>
  <FormPop />
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
      <EventShow 
        events = {this.state.events}
       
      />
    </div>
    
    
  );
  
}

}



export default App;
