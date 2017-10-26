import React from 'react'
import BundleView from "./BundleView";
import Group from '../assets/Grp-1.jpg'

const StartScreen = (props) => {


    return (
        <div className="start-screen">
            {/*<div className="start-image" style={{backgroundImage: `url(${Group})`, backgroundSize: 'cover'}}>*/}
            {/*</div>*/}
            <div className="start-button" onClick={props.startBuildKit}> Start Kit</div>
        </div>
    )
}

export default StartScreen