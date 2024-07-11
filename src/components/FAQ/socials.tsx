import React from 'react';
import './socials.css';
import spotifyImg from "../../imgs/spotlogo.png";
import instaImg from "../../imgs/instalogo.png";
import appMusImg from "../../imgs/applemusiclogo.png";
import discordImg from "../../imgs/discordlogo.png";
import googleFormImg from "../../imgs/googleformlogo.png";
import twitterImg from "../../imgs/twitterlogo.png";
import listservImg from "../../imgs/listservimg.png";

function Socials(){
    return (
    <React.Fragment>
         <div className="outer-logo-cont">
            

<div className="inner-logo-cont"> 
<a href="https://www.google.com/forms/about/" target="_blank" rel="noopener noreferrer">
  <img src={googleFormImg} alt="Google Form Img" className="company-logos"></img>
</a>
<p>Interest Form</p>
</div>

<div className="inner-logo-cont"><a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
    <img src={discordImg} alt="Discord Join Logo" className="company-logos"></img>
</a>
<p>Join Our Discord!</p></div>

<div className="inner-logo-cont"><a href = "https://open.spotify.com/playlist/5UkcYrSvakVfYhHbvr3Bru?go=1&sp_cid=0354276646149ba242a28fa53ccacb67&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=4faf9245e69e45df" 
target = "_blank" rel = "noopener noreferrer">
    <img src={spotifyImg} alt="Spotify Logo" className="company-logos"></img>
</a>
<p>Follow Us!</p></div>

<div className="inner-logo-cont"><div style={{paddingLeft:20}}>
<a href="https://music.apple.com/us/browse" target = "_blank" rel="nooopener noreferrer">
    <img src={appMusImg} alt="Apple Music Logo" className="company-logos"></img>
</a><p>Follow Us!</p>
</div>

</div>
</div>
<div className="outer-logo-cont">

<div className="inner-logo-cont">
    
<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
    <img src={instaImg} alt="Instagram Logo" className="company-logos"></img>
</a><p>Follow Us!</p>
</div>

<div className="inner-logo-cont"><div style={{paddingLeft:20}}>
<a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
    <img src={twitterImg} alt="Twitter Logo" className="company-logos" style={{borderRadius:20}}></img>
</a><p>Follow Us!</p></div>
</div>
<div className="inner-logo-cont">
<a href="https://google.com" target="_blank" rel="noopener noreferrer">
    <img src={listservImg} alt="ListservLink" className="company-logos" style={{borderRadius:10}}></img>
</a><p>Join Our Listserv!</p>

</div>
{/* <img src={"https://i.scdn.co/image/ab67616d00001e02d95ab48a8a9de3c4a2cbfe80"} alt="Google Form Img" className="company-logos"></img> */}

</div>
    </React.Fragment>
    );
}

export default Socials;