import React from 'react'


const reset = () => {

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button
  const onClickReset = () => {
    fetch('/api/deadline', { method: "POST" })
    .then((res) => {res.text() })
    .then((data) => {
      alert(data);
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
