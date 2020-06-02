import {reducer as headerReducer} from '../../src/common/header/store';
import {reducer as HomeReducer} from '../../src/pages/home/store';
import {reducer as DetailReducer} from '../../src/pages/detail/store';
import {reducer as LoginReducer} from '../../src/pages/login/store';
import {combineReducers} from 'redux-immutable';
export default combineReducers({
    header: headerReducer,
    home: HomeReducer,
    detail: DetailReducer,
    login: LoginReducer
})
