import React, {Component} from 'react'
import BundleView from './BundleView'
import Slider from 'react-slick'
import BundleOptions from "./BundleOptions";

class App extends Component {

    handleOptionClick(count){
        console.log('im clicked', count)
    }

    render() {
        return (
            <div className="build-kit">
                <h1>Build Your Own Kit $45</h1>
                <article>Subtext description goes here wow this is way cool. I love Shopify! next step is to get this to
                    the correct data
                </article>
                <BundleView/>
                <div className="selected">
                    <p>1. Dope Taupe</p>
                    <p>2. Mented #5</p>
                    <p>3. Nude La La</p>
                </div>
                <div className="button"><h1>Start Kit</h1></div>
                <div className="product-list">
                   <BundleOptions/>
                </div>
            </div>)
    }
}

export default App