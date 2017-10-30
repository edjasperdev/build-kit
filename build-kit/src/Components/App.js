import React, {Component} from 'react'
import StartScreen from "./StartScreen";
import BuildAKit from "./BuildAKit";
import BundleView from "./BundleView";

class App extends Component {
    constructor(props){
      super(props)
        this.state = {
            startScreen: false
        }
    }


    handleStartClick(){
        this.setState({startScreen: false})
        // console.log(this.state.startScreen)
    }

    renderScreen(){
        if(this.state.startScreen){
            return <StartScreen startBuildKit={() => this.handleStartClick()}/>
        } else {
            return <BuildAKit client={this.props.client}/>
        }
    }

    render() {
        return (
            <div className="build-kit">
                <h1>Build Your Own Kit $45</h1>
                <article>Subtext description goes here wow this is way cool. I love Shopify! next step is to get this to
                    the correct data
                </article>
                {this.renderScreen()}
            </div>
        )
    }
}

export default App