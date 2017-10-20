import  React, { Component } from 'react'
import BundleOption from './BundleOption'

import Slider from 'react-slick';

class BundleOptions extends React.Component {
    render () {
        let settings = {
            dots: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: false
        };
        return (
            <div>
            <Slider {...settings}>
                {[1, 2, 3, 4, 5, 6].map((i) => {
                    return <BundleOption
                        count={i} key={i}
                        onOptionClick={ this.handleOptionClick }
                    />
                })
                }
            </Slider>
            </div>
        );
    }
}


export default BundleOptions