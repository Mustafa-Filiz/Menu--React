import React, { useState } from 'react';
import people from './data';
import { ArrowBackIosRounded, ArrowForwardIosRounded, FormatQuoteRounded } from '@mui/icons-material';


const Review = () => {
  const [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index]

  const checkNumber = (number) => {
    if (number >= people.length) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }

  const handlePrevButton = () => {
    setIndex(() => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }
  const handleNextButton = () => {
    setIndex(() => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }

  const handleRandomButton = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
      randomNumber = index - 1
    }
    setIndex(checkNumber(randomNumber))
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
