import React, { useEffect, useState } from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import {  useNavigate } from 'react-router-dom';


const Home = () => {
  const [showButton, setShowButton] = useState(window.innerWidth <= 960);
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate()

  function handleClick() {
    navigate(`/Intro`)
  }

  useEffect(() => {
  const handleResize = () => {
    setShowButton(window.innerWidth <= 960);
  };

  handleResize(); 

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);


  return (
    <div className="page__home">
      <div className="container__home">

    <div className="container__left">
      <div className={`rectangle__left ${hovered === 'right' ? 'fade-out' : ''}`}
      onMouseEnter={() => setHovered('left')}
      onMouseLeave={() => setHovered(null)}
      >
        <div className="left__content--home">
          <button className="rectangle__small--home">
            <FontAwesomeIcon icon={faCaretLeft} className='icon__home'/>
          </button>
          <button className="text__small--home">DISCOVER A.I.</button>
        </div>
      </div>
    </div>

    <div className="text__wrapper">
      <p className='text'>
        SKINTRINSIC DEVELOPED AN A.I. THAT CREATES A HIGHLY-PERSONALISED ROUTINE TAILORED TO WHAT YOUR SKIN NEEDS.
      </p>
      {showButton && (
        <button className="button__middle" onClick={handleClick}>
          <span className="text__small--middle"  >ENTER EXPERIENCE</span>
          <span className="button__middle--small"  >
            <FontAwesomeIcon icon={faCaretRight} className='icon__home'/>
          </span>
        </button>
      )}
    </div>

    <div className={`container__middle--wrapper ${hovered === 'left' ? 'shift-right' : ''} ${hovered === 'right' ? 'shift-left' : ''}`}>
      <div className="container__middle--title">
        <h1 className="title">Sophisticated Skincare</h1>
      </div>
    </div>

    <div className="container__right">
      <div className={`rectangle__right ${hovered === 'left' ? 'fade-out' : ''}`}
      onMouseEnter={() => setHovered('right')}
      onMouseLeave={() => setHovered(null)}
      >
        <div className="right__content--home" onClick={handleClick}>
          <button className="rectangle__small--home">
            <FontAwesomeIcon icon={faCaretRight} className='icon__home'/>
          </button>
          <button className="text__small--home">TAKE TEST</button>
        </div>
      </div>
    </div>

      </div>
    </div>
  )
}

export default Home;