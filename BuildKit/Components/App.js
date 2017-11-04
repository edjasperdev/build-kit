import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../build-kit-style.scss'
import {products} from './products'
import StartScreen from './StartScreen'
import BuildAKit from './BuildAKit'


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startScreen: true,
      products: [],
      loading: true
    }
    this.updateProducts = this.updateProducts.bind(this)
  }

  componentWillMount () {
    let selected = JSON.parse(sessionStorage.getItem('selected'))
    if (selected) {
      products.map((product) => {
        selected.map((choice, i) => {
          if(product.title === choice.title) {
            product.selected.push(i+1)
          }
        })
        return product
      })

      this.setState({
        startScreen: false,
        loading: false,
        products: products
      })
    } else {
      this.setState({products: products, loading: false})
    }
  }
  updateProducts(products){

    this.setState({
      products
    })
  }

  handleStartClick () {
      this.setState({startScreen: false})
  }

  renderScreen () {
    if (this.state.startScreen) {
      return <StartScreen startBuildKit={() => this.handleStartClick()}/>
    } else {
      return <BuildAKit
        selected={this.state.selected}
        updateProducts={this.updateProducts}
        products={this.state.products}/>
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

ReactDOM.render(<App/>, document.getElementById('build-kit'))

