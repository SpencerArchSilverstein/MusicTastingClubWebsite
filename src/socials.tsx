import React from 'react';
import spotifyImg from "./imgs/spotifyimg.png";
import instaImg from "./imgs/instaimg.png";
import appMusImg from "./imgs/appmusimg.png";
import './socials.css';

function Socials(){
    return (
        <div >
            
            <h6 className="msg">FOLLOW US ON SOCIAL MEDIA!</h6>
            <div className="socialsContainer">
                <a href = "https://open.spotify.com/playlist/5UkcYrSvakVfYhHbvr3Bru?go=1&sp_cid=0354276646149ba242a28fa53ccacb67&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=4faf9245e69e45df" 
                target = "_blank" rel = "noopener noreferrer">
                    <img src={spotifyImg} alt="Spotify Logo" className="first-left-soc"></img>
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <img src={instaImg} alt="Instagram Logo" className="not-first-left-soc"></img>
                </a>
                <a href="https://music.apple.com/us/browse" target = "_blank" rel="nooopener noreferrer">
                    <img src={appMusImg} alt="Apple Music Logo" className="not-first-left-soc"></img>
                </a>
            </div>

        </div>
    );
}

export default Socials;