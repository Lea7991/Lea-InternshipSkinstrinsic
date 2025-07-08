import React from 'react'
import '../../pages/Demographics/Demographics.css'

const Race = () => {
  return (
    <div>
        <div className='page__demo'>
      <div className="container">
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
            <div className="left__title">Race</div>
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
                  <div className="result">South East Aisan</div>
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
    </div>
    </div>
  )
}

export default Race