import React from "react";
import Modal from "./Modal";



let baseURL = process.env.REACT_APP_BACKEND_URL

class Update extends React.Component {
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



modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({
      modalInputName: "",
      modal: false
    });
  }

  handleCloseModal () {
    this.setState({modal: false})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(baseURL + '/events', {
      method: 'POST',
      body: JSON.stringify({name: this.state.name, type: this.state.type, location: this.state.location, date: this.state.date, time: this.state.time, price: this.state.price, link: this.state.link, comments: this.state.comments, image: this.state.image, occurred: this.state.occurred}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then (res => res.json())
      .then (resJson => {
       console.log('NewForm - resJson', resJson) 
        this.props.handleUpdateEvent(resJson)
        this.setState({
          name: '',
          location: '',
          date: '',
          time: '',
          price: '',
          link: '',
          comments: '',
          image: '',
          showModal: false
          })
          this.handleCloseModal();
          
        
    }).catch (error => console.error({'Error': error}))
  }
  handleUpdateEvents = (id) => {

    console.log(id)
    console.log(this.props.events.findIndex((events)=> events._id === id))

    fetch(baseURL + '/events/' + id, {
    method: 'POST',

    }).then( response => {
    const copyEvents = [...this.props.events]
    console.log(copyEvents)
      
    const findIndex = this.props.events.findIndex((events) => events._id === id);
   
    copyEvents.splice(findIndex, 1)
    this.setState({events: copyEvents})
    
    console.log(this.state)
    })
  }


  render() {
    return (
      <div className="FormPop">
      <br></br>
      
     
        <a href="#" onClick={e => this.modalOpen(e)}>
          <button id="updateEventButton">Update Event</button>
        </a>
        <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}>
          <h2>Add a New Event</h2>
          <div className="form-group">
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
        <select value={this.state.type} onChange={this.handleTypeChange} >
          <option value="business">Business</option>
          <option value="concert">Concert / Music</option>
          <option value="convention">Convention</option>
          <option value="arts">Performing & Visual Arts</option>
          <option value="sports">Sporting Event</option>
          <option value="other">Other</option>
        </select>
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

{/* HOLD: Can use Date-Picker Here,if we decide to */}

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

        <label htmlFor="image">Image</label>
        <select value={this.state.image} onChange={this.handleImageChange} >
          <option value="https://i.imgur.com/Vl9lCDA.png">Superhero</option>
          <option value="https://i.imgur.com/c0GaIr6.jpeg">Rock Star</option>
          <option value="convention">Convention</option>
          <option value="arts">Performing & Visual Arts</option>
          <option value="sports">Sporting Event</option>
          <option value="other">Other</option>
        </select>
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
        

        <input type="submit" id="submit"  value="Add Your New Event"/>
      </form>
          </div>

        </Modal>
      </div>
    );
  }

}
    export default Update