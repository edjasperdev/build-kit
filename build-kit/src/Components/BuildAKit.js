import React, {Component} from 'react'
import BundleOptions from "./BundleOptions";
import BundleView from "./BundleView";

class BuildAKit extends Component {
    constructor(props){
        super(props)

        this.state = {
            selected: [],
            showCount: true
        }
        this.handleOptionClick = this.handleOptionClick.bind(this)
    }



    renderOptionText(){
        let { selected } = this.state
        if(selected.length == 0){
            return 'Choose Your First Shade'
        } else if(selected.length == 1){
            return 'Choose Your Second Shade'
        } else if(selected.length == 2){
            return 'Choose Your Third Shade'
        } else{
            return "Congrats! You've made a beautiful kit"
        }
    }

    cancelClick(count){
        let selected
    }

    handleHover(){
        console.log('yep')
        if(this.state.selected.length <= 3){
            this.setState({showCount: true})
        } else{
            this.setState({showCount: false})
        }
    }

    handleOptionClick(count){
        let { selected } = this.state
        console.log('kit count', count)
        console.log('kit state', selected)

        selected.push(count)
        console.log('new state', selected)
        this.setState({
            selected
        })
    }

    render() {
        let { selected } = this.state
        console.log(selected)
        return (
            <div className='build-a-kit'>
                <BundleView numSelected={selected.length}/>
            <div className="show-selected-option">
                {selected.map((option, i) => {
                    return <p key={i}>{`${i+1}. ${option}`}</p>
                })}
            </div>
            <div className="product-list">
                <div className="showContainer">
                    <div className="showList"><p>{this.renderOptionText()}</p></div>
                </div>

                <BundleOptions
                    cancelOption={this.cancelClick}
                    toggleKitCount={() => this.handleHover()}
                    showCount={this.state.showCount}
                    count={this.state.selected.length + 1 }
                    optionClick={this.handleOptionClick} />
            </div>
        </div>)
    }
}

export default BuildAKit