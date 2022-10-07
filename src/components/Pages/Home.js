import React from "react";
import '../../App.css';

/* import {Link} from "react-router-dom"
 */
 function Home() {
    return (<>
        <div>
        
        <div id="mainImage">
         <div class="hero-text">
            <h1 id="heroH1">Your Personal Event Journal</h1>
                <p id="heroP">Go Play</p>
                    
        </div>
      
        </div>
        <div class="inspiration"><hr></hr><h1 id="inspiroText">Find Event Inspiration</h1></div>
            <div class="inspirationImg">
           <a href="https://www.eventbrite.com/"> <img class="eventbrite" id="inspiroImg"  src="https://cdn.evbstatic.com/s3-build/731483-rc2022-10-05_16.04-d21b382/django/images/logos/eb_orange_on_white_1200x630.png"></img></a>
           <a href="https://www.facebook.com/events/"><img id ="inspiroImg" src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo-2019-present.jpg"></img></a>
           <a href="https://www.ticketmaster.com/"> <img id ="inspiroImg" src="https://logos-world.net/wp-content/uploads/2021/03/Ticketmaster-Logo.png"></img></a>
            </div>
        </div>
        </>
    )
};

export default Home;