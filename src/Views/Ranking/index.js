import React,{Component} from 'react'
import {hide,show} from '../action/actionBanner'
import {connect} from 'react-redux'
class Ranking extends Component {
    render(){
        return <div>
           Ranking
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
export default connect(null,mapDispatchToProps)(Ranking)