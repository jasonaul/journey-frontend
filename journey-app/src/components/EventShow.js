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
     <div onClick={()=>this.flip()} className="card-container">
    <div className={this.state.flip? "card flipped" : "card"}>
    <div>
    
    <h1>Things work sometimes</h1>
    {this.props?.events?.map((events) =>{
        return (
            <div key={events.id}>
            <h1>{events.name}</h1>
            </div>
        )
      })}
    </div>

      <div className="pic back"><a href="http://www.google.com">SAMPLE NAME</a></div>
    </div>
  </div>
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
            </div>
        )
    }
}

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