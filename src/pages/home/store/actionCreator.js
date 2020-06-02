import axios from "axios";
import {fromJS} from "immutable";
import * as actionTypes from "./actionTypes";
export const changeHomeData = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    RecommendList: result.RecommendList
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('./api/home.json').then((res) => {
            const result = res.data.data;
            dispatch (changeHomeData(result));
        }).catch(() =>{
            console.log('error');
        })
    }
}

export const addHomeList = (result, nextPage) => ({
    type: actionTypes.ADD_HOME_LIST,
    list: fromJS (result),
    nextPage
})

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('./api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
            console.log(result);
            dispatch (addHomeList(result, page+1));
        }).catch(() =>{
            console.log('error');
        })
    }
}

export const triggerTopShow = (show) => ({
    type: actionTypes.TRIGGER_TOP_SHOW,
    show
})
