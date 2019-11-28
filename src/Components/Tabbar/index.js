import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './index.module.scss'

class Tabbar extends Component {

    render() {
        return <div >
            <div id={style.tabbar}>
            <ul>
                <li><NavLink to="/male" activeClassName={style.myactive}>男频<span></span></NavLink></li>
                <li><NavLink to="/female" activeClassName={style.myactive}>女频<span></span></NavLink></li>
                <li><NavLink to="/publish" activeClassName={style.myactive}>出版<span></span></NavLink></li>
                <li><NavLink to="/classification" activeClassName={style.myactive}>分类<span></span></NavLink></li>
                <li><NavLink to="/free" activeClassName={style.myactive}>免费<span></span></NavLink></li>
                <li><NavLink to="/ranking" activeClassName={style.myactive}>排行<span></span></NavLink></li>
            
            </ul>

            </div>
        </div>
    }
}

export default Tabbar