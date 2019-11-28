import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import bannerdownReducer from './Reducer/bannerdownReducer'
import upperPartReducer from './Reducer/upperPartReducer'
// import reduxPromise from 'redux-promise'
// import reduxThunk from 'redux-thunk'

const reducer = combineReducers({
    isShow: bannerdownReducer,

    isXianshi:upperPartReducer
    
}) //{} store 唯一state

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ 
    composeEnhancers(applyMiddleware()))

//返回值是什么，状态就被改成什么了
export default store