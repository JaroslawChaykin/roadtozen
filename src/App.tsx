import React from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {allAppState, changeLang, changeTheme, initializeApp} from './store/App/appReducer';
import PostsList from './components/Posts/PostsList';
import {getPosts} from './store/Posts/postReducer';

function App() {
  const dispatch = useDispatch()
  const {theme, lang} = useSelector(allAppState)

  return (
    <div className="App">
      <h1>Hello</h1>
      <span>
        Theme now: {theme}
      </span>
      <br/>
      <span>
        Lang now: {lang}
      </span>
      <br/>
      <button onClick={() => dispatch(initializeApp())}>Init</button>
      <button onClick={() => dispatch(changeTheme())}>Theme</button>
      <button onClick={() => dispatch(changeLang())}>Lang</button>
      <button onClick={() => dispatch(getPosts())}>GetPost</button>
      <PostsList/>
    </div>
  );
}

export default App;
