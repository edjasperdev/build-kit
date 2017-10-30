import React, { Component } from 'react'
import Lip1 from '../assets/PeachPleaseLip.jpg'
import Lip2 from '../assets/BrownBareLip.jpg'
import Lip3 from '../assets/BrandNudeLip.jpg'

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
      <div>
        <div className="kit-image">
          <img src={Lip1} alt="" style={this.showStyle(1)}/>
          <img src={Lip2} alt="" style={this.showStyle(2)}/>
          <img src={Lip3} alt="" style={this.showStyle(3)}/>
        </div>
        {this.props.showBuyButton ? <div className='buy-button'>Buy Now</div>: null}
      </div>
    )
  }
}

export default BundleView