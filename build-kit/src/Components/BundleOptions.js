import React from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import BundleOption from './BundleOption'

class BundleOptions extends React.Component {

  constructor(props){
    super(props);
      this.state={
        isHovered: false
      }
      this.handleClick = this.handleClick.bind(this)
  }



  products=[
      {title: 'Dope Taupe',
          image1: 'https://cdn.shopify.com/s/files/1/1583/0411/files/Deep_Brown_Bare.jpg?8065515360427617192'
      }
  ];
  style={
    // bottom : this.state.isHovered ? '4px' : '75px'
  };

  handleClick(count){
      console.log('options count', count)
      console.log('options props', this.props)
      this.props.optionClick(count)
  }

  render () {


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
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }]
    }
    return (
      <div>
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => {
            return(
              <div
                key={i}
                  className="kit-option-container"
                  style={{display: 'inline-block'}}>
                  <BundleOption item={item} handleOptionClick={e => this.handleClick(item,e)} />

              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}

export default BundleOptions