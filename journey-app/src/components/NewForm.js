import React, { Component } from "react"

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'your heroku backend url here'
}

class NewForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      eventName: ''
    }
  }
  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(baseURL + '/events', {
      method: 'POST',
      body: JSON.stringify({name: this.state.name}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then (res => res.json())
      .then (resJson => {
        console.log('NewForm - resJson', resJson) // this will be replaced with this.handleAddHolidy once App has passed it down
        this.setState({
          name: ''
        })
    })
  }
  
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name"></label>
        <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} placeholder="add a event"/>
        <input type="submit" value="Add New Event"/>
      </form>
    )
  }
}

export default NewForm