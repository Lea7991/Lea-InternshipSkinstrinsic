import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Race from '../../components/Race/Race';
import Age from '../../components/Age/Age';
import Sex from '../../components/Sex/Sex';
import '../Demographics/Demographics.css'

const Demographics = () => {
  const [component, setComponent] = useState('race');
  const [data, setData] = useState(null);
  const [userRace, setUserRace] = useState(null);
  const [userAge, setUserAge] = useState(null) 
  const [userSex, setUserSex] = useState(null);

  useEffect(() => {
    const fetchDemographics = async () => {
      try {
        const response = await axios.post(
          'https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo',
          { image: 'your-base64-image' }, 
          { headers: { 'Content-Type': 'application/json' } }
        );

        const data = parseDemographics(response.data.data);
        setData(data);
      } catch (error) {
        console.error('Error fetching demographics:', error);
      }
    };

    fetchDemographics();
  }, []);

  const parseDemographics = (raw) => {
    const race = Object.entries(raw.race).reduce((acc, [key, value]) => {
      acc[key] = (value * 100).toFixed(0);
      return acc;
    }, {});

    const gender = Object.entries(raw.gender).reduce((acc, [key, value]) => {
      acc[key] = (value * 100).toFixed(2);
      return acc;
    }, {});

    const age = Object.entries(raw.age).reduce((acc, [key, value]) => {
      acc[key] = (value * 100).toFixed(2);
      return acc;
    }, {});

    const topRace = Object.entries(race).reduce((a, b) =>
      parseFloat(a[1]) > parseFloat(b[1]) ? a : b
    )[0];

    const topGender = Object.entries(gender).reduce((a, b) =>
      parseFloat(a[1]) > parseFloat(b[1]) ? a : b
    )[0];

    const topAge = Object.entries(age).reduce((a, b) =>
      parseFloat(a[1]) > parseFloat(b[1]) ? a : b
    )[0];

    return {
      race,
      gender,
      age,
      predicted: {
        race: topRace,
        gender: topGender,
        age: topAge
      }
    };
  };

  const renderComponent = () => {
    if (!data) return <div className="skeleton__overlay">
      <div className="rectangle__wrapper---skeleton">
          <div className="rectangle__rotate--wrapper---skeleton">
            <div className="rectangle__one--skeleton">
            <div className="rectangle__two--skeleton">
                <div className="rectangle__three--skeleton">
                </div>
            </div>
            </div>
          </div>
          <div className="text__wrapper--skeleton">
            <div className="text--skeleton">LOADING DEMOGRAPHICS...</div>
              </div>
            </div>
       
       </div>;

    if (component === 'race')
      return (
        <Race 
        raceData={data.race} 
        predictedRace={data.predicted.race}
        userRace={userRace}
        onSelectRace={setUserRace}
         />
      );

    if (component === 'age')
      return (
        <Age 
        ageData={data.age} 
        predictedAge={data.predicted.age}
        userAge={userAge}
        onSelectAge={setUserAge}
         />
      );

    if (component === 'sex')
      return (
        <Sex
         genderData={data.gender} 
         predictedGender={data.predicted.gender}
         userSex={userSex}
         onSelectSex={setUserSex}
          />
      );

    return null;
  };

  return (
    <div className='page__demo'>
      <div className="container__demo">
        <div className="header__wrapper">
          <div className="header__title--top">A.I. ANALYSIS</div>
          <h1 className='header__title--demo'>DEMOGRAPHICS</h1>
          <p className='header__para'>
            A.I. HAS ESTIMATED THE FOLLOWING. <br />
            FIX ESTIMATED INFORMATION IF NEEDED.
          </p>
        </div>

        <div className="container__wrapper--left">
          <button
            className={`container__one ${component === 'race' ? 'selected' : ''}`}
            onClick={() => setComponent('race')}
          >
            <div className="text__results">
              {data ? (userRace || data.predicted.race).toUpperCase() : '...'}
            </div>
            <div className="text__bottom">RACE</div>
          </button>

          <button
            className={`container__two ${component === 'age' ? 'selected' : ''}`}
            onClick={() => setComponent('age')}
          >
            <div className="text__results">
              {data ? (userAge || data.predicted.age) : '...'}
            </div>
            <div className="text__bottom">AGE</div>
          </button>

          <button
            className={`container__three ${component === 'sex' ? 'selected' : ''}`}
            onClick={() => setComponent('sex')}
          >
            <div className="text__results">
              {data ? (userSex || data.predicted.gender).toUpperCase() : '...'}
            </div>
            <div className="text__bottom">SEX</div>
          </button>
        </div>

        {renderComponent()}

        <div className='middle__text--wrapper'>
          <div className="middle__text">
            If A.I. estimate is wrong, select the correct one
          </div>
        </div>

        <div className="button__wrapper--demo">
          <button className="reset">RESET</button>
          <button className="confirm">CONFIRM</button>
        </div>
      </div>
    </div>
  );
};

export default Demographics;
