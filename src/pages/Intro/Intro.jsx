import React, { useState } from 'react'
import '../Intro/Intro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Intro = () => {
const navigate = useNavigate();
const [inputValue, setInputValue] = useState('');
const [placeholder, setPlaceholder] = useState('Introduce Yourself');
const [showProceed, setShowProceed] = useState(false)

  function handleClick() {
    navigate(`/`)
  }

  function handleInput (e) {
    const value = e.target.value;
    setInputValue(value)
  }

  function handleKeyDown(e) {
  if (e.key === 'Enter' && inputValue.trim() !== '') {
    if (placeholder === 'Introduce Yourself') {
      setPlaceholder('your city name');
      setInputValue('');
      setShowProceed(true);
    } else {
      navigate('/Analysis');
    }
  }
}

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
            <button className="button__wrapper--right" onClick={() => navigate('/Analysis')} >
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