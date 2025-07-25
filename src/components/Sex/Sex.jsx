import React from 'react';
import '../Sex/Sex.css';
import ProgressCircle from '../ProgressCircle/ProgressCircle';
import useResponsiveRadius from '../../hooks/useResponsiveRadius';

const Sex = ({ genderData, predictedGender, userSex, onSelectSex }) => {
  const radius = useResponsiveRadius();

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

  const highestConfidenceSex = Object.entries(normalizedData).reduce((a, b) => 
    normalizedData[a[0]] > normalizedData[b[0]] ? a : b
  )[0];

  const selectedSex = userSex || highestConfidenceSex || predictedGender;
  const confidenceValue = normalizedData[selectedSex] || 0;

  return (
    <div>
      <div className="container__wrapper--middle">
        <div className="result__text">{selectedSex.toUpperCase()}</div>
        <div className="circle__wrapper">
          <ProgressCircle 
            percentage={confidenceValue} 
            radius={radius} 
            strokeWidth={2} 
            circleColor="black" 
            bgColor="#eee" 
            fontSize="20px"
          />
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
                key={label}
                className={`result__wrapper 
                  ${label === selectedSex ? 'selected' : ''} 
                  ${label === predictedGender && label !== selectedSex ? 'highlight' : ''}`}
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
