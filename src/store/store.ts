import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {appReducer} from './App/appReducer';
import {postReducer} from './Posts/postReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  app: appReducer,
  posts: postReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))