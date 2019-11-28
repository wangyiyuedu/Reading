import React,{Component} from 'react'
import style from './index.module.scss'
class BannerDown extends Component {
    render() {
        return <div>
            <section className={style.bannerBox}>
                <a href="http://m.yuedu.163.com/newuser/index.do">
                    <img src="/imgs/web_banner_down.png"/>
                </a>
            </section>
        </div>
    }
}

export default BannerDown