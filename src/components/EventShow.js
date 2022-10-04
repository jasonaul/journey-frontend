import React, { Component } from "react"
import ReactDOM from 'react-dom'




class EventShow extends Component {
    constructor(props){
        super(props);
      this.state={
      flip:false
              }}
  
   flip(){
     this.setState({flip: !this.state.flip},()=>console.log(this.state.flip))
   }



   
    
   render(){
    console.log(this.props)
     return(
        <>
    
    {this.props?.events?.map((events) =>{
        return (
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

{/* {function changeImage (){
    var eventImage = document.getElementById(eventImage)
if ({events.type} === 'concert') {
    eventImage = "https://i.imgur.com/c0GaIr6.jpeg"
} else if ({events.type} ==='convention') {
    eventImage = "https://i.imgur.com/Vl9lCDA.png"
} else if ({events.type} ==='business') {
    eventImage = "https://ironstonehq.com/wp-content/uploads/2018/10/AdobeStock_208955675-1024x684.jpeg"
} else if ({events.type} ==='arts') {
    eventImage = "https://i.imgur.com/E2Nffrt.jpeg"
} else if ({events.type} ==='sports') {
    eventImage = "https://i.imgur.com/gEj7GZf.jpeg"
} else {
    eventImage = "https://i.imgur.com/Uj8oGm0.jpg"
}
}} */}

<div className="pic back">
<h3 id="locationCard">Location: {events.location}</h3>

<a href={events.link}>Link to Event Website</a></div>
</div>
</div>
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




