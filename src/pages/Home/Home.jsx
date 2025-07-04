import React, { useState } from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import {  useNavigate } from 'react-router-dom';


const Home = () => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate()

  function handleClick() {
    navigate(`/Intro`)
  }


  return (
    <div className="page">
      <div className="container">

    <div className="container__left">
      <div className={`rectangle__left ${hovered === 'right' ? 'fade-out' : ''}`}
      onMouseEnter={() => setHovered('left')}
      onMouseLeave={() => setHovered(null)}
      >
        <div className="left__content">
          <button className="rectangle__small">
            <FontAwesomeIcon icon={faCaretLeft} className='icon'/>
          </button>
          <button className="text__small">DISCOVER A.I.</button>
        </div>
      </div>
    </div>

    <div className="text__wrapper">
      <p className='text'>
        SKINTRINSIC DEVELOPED AN A.I. THAT CREATES A HIGHLY-PERSONALISED ROUTINE TAILORED TO WHAT YOUR SKIN NEEDS.
      </p>
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
        <div className="right__content" onClick={handleClick}>
          <button className="rectangle__small">
            <FontAwesomeIcon icon={faCaretRight} className='icon'/>
          </button>
          <button className="text__small">TAKE TEST</button>
        </div>
      </div>
    </div>

      </div>
    </div>
  )
}

export default Home;