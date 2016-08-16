/**
 * Created by xiaobing on 2016/8/10.
 */
import {createStore,applyMiddleware,combineReducers,compose} from 'redux';
import thunk from 'redux-thunk';
import accountReducer  from './reducers/accountReducer';
import routeReducer from './reducers/routeReducer';

const logger = (store) => (next) => (action) => {
    console.log('dispatching:', action);
    return next(action);
};

const reducers = combineReducers({accountReducer: accountReducer, routeReducer: routeReducer});

const store = createStore(reducers,compose(applyMiddleware(logger, thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));
export default store;