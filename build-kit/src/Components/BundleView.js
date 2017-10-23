import  React, { Component } from 'react'

class BundleView extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div className="kit-image">
                {this.props.view ? 'Start Screen' : 'Build Kit' }
            </div>
            )
    }
}

export default BundleView