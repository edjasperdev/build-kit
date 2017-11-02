import React from 'react'
import BundleView from "./BundleView";
let group = 'https://cdn.shopify.com/s/files/1/1583/0411/files/Grp-1_ad7ce715-c46f-46c5-93b0-e8c4f98a88c9.jpg?8054129494557179759'


const StartScreen = (props) => {


    return (
        <div className="start-screen">
            <div className="start-image" style={{backgroundImage: `url(${group})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            </div>
            <div className="start-button" onClick={props.startBuildKit}>
                <p>Start Kit</p>
            </div>
        </div>
    )
}

export default StartScreen