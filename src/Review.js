import React, { useState } from 'react';
import people from './data';
import { ArrowBackIosRounded, ArrowForwardIosRounded, FormatQuoteRounded } from '@mui/icons-material';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index]

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
          <button className="prev-btn" onClick={() => setIndex(index - 1)} ><ArrowBackIosRounded /></button>
          <button className="next-btn" onClick={() => setIndex(index + 1)} ><ArrowForwardIosRounded /></button>
        </div>
        <button className="random-btn">Surprise Me</button>
      </div>
  );
};

export default Review;
