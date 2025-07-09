import React from 'react'
import '../../pages/Demographics/Demographics.css'

const Age = () => {
  return (
    <div>
         
            <div className="container__wrapper--middle">
            <div className="result__text">20-29 y.o.</div>
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
                <div className="left__title">AGE</div>
                <div className="right__title">A.I. CONFIDENCE</div>
                </div>
                <div className="main__results--wrapper">
                <ul className='results__list'>
                    <li className="result__wrapper">
                    <div className="result">0-9</div>
                    <div className="percentage">0%</div>
                    </li>
                    <li className="result__wrapper">
                    <div className="result">10-19</div>
                    <div className="percentage">4%</div>
                    </li>
                    <li className="result__wrapper">
                    <div className="result">20-29</div>
                    <div className="percentage">96%</div>
                    </li>
                    <li className="result__wrapper">
                    <div className="result">30-39</div>
                    <div className="percentage">2%</div>
                    </li>
                    <li className="result__wrapper">
                    <div className="result">40-49</div>
                    <div className="percentage">0%</div>
                    </li>
                    <li className="result__wrapper">
                    <div className="result">50-59</div>
                    <div className="percentage">0%</div>
                    </li>
                    <li className="result__wrapper">
                    <div className="result">60-69</div>
                    <div className="percentage">0%</div>
                    </li>
                    <li className="result__wrapper">
                    <div className="result">70+</div>
                    <div className="percentage">0%</div>
                    </li>
                </ul>
                </div>
            </div>
       
    </div>
  )
}

export default Age;