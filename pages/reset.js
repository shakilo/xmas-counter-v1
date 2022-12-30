import React from 'react'


const reset = () => {

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button
  const onClickReset = () => {
    fetch('/api/deadline', {
      method: "post", 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.status);
      })
  }
  const onClickBack = () => {
    navigator.ro
  }

  return (
    <div className="App">
      <h2>Admin</h2>
      <a href="/">Home</a>
      <button onClick={onClickReset}>Reset</button>
    </div>

  )
}

export default reset;
