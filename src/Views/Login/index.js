import React, { Component } from 'react'

import { xianshi, yincang } from '../action/actionUpper'
import { connect } from 'react-redux'
class Login extends Component {
    render() {
        return <div>
            Login
        </div>
    }
    componentWillMount() {
        this.props.yincang()
    }
    componentWillUnmount() {
        this.props.xianshi()
    }
}
const mapDispatchToProps = {
    xianshi,
    yincang
}
export default connect(null, mapDispatchToProps)(Login)