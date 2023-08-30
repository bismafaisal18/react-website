import React, { useState } from 'react';
import './index.css';
import { images } from '../Helpers/CarouselData';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Carousel() {
  const [currimage, setCurrimg] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      // Swipe left, move to next image
      if (currimage < images.length - 1) {
        setCurrimg(currimage + 1);
      } else {
        setCurrimg(0); // Redirect to the first image
      }
    } else if (touchEndX - touchStartX > 50) {
      // Swipe right, move to previous image
      currimage > 0 && setCurrimg(currimage - 1);
    }
    // Reset touch positions
    setTouchStartX(0);
    setTouchEndX(0);
  };

  return (
    <div
      className="carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="carousel-inner"
        style={{ backgroundImage: `url(${images[currimage].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currimage > 0 && setCurrimg(currimage - 1);
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: 30 }} />
        </div>
        <div className="center"></div>
        <div
          className="right"
          onClick={() => {
            if (currimage < images.length - 1) {
              setCurrimg(currimage + 1);
            } else {
              setCurrimg(0); // Redirect to the first image
            }
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
