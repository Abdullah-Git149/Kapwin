import { createStore, applyMiddleware, combineReducers } from "redux"
import thunkMiddleware from "redux-thunk"
import VideoReducer from "./reducers/VideoReducer"
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducers = combineReducers({
    VideoReducer
})

const middleWares = [thunkMiddleware]
const Store = createStore(rootReducers, composeWithDevTools(applyMiddleware(...middleWares)))
export default Store