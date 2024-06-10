import React from 'react';
import image1 from './WQ24_aa/WQ24_W1_AotW.png';
import image2 from "./WQ24_aa/WQ24_W2_AotW.png";
import image3 from  "./WQ24_aa/WQ24_W3_AotW.png";
import './ImageScroller.css'


function imageName(){
    const imageList = [
    "./WQ24_aa/WQ24_W1_AotW.png", 
    "./WQ24_aa/WQ24_W2_AotW.png", "./WQ24_aa/WQ24_W2_RUAotW.png",  "WQ24_W2_SotW.png",  "WQ24_W2_RUSotW.png",
    "./WQ24_aa/WQ24_W3_AotW.png", "./WQ24_aa/WQ24_W3_RUAotW.png", "WQ24_W3_SotW.png", "WQ24_W3_RUSotW.png",
    "./WQ24_aa/WQ24_W4_AotW.png", "./WQ24_aa/WQ24_W4_RUAotW.png", "WQ24_W4_SotW.png", "WQ24_W4_RUSotW.png",
    "./WQ24_aa/WQ24_W5_AotW.png", "./WQ24_aa/WQ24_W5_RUAotW.png", "WQ24_W5_SotW.png", "WQ24_W5_RUSotW.png",
    "./WQ24_aa/WQ24_W6_AotW.png", "./WQ24_aa/WQ24_W6_RUAotW.png", "WQ24_W6_SotW.png", "WQ24_W6_RUSotW.png",
    "./WQ24_aa/WQ24_W7_AotW.png", "./WQ24_aa/WQ24_W7_RUAotW.png", "WQ24_W7_SotW.png", "WQ24_W7_RUSotW.png",
    "./WQ24_aa/WQ24_W8_AotW.png", "./WQ24_aa/WQ24_W8_RUAotW.png", "WQ24_W8_SotW.png", "WQ24_W8_RUSotW.png",
    "./WQ24_aa/WQ24_W9_AotW.png", "./WQ24_aa/WQ24_W9_RUAotW.png", "WQ24_W9_SotW.png", "WQ24_W9_RUSotW.png"
    ]
}
function ImageScroller(){
    return(
        <div className="logos">
            <div className="logos-slide">
                <img src={image1} alt="image1" className="mission-img"></img>
                <img src={image2} alt="image1" className="mission-img"></img>
                <img src={image3} alt="image1" className="mission-img"></img>
                <img src={image1} alt="image1" className="mission-img"></img>
                <img src={image2} alt="image1" className="mission-img"></img>
                <img src={image3} alt="image1" className="mission-img"></img>
                <img src={image1} alt="image1" className="mission-img"></img>
                <img src={image2} alt="image1" className="mission-img"></img>
                <img src={image3} alt="image1" className="mission-img"></img>
                <img src={image1} alt="image1" className="mission-img"></img>
                <img src={image2} alt="image1" className="mission-img"></img>
                <img src={image3} alt="image1" className="mission-img"></img>
                <img src={image1} alt="image1" className="mission-img"></img>
                <img src={image2} alt="image1" className="mission-img"></img>
                <img src={image3} alt="image1" className="mission-img"></img>
                <img src={image1} alt="image1" className="mission-img"></img>
                <img src={image2} alt="image1" className="mission-img"></img>
                <img src={image3} alt="image1" className="mission-img"></img>
                <img src={image1} alt="image1" className="mission-img"></img>
                <img src={image2} alt="image1" className="mission-img"></img>
                <img src={image3} alt="image1" className="mission-img"></img>
                <img src={image1} alt="image1" className="mission-img"></img>
                <img src={image2} alt="image1" className="mission-img"></img>
                <img src={image3} alt="image1" className="mission-img"></img>
            </div>
        </div>
    );
}

export default ImageScroller;

