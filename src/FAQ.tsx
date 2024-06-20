import React from 'react';
import './App.css';
import MyClubSchedule from './ClubSchedule';
import spotifyImg from "./imgs/spotlogo.png";
import instaImg from "./imgs/instalogo.png";
import appMusImg from "./imgs/applemusiclogo.png";
import discordImg from "./imgs/discordlogo.png";
import googleFormImg from "./imgs/googleformlogo.png";
import twitterImg from "./imgs/twitterlogo.png";
import listservImg from "./imgs/listservimg.png";


export default function FAQ(){
    return (
        <div className="faq">
      <h2>Q: When/Where does the club meet?</h2>
      <h3 className="answers">A: We meet every week at TIME on DAY in ROOM.</h3>
      
      <h2>Q: What are the requirements to join the club?</h2>
      <h3 className="answers">A: Come with an open mind, having listened to as much of the weekly picks as you're able to 
      get through! You also need to be affiliated with Northwestern.</h3>
      
      <h2>Q: Do I *<u>NEED</u>* to be in Bienen, be a music major, have knowledge of music theory, OR be an undergad?</h2>   
      <h3 className="answers2">A: You <u>DO NOT NEED</u> to be in Bienen, be a music major, have knowledge of music theory 
      NOR be an undergad. </h3>
      <h5 style={{fontFamily:"Roboto-Regular",fontStyle:'italic', marginBottom:50}}>(Northwestern graduate students and professors are welcome! A <u style={{fontFamily:"Roboto-Regular"}}>majority</u> of the club members aren't in Bienen.)</h5>

      <h2>Q: What streaming service(s) do you primarily use for the club?</h2>
      <h3 className="answers2">A: The club makes playlists of the weekly picks on <a href = "https://open.spotify.com/playlist/4M9DE3DCIpJ3xXLEmARFPW?si=0c3cc85fd8334e6c" target = "_blank" rel = "noopener noreferrer">
        Spotify</a>. While we acknowledge (and are unhappy with) the small amount of compensation that artists/musicians receive under 
        Spotify's payout program, Spotify's free subscription grants all students (regardless of their financial situation) access
        to the music that we listen to week to week.
      </h3>
      <h5 style={{fontFamily:"Roboto-Regular",fontStyle:'italic', marginBottom:50}}>Spotify has the worst payout-per-stream rate 
      among the major streaming industries. if you're uneducated about artist compensation by major music streaming companies, 
      here's a great article that goes into more detail. <a href="https://dittomusic.com/en/blog/how-much-do-music-streaming-services-pay-musicians"
      target="_blank" rel="noopener noreferrer">Source: DittoMusic.com</a></h5> 
       
       <h2>Q: How long are club meetings?</h2>
       <h3 className="answers">A: Roughly 1 hour, no longer than 1.5 hours (depending on how long the discussion takes). We're going to have an
       in-club activity after our discussion (but feel free to leave whenever if you've got other obligations)</h3>

       

       <h2>Q: What does an average club meeting's schedule look like?</h2>
       <MyClubSchedule></MyClubSchedule>

       <h2>Q: How can I keep up to date with the club?</h2>
       <h3 className="answers2">A: Wonderful question, so happy you asked! </h3>
       <h3 className="answers2">If you're interested in joining the club, fill out our interest form and sign up to our Discord!</h3>




       <div className="outer-logo-cont">

        <div className="inner-logo-cont"> 
        <a href="https://www.google.com/forms/about/" target="_blank" rel="noopener">
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

        <div className="inner-logo-cont">
        <a href="https://music.apple.com/us/browse" target = "_blank" rel="nooopener noreferrer">
            <img src={appMusImg} alt="Apple Music Logo" className="company-logos"></img>
        </a><p>Follow Us!</p>
        </div>

        <div className="inner-logo-cont">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={instaImg} alt="Instagram Logo" className="company-logos"></img>
        </a><p>Follow Us!</p>
        </div>


        <div className="inner-logo-cont">
        <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
            <img src={twitterImg} alt="Twitter Logo" className="company-logos" style={{borderRadius:20}}></img>
        </a><p>Follow Us!</p>
        </div>

        <div className="inner-logo-cont">
        <a href="google.com" target="_blank" rel="noopener noreferrer">
            <img src={listservImg} alt="ListservLink" className="company-logos" style={{borderRadius:10}}></img>
        </a><p>Join Our Listserv!</p>
        </div>
       </div>

       <h3 className="answers2">To stay up to date on our weekly picks, follow us on Instagram and Twitter (X.com)!</h3>
       <h3 className="answers2">Follow us on Spotify and Apple Music too (@MTC_ENTER_STREAMING_HANDLE)! We make weekly playlists for your ease 
       of listening. </h3>
       <h3 className="answers2">Finally, if you're interested in what the club thought of about an album, checkout our blog or sign up for our 
       listserv! All links to our sign-ups and socials are linked below!</h3>
       {/* <Socials></Socials> */}
        </div>
    )
}