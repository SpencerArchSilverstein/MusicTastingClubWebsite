import React from 'react';
import './App.css';
import SalesPitch from './salespitch';
import ImageScroller from './ImageScroller';
import FAQ from './FAQ';
import ExecBoard from './ExecBoard';
// import StarterPacks from './StarterPacks';
import WeeklyEntry from './WeeklyEntry';
// import { render } from '@testing-library/react';
import {useState} from 'react';
import BlackButton from './BlackButton';


function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue:number) => {
    setValue(newValue);
  };

  const renderNewPage = () => {
    switch(value){
      case 0:
        return <SalesPitch />;
      case 1:
        return <WeeklyEntry />;
      case 2:
        return <FAQ />;
      case 3:
        return <ExecBoard />;
      default:
        return <SalesPitch />;
  }};
  
  return (
    <React.Fragment>
         
        
      
      
      
      
      
    <div className="all" style={{ position: "relative" }}>
    
         {/* <div className="nav-bar-formatting-left">
      
        </div> */}
       
        <header className="header">
      MUSIC TASTING CLUB
    </header>
    {/* <div className="nav-bar-formatting-right">
        
   
         </div> */}
    
    <div className="image-scroller">
    <ImageScroller></ImageScroller>
    </div>
    <h5 className="header2">NORTHWESTERN'S PREMEIR MUSIC DISCOURSE GROUP</h5>
    <div className="nav-bar-cont">
    <p className="nav-item" onClick={() => handleChange(0)}><BlackButton buttonText="Home"></BlackButton></p>
        <p className="nav-item" onClick={() => handleChange(1)}><BlackButton buttonText="Picks"></BlackButton></p>
    <p className="nav-item" onClick={() => handleChange(2)}><BlackButton buttonText="FAQ"></BlackButton></p>
        <p className="nav-item" onClick={() => handleChange(3)}><BlackButton buttonText="About"></BlackButton></p>

      </div>
    {renderNewPage()}
    {/* <SalesPitch></SalesPitch>
    <OurMission></OurMission>
    <ThisWeeksPicks></ThisWeeksPicks> */}
    {/* <WeeklyEntry></WeeklyEntry>
    
    <FAQ></FAQ> */}
    
    {/* <ExecBoard></ExecBoard> */}
    {/* <h2 className="check-out-picks">GENRE STARTER PACKS</h2>
    <h5 style={{textAlign:"center"}}>EXPLORE NEW GENRES WITH CLUB PICKS</h5> */}
    {/* <StarterPacks></StarterPacks> */}
    {/* <br></br><br></br> */}
  </div>
 
    </React.Fragment>
  );
}

export default App;
