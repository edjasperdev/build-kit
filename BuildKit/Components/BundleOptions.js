import React from 'react'

import Slider from 'react-slick'
// import 'slick-carousel/slick/slick-theme.css'
// import 'slick-carousel/slick/slick.css'
import BundleOption from './BundleOption'
import { findIndex, findLastIndex, pullAt } from 'lodash'

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
    this.getThisCount(product)
    this.props.optionClick(product)
  }

  getThisCount(product){
    return this.getAllIndexes(this.props.selected, product.title)
  }

  getAllIndexes (arr, val) {
    let indexes = []
    arr.map((e,i) => {
      if(e.title === val.title)
      indexes.push(i)
    })
    return indexes
  }

  isSelected(product){
    let {selected} = this.props
    let indexes = this.getAllIndexes(selected, product)
    // indexes.map((index) => index + 1)
    if(indexes.length > 0) {
      return indexes
    }
    console.log('isSelected', product.title, indexes, indexes.length)
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
          {this.props.products.map((product, i) => {
            return (
              <div
                key={i}
                className='kit-option-container'
                style={{display: 'inline-block'}}>
                {this.listOptions}
                <BundleOption
                  product={product}
                  thisCount={this.isSelected(product) ? this.isSelected(product) : null}
                  // thisSecondCount={}
                  // productIndex={this.isSelected(product)}
                  nextCount={this.props.selected.length < 4 ? this.props.selected.length + 1 : null}
                  handleOptionClick={e => this.props.optionClick(product,e)}


                  doneKit={this.props.doneKit}
                  countNumber={e => this.props.countNumber(product, e)}

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