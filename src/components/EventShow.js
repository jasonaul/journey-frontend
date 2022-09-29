import React, { Component } from "react"
// import {  } from "react-router-dom";



 class EventShow extends Component  {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //       events: []
    //     }
    //   }
    //   async componentDidMount(){
    //     this.getEvents()
    //   }
      
    render(){
    return(
        <>
     <h1>EVENT SHOW HERE</h1>
    
      {this.props.events.map((events) =>{
        return (
          <table>  
        <tbody>
            <div key={events.id}>
            <h1>{events.name}</h1>
            </div>
            </tbody>
        </table>
        )
      }
      
      )}
     
    </>
)}}

/* {this.state.events.map(events =>{
    return (
      <tr key={events._id}>
        <td> {events.name }</td>
      </tr>
    )
  })} */


export default EventShow;