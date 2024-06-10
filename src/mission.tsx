import React from 'react';
import './mission.css';
import img from "./imgs/logo.png";

function OurMission() {
    return (
    <div className="mission-cont">
        <div className="mission">
        <h1>OUR MISSION:</h1>
        <p>To provide a welcoming environment for students to discuss their favorite music genres, albums, 
        and artists. It aims to be a place of inclusion, where music from niche to mainstream is respected,
        heard out, and analyzed to the fullest. To allow people to think critically about music that they 
        enjoy listening to, and to allow people the opportunity to find new musical artists.</p>
        </div>
        <img src={img} alt="logo img" className="mission-img"></img>
    </div>
    );
  }
  


  
  export default OurMission;