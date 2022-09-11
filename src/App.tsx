import React from 'react';
import './App.css';
import {useDispatch} from 'react-redux';
import {changeLang, changeTheme, initializeApp} from './store/app/appReducer';

function App() {
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={() => dispatch(initializeApp())}>Init</button>
      <button onClick={() => dispatch(changeTheme('white'))}>Theme</button>
      <button onClick={() => dispatch(changeLang('EN'))}>Lang</button>
    </div>
  );
}

export default App;
