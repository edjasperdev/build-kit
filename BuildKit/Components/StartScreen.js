import React from 'react'

const StartScreen = (props) => {

  return (
    <div className="start-screen">
      <div className="start-image">
      </div>
      <div className="start-button" onClick={props.startBuildKit}>
        <p>Start Kit</p>
      </div>
    </div>
  )
}

export default StartScreen