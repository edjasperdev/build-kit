import  React, { Component } from 'react'

class BundleOption extends Component{
    constructor(props){

        super(props)
        this.state={
            selected: false,
            isHovered: false
        }
    }

    handleClick(count){
        this.setState({selected: true})
        console.log('state', count, this.state.selected)
        this.props.handleOptionClick(count)

    }

    toggleKitCount(){
        this.setState({
            isHovered: !this.state.isHovered
        })
    }


    render(){
        let { item } = this.props
        return(
            <div
                className={`kit-option ${this.state.selected ? 'selected' : ''}`}
                onClick={ (item) => this.handleClick(item) }
                onMouseLeave={() => this.toggleKitCount()}
                onMouseEnter={() => this.toggleKitCount()}>
                { item }
                {this.state.isHovered ? <div style={{opacity: 100}} className="show-count"><p>{this.props.item}</p></div>: null}
                <p style={this.style} className='title'>{item}</p>

            </div>
        )
    }
}

export default BundleOption