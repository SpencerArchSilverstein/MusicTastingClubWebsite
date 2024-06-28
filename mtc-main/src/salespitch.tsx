import React from 'react';
import './salespitch.css';
import OurMission from './mission';
import ThisWeeksPicks from './ThisWeeksPicks';

function SalesPitch(){
    return (
        <React.Fragment>
        <div className="cont">
            <div className="my-centered-text">
            {/* <h2>DO YOU LIKE LISTENING TO MUSIC?  DO YOU LIKE TALKING ABOUT MUSIC? DO YOU WANT NEW MUSIC RECS?</h2> */}
            <h3>DO YOU LIKE LISTENING TO, TALKING ABOUT, OR TRYING OUT NEW</h3>
            <h2>MUSIC?</h2>
            {/* <h2>DO YOU LIKE TALKING ABOUT MUSIC?</h2>
            <h2>DO YOU LIKE TRYING OUT NEW MUSIC?</h2> */}
            <h1>THE MUSIC TASTING CLUB IS THE PLACE FOR YOU!</h1>
            <h3> 
            Imagine a weekly book club, but for albums/songs.
            </h3>
            </div>
            {/* <h3>Do you have a music taste you'd consider 
            niche?</h3> 
            <h3>Are you looking for an outlet to gush about your favorite artist or album?</h3>
            <h3>Are you sick of listening to the same artist(s) or song(s)?</h3>
            <h3>Are you generally looking for new music recommendations?</h3> */}
        </div>
        <OurMission></OurMission>
        <ThisWeeksPicks></ThisWeeksPicks>
        </React.Fragment>
    );
}

export default SalesPitch;