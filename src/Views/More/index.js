import React, { Component } from 'react'

import { xianshi, yincang } from '../action/actionUpper'
import { connect } from 'react-redux'
class More extends Component {
    render() {
        return <div>
            woshi 更多dddddddddddddddddddddd
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
export default connect(null, mapDispatchToProps)(More)