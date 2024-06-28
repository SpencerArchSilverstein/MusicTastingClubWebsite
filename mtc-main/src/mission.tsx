import React from 'react';
import './mission.css';
import img from "./imgs/logo.png";

function OurMission() {
    return (
    <div className="mission-cont">
        <div className="mission">
        <h1>OUR MISSION:</h1>
        
        {/* <ol style={{paddingLeft:"17.5px"}}>
        <h3><li>To introduce members to new artists, albums, and genres</li></h3>
        <h3><li>To build connection through music</li></h3>
        </ol> */}
        {/* <p>In summary: to introduce members to new artists, albums, and genres. 
        We aim to provide a welcoming environment for all students to discuss their favorite music. 
        We aim to be a place of inclusion, where music from niche to mainstream is respected,
        heard out, and analyzed to the fullest. Further, we aim to cause people to think critically about music that they 
        enjoy listening to, and to allow people the opportunity to find new musical artists.</p> */}
        <h3>To have members discover new music and to build community through shared passion and discussion.</h3>
        </div>
        <img src={img} alt="logo img" className="mission-img"></img>
    </div>
    );
  }
  


  
  export default OurMission;