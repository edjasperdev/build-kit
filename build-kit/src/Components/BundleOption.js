import  React, { Component } from 'react'

class BundleOption extends Component{
    constructor(props){

        super(props)
        this.state={
            selected: false,
            isHovered: false
        }
    }

    handleClick(item){
        console.log(item)
        this.setState({selected: true})
        console.log('state', item, this.state.selected)
        this.props.handleOptionClick(item)

    }

    toggleKitCount(){
        this.setState({
            isHovered: !this.state.isHovered
        })
    }


    render(){
        let { item } = this.props
        return(
          <div>
            <div
                className={`kit-option ${this.state.selected ? 'selected' : ''}`}
                onClick={ (item) => this.handleClick(item) }
                onMouseLeave={() => this.toggleKitCount()}
                onMouseEnter={() => this.toggleKitCount()}>
                { item }
                <div style={{opacity: 100}} className="show-count"><p>{item}</p></div>
                {/*{this.state.isHovered ? <div style={{opacity: 100}} className="show-count"><p>{item}</p></div>: null}*/}


            </div>
              <p style={this.style} className='title'>{item}</p>
              <p style={this.style} className='title'>{item}</p>
          </div>
        )
    }
}

export default BundleOption