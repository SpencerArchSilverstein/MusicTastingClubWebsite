import React from 'react';
import './ImageScroller.css';

const imageName = ():string[] => {
    const images= [
    "./WQ24_aa/WQ24_W1_AotW.png", 
    "./WQ24_aa/WQ24_W2_AotW.png", "./WQ24_aa/WQ24_W2_RUAotW.png",  "./WQ24_aa/WQ24_W2_SotW.png",  "./WQ24_aa/WQ24_W2_RUSotW.png",
    "./WQ24_aa/WQ24_W3_AotW.png", "./WQ24_aa/WQ24_W3_RUAotW.png", "./WQ24_aa/WQ24_W3_SotW.png", "./WQ24_aa/WQ24_W3_RUSotW.png",
    "./WQ24_aa/WQ24_W4_AotW.png", "./WQ24_aa/WQ24_W4_RUAotW.png", "./WQ24_aa/WQ24_W4_SotW.png", "./WQ24_aa/WQ24_W4_RUSotW.png",
    "./WQ24_aa/WQ24_W5_AotW.png", "./WQ24_aa/WQ24_W5_RUAotW.png", "./WQ24_aa/WQ24_W5_SotW.png", "./WQ24_aa/WQ24_W5_RUSotW.png",
    "./WQ24_aa/WQ24_W6_AotW.png", "./WQ24_aa/WQ24_W6_RUAotW.png", "./WQ24_aa/WQ24_W6_SotW.png", "./WQ24_aa/WQ24_W6_RUSotW.png",
    "./WQ24_aa/WQ24_W7_AotW.png", "./WQ24_aa/WQ24_W7_RUAotW.png", "./WQ24_aa/WQ24_W7_SotW.png",
    "./WQ24_aa/WQ24_W8_AotW.png", "./WQ24_aa/WQ24_W8_RUAotW.png", "./WQ24_aa/WQ24_W8_SotW.png",
    "./WQ24_aa/WQ24_W9_AotW.png", "./WQ24_aa/WQ24_W9_RUAotW.png", "./WQ24_aa/WQ24_W9_SotW.png", "./WQ24_aa/WQ24_W9_RUSotW.png",
    "./SQ24_aa/SQ24_W1_AotW.png", "./SQ24_aa/SQ24_W1_RUAotW.png", "./SQ24_aa/SQ24_W1_SotW.png", "./SQ24_aa/SQ24_W1_RUSotW.png",
    "./SQ24_aa/SQ24_W2_AotW.png", "./SQ24_aa/SQ24_W2_RUAotW.png", "./SQ24_aa/SQ24_W2_SotW.png", "./SQ24_aa/SQ24_W2_RUSotW.png",
    "./SQ24_aa/SQ24_W3_AotW.png", "./SQ24_aa/SQ24_W3_RUAotW.png", "./SQ24_aa/SQ24_W3_SotW.png", "./SQ24_aa/SQ24_W3_RUSotW.png",
    "./SQ24_aa/SQ24_W4_AotW.png", "./SQ24_aa/SQ24_W4_RUAotW.png", "./SQ24_aa/SQ24_W4_SotW.png", "./SQ24_aa/SQ24_W4_RUSotW.png",
    "./SQ24_aa/SQ24_W4_AotW.png", "./SQ24_aa/SQ24_W4_RUAotW.png", "./SQ24_aa/SQ24_W4_SotW.png", "./SQ24_aa/SQ24_W4_RUSotW.png",
    "./SQ24_aa/SQ24_W5_AotW.png", "./SQ24_aa/SQ24_W5_RUAotW.png", "./SQ24_aa/SQ24_W5_SotW.png", "./SQ24_aa/SQ24_W5_RUSotW.png",
    "./SQ24_aa/SQ24_W6_AotW.png", "./SQ24_aa/SQ24_W6_RUAotW.png", "./SQ24_aa/SQ24_W6_SotW.png", "./SQ24_aa/SQ24_W6_RUSotW.png",
    "./SQ24_aa/SQ24_W7_AotW.png", "./SQ24_aa/SQ24_W7_RUAotW.png", "./SQ24_aa/SQ24_W7_SotW.png", "./SQ24_aa/SQ24_W7_RUSotW.png",
    "./SQ24_aa/SQ24_W8_AotW.png", "./SQ24_aa/SQ24_W8_RUAotW.png", "./SQ24_aa/SQ24_W8_SotW.png", "./SQ24_aa/SQ24_W8_RUSotW.png", 
];
    return images;
}
function ImageScroller(){

    const images=imageName();
    const imagesPerRow = 6; 
    const numLines = 7;

    const lines = [];

    for (let i = 0; i < numLines; i++) {
        const offset = i * imagesPerRow; 
        const offsetImages = [
        ...images.slice(offset),
        ...images.slice(0, offset),
        ];
        lines.push(offsetImages);
    }

    return (
        <div className="logos">
            {lines.map((lineImages, lineIndex) => (
                <div className="logos-slide" key={lineIndex}>
                {lineImages.map((path, imgIndex) => (
                  <img
                    key={`line-${lineIndex}-${imgIndex}`}
                    src={require(`${path}`)}
                    alt={`Image ${imgIndex + 1}`}
                  />
                ))}
                </div>
            ))}
        </div>
      );
}

export default ImageScroller;

