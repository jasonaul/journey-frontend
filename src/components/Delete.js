import React from "react";

let baseURL = process.env.REACT_APP_BACKEND_URL

class Delete extends React.Component {
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

    handleDeleteEvent = (event) => {
        console.log(this.user)
        const copyEvents = [...this.state.events]
        
        copyEvents.unshift(event)
        this.setState({
          events: copyEvents,
          
          // occurred: Boolean
        })
    
    }}

export default Delete