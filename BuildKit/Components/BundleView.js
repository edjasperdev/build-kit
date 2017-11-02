import React, { Component } from 'react'
let Lip1 = 'https://cdn.shopify.com/s/files/1/1583/0411/files/PeachPleaseLip.jpg?18333247606503215986'
let Lip2 = 'https://cdn.shopify.com/s/files/1/1583/0411/files/BrownBareLip.jpg?18333247606503215986'
let Lip3 = 'https://cdn.shopify.com/s/files/1/1583/0411/files/BrandNudeLip.jpg?18333247606503215986'

class BundleView extends Component {
  constructor (props) {
    super(props)
  }

  showStyle (num) {
    if (num <= this.props.numSelected) {
      return {opacity: 1}
    } else {
      return {opacity: .3}
    }
  }


  render () {
    return (
      <div className="bundle-view">
        <div className="kit-image">
          <img src={Lip1} alt="" style={this.showStyle(1)}/>
          <img src={Lip2} alt="" style={this.showStyle(2)}/>
          <img src={Lip3} alt="" style={this.showStyle(3)}/>
        </div>
          {this.props.showBuyButton ? <div onClick={() => this.props.addToCart()}><button className='buy-button' >Add Kit to Cart!</button></div> : null}
      </div>
    )
  }
}

export default BundleView