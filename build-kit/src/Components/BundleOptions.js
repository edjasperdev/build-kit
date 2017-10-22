import React from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import BundleOption from './BundleOption'

class BundleOptions extends React.Component {
  render () {
    let settings = {
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
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
          {[1, 2, 3, 4, 5, 6].map((i) => {
            return(
              <div>
                <div
                  style={{display: 'inline-block', width: '150px',  height: '150px'}}
                  className="kit-option"
                  onClick={ this.handleClick }>
                  { i }
                </div>

              </div>
            )
          })
          }
        </Slider>
      </div>
    )
  }
}

export default BundleOptions