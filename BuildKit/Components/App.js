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
      loading: true,
    }
  }

  // componentWillReceiveProps(nextProps){
  //   let element = document.getElementById("screen")
  //   document.getElementById("screen").addEventListener("transitionend",( e ) => {
  //     element.classList.remove('start')
  //   })
  // }

  // componentWillMount () {
  //   let selected = JSON.parse(sessionStorage.getItem('selected'))
  //   console.log(selected)
  //   let selectedState = []
  //   if (selected) {
  //     debugger
  //     products.map((product) => {
  //       selected.map((choice, i) => {
  //         let selectedArray = choice.selected.map((select) => select)
  //         if(product.title === choice.title) {
  //           product.selected = selectedArray
  //         }
  //       })
  //       return product
  //     })
  //     console.log(selected)
  //
  //     this.setState({
  //       startScreen: false,
  //       loading: false,
  //       products: products,
  //       selected: selected
  //     })
  //   } else {
  //     this.setState({products: products, loading: false})
  //   }
  // }
  // updateProducts(products){
  //
  //   this.setState({
  //     products
  //   })
  // }


  handleStartClick () {
    document.getElementById('screen').classList.add('start')
    let element = document.getElementById("screen")
    document.getElementById("screen").addEventListener("transitionend",( e ) => {
      element.classList.remove('start')
    })
    setTimeout(() => {
      this.setState({startScreen: false})
    }, 1000);

  }

  // getAllIndexes (arr, val) {
  //   var indexes = [], i = -1
  //   while ((i = arr.indexOf(val, i + 1)) != -1) {
  //     indexes.push(i)
  //   }
  //   return indexes
  // }
  //
  // showCount (item) {
  //   let {selected} = this.state
  //   let count = []
  //   if (isEmpty(selected)) {
  //     count = [1]
  //   }
  //   else {
  //     let indexes = this.getAllIndexes(selected, item)
  //     if (indexes.length === 1) {
  //       count.push(selected.indexOf(item) + 1)
  //     } else {
  //       indexes.map((index) => {
  //         count.push(index + 1)
  //       })
  //     }
  //   }
  //   return count
  // }
  //
  // handleOptionClick (item) {
  //   let {selected} = this.state
  //   let {products} = this.props
  //   products.map((product) => {
  //     if(product.title === item.title) {
  //       product.selected.push(selected.length + 1)
  //     }
  //     return product
  //   })
  //   this.props.updateProducts(products)
  //   selected.push(item)
  //   this.setState({
  //     selected
  //   })
  //
  // }
  //
  // handleCancelClick (item) {
  //   console.log('selected', item)
  //   let {selected} = this.state
  //   let index = selected.indexOf(item)
  //   let {products} = this.props
  //   products.map((product) => {
  //     if(product.title === item.title) {
  //       product.selected.pop()
  //     }
  //     return product
  //   })
  //   if (selected.length === 1) {
  //     selected = []
  //   } else if (index > -1) {
  //     selected.splice(index, 1)
  //   }
  //   this.updateProducts(products)
  //   this.setState({selected})
  // }

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
        <h1>Build Your Own Kit $45</h1>
        <article>Subtext description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Etiam bibendum nunc et nulla euismod vestibulum. Sed dictum congue auctor.
        </article>
        <div id='screen'>
          {this.renderScreen()}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('build-kit'))

