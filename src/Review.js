import React, { useState } from 'react';
import people from './data';
import { ArrowBackIosRounded, ArrowForwardIosRounded, FormatQuoteRounded } from '@mui/icons-material';


const Review = () => {
  const [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index]

  const handlePrevButton = () => {
    setIndex(() => {
      let newIndex = index - 1
      if (index === 0) {
        newIndex = 3
      }
      return newIndex
    })
  }
  const handleNextButton = () => {
    setIndex(() => {
      let newIndex = index + 1
      if (newIndex === 4) {
        newIndex = 0
      }
      return newIndex
    })
  }

  const handleRandomButton = () => {
    setIndex(() => {
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }
      let newIndex = getRandomInt(0, 3)
      return newIndex
    })
  }

  return (
      <div className="review">
        <div className="img-container">
          <img src={image} alt="pp" className="person-img" />
          <FormatQuoteRounded fontSize="large" className="quote-icon"/>
        </div>
        <h3 className="author">{name}</h3>
        <h4 className="job">{job}</h4>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={handlePrevButton} ><ArrowBackIosRounded /></button>
          <button className="next-btn" onClick={handleNextButton} ><ArrowForwardIosRounded /></button>
        </div>
        <button className="random-btn" onClick={handleRandomButton}>Surprise Me</button>
      </div>
  );
};

export default Review;
