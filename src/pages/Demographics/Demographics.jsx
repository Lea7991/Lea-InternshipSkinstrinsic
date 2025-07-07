import React from 'react'

const Demographics = () => {
  return (
    <div>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__title">A.I. ANALYSIS</div>
          <h1 className='header__title'>DEMOGRAPHICS</h1>
            <p className='header__para'>A.I. HAS ESTIMATED THE FOLLOWING. <br />FIX ESTIMATED INFORMATION IF NEEDED. 
            </p>
        </div>

        <div className="container__wrapper--left">
          <div className="container__one">
            <div className="text__results">EAST ASIAN</div>
            <div className="text__race">RACE</div>
          </div>
          <div className="container__two">
            <div className="text__results">20-29</div>
            <div className="text__age">AGE</div>
          </div>
          <div className="container__three">
            <div className="text__results">FEMALE</div>
            <div className="text__sex">SEX</div>
          </div>
        </div>

        <div className="container__wrapper--middle">
          <div className="result__text">East Asian</div>
          <div className="circle__wrapper">
            <div className="circle">
              <div className="percentage">96%</div>
            </div>
          </div>
        </div>

        <div className="container__wrapper--right">
          <div className="header__results--wrapper">
            <div className="left__title">RACE</div>
            <div className="right__title">A.I. CONFIDENCE</div>
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
        <div className="button__wrapper">
          <button className="reset">RESET</button>
          <button className="confirm">CONFIRM</button>
        </div>
      </div>
    </div>
  )
}

export default Demographics