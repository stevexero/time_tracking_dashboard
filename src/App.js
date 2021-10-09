import React from 'react';
import Card from './components/Card';
import data from './data';

import IconWork from './images/icon-work.svg';
import IconPlay from './images/icon-play.svg';
import IconStudy from './images/icon-study.svg';
import IconExercise from './images/icon-exercise.svg';
import IconSocial from './images/icon-social.svg';
import IconSelfCare from './images/icon-self-care.svg';

import './App.css';

function App() {
  return (
    <div id='app'>
      <div className='container'>
        <div className='item'>
          <Card
            cardColor='var(--blue)'
            cardHeight='70%'
            cardTop='0px'
            cardBgColor='var(--dark-blue)'
            cardBgHeight='518px'
          />
        </div>
        {data.map((i) => (
          <div className='item' key={i.id}>
            {/* <div>{i.title}</div>
            <div>{i.timeframes.weekly.current}hrs</div>
            <div>{i.timeframes.weekly.previous}hrs</div> */}
            <Card
              cardColor='var(--dark-blue)'
              cardHeight='199px'
              cardTop='45px'
              cardBgColor={i.bgColor}
              cardBgHeight='100px'
            />
            <img
              src={
                i.id === 1
                  ? IconWork
                  : i.id === 2
                  ? IconPlay
                  : i.id === 3
                  ? IconStudy
                  : i.id === 4
                  ? IconExercise
                  : i.id === 5
                  ? IconSocial
                  : i.id === 6 && IconSelfCare
              }
              alt='icon'
              className='icon'
            />
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
