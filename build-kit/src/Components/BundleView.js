import  React, { Component } from 'react'
import Lip1 from '../assets/PeachPleaseLip.jpg'
import Lip2 from '../assets/BrownBareLip.jpg'
import Lip3 from '../assets/BrandNudeLip.jpg'
class BundleView extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div className="kit-image">
                {/*<img src={Lip1} alt="" style={{opacity: 1}}/>*/}
                {/*<img src={Lip2} alt=""/>*/}
                {/*<img src={Lip3} alt=""/>*/}
            </div>
            )
    }
}

export default BundleView