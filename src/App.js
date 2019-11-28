import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Tabbar from './Components/Tabbar'
import Title from './Components/Title'

import { connect } from 'react-redux'
import BannerDown from './Components/bannerDown';

class App extends React.Component {
  render() {
    return <div>


      {
      this.props.isXianshi ?
      <div>
        <Title />
        <Tabbar />
        {
          this.props.isShow ?
            <BannerDown /> :
            null
        }
       
      </div>
      :null
      }
 {this.props.children}
    </div>
  }
}
const mapStateToProps = (state) => {
  return {
    isShow: state.isShow,
    isXianshi:state.isXianshi
  }
  //可以接受传过来的属性，也可以自由定制。
}
export default connect(mapStateToProps)(App);
