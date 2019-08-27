import {combineReducers} from 'redux'
import homeReducer from './containers/HomePage/reducer'
import featureReducer from './containers/FeaturePage/reducer'

const appReducer = combineReducers({
       homeReducer,
       featureReducer
})
export default appReducer;