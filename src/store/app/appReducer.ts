import {
  ActionType,
  changeLangActionType,
  changeThemeActionType,
  initializeActionType,
  LangType,
  ThemeType
} from '../../types/types';

export const CHANGE_THEME = 'CHANGE_THEME';
export const CHANGE_LANG = 'CHANGE_LANG';
export const INITIALIZE_APP = 'INITIALIZE_APP';

type AppType = typeof initialState

const initialState = {
  theme: 'black' as ThemeType,
  lang: 'RU' as LangType,
  isInitialized: false
};

export const appReducer = (state = initialState, action: ActionType): AppType => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload
      };
    case CHANGE_LANG:
      return {
        ...state,
        lang: action.payload
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

export const initializeApp = (): initializeActionType => ({type: INITIALIZE_APP})
export const changeTheme = (theme: ThemeType): changeThemeActionType => ({type: CHANGE_THEME, payload: theme})
export const changeLang = (lang: LangType): changeLangActionType => ({type: CHANGE_LANG, payload: lang})
