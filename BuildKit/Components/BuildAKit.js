import React, { Component } from 'react'
import BundleOptions from './BundleOptions'
import BundleView from './BundleView'
import { findLastIndex, isEmpty } from 'lodash'

class BuildAKit extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: [],
      showCount: true,
      showBuyButton: false,
      loading: props.loading
    }
    this.handleOptionClick = this.handleOptionClick.bind(this)
    this.handleCancelClick = this.handleCancelClick.bind(this)
    this.showCount = this.showCount.bind(this)
  }

  componentWillMount () {
    let selected = JSON.parse(sessionStorage.getItem('selected'))
    let {products} = this.props
    if (selected) {
      this.setState({
        startScreen: false,
        loading: false,
        products: products,
        selected: selected
      })
    } else {
      this.setState({products: products, loading: false})
    }
  }

  updateProducts (products) {
    this.setState({
      products
    })
  }

  addToCart () {
    let {selected} = this.state
    console.log('selected', selected)
    sessionStorage.setItem('selected', JSON.stringify(selected))
    document.getElementById('option_1').value = selected[0].title
    document.getElementById('option_2').value = selected[1].title
    document.getElementById('option_3').value = selected[2].title
    document.getElementById('add').click()
  }

  renderOptionText () {
    let {selected} = this.state
    if (selected.length == 0) {
      return 'First Shade'
    } else if (selected.length == 1) {
      return 'Second Shade'
    } else {
      return 'Third Shade'
    }
  }

  scrollToTop () {
    if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
      window.scrollBy(0, -50)
      requestAnimationFrame(scrollToTop)
    }
  }

  handleCancelClick (item) {
    let {selected} = this.state
    let index = findLastIndex(selected, ['title', item.title])
    selected.splice(index, 1)
    selected.map((option) => {
      if (option.selected === 1) {
        return option
      } else {
        return option.selected = option.selected - 1
      }
    })
    this.setState({selected})
  }

  getAllIndexes (arr, val) {
    var indexes = [], i = -1
    while ((i = arr.indexOf(val, i + 1)) != -1) {
      indexes.push(i)
    }
    return indexes
  }

  showCount (item) {
    let {selected} = this.state
    let count = []
    if (isEmpty(selected)) {
      count = [1]
    }
    else {
      let indexes = this.getAllIndexes(selected, item)
      if (indexes.length === 1) {
        count.push(selected.indexOf(item) + 1)
      } else {
        indexes.map((index) => {
          count.push(index + 1)
        })
      }
    }
    return count
  }
  //
  // updateProductCache (item) {
  //   let products = JSON.parse(localStorage.getItem('kitState'))
  //   products.map((product, i) => {
  //     if (product.id === item.id) products[i] = item
  //   })
  //   localStorage.setItem('kitState', JSON.stringify(products))
  //   return products
  // }

  handleOptionClick (item) {
    let {selected} = this.state
    selected.push(item)
    this.setState({selected})
  }

  render () {
    let {selected} = this.state
    return (
      <div className={`build-a-kit ${this.props.loading ? '' : 'show'}`}>
        <BundleView client={this.props.client}
                    addToCart={() => this.addToCart()}
                    numSelected={selected.length}
                    showBuyButton={selected.length === 3}/>
        <div className="show-selected-option">
          {selected.map((option, i) => {
            return <p key={i}>{`${i + 1}. ${option.title}`}</p>
          })}
        </div>
        <div className={`buy-button-mobile ${selected.length === 3 ? 'enabled' : ''}`}>
          <button onClick={() => this.addToCart()}>Add Your Kit to Cart!</button>
        </div>
        <div className={`product-list ${selected.length === 3 ? 'disabled' : ''}`}>
          <div className="showContainer">
            <div className="showList"><p>{this.renderOptionText()}</p></div>
          </div>
          <BundleOptions
            selected={this.state.selected}
            loading={this.state.loading}
            products={this.props.products}
            cancelOption={this.cancelClick}
            doneKit={selected.length === 3}
            showCount={this.state.showCount}
            count={this.state.selected.length + 1}
            countNumber={this.showCount}
            optionClick={this.handleOptionClick}
            handleCancelClick={this.handleCancelClick}/>
        </div>
      </div>)
  }
}

export default BuildAKit