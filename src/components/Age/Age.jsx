import React from 'react';
import '../../pages/Demographics/Demographics.css';

const Age = ({ ageData, predictedAge, userAge, onSelectAge }) => {
  
  const groupAges = (data) => {
    const grouped = {
      '0-9': 0,
      '10-19': 0,
      '20-29': 0,
      '30-39': 0,
      '40-49': 0,
      '50-59': 0,
      '60-69': 0,
      '70+': 0,
    };

    Object.entries(data).forEach(([ageRange, value]) => {
      if (ageRange === '70+') {
        grouped['70+'] += parseFloat(value);
      } else {
        const startAge = parseInt(ageRange.split('-')[0], 10);
        const groupIndex = Math.floor(startAge / 10);
        const groupKey = groupIndex < 7 ? `${groupIndex * 10}-${groupIndex * 10 + 9}` : '70+';
        grouped[groupKey] += parseFloat(value);
      }
    });

    const total = Object.values(grouped).reduce((sum, val) => sum + val, 0);
    if (total > 0) {
      Object.keys(grouped).forEach((key) => {
        grouped[key] = (grouped[key] / total) * 100;
      });
    }

    return grouped;
  };

  const groupedData = groupAges(ageData);
  const parsedData = Object.entries(groupedData);

  const findGroupedAge = (age) => {
    if (!age) return null;
    if (age === '70+') return '70+';
    const ageNum = parseInt(age, 10);
    if (isNaN(ageNum)) return null;
    const groupIndex = Math.floor(ageNum / 10);
    return groupIndex < 7 ? `${groupIndex * 10}-${groupIndex * 10 + 9}` : '70+';
  };

  const selectedAgeGroup = findGroupedAge(userAge) || findGroupedAge(predictedAge) || '70+';
  const selectedConfidence = groupedData[selectedAgeGroup] || 0;

  const formatAgeLabel = (label) => (label === '70+' ? label : `${label} y.o.`);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  return (
    <div>
      <div className="container__wrapper--middle">
        <div className="result__text">{formatAgeLabel(selectedAgeGroup)}</div>
        <div className="circle__wrapper">
          <svg className="circle" viewBox="0 0 100 100">
            <circle className="bg" cx="50" cy="50" r={radius} />
            <circle
              className="progress"
              cx="50"
              cy="50"
              r={radius}
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - selectedConfidence / 100)}
            />
          </svg>
          <div x="50" y="50" className="percentage-text">
            {selectedConfidence.toFixed(0)}%
          </div>
        </div>
      </div>

      <div className="container__wrapper--right">
        <div className="header__results--wrapper">
          <div className="left__title">AGE</div>
          <div className="right__title">A.I. CONFIDENCE</div>
        </div>
        <div className="main__results--wrapper">
          <ul className="results__list">
            {parsedData.map(([ageGroup, confidence]) => (
              <li
                className="result__wrapper"
                key={ageGroup}
                onClick={() => onSelectAge(ageGroup)}
              >
                <div className="result">{formatAgeLabel(ageGroup)}</div>
                <div className="percentage">{confidence.toFixed(0)}%</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Age;
