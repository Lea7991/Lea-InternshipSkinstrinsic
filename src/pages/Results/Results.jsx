import React from 'react';
import '../Results/Results.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Results = () => {
  const navigate = useNavigate()

  function handleDemographics() {
    navigate('/Demographics')
  }

  function handleBack() {
    navigate('/Analysis')
  }

  function handleProceed() {
    navigate('/Demographics')
  }

  return (
    <>
        <div className='page'>
            <div className="header__title">A.I. ANALYSIS</div>
            <p className='header__para'>A.I. HAS ESTIMATED THE FOLLOWING. <br />FIX ESTIMATED INFORMATION IF NEEDED. 
            </p>
            <div className="intro__wrapper">
                <div className="rectangle__wrapper">
                    <div className="rectangle__one">
                    <div className="rectangle__two">
                        <div className="rectangle__three">
                        </div>
                        
                    </div>
                    </div>
                    <div className="inner__wrapper">
                            <button className="inner__square--one" onClick={handleDemographics}>
                              <div className="inner__text">DEMOGRAPHICS</div>
                                </button>
                            <button className="inner__square--two" >
                              <div className="inner__text">SKIN TYPE DETAILS</div>
                                </button>
                            <button className="inner__square--three" >
                              <div className="inner__text">COSMETIC CONCERNS</div>
                              </button>
                            <button className="inner__square--four" >
                              <div className="inner__text">WEATHER</div>
                              </button>
                          </div>
                </div>
            </div> 
          <button className="button__wrapper--left" onClick={handleBack}>
                <div className="rectangle__small">
                    <FontAwesomeIcon icon={faCaretLeft} className='icon'/>
                </div>
                <div className="text__small">BACK</div>
            </button>
            
                <button className="button__wrapper--right" onClick={handleProceed} >
                <div className="rectangle__small">
                    <FontAwesomeIcon icon={faCaretRight} className='icon'/>
                </div>
                <div className="text__small">PROCEED</div>
            </button>
            
        </div>
        </>
  )
}

export default Results