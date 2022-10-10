import React from "react";
import Modal from "./Modal";



let baseURL = process.env.REACT_APP_BACKEND_URL

class Update extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          
          events_id:props.events_id,
          name: props.name,
          location: props.location,
          date: props.date,
          time: props.time,
          price: props.price,
          link: props.link,
          comments: props.comments,
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleTypeChange = this.handleTypeChange.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleTimeChange = this.handleTimeChange.bind(this)
        this.handlePriceChange = this.handlePriceChange.bind(this)
        this.handleLinkChange = this.handleLinkChange.bind(this)
        this.handleCommentsChange = this.handleCommentsChange.bind(this)
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
    // const eventObject = {
    //       name: this.state,
    //       location: this.state,
    //       date: this.state,
    //       time: this.state,
    //       price: this.state,
    //       link: this.state,
    //       comments: this.state,
    //       image: this.state,
    // }
    console.log(this.state.events)
    fetch(baseURL + '/events/'+ this.state.events_id, {
      method: 'PUT',
      body: JSON.stringify({
        events_id: this.state.events_id,
        name: this.state.name,
          location: this.state.location,
          date: this.state.date,
          time: this.state.time,
          price: this.state.price,
          link: this.state.link,
          comments: this.state.comments,
          image: this.state.image,
      }),
			headers: {
				'Content-Type': 'application/json',
			},
    }).then (res => res.json())
      .then (resJson => {
        console.log('resJson', resJson);
				const copyEvents = [...this.state.events];
				const findIndex = this.state.events.findIndex(
					(event) => event._id === resJson._id
				);
				copyEvents[findIndex].name = resJson.name;
        copyEvents[findIndex].location = resJson.location;
        copyEvents[findIndex].date = resJson.date;
        copyEvents[findIndex].time = resJson.time;
        copyEvents[findIndex].price = resJson.price;
        copyEvents[findIndex].link = resJson.link;
        copyEvents[findIndex].comments = resJson.comments;
        copyEvents[findIndex].image = resJson.image;
        
				this.setState({ events: copyEvents }); 
       
          this.handleCloseModal();
          
        
    }).catch (error => console.error({'Error': error}))
    window.location.reload()
  }
  // handleUpdateEvents = (id) => {

  //   console.log(id)
  //   console.log(this.props.events.findIndex((events)=> events._id === id))

  //   fetch(baseURL + '/events/' + id, {
  //   method: 'POST',

  //   }).then( response => {
  //   const copyEvents = [...this.props.events]
  //   console.log(copyEvents)
      
  //   const findIndex = this.props.events.findIndex((events) => events._id === id);
   
  //   copyEvents.splice(findIndex, 1)
  //   this.setState({events: copyEvents})
    
  //   console.log(this.state)
  //   })
  // }


  render() {
    return (
      <div className="">
      <br></br>
      
     
        <a href="#" onClick={e => this.modalOpen(e)}>
          <button id="updateEventButton">Update Event</button>
        </a>
        <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}>
    
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
        

        <input type="submit" id="submit"  value="Update Your Event"/>
      </form>
          </div>

        </Modal>
      </div>
    );
  }

}
    export default Update