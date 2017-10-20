import  React, { Component } from 'react'

class BundleOption extends Component{
    constructor(props){
        super(props)
    }

    handleClick(){
        console.log('heyy')
    }


    render(){
        let { count } = this.props
        return(
            <div
                className="kit-option"
                onClick={ this.handleClick }>
                { count }
            </div>
        )
    }
}

export default BundleOption