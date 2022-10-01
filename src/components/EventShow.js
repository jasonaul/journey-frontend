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
  
  
  





// ReactDOM.render(<App />, document.getElementById('root'));
//         <>
//      <h1>EVENT SHOW HERE</h1>
//     <table>  
//         <tbody>
//       {this.props.events.map((events) =>{
//         return (
//             <div key={events.id}>
//             <h1>{events.name}</h1>
//             </div>
//         )
//       }
//       //
      
//       )}
//         </tbody>
//     </table>
//     </>
// )}}

// /* {this.state.events.map(events =>{
//     return (
//       <tr key={events._id}>
//         <td> {events.name }</td>
//       </tr>
//     )
//   })} */


export default EventShow;





////Bunk code as of Sept. 27 8:53pm////

/* class EventShow extends Component  {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //       events: []
    //     }
    //   }
    //   async componentDidMount(){
    //     this.getEvents()
    //   }
    
    constructor(props) {
        super(props);
        this.state = {flipped: false};
        this.flip = this.flip.bind(this);
    }

    flip = () => {
        this.setState({
            flipped: !this.state.flipped
        })
    }

    render(){
    return(
<<<<<<< HEAD:src/components/EventShow.js
        <>
     <h1>EVENT SHOW HERE</h1>
    
      {this.props.events.map((events) =>{
        return (
          <table>  
        <tbody>
            <div key={events.id}>
            <h1>{events.name}</h1>
=======
        <div onClick={this.flip} className={"card-container" + (this.state.flipped ? " flipped" : "")}>

        <Front />
        <Back />
      </div>
          )
        }
      }

class Front extends Component {
    render() {
        return (
            <div className="front">
                <ImageArea />
                <MainArea />
>>>>>>> EventShow:journey-app/src/components/EventShow.js
            </div>
            </tbody>
        </table>
        )
<<<<<<< HEAD:src/components/EventShow.js
      }
      
      )}
     
    </>
)}}
=======
    }
}
>>>>>>> EventShow:journey-app/src/components/EventShow.js

class Back extends Component {
    render() {
        return (
            <div className="back">
                <p>Sample info</p>
                <p>More sample info</p>
            </div>
        )
    }
}

class ImageArea extends Component {
    render() {
        return (
            <div className="image-container">
                <img className="card-image" alt="" src="https://78.media.tumblr.com/d98fb931adb117c70f0dbced9e947520/tumblr_pe582mbWip1tlgv32o1_1280.png"></img>
                
                <h1>Test name</h1>
            </div>
        )
    }
}

class MainArea extends Component {
    render() {
        return (
            <div className="main-area">
                <div className="blog-post">
                    <p className="date">{new Date().toLocaleDateString()}</p>
                    <p className="blog-content">Sample text!</p>
                    <p className="read-more">Click card for more details...</p>
                </div>
            </div>
        )
    }
} */