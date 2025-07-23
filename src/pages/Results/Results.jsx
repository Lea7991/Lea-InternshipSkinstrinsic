import React, { useState } from 'react';
import '../Results/Results.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Results = () => {
  const navigate = useNavigate();
  const [showRectangle, setShowRectangle] = useState(false);

  function handleDemographics() {
    navigate('/Demographics');
  }

  function handleBack() {
    navigate('/Analysis');
  }

  function handleProceed() {
    navigate('/Demographics');
  }

  function handleMouseEnter() {
    setShowRectangle(true);
  }

  function handleMouseLeave() {
    setShowRectangle(false);
  }

  return (
    <div className='page__results'>
      <div className="header__title">A.I. ANALYSIS</div>
      <p className='header__para--results'>
        A.I. HAS ESTIMATED THE FOLLOWING. <br />
        FIX ESTIMATED INFORMATION IF NEEDED.
      </p>

      <div className="intro__wrapper--results">
        <div className="rectangle__wrapper--results">
          <div className={`rectangle__one--results ${showRectangle ? 'visible' : ''}`}></div>

          <div
            className="inner__wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="inner__square--one" onClick={handleDemographics}>
              <div className="inner__text">DEMOGRAPHICS</div>
            </button>
            <button className="inner__square--two">
              <div className="inner__text">SKIN TYPE DETAILS</div>
            </button>
            <button className="inner__square--three">
              <div className="inner__text">COSMETIC CONCERNS</div>
            </button>
            <button className="inner__square--four">
              <div className="inner__text">WEATHER</div>
            </button>
          </div>
        </div>
      </div>

      <button className="button__wrapper--left---results" onClick={handleBack}>
        <div className="rectangle__small--results">
          <FontAwesomeIcon icon={faCaretLeft} className='icon--results' />
        </div>
        <div className="text__small--results">BACK</div>
      </button>

      <button className="button__wrapper--right---results" onClick={handleProceed}>
        <div className="rectangle__small--results">
          <FontAwesomeIcon icon={faCaretRight} className='icon--results' />
        </div>
        <div className="text__small--results">GET SUMMARY</div>
      </button>
    </div>
  );
};

export default Results;
