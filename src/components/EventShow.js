import React, { Component } from "react"
import ReactDOM from 'react-dom'
/* import Delete from './Delete'
 *//* import MapContainer from './MapContainer'
 */
import FormPop from './FormPop'

 let baseURL = process.env.REACT_APP_BACKEND_URL


 
class EventShow extends Component {
    constructor(props){
        super(props);
      this.state={
        flip:false,
        name: '',
        location: '',
        date: '',
        time: '',
        price: '',
        link: '',
        comments: '',
        image: '',
        user: this.user
      
      }
    }
   flip(){
     this.setState({flip: !this.state.flip},()=>console.log(this.state.flip))
   }

    reloadThis () {
    window.location.reload(false);
}

   handleDeleteEvents = (id) => {
    // event.preventDefault()
    console.log(id)
    console.log(this.props.events.findIndex((events)=> events._id === id))
    // console.log(id)
    fetch(baseURL + '/events/' + id, {
    method: 'DELETE',
    // credentials: "include",
    }).then( response => {
    const copyEvents = [...this.props.events]
    console.log(copyEvents)
   
   
    const findIndex = this.props.events.findIndex((events) => events._id === id);
   
    copyEvents.splice(findIndex, 1)
    this.setState({events: copyEvents})
    
    console.log(this.state)
    })
}
   render(){
    
    console.log(this.props)
     return(
        <> 
        <div><FormPop /></div>
    {this.props?.events?.map((events) =>{
         
      return (
        <div>
        
            <div onClick={()=>this.flip()} className="card-container">
    <div className={this.state.flip? "card flipped" : "card"}>
    <div>
            <div key={events.id}>
            <h1 id="cardName">{events.name}</h1>
            <h4 id="cardType">Event Type: {events.type}</h4>
            <h4 id="cardDate">Date: {events.date}</h4>
            <img id="cardImage" alt='' src={events.image}></img>
            </div>
            
            <p id="clickHere">Click for more info...</p>
            </div>



<div className="pic back">
<h3 id="locationCard">Location: {events.location}</h3>

<a href={events.link}>Link to Event Website</a>
<button id="cardDelete"  
    onClick={() => this.handleDeleteEvents(events._id)
     }>DELETE EVENT</button>

</div>


</div>

</div></div>
        )
      })}

  </>
   )} 	
  }
  
  function tick() {
    ReactDOM.render(
      <EventShow />,
      document.getElementById('root')
    );
  }
  
  tick()



export default EventShow;




