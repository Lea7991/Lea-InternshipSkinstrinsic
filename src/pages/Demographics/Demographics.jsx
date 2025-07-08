import React from 'react'
import '../Demographics/Demographics.css'

const Demographics = () => {

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
          <button className="container__one">
            <div className="text__results">EAST ASIAN</div>
            <div className="text__bottom">RACE</div>
          </button>
          <button className="container__two">
            <div className="text__results">20-29</div>
            <div className="text__bottom">AGE</div>
          </button>
          <button className="container__three">
            <div className="text__results">FEMALE</div>
            <div className="text__bottom">SEX</div>
          </button>
        </div>

        <div className="container__wrapper--middle">
          <div className="result__text">East Asian</div>
          <div className="circle__wrapper">
            <svg className="circle" viewBox="0 0 100 100">
              <circle className="bg" cx="50" cy="50" r="45" />
              <circle className="progress" cx="50" cy="50" r="45" />
            </svg>
            <text x="50" y="50" className="percentage-text">96%</text>
          </div>
        </div>

        <div className="container__wrapper--right">
          <div className="header__results--wrapper">
            <div className="left__title">RACE</div>
            <div className="right__title">A.I. CONFIDENCE</div>
            </div>
            <div className="main__results--wrapper">
              <ul className='results__list'>
                <li className="result__wrapper">
                  <div className="result">East Asian</div>
                  <div className="percentage">96%</div>
                </li>
                <li className="result__wrapper">
                  <div className="result">White</div>
                  <div className="percentage">6%</div>
                </li>
                <li className="result__wrapper">
                  <div className="result">Black</div>
                  <div className="percentage">3%</div>
                </li>
                <li className="result__wrapper">
                  <div className="result">South Asian</div>
                  <div className="percentage">2%</div>
                </li>
                <li className="result__wrapper">
                  <div className="result">Latino Hispanic</div>
                  <div className="percentage">0%</div>
                </li>
                <li className="result__wrapper">
                  <div className="result">South East Asian</div>
                  <div className="percentage">0%</div>
                </li>
                <li className="result__wrapper">
                  <div className="result">Middle Eastern</div>
                  <div className="percentage">0%</div>
                </li>
              </ul>
            </div>
        </div>
      </div>
      <div className='middle__text--wrapper'>
        <div className="middle__text">If A.I. estimate is wrong, select the correct one</div>
      </div>
      <div className="button__wrapper">
          <button className="reset">RESET</button>
          <button className="confirm">CONFIRM</button>
        </div>
    </div>
  )
}

export default Demographics