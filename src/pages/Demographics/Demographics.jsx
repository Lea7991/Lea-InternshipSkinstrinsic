import React, { useState } from 'react'
import '../Demographics/Demographics.css'
import Race from '../../components/Race/Race'
import Age from '../../components/Age/Age'
import Sex from '../../components/Sex/Sex'


const Demographics = () => {
  const [component, setComponent] = useState('race')

  const renderComponenet = () => {
    if (component === 'race') return <Race />;
    if (component === 'age') return <Age />;
    if (component === 'sex') return <Sex />;
    return null 
  }

  return (
    <div className='page__demo'>
      <div className="container">
          <div className="header__wrapper">
          <div className="header__title--top">A.I. ANALYSIS</div>
          <h1 className='header__title--demo'>DEMOGRAPHICS</h1>
              <p className='header__para'>A.I. HAS ESTIMATED THE FOLLOWING. <br />FIX ESTIMATED INFORMATION IF NEEDED. 
              </p>
          </div>
          <div className="container__wrapper--left">
          <button className="container__one"
          onClick={() => setComponent('race')}
          >
              <div className="text__results">EAST ASIAN</div>
              <div className="text__bottom">RACE</div>
          </button>
          <button className="container__two"
          onClick={() => setComponent('age')}
          >
              <div className="text__results">20-29</div>
              <div className="text__bottom">AGE</div>
          </button>
          <button className="container__three"
          onClick={() => setComponent('sex')}
          >
              <div className="text__results">FEMALE</div>
              <div className="text__bottom">SEX</div>
          </button>
          </div>
            {renderComponenet()}
            <div className='middle__text--wrapper'>
              <div className="middle__text">If A.I. estimate is wrong, select the correct one</div>
            </div>
            <div className="button__wrapper">
                <button className="reset">RESET</button>
                <button className="confirm">CONFIRM</button>
              </div>
            </div>
      </div>
  )
}

export default Demographics