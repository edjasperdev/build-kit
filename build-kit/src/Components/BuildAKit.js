import React, { Component } from 'react'
import BundleOptions from './BundleOptions'
import BundleView from './BundleView'
import { isEmpty } from 'lodash'

class BuildAKit extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: [],
      showCount: true,
      showBuyButton: false,
      products: [],
      loading: true

    }
    this.handleOptionClick = this.handleOptionClick.bind(this)
    this.handleCancelClick = this.handleCancelClick.bind(this)
    this.showCount = this.showCount.bind(this)
  }


  componentWillMount() {
    let { products } = this.state
    this.props.client.fetchQueryProducts({ collection_id: '484501000', sort_by: 'title-ascending' })
      .then((collection) => {
        collection.map((product) => {
          products.push({
            title:product.title,
            image1:product.images[0].src,
            image2:product.images[1].src,
            productId:product.id
          })
          console.log('products', products)
          this.setState({products, loading: false})

        })
      console.log('collection', collection)
      // this.setState({
      //   products: res,
      // });
    });

    // this.props.client.fetchShopInfo().then((res) => {
    //   console.log('shopInfo', res)
    //   // this.setState({
    //   //   shop: res,
    //   // });
    // });
  }




  renderOptionText () {
    let {selected} = this.state
    if (selected.length == 0) {
      return 'Choose Your First Shade'
    } else if (selected.length == 1) {
      return 'Choose Your Second Shade'
    } else if (selected.length == 2) {
      return 'Choose Your Third Shade'
    } else {
      return 'Congrats! You\'ve made a beautiful kit'
    }
  }

  handleCancelClick (item) {
    let {selected} = this.state
    let index = selected.indexOf(item)
    if (selected.length === 1) {
      selected = []
    } else if (index > -1) {
      selected.splice(index, 1)
    }

    console.log('new', selected)
    this.setState({selected})
  }
  getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
      indexes.push(i);
    }
    return indexes;
  }
  // var indexes = getAllIndexes(Cars, "Nano");

  showCount (item) {
    let {selected} = this.state
    let count = []
    if(isEmpty(selected)){
      count = [1]
    }
    else {
      let indexes = this.getAllIndexes(selected, item)
      if(indexes.length === 1){
        count.push(selected.indexOf(item) + 1)
      } else{
        indexes.map((index) => {
          count.push(index + 1)
        })
      }
      console.log('count', count)
    }
    console.log('count', count)
    return count
  }

  handleOptionClick (count) {
    let {selected} = this.state
    console.log('kit count', count)
    console.log('kit state', selected)

    selected.push(count)
    console.log('new state', selected)
    this.setState({
      selected
    })
  }

  render () {
    let {selected} = this.state
    console.log(selected)
    return (
      <div className='build-a-kit'>
        <BundleView
          numSelected={selected.length}
          showBuyButton={selected.length === 3}/>
        <div className="show-selected-option">
          {selected.map((option, i) => {
            return <p key={i}>{`${i + 1}. ${option.title}`}</p>
          })}
        </div>
        <div className="product-list">
          <div className="showContainer">
            <div className="showList"><p>{this.renderOptionText()}</p></div>
          </div>

          <BundleOptions
            loading={this.state.loading}
            products={this.state.products}
            cancelOption={this.cancelClick}
            toggleKitCount={() => this.handleHover()}
            showCount={this.state.showCount}
            count={this.state.selected.length + 1}
            countNumber={this.showCount}
            optionClick={this.handleOptionClick}
            handleCancelClick={this.handleCancelClick}/>
        </div>
      </div>)
  }
}

export default BuildAKit