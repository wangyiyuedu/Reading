import React,{Component} from 'react'
import {hide,show} from '../action/actionBanner'
import {connect} from 'react-redux'
class Classification extends Component {
    render(){
        return <div>
           Classification
        </div>
    }

    componentWillMount(){
        // store.dispatch(hide())
        this.props.hide()
    }
    componentWillUnmount(){
        // store.dispatch(show())
       this.props.show()
    }
}

const mapDispatchToProps = {
    show,
    hide
  }
export default connect(null,mapDispatchToProps)(Classification)