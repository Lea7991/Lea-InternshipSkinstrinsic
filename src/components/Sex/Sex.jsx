import React from 'react'
import '../Sex/Sex.css'


const Sex = () => {
  return (
    <div>
        <div className='page__demo'>
            <div className="container">
        <div className="container__wrapper--middle">
          <div className="result__text">20-29 y.o.</div>
          <div className="circle__wrapper">
            <svg className="circle" viewBox="0 0 100 100">
              <circle className="bg" cx="50" cy="50" r="45" />
              <circle className="progress" cx="50" cy="50" r="45" />
            </svg>
            <text x="50" y="50" className="percentage-text">100%</text>
          </div>
        </div>

        <div className="container__wrapper--right">
          <div className="header__results--wrapper">
            <div className="left__title">SEX</div>
            <div className="right__title">A.I. CONFIDENCE</div>
            </div>
            <div className="main__results--wrapper">
              <ul className='results__list'>
                <li className="result__wrapper">
                  <div className="result">MALE</div>
                  <div className="percentage">0%</div>
                </li>
                <li className="result__wrapper">
                  <div className="result">FEMALE</div>
                  <div className="percentage">100%</div>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Sex