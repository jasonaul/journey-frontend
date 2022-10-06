import React from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";

import "../Pop.css";
let baseURL = process.env.REACT_APP_BACKEND_URL

class FormPop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      name: '',
      location: '',
      date: '',
      time: '',
      price: '',
      link: '',
      comments: '',
      image: '',
      modalInputName: "",
    };
    this.handleCloseModal = this.handleCloseModal.bind(this);
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
handleImageChange = (event)=>{
  this.setState({
    image: event.target.value
  })
  
}



handleSubmit = (event) => {
  /* event.preventDefault() */
  fetch(baseURL + '/events', {
    method: 'POST',
    body: JSON.stringify({name: this.state.name, type: this.state.type, location: this.state.location, date: this.state.date, time: this.state.time, price: this.state.price, link: this.state.link, comments: this.state.comments, image: this.state.image, occurred: this.state.occurred}),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then (res => res.json())
    .then (resJson => {
     console.log('NewForm - resJson', resJson) 
      this.props.handleAddEvent(resJson)
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

//////BREAK //////

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



  render() {
    return (
      <div className="FormPop">
      <br></br>
      
     
        <a href="#" onClick={e => this.modalOpen(e)}>
          <button id="addEventButton">Add New Event</button>
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
          className="form-control"
          onChange={this.handleNameChange} 
          value={this.state.name} 
          placeholder=""
        />
        <br></br>

        <label htmlFor="type">Type of Event: </label>
        <select value={this.state.type} onChange={this.handleTypeChange} className="form-control">
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
          className="form-control" 
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
            className="form-control" 
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
          className="form-control"
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
          className="form-control"
          onChange={this.handlePriceChange} 
          value={this.state.price} 
          placeholder=""
        />
        <br></br>

        <label htmlFor="image">Image</label>
        <select value={this.state.image} onChange={this.handleImageChange} className="form-control" >
          <option value="https://i.imgur.com/Vl9lCDA.png">Superhero</option>
          <option value="https://i.imgur.com/c0GaIr6.jpeg">Rock Star</option>
          <option value="https://ironstonehq.com/wp-content/uploads/2018/10/AdobeStock_208955675-1024x684.jpeg">All Things Business</option>
          <option value="https://i.imgur.com/E2Nffrt.jpeg">Feeling Artsy</option>
          <option value="https://i.imgur.com/gEj7GZf.jpeg">Yeah! Sports Ball!</option>
          <option value="https://i.imgur.com/Uj8oGm0.jpg">Other</option>
        </select>
        <br></br>

        <label htmlFor="link">Link: </label>
        <input 
          type="text" 
          id="link" 
          name="link" 
          className="form-control"
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

const rootElement = document.getElementById("root");
ReactDOM.render(<FormPop />, rootElement);

export default FormPop

