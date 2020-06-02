import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    RecommendList: [],
    articlePage: 1,
    showScroll: false
});
export default (state = defaultState,action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                RecommendList: fromJS(action.RecommendList)
            });
        case actionTypes.ADD_HOME_LIST:
            return state.set('articleList',state.get('articleList').concat(action.list)).set('articlePage', action.nextPage);
        case actionTypes.TRIGGER_TOP_SHOW:
            return state.set('showScroll', action.show);
        default:
            return state;
    }
}
