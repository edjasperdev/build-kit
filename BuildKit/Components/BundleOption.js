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
      selectedTwiceCount:null,
      selectedThrice: false,
        image1:this.props.product.image1,
        image2:this.props.product.image2
    }
    this.whichImage = this.whichImage.bind(this)
    this.handleDuplicateClick = this.handleDuplicateClick.bind(this)
  }

  componentWillMount(){
    let { thisCount } = this.props
    if(thisCount && thisCount.length > 0){
      this.setState({
          selected: true,
          selectedTwice: thisCount.length > 1,
          secondTwiceCount: thisCount.length > 1 ? this.props.thisCount[1] : null

        })
    }
  }

  componentWillReceiveProps (nextProps) {
    this.whichImage()
    // secondTwiceCount: this.props.thisCount.length > 1 ? this.props.thisCount[1]
    // this.setState({
    //   countNumber: this.props.countNumber(this)
    // })
  }

  handleClick (product) {
    if (!this.state.selected){
      this.setState({selected: true})
      this.props.handleOptionClick(product)
    }
  }

  handleDuplicateClick (product) {
    // let secondTwiceCount = this.props.productIndex[1]
    this.props.handleOptionClick(product)
    if (this.state.selected) {
      this.setState({
        selectedTwice: true,
        selectedTwiceCount: this.props.thisCount[1]
      })
    }
  }

  showKitCount () {
    if (!this.state.selected && !this.props.doneKit) {
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

  whichImage(){
    let {image1, image2 } = this.state
      let style = {backgroundImage: `url(${image1}`}
      if (this.state.selected) {
          style = {backgroundImage: `url(${image2}`}
      }
      else if (this.state.isHovered) {
          style = {backgroundImage: `url(${image2}`}
      }
      return style
  }

  handleCancelClick (product) {
    let {thisCount} = this.props
    if (thisCount.length > 1) {
      this.setState({
        selected: true,
        selectedTwice: false
      })
    } else {
      this.setState({
        selected: false,
        selectedTwice: false,
      })
    }
    this.props.handleCancelClick(product)

  }

  countNumber (product) {
    let countNumber = this.props.countNumber(product)
    this.setState({countNumber})
  }

  render () {
    let {thisCount, product, nextCount} = this.props
    let {selected, selectedTwice} = this.state
    let firstCount = thisCount ? parseFloat(thisCount[0]) + 1 : null
    let secondCount = thisCount ? parseFloat(thisCount[1]) + 1 : null
    return (
      <div>
        {this.state.selected ? <span className='close-button' onClick={() => this.handleCancelClick()}> X</span> : null}
        <div
          className={`kit-option ${this.state.selected ? 'selected' : ''}`}
          style={this.whichImage()}
          onClick={(product) => this.handleClick(product)}
          onMouseEnter={() => this.showKitCount()}
          onMouseLeave={() => this.hideKitCount()}
        >

          {/*<div style={{opacity: 100}} className="show-count"><p>{item}</p></div>*/}

          <div className={`option ${this.showCount()}`}>
            <p>{selected ? firstCount : nextCount}</p>
            {selected && selectedTwice ? <p>{secondCount}</p> : null}
          </div>


        </div>
        <div className="info-text">
          <p style={this.style} className='title'>{product.title}</p>
          {this.state.selected ?
            <p onClick={(product) => this.handleDuplicateClick(product.title)} className='duplicate'>Add Another</p> : null}
        </div>
      </div>
    )
  }
}

export default BundleOption