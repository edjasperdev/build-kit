import React from 'react'
import BundleView from "./BundleView";

const StartScreen = (props) => {


    return (
        <div className="start-screen">
            <div className="start-image"></div>
            <div className="start-button" onClick={props.startBuildKit}> Start Kit</div>
        </div>
    )
}

export default StartScreen