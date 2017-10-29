import  React, { Component } from 'react'

class BundleOption extends Component{
    constructor(props){

        super(props)
        this.state={
            selected: false,
            isHovered: false,
            count: null,
            selectedTwice: false

        }
    }

    handleClick(item){
        this.setState({count: this.props.count, selected: true})
        console.log('state', item, this.state.selected)
        this.props.handleOptionClick(item)

    }



    toggleKitCount(){
        this.setState({
            isHovered: !this.state.isHovered
        })
    }

    showCount(){
        if(this.state.selected || this.state.isHovered){
            return 'show-count'
        } else{
            return ''
        }
    }

    handleCancelClick(){
        this.props.handleCancelClick()
    }

    handleDuplicateClick(){
        console.log('dupe click')
    }



    render(){
        let { item } = this.props
        return(
          <div>
              { this.state.selected ? <span className='close-button' onClick={() => this.handleCancelClick()}> X</span> : null }
            <div
                className={`kit-option ${this.state.selected ? 'selected' : ''}`}
                onClick={ (item) => this.handleClick(item) }
                onMouseLeave={() => this.toggleKitCount()}
                onMouseEnter={() => this.toggleKitCount()}>
                { item }
                {/*<div style={{opacity: 100}} className="show-count"><p>{item}</p></div>*/}

                <div className={`option ${this.showCount()}`}><p>{this.props.count}</p></div>
                {/*<div className={`option show-count`}><p>{this.props.count}</p></div> : null }*/}


            </div>
              <div className="info-text">
                <p style={this.style} className='title'>{item}</p>
                  {this.state.selected ? <p onClick={() => this.handleDuplicateClick()} className='title'>Duplicate?</p> : null }
              </div>
          </div>
        )
    }
}

export default BundleOption