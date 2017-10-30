import React, { Component } from 'react'

class BundleOption extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: false,
      isHovered: false,
      count: null,
      countNumber: null,
      selectedTwice: false,
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      countNumber: this.props.countNumber(this)
    })
  }

  handleClick (item) {
    if (!this.state.selected) {
      this.setState({count: this.props.count, selected: true})
      console.log('state', item, this.state.selected)
      this.props.handleOptionClick(item)
    }
  }

  handleDuplicateClick (item) {
    let count = this.props.countNumber(item)
    if (this.state.selected) {
      this.setState({selectedTwice: true, selectedTwiceCount: count[1]})
      this.props.handleOptionClick(item)
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

  handleCancelClick (item) {
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
    this.props.handleCancelClick(item)

  }

  countNumber (item) {
    let countNumber = this.props.countNumber(item)
    this.setState({countNumber})
  }

  render () {
    let {item, count} = this.props
    let {countNumber, selected, selectedTwice, selectedTwiceCount} = this.state
    return (
      <div>
        {this.state.selected ? <span className='close-button' onClick={() => this.handleCancelClick()}> X</span> : null}
        <div
          className={`kit-option ${this.state.selected ? 'selected' : ''}`}
          onClick={(item) => this.handleClick(item)}
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
          <p style={this.style} className='title'>{item.title}</p>
          {this.state.selected ?
            <p onClick={(item) => this.handleDuplicateClick(item.title)} className='duplicate'>Duplicate?</p> : null}
        </div>
      </div>
    )
  }
}

export default BundleOption