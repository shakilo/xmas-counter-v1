import React, { useState, useRef, useEffect } from 'react';
import Snowfall from 'react-snowfall';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faStar } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fas, faStar);
const Home = () => {

  // We need ref in this, because we are dealing
  // with JS setInterval to keep track of it and
  // stop it when needed
  const Ref = useRef(null);


  // The state for our timer
  const [timer, setTimer] = useState('Happy New Year');

  // const getTimeRemaining = (e) => {
  //   const total = Date.parse(e) - Date.parse(new Date());
  //   const days = Math.floor((total / 1000 / 60 / 60) / 24)
  //   const seconds = Math.floor((total / 1000) % 60);
  //   const minutes = Math.floor((total / 1000 / 60) % 60);
  //   const hours = Math.floor((total / 1000 / 60 / 60) % 24);
  //   return {
  //     total, days, hours, minutes, seconds
  //   };
  // }

  const getStatus = () => {

    fetch('/api/deadline')
      .then((res) => res.json())
      .then((data) => {
        setTimer(data.deadline);
      })

  }


  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    const id = setInterval(() => {
      getStatus();
    }, 1000)
    Ref.current = id;
  }, []);


  return (
    <div className="App"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }} >
      <h1 className='baby'>{timer}</h1>
      <Snowfall color='#00bcd4' />
      <div className="note">Shakilo <i className="faCoffee"/></div>
      <div className="xmas-tree">
        {/* <div className="star"><i className="fas fa-star"></i></div> */}
        <div className='star'><FontAwesomeIcon icon="fas fa-star"/></div>
        <div className="t1"></div>
        <div className="t2"></div>
        <div className="t3"></div>
        <div className="stem"></div>
        <div className="snow-ground"></div>
      </div>
    </div>
  )

}

export default Home;
