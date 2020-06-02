import React, { Component }from 'react';
import {CSSTransition} from "react-transition-group";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import  {actionCreator} from './store/';
import {actionCreators as loginactionCreators} from '../../pages/login/store/';
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch,SearchInfoItem} from './style';

class Header extends Component {
    getListArea () {
        const {list, page, focused, mouseIn, totalPage} = this.props;
        const pageList =[];
        const newList= list.toJS();
        if (newList.length) {
            for (let i = (page-1)*10; i < page * 10; i++) {
                if (i < newList.length)
                    pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>);
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={this.props.handleMouseEnter} onMouseLeave={this.props.handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=>this.props.handleChangePage(page,totalPage, this.spinIcon)}>
                            <i ref={(icon)=>{this.spinIcon = icon}} className='iconfont spin'>&#xe8e7;</i>
                            换一换</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {pageList}
                    </div>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
    render() {
        return (
            <HeaderWrapper>
                <Link to="/">
                 <Logo/>
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'><div className='iconfont'>&#xe655;</div></NavItem>
                    {this.props.login ?
                        <NavItem className='right' onClick={this.props.logout}>退出</NavItem> :
                        <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
                    }
                    <SearchWrapper>
                        <CSSTransition in={this.props.focused} timeout={200} classNames='slide'>
                            <NavSearch className={this.props.focused ? 'focused' : ''} onFocus={()=>this.props.handleInputFocus(this.props.list)} onBlur={this.props.handleInputBlur}></NavSearch>
                        </CSSTransition>
                        <div className={this.props.focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe604;</div>
                        {this.getListArea()}
                    </SearchWrapper>
                    <Addition>
                        <Link to="/write">
                        <Button className='writting'>
                            <div className='iconfont'>&#xe65f;</div>
                            写文章</Button>
                        <Button className='reg'>注册</Button>
                        </Link>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        )
    }
}

// const getListArea = (show) =>{
//
// }

// class Header extends Component {
//
//     render() {
//         return (
//             <HeaderWrapper>
//                <Logo href='/'/>
//                 <Nav>
//                     <NavItem className='left active'>首页</NavItem>
//                     <NavItem className='left'>下载App</NavItem>
//                     <NavItem className='right'><div className='iconfont'>&#xe655;</div></NavItem>
//                     <NavItem className='right'>登录</NavItem>
//                         <SearchWrapper>
//                             <CSSTransition in={this.props.focused} timeout={200} classNames='slide'>
//                                 <NavSearch className={this.props.focused ? 'focused' : ''} onFocus={this.props.handleInputFocus} onBlur={this.props.handleInputBlur}></NavSearch>
//                             </CSSTransition>
//                             <div className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe604;</div>
//                         </SearchWrapper>
//                     <Addition>
//                         <Button className='writting'>
//                             <div className='iconfont'>&#xe65f;</div>
//                             写文章</Button>
//                         <Button className='reg'>注册</Button>
//                     </Addition>
//                 </Nav>
//             </HeaderWrapper>
//         )
//     }
// }

const mapStateToProps = (state) => {
    return{
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(['login','login'])
    }
}
const mapDispatchToProps =  (dispatch) => {
    return{
       handleInputFocus(list) {
           if (list.size===0){
               dispatch(actionCreator.getList());
           }
           dispatch(actionCreator.searchFocus());
       },
        handleInputBlur () {
           dispatch(actionCreator.searchBlur());
       },
       handleMouseEnter () {
           dispatch(actionCreator.mouseEnter());
       },
        handleMouseLeave () {
           dispatch(actionCreator.mouseLeave());
        },
        handleChangePage (page, totalPage,spin) {
           let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
           if (originAngle) {
               originAngle = parseInt(originAngle,10);
           }else {
               originAngle = 0;
           }
           spin.style.transform = 'rotate('+(originAngle + 360)+'deg)';
           if (page < totalPage) {
               dispatch(actionCreator.changePage(page+1))
           } else {
               dispatch(actionCreator.changePage(1))
           }
           // dispatch(actionCreator.changePage());
        },
        logout () {
              dispatch(loginactionCreators.logout())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
