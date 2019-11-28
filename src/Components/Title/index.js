import React, { Component } from 'react'
import style from './index.module.scss'
import { NavLink } from 'react-router-dom'
class Title extends Component {
    render() {
        return <div id={style.title}>
            <h1 className={style.logo}></h1>
            <div className={style.titleFr}>
                <a href="#" className={style.search}></a>
                <NavLink to="/login" className={style.account}></NavLink>
            </div>
        </div>
    }
}

export default Title