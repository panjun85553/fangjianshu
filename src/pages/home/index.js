import React, { PureComponent } from "react";
import { HomeWrapper, HomeLeft, HomeRight, BackTop} from "./style";
import {connect} from "react-redux";
import Topic from './components/Topic';
import Writer from './components/Writer';
import Recommend from "./components/Recommend";
import {actionCreator} from './store';
import List from "./components/List";
class Home extends PureComponent {
  handleScrollTop(){
       window.scrollTo(0,0);
    }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            src="https://upload.jianshu.io/admin_banners/web_images/4969/efed5888b8c06b5eae2e58bf6181846de4246178.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            className="banner-img"
            alt=""
          ></img>
            <Topic/>
            <List/>
        </HomeLeft>
        <HomeRight>
            <Recommend/>
            <Writer/>
        </HomeRight>
          {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop>:null}
      </HomeWrapper>
    );
  }
componentDidMount() {
   this.props.changeHomeData();
   this.bindEvents();
}
bindEvents() {
  window.addEventListener('scroll', this.props.changeScrollTopShow);
}
componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
}
}


const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home','showScroll'])
})
const mapDispatchToProps = (dispatch) => ({
    changeHomeData () {
        dispatch(actionCreator.getHomeInfo());
    },
    changeScrollTopShow(){
        if (document.documentElement.scrollTop > 400) {
            dispatch(actionCreator.triggerTopShow(true));
        }else {
            dispatch(actionCreator.triggerTopShow(false));
        }
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);
