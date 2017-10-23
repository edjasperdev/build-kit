import  React, { Component } from 'react'

class BundleOption extends Component{


    handleClick(){
        console.log('heyy')
    }


    render(){
        let { count, optionClick } = this.props
        return(
            <div
                className="kit-option"
                onClick={ optionClick }>
                { count }
            </div>
        )
    }
}

export default BundleOption