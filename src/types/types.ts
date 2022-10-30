import {CHANGE_LANG, CHANGE_THEME, INITIALIZE_APP} from '../store/App/appReducer';
import {ADD_POST, ADD_POSTS, DELETE_POST} from '../store/Posts/postReducer';

// APP REDUCER
export type ThemeType = 'Black' | 'White'
export type LangType = 'RU' | 'EN'

export type AppActionsTypes = initializeActionType | changeThemeActionType | changeLangActionType

export type initializeActionType = {
  type: typeof INITIALIZE_APP
}
export type changeThemeActionType = {
  type: typeof CHANGE_THEME
}
export type changeLangActionType = {
  type: typeof CHANGE_LANG
}
// POST REDUCER
export type PostsActionsTypes = AddPostActionType | AddPostsActionType | DeletePostActionType

export type PostType = {
  id: number
  title: string
  body: string
  completed: boolean
}
export type AddPostActionType = {
  type: typeof ADD_POST
  payload: PostType
}
export type AddPostsActionType = {
  type: typeof ADD_POSTS
  payload: Array<PostType>
}
export type DeletePostActionType = {
  type: typeof DELETE_POST
  payload: number
}
export type AxiosPostsType = {
  data: Array<PostType>
}