import React, { useState, useEffect } from 'react';
import '../Intro/Intro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Intro = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [placeholder, setPlaceholder] = useState('Introduce Yourself');
  const [showProceed, setShowProceed] = useState(false);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  function handleClick() {
    navigate(`/`);
  }

  function handleInput(e) {
    const value = e.target.value;
    setInputValue(value);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      if (placeholder === 'Introduce Yourself') {
        setName(inputValue.trim());
        setPlaceholder('Your city name');
        setInputValue('');
      } else if (placeholder === 'Your city name') {
        const enteredLocation = inputValue.trim();
        setLocation(enteredLocation);
        setInputValue('');

        // Start loading when submitting data to the API
        setLoading(true);

        if (name && enteredLocation) {
          // Call API to send data
          axios
            .post('https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne', {
              name,
              location: enteredLocation,
            })
            .then((response) => {
              console.log('Submission successful', response.data);

              // Simulate a loading state of 4 seconds
              setTimeout(() => {
                setLoading(false); // Stop loading after 4 seconds
                setShowProceed(true); // Show the proceed button after loading is done
              }, 4000);
            })
            .catch((error) => {
              console.error('Error submitting data:', error);
              setLoading(false); // Stop loading in case of an error
            });
        }
      }
    }
  }

  const handleProceed = () => {
    // Ensure both name and location are present before navigating
    if (name.trim() && location.trim()) {
      navigate('/Analysis');
    } else {
      // If not, display a message or handle accordingly
      console.error('Name or location missing!');
    }
  };

  return (
    <div className="page">
      <div className="header__title">TO START ANALYSIS</div>
      <div className="intro__wrapper--intro">
        <div className="rectangle__rotate--wrapper---intro">
          <div className="rectangle__one--intro">
            <div className="rectangle__two--intro">
              <div className="rectangle__three--intro"></div>
            </div>
          </div>
        </div>
        <div className="input__wrapper">
          <div className="input__title">CLICK TO TYPE</div>
          <input
            type="text"
            value={inputValue || location}  
            placeholder={placeholder}
            className="intro__input"
            onChange={handleInput}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      <button className="button__wrapper--left--intro" onClick={handleClick}>
        <div className="rectangle__small--intro">
          <FontAwesomeIcon icon={faCaretLeft} className="icon--intro" />
        </div>
        <div className="text__small--intro">BACK</div>
      </button>

      {/* Skeleton Loading State */}
      {loading && (
        <div className="skeleton__overlay">
          <div className="rectangle__wrapper---skeleton">
            <div className="rectangle__rotate--wrapper---skeleton">
              <div className="rectangle__one--skeleton">
                <div className="rectangle__two--skeleton">
                  <div className="rectangle__three--skeleton"></div>
                </div>
              </div>
            </div>
            <div className="text__wrapper--skeleton">
              <div className="text--skeleton">Processing Submission...</div>
            </div>
          </div>
        </div>
      )}

      {/* Proceed Button */}
      {showProceed && !loading && (
        <button className="button__wrapper--right--intro" onClick={handleProceed}>
          <div className="rectangle__small--intro">
            <FontAwesomeIcon icon={faCaretRight} className="icon--intro" />
          </div>
          <div className="text__small--intro">PROCEED</div>
        </button>
      )}
    </div>
  );
};

export default Intro;
