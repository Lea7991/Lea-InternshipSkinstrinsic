import React, { useState, useEffect } from 'react'
import '../Intro/Intro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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


  function handleClick() {
    navigate(`/`)
  }

  function handleInput(e) {
  const value = e.target.value;
  setInputValue(value);

  if (placeholder === 'Your city name' && value.trim().length > 0) {
    setShowProceed(true);
  } else if (placeholder === 'Your city name' && value.trim().length === 0) {
    setShowProceed(false);
  }
}

  function handleKeyDown(e) {
  if (e.key === 'Enter' && inputValue.trim() !== '') {
    if (placeholder === 'Introduce Yourself') {
      setName(inputValue.trim())
      setPlaceholder('Your city name');
      setInputValue('');
      setShowProceed(true);
    } else {
      const enteredLocation = inputValue.trim();
      setLocation(enteredLocation);
      setInputValue('');

      if(name && enteredLocation) {
        navigate('/Analysis')
      }
    }
  }
}

useEffect(() => {
  if ( name && location ) {
    axios.post(`https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne`, {
      name,
      location
    })
    .then(response => {
      console.log('Submission successful', response.data);
    })
    .catch(error => {
      console.error('Error submitting data:', error)
    });
  }
}, [name, location])

  return (
    <div className='page'>
        <div className="header__title">TO START ANALYSIS</div>
        <div className="intro__wrapper">
            <div className="rectangle__rotate--wrapper">
                <div className="rectangle__one">
                <div className="rectangle__two">
                    <div className="rectangle__three">
                    </div>
                </div>
                </div>
            </div>
        <div className="input__wrapper">
            <div className="input__title">CLICK TO TYPE</div>
            <input 
            type="text" 
            value={inputValue}
            placeholder={placeholder}
            className="intro__input" 
            onChange={handleInput}
            onKeyDown={handleKeyDown}
             />
        </div>
        </div> 
       <button className="button__wrapper--left" onClick={handleClick}>
            <div className="rectangle__small">
                <FontAwesomeIcon icon={faCaretLeft} className='icon'/>
            </div>
            <div className="text__small">BACK</div>
        </button>
        {showProceed && (
        <button
          className="button__wrapper--right"
          onClick={() => {
            const trimmedLocation = inputValue.trim();

            if (!name || !trimmedLocation) {
              alert("Failed: name and location required");
              return; // stop navigation
            }

            setLocation(trimmedLocation);
            navigate('/Analysis');
          }}
            >
          <div className="rectangle__small">
              <FontAwesomeIcon icon={faCaretRight} className='icon'/>
          </div>
          <div className="text__small">PROCEED</div>
        </button>
        )}
    </div>
  )
}

export default Intro;