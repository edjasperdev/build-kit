import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../build-kit-style.scss';
// import App from './Components/App';
// import registerServiceWorker from './registerServiceWorker';
import StartScreen from './StartScreen'
import BuildAKit from './BuildAKit'
import ShopifyBuy from 'shopify-buy';

const client = ShopifyBuy.buildClient({
    accessToken: 'f101335f434a1deb1e28f0e9a7fb07fe',
    appId: 6,
    domain: 'mented.myshopify.com',
});

// const shopClient = client()


class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            startScreen: true
        }
    }

    componentWillMount(){
        let kitState = localStorage.getItem('kitState');
        if(kitState){
            this.setState({startScreen: false})
        }
    }

    handleStartClick () {
        this.setState({startScreen: false})
    }

    renderScreen () {
        if (this.state.startScreen) {
            return <StartScreen startBuildKit={() => this.handleStartClick()}/>
        } else {
            return <BuildAKit client={this.props.client}/>
        }
    }

    render () {
        return (
            <div className="build-kit">
              <h1>Build Your Own Kit $45</h1>
              <article>Subtext description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam bibendum nunc et nulla euismod vestibulum. Sed dictum congue auctor.
              </article>
                {this.renderScreen()}
            </div>
        )
    }
}


ReactDOM.render(<App client={client}/>, document.getElementById('build-kit'))

