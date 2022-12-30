import React, { useState, useRef, useEffect } from 'react';
import Snowfall from 'react-snowfall';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faStar } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
library.add(fas, faStar);

const Home = () => {

  // We need ref in this, because we are dealing
  // with JS setInterval to keep track of it and
  // stop it when needed
  const Ref = useRef(null);
  const [user, setNames] = useState('');
  const [buttons, setSelection] = useState([]);

  // The state for our timer
  const [timer, setTimer] = useState('Happy New Year');

  var luckyGift = -1;
  const getStatus = () => {

    fetch('/api/deadline')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status == "lucky") {
          //setTimer(data.deadline);
          if (luckyGift > 0) {
            clearInterval(Ref.current);
          }
          console.log(data.luckyPeople);
          console.log(Ref.user);
          luckyGift = data.luckyPeople.indexOf(Ref.user) + 1;
          setTimer("Gift no: " + luckyGift);
        }
        else {
          setTimer(data.deadline);
        }
      })
  }
  const handleName = (e) => {
    let selectedName = e.currentTarget.getAttribute('button-key')
    setNames(selectedName);
    Ref.user = selectedName;
    console.log('selectedName: ', selectedName);
  }

  const getNames = () => {
    if (buttons.length === 0) {
      fetch('/api/deadline', { method: 'put' })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          showNames(data)
        });
    }
    const showNames = (data) => {
      let buts = [];
      data.forEach(element => {
        buts.push(
          <Button onClick={handleName} button-key={element} key={element}>{element}</Button>)
      });
      setSelection(buts);
    }
  }



  useEffect(() => {
    if (user === '') {
      getNames();
    }
    if (Ref.current === null) {
      const id = setInterval(() => {
        getStatus();
      }, 1000)
      Ref.current = id;
    }
  });

  const Names = () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"

      >
        {buttons}
      </ButtonGroup>
    </div>
  )

  const BBody = () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <h1 className='baby'>{timer}</h1>
      <div className="note">{user} <FontAwesomeIcon icon="fa-gift" /></div>
      <div className="xmas-tree">
        <div className='star'><FontAwesomeIcon icon="fas fa-star fa-spin" /></div>
        <div className="t1"></div>
        <div className="t2"></div>
        <div className="t3"></div>
        <div className="stem"></div>
        <div className="snow-ground"></div>
      </div></div>)

  return (
    <div className="App"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }} >
      <Snowfall color="#00bcd4" />
      {(user === '') ? <Names /> : <BBody />}
    </div>
  )

}

export default Home;
