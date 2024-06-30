import React from "react";
import googleFormImg from "./imgs/googleformlogo.png";
import discordImg from "./imgs/discordlogo.png";
import './phone-only-salespitch.css'

function ConditionalPhoneSignUp() {
  return (<div className="your-component-mission-cont">
  <div className="your-component-mission">
    <h1>INTERESTED? Feel free to fill out our interest form and to join our Discord!</h1>
  </div>
  <div className="your-component-inner-logo-wrapper">
    <div className="your-component-inner-logo-cont">
      <a href="https://www.google.com/forms/about/" target="_blank" rel="noopener noreferrer">
        <img src={googleFormImg} alt="Google Form Img" className="your-component-company-logos" />
      </a>
      <p>Interest Form</p>
    </div>
    <div className="your-component-inner-logo-cont">
      <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
        <img src={discordImg} alt="Discord Join Logo" className="your-component-company-logos" />
      </a>
      <p>Join Our Discord!</p>
    </div>
  </div>
</div>);
}
export default ConditionalPhoneSignUp;
  
  