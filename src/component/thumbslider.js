import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const thumbnails = [
  { src: '/assets/maths.jpg', name: 'Mathematics Basics To Become A Professional' },
  { src: '/assets/english.jpg', name: 'English Grammar Basics To Become A Professional' },
  { src: '/assets/science.jpg', name: 'Science Fundamentals Basics To Become A Professional' },
  { src: '/assets/history.jpg', name: 'History 101 Basics To Become A Professional' },
  { src: '/assets/geography.jpg', name: 'Geography Insights Basics To Become A Professional' },
  { src: '/assets/programming.jpg', name: 'Programming Intro Basics To Become A Professional' }
];

const MyCourse = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const itemsPerSet = 3;
  const totalSets = Math.ceil(thumbnails.length / itemsPerSet);

  const changeSet = (newSet) => {
    if (newSet !== currentSet) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSet(newSet);
        setIsAnimating(false);
      }, 300); // should match the CSS transition time
    }
  };

  const handleNext = () => {
    if (currentSet < totalSets - 1) changeSet(currentSet + 1);
  };

  const handlePrev = () => {
    if (currentSet > 0) changeSet(currentSet - 1);
  };

  const start = currentSet * itemsPerSet;
  const currentThumbnails = thumbnails.slice(start, start + itemsPerSet);

  return (
    <div className="mycourse">
      <div className="slider">
        <FaChevronLeft className="arrow" onClick={handlePrev} />
        <div className={`thumbs ${isAnimating ? 'fade-out' : ''}`}>
          {currentThumbnails.map((thumb, index) => (
            <div key={index} className="thumb-wrapper">
              <img src={thumb.src} className="thumb" alt={`thumb-${index}`} />
              <div className="overlay">
                <div className="course-name">{thumb.name}</div>
              </div>
            </div>
          ))}
        </div>
        <FaChevronRight className="arrow" onClick={handleNext} />
      </div>
      <div className="dots">
        {[...Array(totalSets)].map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSet === index ? 'active' : ''}`}
            onClick={() => changeSet(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MyCourse;
