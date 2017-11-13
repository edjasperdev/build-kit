import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../build-kit-style.scss'
import { products } from './products'
import StartScreen from './StartScreen'
import BuildAKit from './BuildAKit'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startScreen: true,
      loading: true,
    }
  }

  componentWillMount () {
    let selected = JSON.parse(sessionStorage.getItem('selected'))
    if (selected) {
      this.setState({
        startScreen: false,
        loading: false,
      })
    }
  }

  handleStartClick () {
    // document.getElementById('screen').classList.add('start')
    // let element = document.getElementById('screen')
    // document.getElementById('screen').addEventListener('transitionend', (e) => {
    //   element.classList.remove('start')
    // })
    setTimeout(() => {
      this.setState({startScreen: false})
    }, 1000)

  }

  renderScreen () {
    if (this.state.startScreen) {
      return <StartScreen
        startBuildKit={() => this.handleStartClick()}/>
    } else {
      return <BuildAKit
        products={products}/>
    }
  }

  render () {
    return (
      <div className="build-kit">
        <h1>Build Your Own Lipstick Trio $45</h1>
        <article>Customize your perfect set of three lipsticks from our nine shade collection.</article>
        {this.renderScreen()}
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('build-kit'))

