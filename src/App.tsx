import React from 'react';
import './App.css';
import BasicTabs from './WeeklyEntry';
import OurMission from './mission'
import SalesPitch from './salespitch';
import Socials from './socials';
import ImageScroller from './ImageScroller';


function App() {
  return (
    <div className="all">
      <header className="header">
        MUSIC TASTING CLUB
      </header>
      <nav>
        <div className="navCont">
          <a></a>
        </div>
      </nav>
      <h5 className="header2">NORTHWESTERN'S PREMEIR MUSIC DISCOURSE GROUP</h5>
      <SalesPitch></SalesPitch>
      <OurMission></OurMission>
      <h3 className="check-out-prev-picks">Check out our previous picks!</h3>
      <BasicTabs></BasicTabs>
      <Socials></Socials>
      <div className="imbed-cont">
      <iframe title="spotify-imbed" className="imbed-spotify" src="https://open.spotify.com/embed/playlist/4M9DE3DCIpJ3xXLEmARFPW?utm_source=generator&theme=0" width="100%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <iframe title="apple-music-imbed" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameBorder="0" className="imbed-apple-music" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/ne%C5%8D-wax-bloom/1266657791"></iframe>
      </div>
      <ImageScroller></ImageScroller>
    </div>
  );
}

export default App;
