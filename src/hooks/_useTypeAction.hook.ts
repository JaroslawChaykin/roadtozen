import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import {initializeApp, changeLang, changeTheme} from '../store/App/appReducer';
import {getPosts} from '../store/Posts/postReducer';

const useTypeActionsHook = () => {
  const dispatch = useDispatch()
  return bindActionCreators({
    initializeApp,
    changeLang,
    changeTheme,
    getPosts
  }, dispatch)
}

export { useTypeActionsHook }