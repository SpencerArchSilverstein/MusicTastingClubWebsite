import React from 'react';
import './App.css';
import SalesPitch from './salespitch';
import ImageScroller from './ImageScroller';
import FAQ from './FAQ';
import ExecBoard from './ExecBoard';
// import StarterPacks from './StarterPacks';
import WeeklyEntry from './WeeklyEntry';
// import { render } from '@testing-library/react';
// import {useState} from 'react';
import BlackButton from './BlackButton1';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileComponent from './MobileComponent';


function App() {
  const isMobile = useMediaQuery('(max-width: 768px)');

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
<div>{isMobile ? <MobileComponent handleChange={handleChange} /> : null}</div>

      
<div className="all" style={{ position: "relative" }}>
<header className="header">
  MUSIC TASTING CLUB
</header>


<div className="image-scroller">
<ImageScroller></ImageScroller>
</div>
<h5 className="header2">NORTHWESTERN'S PREMEIR MUSIC DISCOURSE GROUP</h5>

  {isMobile ? null : (
          <div className="nav-bar-cont">
            <p className="nav-item" onClick={() => handleChange(0)}><BlackButton buttonText="Home" /></p>
            <p className="nav-item" onClick={() => handleChange(1)}><BlackButton buttonText="Picks" /></p>
            <p className="nav-item" onClick={() => handleChange(2)}><BlackButton buttonText="FAQ" /></p>
            <p className="nav-item" onClick={() => handleChange(3)}><BlackButton buttonText="About" /></p>
          </div>
        )}
{renderNewPage()}
</div>
    </React.Fragment>
  );
}

export default App;
