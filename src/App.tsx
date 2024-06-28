import React from 'react';
import './App.css';
import BasicTabs from './WeeklyEntry';
import OurMission from './mission'
import SalesPitch from './salespitch';
import Socials from './socials';
import ImageScroller from './ImageScroller';
import ThisWeeksPicks from './ThisWeeksPicks';
import FAQ from './FAQ';
import ExecBoard from './ExecBoard';
import StarterPacks from './StarterPacks';

function App() {
  return (
    
    <div className="all" style={{ position: "relative" }}>
  
      <header className="header">
        MUSIC TASTING CLUB
      </header>
      <div className="image-scroller">
      <ImageScroller></ImageScroller>
      </div>

      <h5 className="header2">NORTHWESTERN'S PREMEIR MUSIC DISCOURSE GROUP</h5>
      <SalesPitch></SalesPitch>
      <OurMission></OurMission>
      <h3 className="check-out-picks">NEXT MEETING'S PICKS (09/XX/24)</h3>
      <ThisWeeksPicks></ThisWeeksPicks>
      <h3 className="check-out-picks">PREVIOUS PICKS</h3>
      <BasicTabs></BasicTabs>
      <h2 className="check-out-picks">FAQ</h2>
      <FAQ></FAQ>
      <h2 className="check-out-picks">MEET THE EXEC BOARD!</h2>
      <ExecBoard></ExecBoard>
      <h2 className="check-out-picks">GENRE STARTER PACKS</h2>
      <h5 style={{textAlign:"center"}}>EXPLORE NEW GENRES WITH CLUB PICKS</h5>
      {/* <StarterPacks></StarterPacks> */}
      <br></br><br></br>
    </div>
  );
}

export default App;
