import React from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import BundleOption from './BundleOption'

class BundleOptions extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      isHovered: false,
      products: []
    }
    this.handleClick = this.handleClick.bind(this)
  }


  componentWillMount () {
    let {products} = this.props
    this.setState({
      products
    })
  }

  handleClick (product) {
    this.props.optionClick(product)
  }

  render () {
    let {products} = this.props
    console.log('bundle', products)
    let settings = {
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      vertical: false,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: false,
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 415,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }]
    }
    return (
      <div>
        {this.props.loading ? <p>Loading</p> : <Slider {...settings}>
          {this.state.products.map((product, i) => {
            return (
              <div
                key={i}
                className='kit-option-container'
                style={{display: 'inline-block'}}>
                {this.listOptions}
                <BundleOption
                  product={product}
                  count={this.props.count}
                  doneKit={this.props.doneKit}
                  countNumber={e => this.props.countNumber(product, e)}
                  handleOptionClick={e => this.handleClick(product, e)}
                  handleCancelClick={e => this.props.handleCancelClick(product, e)}/>

              </div>
            )
          })}
        </Slider>
        }
      </div>
    )
  }
}

export default BundleOptions