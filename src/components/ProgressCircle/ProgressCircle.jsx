import React from 'react';
import '../ProgressCircle/ProgressCircle.css'

const ProgressCircle = ({ percentage, radius = 45, strokeWidth = 6, circleColor = 'black', bgColor = '#eee' }) => {
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div style={{ width: (radius + strokeWidth) * 2, height: (radius + strokeWidth) * 2, position: 'relative' }}>
      <svg
        width={(radius + strokeWidth) * 2}
        height={(radius + strokeWidth) * 2}
        viewBox={`0 0 ${radius * 2 + strokeWidth * 2} ${radius * 2 + strokeWidth * 2}`}
        style={{ transform: 'rotate(-90deg)' }}
      >
        <circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
          stroke={bgColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
          stroke={circleColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
          strokeLinecap="round"
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: radius / 3,
          userSelect: 'none',
          fontWeight: '300',
        }}
      >
        {Math.round(percentage)}%
      </div>
    </div>
  );
};

export default ProgressCircle;
