import React, { PureComponent } from "react";
import {connect} from "react-redux";
import {actionCreator} from '../store';
import {Link} from 'react-router-dom';
import {ListItem,ListInfo, LoadMore} from "../style"
class List extends PureComponent {
  render() {
    return (
        <div>
            {
                this.props.list.map((item,index) => {
                   return (
                       <Link key={index} to={'./detail/'+ item.get('id')}>
                           <ListItem>
                               <img className='pic' src={item.get('imgUrl')} alt=''></img>
                               <ListInfo>
                                   <h3 className='title'>{item.get('title')}</h3>
                                   <p className='desc'>{item.get('desc')}</p>
                               </ListInfo>
                               <i className='iconfont diamond'>&#xe603;{item.get('diamond')}</i>
                               <i className='writer'>{item.get('writer')}</i>
                               <i className='iconfont message'>&#xe629;{item.get('message')}</i>
                               <i className='iconfont like'>&#xe611;{item.get('like')}</i>
                           </ListItem>
                       </Link>
                   )
                })
            }
            <LoadMore onClick={() =>this.props.getMoreList(this.props.page)}>更多文字</LoadMore>
        </div>
    )
  }
}
const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
})
const mapDispatchToProps = (dispatch) => ({
    getMoreList (page) {
        dispatch(actionCreator.getMoreList(page))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(List);
