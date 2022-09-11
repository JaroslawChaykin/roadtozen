import {createStore, combineReducers} from 'redux';
import {appReducer} from './app/appReducer';
import {composeWithDevTools} from '@redux-devtools/extension';

const rootReducer = combineReducers({
  app: appReducer
})

export const store = createStore(rootReducer, composeWithDevTools())