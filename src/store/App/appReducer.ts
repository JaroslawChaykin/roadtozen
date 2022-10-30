import {
  AppActionsTypes,
  changeLangActionType,
  changeThemeActionType,
  initializeActionType,
  LangType,
  ThemeType
} from '../../types/types';
import {AppStateType} from '../store';

export const CHANGE_THEME = 'CHANGE_THEME';
export const CHANGE_LANG = 'CHANGE_LANG';
export const INITIALIZE_APP = 'INITIALIZE_APP';

const initialState = {
  theme: 'Black' as ThemeType,
  lang: 'RU' as LangType,
  isInitialized: false
};

export const appReducer = (state = initialState, action: AppActionsTypes) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: state.theme === 'Black' ? 'White' : 'Black'
      };
    case CHANGE_LANG:
      return {
        ...state,
        lang: state.lang === 'RU' ? 'EN' : 'RU'
      };
    case INITIALIZE_APP:
      return {
        ...state,
        isInitialized: true
      }
    default:
      return state;
  }
};

// Actions
export const initializeApp = (): initializeActionType => ({type: INITIALIZE_APP})
export const changeTheme = (): changeThemeActionType => ({type: CHANGE_THEME})
export const changeLang = (): changeLangActionType => ({type: CHANGE_LANG})

// Selects
export const allAppState = (state: AppStateType) => state.app
