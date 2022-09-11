// Typescript Type
import {CHANGE_LANG, CHANGE_THEME, INITIALIZE_APP} from '../store/app/appReducer';

export type ThemeType = 'black' | 'white'
export type LangType = 'RU' | 'EN'
export type ActionType = {
  type: string,
  payload: any
}
// Actions
export type initializeActionType = {
  type: typeof INITIALIZE_APP
}
export type changeThemeActionType = {
  type: typeof CHANGE_THEME
  payload: ThemeType
}
export type changeLangActionType = {
  type: typeof CHANGE_LANG
  payload: LangType
}