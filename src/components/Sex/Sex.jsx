import React from 'react';
import '../Sex/Sex.css';

const Sex = ({ genderData, predictedGender, userSex, onSelectSex }) => {
  if (!genderData || !predictedGender) return null;

  const total = Object.values(genderData).reduce((sum, val) => sum + parseFloat(val), 0);
  const normalizedData = {};
  if (total > 0) {
    Object.entries(genderData).forEach(([label, val]) => {
      normalizedData[label] = (parseFloat(val) / total) * 100;
    });
  } else {
    Object.entries(genderData).forEach(([label]) => {
      normalizedData[label] = 0;
    });
  }

  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  const selectedSex = userSex || predictedGender;
  const confidenceValue = parseFloat(genderData[selectedSex]);
  const strokeOffset = circumference * (1 - confidenceValue / 100);

  return (
    <div>
      <div className="container__wrapper--middle">
        <div className="result__text">{selectedSex.toUpperCase()}</div>
        <div className="circle__wrapper">
          <svg className="circle" viewBox="0 0 100 100">
            <circle className="bg" cx="50" cy="50" r={radius} />
            <circle
              className="progress"
              cx="50"
              cy="50"
              r={radius}
              strokeDasharray={circumference}
              strokeDashoffset={strokeOffset}
            />
          </svg>
          <div x="50" y="50" className="percentage-text">
            {confidenceValue.toFixed(0)}%
          </div>
        </div>
      </div>

      <div className="container__wrapper--right">
        <div className="header__results--wrapper">
          <div className="left__title">SEX</div>
          <div className="right__title">A.I. CONFIDENCE</div>
        </div>
        <div className="main__results--wrapper">
          <ul className="results__list">
            {Object.entries(genderData).map(([label, value]) => (
              <li 
              className={`result__wrapper ${
                  label === selectedSex ? 'highlight' : ''
                }`}
              key={label}
              onClick={() => onSelectSex(label)}
              >
                <div className="result">{label.toUpperCase()}</div>
                <div className="percentage">{parseFloat(value).toFixed(0)}%</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sex;
