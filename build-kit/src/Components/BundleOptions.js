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

  products = [
    {
      title: 'Dope Taupe',
      image1: 'https://cdn.shopify.com/s/files/1/1583/0411/files/Deep_Brown_Bare.jpg?8065515360427617192'
    }
  ]
  componentWillMount(){
    let {products} = this.props
    this.setState({
      products
    })
  }

  handleClick (count) {
    console.log('options count', count)
    console.log('options props', this.props)
    this.props.optionClick(count)
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
        {this.props.loading ?
          <p>Loading</p> :
          <Slider {...settings}>
          {this.state.products.map((item, i) => {
            return (
              <div
                key={i}
                className="kit-option-container"
                style={{display: 'inline-block'}}>
                {this.listOptions}
                <BundleOption
                  item={item}
                  count={this.props.count}
                  countNumber={e => this.props.countNumber(item, e)}
                  handleOptionClick={e => this.handleClick(item, e)}
                  handleCancelClick={e => this.props.handleCancelClick(item, e)}/>

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