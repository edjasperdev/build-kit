import React, {Component} from 'react'
import BundleView from './BundleView'
import BundleOptions from "./BundleOptions";

class App extends Component {
    constructor(){
      super()

      this.state = {
        selected: ['Dope Taupe', 'Mented #5', 'Nude La La']
      }
    }


    handleOptionClick(count){
        console.log('im clicked', count)
    }

    render() {
      let { selected } = this.state
        return (
            <div className="build-kit">
                <h1>Build Your Own Kit $45</h1>
                <article>Subtext description goes here wow this is way cool. I love Shopify! next step is to get this to
                    the correct data
                </article>
                <BundleView/>
                <div className="selected">
                  {selected.map((option, i) => {
                    return <p key={i}>{`${i+1}. ${option}`}</p>
                  })}
                </div>
                <div className="button"><h1>Start Kit</h1></div>
                <div className="product-list">
                  <div className="showContainer">
                    <div className="showList">Cool</div>
                  </div>

                  <BundleOptions/>
                </div>
            </div>)
    }
}

export default App