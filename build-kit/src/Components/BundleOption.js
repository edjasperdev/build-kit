import React, { Component } from 'react'
import { isEmpty } from 'lodash'

class BundleOption extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: false,
      isHovered: false,
      count: null,
      countNumber: null,
      selectedTwice: false,
      selectedThrice: false
    }
  }

  componentWillMount(){
    if(!isEmpty(this.props.product.selected)){
      this.setState({
          selected: true,
          countNumber: this.props.product.selected
        })
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      countNumber: this.props.countNumber(this)
    })
  }

  handleClick (product) {
    if (!this.state.selected) {
      this.setState({count: this.props.count, selected: true})
      console.log('state', product, this.state.selected)
      this.props.handleOptionClick(product)
    }
  }

  handleDuplicateClick (product) {
    let count = this.props.countNumber(product)
    if (this.state.selected) {
      this.setState({selectedTwice: true, selectedTwiceCount: count[1]})
      this.props.handleOptionClick(product)
    }
  }

  showKitCount () {
    if (!this.state.selected) {
      this.setState({
        isHovered: true
      })
    }
  }

  hideKitCount () {
    this.setState({
      isHovered: false
    })
  }

  showCount () {
    let style = ''
    if (this.state.selected) {
      style = 'show-count'
      if (this.state.selectedTwice) {
        style = style + ' twice'
      }
    }
    else if (this.state.isHovered) {
      style = 'show-count'
    }
    return style
  }

  handleCancelClick (product) {
    let {countNumber} = this.state
    if (countNumber.length > 1) {
      this.setState({
        selected: true,
        selectedTwice: false,
        countNumber: [countNumber[0]]
      })
    } else {
      this.setState({
        selected: false,
        selectedTwice: false,
        countNumber: [countNumber[0]]
      })
    }
    this.props.handleCancelClick(product)

  }

  countNumber (product) {
    let countNumber = this.props.countNumber(product)
    this.setState({countNumber})
  }

  render () {
    let {product, count} = this.props
    let {countNumber, selected, selectedTwice} = this.state
    return (
      <div>
        {this.state.selected ? <span className='close-button' onClick={() => this.handleCancelClick()}> X</span> : null}
        <div
          className={`kit-option ${this.state.selected ? 'selected' : ''}`}
          onClick={(product) => this.handleClick(product)}
          onMouseEnter={() => this.showKitCount()}
          onMouseLeave={() => this.hideKitCount()}
        >

          {/*<div style={{opacity: 100}} className="show-count"><p>{item}</p></div>*/}

          <div className={`option ${this.showCount()}`}>
            <p>{selected ? countNumber[0] : count}</p>
            {selected && selectedTwice ? <p>{countNumber[1]}</p> : null}
          </div>


        </div>
        <div className="info-text">
          <p style={this.style} className='title'>{product.title}</p>
          {this.state.selected ?
            <p onClick={(product) => this.handleDuplicateClick(product.title)} className='duplicate'>Duplicate?</p> : null}
        </div>
      </div>
    )
  }
}

export default BundleOption