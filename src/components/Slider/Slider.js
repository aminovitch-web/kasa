
import { useState } from "react";


import "./_slider.scss";

import arrowLeft from "../../assets/arrowLeft.png";
import arrowRight from "../../assets/arrowRight.png";


export default function Slider({ pictures }) {

  const [current, updateCurrent] = useState(0);

  const length = pictures.length;

 
  const nextSlide = () => {
    updateCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    updateCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      {pictures.map((picture, index) => {
        return (
         
          <div
            key={index}
            
            className={index === current ? "slider__active-picture" : ""}
          >
           
            {index === current && (
              <img
                src={picture}
                alt="Appartement"
                className="slider__picture"
              />
              
            )}
          {length > 1 && <p className='slider__counter'>{current + 1} / {length}</p>}
          </div>
          
        );
      })}
 
      {length > 1 ? (
        <>
          <div className="slider__previous" onClick={prevSlide}>
            <img src={arrowLeft} alt="" className="slider__previous-icon" />
          </div>
          <div className="slider__next" onClick={nextSlide}>
            <img src={arrowRight} alt="" className="slider__next-icon" />
          </div>
        </>
      ) : null}
    </div>
  );
}