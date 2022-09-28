import React, { Component } from "react"

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000'
} else {
  baseURL = 'your heroku backend url here'
}


class NewForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      location: '',
      date: '',
      time: '',
      price: '',
      link: '',
      comments: '',
      occurred: Boolean
    }
  }
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleTypeChange = (event) => {
    this.setState({
      type: event.target.value
    })
  }
  handleLocationChange = (event)=>{
    this.setState({
      location: event.target.value
    })
  }
  handleDateChange = (event) => {
    this.setState({
      date: event.target.value
    })
  }
handleTimeChange = (event) => {
  this.setState({
    time: event.target.value
  })
}
handlePriceChange = (event) => {
  this.setState({
    price: event.target.value
  })
}
handleLinkChange = (event) => {
  this.setState({
    link: event.target.value
  })
}
handleCommentsChange = (event) => {
  this.setState({
    comments: event.target.value
  })
}
handleOccurredChange = (event)=> {
  this.setState({
    occurred: event.target.value
  })
}
// handleSubmit = (event) => {
//   alert(`
//   ${this.state.name}
//   ${this.state.type}
//   ${this.state.location}
//   ${this.state.date}
//   ${this.state.time}
//   ${this.state.price}
//   ${this.state.link}
//   ${this.state.comments}
//   ${this.state.occurred}`)
// }
  
handleSubmit = (event) => {
  event.preventDefault()
  fetch(baseURL + '/events', {
    method: 'POST',
    body: JSON.stringify({name: this.state.name, type: this.state.type, location: this.state.location, date: this.state.date, time: this.state.time, price: this.state.price, link: this.state.link, comments: this.state.comments, occurred: this.state.occurred}),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then (res => res.json())
    .then (resJson => {
     console.log('NewForm - resJson', resJson) // this will be replaced with this.handleAddEvent once App has passed it down
      this.props.handleAddEvent(resJson)
      this.setState({
        name: '',
        location: '',
        date: '',
        time: '',
        price: '',
        link: '',
        comments: '',
        occurred: Boolean
        })
  }).catch (error => console.error({'Error': error}))
}
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name of Event: </label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          onChange={this.handleNameChange} 
          value={this.state.name} 
          placeholder=""
        />
        <br></br>

        <label htmlFor="type">Type of Event: </label>
        <input 
          type="text" 
          id="type" 
          name="type" 
          onChange={this.handleTypeChange} 
          value={this.state.type} 
          placeholder=""
        />
        <br></br>

        <label htmlFor="location">Location: </label>
        <input 
          type="text" 
          id="location" 
          name="location" 
          onChange={this.handleLocationChange} 
          value={this.state.location} 
          placeholder=""
        />
        <br></br>

        <label htmlFor="date">Date: </label>
          <input 
            type="text" 
            id="date" 
            name="date" 
            onChange={this.handleDateChange} 
            value={this.state.date} 
            placeholder=""
          />
        <br></br>

        <label htmlFor="time">Time: </label>
        <input 
          type="text" 
          id="time" 
          name="time" 
          onChange={this.handleTimeChange} 
          value={this.state.time} 
          placeholder=""
        />
        <br></br>

        <label htmlFor="price">Price: </label>
        <input 
          type="text" 
          id="price" 
          name="price" 
          onChange={this.handlePriceChange} 
          value={this.state.price} 
          placeholder=""
        />
        <br></br>

        <label htmlFor="link">Link: </label>
        <input 
          type="text" 
          id="link" 
          name="link" 
          onChange={this.handleLinkChange} 
          value={this.state.link} 
          placeholder=""
        />
        <br></br>

        <label htmlFor="comments">Comments: </label>
        <textarea 
          type="textarea" 
          id="comments" 
          name="comments" 
          onChange={this.handleCommentsChange} 
          value={this.state.comments} 
          placeholder=""
        />
        <br></br>

        <label htmlFor="occurred">Event Occurred: </label>
        {/* <input 
          type="checkbox" 
          id="occurred" 
          name="occurred" 
          onChange={this.handleOccurredChange} 
          value={this.state.occurred} 
          placeholder=""
        /> */}
        <br></br>

        <input type="submit" id="submit" value="Add New Event"/>
      </form>
    )
  }
}

export default NewForm