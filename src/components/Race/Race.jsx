import React from 'react'
import '../../pages/Demographics/Demographics.css'


const Race = ({ raceData, predictedRace, onSelectRace, userRace }) => {
  if (!raceData || !predictedRace) return null; 

  const total = Object.values(raceData).reduce((sum, val) => sum + parseFloat(val), 0);
  const normalizedData = {};
  if (total > 0) {
    Object.entries(raceData).forEach(([race, val]) => {
      normalizedData[race] = (parseFloat(val) / total) * 100;
    });
  } else {
    Object.entries(raceData).forEach(([race, val]) => {
      normalizedData[race] = 0;
    });
  }
  
  const selectedRace = userRace || predictedRace;
  const topPercentage = parseFloat(raceData[selectedRace] || 0)
  const sortedRaces = Object.entries(raceData).sort(
    (a,b) => parseFloat(b[1]) - parseFloat(a[1])
  );

  const radius = 45;
  const circumference = (2 * Math.PI * radius);
  const progress = parseFloat(topPercentage);
  const strokeDashoffset = circumference - (progress / 100) * circumference;

 
  return (
    <div>
        
        <div className="container__wrapper--middle">
          <div className="result__text">{selectedRace.toUpperCase()}</div>
          <div className="circle__wrapper">
            
            <svg className="circle" viewBox="0 0 100 100">
              <circle className="bg" cx="50" cy="50" r="45" />
              <circle
                className="progress"
                cx="50"
                cy="50"
                r={radius}
                strokeDasharray={`${circumference} ${circumference}`}
                strokeDashoffset={strokeDashoffset}
                style={{ transition: 'stroke-dashoffset 0.5s ease' }}
              />
              
            </svg>
            <div className="percentage-text">{topPercentage}%</div>
          </div>
        </div>

        <div className="container__wrapper--right">
        <div className="header__results--wrapper">
          <div className="left__title">Race</div>
          <div className="right__title">A.I. CONFIDENCE</div>
        </div>
        <div className="main__results--wrapper">
          <ul className="results__list">
            {sortedRaces.map(([race, percent]) => (
              <li
                key={race}
                className={`result__wrapper ${
                  race === predictedRace ? 'highlight' : ''}`}
                onClick={() => onSelectRace(race)}
                >
                <div className="result">{race.toUpperCase()}</div>
                <div className="percentage">{percent}%</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Race;